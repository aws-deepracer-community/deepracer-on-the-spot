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

Data correct as of 2024-09-08 01:38:01.403203, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0887 | <5%                     |                 2 |              0.04435 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1949 | 15-20%                  |                 5 |              0.03898 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2185 | 10-15%                  |                 2 |              0.10925 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2313 | 15-20%                  |                 2 |              0.11565 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2387 | <5%                     |                 2 |              0.11935 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2514 | 10-15%                  |                 2 |              0.1257  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2543 | 5-10%                   |                 2 |              0.12715 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.263  | <5%                     |                 2 |              0.1315  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2774 | <5%                     |                 2 |              0.1387  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2811 | <5%                     |                 2 |              0.14055 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2817 | <5%                     |                 5 |              0.05634 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2996 | 10-15%                  |                 2 |              0.1498  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3053 | <5%                     |                 2 |              0.15265 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3154 | <5%                     |                 2 |              0.1577  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3195 | <5%                     |                 2 |              0.15975 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3202 | <5%                     |                 2 |              0.1601  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3452 | 15-20%                  |                 5 |              0.06904 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3481 | >20%                    |                10 |              0.03481 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3552 | <5%                     |                 2 |              0.1776  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3557 | <5%                     |                 2 |              0.17785 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.361  | <5%                     |                 2 |              0.1805  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3632 | <5%                     |                 2 |              0.1816  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3695 | <5%                     |                 5 |              0.0739  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | <5%                     |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3849 | <5%                     |                 5 |              0.07698 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3857 | >20%                    |                 5 |              0.07714 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3926 | 10-15%                  |                 2 |              0.1963  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | 15-20%                  |                10 |              0.04161 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4193 | >20%                    |                 2 |              0.20965 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4277 | 15-20%                  |                 5 |              0.08554 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4282 | >20%                    |                 5 |              0.08564 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4309 | >20%                    |                 2 |              0.21545 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.433  | 10-15%                  |                 2 |              0.2165  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4354 | 5-10%                   |                 2 |              0.2177  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4462 | 5-10%                   |                 5 |              0.08924 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4489 | 15-20%                  |                 5 |              0.08978 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4628 | <5%                     |                 2 |              0.2314  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4695 | <5%                     |                 5 |              0.0939  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4732 | >20%                    |                 2 |              0.2366  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4802 | <5%                     |                 5 |              0.09604 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4821 | 10-15%                  |                 5 |              0.09642 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4828 | <5%                     |                10 |              0.04828 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4828 | 5-10%                   |                 5 |              0.09656 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4857 | >20%                    |                 2 |              0.24285 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4864 | <5%                     |                 5 |              0.09728 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4968 | >20%                    |                 2 |              0.2484  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4968 | >20%                    |                 5 |              0.09936 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4976 | <5%                     |                 5 |              0.09952 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4992 | 5-10%                   |                 5 |              0.09984 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.5024 | 10-15%                  |                 2 |              0.2512  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.5032 | <5%                     |                 2 |              0.2516  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5051 | <5%                     |                 5 |              0.10102 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5146 | 5-10%                   |                 5 |              0.10292 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5181 | >20%                    |                 5 |              0.10362 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5613 | >20%                    |                 2 |              0.28065 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5658 | >20%                    |                 5 |              0.11316 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5742 | >20%                    |                 2 |              0.2871  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5819 | <5%                     |                 5 |              0.11638 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5929 | <5%                     |                 5 |              0.11858 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.5932 | <5%                     |                 2 |              0.2966  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5971 | >20%                    |                 2 |              0.29855 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.599  | 15-20%                  |                 5 |              0.1198  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6024 | >20%                    |                 5 |              0.12048 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.6032 | <5%                     |                10 |              0.06032 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6058 | <5%                     |                10 |              0.06058 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6161 | 5-10%                   |                 5 |              0.12322 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6165 | 10-15%                  |                 2 |              0.30825 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.617  | >20%                    |                 5 |              0.1234  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6201 | >20%                    |                 5 |              0.12402 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6332 | <5%                     |                 2 |              0.3166  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6343 | 5-10%                   |                 2 |              0.31715 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.6377 | <5%                     |                 5 |              0.12754 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6664 | 5-10%                   |                10 |              0.06664 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6954 | <5%                     |                10 |              0.06954 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7136 | >20%                    |                10 |              0.07136 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7136 | >20%                    |                 2 |              0.3568  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7157 | 15-20%                  |                10 |              0.07157 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7454 | <5%                     |                10 |              0.07454 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7693 | >20%                    |                 5 |              0.15386 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7705 | <5%                     |                 5 |              0.1541  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7802 | 10-15%                  |                10 |              0.07802 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7804 | >20%                    |                10 |              0.07804 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.789  | <5%                     |                 5 |              0.1578  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.796  | >20%                    |                 5 |              0.1592  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8078 | <5%                     |                10 |              0.08078 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8081 | 5-10%                   |                10 |              0.08081 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8153 | >20%                    |                10 |              0.08153 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8274 | >20%                    |                10 |              0.08274 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8283 | 10-15%                  |                10 |              0.08283 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.8326 | <5%                     |                10 |              0.08326 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.837  | 10-15%                  |                10 |              0.0837  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8531 | <5%                     |                10 |              0.08531 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8766 | <5%                     |                 5 |              0.17532 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8864 | >20%                    |                10 |              0.08864 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9141 | 15-20%                  |                 5 |              0.18282 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9184 | <5%                     |                10 |              0.09184 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9349 | >20%                    |                10 |              0.09349 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.944  | >20%                    |                10 |              0.0944  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9642 | <5%                     |                10 |              0.09642 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9931 | >20%                    |                10 |              0.09931 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.994  | 10-15%                  |                10 |              0.0994  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.9974 | >20%                    |                 5 |              0.19948 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0157 | 10-15%                  |                10 |              0.10157 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0344 | >20%                    |                10 |              0.10344 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0508 | 10-15%                  |                10 |              0.10508 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1423 | 5-10%                   |                10 |              0.11423 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1498 | >20%                    |                10 |              0.11498 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1856 | >20%                    |                10 |              0.11856 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.222  | <5%                     |                10 |              0.1222  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2284 | >20%                    |                10 |              0.12284 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4216 | >20%                    |                10 |              0.14216 |