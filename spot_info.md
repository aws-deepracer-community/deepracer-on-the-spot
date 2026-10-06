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

Data correct as of 2026-10-06 05:39:40.105794, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1212 | >20%                    |                 2 |              0.0606  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1452 | >20%                    |                 2 |              0.0726  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1958 | 15-20%                  |                 2 |              0.0979  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2002 | 15-20%                  |                 5 |              0.04004 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2047 | >20%                    |                 2 |              0.10235 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2179 | 15-20%                  |                 5 |              0.04358 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.231  | >20%                    |                 5 |              0.0462  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2339 | >20%                    |                 2 |              0.11695 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2614 | >20%                    |                 5 |              0.05228 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.282  | >20%                    |                 2 |              0.141   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2861 | >20%                    |                 2 |              0.14305 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2957 | >20%                    |                 2 |              0.14785 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2978 | >20%                    |                 2 |              0.1489  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3072 | 15-20%                  |                 2 |              0.1536  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3084 | >20%                    |                 2 |              0.1542  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3134 | 10-15%                  |                 2 |              0.1567  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3256 | >20%                    |                 5 |              0.06512 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3282 | >20%                    |                 5 |              0.06564 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3388 | >20%                    |                 2 |              0.1694  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3414 | >20%                    |                 2 |              0.1707  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3483 | 10-15%                  |                 2 |              0.17415 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3658 | 5-10%                   |                10 |              0.03658 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3661 | >20%                    |                 2 |              0.18305 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3691 | >20%                    |                10 |              0.03691 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3721 | 15-20%                  |                 2 |              0.18605 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3809 | >20%                    |                 5 |              0.07618 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.382  | >20%                    |                 2 |              0.191   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3868 | >20%                    |                 2 |              0.1934  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3876 | <5%                     |                 2 |              0.1938  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3898 | >20%                    |                 2 |              0.1949  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3915 | >20%                    |                 5 |              0.0783  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4066 | 15-20%                  |                 2 |              0.2033  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.412  | >20%                    |                 5 |              0.0824  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4157 | >20%                    |                 5 |              0.08314 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4182 | >20%                    |                10 |              0.04182 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4375 | >20%                    |                 2 |              0.21875 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4488 | >20%                    |                 5 |              0.08976 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4561 | >20%                    |                 5 |              0.09122 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4601 | >20%                    |                 5 |              0.09202 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.4693 | >20%                    |                 5 |              0.09386 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4724 | 10-15%                  |                 2 |              0.2362  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4774 | >20%                    |                 5 |              0.09548 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4815 | >20%                    |                 2 |              0.24075 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4864 |                         |                 2 |              0.2432  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4887 | >20%                    |                 2 |              0.24435 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4901 | >20%                    |                 2 |              0.24505 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4904 | >20%                    |                10 |              0.04904 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4923 | >20%                    |                 2 |              0.24615 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4932 | >20%                    |                 5 |              0.09864 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5092 | <5%                     |                 2 |              0.2546  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5128 | >20%                    |                 5 |              0.10256 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5223 | >20%                    |                 5 |              0.10446 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5545 | >20%                    |                 2 |              0.27725 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.577  | >20%                    |                 5 |              0.1154  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5803 | 10-15%                  |                 5 |              0.11606 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5825 | >20%                    |                 5 |              0.1165  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5842 | 15-20%                  |                 2 |              0.2921  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6141 | >20%                    |                10 |              0.06141 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6158 | >20%                    |                 5 |              0.12316 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6179 | >20%                    |                 5 |              0.12358 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6213 | >20%                    |                 2 |              0.31065 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6214 | 10-15%                  |                 2 |              0.3107  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6228 | >20%                    |                10 |              0.06228 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6315 | >20%                    |                 5 |              0.1263  |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.6316 |                         |                10 |              0.06316 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6519 | >20%                    |                 2 |              0.32595 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6528 | >20%                    |                 2 |              0.3264  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6685 | >20%                    |                 5 |              0.1337  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6749 | 5-10%                   |                10 |              0.06749 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6803 | <5%                     |                 2 |              0.34015 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6811 | 5-10%                   |                 2 |              0.34055 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.6868 |                         |                 5 |              0.13736 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6925 | >20%                    |                 5 |              0.1385  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6982 | >20%                    |                10 |              0.06982 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7019 | 5-10%                   |                 5 |              0.14038 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7064 | 15-20%                  |                 2 |              0.3532  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7078 | >20%                    |                10 |              0.07078 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.711  | >20%                    |                 5 |              0.1422  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7242 | >20%                    |                 5 |              0.14484 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7305 | >20%                    |                10 |              0.07305 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7338 | 15-20%                  |                 5 |              0.14676 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7356 | 15-20%                  |                10 |              0.07356 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7372 | >20%                    |                 5 |              0.14744 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7427 | >20%                    |                 2 |              0.37135 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7447 | >20%                    |                 5 |              0.14894 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.766  | >20%                    |                 5 |              0.1532  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7666 | >20%                    |                10 |              0.07666 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.781  | 15-20%                  |                10 |              0.0781  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7817 | 15-20%                  |                10 |              0.07817 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7869 | 15-20%                  |                10 |              0.07869 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8009 | >20%                    |                10 |              0.08009 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8127 | >20%                    |                 5 |              0.16254 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.832  | >20%                    |                 5 |              0.1664  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8368 | 5-10%                   |                10 |              0.08368 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8427 | 15-20%                  |                 5 |              0.16854 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8503 | >20%                    |                10 |              0.08503 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8509 | >20%                    |                 2 |              0.42545 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8552 | >20%                    |                 5 |              0.17104 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8604 | 10-15%                  |                 2 |              0.4302  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8622 | >20%                    |                10 |              0.08622 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8722 | >20%                    |                10 |              0.08722 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.873  | 10-15%                  |                10 |              0.0873  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8861 | >20%                    |                 2 |              0.44305 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8875 | >20%                    |                10 |              0.08875 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8905 | >20%                    |                10 |              0.08905 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.896  | >20%                    |                 5 |              0.1792  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9083 | <5%                     |                 5 |              0.18166 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9146 | >20%                    |                 5 |              0.18292 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9388 | >20%                    |                10 |              0.09388 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9405 | >20%                    |                 5 |              0.1881  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9615 | >20%                    |                10 |              0.09615 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9654 | 10-15%                  |                 2 |              0.4827  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9913 | 15-20%                  |                10 |              0.09913 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9973 | >20%                    |                10 |              0.09973 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0045 | 15-20%                  |                10 |              0.10045 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0326 | >20%                    |                 5 |              0.20652 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0332 | >20%                    |                10 |              0.10332 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0491 | >20%                    |                10 |              0.10491 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0565 | >20%                    |                10 |              0.10565 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0818 | >20%                    |                10 |              0.10818 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0861 | >20%                    |                10 |              0.10861 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.0909 | >20%                    |                 2 |              0.54545 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1181 | 5-10%                   |                10 |              0.11181 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1833 | >20%                    |                10 |              0.11833 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1871 | >20%                    |                 5 |              0.23742 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2078 | >20%                    |                10 |              0.12078 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.24   | 5-10%                   |                 2 |              0.62    |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.2735 |                         |                 2 |              0.63675 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3246 | >20%                    |                 2 |              0.6623  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3485 | >20%                    |                10 |              0.13485 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3663 | 15-20%                  |                10 |              0.13663 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3681 | 5-10%                   |                 2 |              0.68405 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3988 | 10-15%                  |                10 |              0.13988 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4154 | >20%                    |                10 |              0.14154 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4195 | 10-15%                  |                 2 |              0.70975 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5343 | 5-10%                   |                 5 |              0.30686 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5369 | >20%                    |                 2 |              0.76845 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.5659 |                         |                 2 |              0.78295 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5761 | 15-20%                  |                10 |              0.15761 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.6135 | >20%                    |                 5 |              0.3227  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6193 | >20%                    |                10 |              0.16193 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7287 | >20%                    |                 5 |              0.34574 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.7636 |                         |                10 |              0.17636 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7914 | >20%                    |                10 |              0.17914 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.8196 |                         |                10 |              0.18196 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.8338 |                         |                 5 |              0.36676 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.9749 |                         |                 5 |              0.39498 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0779 | 15-20%                  |                 5 |              0.41558 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.1035 | >20%                    |                10 |              0.21035 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2132 | 5-10%                   |                 2 |              1.1066  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2442 | 5-10%                   |                10 |              0.22442 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.2824 | >20%                    |                 5 |              0.45648 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5641 | >20%                    |                10 |              0.25641 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.1361 | >20%                    |                10 |              0.31361 |