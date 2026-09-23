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

Data correct as of 2026-09-23 04:03:40.727954, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0891 | >20%                    |                 2 |              0.04455 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1274 | 15-20%                  |                 2 |              0.0637  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1529 | >20%                    |                 5 |              0.03058 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1849 | 15-20%                  |                 5 |              0.03698 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.2241 |                         |                 5 |              0.04482 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.247  | >20%                    |                 2 |              0.1235  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2495 | >20%                    |                 2 |              0.12475 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2496 | >20%                    |                 2 |              0.1248  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2527 | >20%                    |                 2 |              0.12635 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.253  | >20%                    |                 2 |              0.1265  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2718 | >20%                    |                 2 |              0.1359  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2818 | >20%                    |                 2 |              0.1409  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2893 | 15-20%                  |                 2 |              0.14465 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3071 | 10-15%                  |                 2 |              0.15355 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3091 | >20%                    |                 2 |              0.15455 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3287 | >20%                    |                 2 |              0.16435 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.341  | >20%                    |                 5 |              0.0682  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.365  | >20%                    |                 5 |              0.073   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3716 | 15-20%                  |                 2 |              0.1858  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3729 | >20%                    |                 2 |              0.18645 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.378  | >20%                    |                 5 |              0.0756  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3834 | >20%                    |                10 |              0.03834 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3884 | >20%                    |                 5 |              0.07768 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3887 | <5%                     |                 2 |              0.19435 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3895 | 10-15%                  |                 2 |              0.19475 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4026 | >20%                    |                 2 |              0.2013  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4032 | >20%                    |                 2 |              0.2016  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4271 | >20%                    |                 5 |              0.08542 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4296 | >20%                    |                 5 |              0.08592 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4341 | 5-10%                   |                10 |              0.04341 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4342 | >20%                    |                 2 |              0.2171  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4432 | >20%                    |                 2 |              0.2216  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4446 | >20%                    |                 5 |              0.08892 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4509 | 15-20%                  |                 2 |              0.22545 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4551 | <5%                     |                10 |              0.04551 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4554 | >20%                    |                 5 |              0.09108 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4555 | >20%                    |                10 |              0.04555 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4656 | >20%                    |                 2 |              0.2328  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4759 | 10-15%                  |                 2 |              0.23795 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4845 | 15-20%                  |                 2 |              0.24225 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4855 | >20%                    |                 5 |              0.0971  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4938 | >20%                    |                 5 |              0.09876 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4946 |                         |                 2 |              0.2473  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.497  | <5%                     |                 2 |              0.2485  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.501  | >20%                    |                 5 |              0.1002  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5018 | >20%                    |                 5 |              0.10036 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5051 | >20%                    |                 2 |              0.25255 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5343 | >20%                    |                 2 |              0.26715 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5421 | >20%                    |                 5 |              0.10842 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5453 | >20%                    |                 2 |              0.27265 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5522 | 5-10%                   |                10 |              0.05522 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5534 | >20%                    |                 5 |              0.11068 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5566 | >20%                    |                 5 |              0.11132 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5655 | >20%                    |                 2 |              0.28275 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5805 | >20%                    |                 5 |              0.1161  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5937 | >20%                    |                 5 |              0.11874 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6052 | 15-20%                  |                10 |              0.06052 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6097 | >20%                    |                10 |              0.06097 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6117 | 10-15%                  |                 5 |              0.12234 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6132 | >20%                    |                 2 |              0.3066  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6158 | 15-20%                  |                10 |              0.06158 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6229 | >20%                    |                 5 |              0.12458 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6328 | >20%                    |                 2 |              0.3164  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6356 | 5-10%                   |                 5 |              0.12712 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6457 | 10-15%                  |                 2 |              0.32285 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6495 | >20%                    |                 5 |              0.1299  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6514 | >20%                    |                10 |              0.06514 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.657  | >20%                    |                 5 |              0.1314  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6613 | >20%                    |                 5 |              0.13226 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.666  | 10-15%                  |                10 |              0.0666  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6665 | >20%                    |                 5 |              0.1333  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.688  | <5%                     |                 2 |              0.344   |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6904 | >20%                    |                10 |              0.06904 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6917 | 5-10%                   |                 2 |              0.34585 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6922 | >20%                    |                 2 |              0.3461  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7022 | >20%                    |                10 |              0.07022 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7098 | >20%                    |                 5 |              0.14196 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7111 | 15-20%                  |                 2 |              0.35555 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7349 | >20%                    |                 2 |              0.36745 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.737  | 15-20%                  |                 5 |              0.1474  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7435 | >20%                    |                 5 |              0.1487  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7498 | >20%                    |                10 |              0.07498 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.754  | >20%                    |                 5 |              0.1508  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7546 | >20%                    |                 5 |              0.15092 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7664 | >20%                    |                 2 |              0.3832  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.775  | >20%                    |                 5 |              0.155   |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8266 | >20%                    |                10 |              0.08266 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8398 | 10-15%                  |                 2 |              0.4199  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8446 | 15-20%                  |                10 |              0.08446 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8473 | >20%                    |                 2 |              0.42365 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.848  | >20%                    |                 5 |              0.1696  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8627 | 5-10%                   |                10 |              0.08627 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8662 | 15-20%                  |                 5 |              0.17324 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8777 | >20%                    |                10 |              0.08777 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8823 | >20%                    |                10 |              0.08823 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8842 | >20%                    |                10 |              0.08842 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9118 | <5%                     |                 5 |              0.18236 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9149 | 15-20%                  |                10 |              0.09149 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9226 | >20%                    |                 5 |              0.18452 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9265 | >20%                    |                10 |              0.09265 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9269 | >20%                    |                10 |              0.09269 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9357 | >20%                    |                 5 |              0.18714 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9403 |                         |                 2 |              0.47015 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.9447 | >20%                    |                 2 |              0.47235 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9585 | >20%                    |                10 |              0.09585 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9674 | 10-15%                  |                 2 |              0.4837  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9743 | >20%                    |                10 |              0.09743 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9783 | >20%                    |                10 |              0.09783 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.993  | >20%                    |                10 |              0.0993  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0062 | 15-20%                  |                10 |              0.10062 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.0076 | >20%                    |                 5 |              0.20152 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0216 | >20%                    |                10 |              0.10216 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0292 | >20%                    |                10 |              0.10292 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0387 | 15-20%                  |                10 |              0.10387 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0511 | >20%                    |                10 |              0.10511 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.0527 |                         |                10 |              0.10527 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0833 | >20%                    |                10 |              0.10833 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.0923 | >20%                    |                 5 |              0.21846 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.1007 | >20%                    |                 5 |              0.22014 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1172 | 5-10%                   |                10 |              0.11172 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1284 | >20%                    |                 5 |              0.22568 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1637 | 5-10%                   |                 2 |              0.58185 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.182  |                         |                 2 |              0.591   |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2063 |                         |                 5 |              0.24126 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2091 | >20%                    |                10 |              0.12091 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2113 | >20%                    |                10 |              0.12113 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2365 | 5-10%                   |                 2 |              0.61825 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2406 |                         |                 5 |              0.24812 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.247  | >20%                    |                10 |              0.1247  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3456 | 10-15%                  |                10 |              0.13456 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3474 | >20%                    |                10 |              0.13474 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3478 | >20%                    |                 2 |              0.6739  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3659 | >20%                    |                 5 |              0.27318 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3825 | >20%                    |                10 |              0.13825 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3843 | 15-20%                  |                10 |              0.13843 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.536  | >20%                    |                 2 |              0.768   |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.567  | 5-10%                   |                 5 |              0.3134  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6406 | >20%                    |                10 |              0.16406 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6416 | 10-15%                  |                 2 |              0.8208  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.7269 | >20%                    |                 5 |              0.34538 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7639 | >20%                    |                 5 |              0.35278 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7949 | 15-20%                  |                10 |              0.17949 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8412 | >20%                    |                10 |              0.18412 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.8605 |                         |                10 |              0.18605 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8711 |                         |                10 |              0.18711 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.1154 | 5-10%                   |                 2 |              1.0577  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.1284 | 15-20%                  |                 5 |              0.42568 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2587 | 5-10%                   |                10 |              0.22587 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.616  | >20%                    |                10 |              0.2616  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.6497 | >20%                    |                10 |              0.26497 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0951 | >20%                    |                10 |              0.30951 |