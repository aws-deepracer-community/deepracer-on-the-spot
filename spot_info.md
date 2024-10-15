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

Data correct as of 2024-10-15 01:38:37.029655, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1148 | <5%                     |                 2 |              0.0574  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1318 | 10-15%                  |                 2 |              0.0659  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1653 | <5%                     |                 2 |              0.08265 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.186  | 15-20%                  |                 2 |              0.093   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2095 | >20%                    |                 2 |              0.10475 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2186 | <5%                     |                 2 |              0.1093  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.227  | >20%                    |                 2 |              0.1135  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2379 | >20%                    |                 5 |              0.04758 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2389 | <5%                     |                 2 |              0.11945 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2402 | <5%                     |                 2 |              0.1201  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.249  | <5%                     |                 2 |              0.1245  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2617 | 15-20%                  |                 2 |              0.13085 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2685 | <5%                     |                 2 |              0.13425 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2709 | <5%                     |                 2 |              0.13545 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2723 | 10-15%                  |                 2 |              0.13615 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2743 | 10-15%                  |                 2 |              0.13715 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2753 | >20%                    |                 5 |              0.05506 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2785 | >20%                    |                 5 |              0.0557  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2795 | 15-20%                  |                 2 |              0.13975 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2848 | <5%                     |                 2 |              0.1424  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2877 | 5-10%                   |                 2 |              0.14385 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3001 | 15-20%                  |                 2 |              0.15005 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3107 | >20%                    |                 5 |              0.06214 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3203 | 15-20%                  |                 2 |              0.16015 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3305 | <5%                     |                 2 |              0.16525 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3311 | <5%                     |                10 |              0.03311 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3383 | 15-20%                  |                10 |              0.03383 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3384 | >20%                    |                 2 |              0.1692  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3446 | 5-10%                   |                 5 |              0.06892 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3466 | 5-10%                   |                 5 |              0.06932 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.3492 | <5%                     |                 2 |              0.1746  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3503 | <5%                     |                 5 |              0.07006 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3509 | <5%                     |                 2 |              0.17545 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3529 | >20%                    |                 5 |              0.07058 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3665 | 5-10%                   |                 5 |              0.0733  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3742 | 5-10%                   |                10 |              0.03742 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3763 | 15-20%                  |                 5 |              0.07526 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3838 | >20%                    |                 2 |              0.1919  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3904 | <5%                     |                 5 |              0.07808 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.3973 | 5-10%                   |                 5 |              0.07946 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4011 | <5%                     |                 5 |              0.08022 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4084 | <5%                     |                 5 |              0.08168 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4192 | >20%                    |                 5 |              0.08384 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4245 | 5-10%                   |                 2 |              0.21225 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4258 | 5-10%                   |                10 |              0.04258 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4289 | 5-10%                   |                 2 |              0.21445 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4297 | >20%                    |                 5 |              0.08594 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4307 | >20%                    |                10 |              0.04307 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4331 | <5%                     |                 2 |              0.21655 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.435  | >20%                    |                 2 |              0.2175  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4431 | >20%                    |                 2 |              0.22155 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4433 | 15-20%                  |                 5 |              0.08866 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.444  | 10-15%                  |                 5 |              0.0888  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4478 | 15-20%                  |                 2 |              0.2239  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4498 | >20%                    |                 2 |              0.2249  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4503 | >20%                    |                 2 |              0.22515 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4604 | 5-10%                   |                 2 |              0.2302  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.461  | 10-15%                  |                 5 |              0.0922  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4652 | 15-20%                  |                 5 |              0.09304 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4652 | >20%                    |                10 |              0.04652 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4734 | <5%                     |                 5 |              0.09468 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4868 | <5%                     |                 5 |              0.09736 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4874 | >20%                    |                 2 |              0.2437  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4909 | <5%                     |                 2 |              0.24545 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4945 | 10-15%                  |                 5 |              0.0989  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5017 | <5%                     |                 5 |              0.10034 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5132 | <5%                     |                 5 |              0.10264 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5165 | >20%                    |                 2 |              0.25825 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5189 | 5-10%                   |                 5 |              0.10378 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5237 | <5%                     |                 5 |              0.10474 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5279 | <5%                     |                 5 |              0.10558 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5328 | 5-10%                   |                10 |              0.05328 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.535  | 5-10%                   |                10 |              0.0535  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5369 | >20%                    |                 5 |              0.10738 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5544 | 5-10%                   |                10 |              0.05544 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5604 | >20%                    |                 5 |              0.11208 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.566  | >20%                    |                 5 |              0.1132  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5688 | 15-20%                  |                10 |              0.05688 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5781 | 15-20%                  |                 5 |              0.11562 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5918 | 15-20%                  |                10 |              0.05918 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5924 | >20%                    |                10 |              0.05924 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.5967 | <5%                     |                10 |              0.05967 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6002 | 15-20%                  |                 5 |              0.12004 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6037 | >20%                    |                 2 |              0.30185 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.618  | >20%                    |                 2 |              0.309   |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6232 | >20%                    |                 5 |              0.12464 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6291 | >20%                    |                 5 |              0.12582 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.6404 | <5%                     |                10 |              0.06404 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6469 | <5%                     |                10 |              0.06469 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6513 | <5%                     |                10 |              0.06513 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.664  | 5-10%                   |                 5 |              0.1328  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6701 | >20%                    |                10 |              0.06701 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6929 | 5-10%                   |                10 |              0.06929 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6941 | <5%                     |                10 |              0.06941 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.6954 | 15-20%                  |                10 |              0.06954 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7001 | >20%                    |                 2 |              0.35005 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7295 | >20%                    |                 5 |              0.1459  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7361 | >20%                    |                10 |              0.07361 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7519 | 5-10%                   |                10 |              0.07519 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7811 | 15-20%                  |                10 |              0.07811 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.783  | 10-15%                  |                 5 |              0.1566  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7831 | 10-15%                  |                10 |              0.07831 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7839 | >20%                    |                10 |              0.07839 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8043 | 5-10%                   |                10 |              0.08043 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8185 | >20%                    |                10 |              0.08185 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.82   | 15-20%                  |                10 |              0.082   |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8742 | <5%                     |                10 |              0.08742 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8798 | >20%                    |                 5 |              0.17596 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8828 | 10-15%                  |                10 |              0.08828 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.893  | <5%                     |                 2 |              0.4465  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9092 | >20%                    |                10 |              0.09092 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9199 | >20%                    |                10 |              0.09199 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9248 | >20%                    |                10 |              0.09248 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9255 | 10-15%                  |                 2 |              0.46275 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9333 | <5%                     |                10 |              0.09333 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9555 | 5-10%                   |                10 |              0.09555 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0251 | 10-15%                  |                 5 |              0.20502 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0275 | <5%                     |                10 |              0.10275 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0383 | >20%                    |                10 |              0.10383 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0751 | >20%                    |                 5 |              0.21502 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1017 | >20%                    |                10 |              0.11017 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1762 | >20%                    |                10 |              0.11762 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5072 | 5-10%                   |                10 |              0.15072 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.5199 | >20%                    |                10 |              0.15199 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5255 | 5-10%                   |                10 |              0.15255 |