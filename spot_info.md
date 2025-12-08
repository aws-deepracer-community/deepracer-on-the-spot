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

Data correct as of 2025-12-08 01:57:36.277323, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1249 | >20%                    |                 2 |              0.06245 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1496 | >20%                    |                 2 |              0.0748  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1768 | <5%                     |                 2 |              0.0884  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1864 | 10-15%                  |                 2 |              0.0932  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1867 | >20%                    |                 2 |              0.09335 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1917 | <5%                     |                 2 |              0.09585 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2233 | >20%                    |                 2 |              0.11165 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | >20%                    |                10 |              0.02308 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2328 | >20%                    |                 2 |              0.1164  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2375 | >20%                    |                 2 |              0.11875 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2384 | >20%                    |                 5 |              0.04768 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2453 | >20%                    |                 5 |              0.04906 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2507 | >20%                    |                 2 |              0.12535 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2572 | 10-15%                  |                 5 |              0.05144 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.269  | >20%                    |                 5 |              0.0538  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2771 | 15-20%                  |                 2 |              0.13855 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2783 | 5-10%                   |                 5 |              0.05566 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2811 | >20%                    |                 2 |              0.14055 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2823 | >20%                    |                 2 |              0.14115 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.283  | 15-20%                  |                 2 |              0.1415  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2846 | <5%                     |                 2 |              0.1423  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2912 | 10-15%                  |                 2 |              0.1456  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2928 | >20%                    |                 2 |              0.1464  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3031 | 5-10%                   |                 2 |              0.15155 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.307  | >20%                    |                 2 |              0.1535  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.316  | >20%                    |                 5 |              0.0632  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3236 | 10-15%                  |                10 |              0.03236 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3321 | 5-10%                   |                 2 |              0.16605 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3329 | >20%                    |                 2 |              0.16645 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.343  | 5-10%                   |                10 |              0.0343  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3482 | >20%                    |                 2 |              0.1741  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3513 | 10-15%                  |                 2 |              0.17565 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3519 | >20%                    |                10 |              0.03519 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3669 | >20%                    |                 2 |              0.18345 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3733 | 15-20%                  |                 2 |              0.18665 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3748 | >20%                    |                 5 |              0.07496 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.375  | 15-20%                  |                 2 |              0.1875  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3772 | <5%                     |                 2 |              0.1886  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3783 | >20%                    |                 5 |              0.07566 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3793 | >20%                    |                 2 |              0.18965 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3805 | >20%                    |                 5 |              0.0761  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3815 | >20%                    |                 2 |              0.19075 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3835 | >20%                    |                 2 |              0.19175 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3842 | 10-15%                  |                10 |              0.03842 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3859 | 15-20%                  |                 5 |              0.07718 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3961 | >20%                    |                 2 |              0.19805 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3991 | 10-15%                  |                10 |              0.03991 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4005 | >20%                    |                 2 |              0.20025 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4031 | >20%                    |                 2 |              0.20155 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4043 | 10-15%                  |                 5 |              0.08086 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4051 | <5%                     |                 5 |              0.08102 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.413  | 15-20%                  |                 5 |              0.0826  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4152 | 5-10%                   |                 2 |              0.2076  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4186 | >20%                    |                10 |              0.04186 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4198 | <5%                     |                 2 |              0.2099  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4213 | 15-20%                  |                10 |              0.04213 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4286 | 15-20%                  |                 2 |              0.2143  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4289 | 15-20%                  |                 5 |              0.08578 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4332 | 10-15%                  |                 5 |              0.08664 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4341 | >20%                    |                 5 |              0.08682 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4358 | >20%                    |                 5 |              0.08716 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4377 | <5%                     |                10 |              0.04377 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4394 | >20%                    |                 2 |              0.2197  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4435 | >20%                    |                 5 |              0.0887  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4467 | <5%                     |                 2 |              0.22335 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4494 | >20%                    |                 5 |              0.08988 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4497 | >20%                    |                10 |              0.04497 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4544 | >20%                    |                 5 |              0.09088 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4547 | >20%                    |                 2 |              0.22735 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.456  | >20%                    |                 2 |              0.228   |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4656 | >20%                    |                 5 |              0.09312 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4754 | >20%                    |                 2 |              0.2377  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.481  | 10-15%                  |                 2 |              0.2405  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4814 | 15-20%                  |                 5 |              0.09628 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4844 | 15-20%                  |                10 |              0.04844 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4913 | >20%                    |                 5 |              0.09826 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4974 | 5-10%                   |                10 |              0.04974 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4977 | 10-15%                  |                 5 |              0.09954 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4979 | >20%                    |                10 |              0.04979 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5008 | >20%                    |                 5 |              0.10016 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5017 | >20%                    |                 5 |              0.10034 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.502  | 10-15%                  |                 2 |              0.251   |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5076 | >20%                    |                 5 |              0.10152 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5102 | 10-15%                  |                 5 |              0.10204 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5169 | 15-20%                  |                 5 |              0.10338 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.535  | <5%                     |                10 |              0.0535  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5372 | >20%                    |                 5 |              0.10744 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5383 | 10-15%                  |                 2 |              0.26915 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5483 | >20%                    |                 5 |              0.10966 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5512 | 15-20%                  |                 5 |              0.11024 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5516 | >20%                    |                 2 |              0.2758  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5613 | 10-15%                  |                 2 |              0.28065 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5621 | >20%                    |                 5 |              0.11242 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5638 | 10-15%                  |                 5 |              0.11276 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5645 | <5%                     |                 5 |              0.1129  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5694 | >20%                    |                 5 |              0.11388 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5818 | 15-20%                  |                 5 |              0.11636 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5872 | >20%                    |                 2 |              0.2936  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5874 | >20%                    |                 5 |              0.11748 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5905 | >20%                    |                 5 |              0.1181  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.591  | >20%                    |                 2 |              0.2955  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5918 | 10-15%                  |                 5 |              0.11836 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5923 | 15-20%                  |                 5 |              0.11846 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5992 | >20%                    |                10 |              0.05992 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6059 | 15-20%                  |                 5 |              0.12118 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6146 | >20%                    |                 2 |              0.3073  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6211 | >20%                    |                 2 |              0.31055 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6269 | >20%                    |                 5 |              0.12538 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6269 | >20%                    |                 2 |              0.31345 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6308 | 10-15%                  |                 5 |              0.12616 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6343 | 5-10%                   |                 2 |              0.31715 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6515 | >20%                    |                10 |              0.06515 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6551 | 15-20%                  |                10 |              0.06551 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.662  | >20%                    |                 5 |              0.1324  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6696 | >20%                    |                10 |              0.06696 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6746 | >20%                    |                10 |              0.06746 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6786 | 5-10%                   |                 5 |              0.13572 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6801 | 5-10%                   |                10 |              0.06801 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6813 | >20%                    |                 2 |              0.34065 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6833 | >20%                    |                10 |              0.06833 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6868 | 10-15%                  |                 5 |              0.13736 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6955 | >20%                    |                 5 |              0.1391  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7038 | 10-15%                  |                10 |              0.07038 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7117 | >20%                    |                 5 |              0.14234 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.713  | >20%                    |                10 |              0.0713  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7346 | 15-20%                  |                10 |              0.07346 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7371 | >20%                    |                10 |              0.07371 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.741  | >20%                    |                 5 |              0.1482  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7433 | >20%                    |                 2 |              0.37165 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7433 | >20%                    |                10 |              0.07433 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7506 | >20%                    |                 5 |              0.15012 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7635 | >20%                    |                10 |              0.07635 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7644 | 10-15%                  |                10 |              0.07644 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7669 | >20%                    |                10 |              0.07669 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7674 | >20%                    |                10 |              0.07674 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7818 | <5%                     |                10 |              0.07818 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7944 | >20%                    |                 5 |              0.15888 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.806  | >20%                    |                 2 |              0.403   |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8089 | >20%                    |                10 |              0.08089 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8205 | >20%                    |                10 |              0.08205 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8218 | 15-20%                  |                 5 |              0.16436 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8269 | 10-15%                  |                 2 |              0.41345 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8307 | 15-20%                  |                10 |              0.08307 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8351 | 5-10%                   |                10 |              0.08351 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8391 | 10-15%                  |                10 |              0.08391 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8471 | >20%                    |                10 |              0.08471 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8533 | >20%                    |                10 |              0.08533 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8833 | >20%                    |                 5 |              0.17666 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8871 | >20%                    |                10 |              0.08871 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8897 | >20%                    |                 5 |              0.17794 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8944 | 10-15%                  |                10 |              0.08944 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8987 | >20%                    |                10 |              0.08987 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9027 | 15-20%                  |                10 |              0.09027 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.945  | >20%                    |                10 |              0.0945  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9463 | >20%                    |                 2 |              0.47315 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9672 | >20%                    |                 5 |              0.19344 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.969  | >20%                    |                 2 |              0.4845  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9712 | >20%                    |                 5 |              0.19424 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9725 | >20%                    |                10 |              0.09725 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9727 | 15-20%                  |                10 |              0.09727 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.9976 | <5%                     |                 2 |              0.4988  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0041 | >20%                    |                10 |              0.10041 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0116 | >20%                    |                 2 |              0.5058  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0192 | >20%                    |                10 |              0.10192 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0389 | <5%                     |                10 |              0.10389 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0441 | 10-15%                  |                10 |              0.10441 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1642 | <5%                     |                 5 |              0.23284 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.196  | >20%                    |                10 |              0.1196  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1977 | 15-20%                  |                10 |              0.11977 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2078 | >20%                    |                10 |              0.12078 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2452 | >20%                    |                 5 |              0.24904 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.2658 | >20%                    |                10 |              0.12658 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3105 | >20%                    |                10 |              0.13105 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4322 | >20%                    |                 2 |              0.7161  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4518 | >20%                    |                 2 |              0.7259  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4858 | 10-15%                  |                10 |              0.14858 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.509  | >20%                    |                10 |              0.1509  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5124 | >20%                    |                 5 |              0.30248 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5852 | 5-10%                   |                 5 |              0.31704 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0551 | 15-20%                  |                10 |              0.20551 |