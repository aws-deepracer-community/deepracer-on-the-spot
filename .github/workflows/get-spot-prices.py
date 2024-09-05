import boto3
import datetime
import requests
import json
import pandas as pd
import argparse

# Initialize a session using Amazon EC2
session = boto3.Session()
ec2_client_init = session.client('ec2')

# Define the instance types and the sort order you are interested in
instance_types = ['g4dn.2xlarge', 'g4dn.4xlarge', 'g4dn.8xlarge', 'g5.2xlarge', 'g5.4xlarge', 'g5.8xlarge', 'g6.2xlarge', 'g6.4xlarge', 'g6.8xlarge', 'g6e.2xlarge', 'g6e.4xlarge', 'g6e.8xlarge']


#Collect data for all regions
regions_details = ec2_client_init.describe_regions()
regions = [region['RegionName'] for region in regions_details['Regions']]

instance_worker_map = {
    '2xlarge': 2,
    '4xlarge': 5,
    '8xlarge': 10
}

# Get the current time and time 24 hours ago
end_time = datetime.datetime.utcnow()
start_time = end_time - datetime.timedelta(days=1)

# Download spot frequency interruptions
url_interruptions = "https://spot-bid-advisor.s3.amazonaws.com/spot-advisor-data.json"
spot_response = requests.get(url=url_interruptions)
spot_advisor = json.loads(spot_response.text)['spot_advisor']

# Function to check spot instance interruption frequency
def get_ec2_spot_interruption(instance=None, os=None, region=None):
    rates = {
        0: "<5%",
        1: "5-10%",
        2: "10-15%",
        3: "15-20%",
        4: ">20%"
    }
    try:
        rate = spot_advisor[region][os][instance]['r']
        result = rates[rate]
    except KeyError:
        result = ""
    return result

# Function to extract the required information
def extract_instance_details(instance_list):
    extracted_details = []
    for instance in instance_list:
        instance_type = instance['InstanceType']
        vcpus = instance['VCpuInfo']['DefaultVCpus']
        memory = instance['MemoryInfo']['SizeInMiB']
        gpu_memory = instance['GpuInfo']['Gpus'][0]['MemoryInfo']['SizeInMiB'] if 'GpuInfo' in instance else 0
        extracted_details.append({
            'InstanceType': instance_type,
            'DefaultVCpus': vcpus,
            'MemoryInMiB': memory,
            'GpuMemoryInMiB': gpu_memory
        })
    return extracted_details

# Extract details
instance_data = extract_instance_details(ec2_client_init.describe_instance_types(InstanceTypes=instance_types)['InstanceTypes'])

# Function to get details for a given InstanceType
def get_instance_details(instance_list, instance_type):
    for instance in instance_list:
        if instance['InstanceType'] == instance_type:
            return {
                'DefaultVCpus': instance['DefaultVCpus'],
                'MemoryInMiB': instance['MemoryInMiB'],
                'GpuMemoryInMiB': instance['GpuMemoryInMiB']
            }
    return None

# Create a list to store the results
results = []

for region in regions:
    ec2_client = session.client('ec2', region_name=region)
    # Retrieve spot price history
    response = ec2_client.describe_spot_price_history(
        InstanceTypes=instance_types,
        ProductDescriptions=['Linux/UNIX'],
        StartTime=start_time,
        EndTime=end_time
    )
    # Process the response to find the lowest price for each instance type
    spot_prices = response['SpotPriceHistory']
    cheapest_prices = {}

    for price in spot_prices:
        instance_type = price['InstanceType']
        instance_details = get_instance_details(instance_data, instance_type)
        vcpu = instance_details['DefaultVCpus']
        ram = instance_details['MemoryInMiB']
        gpu_ram = instance_details['GpuMemoryInMiB']
        instance_size = instance_type.split('.')[1]
        worker_value = instance_worker_map.get(instance_size)
        spot_price = float(price['SpotPrice'])
        availability_zone = price['AvailabilityZone'][:-1]  # Remove the last character from the availability zone
        interruption_frequency = get_ec2_spot_interruption(instance_type, "Linux", region)
        price_per_worker_hour = spot_price / worker_value

        if instance_type not in cheapest_prices or spot_price < cheapest_prices[instance_type]['SpotPrice']:
            cheapest_prices[instance_type] = {
                'SpotPrice': spot_price,
                'AvailabilityZone': availability_zone,
                'vCPU': vcpu,
                'RAM': ram,
                'GPU_RAM': gpu_ram,
                'InterruptionFrequency': interruption_frequency,
                'NumberOfWorkers': worker_value,
                'PricePerWorkerHour': price_per_worker_hour
            }

    # Store the cheapest price for each instance type in the results list
    for instance_type, details in cheapest_prices.items():
        results.append({
            'Region': details['AvailabilityZone'],
            'InstanceType': instance_type,
            'vCPU':details['vCPU'],
            'RAM (GB)': round(details['RAM']/1024),
            'GPU RAM (GB)': round(details['GPU_RAM']/1024),
            'SpotPrice': details['SpotPrice'],
            'InterruptionFrequency': details['InterruptionFrequency'],
            'NumberOfWorkers': details['NumberOfWorkers'],
            'PricePerWorkerHour': details['PricePerWorkerHour']
        })
# Convert the results list to a DataFrame
df = pd.DataFrame(results)

# Function to filter and sort the DataFrame and print to markdown file
def filter_and_sort_table(frequency, sort_by):
    if frequency != 'N/A':
        df_filtered = df[df['InterruptionFrequency'] == frequency]
    else:
        df_filtered = df
    df_sorted = df_filtered.sort_values(by=sort_by)
    
    with open('spot_info.md', 'w') as file:
        file.write('# Spot Prices and Interruption Frequency\n\n')
        file.write('## This page provides: -\n\n')
        file.write('Region - the region of the instance (note - some regions would require you to bake your own AMI using the image builder script)\n\n')
        file.write('vCPU - number of vCPUs\n\n')
        file.write('RAM (GB) - amount of memory \n\n')
        file.write('GPU RAM (GB) - amount of GPU memory\n\n')
        file.write('SpotPrice - hourly price of the spot instance\n\n')
        file.write('InterruptionFrequency - the likelihood of your instance experiencing interruption based on the [last month of data](https://aws.amazon.com/ec2/spot/instance-advisor/)\n\n')
        file.write('NumberOfWorkers - the number of robomaker workers the instance can support.  **Important Note** - to get the maximum number of workers specified you need to use OpenGL settings (these are the defaults in system.env now) and you must disable the cameras enabled in run.env to save on CPU cycles\n\n')
        file.write('PricePerWorkerHour - SpotPrice divided by the number of workers the InstanceType can support\n\n')
        file.write('Data correct as of ' + str(datetime.datetime.utcnow()) + ', the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend\n\n')
        file.write(df_sorted.to_markdown(index=False))

# Main function to parse arguments and call the filter_and_sort_table function
def main():
    parser = argparse.ArgumentParser(
        description='Filter and sort EC2 spot instance data.',
        formatter_class=argparse.RawTextHelpFormatter
    )
    parser.add_argument('--sort_order', type=str, default='PricePerWorkerHour', help='Sort order (default: \'PricePerWorkerHour\') (Supported values - \'SpotPrice\', \'PricePerWorkerHour\', \'NumberOfWorkers\', \'InterruptionFrequency\', \'Region\', \'InstanceType\')')
    parser.add_argument('--interruption_filter', type=str, default='N/A', help='Interruption frequency filter (default: \'N/A\') (Supported values - \'N/A\', \'<5%%\', \'5-10%%\', \'10-15%%\', \'15-20%%\', \'>20%%\')')
    args = parser.parse_args()

    filter_and_sort_table(args.interruption_filter, args.sort_order)

if __name__ == '__main__':
    main()