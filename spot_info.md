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

Data correct as of 2024-11-21 01:41:26.073360, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1211 | >20%                    |                 5 |              0.02422 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1682 | 10-15%                  |                 2 |              0.0841  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.2088 | >20%                    |                 5 |              0.04176 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2215 | 5-10%                   |                 2 |              0.11075 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2232 | 15-20%                  |                 2 |              0.1116  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 5-10%                   |                 2 |              0.1121  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2345 | <5%                     |                 2 |              0.11725 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.236  | 5-10%                   |                 2 |              0.118   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2527 | <5%                     |                 2 |              0.12635 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2674 | 10-15%                  |                 2 |              0.1337  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.276  | <5%                     |                 2 |              0.138   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2902 | 5-10%                   |                 2 |              0.1451  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2919 | 5-10%                   |                 2 |              0.14595 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | <5%                     |                 5 |              0.06008 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3169 | 10-15%                  |                 2 |              0.15845 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3228 | <5%                     |                 2 |              0.1614  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3235 | 15-20%                  |                 5 |              0.0647  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3332 | <5%                     |                 5 |              0.06664 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3383 | 15-20%                  |                 2 |              0.16915 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3395 | 5-10%                   |                 2 |              0.16975 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3443 | <5%                     |                 2 |              0.17215 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3514 | 15-20%                  |                 2 |              0.1757  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3553 | >20%                    |                 2 |              0.17765 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3581 | <5%                     |                 5 |              0.07162 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3584 | <5%                     |                10 |              0.03584 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3671 | >20%                    |                 5 |              0.07342 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3727 | <5%                     |                 2 |              0.18635 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.3845 | 5-10%                   |                 2 |              0.19225 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3934 | 15-20%                  |                 5 |              0.07868 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3939 | >20%                    |                 2 |              0.19695 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.394  | 5-10%                   |                 2 |              0.197   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3962 | >20%                    |                 5 |              0.07924 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3979 | >20%                    |                 5 |              0.07958 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4021 | <5%                     |                 2 |              0.20105 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4111 | <5%                     |                 2 |              0.20555 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4139 | <5%                     |                10 |              0.04139 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4169 | 5-10%                   |                 2 |              0.20845 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4191 | 5-10%                   |                 2 |              0.20955 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4199 | >20%                    |                 2 |              0.20995 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4222 | >20%                    |                 2 |              0.2111  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4333 | >20%                    |                 2 |              0.21665 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4334 | >20%                    |                 2 |              0.2167  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4345 | 10-15%                  |                 2 |              0.21725 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4449 | 5-10%                   |                 5 |              0.08898 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4513 | <5%                     |                 5 |              0.09026 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | 5-10%                   |                10 |              0.04529 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.4553 | >20%                    |                10 |              0.04553 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4596 | 10-15%                  |                 5 |              0.09192 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4598 | 5-10%                   |                 5 |              0.09196 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4614 | 5-10%                   |                 5 |              0.09228 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4615 | <5%                     |                 2 |              0.23075 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4665 | <5%                     |                 5 |              0.0933  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4666 | 15-20%                  |                 5 |              0.09332 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.474  | 15-20%                  |                 5 |              0.0948  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4827 | 15-20%                  |                 5 |              0.09654 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4894 | <5%                     |                 2 |              0.2447  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4972 | 5-10%                   |                 2 |              0.2486  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5119 | 10-15%                  |                 2 |              0.25595 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5162 | <5%                     |                 5 |              0.10324 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5163 | 10-15%                  |                 2 |              0.25815 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5275 | 5-10%                   |                 2 |              0.26375 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5282 | <5%                     |                 5 |              0.10564 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5323 | <5%                     |                 5 |              0.10646 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5357 | >20%                    |                10 |              0.05357 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5357 | <5%                     |                 5 |              0.10714 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5375 | >20%                    |                 5 |              0.1075  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5385 | 10-15%                  |                 5 |              0.1077  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5417 | >20%                    |                10 |              0.05417 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5504 | 5-10%                   |                 5 |              0.11008 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5519 | >20%                    |                 5 |              0.11038 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5641 | >20%                    |                 5 |              0.11282 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5659 | 10-15%                  |                 5 |              0.11318 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5664 | 10-15%                  |                 5 |              0.11328 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5669 | >20%                    |                10 |              0.05669 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5692 | >20%                    |                 2 |              0.2846  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5813 | 15-20%                  |                 2 |              0.29065 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5865 | 10-15%                  |                10 |              0.05865 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6263 | 5-10%                   |                10 |              0.06263 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6286 | 5-10%                   |                 5 |              0.12572 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6441 | 10-15%                  |                10 |              0.06441 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6516 | >20%                    |                 5 |              0.13032 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6542 | >20%                    |                 5 |              0.13084 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.664  | >20%                    |                 2 |              0.332   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.671  | <5%                     |                 5 |              0.1342  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6793 | <5%                     |                 5 |              0.13586 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6834 | <5%                     |                 5 |              0.13668 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6842 | 15-20%                  |                 5 |              0.13684 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6908 | 5-10%                   |                 5 |              0.13816 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6966 | >20%                    |                10 |              0.06966 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6983 | 5-10%                   |                10 |              0.06983 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7086 | >20%                    |                10 |              0.07086 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.728  | 5-10%                   |                10 |              0.0728  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7375 | <5%                     |                 5 |              0.1475  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7414 | 15-20%                  |                 5 |              0.14828 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7486 | 10-15%                  |                10 |              0.07486 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.767  | <5%                     |                10 |              0.0767  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7685 | <5%                     |                 2 |              0.38425 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7817 | 5-10%                   |                10 |              0.07817 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.782  | 5-10%                   |                 5 |              0.1564  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.7834 | >20%                    |                10 |              0.07834 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.785  | >20%                    |                10 |              0.0785  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8027 | 15-20%                  |                10 |              0.08027 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8144 | 5-10%                   |                10 |              0.08144 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8277 | 5-10%                   |                10 |              0.08277 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8314 | 10-15%                  |                10 |              0.08314 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8544 | >20%                    |                 5 |              0.17088 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8566 | 10-15%                  |                10 |              0.08566 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8648 | >20%                    |                10 |              0.08648 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8738 | 5-10%                   |                10 |              0.08738 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8915 | 5-10%                   |                10 |              0.08915 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9136 | 5-10%                   |                10 |              0.09136 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.916  | 15-20%                  |                10 |              0.0916  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9529 | <5%                     |                10 |              0.09529 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9578 | <5%                     |                10 |              0.09578 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9912 | 5-10%                   |                10 |              0.09912 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0143 | <5%                     |                10 |              0.10143 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0182 | 5-10%                   |                10 |              0.10182 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0346 | 15-20%                  |                10 |              0.10346 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0354 | >20%                    |                10 |              0.10354 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0391 | >20%                    |                10 |              0.10391 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0561 | <5%                     |                10 |              0.10561 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1258 | 10-15%                  |                10 |              0.11258 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1826 | 15-20%                  |                10 |              0.11826 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3589 | >20%                    |                10 |              0.13589 |