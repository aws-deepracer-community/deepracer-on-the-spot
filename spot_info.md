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

Data correct as of 2025-06-08 02:04:39.246179, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1373 | 5-10%                   |                 2 |              0.06865 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1817 | >20%                    |                 2 |              0.09085 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 5-10%                   |                 5 |              0.03708 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1912 | >20%                    |                 2 |              0.0956  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | >20%                    |                 5 |              0.039   |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2063 | >20%                    |                 2 |              0.10315 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2182 | 15-20%                  |                 2 |              0.1091  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2279 | >20%                    |                 2 |              0.11395 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2301 | >20%                    |                 5 |              0.04602 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2334 | 15-20%                  |                 2 |              0.1167  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 5-10%                   |                10 |              0.02419 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2432 | <5%                     |                 2 |              0.1216  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2439 | >20%                    |                10 |              0.02439 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2467 | >20%                    |                 5 |              0.04934 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2548 | 10-15%                  |                 2 |              0.1274  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2575 | 15-20%                  |                 2 |              0.12875 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2612 | 15-20%                  |                10 |              0.02612 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2704 | >20%                    |                 2 |              0.1352  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2777 | >20%                    |                 2 |              0.13885 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.278  | 15-20%                  |                 2 |              0.139   |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2788 | 15-20%                  |                 2 |              0.1394  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2795 | <5%                     |                 2 |              0.13975 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2872 | >20%                    |                 2 |              0.1436  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2985 | >20%                    |                 5 |              0.0597  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3014 | >20%                    |                 2 |              0.1507  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3032 | >20%                    |                 2 |              0.1516  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.31   | >20%                    |                 2 |              0.155   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3109 | >20%                    |                 2 |              0.15545 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3118 | 15-20%                  |                10 |              0.03118 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.312  | >20%                    |                 5 |              0.0624  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3174 | >20%                    |                 2 |              0.1587  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.33   | 15-20%                  |                 5 |              0.066   |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3412 | >20%                    |                 2 |              0.1706  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3432 | 5-10%                   |                 2 |              0.1716  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.349  | 15-20%                  |                 5 |              0.0698  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3533 | 5-10%                   |                 2 |              0.17665 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3616 | >20%                    |                10 |              0.03616 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3657 | 15-20%                  |                 2 |              0.18285 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3692 | >20%                    |                 2 |              0.1846  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3703 | >20%                    |                 2 |              0.18515 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3734 | 10-15%                  |                 2 |              0.1867  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3758 | >20%                    |                 5 |              0.07516 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3764 | >20%                    |                10 |              0.03764 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3779 | >20%                    |                10 |              0.03779 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3855 | >20%                    |                10 |              0.03855 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3886 | >20%                    |                 5 |              0.07772 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.39   | >20%                    |                 5 |              0.078   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3941 | 15-20%                  |                 2 |              0.19705 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3951 | >20%                    |                 2 |              0.19755 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3953 | 15-20%                  |                 2 |              0.19765 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3959 | 5-10%                   |                 5 |              0.07918 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4025 | <5%                     |                 5 |              0.0805  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4047 | >20%                    |                 5 |              0.08094 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4101 | 5-10%                   |                 2 |              0.20505 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4121 | <5%                     |                 2 |              0.20605 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4135 | >20%                    |                 2 |              0.20675 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4247 | >20%                    |                10 |              0.04247 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4255 | 15-20%                  |                 5 |              0.0851  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4289 | >20%                    |                 2 |              0.21445 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4375 | >20%                    |                 5 |              0.0875  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.439  | 5-10%                   |                 2 |              0.2195  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4391 | 5-10%                   |                 5 |              0.08782 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.441  | 15-20%                  |                 5 |              0.0882  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4419 | 15-20%                  |                 2 |              0.22095 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4461 | >20%                    |                 5 |              0.08922 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4462 | >20%                    |                 5 |              0.08924 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4533 | >20%                    |                 2 |              0.22665 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4539 | <5%                     |                 5 |              0.09078 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.455  | >20%                    |                 2 |              0.2275  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4576 | >20%                    |                 5 |              0.09152 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4648 | 15-20%                  |                 5 |              0.09296 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4738 | >20%                    |                 5 |              0.09476 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4788 | <5%                     |                 5 |              0.09576 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4841 | 10-15%                  |                 5 |              0.09682 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4853 | 5-10%                   |                 5 |              0.09706 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4853 | 15-20%                  |                10 |              0.04853 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4908 | >20%                    |                 5 |              0.09816 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4924 | 15-20%                  |                 5 |              0.09848 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.495  | >20%                    |                 2 |              0.2475  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4978 | 5-10%                   |                 5 |              0.09956 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4992 | 5-10%                   |                 2 |              0.2496  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5066 | 15-20%                  |                 2 |              0.2533  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5128 | >20%                    |                 2 |              0.2564  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5139 | <5%                     |                 5 |              0.10278 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5151 | >20%                    |                 5 |              0.10302 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5153 | >20%                    |                 2 |              0.25765 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5164 | >20%                    |                 2 |              0.2582  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5384 | >20%                    |                 5 |              0.10768 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5442 | >20%                    |                 5 |              0.10884 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5522 | >20%                    |                 2 |              0.2761  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5541 | >20%                    |                 2 |              0.27705 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5645 | 10-15%                  |                10 |              0.05645 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5698 | 10-15%                  |                 5 |              0.11396 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5706 | >20%                    |                10 |              0.05706 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5812 | >20%                    |                 5 |              0.11624 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5866 | >20%                    |                 2 |              0.2933  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5917 | >20%                    |                 5 |              0.11834 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5987 | <5%                     |                 2 |              0.29935 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.601  | >20%                    |                10 |              0.0601  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6065 | 5-10%                   |                 2 |              0.30325 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6104 | >20%                    |                 5 |              0.12208 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6157 | >20%                    |                10 |              0.06157 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.621  | >20%                    |                 2 |              0.3105  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6236 | >20%                    |                 5 |              0.12472 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6261 | <5%                     |                10 |              0.06261 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6269 | >20%                    |                 5 |              0.12538 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6269 | >20%                    |                10 |              0.06269 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6281 | 10-15%                  |                10 |              0.06281 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6302 | >20%                    |                 5 |              0.12604 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6329 | 10-15%                  |                 5 |              0.12658 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6394 | >20%                    |                 2 |              0.3197  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6408 | >20%                    |                 5 |              0.12816 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6438 | >20%                    |                 5 |              0.12876 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6467 | >20%                    |                10 |              0.06467 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6551 | >20%                    |                 2 |              0.32755 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6572 | 15-20%                  |                10 |              0.06572 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.658  | <5%                     |                 5 |              0.1316  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6616 | >20%                    |                 2 |              0.3308  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6639 | 10-15%                  |                 2 |              0.33195 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6803 | 15-20%                  |                10 |              0.06803 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6979 | 15-20%                  |                10 |              0.06979 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7002 | >20%                    |                 5 |              0.14004 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7034 | >20%                    |                10 |              0.07034 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7038 | 10-15%                  |                 5 |              0.14076 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7132 | >20%                    |                 5 |              0.14264 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7147 | <5%                     |                 5 |              0.14294 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7181 | 15-20%                  |                10 |              0.07181 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7294 | <5%                     |                 5 |              0.14588 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7328 | >20%                    |                10 |              0.07328 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7342 | <5%                     |                10 |              0.07342 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7415 | >20%                    |                10 |              0.07415 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7506 | <5%                     |                10 |              0.07506 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7631 | 15-20%                  |                10 |              0.07631 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7744 | >20%                    |                10 |              0.07744 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7834 | >20%                    |                 5 |              0.15668 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7901 | <5%                     |                10 |              0.07901 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7972 | >20%                    |                10 |              0.07972 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8033 | >20%                    |                 5 |              0.16066 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8042 | 15-20%                  |                10 |              0.08042 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8166 | 10-15%                  |                 5 |              0.16332 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8269 | >20%                    |                 2 |              0.41345 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.831  | >20%                    |                10 |              0.0831  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8358 | >20%                    |                10 |              0.08358 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8451 | >20%                    |                10 |              0.08451 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8697 | 10-15%                  |                10 |              0.08697 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8885 | >20%                    |                10 |              0.08885 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8925 | >20%                    |                10 |              0.08925 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9047 | <5%                     |                10 |              0.09047 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9292 | >20%                    |                 5 |              0.18584 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9308 | >20%                    |                10 |              0.09308 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9453 | >20%                    |                10 |              0.09453 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9478 | >20%                    |                10 |              0.09478 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9569 | >20%                    |                10 |              0.09569 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9971 | >20%                    |                10 |              0.09971 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0003 | >20%                    |                10 |              0.10003 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0297 | >20%                    |                 5 |              0.20594 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0312 | >20%                    |                10 |              0.10312 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.037  | <5%                     |                 2 |              0.5185  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0463 | >20%                    |                10 |              0.10463 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0612 | <5%                     |                 2 |              0.5306  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0694 | >20%                    |                 5 |              0.21388 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.07   | >20%                    |                 2 |              0.535   |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0724 | <5%                     |                 5 |              0.21448 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0786 | >20%                    |                 2 |              0.5393  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0797 | 10-15%                  |                10 |              0.10797 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0933 | 15-20%                  |                10 |              0.10933 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1196 | >20%                    |                10 |              0.11196 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1216 | 15-20%                  |                 5 |              0.22432 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1553 | 15-20%                  |                10 |              0.11553 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2091 | 15-20%                  |                10 |              0.12091 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2227 | 10-15%                  |                10 |              0.12227 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2519 | >20%                    |                10 |              0.12519 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2906 | >20%                    |                10 |              0.12906 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3454 | >20%                    |                 2 |              0.6727  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3885 | >20%                    |                10 |              0.13885 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3937 | <5%                     |                10 |              0.13937 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4297 | <5%                     |                 5 |              0.28594 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4534 | >20%                    |                 5 |              0.29068 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5098 | 10-15%                  |                10 |              0.15098 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.652  | <5%                     |                10 |              0.1652  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0531 | 5-10%                   |                10 |              0.20531 |