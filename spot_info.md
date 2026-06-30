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

Data correct as of 2026-06-30 04:01:12.169139, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1358 | >20%                    |                 2 |              0.0679  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2052 | 15-20%                  |                 2 |              0.1026  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2105 | >20%                    |                 2 |              0.10525 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2363 | >20%                    |                 2 |              0.11815 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2426 | >20%                    |                 2 |              0.1213  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2447 | 15-20%                  |                 5 |              0.04894 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2466 | >20%                    |                 2 |              0.1233  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.255  | 10-15%                  |                 2 |              0.1275  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.257  | >20%                    |                 2 |              0.1285  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2583 | >20%                    |                 2 |              0.12915 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2608 | >20%                    |                 2 |              0.1304  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2668 | >20%                    |                 2 |              0.1334  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2694 | 15-20%                  |                 2 |              0.1347  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2711 | 15-20%                  |                 5 |              0.05422 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.275  | 15-20%                  |                 2 |              0.1375  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2832 | 5-10%                   |                10 |              0.02832 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2835 | >20%                    |                 2 |              0.14175 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3257 | >20%                    |                 5 |              0.06514 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.327  | >20%                    |                 2 |              0.1635  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3306 | >20%                    |                 2 |              0.1653  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3322 | >20%                    |                 5 |              0.06644 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3431 | >20%                    |                 5 |              0.06862 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.35   | <5%                     |                 2 |              0.175   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3597 | >20%                    |                 5 |              0.07194 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.361  | >20%                    |                 5 |              0.0722  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3629 | >20%                    |                10 |              0.03629 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3671 | 10-15%                  |                 2 |              0.18355 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3682 | >20%                    |                 5 |              0.07364 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3736 | >20%                    |                10 |              0.03736 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3743 | >20%                    |                 5 |              0.07486 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3767 | 5-10%                   |                10 |              0.03767 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3776 | >20%                    |                 5 |              0.07552 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3791 | 5-10%                   |                10 |              0.03791 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3846 | >20%                    |                 2 |              0.1923  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3879 | >20%                    |                 2 |              0.19395 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.388  | 10-15%                  |                 2 |              0.194   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4213 | >20%                    |                 2 |              0.21065 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4219 | >20%                    |                 2 |              0.21095 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4223 | >20%                    |                 5 |              0.08446 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4339 | >20%                    |                 5 |              0.08678 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4391 | >20%                    |                 5 |              0.08782 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4394 | 10-15%                  |                 2 |              0.2197  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4395 | <5%                     |                 2 |              0.21975 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4411 | >20%                    |                 2 |              0.22055 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4411 | >20%                    |                10 |              0.04411 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4438 | <5%                     |                 2 |              0.2219  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4552 | >20%                    |                 2 |              0.2276  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4576 | 15-20%                  |                 2 |              0.2288  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4604 | >20%                    |                 5 |              0.09208 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4625 | >20%                    |                 5 |              0.0925  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4761 | >20%                    |                 2 |              0.23805 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4813 | 10-15%                  |                10 |              0.04813 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4816 | >20%                    |                 5 |              0.09632 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4842 | >20%                    |                 2 |              0.2421  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4904 | 15-20%                  |                 5 |              0.09808 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4975 | 15-20%                  |                 2 |              0.24875 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5001 | >20%                    |                 5 |              0.10002 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5167 | >20%                    |                 5 |              0.10334 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5175 | >20%                    |                10 |              0.05175 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.521  | >20%                    |                 5 |              0.1042  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5266 | >20%                    |                 5 |              0.10532 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5296 | 15-20%                  |                 5 |              0.10592 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5387 | 5-10%                   |                 5 |              0.10774 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5398 | 5-10%                   |                 2 |              0.2699  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5439 | >20%                    |                 2 |              0.27195 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5471 | >20%                    |                10 |              0.05471 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5472 | >20%                    |                 5 |              0.10944 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5496 | 10-15%                  |                 5 |              0.10992 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5727 | >20%                    |                10 |              0.05727 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5738 | 15-20%                  |                 2 |              0.2869  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5848 |                         |                 2 |              0.2924  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5861 | >20%                    |                 5 |              0.11722 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6049 | >20%                    |                10 |              0.06049 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6084 | >20%                    |                 5 |              0.12168 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6149 | <5%                     |                 5 |              0.12298 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.618  | >20%                    |                 5 |              0.1236  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6199 | >20%                    |                 5 |              0.12398 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6221 | >20%                    |                 5 |              0.12442 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.624  | >20%                    |                10 |              0.0624  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.624  | >20%                    |                 2 |              0.312   |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6242 | >20%                    |                10 |              0.06242 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6281 | >20%                    |                 5 |              0.12562 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6436 | >20%                    |                 2 |              0.3218  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6496 | >20%                    |                10 |              0.06496 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6533 | >20%                    |                 2 |              0.32665 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6585 | >20%                    |                10 |              0.06585 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6594 | 5-10%                   |                 2 |              0.3297  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.6618 |                         |                10 |              0.06618 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6621 | 5-10%                   |                 5 |              0.13242 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.6688 |                         |                 2 |              0.3344  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6764 | >20%                    |                 2 |              0.3382  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6829 | >20%                    |                 5 |              0.13658 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6862 | >20%                    |                10 |              0.06862 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6871 | >20%                    |                 2 |              0.34355 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6972 | 10-15%                  |                 2 |              0.3486  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7011 | >20%                    |                 5 |              0.14022 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7279 | 15-20%                  |                10 |              0.07279 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.733  | >20%                    |                 2 |              0.3665  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7344 | 15-20%                  |                10 |              0.07344 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7371 | >20%                    |                10 |              0.07371 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7421 | >20%                    |                 5 |              0.14842 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.748  | 5-10%                   |                10 |              0.0748  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7574 | >20%                    |                10 |              0.07574 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7599 | >20%                    |                10 |              0.07599 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.7605 | >20%                    |                10 |              0.07605 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7782 | >20%                    |                 5 |              0.15564 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7961 | >20%                    |                 5 |              0.15922 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7987 | <5%                     |                10 |              0.07987 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8118 | >20%                    |                 2 |              0.4059  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8169 | >20%                    |                10 |              0.08169 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.837  | >20%                    |                 5 |              0.1674  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8505 | 15-20%                  |                10 |              0.08505 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8509 | 5-10%                   |                10 |              0.08509 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8518 | >20%                    |                10 |              0.08518 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8518 | 15-20%                  |                10 |              0.08518 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8538 | 10-15%                  |                 2 |              0.4269  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8554 | >20%                    |                10 |              0.08554 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8637 | >20%                    |                 5 |              0.17274 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8813 | >20%                    |                10 |              0.08813 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8838 | >20%                    |                10 |              0.08838 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8951 | >20%                    |                10 |              0.08951 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9034 | 10-15%                  |                 2 |              0.4517  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9108 | 15-20%                  |                10 |              0.09108 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9171 | >20%                    |                10 |              0.09171 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9434 | >20%                    |                10 |              0.09434 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9476 | >20%                    |                10 |              0.09476 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9558 | >20%                    |                 5 |              0.19116 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.96   | >20%                    |                10 |              0.096   |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9622 | 5-10%                   |                10 |              0.09622 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.969  |                         |                 5 |              0.1938  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9699 | >20%                    |                 5 |              0.19398 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.9758 | >20%                    |                 5 |              0.19516 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9859 | >20%                    |                 5 |              0.19718 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0039 | >20%                    |                10 |              0.10039 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0156 | 15-20%                  |                10 |              0.10156 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0297 | 5-10%                   |                 2 |              0.51485 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.056  | >20%                    |                 2 |              0.528   |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.071  | >20%                    |                 5 |              0.2142  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0825 | >20%                    |                10 |              0.10825 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0886 | >20%                    |                 5 |              0.21772 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1144 | >20%                    |                 5 |              0.22288 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1511 | >20%                    |                10 |              0.11511 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1833 |                         |                10 |              0.11833 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2208 |                         |                 5 |              0.24416 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2569 | >20%                    |                 5 |              0.25138 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2982 | 15-20%                  |                10 |              0.12982 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3534 | 15-20%                  |                10 |              0.13534 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4159 | >20%                    |                10 |              0.14159 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4244 | 15-20%                  |                 5 |              0.28488 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5044 | 10-15%                  |                10 |              0.15044 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5053 | >20%                    |                 5 |              0.30106 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.7562 | 5-10%                   |                 2 |              0.8781  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.1839 | >20%                    |                10 |              0.21839 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4728 | >20%                    |                10 |              0.24728 |