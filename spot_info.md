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

Data correct as of 2024-12-11 01:46:35.907393, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1714 | 15-20%                  |                 2 |              0.0857  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2103 | 15-20%                  |                 2 |              0.10515 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2132 | <5%                     |                 2 |              0.1066  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.216  | 5-10%                   |                 5 |              0.0432  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2184 | >20%                    |                 2 |              0.1092  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.225  | 15-20%                  |                 5 |              0.045   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2292 | 15-20%                  |                 2 |              0.1146  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2316 | 10-15%                  |                 2 |              0.1158  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2318 | <5%                     |                 2 |              0.1159  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2347 | >20%                    |                 5 |              0.04694 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2455 | <5%                     |                 2 |              0.12275 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2489 | >20%                    |                 2 |              0.12445 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2578 | 15-20%                  |                10 |              0.02578 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2804 | <5%                     |                 2 |              0.1402  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 | <5%                     |                 2 |              0.1402  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2829 | >20%                    |                 5 |              0.05658 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2843 | <5%                     |                 2 |              0.14215 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3004 | >20%                    |                 2 |              0.1502  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | <5%                     |                10 |              0.0301  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3148 | 5-10%                   |                 2 |              0.1574  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3171 | <5%                     |                 2 |              0.15855 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3242 | <5%                     |                 2 |              0.1621  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3271 | <5%                     |                 5 |              0.06542 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3374 | >20%                    |                 5 |              0.06748 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3376 | <5%                     |                 5 |              0.06752 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3405 | 10-15%                  |                 2 |              0.17025 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3422 | >20%                    |                 2 |              0.1711  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.344  | >20%                    |                 2 |              0.172   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3493 | >20%                    |                 2 |              0.17465 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3502 | <5%                     |                 2 |              0.1751  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3502 | <5%                     |                 5 |              0.07004 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3566 | >20%                    |                 5 |              0.07132 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3635 | >20%                    |                10 |              0.03635 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3637 | >20%                    |                 2 |              0.18185 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3666 | 15-20%                  |                 2 |              0.1833  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3729 | >20%                    |                 2 |              0.18645 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.373  | 5-10%                   |                 2 |              0.1865  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.379  | 5-10%                   |                 2 |              0.1895  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.3797 | 5-10%                   |                 2 |              0.18985 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.389  | <5%                     |                 5 |              0.0778  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.394  | <5%                     |                 2 |              0.197   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3967 | 5-10%                   |                 2 |              0.19835 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3971 | >20%                    |                 5 |              0.07942 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3987 | 5-10%                   |                10 |              0.03987 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4088 | 5-10%                   |                 2 |              0.2044  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4129 | 5-10%                   |                 2 |              0.20645 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4179 | >20%                    |                 2 |              0.20895 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.425  | 5-10%                   |                 5 |              0.085   |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4271 | 10-15%                  |                 5 |              0.08542 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.429  | <5%                     |                 5 |              0.0858  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4373 | 15-20%                  |                 2 |              0.21865 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4388 | 10-15%                  |                 5 |              0.08776 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.455  | <5%                     |                 2 |              0.2275  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.4581 | 5-10%                   |                 5 |              0.09162 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4631 | >20%                    |                 2 |              0.23155 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4639 | 10-15%                  |                 2 |              0.23195 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4669 | 5-10%                   |                 5 |              0.09338 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4676 | >20%                    |                 5 |              0.09352 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4679 | <5%                     |                 5 |              0.09358 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4699 | 15-20%                  |                 5 |              0.09398 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4738 | 5-10%                   |                 2 |              0.2369  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4762 | >20%                    |                 5 |              0.09524 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4797 | >20%                    |                 5 |              0.09594 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4807 | 10-15%                  |                 2 |              0.24035 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4877 | >20%                    |                 2 |              0.24385 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.4903 | >20%                    |                10 |              0.04903 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4919 | 5-10%                   |                10 |              0.04919 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5012 | 15-20%                  |                 5 |              0.10024 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.5027 | 10-15%                  |                 2 |              0.25135 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5028 | 10-15%                  |                 5 |              0.10056 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5089 | <5%                     |                 5 |              0.10178 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5121 | 5-10%                   |                 5 |              0.10242 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5145 | <5%                     |                 5 |              0.1029  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5149 | 10-15%                  |                10 |              0.05149 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5176 | >20%                    |                10 |              0.05176 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5244 | 10-15%                  |                 2 |              0.2622  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5246 | 10-15%                  |                 5 |              0.10492 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5265 | >20%                    |                 5 |              0.1053  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5321 | >20%                    |                 5 |              0.10642 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5461 | >20%                    |                 2 |              0.27305 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5516 | 10-15%                  |                 5 |              0.11032 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5534 | 10-15%                  |                 5 |              0.11068 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5536 | >20%                    |                 5 |              0.11072 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 | <5%                     |                10 |              0.05663 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5762 | <5%                     |                 5 |              0.11524 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5768 | 15-20%                  |                10 |              0.05768 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.58   | 5-10%                   |                 2 |              0.29    |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5918 | 5-10%                   |                 5 |              0.11836 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6198 | >20%                    |                10 |              0.06198 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6276 | 5-10%                   |                10 |              0.06276 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6411 | 15-20%                  |                 5 |              0.12822 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6523 | 10-15%                  |                10 |              0.06523 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.653  | 5-10%                   |                10 |              0.0653  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6627 | >20%                    |                 2 |              0.33135 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6666 | <5%                     |                 5 |              0.13332 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6693 | 10-15%                  |                 5 |              0.13386 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6707 | >20%                    |                 5 |              0.13414 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6723 | >20%                    |                10 |              0.06723 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.673  | >20%                    |                10 |              0.0673  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6755 | <5%                     |                 5 |              0.1351  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.7279 | <5%                     |                10 |              0.07279 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7348 | >20%                    |                10 |              0.07348 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7395 | <5%                     |                 2 |              0.36975 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7399 | >20%                    |                 5 |              0.14798 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.741  | >20%                    |                 5 |              0.1482  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7559 | >20%                    |                 5 |              0.15118 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7702 | <5%                     |                 5 |              0.15404 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7859 | <5%                     |                10 |              0.07859 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7907 | >20%                    |                10 |              0.07907 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8004 | <5%                     |                10 |              0.08004 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8084 | 10-15%                  |                10 |              0.08084 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8152 | 15-20%                  |                10 |              0.08152 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8376 | 5-10%                   |                10 |              0.08376 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8461 | 5-10%                   |                 2 |              0.42305 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8605 | 5-10%                   |                10 |              0.08605 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8629 | 10-15%                  |                10 |              0.08629 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8653 | 10-15%                  |                10 |              0.08653 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8667 | 5-10%                   |                10 |              0.08667 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9063 | 15-20%                  |                10 |              0.09063 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9106 | 10-15%                  |                10 |              0.09106 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9136 | <5%                     |                10 |              0.09136 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9247 | <5%                     |                 5 |              0.18494 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.927  | 5-10%                   |                10 |              0.0927  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9273 | 5-10%                   |                10 |              0.09273 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9276 | <5%                     |                10 |              0.09276 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.936  | >20%                    |                10 |              0.0936  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      0.9515 | <5%                     |                 5 |              0.1903  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9755 | 5-10%                   |                10 |              0.09755 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0064 | >20%                    |                10 |              0.10064 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0154 | 5-10%                   |                10 |              0.10154 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0491 | >20%                    |                10 |              0.10491 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.086  | <5%                     |                10 |              0.1086  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1527 | >20%                    |                10 |              0.11527 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.211  | <5%                     |                10 |              0.1211  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2223 | >20%                    |                10 |              0.12223 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4729 | 5-10%                   |                10 |              0.14729 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.5297 | 5-10%                   |                10 |              0.15297 |