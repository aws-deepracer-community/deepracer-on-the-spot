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

Data correct as of 2024-10-05 01:35:33.030057, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1187 | <5%                     |                 2 |              0.05935 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1216 | <5%                     |                 2 |              0.0608  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1658 | 5-10%                   |                 2 |              0.0829  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.181  | 10-15%                  |                 2 |              0.0905  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1885 | 10-15%                  |                 2 |              0.09425 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1953 | 15-20%                  |                 2 |              0.09765 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.21   | >20%                    |                 2 |              0.105   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2135 | 15-20%                  |                 5 |              0.0427  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2165 | >20%                    |                 2 |              0.10825 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2238 | 5-10%                   |                 5 |              0.04476 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2325 | <5%                     |                 2 |              0.11625 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.235  | >20%                    |                 2 |              0.1175  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2354 | >20%                    |                 5 |              0.04708 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2389 | <5%                     |                 2 |              0.11945 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2463 | 10-15%                  |                 5 |              0.04926 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2559 | <5%                     |                 2 |              0.12795 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.2662 | >20%                    |                 5 |              0.05324 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2719 | 5-10%                   |                 2 |              0.13595 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.275  | <5%                     |                 2 |              0.1375  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | >20%                    |                 5 |              0.0552  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2791 | <5%                     |                 2 |              0.13955 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2849 | <5%                     |                 2 |              0.14245 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2981 | <5%                     |                 2 |              0.14905 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | <5%                     |                10 |              0.0301  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3048 | 10-15%                  |                 2 |              0.1524  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3063 | 15-20%                  |                 5 |              0.06126 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.31   | 15-20%                  |                10 |              0.031   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3116 | >20%                    |                 5 |              0.06232 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3175 | 15-20%                  |                 2 |              0.15875 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3181 | 15-20%                  |                 2 |              0.15905 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3251 | >20%                    |                 5 |              0.06502 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3269 | 5-10%                   |                10 |              0.03269 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3272 | <5%                     |                 2 |              0.1636  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3378 | >20%                    |                 5 |              0.06756 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.344  | <5%                     |                 2 |              0.172   |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3457 | >20%                    |                10 |              0.03457 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3606 | >20%                    |                 5 |              0.07212 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3621 | <5%                     |                 2 |              0.18105 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3666 | 5-10%                   |                 5 |              0.07332 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3695 | <5%                     |                 5 |              0.0739  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3703 | 5-10%                   |                 2 |              0.18515 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3706 | 5-10%                   |                10 |              0.03706 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.3765 | >20%                    |                10 |              0.03765 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3806 | <5%                     |                 5 |              0.07612 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4004 | >20%                    |                 2 |              0.2002  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4111 | >20%                    |                 2 |              0.20555 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4124 | >20%                    |                 2 |              0.2062  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4187 | 5-10%                   |                 2 |              0.20935 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4251 | <5%                     |                 2 |              0.21255 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4289 | 5-10%                   |                10 |              0.04289 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4291 | 15-20%                  |                 5 |              0.08582 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.4343 | <5%                     |                10 |              0.04343 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.4431 | 5-10%                   |                 5 |              0.08862 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4471 | <5%                     |                 2 |              0.22355 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4496 | 5-10%                   |                10 |              0.04496 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4503 | >20%                    |                 2 |              0.22515 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4529 | <5%                     |                 5 |              0.09058 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4551 | 5-10%                   |                 2 |              0.22755 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4567 | 10-15%                  |                 5 |              0.09134 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4623 | <5%                     |                 5 |              0.09246 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4629 | 10-15%                  |                 5 |              0.09258 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.4698 | >20%                    |                10 |              0.04698 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4731 | 10-15%                  |                 2 |              0.23655 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4844 | 5-10%                   |                 5 |              0.09688 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4896 | >20%                    |                 2 |              0.2448  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5018 | 5-10%                   |                 5 |              0.10036 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5021 | <5%                     |                 5 |              0.10042 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5063 | >20%                    |                 2 |              0.25315 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5064 | <5%                     |                 5 |              0.10128 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5065 | <5%                     |                 5 |              0.1013  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5112 | >20%                    |                 2 |              0.2556  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5165 | <5%                     |                 5 |              0.1033  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5195 | 15-20%                  |                 5 |              0.1039  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5197 | <5%                     |                 5 |              0.10394 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5273 | >20%                    |                 5 |              0.10546 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5675 | >20%                    |                 5 |              0.1135  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5867 | >20%                    |                 5 |              0.11734 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6074 | 15-20%                  |                 5 |              0.12148 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6083 | >20%                    |                 2 |              0.30415 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6091 | >20%                    |                 5 |              0.12182 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6294 | >20%                    |                10 |              0.06294 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6317 | 10-15%                  |                 5 |              0.12634 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6549 | 5-10%                   |                10 |              0.06549 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6753 | 5-10%                   |                 5 |              0.13506 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.677  | >20%                    |                 5 |              0.1354  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6781 | <5%                     |                10 |              0.06781 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.699  | >20%                    |                 2 |              0.3495  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6998 | <5%                     |                10 |              0.06998 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7271 | 5-10%                   |                10 |              0.07271 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7446 | >20%                    |                 5 |              0.14892 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7498 | >20%                    |                10 |              0.07498 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7551 | 15-20%                  |                10 |              0.07551 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7614 | 15-20%                  |                10 |              0.07614 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7638 | 10-15%                  |                10 |              0.07638 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.774  | >20%                    |                10 |              0.0774  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7784 | >20%                    |                10 |              0.07784 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.82   | 10-15%                  |                10 |              0.082   |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.8275 | 15-20%                  |                 5 |              0.1655  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8287 | 5-10%                   |                10 |              0.08287 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8454 | >20%                    |                10 |              0.08454 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.857  | <5%                     |                10 |              0.0857  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8638 | 15-20%                  |                10 |              0.08638 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8742 | <5%                     |                10 |              0.08742 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8861 | >20%                    |                10 |              0.08861 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8976 | >20%                    |                10 |              0.08976 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9062 | >20%                    |                 5 |              0.18124 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9089 | >20%                    |                 2 |              0.45445 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9339 | <5%                     |                10 |              0.09339 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9346 | 5-10%                   |                10 |              0.09346 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9704 | 10-15%                  |                 2 |              0.4852  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9851 | 5-10%                   |                10 |              0.09851 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9873 | 10-15%                  |                 5 |              0.19746 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9873 | <5%                     |                 2 |              0.49365 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0335 | <5%                     |                10 |              0.10335 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0336 | >20%                    |                10 |              0.10336 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.096  | >20%                    |                10 |              0.1096  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1286 | >20%                    |                10 |              0.11286 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1358 | >20%                    |                 5 |              0.22716 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1844 | >20%                    |                10 |              0.11844 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4326 | 10-15%                  |                10 |              0.14326 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.5144 | >20%                    |                10 |              0.15144 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6593 | 5-10%                   |                10 |              0.16593 |