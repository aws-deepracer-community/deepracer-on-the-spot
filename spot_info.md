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

Data correct as of 2025-02-28 01:40:55.392427, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1051 | >20%                    |                 2 |              0.05255 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1392 | 10-15%                  |                 2 |              0.0696  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1448 | 5-10%                   |                 5 |              0.02896 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1792 | <5%                     |                 2 |              0.0896  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1908 | <5%                     |                 5 |              0.03816 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 10-15%                  |                 5 |              0.039   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2092 | 15-20%                  |                 5 |              0.04184 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2102 | 5-10%                   |                 2 |              0.1051  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2194 | >20%                    |                 5 |              0.04388 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2302 | >20%                    |                 2 |              0.1151  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2311 | <5%                     |                 2 |              0.11555 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2316 | >20%                    |                 2 |              0.1158  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2328 | >20%                    |                 2 |              0.1164  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2333 | >20%                    |                 5 |              0.04666 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2354 | <5%                     |                 5 |              0.04708 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2362 | >20%                    |                 2 |              0.1181  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 15-20%                  |                10 |              0.02395 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2413 | 5-10%                   |                10 |              0.02413 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.242  | >20%                    |                 2 |              0.121   |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2633 | 5-10%                   |                 2 |              0.13165 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.2638 |                         |                 2 |              0.1319  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2683 | 15-20%                  |                 2 |              0.13415 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2686 | 5-10%                   |                 2 |              0.1343  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2765 | 10-15%                  |                10 |              0.02765 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2799 | <5%                     |                 2 |              0.13995 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.282  | <5%                     |                 5 |              0.0564  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2838 | >20%                    |                 2 |              0.1419  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.2847 | 5-10%                   |                 5 |              0.05694 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2865 | 5-10%                   |                 2 |              0.14325 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2919 | 10-15%                  |                 2 |              0.14595 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.302  | >20%                    |                 2 |              0.151   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3062 | 15-20%                  |                 2 |              0.1531  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3064 | 15-20%                  |                 2 |              0.1532  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3136 | <5%                     |                 2 |              0.1568  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3176 | <5%                     |                 2 |              0.1588  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3264 | 10-15%                  |                 2 |              0.1632  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3293 | >20%                    |                10 |              0.03293 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3349 | 15-20%                  |                 5 |              0.06698 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3367 | >20%                    |                 2 |              0.16835 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3374 | <5%                     |                 2 |              0.1687  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.3477 |                         |                 5 |              0.06954 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3508 | >20%                    |                 2 |              0.1754  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.351  | <5%                     |                 5 |              0.0702  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3587 | 5-10%                   |                10 |              0.03587 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3591 | 10-15%                  |                 5 |              0.07182 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3602 | 15-20%                  |                 2 |              0.1801  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3759 | 5-10%                   |                 5 |              0.07518 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.379  | <5%                     |                 2 |              0.1895  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3843 | <5%                     |                 5 |              0.07686 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3849 | 10-15%                  |                10 |              0.03849 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3881 | >20%                    |                 5 |              0.07762 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3955 | <5%                     |                 2 |              0.19775 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4062 | <5%                     |                10 |              0.04062 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4069 | 15-20%                  |                 2 |              0.20345 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4074 | >20%                    |                 5 |              0.08148 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4095 | 5-10%                   |                 2 |              0.20475 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4102 | >20%                    |                 2 |              0.2051  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4122 | 10-15%                  |                 2 |              0.2061  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4137 | 5-10%                   |                 2 |              0.20685 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4241 | 15-20%                  |                10 |              0.04241 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4261 | 5-10%                   |                 2 |              0.21305 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4264 | >20%                    |                 5 |              0.08528 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.428  | <5%                     |                 2 |              0.214   |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4294 | 5-10%                   |                 2 |              0.2147  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4332 | >20%                    |                 2 |              0.2166  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4476 | <5%                     |                10 |              0.04476 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4595 | <5%                     |                 5 |              0.0919  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4605 | >20%                    |                 5 |              0.0921  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4612 | >20%                    |                 2 |              0.2306  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.466  | 10-15%                  |                 5 |              0.0932  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4662 | >20%                    |                 2 |              0.2331  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4696 | >20%                    |                 2 |              0.2348  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.473  | 5-10%                   |                 5 |              0.0946  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4748 | >20%                    |                 2 |              0.2374  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4859 | 15-20%                  |                 5 |              0.09718 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.496  | <5%                     |                 5 |              0.0992  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.496  | >20%                    |                 5 |              0.0992  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5041 | >20%                    |                 2 |              0.25205 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5067 | >20%                    |                 5 |              0.10134 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5072 | >20%                    |                 2 |              0.2536  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.5076 |                         |                10 |              0.05076 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5086 | >20%                    |                 5 |              0.10172 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5103 | 5-10%                   |                 5 |              0.10206 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5143 | >20%                    |                 2 |              0.25715 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5216 | 5-10%                   |                 5 |              0.10432 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.524  | <5%                     |                 5 |              0.1048  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5288 | >20%                    |                 5 |              0.10576 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5301 | <5%                     |                 2 |              0.26505 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5353 | 10-15%                  |                 5 |              0.10706 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5435 | >20%                    |                 2 |              0.27175 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.548  | 10-15%                  |                 5 |              0.1096  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5489 | 10-15%                  |                 5 |              0.10978 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5504 | 15-20%                  |                 2 |              0.2752  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5538 | 15-20%                  |                10 |              0.05538 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5595 | 5-10%                   |                 5 |              0.1119  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.566  | >20%                    |                 5 |              0.1132  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5701 | 5-10%                   |                 5 |              0.11402 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5717 | 5-10%                   |                10 |              0.05717 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5768 | >20%                    |                 2 |              0.2884  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5771 | >20%                    |                 2 |              0.28855 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5889 | 10-15%                  |                 5 |              0.11778 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5964 | 5-10%                   |                 2 |              0.2982  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6075 | 5-10%                   |                 5 |              0.1215  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6078 | >20%                    |                 5 |              0.12156 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6114 | <5%                     |                 5 |              0.12228 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6243 | 10-15%                  |                10 |              0.06243 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6282 | 15-20%                  |                 5 |              0.12564 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6459 | >20%                    |                10 |              0.06459 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6533 | <5%                     |                10 |              0.06533 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6616 | 10-15%                  |                 5 |              0.13232 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.672  | 5-10%                   |                 5 |              0.1344  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6797 | >20%                    |                 5 |              0.13594 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6812 | >20%                    |                 2 |              0.3406  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6865 | >20%                    |                 2 |              0.34325 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6894 | >20%                    |                10 |              0.06894 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.713  | >20%                    |                 5 |              0.1426  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.713  | >20%                    |                 5 |              0.1426  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7175 | >20%                    |                10 |              0.07175 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7302 | >20%                    |                 5 |              0.14604 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7302 | 5-10%                   |                 5 |              0.14604 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7411 | 5-10%                   |                 5 |              0.14822 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7416 | <5%                     |                 5 |              0.14832 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7429 | 5-10%                   |                10 |              0.07429 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7661 | >20%                    |                10 |              0.07661 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7695 | >20%                    |                10 |              0.07695 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7735 | <5%                     |                10 |              0.07735 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7765 | 15-20%                  |                10 |              0.07765 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7792 | 15-20%                  |                 2 |              0.3896  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7838 | >20%                    |                10 |              0.07838 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7897 | >20%                    |                 5 |              0.15794 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7915 | 5-10%                   |                 2 |              0.39575 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7959 | >20%                    |                 5 |              0.15918 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7965 | >20%                    |                10 |              0.07965 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7973 | 10-15%                  |                10 |              0.07973 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7996 | <5%                     |                10 |              0.07996 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.8006 | >20%                    |                 5 |              0.16012 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8207 | >20%                    |                10 |              0.08207 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8396 | 15-20%                  |                10 |              0.08396 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8417 | >20%                    |                10 |              0.08417 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8461 | 5-10%                   |                10 |              0.08461 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8567 | <5%                     |                10 |              0.08567 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8678 | <5%                     |                10 |              0.08678 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8761 | <5%                     |                10 |              0.08761 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8763 | 5-10%                   |                10 |              0.08763 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8891 | >20%                    |                 5 |              0.17782 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8903 | 10-15%                  |                10 |              0.08903 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9341 | >20%                    |                10 |              0.09341 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9539 | >20%                    |                10 |              0.09539 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9578 | 5-10%                   |                10 |              0.09578 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9652 | 10-15%                  |                10 |              0.09652 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9683 | >20%                    |                10 |              0.09683 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0096 | 10-15%                  |                10 |              0.10096 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0126 | 15-20%                  |                10 |              0.10126 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0312 | 5-10%                   |                10 |              0.10312 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0378 | 15-20%                  |                10 |              0.10378 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0551 | >20%                    |                10 |              0.10551 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0691 | >20%                    |                10 |              0.10691 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0743 | <5%                     |                10 |              0.10743 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.0839 | >20%                    |                 2 |              0.54195 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1142 | 10-15%                  |                 2 |              0.5571  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.119  | 10-15%                  |                10 |              0.1119  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1803 | >20%                    |                10 |              0.11803 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2073 | 15-20%                  |                10 |              0.12073 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2228 | 5-10%                   |                 5 |              0.24456 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2377 | >20%                    |                 5 |              0.24754 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2788 | >20%                    |                 2 |              0.6394  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2966 | 10-15%                  |                 5 |              0.25932 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.316  | 15-20%                  |                 5 |              0.2632  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3232 | >20%                    |                10 |              0.13232 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3685 | >20%                    |                 5 |              0.2737  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4098 | >20%                    |                 2 |              0.7049  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.458  | >20%                    |                10 |              0.1458  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5254 | >20%                    |                10 |              0.15254 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7464 | >20%                    |                10 |              0.17464 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7702 | >20%                    |                10 |              0.17702 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0681 | 5-10%                   |                10 |              0.20681 |