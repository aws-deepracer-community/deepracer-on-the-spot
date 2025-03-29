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

Data correct as of 2025-03-29 01:43:40.116679, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.129  | 15-20%                  |                 2 |              0.0645  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1358 | 5-10%                   |                 5 |              0.02716 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.155  | 10-15%                  |                 2 |              0.0775  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | 10-15%                  |                 5 |              0.03178 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 5-10%                   |                 5 |              0.039   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2026 | <5%                     |                 2 |              0.1013  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2162 | >20%                    |                 2 |              0.1081  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2266 | 15-20%                  |                 2 |              0.1133  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 10-15%                  |                10 |              0.02395 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2416 | >20%                    |                 2 |              0.1208  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 15-20%                  |                10 |              0.02419 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.242  | 15-20%                  |                 2 |              0.121   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2442 | 15-20%                  |                 2 |              0.1221  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2511 | >20%                    |                 2 |              0.12555 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.254  | 10-15%                  |                 2 |              0.127   |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2779 | <5%                     |                 2 |              0.13895 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2812 | 5-10%                   |                 2 |              0.1406  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2862 | <5%                     |                 2 |              0.1431  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2898 | 10-15%                  |                10 |              0.02898 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2937 | 10-15%                  |                 2 |              0.14685 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2944 | 5-10%                   |                 2 |              0.1472  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2962 | >20%                    |                 2 |              0.1481  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.297  | <5%                     |                 2 |              0.1485  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.2993 | <5%                     |                10 |              0.02993 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | 15-20%                  |                10 |              0.0301  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3018 | 15-20%                  |                 2 |              0.1509  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3047 | >20%                    |                 2 |              0.15235 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3111 | >20%                    |                 2 |              0.15555 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3188 | 10-15%                  |                 2 |              0.1594  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3215 | 10-15%                  |                 5 |              0.0643  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3338 | >20%                    |                 2 |              0.1669  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3477 | 10-15%                  |                 5 |              0.06954 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3518 | 10-15%                  |                 5 |              0.07036 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3521 | >20%                    |                 2 |              0.17605 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3526 | >20%                    |                10 |              0.03526 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.357  | >20%                    |                 2 |              0.1785  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3597 | >20%                    |                 2 |              0.17985 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3663 | >20%                    |                 5 |              0.07326 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3681 | 15-20%                  |                 5 |              0.07362 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3791 | 5-10%                   |                 5 |              0.07582 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3837 | <5%                     |                 2 |              0.19185 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.384  | >20%                    |                 2 |              0.192   |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3964 | <5%                     |                 2 |              0.1982  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.397  | <5%                     |                 2 |              0.1985  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3985 | >20%                    |                10 |              0.03985 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3986 | 15-20%                  |                 2 |              0.1993  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3988 | >20%                    |                 5 |              0.07976 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4032 | 15-20%                  |                 2 |              0.2016  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4045 | 10-15%                  |                 2 |              0.20225 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.408  | 10-15%                  |                10 |              0.0408  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4115 | >20%                    |                 2 |              0.20575 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4133 | >20%                    |                 2 |              0.20665 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4134 | >20%                    |                 5 |              0.08268 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4142 | <5%                     |                 2 |              0.2071  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.419  | >20%                    |                 5 |              0.0838  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4215 | <5%                     |                 2 |              0.21075 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4275 | >20%                    |                 2 |              0.21375 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4295 | 10-15%                  |                 2 |              0.21475 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4347 | 5-10%                   |                 5 |              0.08694 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.441  | >20%                    |                 2 |              0.2205  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4434 | >20%                    |                 5 |              0.08868 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4459 | >20%                    |                 5 |              0.08918 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4482 | >20%                    |                 2 |              0.2241  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4524 | >20%                    |                 2 |              0.2262  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4579 | 10-15%                  |                 5 |              0.09158 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4582 | 10-15%                  |                 5 |              0.09164 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4585 | >20%                    |                 5 |              0.0917  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4614 | <5%                     |                 5 |              0.09228 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4625 | >20%                    |                 5 |              0.0925  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4654 | 5-10%                   |                 5 |              0.09308 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4708 | >20%                    |                 5 |              0.09416 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4713 | >20%                    |                 5 |              0.09426 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.473  | 5-10%                   |                 2 |              0.2365  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4748 | 5-10%                   |                 5 |              0.09496 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4778 | >20%                    |                 5 |              0.09556 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.481  | >20%                    |                10 |              0.0481  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4832 | >20%                    |                 5 |              0.09664 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.488  | 5-10%                   |                 5 |              0.0976  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.491  | 5-10%                   |                 5 |              0.0982  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4911 | >20%                    |                 5 |              0.09822 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4964 | >20%                    |                 5 |              0.09928 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4977 | 5-10%                   |                 2 |              0.24885 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5005 | >20%                    |                 2 |              0.25025 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.501  | >20%                    |                 5 |              0.1002  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5019 | >20%                    |                 5 |              0.10038 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5024 | >20%                    |                 2 |              0.2512  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5125 | >20%                    |                 5 |              0.1025  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.516  | 15-20%                  |                 5 |              0.1032  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5272 | >20%                    |                 2 |              0.2636  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.5308 | >20%                    |                 2 |              0.2654  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5358 | >20%                    |                 2 |              0.2679  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5455 | 15-20%                  |                 2 |              0.27275 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.548  | <5%                     |                10 |              0.0548  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.55   | >20%                    |                 2 |              0.275   |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5523 | 15-20%                  |                 5 |              0.11046 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5604 | 15-20%                  |                 5 |              0.11208 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5627 | 5-10%                   |                 5 |              0.11254 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5636 | 10-15%                  |                 5 |              0.11272 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5663 | 15-20%                  |                 2 |              0.28315 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5684 | >20%                    |                 2 |              0.2842  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5703 | <5%                     |                10 |              0.05703 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5842 | <5%                     |                 5 |              0.11684 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5846 | 10-15%                  |                10 |              0.05846 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5847 | 10-15%                  |                 5 |              0.11694 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5901 | >20%                    |                 2 |              0.29505 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5928 | <5%                     |                 5 |              0.11856 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5937 | >20%                    |                 5 |              0.11874 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6006 | >20%                    |                 5 |              0.12012 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6053 | <5%                     |                 5 |              0.12106 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6094 | <5%                     |                10 |              0.06094 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6121 | >20%                    |                 5 |              0.12242 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6181 | 10-15%                  |                 5 |              0.12362 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.6269 | 10-15%                  |                10 |              0.06269 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6392 | >20%                    |                10 |              0.06392 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6416 | >20%                    |                10 |              0.06416 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.6619 | >20%                    |                10 |              0.06619 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6697 | 10-15%                  |                 2 |              0.33485 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6703 | >20%                    |                10 |              0.06703 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6712 | >20%                    |                 5 |              0.13424 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6714 | <5%                     |                 5 |              0.13428 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6789 | 15-20%                  |                 5 |              0.13578 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6851 | 10-15%                  |                 5 |              0.13702 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6865 | >20%                    |                10 |              0.06865 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6937 | >20%                    |                 5 |              0.13874 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6982 | 5-10%                   |                10 |              0.06982 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6987 | 5-10%                   |                10 |              0.06987 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7058 | >20%                    |                10 |              0.07058 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7112 | <5%                     |                 2 |              0.3556  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7115 | <5%                     |                10 |              0.07115 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7147 | >20%                    |                10 |              0.07147 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7222 | >20%                    |                 5 |              0.14444 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7327 | 5-10%                   |                10 |              0.07327 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7461 | <5%                     |                 5 |              0.14922 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7481 | >20%                    |                10 |              0.07481 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7486 | 15-20%                  |                 5 |              0.14972 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7677 | <5%                     |                10 |              0.07677 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7684 | >20%                    |                 2 |              0.3842  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7826 | >20%                    |                 5 |              0.15652 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7956 | <5%                     |                10 |              0.07956 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.796  | >20%                    |                10 |              0.0796  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7966 | >20%                    |                10 |              0.07966 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8006 | 10-15%                  |                10 |              0.08006 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8018 | <5%                     |                10 |              0.08018 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8026 | >20%                    |                 2 |              0.4013  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8102 | >20%                    |                10 |              0.08102 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.819  | <5%                     |                10 |              0.0819  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.837  | 15-20%                  |                10 |              0.0837  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8455 | 15-20%                  |                10 |              0.08455 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8484 | >20%                    |                10 |              0.08484 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.859  | 10-15%                  |                 2 |              0.4295  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.86   | 15-20%                  |                 5 |              0.172   |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8669 | >20%                    |                 2 |              0.43345 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8669 | 10-15%                  |                10 |              0.08669 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8917 | <5%                     |                10 |              0.08917 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8932 | <5%                     |                10 |              0.08932 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8997 | >20%                    |                10 |              0.08997 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9068 | >20%                    |                10 |              0.09068 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.925  | 10-15%                  |                10 |              0.0925  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9623 | 5-10%                   |                10 |              0.09623 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0068 | 10-15%                  |                10 |              0.10068 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0131 | >20%                    |                 5 |              0.20262 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.02   | 15-20%                  |                10 |              0.102   |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0332 | >20%                    |                10 |              0.10332 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0821 | <5%                     |                10 |              0.10821 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1174 | 15-20%                  |                10 |              0.11174 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1709 | >20%                    |                 5 |              0.23418 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1836 | 15-20%                  |                10 |              0.11836 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.1919 | >20%                    |                10 |              0.11919 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1996 | <5%                     |                10 |              0.11996 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2295 | >20%                    |                 2 |              0.61475 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2326 | 15-20%                  |                10 |              0.12326 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2352 | 5-10%                   |                 2 |              0.6176  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2683 | <5%                     |                 5 |              0.25366 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2791 | >20%                    |                 5 |              0.25582 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3356 | 15-20%                  |                10 |              0.13356 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4399 | >20%                    |                10 |              0.14399 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.476  | >20%                    |                 5 |              0.2952  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5389 | >20%                    |                10 |              0.15389 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5845 | >20%                    |                10 |              0.15845 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8571 | <5%                     |                10 |              0.18571 |