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

Data correct as of 2024-11-01 01:44:52.133844, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1412 | 10-15%                  |                 2 |              0.0706  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 10-15%                  |                 2 |              0.0831  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1936 | <5%                     |                 2 |              0.0968  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1978 | 10-15%                  |                 2 |              0.0989  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2017 | >20%                    |                 2 |              0.10085 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2117 | 10-15%                  |                 2 |              0.10585 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2192 | 10-15%                  |                 2 |              0.1096  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2225 | 15-20%                  |                 2 |              0.11125 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2265 | 5-10%                   |                 5 |              0.0453  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2296 | 5-10%                   |                 2 |              0.1148  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2311 | <5%                     |                 2 |              0.11555 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2364 | <5%                     |                 2 |              0.1182  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2402 | >20%                    |                 2 |              0.1201  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2412 | 5-10%                   |                 2 |              0.1206  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2475 | 10-15%                  |                 2 |              0.12375 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2485 | 15-20%                  |                 5 |              0.0497  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2497 | <5%                     |                 2 |              0.12485 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2631 | >20%                    |                 5 |              0.05262 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2634 | >20%                    |                 2 |              0.1317  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2697 | <5%                     |                 2 |              0.13485 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2704 | 5-10%                   |                 5 |              0.05408 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.274  | 10-15%                  |                 2 |              0.137   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2775 | <5%                     |                 2 |              0.13875 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2785 | 5-10%                   |                 5 |              0.0557  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.29   | 10-15%                  |                 2 |              0.145   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2994 | <5%                     |                 5 |              0.05988 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3048 | <5%                     |                 2 |              0.1524  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3073 | >20%                    |                 5 |              0.06146 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3083 | <5%                     |                 5 |              0.06166 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3146 | 10-15%                  |                 5 |              0.06292 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3161 | 15-20%                  |                 5 |              0.06322 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3161 | >20%                    |                 5 |              0.06322 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3354 | 15-20%                  |                 2 |              0.1677  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3364 | 5-10%                   |                 2 |              0.1682  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3426 | <5%                     |                10 |              0.03426 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3494 | <5%                     |                 2 |              0.1747  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3637 | >20%                    |                 2 |              0.18185 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.371  | 5-10%                   |                 5 |              0.0742  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3765 | >20%                    |                 2 |              0.18825 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3769 | 5-10%                   |                 2 |              0.18845 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3772 | 5-10%                   |                 5 |              0.07544 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.384  | >20%                    |                 2 |              0.192   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3927 | 5-10%                   |                 5 |              0.07854 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3976 | 5-10%                   |                 2 |              0.1988  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4012 | >20%                    |                 2 |              0.2006  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4065 | <5%                     |                 5 |              0.0813  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4116 | <5%                     |                 5 |              0.08232 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4126 | 10-15%                  |                 2 |              0.2063  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4131 | >20%                    |                 5 |              0.08262 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.415  | 15-20%                  |                 2 |              0.2075  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4204 | 10-15%                  |                10 |              0.04204 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4266 | 10-15%                  |                 2 |              0.2133  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4315 | 15-20%                  |                 5 |              0.0863  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4428 | <5%                     |                10 |              0.04428 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4468 | 5-10%                   |                 5 |              0.08936 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.455  | 15-20%                  |                 5 |              0.091   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4594 | 15-20%                  |                 2 |              0.2297  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4633 | 10-15%                  |                10 |              0.04633 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4657 | <5%                     |                10 |              0.04657 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4743 | 10-15%                  |                 5 |              0.09486 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4749 | 5-10%                   |                 5 |              0.09498 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4817 | <5%                     |                 2 |              0.24085 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.482  | >20%                    |                 5 |              0.0964  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4876 | <5%                     |                 5 |              0.09752 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.489  | 10-15%                  |                 2 |              0.2445  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4924 | 5-10%                   |                 5 |              0.09848 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4941 | 15-20%                  |                 2 |              0.24705 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.5036 | 5-10%                   |                 2 |              0.2518  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5045 | 10-15%                  |                10 |              0.05045 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.5063 | <5%                     |                10 |              0.05063 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5074 | 15-20%                  |                 2 |              0.2537  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5122 | >20%                    |                 5 |              0.10244 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5219 | 5-10%                   |                 5 |              0.10438 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5251 | <5%                     |                 5 |              0.10502 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5262 | >20%                    |                 5 |              0.10524 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.534  | 15-20%                  |                 2 |              0.267   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5357 | 10-15%                  |                 5 |              0.10714 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.536  | <5%                     |                 5 |              0.1072  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5473 | 10-15%                  |                 5 |              0.10946 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5485 | 15-20%                  |                 2 |              0.27425 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.5584 | <5%                     |                10 |              0.05584 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5667 | 10-15%                  |                 5 |              0.11334 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5676 | 5-10%                   |                 5 |              0.11352 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5718 | <5%                     |                10 |              0.05718 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5723 | 10-15%                  |                 5 |              0.11446 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5764 | >20%                    |                 5 |              0.11528 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5765 | 5-10%                   |                 5 |              0.1153  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5802 | 10-15%                  |                10 |              0.05802 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5841 | 5-10%                   |                 5 |              0.11682 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5855 | >20%                    |                 2 |              0.29275 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5866 | 5-10%                   |                10 |              0.05866 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5977 | 5-10%                   |                10 |              0.05977 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5994 | >20%                    |                10 |              0.05994 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6168 | >20%                    |                10 |              0.06168 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6278 | >20%                    |                 2 |              0.3139  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6466 | 5-10%                   |                10 |              0.06466 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6524 | 5-10%                   |                10 |              0.06524 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6584 | >20%                    |                 2 |              0.3292  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6642 | >20%                    |                 5 |              0.13284 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6755 | 15-20%                  |                 5 |              0.1351  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6796 | >20%                    |                10 |              0.06796 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.694  | 5-10%                   |                10 |              0.0694  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7024 | 10-15%                  |                10 |              0.07024 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7068 | >20%                    |                10 |              0.07068 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7091 | 10-15%                  |                 5 |              0.14182 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7342 | >20%                    |                10 |              0.07342 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.735  | 5-10%                   |                10 |              0.0735  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7575 | >20%                    |                 5 |              0.1515  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7688 | 15-20%                  |                10 |              0.07688 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7784 | 5-10%                   |                 5 |              0.15568 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7882 | <5%                     |                10 |              0.07882 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8043 | >20%                    |                10 |              0.08043 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8365 | 5-10%                   |                10 |              0.08365 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.844  | 5-10%                   |                 5 |              0.1688  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.846  | >20%                    |                10 |              0.0846  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.849  | >20%                    |                10 |              0.0849  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8506 | >20%                    |                10 |              0.08506 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8548 | 5-10%                   |                10 |              0.08548 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8643 | <5%                     |                 2 |              0.43215 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8699 | 10-15%                  |                 2 |              0.43495 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8797 | >20%                    |                 5 |              0.17594 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8954 | <5%                     |                10 |              0.08954 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9209 | 15-20%                  |                10 |              0.09209 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9817 | 10-15%                  |                 5 |              0.19634 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9911 | 10-15%                  |                10 |              0.09911 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0134 | 10-15%                  |                10 |              0.10134 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0228 | <5%                     |                10 |              0.10228 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0256 | >20%                    |                10 |              0.10256 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0442 | >20%                    |                10 |              0.10442 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0564 | 5-10%                   |                10 |              0.10564 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1201 | >20%                    |                10 |              0.11201 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1817 | 15-20%                  |                10 |              0.11817 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1979 | <5%                     |                10 |              0.11979 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4049 | >20%                    |                10 |              0.14049 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5049 | 15-20%                  |                10 |              0.15049 |