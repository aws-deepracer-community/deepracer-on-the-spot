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

Data correct as of 2024-11-11 01:37:51.500428, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1283 | 10-15%                  |                 2 |              0.06415 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.156  | >20%                    |                 5 |              0.0312  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 5-10%                   |                 2 |              0.0831  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1794 | 10-15%                  |                 2 |              0.0897  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2106 | 10-15%                  |                 2 |              0.1053  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2127 | >20%                    |                 5 |              0.04254 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2148 | >20%                    |                 2 |              0.1074  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2206 | >20%                    |                 2 |              0.1103  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2223 | 5-10%                   |                 2 |              0.11115 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 10-15%                  |                 2 |              0.1121  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2297 | 5-10%                   |                 5 |              0.04594 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2441 | 5-10%                   |                 2 |              0.12205 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.2458 | 5-10%                   |                 2 |              0.1229  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2518 | <5%                     |                 2 |              0.1259  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2645 | <5%                     |                 5 |              0.0529  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2651 | 5-10%                   |                 2 |              0.13255 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2722 | 5-10%                   |                 2 |              0.1361  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2762 | <5%                     |                 2 |              0.1381  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2832 | 5-10%                   |                 2 |              0.1416  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2844 | <5%                     |                 2 |              0.1422  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2921 | >20%                    |                 2 |              0.14605 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | 5-10%                   |                 5 |              0.06008 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3015 | >20%                    |                 5 |              0.0603  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3021 | <5%                     |                10 |              0.03021 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3073 | <5%                     |                 5 |              0.06146 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.3167 | 10-15%                  |                 5 |              0.06334 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3199 | <5%                     |                 2 |              0.15995 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3202 | <5%                     |                 5 |              0.06404 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.332  | 10-15%                  |                 2 |              0.166   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.336  | 5-10%                   |                 2 |              0.168   |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3426 | <5%                     |                10 |              0.03426 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3434 | 15-20%                  |                10 |              0.03434 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3506 | 15-20%                  |                 2 |              0.1753  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3536 | >20%                    |                 2 |              0.1768  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3541 | <5%                     |                 2 |              0.17705 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3584 | <5%                     |                 2 |              0.1792  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3622 | <5%                     |                 2 |              0.1811  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3771 | 5-10%                   |                 2 |              0.18855 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3803 | <5%                     |                 2 |              0.19015 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.383  | 5-10%                   |                 5 |              0.0766  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.383  | >20%                    |                 2 |              0.1915  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3857 | 5-10%                   |                 5 |              0.07714 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3873 | >20%                    |                 5 |              0.07746 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3879 | >20%                    |                 2 |              0.19395 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3929 | <5%                     |                 2 |              0.19645 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4037 | >20%                    |                 2 |              0.20185 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4258 | <5%                     |                 5 |              0.08516 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4272 | 5-10%                   |                 2 |              0.2136  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4294 | 10-15%                  |                 2 |              0.2147  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4296 | <5%                     |                 5 |              0.08592 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4389 | 10-15%                  |                 5 |              0.08778 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4437 | 5-10%                   |                 2 |              0.22185 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4477 | 10-15%                  |                 5 |              0.08954 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.448  | 10-15%                  |                 2 |              0.224   |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | 5-10%                   |                10 |              0.04529 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4531 | 5-10%                   |                 5 |              0.09062 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4592 | >20%                    |                 2 |              0.2296  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4609 | 15-20%                  |                 5 |              0.09218 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4618 | 5-10%                   |                 5 |              0.09236 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4665 | 5-10%                   |                 5 |              0.0933  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4665 | >20%                    |                 5 |              0.0933  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4688 | 15-20%                  |                 2 |              0.2344  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4693 | >20%                    |                 5 |              0.09386 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4787 | 5-10%                   |                 5 |              0.09574 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4827 | <5%                     |                 2 |              0.24135 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4874 | <5%                     |                 2 |              0.2437  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4888 | 15-20%                  |                 5 |              0.09776 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4902 | >20%                    |                 5 |              0.09804 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.491  | >20%                    |                10 |              0.0491  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4986 | <5%                     |                10 |              0.04986 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5039 | <5%                     |                 5 |              0.10078 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.509  | 10-15%                  |                 5 |              0.1018  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5228 | <5%                     |                 5 |              0.10456 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5238 | 5-10%                   |                 2 |              0.2619  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5255 | <5%                     |                 5 |              0.1051  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5416 | 10-15%                  |                 2 |              0.2708  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5447 | >20%                    |                 5 |              0.10894 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5464 | 5-10%                   |                 5 |              0.10928 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5471 | >20%                    |                 5 |              0.10942 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5489 | 5-10%                   |                 5 |              0.10978 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5585 | 15-20%                  |                 2 |              0.27925 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.561  | 10-15%                  |                10 |              0.0561  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5685 | 15-20%                  |                10 |              0.05685 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5742 | >20%                    |                 5 |              0.11484 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5748 | 15-20%                  |                 2 |              0.2874  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5765 | >20%                    |                 5 |              0.1153  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.579  | 15-20%                  |                 5 |              0.1158  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5857 | 10-15%                  |                10 |              0.05857 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5858 | <5%                     |                 5 |              0.11716 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5949 | 10-15%                  |                 5 |              0.11898 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6003 | >20%                    |                10 |              0.06003 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6109 | 5-10%                   |                10 |              0.06109 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6154 | <5%                     |                10 |              0.06154 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6298 | <5%                     |                 2 |              0.3149  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6496 | 5-10%                   |                10 |              0.06496 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6525 | >20%                    |                 5 |              0.1305  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6648 | >20%                    |                 2 |              0.3324  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6679 | 15-20%                  |                 5 |              0.13358 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.687  | >20%                    |                10 |              0.0687  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.691  | 5-10%                   |                10 |              0.0691  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6934 | 5-10%                   |                 5 |              0.13868 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7076 | 5-10%                   |                10 |              0.07076 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7139 | 10-15%                  |                10 |              0.07139 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7145 | 5-10%                   |                 5 |              0.1429  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7195 | >20%                    |                10 |              0.07195 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7363 | <5%                     |                10 |              0.07363 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.76   | 15-20%                  |                 5 |              0.152   |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7679 | >20%                    |                10 |              0.07679 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7705 | 15-20%                  |                10 |              0.07705 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7837 | 5-10%                   |                 5 |              0.15674 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7926 | 10-15%                  |                10 |              0.07926 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7967 | <5%                     |                10 |              0.07967 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.802  | 10-15%                  |                10 |              0.0802  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.805  | >20%                    |                10 |              0.0805  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.825  | >20%                    |                10 |              0.0825  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8291 | 15-20%                  |                10 |              0.08291 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8361 | 15-20%                  |                10 |              0.08361 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8502 | 5-10%                   |                10 |              0.08502 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8547 | <5%                     |                 5 |              0.17094 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8551 | <5%                     |                 2 |              0.42755 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8676 | 5-10%                   |                10 |              0.08676 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8711 | 5-10%                   |                10 |              0.08711 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8822 | >20%                    |                 5 |              0.17644 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8854 | >20%                    |                10 |              0.08854 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9226 | <5%                     |                10 |              0.09226 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.955  | <5%                     |                10 |              0.0955  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9901 | 10-15%                  |                10 |              0.09901 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9943 | <5%                     |                10 |              0.09943 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0041 | 10-15%                  |                10 |              0.10041 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0519 | <5%                     |                10 |              0.10519 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0577 | >20%                    |                10 |              0.10577 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0684 | <5%                     |                10 |              0.10684 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0819 | >20%                    |                10 |              0.10819 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.126  | 15-20%                  |                10 |              0.1126  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.126  | 15-20%                  |                10 |              0.1126  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3939 | >20%                    |                10 |              0.13939 |