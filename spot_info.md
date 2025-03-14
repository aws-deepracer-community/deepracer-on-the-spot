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

Data correct as of 2025-03-14 01:41:42.496238, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1239 | 10-15%                  |                 2 |              0.06195 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1323 | 5-10%                   |                 5 |              0.02646 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1625 | >20%                    |                 2 |              0.08125 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.173  | >20%                    |                 5 |              0.0346  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2094 | 5-10%                   |                 5 |              0.04188 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2117 | 5-10%                   |                 2 |              0.10585 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2132 | 15-20%                  |                 2 |              0.1066  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2136 | 5-10%                   |                 2 |              0.1068  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2139 | 15-20%                  |                 5 |              0.04278 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2232 | 10-15%                  |                 2 |              0.1116  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2357 | 15-20%                  |                 2 |              0.11785 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2361 | >20%                    |                 2 |              0.11805 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2376 | 5-10%                   |                10 |              0.02376 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2397 | 5-10%                   |                 2 |              0.11985 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2438 | >20%                    |                 2 |              0.1219  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2456 | >20%                    |                 2 |              0.1228  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2566 | >20%                    |                 5 |              0.05132 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2617 | <5%                     |                 2 |              0.13085 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2619 | 5-10%                   |                10 |              0.02619 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2657 | 5-10%                   |                 2 |              0.13285 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2684 | >20%                    |                 5 |              0.05368 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2691 | 10-15%                  |                 5 |              0.05382 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2791 | >20%                    |                 2 |              0.13955 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.286  | 10-15%                  |                10 |              0.0286  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2882 | >20%                    |                 2 |              0.1441  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2888 | 10-15%                  |                 2 |              0.1444  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.2898 |                         |                 2 |              0.1449  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2979 | 5-10%                   |                 2 |              0.14895 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.298  | <5%                     |                 2 |              0.149   |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3059 | 5-10%                   |                 2 |              0.15295 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3062 | >20%                    |                 2 |              0.1531  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.308  | 10-15%                  |                 2 |              0.154   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3105 | <5%                     |                 2 |              0.15525 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3158 | 10-15%                  |                10 |              0.03158 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3215 | 10-15%                  |                 5 |              0.0643  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | 5-10%                   |                10 |              0.03351 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3452 | 5-10%                   |                 5 |              0.06904 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3476 | >20%                    |                 2 |              0.1738  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3493 | >20%                    |                 2 |              0.17465 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3501 | >20%                    |                 2 |              0.17505 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3519 | >20%                    |                 5 |              0.07038 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3526 | >20%                    |                 2 |              0.1763  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3592 | 10-15%                  |                 5 |              0.07184 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3614 | >20%                    |                10 |              0.03614 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3638 | >20%                    |                 2 |              0.1819  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.3694 |                         |                 5 |              0.07388 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3722 | >20%                    |                 5 |              0.07444 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3775 | 5-10%                   |                10 |              0.03775 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3812 | >20%                    |                 5 |              0.07624 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3813 | >20%                    |                 2 |              0.19065 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3843 | 15-20%                  |                10 |              0.03843 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3881 | 5-10%                   |                 5 |              0.07762 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.39   | >20%                    |                 2 |              0.195   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3929 | <5%                     |                 2 |              0.19645 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.398  | 5-10%                   |                 2 |              0.199   |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4033 | 10-15%                  |                10 |              0.04033 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4048 | 5-10%                   |                 2 |              0.2024  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4078 | <5%                     |                 5 |              0.08156 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4087 | 5-10%                   |                 2 |              0.20435 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4096 | 5-10%                   |                 2 |              0.2048  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.4129 | 5-10%                   |                 5 |              0.08258 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4154 | <5%                     |                 2 |              0.2077  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4218 | <5%                     |                10 |              0.04218 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4235 | >20%                    |                 5 |              0.0847  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.424  | >20%                    |                 5 |              0.0848  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4264 | 15-20%                  |                 2 |              0.2132  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4375 | <5%                     |                 2 |              0.21875 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4405 | >20%                    |                 2 |              0.22025 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.4436 | <5%                     |                 2 |              0.2218  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4442 | >20%                    |                 2 |              0.2221  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4452 | <5%                     |                 5 |              0.08904 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4495 | >20%                    |                 2 |              0.22475 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4515 | 5-10%                   |                 2 |              0.22575 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4544 | >20%                    |                10 |              0.04544 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.456  | 5-10%                   |                 5 |              0.0912  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4609 | >20%                    |                 5 |              0.09218 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4738 | <5%                     |                 5 |              0.09476 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4785 | 5-10%                   |                 5 |              0.0957  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4819 | <5%                     |                 5 |              0.09638 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4837 | 10-15%                  |                 2 |              0.24185 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4848 | 5-10%                   |                 5 |              0.09696 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4872 | >20%                    |                 5 |              0.09744 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4877 | 10-15%                  |                 5 |              0.09754 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4879 | 10-15%                  |                10 |              0.04879 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4927 | >20%                    |                 5 |              0.09854 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4928 | 5-10%                   |                10 |              0.04928 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5018 | >20%                    |                 5 |              0.10036 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5031 | >20%                    |                 5 |              0.10062 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.504  | >20%                    |                 2 |              0.252   |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5066 | >20%                    |                 2 |              0.2533  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5115 | 15-20%                  |                 2 |              0.25575 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.521  | >20%                    |                 2 |              0.2605  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.53   | 5-10%                   |                 5 |              0.106   |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5327 | >20%                    |                 5 |              0.10654 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.547  | >20%                    |                 2 |              0.2735  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5476 | 15-20%                  |                 2 |              0.2738  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5511 | >20%                    |                 5 |              0.11022 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.559  | >20%                    |                 5 |              0.1118  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5661 | <5%                     |                 5 |              0.11322 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5663 | 15-20%                  |                 5 |              0.11326 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5676 | 5-10%                   |                 5 |              0.11352 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5688 | 10-15%                  |                 5 |              0.11376 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5823 | >20%                    |                 2 |              0.29115 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5874 | <5%                     |                 5 |              0.11748 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5876 | 5-10%                   |                 5 |              0.11752 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5895 | >20%                    |                 2 |              0.29475 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5918 | <5%                     |                10 |              0.05918 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5924 | 10-15%                  |                 5 |              0.11848 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.5947 |                         |                10 |              0.05947 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5984 | 15-20%                  |                 5 |              0.11968 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5984 | >20%                    |                 2 |              0.2992  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6128 | >20%                    |                 2 |              0.3064  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6349 | >20%                    |                 5 |              0.12698 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6428 | >20%                    |                10 |              0.06428 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6436 | >20%                    |                10 |              0.06436 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6568 | 10-15%                  |                 5 |              0.13136 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.6584 | 5-10%                   |                10 |              0.06584 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6726 | >20%                    |                 5 |              0.13452 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6729 | >20%                    |                 5 |              0.13458 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6806 | >20%                    |                 5 |              0.13612 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.709  | >20%                    |                10 |              0.0709  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7092 | >20%                    |                10 |              0.07092 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7134 | >20%                    |                10 |              0.07134 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.718  | >20%                    |                 5 |              0.1436  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7183 | <5%                     |                10 |              0.07183 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7263 | 5-10%                   |                 5 |              0.14526 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7297 | >20%                    |                 2 |              0.36485 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7308 | >20%                    |                10 |              0.07308 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7325 | 5-10%                   |                 2 |              0.36625 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7505 | >20%                    |                 5 |              0.1501  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7537 | >20%                    |                10 |              0.07537 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7575 | <5%                     |                 5 |              0.1515  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7621 | >20%                    |                 5 |              0.15242 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7667 | 5-10%                   |                10 |              0.07667 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7839 | 5-10%                   |                10 |              0.07839 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7905 | >20%                    |                 2 |              0.39525 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7983 | <5%                     |                10 |              0.07983 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8056 | >20%                    |                10 |              0.08056 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.815  | 15-20%                  |                 5 |              0.163   |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8264 | <5%                     |                10 |              0.08264 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8359 | >20%                    |                10 |              0.08359 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8399 | <5%                     |                10 |              0.08399 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.8448 | >20%                    |                 5 |              0.16896 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8523 | 15-20%                  |                10 |              0.08523 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8547 | >20%                    |                10 |              0.08547 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8733 | >20%                    |                10 |              0.08733 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8761 | <5%                     |                10 |              0.08761 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.877  | 5-10%                   |                10 |              0.0877  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8854 | >20%                    |                10 |              0.08854 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8921 | 5-10%                   |                10 |              0.08921 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.902  | >20%                    |                10 |              0.0902  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9121 | 15-20%                  |                 5 |              0.18242 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9193 | >20%                    |                10 |              0.09193 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9306 | <5%                     |                10 |              0.09306 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9321 | 15-20%                  |                10 |              0.09321 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9805 | 5-10%                   |                10 |              0.09805 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9851 | >20%                    |                 2 |              0.49255 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0131 | 10-15%                  |                10 |              0.10131 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.032  | >20%                    |                10 |              0.1032  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0546 | 5-10%                   |                10 |              0.10546 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0786 | >20%                    |                 5 |              0.21572 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.0886 | >20%                    |                 2 |              0.5443  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0889 | 5-10%                   |                10 |              0.10889 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0893 | >20%                    |                10 |              0.10893 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1079 | <5%                     |                10 |              0.11079 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1401 | >20%                    |                10 |              0.11401 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1404 | >20%                    |                10 |              0.11404 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1739 | 15-20%                  |                10 |              0.11739 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1837 | 15-20%                  |                10 |              0.11837 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2699 | 5-10%                   |                 2 |              0.63495 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3024 | 5-10%                   |                 5 |              0.26048 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.34   | >20%                    |                10 |              0.134   |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4012 | >20%                    |                10 |              0.14012 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4204 | >20%                    |                 5 |              0.28408 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4885 | 10-15%                  |                 5 |              0.2977  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4928 | >20%                    |                 5 |              0.29856 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5224 | >20%                    |                10 |              0.15224 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5251 | >20%                    |                10 |              0.15251 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6453 | >20%                    |                 2 |              0.82265 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7411 | >20%                    |                10 |              0.17411 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1914 | 5-10%                   |                10 |              0.21914 |