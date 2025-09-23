# Spot Prices and Interruption Frequency

## This page provides: -

Region - the region of the instance (note - some regions would require you to bake your own AMI using the image builder script)

vCPU - number of vCPUs

RAM (GB) - amount of memory 

GPU RAM (GB) - amount of GPU memory

SpotPrice - hourly price of the spot instance

InterruptionFrequency - the likelihood of your instance experiencing interruption based on the [last month of data](https://aws.amazon.com/ec2/spot/instance-advisor/)

NumberOfWorkers - the number of robomaker workers the instance can support.  **Important Note** - to get the maximum number of workers specified you need to use OpenGL settings (these are the defaults in system.env now) and you must disable the cameras enabled in run.env to save on CPU cycles

PricePerWorkerHour - SpotPrice divided by the number of workers the InstanceType can support

Data correct as of 2025-09-23 01:42:50.301743, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1676 | >20%                    |                 2 |              0.0838  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1782 | >20%                    |                 2 |              0.0891  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1791 | 10-15%                  |                 2 |              0.08955 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1812 | >20%                    |                 2 |              0.0906  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1812 | 5-10%                   |                 2 |              0.0906  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.187  | >20%                    |                 5 |              0.0374  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.235  | 10-15%                  |                 5 |              0.047   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2364 | >20%                    |                 2 |              0.1182  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2472 | >20%                    |                 5 |              0.04944 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2498 | >20%                    |                 2 |              0.1249  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2627 | >20%                    |                 2 |              0.13135 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2935 | >20%                    |                 2 |              0.14675 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3045 | 10-15%                  |                 2 |              0.15225 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.305  | 5-10%                   |                 2 |              0.1525  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3068 | >20%                    |                 2 |              0.1534  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3091 | >20%                    |                10 |              0.03091 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3156 | 15-20%                  |                 2 |              0.1578  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3282 | 15-20%                  |                 2 |              0.1641  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3286 | >20%                    |                 2 |              0.1643  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3291 | 5-10%                   |                 2 |              0.16455 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3335 | >20%                    |                 2 |              0.16675 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3354 | <5%                     |                10 |              0.03354 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.34   | 10-15%                  |                 2 |              0.17    |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3413 | <5%                     |                10 |              0.03413 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.356  | >20%                    |                 2 |              0.178   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3622 | >20%                    |                 5 |              0.07244 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3631 | >20%                    |                 2 |              0.18155 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3673 | >20%                    |                 2 |              0.18365 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3764 | >20%                    |                 5 |              0.07528 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3768 | >20%                    |                 5 |              0.07536 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3795 | >20%                    |                 5 |              0.0759  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.381  | >20%                    |                10 |              0.0381  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.383  | >20%                    |                 2 |              0.1915  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3872 | >20%                    |                 2 |              0.1936  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.389  | >20%                    |                 2 |              0.1945  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4004 | >20%                    |                 2 |              0.2002  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4033 | 10-15%                  |                 5 |              0.08066 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4165 | >20%                    |                 5 |              0.0833  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4192 | >20%                    |                 5 |              0.08384 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4199 | >20%                    |                 2 |              0.20995 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4204 | >20%                    |                 5 |              0.08408 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4267 | 15-20%                  |                 2 |              0.21335 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4278 | >20%                    |                10 |              0.04278 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4291 | >20%                    |                 5 |              0.08582 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4349 | 15-20%                  |                 5 |              0.08698 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4384 | 15-20%                  |                 2 |              0.2192  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4395 | >20%                    |                 2 |              0.21975 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4396 | 5-10%                   |                 2 |              0.2198  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4417 | >20%                    |                 2 |              0.22085 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4467 | 15-20%                  |                10 |              0.04467 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4485 | >20%                    |                 5 |              0.0897  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4517 | >20%                    |                 2 |              0.22585 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4666 | >20%                    |                 2 |              0.2333  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4726 | 10-15%                  |                 2 |              0.2363  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4735 | <5%                     |                 2 |              0.23675 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4756 | 10-15%                  |                 2 |              0.2378  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4819 | >20%                    |                 5 |              0.09638 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4921 | >20%                    |                 5 |              0.09842 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4981 | >20%                    |                 2 |              0.24905 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5032 | 5-10%                   |                 5 |              0.10064 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5041 | >20%                    |                 5 |              0.10082 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5091 | >20%                    |                 5 |              0.10182 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5149 | >20%                    |                 2 |              0.25745 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5155 | >20%                    |                 5 |              0.1031  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.522  | >20%                    |                 5 |              0.1044  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5247 | >20%                    |                 2 |              0.26235 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5281 | >20%                    |                 5 |              0.10562 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5313 | 5-10%                   |                 2 |              0.26565 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5335 | 10-15%                  |                 2 |              0.26675 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5411 | >20%                    |                 2 |              0.27055 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5478 | >20%                    |                 5 |              0.10956 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5481 | >20%                    |                 2 |              0.27405 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5579 | >20%                    |                10 |              0.05579 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5584 | >20%                    |                 5 |              0.11168 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5618 | >20%                    |                 2 |              0.2809  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5648 | >20%                    |                 5 |              0.11296 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5726 | >20%                    |                 5 |              0.11452 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5848 | 5-10%                   |                10 |              0.05848 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5854 | 15-20%                  |                 2 |              0.2927  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5882 | >20%                    |                 5 |              0.11764 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5915 | >20%                    |                 2 |              0.29575 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5984 | >20%                    |                 2 |              0.2992  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6089 | >20%                    |                 5 |              0.12178 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6148 | >20%                    |                 5 |              0.12296 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6165 | 10-15%                  |                 5 |              0.1233  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6231 | 10-15%                  |                 5 |              0.12462 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6238 | 15-20%                  |                 5 |              0.12476 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6393 | >20%                    |                 5 |              0.12786 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6498 | 15-20%                  |                 2 |              0.3249  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.655  | 15-20%                  |                10 |              0.0655  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6592 | >20%                    |                 5 |              0.13184 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6748 | 15-20%                  |                 5 |              0.13496 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6749 | >20%                    |                 5 |              0.13498 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6813 | >20%                    |                 5 |              0.13626 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6825 | >20%                    |                 2 |              0.34125 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6839 | >20%                    |                 5 |              0.13678 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6852 | >20%                    |                 5 |              0.13704 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6856 | >20%                    |                 5 |              0.13712 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6979 | >20%                    |                 5 |              0.13958 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7016 | >20%                    |                 5 |              0.14032 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7022 | 15-20%                  |                10 |              0.07022 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.703  | >20%                    |                 5 |              0.1406  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7083 | >20%                    |                10 |              0.07083 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.711  | >20%                    |                 2 |              0.3555  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7139 | >20%                    |                 5 |              0.14278 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7182 | 15-20%                  |                10 |              0.07182 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7225 | >20%                    |                10 |              0.07225 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7395 | >20%                    |                10 |              0.07395 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7642 | >20%                    |                10 |              0.07642 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7674 | >20%                    |                10 |              0.07674 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7702 | 10-15%                  |                 2 |              0.3851  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7735 | 15-20%                  |                 5 |              0.1547  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7943 | >20%                    |                10 |              0.07943 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8061 | 15-20%                  |                 5 |              0.16122 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8095 | >20%                    |                 5 |              0.1619  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8096 | 10-15%                  |                 2 |              0.4048  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8167 | >20%                    |                 5 |              0.16334 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8464 | <5%                     |                10 |              0.08464 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8475 | >20%                    |                 5 |              0.1695  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8522 | >20%                    |                 5 |              0.17044 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8595 | 15-20%                  |                10 |              0.08595 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8623 | 10-15%                  |                10 |              0.08623 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8642 | >20%                    |                10 |              0.08642 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8745 | >20%                    |                10 |              0.08745 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8873 | 15-20%                  |                10 |              0.08873 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8882 | >20%                    |                 5 |              0.17764 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8947 | 15-20%                  |                10 |              0.08947 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9094 | <5%                     |                10 |              0.09094 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9147 | 10-15%                  |                10 |              0.09147 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9199 | 5-10%                   |                10 |              0.09199 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9222 | >20%                    |                10 |              0.09222 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9286 | 15-20%                  |                10 |              0.09286 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9374 | >20%                    |                10 |              0.09374 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9624 | 10-15%                  |                10 |              0.09624 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9717 | <5%                     |                10 |              0.09717 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9775 | 15-20%                  |                10 |              0.09775 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9879 | 10-15%                  |                 5 |              0.19758 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9973 | 15-20%                  |                10 |              0.09973 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0031 | >20%                    |                 2 |              0.50155 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0183 | >20%                    |                10 |              0.10183 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0442 | >20%                    |                10 |              0.10442 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0597 | >20%                    |                 2 |              0.52985 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0611 | 5-10%                   |                10 |              0.10611 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.067  | >20%                    |                 5 |              0.2134  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0818 | 5-10%                   |                10 |              0.10818 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0899 | >20%                    |                 2 |              0.54495 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1009 | <5%                     |                10 |              0.11009 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1065 | >20%                    |                10 |              0.11065 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1121 | 10-15%                  |                 2 |              0.55605 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1168 | 5-10%                   |                10 |              0.11168 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1169 | 15-20%                  |                10 |              0.11169 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1181 | >20%                    |                 5 |              0.22362 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.1187 | <5%                     |                 2 |              0.55935 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1275 | >20%                    |                10 |              0.11275 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1348 | 10-15%                  |                10 |              0.11348 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1774 | >20%                    |                10 |              0.11774 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.182  | >20%                    |                 5 |              0.2364  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1979 | >20%                    |                10 |              0.11979 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.219  | >20%                    |                 5 |              0.2438  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2317 | 15-20%                  |                10 |              0.12317 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2434 | 5-10%                   |                 2 |              0.6217  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2972 | >20%                    |                10 |              0.12972 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3238 | 10-15%                  |                 5 |              0.26476 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3451 | 10-15%                  |                10 |              0.13451 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4234 | >20%                    |                10 |              0.14234 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5681 | >20%                    |                10 |              0.15681 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6034 | >20%                    |                10 |              0.16034 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6315 | 10-15%                  |                 5 |              0.3263  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7278 | >20%                    |                10 |              0.17278 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.809  | >20%                    |                10 |              0.1809  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0953 | 15-20%                  |                10 |              0.20953 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1232 | 10-15%                  |                10 |              0.21232 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.1663 | >20%                    |                10 |              0.21663 |