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

Data correct as of 2024-11-08 01:36:19.571245, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 5-10%                   |                 2 |              0.0831  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1671 | >20%                    |                 5 |              0.03342 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1884 | 10-15%                  |                 2 |              0.0942  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.213  | 10-15%                  |                 2 |              0.1065  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2197 | 5-10%                   |                 2 |              0.10985 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2241 | >20%                    |                 2 |              0.11205 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 10-15%                  |                 2 |              0.1121  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 5-10%                   |                 2 |              0.1121  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | 5-10%                   |                 5 |              0.04498 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2464 | 5-10%                   |                 2 |              0.1232  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2488 | 5-10%                   |                 2 |              0.1244  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2524 | <5%                     |                 2 |              0.1262  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2595 | >20%                    |                 2 |              0.12975 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2705 | <5%                     |                 2 |              0.13525 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2785 | <5%                     |                 5 |              0.0557  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2815 | 5-10%                   |                 2 |              0.14075 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2826 | 5-10%                   |                 2 |              0.1413  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2889 | <5%                     |                 2 |              0.14445 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | 10-15%                  |                 5 |              0.06008 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3015 | <5%                     |                 5 |              0.0603  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3017 | 5-10%                   |                 5 |              0.06034 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3136 | <5%                     |                 2 |              0.1568  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3198 | <5%                     |                 5 |              0.06396 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.321  | 10-15%                  |                 2 |              0.1605  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.324  | >20%                    |                 2 |              0.162   |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3269 | <5%                     |                 2 |              0.16345 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3353 | <5%                     |                 2 |              0.16765 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3377 | 5-10%                   |                 2 |              0.16885 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3412 | <5%                     |                 2 |              0.1706  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3426 | <5%                     |                10 |              0.03426 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3487 | >20%                    |                 2 |              0.17435 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3502 | >20%                    |                 5 |              0.07004 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3532 | 15-20%                  |                 2 |              0.1766  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.357  | <5%                     |                10 |              0.0357  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3575 | <5%                     |                 2 |              0.17875 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3797 | 5-10%                   |                 2 |              0.18985 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3826 | >20%                    |                 2 |              0.1913  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3852 | 5-10%                   |                 5 |              0.07704 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3858 | 5-10%                   |                 5 |              0.07716 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3889 | >20%                    |                 2 |              0.19445 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3986 | >20%                    |                 5 |              0.07972 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.402  | 10-15%                  |                 5 |              0.0804  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.41   | <5%                     |                 5 |              0.082   |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4121 | <5%                     |                 5 |              0.08242 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4217 | >20%                    |                 5 |              0.08434 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4228 | <5%                     |                 5 |              0.08456 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.4271 | <5%                     |                 2 |              0.21355 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4299 | 5-10%                   |                 2 |              0.21495 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4342 | 10-15%                  |                 2 |              0.2171  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4357 | >20%                    |                 5 |              0.08714 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4392 | 5-10%                   |                 5 |              0.08784 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4396 | 5-10%                   |                 2 |              0.2198  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.447  | >20%                    |                 2 |              0.2235  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.448  | 10-15%                  |                 5 |              0.0896  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.449  | 15-20%                  |                 5 |              0.0898  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4509 | 10-15%                  |                 2 |              0.22545 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | >20%                    |                10 |              0.04529 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | 5-10%                   |                10 |              0.04529 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4543 | 5-10%                   |                 5 |              0.09086 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4679 | <5%                     |                10 |              0.04679 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.468  | 5-10%                   |                 5 |              0.0936  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4716 | 15-20%                  |                 2 |              0.2358  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4724 | >20%                    |                 5 |              0.09448 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.474  | 5-10%                   |                 5 |              0.0948  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4752 | <5%                     |                 2 |              0.2376  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.488  | <5%                     |                 2 |              0.244   |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4973 | 15-20%                  |                 5 |              0.09946 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5024 | >20%                    |                 5 |              0.10048 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5098 | <5%                     |                 5 |              0.10196 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5248 | 5-10%                   |                 2 |              0.2624  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5292 | 10-15%                  |                 5 |              0.10584 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5297 | 5-10%                   |                 5 |              0.10594 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.531  | <5%                     |                 5 |              0.1062  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5381 | 5-10%                   |                 5 |              0.10762 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5512 | 15-20%                  |                 2 |              0.2756  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5523 | >20%                    |                 5 |              0.11046 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5637 | >20%                    |                 5 |              0.11274 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5644 | 10-15%                  |                 2 |              0.2822  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.571  | <5%                     |                 5 |              0.1142  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5723 | 10-15%                  |                10 |              0.05723 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5725 | 15-20%                  |                 5 |              0.1145  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5735 | >20%                    |                 5 |              0.1147  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5796 | 15-20%                  |                 2 |              0.2898  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.581  | 15-20%                  |                10 |              0.0581  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5841 | 10-15%                  |                10 |              0.05841 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5932 | 10-15%                  |                 5 |              0.11864 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5995 | 5-10%                   |                10 |              0.05995 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6145 | >20%                    |                10 |              0.06145 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6163 | <5%                     |                10 |              0.06163 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6313 | 10-15%                  |                10 |              0.06313 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.643  | 5-10%                   |                10 |              0.0643  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6468 | >20%                    |                 5 |              0.12936 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6577 | 5-10%                   |                 5 |              0.13154 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6642 | 15-20%                  |                 5 |              0.13284 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.665  | >20%                    |                 2 |              0.3325  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6711 | 5-10%                   |                10 |              0.06711 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6894 | 10-15%                  |                10 |              0.06894 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6912 | >20%                    |                10 |              0.06912 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7076 | 5-10%                   |                 5 |              0.14152 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7082 | 5-10%                   |                10 |              0.07082 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.7093 | <5%                     |                 2 |              0.35465 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7119 | <5%                     |                10 |              0.07119 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7208 | >20%                    |                10 |              0.07208 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7467 | 15-20%                  |                 5 |              0.14934 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7631 | <5%                     |                10 |              0.07631 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7688 | >20%                    |                10 |              0.07688 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7765 | >20%                    |                10 |              0.07765 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7831 | 15-20%                  |                10 |              0.07831 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7852 | 10-15%                  |                10 |              0.07852 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.787  | 5-10%                   |                 5 |              0.1574  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8045 | >20%                    |                10 |              0.08045 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8173 | <5%                     |                10 |              0.08173 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8362 | 5-10%                   |                10 |              0.08362 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8375 | 15-20%                  |                10 |              0.08375 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8471 | <5%                     |                 2 |              0.42355 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.85   | 5-10%                   |                10 |              0.085   |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8637 | 15-20%                  |                10 |              0.08637 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8763 | >20%                    |                10 |              0.08763 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8831 | >20%                    |                 5 |              0.17662 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8892 | <5%                     |                 5 |              0.17784 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8996 | 5-10%                   |                10 |              0.08996 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9467 | <5%                     |                10 |              0.09467 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9904 | 10-15%                  |                10 |              0.09904 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9976 | <5%                     |                10 |              0.09976 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0185 | 10-15%                  |                10 |              0.10185 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.057  | >20%                    |                10 |              0.1057  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0728 | <5%                     |                10 |              0.10728 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0749 | >20%                    |                10 |              0.10749 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0876 | <5%                     |                10 |              0.10876 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.124  | 15-20%                  |                10 |              0.1124  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1412 | 15-20%                  |                10 |              0.11412 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4266 | >20%                    |                10 |              0.14266 |