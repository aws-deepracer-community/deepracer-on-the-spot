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

Data correct as of 2025-06-09 02:01:16.647103, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1386 | 5-10%                   |                 2 |              0.0693  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1605 | >20%                    |                 5 |              0.0321  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1817 | >20%                    |                 2 |              0.09085 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 5-10%                   |                 5 |              0.03708 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | >20%                    |                 5 |              0.039   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1951 | >20%                    |                 2 |              0.09755 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2062 | >20%                    |                 2 |              0.1031  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2163 | 15-20%                  |                 2 |              0.10815 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2279 | >20%                    |                 2 |              0.11395 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2305 | >20%                    |                 5 |              0.0461  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2328 | 15-20%                  |                 2 |              0.1164  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | >20%                    |                10 |              0.02395 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 5-10%                   |                10 |              0.02419 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2424 | <5%                     |                 2 |              0.1212  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2521 | >20%                    |                 5 |              0.05042 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.258  | 15-20%                  |                 2 |              0.129   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.259  | 10-15%                  |                 2 |              0.1295  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2607 | 15-20%                  |                10 |              0.02607 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2704 | >20%                    |                 2 |              0.1352  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2756 | >20%                    |                 2 |              0.1378  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2782 | <5%                     |                 2 |              0.1391  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2799 | 15-20%                  |                 2 |              0.13995 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.284  | 15-20%                  |                 2 |              0.142   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2869 | 15-20%                  |                 2 |              0.14345 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2985 | >20%                    |                 5 |              0.0597  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3014 | >20%                    |                 2 |              0.1507  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3052 | >20%                    |                 2 |              0.1526  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3102 | >20%                    |                 5 |              0.06204 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3109 | >20%                    |                 2 |              0.15545 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3116 | >20%                    |                 2 |              0.1558  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3187 | 15-20%                  |                10 |              0.03187 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3199 | >20%                    |                 2 |              0.15995 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.33   | 15-20%                  |                 5 |              0.066   |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3387 | 15-20%                  |                 2 |              0.16935 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3437 | 5-10%                   |                 2 |              0.17185 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3487 | 15-20%                  |                 5 |              0.06974 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3505 | 5-10%                   |                 2 |              0.17525 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3659 | 10-15%                  |                 2 |              0.18295 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.367  | >20%                    |                 2 |              0.1835  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.371  | 10-15%                  |                 2 |              0.1855  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3728 | >20%                    |                 5 |              0.07456 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3739 | >20%                    |                 2 |              0.18695 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3779 | >20%                    |                10 |              0.03779 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3821 | >20%                    |                10 |              0.03821 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3875 | >20%                    |                10 |              0.03875 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3914 | >20%                    |                 5 |              0.07828 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3934 | >20%                    |                 2 |              0.1967  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3945 | >20%                    |                10 |              0.03945 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3953 | 15-20%                  |                 2 |              0.19765 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3956 | >20%                    |                 5 |              0.07912 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3968 | 5-10%                   |                 5 |              0.07936 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3986 | 15-20%                  |                 2 |              0.1993  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4034 | <5%                     |                 5 |              0.08068 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4047 | >20%                    |                 5 |              0.08094 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4097 | 5-10%                   |                 2 |              0.20485 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4166 | <5%                     |                 2 |              0.2083  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.419  | >20%                    |                 2 |              0.2095  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4247 | 15-20%                  |                 5 |              0.08494 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4259 | >20%                    |                10 |              0.04259 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4307 | >20%                    |                 2 |              0.21535 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.438  | 15-20%                  |                 5 |              0.0876  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4387 | 5-10%                   |                 5 |              0.08774 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4448 | >20%                    |                 5 |              0.08896 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4452 | >20%                    |                 5 |              0.08904 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4455 | 15-20%                  |                 2 |              0.22275 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4461 | 5-10%                   |                 2 |              0.22305 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4474 | >20%                    |                 5 |              0.08948 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4505 | >20%                    |                 2 |              0.22525 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4526 | <5%                     |                 5 |              0.09052 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4541 | >20%                    |                 5 |              0.09082 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4566 | >20%                    |                 2 |              0.2283  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4647 | 15-20%                  |                 5 |              0.09294 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4677 | >20%                    |                 5 |              0.09354 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4754 | <5%                     |                 5 |              0.09508 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.482  | 15-20%                  |                 5 |              0.0964  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4881 | 5-10%                   |                 5 |              0.09762 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4886 | 15-20%                  |                10 |              0.04886 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4933 | >20%                    |                 2 |              0.24665 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4951 | 15-20%                  |                 5 |              0.09902 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4954 | >20%                    |                 5 |              0.09908 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4977 | 5-10%                   |                 2 |              0.24885 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4978 | 5-10%                   |                 5 |              0.09956 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.504  | 15-20%                  |                 2 |              0.252   |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5109 | >20%                    |                 2 |              0.25545 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5121 | >20%                    |                 5 |              0.10242 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5141 | <5%                     |                 5 |              0.10282 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5152 | 15-20%                  |                 2 |              0.2576  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.53   | >20%                    |                 2 |              0.265   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5399 | >20%                    |                 2 |              0.26995 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5458 | >20%                    |                 5 |              0.10916 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5476 | >20%                    |                 5 |              0.10952 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5537 | >20%                    |                 2 |              0.27685 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5565 | 10-15%                  |                10 |              0.05565 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5734 | 10-15%                  |                 5 |              0.11468 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5785 | >20%                    |                 5 |              0.1157  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5841 | >20%                    |                10 |              0.05841 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5869 | >20%                    |                 2 |              0.29345 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5943 | >20%                    |                 5 |              0.11886 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5987 | <5%                     |                 2 |              0.29935 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6045 | >20%                    |                10 |              0.06045 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6051 | 5-10%                   |                 2 |              0.30255 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6105 | >20%                    |                 5 |              0.1221  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6205 | >20%                    |                 2 |              0.31025 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6261 | <5%                     |                10 |              0.06261 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6269 | 15-20%                  |                 5 |              0.12538 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6277 | >20%                    |                 5 |              0.12554 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6356 | >20%                    |                 5 |              0.12712 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6358 | >20%                    |                 5 |              0.12716 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6363 | >20%                    |                 5 |              0.12726 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6374 | >20%                    |                 2 |              0.3187  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6375 | >20%                    |                10 |              0.06375 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6395 | 10-15%                  |                 5 |              0.1279  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6395 | 10-15%                  |                10 |              0.06395 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6433 | 15-20%                  |                10 |              0.06433 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6469 | >20%                    |                10 |              0.06469 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6533 | <5%                     |                 5 |              0.13066 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6565 | >20%                    |                 2 |              0.32825 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6627 | >20%                    |                 2 |              0.33135 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6666 | 10-15%                  |                 2 |              0.3333  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6669 | 15-20%                  |                10 |              0.06669 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6812 | 15-20%                  |                10 |              0.06812 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6905 | 15-20%                  |                10 |              0.06905 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6997 | >20%                    |                10 |              0.06997 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7017 | >20%                    |                 5 |              0.14034 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7142 | 15-20%                  |                10 |              0.07142 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7157 | 10-15%                  |                 5 |              0.14314 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7179 | >20%                    |                 5 |              0.14358 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7207 | <5%                     |                 5 |              0.14414 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7241 | >20%                    |                10 |              0.07241 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7387 | <5%                     |                10 |              0.07387 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7395 | <5%                     |                 5 |              0.1479  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.748  | >20%                    |                10 |              0.0748  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7514 | <5%                     |                10 |              0.07514 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7621 | 15-20%                  |                10 |              0.07621 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7639 | >20%                    |                10 |              0.07639 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7768 | >20%                    |                 2 |              0.3884  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7869 | >20%                    |                10 |              0.07869 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.789  | >20%                    |                 5 |              0.1578  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.801  | <5%                     |                10 |              0.0801  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8011 | 10-15%                  |                 5 |              0.16022 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8042 | 15-20%                  |                10 |              0.08042 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8093 | >20%                    |                 5 |              0.16186 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8321 | >20%                    |                10 |              0.08321 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8377 | >20%                    |                10 |              0.08377 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8512 | >20%                    |                10 |              0.08512 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8605 | >20%                    |                10 |              0.08605 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8684 | 10-15%                  |                10 |              0.08684 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9004 | >20%                    |                10 |              0.09004 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9065 | <5%                     |                10 |              0.09065 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9394 | >20%                    |                 5 |              0.18788 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9417 | >20%                    |                10 |              0.09417 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.95   | >20%                    |                10 |              0.095   |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9516 | >20%                    |                10 |              0.09516 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9577 | >20%                    |                10 |              0.09577 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9692 | >20%                    |                10 |              0.09692 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9855 | >20%                    |                10 |              0.09855 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0195 | >20%                    |                10 |              0.10195 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0272 | >20%                    |                 5 |              0.20544 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.03   | <5%                     |                 2 |              0.515   |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0453 | >20%                    |                10 |              0.10453 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0546 | <5%                     |                 2 |              0.5273  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0597 | 10-15%                  |                10 |              0.10597 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0665 | >20%                    |                 5 |              0.2133  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.07   | >20%                    |                 2 |              0.535   |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0793 | >20%                    |                 2 |              0.53965 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0896 | <5%                     |                 5 |              0.21792 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1003 | 15-20%                  |                10 |              0.11003 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1068 | 15-20%                  |                 5 |              0.22136 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1196 | >20%                    |                10 |              0.11196 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1565 | 15-20%                  |                10 |              0.11565 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2072 | 10-15%                  |                10 |              0.12072 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2092 | 15-20%                  |                10 |              0.12092 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2519 | >20%                    |                10 |              0.12519 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2867 | >20%                    |                10 |              0.12867 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3764 | >20%                    |                 2 |              0.6882  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3783 | <5%                     |                10 |              0.13783 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3885 | >20%                    |                10 |              0.13885 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4218 | <5%                     |                 5 |              0.28436 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4526 | >20%                    |                 5 |              0.29052 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5098 | 10-15%                  |                10 |              0.15098 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.6543 | <5%                     |                10 |              0.16543 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0238 | 5-10%                   |                10 |              0.20238 |