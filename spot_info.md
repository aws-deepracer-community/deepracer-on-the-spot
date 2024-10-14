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

Data correct as of 2024-10-14 01:39:37.454476, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1115 | <5%                     |                 2 |              0.05575 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1296 | 10-15%                  |                 2 |              0.0648  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1583 | <5%                     |                 2 |              0.07915 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1763 | 15-20%                  |                 2 |              0.08815 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2088 | >20%                    |                 2 |              0.1044  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2235 | <5%                     |                 2 |              0.11175 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2287 | >20%                    |                 2 |              0.11435 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2323 | <5%                     |                 2 |              0.11615 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2384 | >20%                    |                 5 |              0.04768 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2396 | <5%                     |                 2 |              0.1198  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2529 | <5%                     |                 2 |              0.12645 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2602 | 15-20%                  |                 2 |              0.1301  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2625 | 10-15%                  |                 2 |              0.13125 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2659 | 10-15%                  |                 2 |              0.13295 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2682 | >20%                    |                 5 |              0.05364 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2729 | <5%                     |                 2 |              0.13645 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2766 | 15-20%                  |                 2 |              0.1383  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2794 | <5%                     |                 2 |              0.1397  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2856 | <5%                     |                 2 |              0.1428  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.287  | >20%                    |                 5 |              0.0574  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2874 | 5-10%                   |                 2 |              0.1437  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.2925 | >20%                    |                 5 |              0.0585  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3021 | 15-20%                  |                 2 |              0.15105 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3203 | 15-20%                  |                 2 |              0.16015 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3238 | 15-20%                  |                10 |              0.03238 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3246 | <5%                     |                10 |              0.03246 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.3271 | <5%                     |                 2 |              0.16355 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3305 | <5%                     |                 2 |              0.16525 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3382 | >20%                    |                 2 |              0.1691  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3421 | 5-10%                   |                 5 |              0.06842 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3452 | 5-10%                   |                 5 |              0.06904 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3498 | 5-10%                   |                 5 |              0.06996 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3514 | <5%                     |                 2 |              0.1757  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3537 | >20%                    |                 5 |              0.07074 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3559 | 15-20%                  |                 5 |              0.07118 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3577 | <5%                     |                 5 |              0.07154 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3837 | >20%                    |                 2 |              0.19185 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.388  | 5-10%                   |                 5 |              0.0776  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3941 | <5%                     |                 5 |              0.07882 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4002 | <5%                     |                 5 |              0.08004 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4023 | >20%                    |                 5 |              0.08046 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4063 | >20%                    |                 5 |              0.08126 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4185 | 5-10%                   |                 2 |              0.20925 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4235 | <5%                     |                 5 |              0.0847  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.428  | 5-10%                   |                10 |              0.0428  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4283 | >20%                    |                 2 |              0.21415 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4286 | >20%                    |                10 |              0.04286 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4326 | 5-10%                   |                 2 |              0.2163  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.435  | <5%                     |                 2 |              0.2175  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4407 | 15-20%                  |                 5 |              0.08814 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4467 | >20%                    |                 2 |              0.22335 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4475 | 15-20%                  |                 2 |              0.22375 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4485 | 5-10%                   |                 2 |              0.22425 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.45   | 10-15%                  |                 5 |              0.09    |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4512 | >20%                    |                 2 |              0.2256  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.461  | 10-15%                  |                 5 |              0.0922  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.463  | >20%                    |                10 |              0.0463  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4649 | <5%                     |                 5 |              0.09298 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4734 | 15-20%                  |                 5 |              0.09468 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4755 | <5%                     |                 2 |              0.23775 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4774 | >20%                    |                 2 |              0.2387  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4835 | <5%                     |                 5 |              0.0967  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.49   | 10-15%                  |                 5 |              0.098   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4945 | >20%                    |                 2 |              0.24725 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4952 | <5%                     |                 5 |              0.09904 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5    | 5-10%                   |                 5 |              0.1     |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5087 | >20%                    |                 2 |              0.25435 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.509  | 5-10%                   |                10 |              0.0509  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5112 | 5-10%                   |                10 |              0.05112 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5132 | <5%                     |                 5 |              0.10264 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.524  | <5%                     |                 5 |              0.1048  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5247 | <5%                     |                 5 |              0.10494 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5328 | 5-10%                   |                10 |              0.05328 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5388 | >20%                    |                 5 |              0.10776 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5433 | 15-20%                  |                10 |              0.05433 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5626 | >20%                    |                 5 |              0.11252 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.566  | >20%                    |                 5 |              0.1132  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5773 | >20%                    |                10 |              0.05773 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5841 | 15-20%                  |                 5 |              0.11682 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6014 | 15-20%                  |                10 |              0.06014 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6034 | >20%                    |                 2 |              0.3017  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6117 | 15-20%                  |                 5 |              0.12234 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6228 | >20%                    |                 5 |              0.12456 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.6272 | <5%                     |                10 |              0.06272 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.6336 | <5%                     |                10 |              0.06336 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6362 | >20%                    |                 2 |              0.3181  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.649  | <5%                     |                10 |              0.0649  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6545 | <5%                     |                10 |              0.06545 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6546 | 5-10%                   |                 5 |              0.13092 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6664 | >20%                    |                 5 |              0.13328 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6792 | >20%                    |                10 |              0.06792 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6849 | 5-10%                   |                10 |              0.06849 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6945 | >20%                    |                 2 |              0.34725 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6984 | <5%                     |                10 |              0.06984 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.6992 | 15-20%                  |                10 |              0.06992 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7239 | >20%                    |                 5 |              0.14478 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.727  | >20%                    |                10 |              0.0727  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7548 | 15-20%                  |                10 |              0.07548 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7689 | 5-10%                   |                10 |              0.07689 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7722 | >20%                    |                10 |              0.07722 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7799 | 10-15%                  |                 5 |              0.15598 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7893 | 10-15%                  |                10 |              0.07893 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8043 | 5-10%                   |                10 |              0.08043 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8157 | 15-20%                  |                10 |              0.08157 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8325 | >20%                    |                10 |              0.08325 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8675 | <5%                     |                10 |              0.08675 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8815 | >20%                    |                 5 |              0.1763  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8889 | <5%                     |                 2 |              0.44445 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9021 | >20%                    |                10 |              0.09021 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9035 | 10-15%                  |                10 |              0.09035 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9036 | >20%                    |                10 |              0.09036 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9262 | >20%                    |                10 |              0.09262 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9271 | <5%                     |                10 |              0.09271 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9334 | 10-15%                  |                 2 |              0.4667  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.962  | 5-10%                   |                10 |              0.0962  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0229 | <5%                     |                10 |              0.10229 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0277 | 10-15%                  |                 5 |              0.20554 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0416 | >20%                    |                10 |              0.10416 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0943 | >20%                    |                 5 |              0.21886 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1017 | >20%                    |                10 |              0.11017 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1612 | >20%                    |                10 |              0.11612 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.5234 | >20%                    |                10 |              0.15234 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5255 | 5-10%                   |                10 |              0.15255 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5464 | 5-10%                   |                10 |              0.15464 |