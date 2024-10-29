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

Data correct as of 2024-10-29 01:39:42.541726, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1615 | 10-15%                  |                 2 |              0.08075 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 5-10%                   |                 2 |              0.0831  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1795 | >20%                    |                 2 |              0.08975 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1907 | 5-10%                   |                 2 |              0.09535 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1907 | 15-20%                  |                 2 |              0.09535 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1929 | <5%                     |                 2 |              0.09645 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2054 | <5%                     |                 2 |              0.1027  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2092 | <5%                     |                 2 |              0.1046  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2106 | <5%                     |                 2 |              0.1053  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.212  | 10-15%                  |                 2 |              0.106   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2218 | 15-20%                  |                 2 |              0.1109  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2247 | 5-10%                   |                 2 |              0.11235 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2321 | >20%                    |                 2 |              0.11605 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2383 | 5-10%                   |                 5 |              0.04766 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2536 | 10-15%                  |                 2 |              0.1268  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2538 | <5%                     |                 2 |              0.1269  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2623 | 5-10%                   |                 5 |              0.05246 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2722 | 10-15%                  |                 2 |              0.1361  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2734 | <5%                     |                 2 |              0.1367  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2754 | <5%                     |                 2 |              0.1377  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2787 | 15-20%                  |                 2 |              0.13935 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2803 | 5-10%                   |                 5 |              0.05606 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2868 | <5%                     |                 5 |              0.05736 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2872 | <5%                     |                 5 |              0.05744 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2875 | >20%                    |                 5 |              0.0575  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2878 | >20%                    |                 2 |              0.1439  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2918 | 10-15%                  |                 5 |              0.05836 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2927 | <5%                     |                 2 |              0.14635 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2983 | 15-20%                  |                 5 |              0.05966 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2987 | 10-15%                  |                 5 |              0.05974 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3041 | 15-20%                  |                 5 |              0.06082 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.323  | 15-20%                  |                 2 |              0.1615  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3234 | 10-15%                  |                 5 |              0.06468 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3366 | <5%                     |                 2 |              0.1683  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3452 | >20%                    |                 5 |              0.06904 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3503 | <5%                     |                 2 |              0.17515 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3624 | >20%                    |                 2 |              0.1812  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3705 | 15-20%                  |                10 |              0.03705 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3777 | 15-20%                  |                10 |              0.03777 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3784 | <5%                     |                 5 |              0.07568 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.38   | >20%                    |                 2 |              0.19    |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3819 | 5-10%                   |                 2 |              0.19095 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3873 | >20%                    |                 2 |              0.19365 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3885 | <5%                     |                 5 |              0.0777  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.393  | 5-10%                   |                 5 |              0.0786  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.395  | 5-10%                   |                 2 |              0.1975  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3979 | <5%                     |                10 |              0.03979 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4003 | 5-10%                   |                 2 |              0.20015 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4026 | 15-20%                  |                 2 |              0.2013  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4089 | 10-15%                  |                10 |              0.04089 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4091 | <5%                     |                 5 |              0.08182 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4162 | >20%                    |                 2 |              0.2081  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4243 | >20%                    |                 5 |              0.08486 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4299 | 15-20%                  |                 2 |              0.21495 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.434  | 5-10%                   |                 5 |              0.0868  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4352 | 15-20%                  |                 5 |              0.08704 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4553 | <5%                     |                10 |              0.04553 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4648 | 15-20%                  |                 5 |              0.09296 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4662 | 15-20%                  |                 2 |              0.2331  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4703 | <5%                     |                 2 |              0.23515 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4711 | 5-10%                   |                 5 |              0.09422 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.475  | 10-15%                  |                 5 |              0.095   |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4753 | 10-15%                  |                10 |              0.04753 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4753 | 5-10%                   |                 2 |              0.23765 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4816 | <5%                     |                10 |              0.04816 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4824 | 5-10%                   |                 5 |              0.09648 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4844 | 15-20%                  |                 2 |              0.2422  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4846 | <5%                     |                 5 |              0.09692 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4848 | 10-15%                  |                 2 |              0.2424  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4915 | 15-20%                  |                 2 |              0.24575 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.493  | <5%                     |                10 |              0.0493  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4993 | >20%                    |                 5 |              0.09986 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.508  | >20%                    |                 5 |              0.1016  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.5144 | <5%                     |                10 |              0.05144 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5181 | <5%                     |                 5 |              0.10362 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5221 | <5%                     |                 5 |              0.10442 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5327 | 10-15%                  |                 5 |              0.10654 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5337 | >20%                    |                 2 |              0.26685 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5342 | 5-10%                   |                 5 |              0.10684 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5352 | <5%                     |                 5 |              0.10704 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5433 | 15-20%                  |                 2 |              0.27165 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5526 | >20%                    |                 2 |              0.2763  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5544 | 10-15%                  |                 5 |              0.11088 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5575 | 10-15%                  |                10 |              0.05575 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5583 | >20%                    |                 5 |              0.11166 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5609 | 5-10%                   |                 5 |              0.11218 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.569  | <5%                     |                10 |              0.0569  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.571  | 5-10%                   |                 5 |              0.1142  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5752 | 10-15%                  |                 5 |              0.11504 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5787 | 5-10%                   |                 5 |              0.11574 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5808 | >20%                    |                 5 |              0.11616 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5945 | >20%                    |                 2 |              0.29725 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6104 | >20%                    |                10 |              0.06104 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6229 | >20%                    |                 5 |              0.12458 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6364 | <5%                     |                10 |              0.06364 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6392 | 5-10%                   |                10 |              0.06392 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6405 | 5-10%                   |                 5 |              0.1281  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6436 | >20%                    |                10 |              0.06436 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6477 | 5-10%                   |                10 |              0.06477 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6495 | >20%                    |                10 |              0.06495 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6532 | 5-10%                   |                10 |              0.06532 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6552 | 15-20%                  |                 5 |              0.13104 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6656 | >20%                    |                 2 |              0.3328  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6803 | 5-10%                   |                10 |              0.06803 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7095 | 5-10%                   |                10 |              0.07095 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.722  | >20%                    |                10 |              0.0722  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7482 | >20%                    |                10 |              0.07482 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7488 | >20%                    |                 5 |              0.14976 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7527 | 15-20%                  |                10 |              0.07527 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.774  | 5-10%                   |                 5 |              0.1548  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7821 | <5%                     |                10 |              0.07821 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7966 | 10-15%                  |                10 |              0.07966 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8267 | >20%                    |                10 |              0.08267 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8409 | 5-10%                   |                10 |              0.08409 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8533 | 10-15%                  |                 2 |              0.42665 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8549 | >20%                    |                10 |              0.08549 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8587 | >20%                    |                10 |              0.08587 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8632 | >20%                    |                10 |              0.08632 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8638 | <5%                     |                 2 |              0.4319  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.904  | <5%                     |                10 |              0.0904  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9058 | >20%                    |                 5 |              0.18116 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9235 | 10-15%                  |                 5 |              0.1847  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9376 | 15-20%                  |                10 |              0.09376 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9555 | 5-10%                   |                10 |              0.09555 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0036 | 10-15%                  |                10 |              0.10036 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0183 | 10-15%                  |                 5 |              0.20366 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0204 | 10-15%                  |                10 |              0.10204 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0229 | >20%                    |                10 |              0.10229 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0233 | 15-20%                  |                10 |              0.10233 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0309 | >20%                    |                10 |              0.10309 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0943 | <5%                     |                10 |              0.10943 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1279 | >20%                    |                10 |              0.11279 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1832 | >20%                    |                10 |              0.11832 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4085 | >20%                    |                10 |              0.14085 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5116 | <5%                     |                10 |              0.15116 |