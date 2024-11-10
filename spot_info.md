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

Data correct as of 2024-11-10 01:40:44.608841, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1317 | 10-15%                  |                 2 |              0.06585 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.159  | >20%                    |                 5 |              0.0318  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 5-10%                   |                 2 |              0.0831  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.182  | 10-15%                  |                 2 |              0.091   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.208  | >20%                    |                 5 |              0.0416  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2097 | >20%                    |                 2 |              0.10485 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2118 | 10-15%                  |                 2 |              0.1059  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2227 | 5-10%                   |                 2 |              0.11135 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 10-15%                  |                 2 |              0.1121  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.225  | >20%                    |                 2 |              0.1125  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.2311 | 5-10%                   |                 2 |              0.11555 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.235  | 5-10%                   |                 5 |              0.047   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2442 | 5-10%                   |                 2 |              0.1221  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2509 | <5%                     |                 2 |              0.12545 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2636 | 5-10%                   |                 2 |              0.1318  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2685 | <5%                     |                 5 |              0.0537  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2718 | <5%                     |                 2 |              0.1359  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2785 | >20%                    |                 2 |              0.13925 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2789 | 5-10%                   |                 2 |              0.13945 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.287  | <5%                     |                 2 |              0.1435  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2875 | 5-10%                   |                 2 |              0.14375 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | 5-10%                   |                 5 |              0.06008 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3099 | <5%                     |                 5 |              0.06198 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.3111 | 10-15%                  |                 5 |              0.06222 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3121 | >20%                    |                 5 |              0.06242 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3167 | <5%                     |                 2 |              0.15835 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3195 | <5%                     |                10 |              0.03195 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3203 | <5%                     |                 5 |              0.06406 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3303 | 10-15%                  |                 2 |              0.16515 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3361 | 5-10%                   |                 2 |              0.16805 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3426 | <5%                     |                10 |              0.03426 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3486 | >20%                    |                 2 |              0.1743  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3495 | <5%                     |                 2 |              0.17475 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3523 | <5%                     |                 2 |              0.17615 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3537 | 15-20%                  |                 2 |              0.17685 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3625 | <5%                     |                 2 |              0.18125 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.363  | >20%                    |                 2 |              0.1815  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3742 | 10-15%                  |                10 |              0.03742 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3762 | 5-10%                   |                 2 |              0.1881  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3816 | <5%                     |                 2 |              0.1908  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3844 | >20%                    |                 2 |              0.1922  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.385  | 5-10%                   |                 5 |              0.077   |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3864 | 5-10%                   |                 5 |              0.07728 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3973 | >20%                    |                 5 |              0.07946 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4    | >20%                    |                 2 |              0.2     |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.4114 | <5%                     |                 2 |              0.2057  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4232 | <5%                     |                 5 |              0.08464 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4262 | <5%                     |                 5 |              0.08524 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4308 | 5-10%                   |                 2 |              0.2154  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4344 | 10-15%                  |                 2 |              0.2172  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4438 | 5-10%                   |                 2 |              0.2219  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4449 | 10-15%                  |                 2 |              0.22245 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4499 | 10-15%                  |                 5 |              0.08998 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4521 | 10-15%                  |                 5 |              0.09042 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4528 | >20%                    |                 5 |              0.09056 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | 5-10%                   |                10 |              0.04529 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4531 | 5-10%                   |                 5 |              0.09062 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4551 | 15-20%                  |                 5 |              0.09102 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4568 | >20%                    |                 2 |              0.2284  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4618 | 5-10%                   |                 5 |              0.09236 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4668 | 5-10%                   |                 5 |              0.09336 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.4676 | >20%                    |                10 |              0.04676 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4697 | 15-20%                  |                 2 |              0.23485 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4698 | >20%                    |                 5 |              0.09396 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4752 | 5-10%                   |                 5 |              0.09504 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.481  | <5%                     |                 2 |              0.2405  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4815 | <5%                     |                 5 |              0.0963  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.485  | >20%                    |                 5 |              0.097   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4872 | <5%                     |                 2 |              0.2436  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4886 | <5%                     |                10 |              0.04886 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4945 | 15-20%                  |                 5 |              0.0989  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5176 | 10-15%                  |                 5 |              0.10352 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5209 | <5%                     |                 5 |              0.10418 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5235 | <5%                     |                 5 |              0.1047  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5249 | >20%                    |                 5 |              0.10498 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5258 | 5-10%                   |                 2 |              0.2629  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5407 | 5-10%                   |                 5 |              0.10814 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5455 | 5-10%                   |                 5 |              0.1091  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5471 | 10-15%                  |                 2 |              0.27355 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5539 | >20%                    |                 5 |              0.11078 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5571 | 15-20%                  |                 2 |              0.27855 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.562  | 10-15%                  |                10 |              0.0562  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5696 | >20%                    |                 5 |              0.11392 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5734 | 15-20%                  |                10 |              0.05734 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5767 | 15-20%                  |                 5 |              0.11534 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5831 | <5%                     |                 5 |              0.11662 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5838 | 15-20%                  |                 2 |              0.2919  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5853 | 10-15%                  |                10 |              0.05853 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5913 | >20%                    |                 5 |              0.11826 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5961 | 10-15%                  |                 5 |              0.11922 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6008 | >20%                    |                10 |              0.06008 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6104 | 5-10%                   |                10 |              0.06104 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6178 | <5%                     |                10 |              0.06178 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6413 | >20%                    |                 5 |              0.12826 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.644  | 5-10%                   |                10 |              0.0644  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6614 | >20%                    |                 2 |              0.3307  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6654 | <5%                     |                 2 |              0.3327  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6667 | 15-20%                  |                 5 |              0.13334 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6781 | 10-15%                  |                10 |              0.06781 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.686  | 5-10%                   |                10 |              0.0686  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6872 | >20%                    |                10 |              0.06872 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6874 | 5-10%                   |                 5 |              0.13748 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7047 | 5-10%                   |                10 |              0.07047 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7165 | 5-10%                   |                 5 |              0.1433  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7167 | >20%                    |                10 |              0.07167 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7282 | <5%                     |                10 |              0.07282 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7447 | 10-15%                  |                10 |              0.07447 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7592 | 15-20%                  |                 5 |              0.15184 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7739 | 15-20%                  |                10 |              0.07739 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7763 | 5-10%                   |                 5 |              0.15526 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7872 | >20%                    |                10 |              0.07872 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7883 | <5%                     |                10 |              0.07883 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8001 | >20%                    |                10 |              0.08001 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8213 | >20%                    |                10 |              0.08213 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8294 | 10-15%                  |                10 |              0.08294 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8406 | 15-20%                  |                10 |              0.08406 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8422 | 5-10%                   |                10 |              0.08422 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8479 | 15-20%                  |                10 |              0.08479 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8659 | 5-10%                   |                10 |              0.08659 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8671 | <5%                     |                 2 |              0.43355 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8705 | <5%                     |                 5 |              0.1741  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8805 | >20%                    |                10 |              0.08805 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8813 | <5%                     |                10 |              0.08813 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8822 | >20%                    |                 5 |              0.17644 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8919 | 5-10%                   |                10 |              0.08919 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9492 | <5%                     |                10 |              0.09492 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9904 | <5%                     |                10 |              0.09904 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9909 | 10-15%                  |                10 |              0.09909 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0132 | 10-15%                  |                10 |              0.10132 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0646 | >20%                    |                10 |              0.10646 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0652 | <5%                     |                10 |              0.10652 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0652 | <5%                     |                10 |              0.10652 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0725 | >20%                    |                10 |              0.10725 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1206 | 15-20%                  |                10 |              0.11206 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.126  | 15-20%                  |                10 |              0.1126  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4146 | >20%                    |                10 |              0.14146 |