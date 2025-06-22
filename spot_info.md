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

Data correct as of 2025-06-22 02:05:27.976333, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.144  | >20%                    |                 2 |              0.072   |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1752 | >20%                    |                 5 |              0.03504 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1827 | 15-20%                  |                 2 |              0.09135 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1934 | 15-20%                  |                 5 |              0.03868 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2084 | >20%                    |                 2 |              0.1042  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2164 | >20%                    |                 5 |              0.04328 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2186 | <5%                     |                 2 |              0.1093  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2191 | >20%                    |                 2 |              0.10955 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2235 | >20%                    |                 5 |              0.0447  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2255 | 15-20%                  |                 2 |              0.11275 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2282 | 5-10%                   |                 2 |              0.1141  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.247  | >20%                    |                10 |              0.0247  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2476 | >20%                    |                 2 |              0.1238  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2503 | 10-15%                  |                10 |              0.02503 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2544 | 15-20%                  |                 2 |              0.1272  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2574 | 15-20%                  |                 5 |              0.05148 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.262  | >20%                    |                 2 |              0.131   |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2704 | 5-10%                   |                10 |              0.02704 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2726 | >20%                    |                 2 |              0.1363  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.278  | >20%                    |                 2 |              0.139   |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2936 | 15-20%                  |                 2 |              0.1468  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2947 | >20%                    |                 2 |              0.14735 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3005 | <5%                     |                 2 |              0.15025 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3022 | >20%                    |                 2 |              0.1511  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3051 | 15-20%                  |                 5 |              0.06102 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3064 | >20%                    |                 2 |              0.1532  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3109 | >20%                    |                 2 |              0.15545 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3138 | >20%                    |                 5 |              0.06276 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3142 | >20%                    |                 5 |              0.06284 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3153 | >20%                    |                 2 |              0.15765 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3173 | >20%                    |                 2 |              0.15865 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3274 | >20%                    |                 2 |              0.1637  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3354 | 10-15%                  |                 2 |              0.1677  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3358 | <5%                     |                 2 |              0.1679  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3383 | >20%                    |                10 |              0.03383 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3438 | <5%                     |                 5 |              0.06876 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3517 | 10-15%                  |                 2 |              0.17585 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3555 | 10-15%                  |                 2 |              0.17775 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3579 | 5-10%                   |                 2 |              0.17895 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3668 | 15-20%                  |                10 |              0.03668 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3765 | >20%                    |                 2 |              0.18825 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3849 | >20%                    |                 5 |              0.07698 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3894 | >20%                    |                 5 |              0.07788 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3916 | 10-15%                  |                 2 |              0.1958  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.393  | 10-15%                  |                 5 |              0.0786  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3937 | >20%                    |                 2 |              0.19685 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4111 | >20%                    |                 2 |              0.20555 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4146 | >20%                    |                 5 |              0.08292 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4157 | >20%                    |                 2 |              0.20785 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4168 | >20%                    |                 5 |              0.08336 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4185 | >20%                    |                 5 |              0.0837  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4223 | 10-15%                  |                 5 |              0.08446 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4228 | 5-10%                   |                 2 |              0.2114  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4253 | >20%                    |                 5 |              0.08506 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4266 | <5%                     |                 2 |              0.2133  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4279 | >20%                    |                 2 |              0.21395 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4335 | 15-20%                  |                 5 |              0.0867  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4393 | >20%                    |                10 |              0.04393 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4441 | >20%                    |                 2 |              0.22205 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4467 | >20%                    |                 2 |              0.22335 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4537 | 15-20%                  |                 2 |              0.22685 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4565 | >20%                    |                 2 |              0.22825 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4626 | >20%                    |                 2 |              0.2313  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4662 | >20%                    |                 5 |              0.09324 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4688 | >20%                    |                 2 |              0.2344  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.47   | <5%                     |                 5 |              0.094   |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4739 | >20%                    |                 5 |              0.09478 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4742 | >20%                    |                 5 |              0.09484 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4748 | <5%                     |                 5 |              0.09496 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4775 | >20%                    |                 5 |              0.0955  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.49   | 10-15%                  |                 5 |              0.098   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4981 | 5-10%                   |                 2 |              0.24905 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4985 | >20%                    |                 2 |              0.24925 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5001 | >20%                    |                 2 |              0.25005 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5057 | 10-15%                  |                 2 |              0.25285 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5059 | 15-20%                  |                 2 |              0.25295 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5082 | 15-20%                  |                 5 |              0.10164 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5097 | >20%                    |                10 |              0.05097 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5103 | >20%                    |                 5 |              0.10206 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5224 | >20%                    |                 2 |              0.2612  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5242 | 10-15%                  |                 5 |              0.10484 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5249 | 5-10%                   |                 5 |              0.10498 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5299 | >20%                    |                 2 |              0.26495 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.543  | <5%                     |                 5 |              0.1086  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5518 | <5%                     |                 5 |              0.11036 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.552  | 15-20%                  |                 2 |              0.276   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5545 | 10-15%                  |                 5 |              0.1109  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5618 | 10-15%                  |                10 |              0.05618 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5635 | >20%                    |                 5 |              0.1127  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5662 | >20%                    |                10 |              0.05662 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5687 | >20%                    |                 5 |              0.11374 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5688 | >20%                    |                 5 |              0.11376 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5812 | <5%                     |                 5 |              0.11624 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5851 | >20%                    |                 5 |              0.11702 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5887 | >20%                    |                 5 |              0.11774 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5955 | <5%                     |                 5 |              0.1191  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6031 | <5%                     |                 2 |              0.30155 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6106 | <5%                     |                10 |              0.06106 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6111 | >20%                    |                 2 |              0.30555 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6128 | >20%                    |                 5 |              0.12256 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6128 | >20%                    |                 5 |              0.12256 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6196 | >20%                    |                 5 |              0.12392 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6231 | >20%                    |                10 |              0.06231 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6296 | 5-10%                   |                 2 |              0.3148  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6306 | >20%                    |                 2 |              0.3153  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6373 | >20%                    |                10 |              0.06373 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6392 | >20%                    |                 5 |              0.12784 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6436 | >20%                    |                 5 |              0.12872 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6539 | >20%                    |                 2 |              0.32695 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6549 | >20%                    |                 5 |              0.13098 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6559 | >20%                    |                 5 |              0.13118 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6573 | >20%                    |                 5 |              0.13146 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6573 | >20%                    |                10 |              0.06573 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6656 | <5%                     |                 5 |              0.13312 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6675 | 15-20%                  |                10 |              0.06675 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.678  | >20%                    |                10 |              0.0678  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6905 | >20%                    |                 2 |              0.34525 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6965 | <5%                     |                10 |              0.06965 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6965 | 10-15%                  |                 5 |              0.1393  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7029 | 10-15%                  |                 5 |              0.14058 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7068 | 10-15%                  |                 2 |              0.3534  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7145 | 15-20%                  |                10 |              0.07145 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7173 | >20%                    |                10 |              0.07173 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7218 | <5%                     |                 5 |              0.14436 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7248 | 15-20%                  |                10 |              0.07248 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7252 | >20%                    |                 5 |              0.14504 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7322 | >20%                    |                10 |              0.07322 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7401 | >20%                    |                10 |              0.07401 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7443 | 10-15%                  |                10 |              0.07443 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7446 | >20%                    |                10 |              0.07446 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7584 | >20%                    |                10 |              0.07584 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7595 | >20%                    |                10 |              0.07595 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7683 | 15-20%                  |                10 |              0.07683 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7718 | <5%                     |                10 |              0.07718 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7729 | >20%                    |                 5 |              0.15458 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7967 | >20%                    |                 5 |              0.15934 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8151 | <5%                     |                10 |              0.08151 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8238 | >20%                    |                10 |              0.08238 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8257 | 5-10%                   |                 5 |              0.16514 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8279 | >20%                    |                10 |              0.08279 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8319 | >20%                    |                10 |              0.08319 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8395 | >20%                    |                10 |              0.08395 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8436 | 15-20%                  |                10 |              0.08436 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8612 | >20%                    |                10 |              0.08612 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8765 | >20%                    |                10 |              0.08765 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8797 | <5%                     |                10 |              0.08797 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8885 | 15-20%                  |                10 |              0.08885 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9042 | >20%                    |                10 |              0.09042 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9087 | >20%                    |                10 |              0.09087 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9136 | >20%                    |                10 |              0.09136 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9518 | >20%                    |                10 |              0.09518 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9697 | >20%                    |                 2 |              0.48485 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9731 | >20%                    |                10 |              0.09731 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9753 | <5%                     |                10 |              0.09753 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9802 | >20%                    |                 5 |              0.19604 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9957 | >20%                    |                10 |              0.09957 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0105 | >20%                    |                10 |              0.10105 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0121 | >20%                    |                 2 |              0.50605 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0137 | >20%                    |                10 |              0.10137 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0248 | 15-20%                  |                10 |              0.10248 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0254 | >20%                    |                10 |              0.10254 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0334 | 10-15%                  |                10 |              0.10334 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0838 | <5%                     |                 2 |              0.5419  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0908 | 15-20%                  |                10 |              0.10908 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0979 | >20%                    |                 2 |              0.54895 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1153 | 15-20%                  |                10 |              0.11153 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1315 | >20%                    |                10 |              0.11315 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2107 | <5%                     |                 5 |              0.24214 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2373 | 10-15%                  |                10 |              0.12373 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2882 | >20%                    |                10 |              0.12882 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3036 | >20%                    |                10 |              0.13036 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3331 | >20%                    |                 5 |              0.26662 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3647 | >20%                    |                 5 |              0.27294 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.426  | <5%                     |                 5 |              0.2852  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4597 | >20%                    |                 5 |              0.29194 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.5685 | <5%                     |                 2 |              0.78425 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5785 | >20%                    |                10 |              0.15785 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6364 | 10-15%                  |                10 |              0.16364 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6466 | >20%                    |                 2 |              0.8233  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8187 | <5%                     |                10 |              0.18187 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0919 | <5%                     |                10 |              0.20919 |