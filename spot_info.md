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

Data correct as of 2026-05-31 04:15:24.560283, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1382 | 15-20%                  |                 2 |              0.0691  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1384 | >20%                    |                 2 |              0.0692  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1666 | >20%                    |                 2 |              0.0833  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2029 | 15-20%                  |                 2 |              0.10145 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2051 | 10-15%                  |                 2 |              0.10255 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2081 | 15-20%                  |                 5 |              0.04162 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2087 | >20%                    |                 2 |              0.10435 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2138 | >20%                    |                 2 |              0.1069  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2215 | >20%                    |                 2 |              0.11075 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2261 | >20%                    |                 2 |              0.11305 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2502 | >20%                    |                 2 |              0.1251  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2529 | >20%                    |                 2 |              0.12645 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.256  | 15-20%                  |                 5 |              0.0512  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2607 | >20%                    |                 5 |              0.05214 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2608 | >20%                    |                 2 |              0.1304  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.279  | >20%                    |                 5 |              0.0558  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.295  | >20%                    |                 2 |              0.1475  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2968 | 5-10%                   |                10 |              0.02968 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2969 | >20%                    |                 2 |              0.14845 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2982 | >20%                    |                 5 |              0.05964 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2991 | >20%                    |                 5 |              0.05982 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2998 | >20%                    |                 5 |              0.05996 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3012 | 15-20%                  |                 5 |              0.06024 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3044 | >20%                    |                 5 |              0.06088 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3051 | >20%                    |                10 |              0.03051 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3095 | 15-20%                  |                 2 |              0.15475 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3181 | 5-10%                   |                10 |              0.03181 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3207 | >20%                    |                10 |              0.03207 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3233 | >20%                    |                 5 |              0.06466 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3299 | >20%                    |                 2 |              0.16495 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3328 | <5%                     |                 2 |              0.1664  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3349 | >20%                    |                 2 |              0.16745 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.337  | 10-15%                  |                 2 |              0.1685  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.353  | >20%                    |                 5 |              0.0706  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3613 | >20%                    |                 2 |              0.18065 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3627 | 10-15%                  |                 2 |              0.18135 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3655 | >20%                    |                10 |              0.03655 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3799 | >20%                    |                 5 |              0.07598 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3846 | 10-15%                  |                 2 |              0.1923  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3848 | >20%                    |                 5 |              0.07696 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.389  | >20%                    |                 5 |              0.0778  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4002 | >20%                    |                 2 |              0.2001  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4006 | >20%                    |                10 |              0.04006 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4053 | >20%                    |                 5 |              0.08106 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4111 | >20%                    |                 5 |              0.08222 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4124 | >20%                    |                 5 |              0.08248 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4178 | >20%                    |                 5 |              0.08356 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4262 | >20%                    |                 2 |              0.2131  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4267 | <5%                     |                 2 |              0.21335 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4356 | >20%                    |                 2 |              0.2178  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4385 | >20%                    |                 2 |              0.21925 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4437 | >20%                    |                 5 |              0.08874 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4542 | 5-10%                   |                 2 |              0.2271  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4632 | 15-20%                  |                 2 |              0.2316  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4663 | <5%                     |                 2 |              0.23315 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4696 | 10-15%                  |                 2 |              0.2348  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4722 | 15-20%                  |                 2 |              0.2361  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4738 | >20%                    |                 5 |              0.09476 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4776 | >20%                    |                 2 |              0.2388  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4783 | >20%                    |                 2 |              0.23915 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4904 | 15-20%                  |                 2 |              0.2452  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4983 | 5-10%                   |                 5 |              0.09966 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5019 | >20%                    |                 5 |              0.10038 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5052 | >20%                    |                 5 |              0.10104 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5068 | 15-20%                  |                 5 |              0.10136 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5082 | >20%                    |                 2 |              0.2541  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5174 | >20%                    |                 5 |              0.10348 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5197 | >20%                    |                10 |              0.05197 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5434 | >20%                    |                 2 |              0.2717  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5446 | >20%                    |                 5 |              0.10892 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5486 | 10-15%                  |                 5 |              0.10972 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5509 | >20%                    |                 2 |              0.27545 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5583 | 5-10%                   |                10 |              0.05583 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5801 |                         |                 2 |              0.29005 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5866 | >20%                    |                 2 |              0.2933  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5876 | >20%                    |                 5 |              0.11752 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5879 | <5%                     |                 5 |              0.11758 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5904 | >20%                    |                 2 |              0.2952  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5934 | >20%                    |                10 |              0.05934 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5944 | >20%                    |                10 |              0.05944 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6126 | >20%                    |                 5 |              0.12252 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6274 | >20%                    |                 2 |              0.3137  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6393 | 15-20%                  |                10 |              0.06393 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6407 | >20%                    |                10 |              0.06407 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6428 | >20%                    |                 5 |              0.12856 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6457 | 5-10%                   |                 2 |              0.32285 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6581 | >20%                    |                 5 |              0.13162 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6649 | 5-10%                   |                10 |              0.06649 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6751 | >20%                    |                 5 |              0.13502 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.68   | >20%                    |                 5 |              0.136   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6852 | >20%                    |                 5 |              0.13704 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6955 | >20%                    |                10 |              0.06955 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7037 | >20%                    |                 2 |              0.35185 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7068 | >20%                    |                 5 |              0.14136 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7123 | 15-20%                  |                10 |              0.07123 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7232 | 10-15%                  |                10 |              0.07232 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7235 | 15-20%                  |                10 |              0.07235 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7268 | >20%                    |                 5 |              0.14536 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7355 | >20%                    |                 5 |              0.1471  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7363 | >20%                    |                 2 |              0.36815 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7758 | 15-20%                  |                10 |              0.07758 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7881 | >20%                    |                10 |              0.07881 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7892 | >20%                    |                10 |              0.07892 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7929 | >20%                    |                10 |              0.07929 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8041 | >20%                    |                 5 |              0.16082 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8054 | >20%                    |                 5 |              0.16108 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8115 | >20%                    |                 5 |              0.1623  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8127 | >20%                    |                10 |              0.08127 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8265 | 10-15%                  |                 2 |              0.41325 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.8443 |                         |                10 |              0.08443 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8534 |                         |                 2 |              0.4267  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8576 | >20%                    |                 5 |              0.17152 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8755 | 15-20%                  |                10 |              0.08755 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8801 | >20%                    |                10 |              0.08801 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8833 | >20%                    |                10 |              0.08833 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8941 | >20%                    |                10 |              0.08941 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9028 | >20%                    |                10 |              0.09028 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9195 | >20%                    |                10 |              0.09195 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9199 |                         |                 5 |              0.18398 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9367 | >20%                    |                10 |              0.09367 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9439 | >20%                    |                10 |              0.09439 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9455 | >20%                    |                 5 |              0.1891  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9465 | 5-10%                   |                 2 |              0.47325 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9472 | >20%                    |                10 |              0.09472 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9474 | >20%                    |                 5 |              0.18948 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9644 | >20%                    |                10 |              0.09644 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9683 | >20%                    |                10 |              0.09683 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9816 | >20%                    |                 5 |              0.19632 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9935 | >20%                    |                10 |              0.09935 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0091 | 5-10%                   |                10 |              0.10091 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.016  | >20%                    |                10 |              0.1016  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0334 | >20%                    |                 2 |              0.5167  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0416 | >20%                    |                10 |              0.10416 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0675 | >20%                    |                10 |              0.10675 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0759 |                         |                10 |              0.10759 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.089  |                         |                 5 |              0.2178  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1112 | 5-10%                   |                 5 |              0.22224 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1156 | >20%                    |                 5 |              0.22312 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1175 | 5-10%                   |                 2 |              0.55875 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1601 | >20%                    |                10 |              0.11601 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1902 | 15-20%                  |                10 |              0.11902 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2179 | 15-20%                  |                10 |              0.12179 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2367 | >20%                    |                10 |              0.12367 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2904 | >20%                    |                10 |              0.12904 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3072 | 10-15%                  |                10 |              0.13072 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3227 | 15-20%                  |                 5 |              0.26454 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3686 | >20%                    |                10 |              0.13686 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4017 | 10-15%                  |                 2 |              0.70085 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4288 | >20%                    |                 5 |              0.28576 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4669 | >20%                    |                 5 |              0.29338 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.608  | 15-20%                  |                10 |              0.1608  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0764 | >20%                    |                10 |              0.20764 |