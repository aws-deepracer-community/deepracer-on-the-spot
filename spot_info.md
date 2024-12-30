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

Data correct as of 2024-12-30 01:40:20.965039, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.1564 |                         |                 2 |              0.0782  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1922 |                         |                 2 |              0.0961  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1936 | 15-20%                  |                 2 |              0.0968  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2017 | <5%                     |                 5 |              0.04034 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2089 | >20%                    |                 2 |              0.10445 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2164 | <5%                     |                 2 |              0.1082  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2274 |                         |                 5 |              0.04548 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2294 | >20%                    |                 2 |              0.1147  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.233  | 15-20%                  |                 2 |              0.1165  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2338 | 5-10%                   |                 2 |              0.1169  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2342 |                         |                 5 |              0.04684 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2359 | 15-20%                  |                 2 |              0.11795 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2449 | 15-20%                  |                 2 |              0.12245 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2516 | 5-10%                   |                 2 |              0.1258  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2898 | <5%                     |                 2 |              0.1449  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.291  | >20%                    |                 2 |              0.1455  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2921 | <5%                     |                 2 |              0.14605 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.295  | 5-10%                   |                 2 |              0.1475  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3031 | 5-10%                   |                 2 |              0.15155 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3093 | 15-20%                  |                 5 |              0.06186 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.317  | 5-10%                   |                 2 |              0.1585  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3333 | <5%                     |                 2 |              0.16665 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3386 | <5%                     |                 5 |              0.06772 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3393 | <5%                     |                 2 |              0.16965 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3437 | >20%                    |                10 |              0.03437 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3509 | >20%                    |                 2 |              0.17545 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3523 | 10-15%                  |                 2 |              0.17615 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3591 | 10-15%                  |                 2 |              0.17955 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.367  |                         |                10 |              0.0367  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3677 | >20%                    |                 2 |              0.18385 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3696 | 5-10%                   |                10 |              0.03696 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3702 | 10-15%                  |                 2 |              0.1851  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3728 | >20%                    |                 2 |              0.1864  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3842 | >20%                    |                 2 |              0.1921  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3847 | <5%                     |                 5 |              0.07694 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3848 |                         |                10 |              0.03848 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3848 | >20%                    |                 5 |              0.07696 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3861 | 15-20%                  |                10 |              0.03861 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3907 | 5-10%                   |                 2 |              0.19535 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3971 | 10-15%                  |                 2 |              0.19855 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4015 | >20%                    |                 2 |              0.20075 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4021 | <5%                     |                 2 |              0.20105 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.415  | 5-10%                   |                 2 |              0.2075  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4216 | <5%                     |                 5 |              0.08432 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4229 | 10-15%                  |                 2 |              0.21145 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4288 | 10-15%                  |                10 |              0.04288 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4321 | 5-10%                   |                 2 |              0.21605 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4324 | >20%                    |                 5 |              0.08648 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4378 | 5-10%                   |                 2 |              0.2189  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4379 | 5-10%                   |                 5 |              0.08758 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4411 | <5%                     |                 5 |              0.08822 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4418 | 5-10%                   |                 5 |              0.08836 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4438 | 5-10%                   |                 5 |              0.08876 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4544 | >20%                    |                 5 |              0.09088 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4593 | >20%                    |                 5 |              0.09186 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4603 | <5%                     |                 5 |              0.09206 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4607 | >20%                    |                 5 |              0.09214 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4665 | 5-10%                   |                 2 |              0.23325 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4673 | 10-15%                  |                 5 |              0.09346 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4695 | 15-20%                  |                 5 |              0.0939  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4739 | 15-20%                  |                 2 |              0.23695 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4751 | 10-15%                  |                 5 |              0.09502 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4767 | <5%                     |                 5 |              0.09534 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4771 | >20%                    |                 5 |              0.09542 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4888 | 5-10%                   |                 5 |              0.09776 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4919 | 15-20%                  |                 2 |              0.24595 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4926 | 5-10%                   |                 5 |              0.09852 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4942 | 10-15%                  |                 2 |              0.2471  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4989 | <5%                     |                 5 |              0.09978 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5067 | <5%                     |                 2 |              0.25335 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5086 | <5%                     |                 5 |              0.10172 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5113 | 10-15%                  |                 2 |              0.25565 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5192 | >20%                    |                 5 |              0.10384 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5249 | >20%                    |                 5 |              0.10498 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5353 | <5%                     |                 5 |              0.10706 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5383 | 5-10%                   |                 5 |              0.10766 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5392 | >20%                    |                 5 |              0.10784 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5502 | >20%                    |                 2 |              0.2751  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5547 | 10-15%                  |                 5 |              0.11094 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5613 | 10-15%                  |                10 |              0.05613 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5627 | 5-10%                   |                10 |              0.05627 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5662 | 15-20%                  |                 5 |              0.11324 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5762 | >20%                    |                 2 |              0.2881  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5788 | >20%                    |                 5 |              0.11576 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5805 | >20%                    |                 5 |              0.1161  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5809 | <5%                     |                 2 |              0.29045 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6279 | >20%                    |                10 |              0.06279 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6367 | <5%                     |                 5 |              0.12734 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6511 | 5-10%                   |                10 |              0.06511 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6618 | <5%                     |                 5 |              0.13236 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6705 | >20%                    |                10 |              0.06705 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6742 | 15-20%                  |                 2 |              0.3371  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.688  | >20%                    |                10 |              0.0688  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6989 | 15-20%                  |                 5 |              0.13978 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7007 | >20%                    |                10 |              0.07007 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7007 | 5-10%                   |                 5 |              0.14014 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7022 | 15-20%                  |                 5 |              0.14044 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7023 | 10-15%                  |                10 |              0.07023 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7126 | <5%                     |                 5 |              0.14252 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7157 | 5-10%                   |                10 |              0.07157 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7175 | >20%                    |                 2 |              0.35875 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7267 | 10-15%                  |                10 |              0.07267 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7271 | >20%                    |                10 |              0.07271 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7277 | <5%                     |                 2 |              0.36385 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7591 | 5-10%                   |                10 |              0.07591 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7707 | >20%                    |                 5 |              0.15414 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.776  | <5%                     |                10 |              0.0776  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7867 | >20%                    |                 5 |              0.15734 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.788  | >20%                    |                 5 |              0.1576  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7889 | <5%                     |                10 |              0.07889 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7951 | 15-20%                  |                10 |              0.07951 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8001 | 15-20%                  |                10 |              0.08001 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8144 | 10-15%                  |                10 |              0.08144 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8161 | 5-10%                   |                10 |              0.08161 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8422 | 5-10%                   |                10 |              0.08422 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.8471 | <5%                     |                 2 |              0.42355 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8483 | 5-10%                   |                10 |              0.08483 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8534 | 10-15%                  |                10 |              0.08534 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8591 | >20%                    |                10 |              0.08591 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8639 | 10-15%                  |                10 |              0.08639 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.8738 | >20%                    |                10 |              0.08738 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.879  | <5%                     |                10 |              0.0879  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8829 | 5-10%                   |                10 |              0.08829 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8908 | <5%                     |                10 |              0.08908 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9029 | 5-10%                   |                 5 |              0.18058 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9237 | 15-20%                  |                10 |              0.09237 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9497 | >20%                    |                10 |              0.09497 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.961  | 5-10%                   |                 5 |              0.1922  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9778 | <5%                     |                 5 |              0.19556 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0121 | 15-20%                  |                10 |              0.10121 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.014  | 5-10%                   |                10 |              0.1014  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.039  | 10-15%                  |                 2 |              0.5195  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0725 | <5%                     |                10 |              0.10725 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0768 | <5%                     |                10 |              0.10768 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1156 | <5%                     |                10 |              0.11156 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1232 | >20%                    |                10 |              0.11232 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1533 | >20%                    |                10 |              0.11533 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2588 | 5-10%                   |                10 |              0.12588 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3483 | >20%                    |                10 |              0.13483 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.372  | <5%                     |                10 |              0.1372  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4489 | 5-10%                   |                10 |              0.14489 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5716 | 5-10%                   |                 5 |              0.31432 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0825 | 10-15%                  |                10 |              0.20825 |