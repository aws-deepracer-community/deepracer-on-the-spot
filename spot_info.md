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

Data correct as of 2025-11-27 01:51:37.978444, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1408 | >20%                    |                 2 |              0.0704  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1451 | >20%                    |                 2 |              0.07255 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.1498 | 15-20%                  |                 2 |              0.0749  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1781 | <5%                     |                 2 |              0.08905 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1973 | <5%                     |                 2 |              0.09865 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2017 | 10-15%                  |                 2 |              0.10085 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.213  | >20%                    |                 2 |              0.1065  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2235 | >20%                    |                 2 |              0.11175 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2283 | >20%                    |                 2 |              0.11415 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2401 | >20%                    |                 2 |              0.12005 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.243  | 15-20%                  |                 2 |              0.1215  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2474 | >20%                    |                10 |              0.02474 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.257  | >20%                    |                 2 |              0.1285  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2574 | >20%                    |                 2 |              0.1287  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.262  | 10-15%                  |                 5 |              0.0524  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2643 | 5-10%                   |                 5 |              0.05286 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2702 | >20%                    |                 5 |              0.05404 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2711 | <5%                     |                 2 |              0.13555 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2731 | >20%                    |                 2 |              0.13655 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.274  | >20%                    |                 5 |              0.0548  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2825 | >20%                    |                 2 |              0.14125 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2838 | 5-10%                   |                 2 |              0.1419  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2895 | 10-15%                  |                 2 |              0.14475 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3118 | 10-15%                  |                10 |              0.03118 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3142 | >20%                    |                 5 |              0.06284 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3283 | >20%                    |                 5 |              0.06566 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3286 | <5%                     |                 5 |              0.06572 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3322 | 10-15%                  |                10 |              0.03322 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3337 | <5%                     |                 2 |              0.16685 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3366 | >20%                    |                 5 |              0.06732 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3462 | >20%                    |                10 |              0.03462 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3475 | >20%                    |                 2 |              0.17375 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3484 | 5-10%                   |                 2 |              0.1742  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3499 | >20%                    |                 2 |              0.17495 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3511 | 5-10%                   |                10 |              0.03511 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3516 | 10-15%                  |                 2 |              0.1758  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3624 | >20%                    |                 5 |              0.07248 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3657 | >20%                    |                 2 |              0.18285 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3664 | 10-15%                  |                 2 |              0.1832  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3682 | >20%                    |                 2 |              0.1841  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3728 | 15-20%                  |                 5 |              0.07456 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3816 | >20%                    |                10 |              0.03816 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3868 | >20%                    |                 2 |              0.1934  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3887 | >20%                    |                 5 |              0.07774 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3889 | >20%                    |                 5 |              0.07778 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3916 | 15-20%                  |                 2 |              0.1958  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.392  | <5%                     |                 2 |              0.196   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3922 | 15-20%                  |                 2 |              0.1961  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3984 | 10-15%                  |                 5 |              0.07968 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.3995 | >20%                    |                 2 |              0.19975 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4    | >20%                    |                 2 |              0.2     |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4005 | 15-20%                  |                 5 |              0.0801  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4041 | >20%                    |                 5 |              0.08082 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.406  | >20%                    |                 2 |              0.203   |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4082 | 10-15%                  |                10 |              0.04082 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4093 | >20%                    |                 2 |              0.20465 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4164 | >20%                    |                 2 |              0.2082  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.424  | >20%                    |                 5 |              0.0848  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4248 | 15-20%                  |                 2 |              0.2124  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4338 | 15-20%                  |                 5 |              0.08676 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.436  | >20%                    |                 2 |              0.218   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4434 | >20%                    |                 2 |              0.2217  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4436 | 5-10%                   |                 2 |              0.2218  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4463 | >20%                    |                 2 |              0.22315 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4473 | >20%                    |                 5 |              0.08946 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4556 | 10-15%                  |                 5 |              0.09112 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4569 | >20%                    |                 5 |              0.09138 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4628 | <5%                     |                 2 |              0.2314  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4668 | >20%                    |                10 |              0.04668 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4684 | >20%                    |                10 |              0.04684 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4719 | >20%                    |                 2 |              0.23595 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4768 | >20%                    |                 2 |              0.2384  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4788 | 10-15%                  |                 2 |              0.2394  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4808 | 15-20%                  |                 5 |              0.09616 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4808 | 15-20%                  |                10 |              0.04808 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4827 | >20%                    |                 5 |              0.09654 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4833 | >20%                    |                 5 |              0.09666 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4844 | >20%                    |                 2 |              0.2422  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4952 | 10-15%                  |                 5 |              0.09904 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4963 | 15-20%                  |                 5 |              0.09926 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5    | 10-15%                  |                 2 |              0.25    |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5019 | 10-15%                  |                 5 |              0.10038 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5057 | 10-15%                  |                 2 |              0.25285 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5066 | >20%                    |                 5 |              0.10132 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5137 | >20%                    |                 5 |              0.10274 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5178 | >20%                    |                 5 |              0.10356 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5306 | >20%                    |                 5 |              0.10612 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5395 | >20%                    |                 5 |              0.1079  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5493 | 15-20%                  |                 5 |              0.10986 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5679 | >20%                    |                 5 |              0.11358 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5688 | >20%                    |                 5 |              0.11376 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5693 | 5-10%                   |                10 |              0.05693 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5795 | 15-20%                  |                 5 |              0.1159  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5804 | <5%                     |                10 |              0.05804 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5873 | 10-15%                  |                 5 |              0.11746 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5893 | >20%                    |                 2 |              0.29465 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5927 | >20%                    |                 2 |              0.29635 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6007 | 15-20%                  |                 5 |              0.12014 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6027 | 15-20%                  |                10 |              0.06027 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6048 | 15-20%                  |                 5 |              0.12096 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6053 | >20%                    |                 2 |              0.30265 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6059 | 10-15%                  |                 5 |              0.12118 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6062 | 10-15%                  |                 5 |              0.12124 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6146 | >20%                    |                 5 |              0.12292 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6148 | >20%                    |                 2 |              0.3074  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6163 | <5%                     |                10 |              0.06163 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6214 | >20%                    |                10 |              0.06214 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6304 | 5-10%                   |                 5 |              0.12608 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6379 | >20%                    |                 5 |              0.12758 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6409 | >20%                    |                 5 |              0.12818 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6413 | 10-15%                  |                 5 |              0.12826 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.653  | >20%                    |                 5 |              0.1306  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6544 | >20%                    |                 2 |              0.3272  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6554 | >20%                    |                 5 |              0.13108 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6574 | >20%                    |                 2 |              0.3287  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6654 | >20%                    |                10 |              0.06654 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6718 | >20%                    |                10 |              0.06718 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6727 | 5-10%                   |                 2 |              0.33635 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6752 | 5-10%                   |                10 |              0.06752 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6886 | 15-20%                  |                10 |              0.06886 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7216 | >20%                    |                10 |              0.07216 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7301 | >20%                    |                10 |              0.07301 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7317 | >20%                    |                 5 |              0.14634 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7363 | >20%                    |                10 |              0.07363 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7434 | >20%                    |                 5 |              0.14868 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7447 | <5%                     |                10 |              0.07447 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7489 | 10-15%                  |                10 |              0.07489 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7494 | 15-20%                  |                10 |              0.07494 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7592 | >20%                    |                10 |              0.07592 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.76   | >20%                    |                 2 |              0.38    |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7671 | >20%                    |                10 |              0.07671 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7762 | >20%                    |                10 |              0.07762 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7763 | 10-15%                  |                 2 |              0.38815 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.777  | >20%                    |                10 |              0.0777  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7789 | >20%                    |                10 |              0.07789 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7815 | 10-15%                  |                10 |              0.07815 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7983 | >20%                    |                 5 |              0.15966 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.818  | <5%                     |                 5 |              0.1636  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8197 | >20%                    |                10 |              0.08197 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8272 | >20%                    |                10 |              0.08272 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8309 | >20%                    |                 5 |              0.16618 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8314 | 15-20%                  |                 5 |              0.16628 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8359 | >20%                    |                10 |              0.08359 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8648 | 10-15%                  |                10 |              0.08648 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8682 | >20%                    |                 5 |              0.17364 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8729 | >20%                    |                 5 |              0.17458 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8772 | >20%                    |                 5 |              0.17544 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8812 | 5-10%                   |                10 |              0.08812 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8962 | 10-15%                  |                10 |              0.08962 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9128 | 15-20%                  |                10 |              0.09128 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9206 | >20%                    |                 2 |              0.4603  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9298 | >20%                    |                10 |              0.09298 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9304 | 10-15%                  |                10 |              0.09304 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.939  | >20%                    |                10 |              0.0939  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9454 | >20%                    |                10 |              0.09454 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9728 | >20%                    |                 2 |              0.4864  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9798 | <5%                     |                10 |              0.09798 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9879 | 15-20%                  |                10 |              0.09879 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9969 | >20%                    |                 5 |              0.19938 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9986 | >20%                    |                10 |              0.09986 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0117 | >20%                    |                 2 |              0.50585 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0266 | >20%                    |                10 |              0.10266 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0297 | >20%                    |                10 |              0.10297 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0581 | >20%                    |                10 |              0.10581 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0678 | >20%                    |                10 |              0.10678 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0715 | <5%                     |                 5 |              0.2143  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0725 | 15-20%                  |                10 |              0.10725 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1384 | 15-20%                  |                10 |              0.11384 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.1462 | <5%                     |                 2 |              0.5731  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1755 | >20%                    |                10 |              0.11755 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1983 | >20%                    |                 5 |              0.23966 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2815 | >20%                    |                 2 |              0.64075 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3179 | >20%                    |                10 |              0.13179 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3205 | >20%                    |                 5 |              0.2641  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3474 | 10-15%                  |                10 |              0.13474 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3627 | >20%                    |                 2 |              0.68135 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3739 | >20%                    |                10 |              0.13739 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5193 | 5-10%                   |                 5 |              0.30386 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6325 | >20%                    |                10 |              0.16325 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9486 | 15-20%                  |                10 |              0.19486 |