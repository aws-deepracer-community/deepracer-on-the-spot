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

Data correct as of 2025-06-30 02:02:50.981190, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1675 | >20%                    |                 5 |              0.0335  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1744 | <5%                     |                 2 |              0.0872  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1912 | >20%                    |                 5 |              0.03824 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | >20%                    |                 5 |              0.039   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1954 | 15-20%                  |                 5 |              0.03908 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2014 | 10-15%                  |                10 |              0.02014 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2027 | 15-20%                  |                 2 |              0.10135 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.209  | 15-20%                  |                 2 |              0.1045  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2142 | >20%                    |                 2 |              0.1071  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2163 | >20%                    |                 2 |              0.10815 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2248 | >20%                    |                 2 |              0.1124  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2306 | 15-20%                  |                 2 |              0.1153  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2341 | >20%                    |                 2 |              0.11705 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2408 | 15-20%                  |                 2 |              0.1204  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2526 | 5-10%                   |                 2 |              0.1263  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2538 | >20%                    |                10 |              0.02538 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2557 | >20%                    |                 2 |              0.12785 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2655 | >20%                    |                 2 |              0.13275 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2684 | <5%                     |                 5 |              0.05368 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2758 | 5-10%                   |                10 |              0.02758 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2792 | >20%                    |                 5 |              0.05584 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2854 | 15-20%                  |                10 |              0.02854 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2895 | 15-20%                  |                 5 |              0.0579  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2986 | >20%                    |                 2 |              0.1493  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3007 | <5%                     |                 2 |              0.15035 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3015 | >20%                    |                 2 |              0.15075 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3106 | >20%                    |                 2 |              0.1553  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3154 | >20%                    |                 2 |              0.1577  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3167 | >20%                    |                 2 |              0.15835 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3214 | >20%                    |                 2 |              0.1607  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3253 | >20%                    |                 2 |              0.16265 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.331  | 10-15%                  |                 2 |              0.1655  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3326 | >20%                    |                10 |              0.03326 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3401 | >20%                    |                 2 |              0.17005 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3413 | <5%                     |                 2 |              0.17065 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3437 | 15-20%                  |                 5 |              0.06874 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3554 | 10-15%                  |                 2 |              0.1777  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.369  | 5-10%                   |                 2 |              0.1845  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3737 | >20%                    |                 2 |              0.18685 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3758 | >20%                    |                 5 |              0.07516 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3767 | 10-15%                  |                 2 |              0.18835 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3832 | >20%                    |                 5 |              0.07664 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3954 | >20%                    |                 2 |              0.1977  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.405  | >20%                    |                 5 |              0.081   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4145 | >20%                    |                 2 |              0.20725 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4165 | 10-15%                  |                 5 |              0.0833  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4182 | 15-20%                  |                10 |              0.04182 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4232 | 10-15%                  |                 2 |              0.2116  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.425  | >20%                    |                 2 |              0.2125  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4254 | <5%                     |                 2 |              0.2127  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4255 | >20%                    |                 5 |              0.0851  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4404 | >20%                    |                 5 |              0.08808 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4493 | >20%                    |                 2 |              0.22465 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4565 | 15-20%                  |                 5 |              0.0913  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4576 | <5%                     |                10 |              0.04576 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4578 | >20%                    |                 2 |              0.2289  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4601 | 5-10%                   |                 2 |              0.23005 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4644 | >20%                    |                 2 |              0.2322  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4647 | 10-15%                  |                 5 |              0.09294 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4648 | >20%                    |                 2 |              0.2324  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4665 | >20%                    |                 5 |              0.0933  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4667 | >20%                    |                 5 |              0.09334 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4708 | >20%                    |                 5 |              0.09416 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4733 | <5%                     |                 5 |              0.09466 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4734 | >20%                    |                 5 |              0.09468 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4759 | 5-10%                   |                 2 |              0.23795 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4759 | 10-15%                  |                 5 |              0.09518 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4763 | >20%                    |                 2 |              0.23815 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4785 | >20%                    |                 5 |              0.0957  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4836 | 15-20%                  |                 2 |              0.2418  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4851 | <5%                     |                 5 |              0.09702 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4856 | >20%                    |                 2 |              0.2428  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5001 | >20%                    |                 2 |              0.25005 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5017 | >20%                    |                 2 |              0.25085 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5024 | >20%                    |                 2 |              0.2512  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5122 | 15-20%                  |                 5 |              0.10244 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5122 | >20%                    |                 5 |              0.10244 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5137 | >20%                    |                 2 |              0.25685 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5256 | 5-10%                   |                 5 |              0.10512 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5282 | 10-15%                  |                 2 |              0.2641  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5351 | <5%                     |                 5 |              0.10702 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5401 | >20%                    |                 2 |              0.27005 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5407 | 15-20%                  |                 2 |              0.27035 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5461 | 10-15%                  |                 5 |              0.10922 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5468 | >20%                    |                 5 |              0.10936 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5547 | 15-20%                  |                 2 |              0.27735 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5551 | >20%                    |                 2 |              0.27755 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5552 | >20%                    |                10 |              0.05552 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5618 | >20%                    |                10 |              0.05618 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5736 | >20%                    |                 5 |              0.11472 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5777 | >20%                    |                 5 |              0.11554 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5812 | >20%                    |                 2 |              0.2906  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5856 | >20%                    |                 5 |              0.11712 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5879 | >20%                    |                10 |              0.05879 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.591  | >20%                    |                 5 |              0.1182  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5961 | <5%                     |                 5 |              0.11922 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6024 | >20%                    |                 5 |              0.12048 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6036 | <5%                     |                 2 |              0.3018  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6053 | >20%                    |                 5 |              0.12106 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6084 | >20%                    |                10 |              0.06084 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6108 | >20%                    |                 5 |              0.12216 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.612  | 10-15%                  |                 5 |              0.1224  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6126 | >20%                    |                 5 |              0.12252 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.615  | >20%                    |                 5 |              0.123   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6224 | 10-15%                  |                10 |              0.06224 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6314 | >20%                    |                 5 |              0.12628 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6372 | >20%                    |                 5 |              0.12744 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6474 | 5-10%                   |                 2 |              0.3237  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6494 | >20%                    |                10 |              0.06494 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6591 | >20%                    |                 5 |              0.13182 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.662  | >20%                    |                 2 |              0.331   |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6684 | <5%                     |                 5 |              0.13368 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6706 | 10-15%                  |                 2 |              0.3353  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6752 | <5%                     |                 5 |              0.13504 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6801 | >20%                    |                 5 |              0.13602 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6851 | 15-20%                  |                10 |              0.06851 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6973 | >20%                    |                 5 |              0.13946 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.6979 | >20%                    |                10 |              0.06979 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7018 | 10-15%                  |                 5 |              0.14036 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7125 | <5%                     |                 5 |              0.1425  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7193 | >20%                    |                10 |              0.07193 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.72   | <5%                     |                 5 |              0.144   |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7202 | >20%                    |                10 |              0.07202 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7264 | >20%                    |                 5 |              0.14528 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7296 | 10-15%                  |                 5 |              0.14592 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7646 | 15-20%                  |                10 |              0.07646 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7649 | >20%                    |                10 |              0.07649 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7662 | >20%                    |                10 |              0.07662 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7662 | >20%                    |                10 |              0.07662 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7822 | 10-15%                  |                10 |              0.07822 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7841 | 15-20%                  |                10 |              0.07841 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7943 | <5%                     |                10 |              0.07943 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7952 | 5-10%                   |                 5 |              0.15904 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7958 | >20%                    |                 5 |              0.15916 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7971 | <5%                     |                10 |              0.07971 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8027 | 15-20%                  |                10 |              0.08027 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8059 | >20%                    |                10 |              0.08059 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8067 | >20%                    |                10 |              0.08067 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8307 | >20%                    |                10 |              0.08307 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8371 | >20%                    |                10 |              0.08371 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8547 | <5%                     |                10 |              0.08547 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8603 | 15-20%                  |                10 |              0.08603 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8654 | <5%                     |                10 |              0.08654 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.866  | >20%                    |                10 |              0.0866  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8722 | >20%                    |                10 |              0.08722 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8782 | >20%                    |                10 |              0.08782 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8887 | >20%                    |                10 |              0.08887 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8895 | >20%                    |                10 |              0.08895 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8917 | >20%                    |                10 |              0.08917 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9193 | >20%                    |                10 |              0.09193 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9236 | >20%                    |                10 |              0.09236 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9268 | 15-20%                  |                10 |              0.09268 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9563 | >20%                    |                10 |              0.09563 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9671 | >20%                    |                10 |              0.09671 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.991  | >20%                    |                10 |              0.0991  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9997 | >20%                    |                10 |              0.09997 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0126 | >20%                    |                10 |              0.10126 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0152 | >20%                    |                 2 |              0.5076  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.027  | >20%                    |                 2 |              0.5135  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0539 | <5%                     |                10 |              0.10539 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0588 | >20%                    |                 5 |              0.21176 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0728 | 15-20%                  |                10 |              0.10728 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0811 | <5%                     |                 2 |              0.54055 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0855 | 10-15%                  |                10 |              0.10855 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0979 | >20%                    |                 2 |              0.54895 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1065 | >20%                    |                10 |              0.11065 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1119 | 15-20%                  |                10 |              0.11119 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1507 | 15-20%                  |                10 |              0.11507 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1714 | >20%                    |                10 |              0.11714 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2134 | 10-15%                  |                10 |              0.12134 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2478 | <5%                     |                 5 |              0.24956 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2583 | >20%                    |                10 |              0.12583 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2745 | >20%                    |                 5 |              0.2549  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2944 | >20%                    |                 2 |              0.6472  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3179 | >20%                    |                 5 |              0.26358 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3654 | >20%                    |                 5 |              0.27308 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4034 | <5%                     |                 5 |              0.28068 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5618 | 10-15%                  |                10 |              0.15618 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8734 | <5%                     |                10 |              0.18734 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8952 | >20%                    |                10 |              0.18952 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1272 | <5%                     |                10 |              0.21272 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      2.1834 | <5%                     |                 2 |              1.0917  |