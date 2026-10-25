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

Data correct as of 2026-10-25 03:56:56.035199, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0858 | >20%                    |                 2 |              0.0429  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1543 | 10-15%                  |                 2 |              0.07715 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1693 | 15-20%                  |                 5 |              0.03386 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1831 | 15-20%                  |                 2 |              0.09155 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2159 | >20%                    |                 5 |              0.04318 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2279 | >20%                    |                 2 |              0.11395 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2505 | >20%                    |                 2 |              0.12525 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.2627 | >20%                    |                 2 |              0.13135 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2648 | >20%                    |                 2 |              0.1324  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2668 | >20%                    |                 5 |              0.05336 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2787 | >20%                    |                 5 |              0.05574 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3046 | >20%                    |                 2 |              0.1523  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3052 | >20%                    |                 2 |              0.1526  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3176 | >20%                    |                 2 |              0.1588  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.327  | >20%                    |                 2 |              0.1635  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3277 | 15-20%                  |                 2 |              0.16385 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3391 | >20%                    |                 2 |              0.16955 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3503 | >20%                    |                 2 |              0.17515 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3596 | >20%                    |                 2 |              0.1798  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3729 | 10-15%                  |                 2 |              0.18645 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.377  | 15-20%                  |                 2 |              0.1885  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3799 | 15-20%                  |                 2 |              0.18995 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3859 | >20%                    |                 5 |              0.07718 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3932 | <5%                     |                 2 |              0.1966  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3961 | >20%                    |                 5 |              0.07922 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4014 | >20%                    |                 5 |              0.08028 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4209 | >20%                    |                 2 |              0.21045 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4228 | >20%                    |                 5 |              0.08456 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4292 | >20%                    |                10 |              0.04292 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4314 | >20%                    |                 2 |              0.2157  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4333 | >20%                    |                10 |              0.04333 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4371 | >20%                    |                 5 |              0.08742 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4406 | >20%                    |                 5 |              0.08812 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4417 | >20%                    |                 5 |              0.08834 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4561 | <5%                     |                10 |              0.04561 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4616 | >20%                    |                 2 |              0.2308  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4698 | >20%                    |                 5 |              0.09396 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.476  | >20%                    |                 2 |              0.238   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4791 | 10-15%                  |                 2 |              0.23955 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4828 |                         |                 2 |              0.2414  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4843 | >20%                    |                 2 |              0.24215 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4869 | >20%                    |                 5 |              0.09738 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4905 | >20%                    |                 2 |              0.24525 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5056 | >20%                    |                10 |              0.05056 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5231 | >20%                    |                10 |              0.05231 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5254 | >20%                    |                 5 |              0.10508 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5309 | >20%                    |                 5 |              0.10618 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.536  | 5-10%                   |                10 |              0.0536  |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.5363 |                         |                10 |              0.05363 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5403 | >20%                    |                 5 |              0.10806 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5465 | >20%                    |                 2 |              0.27325 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5592 | >20%                    |                 2 |              0.2796  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.56   | >20%                    |                 2 |              0.28    |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5664 | >20%                    |                 5 |              0.11328 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5797 | >20%                    |                 5 |              0.11594 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5851 | >20%                    |                 5 |              0.11702 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5894 | 10-15%                  |                 5 |              0.11788 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.613  | >20%                    |                 5 |              0.1226  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6139 | >20%                    |                 2 |              0.30695 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.6178 | 15-20%                  |                 2 |              0.3089  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6233 | 10-15%                  |                 2 |              0.31165 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6296 | >20%                    |                 5 |              0.12592 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6425 | <5%                     |                 2 |              0.32125 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6597 | >20%                    |                 2 |              0.32985 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6611 | >20%                    |                 5 |              0.13222 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6639 | 5-10%                   |                 2 |              0.33195 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.665  | 5-10%                   |                10 |              0.0665  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6707 | >20%                    |                10 |              0.06707 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6758 | <5%                     |                 2 |              0.3379  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6783 | >20%                    |                 5 |              0.13566 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6833 | >20%                    |                 5 |              0.13666 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6913 | 15-20%                  |                 2 |              0.34565 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6992 | >20%                    |                 5 |              0.13984 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.707  | >20%                    |                 5 |              0.1414  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7111 | 10-15%                  |                10 |              0.07111 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.734  | 15-20%                  |                 5 |              0.1468  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7443 | >20%                    |                 5 |              0.14886 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7638 | 15-20%                  |                10 |              0.07638 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7674 | >20%                    |                10 |              0.07674 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7934 | >20%                    |                10 |              0.07934 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7977 | 15-20%                  |                10 |              0.07977 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8046 | >20%                    |                10 |              0.08046 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8157 | 5-10%                   |                10 |              0.08157 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8337 | >20%                    |                 5 |              0.16674 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8341 | >20%                    |                10 |              0.08341 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8393 | 10-15%                  |                 2 |              0.41965 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8434 | >20%                    |                 5 |              0.16868 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8456 | >20%                    |                 2 |              0.4228  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8498 | 15-20%                  |                 5 |              0.16996 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8563 | 15-20%                  |                10 |              0.08563 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8598 | >20%                    |                 5 |              0.17196 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.863  | 10-15%                  |                 2 |              0.4315  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8698 | >20%                    |                10 |              0.08698 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8823 | >20%                    |                10 |              0.08823 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8932 | >20%                    |                10 |              0.08932 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.8935 | >20%                    |                 5 |              0.1787  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.9061 | 5-10%                   |                 5 |              0.18122 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9101 | <5%                     |                 5 |              0.18202 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.935  | >20%                    |                10 |              0.0935  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9366 | >20%                    |                10 |              0.09366 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.938  | >20%                    |                 5 |              0.1876  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9474 | >20%                    |                 5 |              0.18948 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9736 | >20%                    |                10 |              0.09736 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9822 | 15-20%                  |                10 |              0.09822 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9828 | >20%                    |                10 |              0.09828 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0155 | 15-20%                  |                10 |              0.10155 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0406 | >20%                    |                10 |              0.10406 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.043  | >20%                    |                 5 |              0.2086  |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      1.0753 |                         |                 5 |              0.21506 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0811 | >20%                    |                 5 |              0.21622 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.0949 | >20%                    |                 5 |              0.21898 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1167 | 5-10%                   |                10 |              0.11167 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1558 | >20%                    |                 5 |              0.23116 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1651 | >20%                    |                10 |              0.11651 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2057 | >20%                    |                10 |              0.12057 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.208  | >20%                    |                10 |              0.1208  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.2201 | >20%                    |                 2 |              0.61005 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2465 | >20%                    |                10 |              0.12465 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.2509 | >20%                    |                10 |              0.12509 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3457 | >20%                    |                 2 |              0.67285 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3581 | 15-20%                  |                10 |              0.13581 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3634 | 15-20%                  |                10 |              0.13634 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3738 | >20%                    |                10 |              0.13738 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3881 |                         |                 5 |              0.27762 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3898 | 10-15%                  |                10 |              0.13898 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.407  |                         |                 2 |              0.7035  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.4176 | >20%                    |                10 |              0.14176 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.4274 | >20%                    |                 2 |              0.7137  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4412 | >20%                    |                10 |              0.14412 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.4936 |                         |                10 |              0.14936 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5008 | >20%                    |                 5 |              0.30016 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.507  | 5-10%                   |                 5 |              0.3014  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.51   | 5-10%                   |                 2 |              0.755   |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.5154 |                         |                 2 |              0.7577  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.5599 | >20%                    |                 5 |              0.31198 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      1.5758 | >20%                    |                 2 |              0.7879  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6138 | >20%                    |                10 |              0.16138 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.6266 | >20%                    |                 2 |              0.8133  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7606 | >20%                    |                 5 |              0.35212 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8351 | >20%                    |                10 |              0.18351 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.8556 | 5-10%                   |                 2 |              0.9278  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.8616 | 10-15%                  |                 2 |              0.9308  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8741 | >20%                    |                10 |              0.18741 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.8854 | 15-20%                  |                10 |              0.18854 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.1138 | 15-20%                  |                 5 |              0.42276 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.2147 | >20%                    |                10 |              0.22147 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2217 | 5-10%                   |                 2 |              1.11085 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2543 | 5-10%                   |                10 |              0.22543 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.3544 | >20%                    |                 5 |              0.47088 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.4662 |                         |                10 |              0.24662 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      2.5207 |                         |                 5 |              0.50414 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6228 | >20%                    |                10 |              0.26228 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0895 | >20%                    |                10 |              0.30895 |