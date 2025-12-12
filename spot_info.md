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

Data correct as of 2025-12-12 01:59:26.554758, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1198 | >20%                    |                 2 |              0.0599  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1533 | >20%                    |                 2 |              0.07665 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1618 | <5%                     |                 2 |              0.0809  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1687 | 15-20%                  |                 2 |              0.08435 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1828 | >20%                    |                 2 |              0.0914  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 5-10%                   |                 5 |              0.03708 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1946 | >20%                    |                 2 |              0.0973  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2028 | >20%                    |                 2 |              0.1014  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2241 | >20%                    |                 5 |              0.04482 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2275 | >20%                    |                 5 |              0.0455  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2385 | >20%                    |                 2 |              0.11925 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2422 | >20%                    |                 2 |              0.1211  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2495 | >20%                    |                 2 |              0.12475 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2596 | 10-15%                  |                 2 |              0.1298  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.261  | 10-15%                  |                 5 |              0.0522  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | >20%                    |                10 |              0.02669 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2713 | <5%                     |                 5 |              0.05426 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2752 | 5-10%                   |                 2 |              0.1376  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2798 | >20%                    |                 2 |              0.1399  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2824 | 15-20%                  |                 2 |              0.1412  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2833 | >20%                    |                 2 |              0.14165 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2937 | 10-15%                  |                 2 |              0.14685 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2972 | >20%                    |                 2 |              0.1486  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2996 | >20%                    |                 5 |              0.05992 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3036 | >20%                    |                 5 |              0.06072 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3121 | 10-15%                  |                 2 |              0.15605 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3143 | >20%                    |                 2 |              0.15715 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3156 | >20%                    |                 2 |              0.1578  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3246 | 10-15%                  |                10 |              0.03246 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3443 | >20%                    |                 2 |              0.17215 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3484 | 5-10%                   |                10 |              0.03484 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3516 | 15-20%                  |                 2 |              0.1758  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3578 | >20%                    |                 2 |              0.1789  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3594 | >20%                    |                10 |              0.03594 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3608 | >20%                    |                 2 |              0.1804  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3632 | 5-10%                   |                 2 |              0.1816  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3683 | >20%                    |                 5 |              0.07366 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.372  | >20%                    |                10 |              0.0372  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3721 | <5%                     |                 5 |              0.07442 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3752 | >20%                    |                 2 |              0.1876  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.385  | >20%                    |                 5 |              0.077   |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3853 | <5%                     |                10 |              0.03853 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3883 | >20%                    |                 2 |              0.19415 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3884 | >20%                    |                 5 |              0.07768 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.39   | >20%                    |                 5 |              0.078   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3935 | 15-20%                  |                 5 |              0.0787  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3962 | >20%                    |                10 |              0.03962 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3994 | >20%                    |                 5 |              0.07988 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4007 | >20%                    |                 2 |              0.20035 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4069 | 10-15%                  |                 2 |              0.20345 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4069 | 15-20%                  |                10 |              0.04069 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4107 | >20%                    |                 5 |              0.08214 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4113 | <5%                     |                 2 |              0.20565 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4118 | <5%                     |                 2 |              0.2059  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4132 | 15-20%                  |                 5 |              0.08264 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4193 | >20%                    |                10 |              0.04193 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4254 | >20%                    |                10 |              0.04254 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4265 | >20%                    |                 5 |              0.0853  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.428  | >20%                    |                 2 |              0.214   |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4285 | 10-15%                  |                 2 |              0.21425 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4294 | <5%                     |                 2 |              0.2147  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4295 | >20%                    |                 2 |              0.21475 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4296 | >20%                    |                 2 |              0.2148  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4383 | >20%                    |                 5 |              0.08766 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4427 | 10-15%                  |                10 |              0.04427 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4484 | 15-20%                  |                 2 |              0.2242  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4514 | 15-20%                  |                 5 |              0.09028 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4528 | >20%                    |                 5 |              0.09056 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4572 | 15-20%                  |                 5 |              0.09144 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4579 | >20%                    |                 2 |              0.22895 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4612 | <5%                     |                10 |              0.04612 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4617 | 15-20%                  |                 5 |              0.09234 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4706 | >20%                    |                 2 |              0.2353  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4728 | >20%                    |                 5 |              0.09456 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4784 | >20%                    |                 2 |              0.2392  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4888 | 15-20%                  |                 2 |              0.2444  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4927 | >20%                    |                 2 |              0.24635 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4935 | >20%                    |                 5 |              0.0987  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4985 | 5-10%                   |                 5 |              0.0997  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5004 | >20%                    |                 5 |              0.10008 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5029 | >20%                    |                 2 |              0.25145 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5096 | <5%                     |                10 |              0.05096 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5101 | >20%                    |                 5 |              0.10202 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5177 | 15-20%                  |                 2 |              0.25885 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5188 | >20%                    |                 5 |              0.10376 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.535  | >20%                    |                 2 |              0.2675  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5356 | >20%                    |                 5 |              0.10712 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5393 | 15-20%                  |                 5 |              0.10786 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5422 | >20%                    |                 5 |              0.10844 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5426 | >20%                    |                 2 |              0.2713  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5625 | >20%                    |                 5 |              0.1125  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5645 | >20%                    |                 2 |              0.28225 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5645 | >20%                    |                 5 |              0.1129  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5686 | <5%                     |                 5 |              0.11372 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5703 | 10-15%                  |                 5 |              0.11406 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5711 | <5%                     |                 5 |              0.11422 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5775 | 10-15%                  |                 5 |              0.1155  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.58   | >20%                    |                 5 |              0.116   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5854 | >20%                    |                 5 |              0.11708 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5886 | >20%                    |                10 |              0.05886 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5928 | 5-10%                   |                 5 |              0.11856 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5944 | >20%                    |                10 |              0.05944 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5968 | >20%                    |                 5 |              0.11936 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6083 | <5%                     |                 5 |              0.12166 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6086 | 5-10%                   |                 5 |              0.12172 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6103 | >20%                    |                 2 |              0.30515 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6275 | >20%                    |                 2 |              0.31375 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6297 | >20%                    |                 2 |              0.31485 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6416 | 10-15%                  |                 5 |              0.12832 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.644  | 15-20%                  |                 5 |              0.1288  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6683 | >20%                    |                10 |              0.06683 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6721 | 15-20%                  |                10 |              0.06721 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6731 | >20%                    |                10 |              0.06731 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6746 | 5-10%                   |                 5 |              0.13492 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.688  | >20%                    |                 2 |              0.344   |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.689  | >20%                    |                 2 |              0.3445  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6939 | >20%                    |                 5 |              0.13878 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6959 | >20%                    |                10 |              0.06959 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7016 | 5-10%                   |                10 |              0.07016 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7117 | >20%                    |                10 |              0.07117 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7181 | 10-15%                  |                10 |              0.07181 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7274 | >20%                    |                 5 |              0.14548 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7327 | >20%                    |                10 |              0.07327 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7385 | >20%                    |                 2 |              0.36925 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.7388 | >20%                    |                 5 |              0.14776 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7396 | >20%                    |                 5 |              0.14792 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7432 | >20%                    |                10 |              0.07432 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7434 | >20%                    |                10 |              0.07434 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7435 | >20%                    |                 5 |              0.1487  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7516 | >20%                    |                10 |              0.07516 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7611 | 15-20%                  |                10 |              0.07611 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7624 | >20%                    |                 2 |              0.3812  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7628 | 10-15%                  |                10 |              0.07628 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7654 | >20%                    |                10 |              0.07654 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.7705 | >20%                    |                10 |              0.07705 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7813 | >20%                    |                10 |              0.07813 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7929 | >20%                    |                10 |              0.07929 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7942 | 15-20%                  |                10 |              0.07942 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8011 | >20%                    |                10 |              0.08011 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8144 | <5%                     |                10 |              0.08144 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8145 | 10-15%                  |                10 |              0.08145 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8172 | >20%                    |                 2 |              0.4086  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8216 | >20%                    |                 5 |              0.16432 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8241 | >20%                    |                 2 |              0.41205 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8318 | >20%                    |                 5 |              0.16636 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8499 | >20%                    |                 5 |              0.16998 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8648 | >20%                    |                10 |              0.08648 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8689 | 10-15%                  |                 5 |              0.17378 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8701 | >20%                    |                10 |              0.08701 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8701 | >20%                    |                 5 |              0.17402 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8909 | 10-15%                  |                10 |              0.08909 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9012 | >20%                    |                10 |              0.09012 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9149 | 10-15%                  |                10 |              0.09149 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9178 | 5-10%                   |                10 |              0.09178 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9296 | >20%                    |                10 |              0.09296 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9313 | >20%                    |                 5 |              0.18626 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9407 | >20%                    |                 5 |              0.18814 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.943  | >20%                    |                10 |              0.0943  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9627 | >20%                    |                10 |              0.09627 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.9662 | 15-20%                  |                 2 |              0.4831  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9829 | >20%                    |                 2 |              0.49145 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0052 | >20%                    |                 2 |              0.5026  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0197 | 15-20%                  |                10 |              0.10197 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0249 | >20%                    |                10 |              0.10249 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0295 | 10-15%                  |                10 |              0.10295 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0567 | 10-15%                  |                10 |              0.10567 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      1.0879 | >20%                    |                 2 |              0.54395 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1459 | 5-10%                   |                 5 |              0.22918 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2021 | >20%                    |                10 |              0.12021 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2176 | >20%                    |                10 |              0.12176 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.2649 | 5-10%                   |                10 |              0.12649 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2766 | >20%                    |                 5 |              0.25532 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4219 | 15-20%                  |                10 |              0.14219 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4395 | >20%                    |                 5 |              0.2879  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4452 | >20%                    |                 2 |              0.7226  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4658 | >20%                    |                10 |              0.14658 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4724 | >20%                    |                 2 |              0.7362  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5165 | >20%                    |                10 |              0.15165 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.555  | 15-20%                  |                10 |              0.1555  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5953 | 10-15%                  |                 5 |              0.31906 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0799 | 10-15%                  |                10 |              0.20799 |