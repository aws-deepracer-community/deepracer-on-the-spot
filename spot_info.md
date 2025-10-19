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

Data correct as of 2025-10-19 01:57:30.705602, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0936 | 5-10%                   |                 2 |              0.0468  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1321 | >20%                    |                 2 |              0.06605 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1342 | 10-15%                  |                 2 |              0.0671  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1437 | >20%                    |                 5 |              0.02874 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1711 | >20%                    |                 2 |              0.08555 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1844 | >20%                    |                 5 |              0.03688 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1907 | 10-15%                  |                 5 |              0.03814 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2281 | >20%                    |                 5 |              0.04562 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2288 | >20%                    |                 2 |              0.1144  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2327 | 10-15%                  |                 2 |              0.11635 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2449 | >20%                    |                 2 |              0.12245 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.245  | >20%                    |                 2 |              0.1225  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2522 | >20%                    |                 2 |              0.1261  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.257  | 5-10%                   |                 2 |              0.1285  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2629 | >20%                    |                 2 |              0.13145 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2655 | >20%                    |                 2 |              0.13275 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2683 | 5-10%                   |                 2 |              0.13415 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2722 | 10-15%                  |                 2 |              0.1361  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2732 | 5-10%                   |                10 |              0.02732 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2882 | >20%                    |                 2 |              0.1441  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3047 | >20%                    |                 2 |              0.15235 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3118 | >20%                    |                 5 |              0.06236 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3128 | 15-20%                  |                 2 |              0.1564  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3261 | >20%                    |                 2 |              0.16305 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.341  | 10-15%                  |                 2 |              0.1705  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3414 | >20%                    |                 2 |              0.1707  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3495 | >20%                    |                 2 |              0.17475 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3497 | 15-20%                  |                 2 |              0.17485 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3534 | >20%                    |                 5 |              0.07068 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3557 | >20%                    |                10 |              0.03557 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3568 | 5-10%                   |                10 |              0.03568 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3585 | >20%                    |                 2 |              0.17925 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3764 | 15-20%                  |                 2 |              0.1882  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3809 | >20%                    |                 2 |              0.19045 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3884 | >20%                    |                 2 |              0.1942  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3884 | >20%                    |                 2 |              0.1942  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3925 | >20%                    |                 5 |              0.0785  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3957 | >20%                    |                 5 |              0.07914 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3965 | 10-15%                  |                10 |              0.03965 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3995 | >20%                    |                 2 |              0.19975 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4028 | >20%                    |                 2 |              0.2014  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4078 | 5-10%                   |                 2 |              0.2039  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4103 | >20%                    |                 2 |              0.20515 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.416  | >20%                    |                10 |              0.0416  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4174 | 15-20%                  |                 2 |              0.2087  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4214 | >20%                    |                 2 |              0.2107  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4224 | >20%                    |                 5 |              0.08448 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4236 | 5-10%                   |                 5 |              0.08472 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4254 | >20%                    |                 2 |              0.2127  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4259 | >20%                    |                 5 |              0.08518 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4265 | >20%                    |                10 |              0.04265 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4312 | >20%                    |                 5 |              0.08624 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4339 | 5-10%                   |                 2 |              0.21695 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4377 | <5%                     |                 2 |              0.21885 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4485 | >20%                    |                 5 |              0.0897  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4499 | >20%                    |                 5 |              0.08998 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4564 | >20%                    |                 5 |              0.09128 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4571 | >20%                    |                 2 |              0.22855 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4626 | >20%                    |                 2 |              0.2313  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4675 | >20%                    |                 2 |              0.23375 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4695 | >20%                    |                 5 |              0.0939  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4716 | >20%                    |                 5 |              0.09432 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4752 | 10-15%                  |                 2 |              0.2376  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4762 | 15-20%                  |                 5 |              0.09524 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4834 | >20%                    |                 2 |              0.2417  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4886 | >20%                    |                 2 |              0.2443  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.494  | >20%                    |                 2 |              0.247   |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5016 | >20%                    |                 5 |              0.10032 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5095 | >20%                    |                 2 |              0.25475 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5167 | >20%                    |                 5 |              0.10334 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5209 | >20%                    |                 5 |              0.10418 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5265 | 10-15%                  |                 5 |              0.1053  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5344 | <5%                     |                10 |              0.05344 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5479 | >20%                    |                 5 |              0.10958 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5526 | >20%                    |                 2 |              0.2763  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5578 | >20%                    |                 5 |              0.11156 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5618 | 5-10%                   |                 2 |              0.2809  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5625 | >20%                    |                 5 |              0.1125  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5777 | >20%                    |                 5 |              0.11554 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5842 | >20%                    |                 5 |              0.11684 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.585  | >20%                    |                 5 |              0.117   |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5956 | 15-20%                  |                10 |              0.05956 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5972 | 10-15%                  |                 2 |              0.2986  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.601  | >20%                    |                 5 |              0.1202  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6017 | >20%                    |                 5 |              0.12034 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6064 | >20%                    |                 5 |              0.12128 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6103 | 15-20%                  |                 2 |              0.30515 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6207 | >20%                    |                 5 |              0.12414 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6228 | >20%                    |                 5 |              0.12456 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6233 | 10-15%                  |                 5 |              0.12466 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6264 | >20%                    |                 2 |              0.3132  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6311 | >20%                    |                 5 |              0.12622 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6405 | >20%                    |                 5 |              0.1281  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.641  | 15-20%                  |                 5 |              0.1282  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6419 | 10-15%                  |                 5 |              0.12838 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6427 | >20%                    |                 5 |              0.12854 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6482 | 15-20%                  |                 2 |              0.3241  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6496 | >20%                    |                10 |              0.06496 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6542 | 15-20%                  |                 5 |              0.13084 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6553 | >20%                    |                 2 |              0.32765 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6589 | >20%                    |                 5 |              0.13178 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6715 | 15-20%                  |                10 |              0.06715 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6735 | >20%                    |                 5 |              0.1347  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6848 | >20%                    |                 2 |              0.3424  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6876 | >20%                    |                10 |              0.06876 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6994 | 15-20%                  |                10 |              0.06994 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7033 | >20%                    |                 5 |              0.14066 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7055 | >20%                    |                 5 |              0.1411  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7067 | >20%                    |                10 |              0.07067 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.711  | 15-20%                  |                10 |              0.0711  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7121 | >20%                    |                10 |              0.07121 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7132 | <5%                     |                10 |              0.07132 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7236 | >20%                    |                 5 |              0.14472 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7269 | >20%                    |                 5 |              0.14538 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7278 | 15-20%                  |                 5 |              0.14556 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7311 | >20%                    |                 5 |              0.14622 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7504 | >20%                    |                10 |              0.07504 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7586 | >20%                    |                10 |              0.07586 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.773  | 15-20%                  |                10 |              0.0773  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7853 | >20%                    |                 2 |              0.39265 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8027 | >20%                    |                10 |              0.08027 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8037 | >20%                    |                 5 |              0.16074 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8066 | 10-15%                  |                 2 |              0.4033  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8093 | >20%                    |                10 |              0.08093 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8094 | >20%                    |                10 |              0.08094 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8135 | >20%                    |                 5 |              0.1627  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.818  | 5-10%                   |                10 |              0.0818  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8186 | 15-20%                  |                10 |              0.08186 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8227 | 15-20%                  |                 5 |              0.16454 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8325 | >20%                    |                10 |              0.08325 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.838  | 10-15%                  |                 2 |              0.419   |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.848  | >20%                    |                10 |              0.0848  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8541 | 10-15%                  |                 5 |              0.17082 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8597 | 15-20%                  |                10 |              0.08597 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8743 | >20%                    |                 5 |              0.17486 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8787 | 15-20%                  |                10 |              0.08787 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8871 | 15-20%                  |                10 |              0.08871 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8902 | <5%                     |                10 |              0.08902 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9049 | 15-20%                  |                10 |              0.09049 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9052 | >20%                    |                 5 |              0.18104 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9078 | >20%                    |                10 |              0.09078 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9109 | >20%                    |                10 |              0.09109 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9207 | >20%                    |                 2 |              0.46035 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9249 | <5%                     |                10 |              0.09249 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9418 | 10-15%                  |                10 |              0.09418 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9501 | 10-15%                  |                10 |              0.09501 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9566 | >20%                    |                 2 |              0.4783  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9958 | >20%                    |                 2 |              0.4979  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9985 | 5-10%                   |                10 |              0.09985 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0103 | 15-20%                  |                10 |              0.10103 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0252 | >20%                    |                 5 |              0.20504 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0574 | 10-15%                  |                10 |              0.10574 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0661 | >20%                    |                10 |              0.10661 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0753 | >20%                    |                10 |              0.10753 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0845 | 15-20%                  |                10 |              0.10845 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0973 | >20%                    |                10 |              0.10973 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1005 | >20%                    |                10 |              0.11005 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1133 | >20%                    |                 5 |              0.22266 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1161 | >20%                    |                10 |              0.11161 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1216 | 10-15%                  |                 2 |              0.5608  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1317 | >20%                    |                 5 |              0.22634 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1422 | >20%                    |                10 |              0.11422 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1429 | <5%                     |                10 |              0.11429 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1526 | 10-15%                  |                10 |              0.11526 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1595 | 5-10%                   |                10 |              0.11595 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1634 | >20%                    |                10 |              0.11634 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1925 | >20%                    |                 5 |              0.2385  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2022 | 5-10%                   |                10 |              0.12022 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.288  | 10-15%                  |                10 |              0.1288  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3049 | 5-10%                   |                 2 |              0.65245 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3183 | >20%                    |                10 |              0.13183 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4048 | 10-15%                  |                 5 |              0.28096 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6112 | >20%                    |                10 |              0.16112 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6229 | >20%                    |                10 |              0.16229 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6489 | 10-15%                  |                 5 |              0.32978 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7425 | >20%                    |                10 |              0.17425 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.9104 | >20%                    |                10 |              0.19104 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2001 | 10-15%                  |                10 |              0.22001 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.391  | 15-20%                  |                10 |              0.2391  |