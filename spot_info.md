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

Data correct as of 2025-03-15 01:41:02.629484, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1215 | 10-15%                  |                 2 |              0.06075 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1323 | 5-10%                   |                 5 |              0.02646 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1731 | >20%                    |                 2 |              0.08655 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1755 | >20%                    |                 5 |              0.0351  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2052 | 15-20%                  |                 2 |              0.1026  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2133 | 5-10%                   |                 5 |              0.04266 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2137 | 5-10%                   |                 2 |              0.10685 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2193 | 5-10%                   |                 2 |              0.10965 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2211 | 10-15%                  |                 2 |              0.11055 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2261 | 15-20%                  |                 5 |              0.04522 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2337 | >20%                    |                 2 |              0.11685 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2362 | 5-10%                   |                10 |              0.02362 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2407 | 15-20%                  |                 2 |              0.12035 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2428 | >20%                    |                 2 |              0.1214  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2433 | 5-10%                   |                 2 |              0.12165 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2474 | >20%                    |                 2 |              0.1237  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2612 | 5-10%                   |                 2 |              0.1306  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2668 | >20%                    |                 2 |              0.1334  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.268  | <5%                     |                 2 |              0.134   |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2719 | 5-10%                   |                10 |              0.02719 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.273  | >20%                    |                 5 |              0.0546  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2774 | >20%                    |                 5 |              0.05548 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2847 | 10-15%                  |                 5 |              0.05694 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2924 | >20%                    |                 2 |              0.1462  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2949 | <5%                     |                 2 |              0.14745 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2979 | 10-15%                  |                10 |              0.02979 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2991 | 5-10%                   |                 2 |              0.14955 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.301  | 10-15%                  |                 2 |              0.1505  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3022 | <5%                     |                 2 |              0.1511  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.303  | >20%                    |                 2 |              0.1515  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3035 | 10-15%                  |                 2 |              0.15175 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3038 | 5-10%                   |                 2 |              0.1519  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.3072 |                         |                 2 |              0.1536  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3183 | 10-15%                  |                 5 |              0.06366 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3319 | >20%                    |                 5 |              0.06638 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | 5-10%                   |                10 |              0.03351 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3407 | >20%                    |                 2 |              0.17035 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3481 | >20%                    |                 2 |              0.17405 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3504 | 5-10%                   |                 5 |              0.07008 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3525 | >20%                    |                 2 |              0.17625 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3576 | >20%                    |                 2 |              0.1788  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3613 | >20%                    |                10 |              0.03613 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3619 | >20%                    |                 2 |              0.18095 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3649 | 10-15%                  |                 5 |              0.07298 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.3694 |                         |                 5 |              0.07388 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3701 | >20%                    |                 5 |              0.07402 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3761 | >20%                    |                 5 |              0.07522 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3761 | >20%                    |                 2 |              0.18805 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3786 | 15-20%                  |                10 |              0.03786 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3856 | 5-10%                   |                10 |              0.03856 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.389  | <5%                     |                 2 |              0.1945  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3913 | 5-10%                   |                 5 |              0.07826 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3925 | >20%                    |                 2 |              0.19625 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4008 | 5-10%                   |                 2 |              0.2004  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4031 | 5-10%                   |                 2 |              0.20155 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4096 | 5-10%                   |                 2 |              0.2048  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4109 | >20%                    |                 5 |              0.08218 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4128 | <5%                     |                 5 |              0.08256 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4132 | 5-10%                   |                 2 |              0.2066  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4142 | 10-15%                  |                10 |              0.04142 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4172 | <5%                     |                 2 |              0.2086  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.4233 | 5-10%                   |                 5 |              0.08466 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4264 | 15-20%                  |                 2 |              0.2132  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4277 | >20%                    |                 5 |              0.08554 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4286 | <5%                     |                10 |              0.04286 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4296 | <5%                     |                 5 |              0.08592 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4311 | <5%                     |                 2 |              0.21555 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4344 | >20%                    |                 2 |              0.2172  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4381 | >20%                    |                 2 |              0.21905 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4447 | >20%                    |                 2 |              0.22235 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4528 | 5-10%                   |                 2 |              0.2264  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4575 | 5-10%                   |                 5 |              0.0915  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4595 | >20%                    |                 5 |              0.0919  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.4649 | <5%                     |                 2 |              0.23245 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4697 | 10-15%                  |                10 |              0.04697 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4709 | <5%                     |                 5 |              0.09418 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.473  | 5-10%                   |                 5 |              0.0946  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4773 | >20%                    |                10 |              0.04773 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4781 | 10-15%                  |                 2 |              0.23905 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4785 | 5-10%                   |                 5 |              0.0957  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4797 | 10-15%                  |                 5 |              0.09594 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4797 | <5%                     |                 5 |              0.09594 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4802 | >20%                    |                 5 |              0.09604 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4803 | 5-10%                   |                10 |              0.04803 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4932 | >20%                    |                 5 |              0.09864 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5003 | >20%                    |                 5 |              0.10006 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5009 | >20%                    |                 5 |              0.10018 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.503  | >20%                    |                 2 |              0.2515  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5084 | >20%                    |                 2 |              0.2542  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5115 | 15-20%                  |                 2 |              0.25575 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5192 | >20%                    |                 2 |              0.2596  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5237 | 5-10%                   |                 5 |              0.10474 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5289 | >20%                    |                 5 |              0.10578 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5388 | >20%                    |                 2 |              0.2694  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5466 | 15-20%                  |                 2 |              0.2733  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5526 | >20%                    |                 5 |              0.11052 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5539 | <5%                     |                 5 |              0.11078 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5541 | >20%                    |                 5 |              0.11082 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5656 | 5-10%                   |                 5 |              0.11312 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5694 | 15-20%                  |                 5 |              0.11388 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5715 | <5%                     |                10 |              0.05715 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5724 | 10-15%                  |                 5 |              0.11448 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5807 | <5%                     |                 5 |              0.11614 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5838 | >20%                    |                 2 |              0.2919  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5849 | 5-10%                   |                 5 |              0.11698 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.591  | >20%                    |                 2 |              0.2955  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.596  | 15-20%                  |                 5 |              0.1192  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6026 | >20%                    |                 2 |              0.3013  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.606  | >20%                    |                 2 |              0.303   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6077 | 10-15%                  |                 5 |              0.12154 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6223 |                         |                10 |              0.06223 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.636  | >20%                    |                10 |              0.0636  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6435 | >20%                    |                10 |              0.06435 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6514 | >20%                    |                 5 |              0.13028 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6639 | >20%                    |                 5 |              0.13278 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.669  | 10-15%                  |                 5 |              0.1338  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6744 | >20%                    |                 5 |              0.13488 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6783 | >20%                    |                 5 |              0.13566 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.6966 | 5-10%                   |                10 |              0.06966 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7039 | >20%                    |                10 |              0.07039 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7083 | >20%                    |                10 |              0.07083 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7152 | >20%                    |                10 |              0.07152 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7225 | <5%                     |                10 |              0.07225 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7231 | >20%                    |                 5 |              0.14462 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7234 | >20%                    |                 2 |              0.3617  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7282 | 5-10%                   |                 5 |              0.14564 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.73   | >20%                    |                10 |              0.073   |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7314 | 5-10%                   |                 2 |              0.3657  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7505 | >20%                    |                 5 |              0.1501  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7517 | 5-10%                   |                10 |              0.07517 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7518 | >20%                    |                10 |              0.07518 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7522 | >20%                    |                 5 |              0.15044 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7525 | <5%                     |                 5 |              0.1505  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7757 | 5-10%                   |                10 |              0.07757 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7765 | <5%                     |                10 |              0.07765 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7932 | >20%                    |                 2 |              0.3966  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8089 | >20%                    |                10 |              0.08089 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8113 | <5%                     |                10 |              0.08113 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.823  | 15-20%                  |                 5 |              0.1646  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8374 | <5%                     |                10 |              0.08374 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8424 | >20%                    |                10 |              0.08424 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8435 | >20%                    |                10 |              0.08435 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.8444 | >20%                    |                 5 |              0.16888 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8523 | 15-20%                  |                10 |              0.08523 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8568 | >20%                    |                10 |              0.08568 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8651 | <5%                     |                10 |              0.08651 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8698 | 5-10%                   |                10 |              0.08698 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8933 | 5-10%                   |                10 |              0.08933 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8941 | >20%                    |                10 |              0.08941 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8985 | >20%                    |                10 |              0.08985 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9067 | 15-20%                  |                 5 |              0.18134 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9078 | >20%                    |                10 |              0.09078 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.92   | 15-20%                  |                10 |              0.092   |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9286 | <5%                     |                10 |              0.09286 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9614 | >20%                    |                 2 |              0.4807  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9822 | 5-10%                   |                10 |              0.09822 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0023 | 10-15%                  |                10 |              0.10023 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0181 | >20%                    |                10 |              0.10181 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0567 | 5-10%                   |                10 |              0.10567 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.0589 | >20%                    |                 2 |              0.52945 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0607 | >20%                    |                 5 |              0.21214 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0897 | >20%                    |                10 |              0.10897 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1108 | <5%                     |                10 |              0.11108 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1281 | 5-10%                   |                10 |              0.11281 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1353 | >20%                    |                10 |              0.11353 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1438 | >20%                    |                10 |              0.11438 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1719 | 15-20%                  |                10 |              0.11719 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1824 | 15-20%                  |                10 |              0.11824 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2964 | 5-10%                   |                 2 |              0.6482  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3153 | 5-10%                   |                 5 |              0.26306 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3243 | >20%                    |                10 |              0.13243 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3495 | >20%                    |                10 |              0.13495 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4204 | >20%                    |                 5 |              0.28408 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4581 | >20%                    |                 5 |              0.29162 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4937 | 10-15%                  |                 5 |              0.29874 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5063 | >20%                    |                10 |              0.15063 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.515  | >20%                    |                10 |              0.1515  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5977 | >20%                    |                 2 |              0.79885 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7336 | >20%                    |                10 |              0.17336 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1696 | 5-10%                   |                10 |              0.21696 |