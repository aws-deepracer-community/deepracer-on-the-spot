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

Data correct as of 2025-01-26 01:37:41.750070, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | >20%                    |                 5 |              0.039   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.215  | <5%                     |                 2 |              0.1075  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2211 | >20%                    |                 2 |              0.11055 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2214 | 5-10%                   |                 2 |              0.1107  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2227 | 5-10%                   |                 2 |              0.11135 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.223  | 10-15%                  |                 2 |              0.1115  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2511 | 5-10%                   |                 2 |              0.12555 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2551 | 10-15%                  |                 2 |              0.12755 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2678 | 10-15%                  |                 2 |              0.1339  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.274  | <5%                     |                 2 |              0.137   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2984 | <5%                     |                 2 |              0.1492  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3066 | >20%                    |                 2 |              0.1533  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3103 | 5-10%                   |                 2 |              0.15515 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3216 | 10-15%                  |                 2 |              0.1608  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3302 | >20%                    |                 2 |              0.1651  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3349 | 10-15%                  |                 5 |              0.06698 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.342  | <5%                     |                 2 |              0.171   |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3433 | <5%                     |                 5 |              0.06866 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3466 | 10-15%                  |                 5 |              0.06932 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3561 | <5%                     |                 2 |              0.17805 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3597 | >20%                    |                 2 |              0.17985 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3655 | >20%                    |                 2 |              0.18275 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3661 | 5-10%                   |                 2 |              0.18305 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3706 | 15-20%                  |                10 |              0.03706 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3738 | 5-10%                   |                 2 |              0.1869  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3764 | 5-10%                   |                 2 |              0.1882  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3819 | 5-10%                   |                 5 |              0.07638 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3859 | 5-10%                   |                 5 |              0.07718 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3971 | 5-10%                   |                 2 |              0.19855 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3971 | 5-10%                   |                 5 |              0.07942 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4056 | 5-10%                   |                 2 |              0.2028  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4093 | 10-15%                  |                 2 |              0.20465 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4098 | 10-15%                  |                 2 |              0.2049  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4107 | <5%                     |                 5 |              0.08214 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4156 | >20%                    |                 2 |              0.2078  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4201 | <5%                     |                 2 |              0.21005 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4298 | 5-10%                   |                 2 |              0.2149  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4341 | 15-20%                  |                 2 |              0.21705 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.439  | 15-20%                  |                 5 |              0.0878  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4518 | 15-20%                  |                 5 |              0.09036 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4519 | >20%                    |                 5 |              0.09038 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4539 | <5%                     |                 5 |              0.09078 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4591 | >20%                    |                 2 |              0.22955 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4677 | 15-20%                  |                 5 |              0.09354 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4771 | <5%                     |                 5 |              0.09542 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4789 | 5-10%                   |                 2 |              0.23945 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4836 | <5%                     |                 5 |              0.09672 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4884 | 15-20%                  |                 5 |              0.09768 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.492  | 15-20%                  |                 5 |              0.0984  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.492  | 10-15%                  |                 5 |              0.0984  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4936 | >20%                    |                 2 |              0.2468  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4963 | <5%                     |                 2 |              0.24815 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4978 | <5%                     |                 2 |              0.2489  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5002 | 10-15%                  |                 5 |              0.10004 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5002 | <5%                     |                 5 |              0.10004 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5021 | <5%                     |                 2 |              0.25105 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5091 | >20%                    |                 5 |              0.10182 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5145 | 5-10%                   |                 2 |              0.25725 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5168 | <5%                     |                 5 |              0.10336 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5178 | >20%                    |                 2 |              0.2589  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5247 | 5-10%                   |                 5 |              0.10494 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5266 | 10-15%                  |                 5 |              0.10532 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.5456 | 5-10%                   |                10 |              0.05456 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5464 | >20%                    |                 5 |              0.10928 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5513 | 10-15%                  |                 2 |              0.27565 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5525 | 5-10%                   |                 5 |              0.1105  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.562  | 5-10%                   |                 5 |              0.1124  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5623 | <5%                     |                 5 |              0.11246 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5661 | <5%                     |                 5 |              0.11322 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5675 | 15-20%                  |                 2 |              0.28375 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5707 | 5-10%                   |                 5 |              0.11414 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5857 | 5-10%                   |                 5 |              0.11714 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5904 | <5%                     |                10 |              0.05904 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.591  | 5-10%                   |                 5 |              0.1182  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5971 | 5-10%                   |                10 |              0.05971 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6193 | >20%                    |                10 |              0.06193 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6235 | 5-10%                   |                 5 |              0.1247  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6338 | >20%                    |                 5 |              0.12676 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6394 | >20%                    |                10 |              0.06394 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6405 | 5-10%                   |                10 |              0.06405 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6509 | >20%                    |                 2 |              0.32545 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6602 | 15-20%                  |                10 |              0.06602 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.673  | 5-10%                   |                10 |              0.0673  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6797 | >20%                    |                10 |              0.06797 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6804 | 10-15%                  |                10 |              0.06804 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6833 | 5-10%                   |                 5 |              0.13666 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6838 | 5-10%                   |                 5 |              0.13676 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6866 | 15-20%                  |                 2 |              0.3433  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6933 | >20%                    |                 5 |              0.13866 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6969 | >20%                    |                 5 |              0.13938 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7027 | <5%                     |                10 |              0.07027 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7173 | <5%                     |                 5 |              0.14346 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7259 | 10-15%                  |                10 |              0.07259 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7316 | >20%                    |                 5 |              0.14632 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7337 | <5%                     |                10 |              0.07337 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7473 | >20%                    |                 5 |              0.14946 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7515 | 10-15%                  |                10 |              0.07515 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7627 | >20%                    |                 5 |              0.15254 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7683 | >20%                    |                10 |              0.07683 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7717 | 15-20%                  |                 2 |              0.38585 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7776 | 5-10%                   |                10 |              0.07776 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7794 | 5-10%                   |                10 |              0.07794 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.792  | 10-15%                  |                10 |              0.0792  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8018 | <5%                     |                 2 |              0.4009  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8139 | 5-10%                   |                10 |              0.08139 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8194 | 15-20%                  |                10 |              0.08194 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8234 | 15-20%                  |                10 |              0.08234 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8258 | >20%                    |                10 |              0.08258 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8279 | 15-20%                  |                10 |              0.08279 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8302 | 5-10%                   |                10 |              0.08302 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8406 | <5%                     |                10 |              0.08406 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8564 | <5%                     |                10 |              0.08564 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8841 | 5-10%                   |                 5 |              0.17682 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8874 | 5-10%                   |                10 |              0.08874 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8912 | <5%                     |                10 |              0.08912 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.92   | 5-10%                   |                10 |              0.092   |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.93   | <5%                     |                10 |              0.093   |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9483 | 5-10%                   |                10 |              0.09483 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9489 | 5-10%                   |                10 |              0.09489 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.951  | >20%                    |                10 |              0.0951  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.9806 | 10-15%                  |                10 |              0.09806 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9983 | >20%                    |                10 |              0.09983 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9991 | 15-20%                  |                10 |              0.09991 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0534 | <5%                     |                10 |              0.10534 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0629 | 10-15%                  |                 2 |              0.53145 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0792 | 15-20%                  |                 5 |              0.21584 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.081  | 5-10%                   |                 5 |              0.2162  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0906 | 5-10%                   |                10 |              0.10906 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.174  | 10-15%                  |                10 |              0.1174  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2105 | >20%                    |                10 |              0.12105 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2971 | 10-15%                  |                 2 |              0.64855 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3023 | 5-10%                   |                10 |              0.13023 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3734 | 5-10%                   |                10 |              0.13734 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4015 | 15-20%                  |                 5 |              0.2803  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4655 | 5-10%                   |                10 |              0.14655 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0287 | 5-10%                   |                10 |              0.20287 |