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

Data correct as of 2024-12-14 01:42:47.743622, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1874 | 15-20%                  |                 2 |              0.0937  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2156 | 15-20%                  |                 2 |              0.1078  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2188 | >20%                    |                 2 |              0.1094  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2243 | 5-10%                   |                 5 |              0.04486 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2278 | 15-20%                  |                 2 |              0.1139  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2331 | 10-15%                  |                 2 |              0.11655 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2358 | 5-10%                   |                 2 |              0.1179  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2376 | 15-20%                  |                 5 |              0.04752 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 15-20%                  |                10 |              0.02395 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2406 | <5%                     |                 2 |              0.1203  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2458 | <5%                     |                 2 |              0.1229  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2479 | >20%                    |                 2 |              0.12395 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2695 | 15-20%                  |                 5 |              0.0539  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2796 | <5%                     |                 2 |              0.1398  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2816 | 5-10%                   |                 2 |              0.1408  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2917 | <5%                     |                 2 |              0.14585 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.296  | >20%                    |                 2 |              0.148   |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2963 | <5%                     |                 2 |              0.14815 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3061 | <5%                     |                 2 |              0.15305 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3158 | >20%                    |                 5 |              0.06316 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3165 | <5%                     |                 2 |              0.15825 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3211 | 5-10%                   |                 2 |              0.16055 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3258 | <5%                     |                10 |              0.03258 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3332 | 10-15%                  |                 2 |              0.1666  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3349 | <5%                     |                 5 |              0.06698 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3411 | >20%                    |                 2 |              0.17055 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3451 | <5%                     |                 5 |              0.06902 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3464 | 10-15%                  |                 2 |              0.1732  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3475 | <5%                     |                 2 |              0.17375 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3496 | <5%                     |                 5 |              0.06992 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3548 | 10-15%                  |                 2 |              0.1774  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.358  | >20%                    |                10 |              0.0358  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.361  | >20%                    |                 5 |              0.0722  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3635 | >20%                    |                 2 |              0.18175 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3693 | 15-20%                  |                 2 |              0.18465 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3715 | <5%                     |                 5 |              0.0743  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3756 | 5-10%                   |                 2 |              0.1878  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3769 | >20%                    |                 2 |              0.18845 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3802 | >20%                    |                 5 |              0.07604 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.384  | <5%                     |                 5 |              0.0768  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3904 | 5-10%                   |                 2 |              0.1952  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.392  | 10-15%                  |                10 |              0.0392  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4117 | 5-10%                   |                 2 |              0.20585 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4136 | >20%                    |                 2 |              0.2068  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4153 | 5-10%                   |                 5 |              0.08306 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4192 | 5-10%                   |                 2 |              0.2096  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.4195 | 10-15%                  |                 2 |              0.20975 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4237 | 15-20%                  |                 2 |              0.21185 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4327 | 5-10%                   |                 5 |              0.08654 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.435  | 5-10%                   |                 5 |              0.087   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4394 | 5-10%                   |                 2 |              0.2197  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4404 | 10-15%                  |                 5 |              0.08808 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4439 | <5%                     |                 2 |              0.22195 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4525 | 5-10%                   |                 5 |              0.0905  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4555 | <5%                     |                 5 |              0.0911  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4591 | >20%                    |                 5 |              0.09182 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4597 | >20%                    |                 5 |              0.09194 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4633 | 5-10%                   |                 2 |              0.23165 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.466  | >20%                    |                10 |              0.0466  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4667 | <5%                     |                 5 |              0.09334 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4703 | 10-15%                  |                 2 |              0.23515 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4755 | >20%                    |                 5 |              0.0951  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4766 | >20%                    |                 2 |              0.2383  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.477  | 15-20%                  |                 5 |              0.0954  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4806 | 10-15%                  |                 2 |              0.2403  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4868 | 10-15%                  |                 2 |              0.2434  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4884 | >20%                    |                10 |              0.04884 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.49   | 15-20%                  |                10 |              0.049   |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4982 | 5-10%                   |                 5 |              0.09964 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5007 | 15-20%                  |                 5 |              0.10014 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.503  | <5%                     |                 5 |              0.1006  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5077 | 5-10%                   |                 5 |              0.10154 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5104 | <5%                     |                 5 |              0.10208 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.5132 | 5-10%                   |                 5 |              0.10264 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5148 | >20%                    |                 2 |              0.2574  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5197 | 5-10%                   |                10 |              0.05197 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5233 | 10-15%                  |                 2 |              0.26165 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5237 | >20%                    |                 5 |              0.10474 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5274 | >20%                    |                 5 |              0.10548 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.531  | 10-15%                  |                 5 |              0.1062  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5495 | 10-15%                  |                 5 |              0.1099  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5504 | >20%                    |                 5 |              0.11008 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5545 | >20%                    |                 2 |              0.27725 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5556 | 15-20%                  |                 5 |              0.11112 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5647 | 10-15%                  |                10 |              0.05647 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5775 | >20%                    |                 5 |              0.1155  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5793 | <5%                     |                10 |              0.05793 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5816 | >20%                    |                10 |              0.05816 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5912 | <5%                     |                 5 |              0.11824 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.6092 | 5-10%                   |                 2 |              0.3046  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6475 | >20%                    |                10 |              0.06475 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6498 | 5-10%                   |                10 |              0.06498 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6587 | <5%                     |                 5 |              0.13174 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6663 | >20%                    |                 2 |              0.33315 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.669  | 5-10%                   |                10 |              0.0669  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6724 | 10-15%                  |                10 |              0.06724 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6774 | 15-20%                  |                 5 |              0.13548 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6778 | <5%                     |                 5 |              0.13556 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6849 | 10-15%                  |                 5 |              0.13698 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6989 | >20%                    |                10 |              0.06989 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7371 | 5-10%                   |                10 |              0.07371 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7374 | >20%                    |                 5 |              0.14748 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7405 | >20%                    |                 5 |              0.1481  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7416 | >20%                    |                 5 |              0.14832 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7418 | <5%                     |                 2 |              0.3709  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7785 | >20%                    |                10 |              0.07785 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7886 | <5%                     |                10 |              0.07886 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7938 | <5%                     |                 5 |              0.15876 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8004 | <5%                     |                10 |              0.08004 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8056 | 15-20%                  |                10 |              0.08056 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8139 | >20%                    |                10 |              0.08139 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.8207 | <5%                     |                10 |              0.08207 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8279 | 5-10%                   |                10 |              0.08279 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8327 | 10-15%                  |                10 |              0.08327 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8463 | 5-10%                   |                10 |              0.08463 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8497 | 5-10%                   |                10 |              0.08497 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8526 | 10-15%                  |                10 |              0.08526 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8527 | 5-10%                   |                 2 |              0.42635 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8591 | <5%                     |                10 |              0.08591 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8614 | 5-10%                   |                10 |              0.08614 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8654 | 10-15%                  |                10 |              0.08654 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9045 | >20%                    |                10 |              0.09045 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9175 | 15-20%                  |                10 |              0.09175 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9216 | 5-10%                   |                10 |              0.09216 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9369 | >20%                    |                10 |              0.09369 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9374 | <5%                     |                 5 |              0.18748 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.952  | 10-15%                  |                10 |              0.0952  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9581 | 5-10%                   |                10 |              0.09581 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9786 | 5-10%                   |                10 |              0.09786 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0841 | >20%                    |                10 |              0.10841 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0858 | <5%                     |                10 |              0.10858 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1164 | 5-10%                   |                10 |              0.11164 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.137  | <5%                     |                 5 |              0.2274  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1764 | >20%                    |                10 |              0.11764 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2353 | >20%                    |                10 |              0.12353 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4218 | 5-10%                   |                10 |              0.14218 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.7372 | 5-10%                   |                10 |              0.17372 |