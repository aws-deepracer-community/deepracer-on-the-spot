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

Data correct as of 2025-07-21 02:10:05.203847, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1141 | >20%                    |                 2 |              0.05705 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1545 | <5%                     |                 5 |              0.0309  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1603 | 5-10%                   |                 2 |              0.08015 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.189  | >20%                    |                 2 |              0.0945  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1895 | 5-10%                   |                 2 |              0.09475 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1927 | >20%                    |                 2 |              0.09635 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1992 | 5-10%                   |                 5 |              0.03984 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2329 | 15-20%                  |                 2 |              0.11645 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2335 | >20%                    |                 2 |              0.11675 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2412 | <5%                     |                 5 |              0.04824 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2416 | >20%                    |                 5 |              0.04832 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2454 | 5-10%                   |                 2 |              0.1227  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2498 | 15-20%                  |                 2 |              0.1249  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.25   | >20%                    |                 5 |              0.05    |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2524 | >20%                    |                 2 |              0.1262  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2582 | >20%                    |                 2 |              0.1291  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2652 | >20%                    |                 2 |              0.1326  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2693 | <5%                     |                 5 |              0.05386 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2792 | >20%                    |                10 |              0.02792 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2855 | >20%                    |                 2 |              0.14275 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2945 | >20%                    |                 2 |              0.14725 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3022 | 15-20%                  |                10 |              0.03022 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3048 | <5%                     |                 2 |              0.1524  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3104 | >20%                    |                 5 |              0.06208 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3173 | 5-10%                   |                 2 |              0.15865 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.324  | 5-10%                   |                 2 |              0.162   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.329  | 15-20%                  |                 2 |              0.1645  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3295 | >20%                    |                 2 |              0.16475 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3311 | >20%                    |                 5 |              0.06622 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3312 | <5%                     |                 2 |              0.1656  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3323 | >20%                    |                 2 |              0.16615 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.333  | <5%                     |                10 |              0.0333  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3332 | 15-20%                  |                 2 |              0.1666  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3453 | >20%                    |                 2 |              0.17265 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3485 | 15-20%                  |                 2 |              0.17425 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3619 | >20%                    |                 2 |              0.18095 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.365  | >20%                    |                 5 |              0.073   |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3667 | 15-20%                  |                10 |              0.03667 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3704 | 15-20%                  |                 5 |              0.07408 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3707 | >20%                    |                 5 |              0.07414 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3778 | >20%                    |                 5 |              0.07556 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3917 | >20%                    |                 2 |              0.19585 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3973 | >20%                    |                 5 |              0.07946 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4082 | <5%                     |                 2 |              0.2041  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4137 | >20%                    |                10 |              0.04137 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4145 | >20%                    |                 2 |              0.20725 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4147 | >20%                    |                 2 |              0.20735 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4204 | >20%                    |                 2 |              0.2102  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4277 | 10-15%                  |                 2 |              0.21385 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4359 | 15-20%                  |                 5 |              0.08718 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4374 | >20%                    |                 2 |              0.2187  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4418 | >20%                    |                 5 |              0.08836 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4457 | <5%                     |                 2 |              0.22285 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4465 | 5-10%                   |                 2 |              0.22325 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4488 | >20%                    |                 5 |              0.08976 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4567 | >20%                    |                 5 |              0.09134 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4657 | >20%                    |                 5 |              0.09314 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4694 | <5%                     |                10 |              0.04694 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4716 | 10-15%                  |                 2 |              0.2358  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4779 | >20%                    |                 2 |              0.23895 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4805 | >20%                    |                 5 |              0.0961  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4805 | 5-10%                   |                 2 |              0.24025 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4822 | >20%                    |                 5 |              0.09644 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4833 | >20%                    |                 2 |              0.24165 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4861 | >20%                    |                 2 |              0.24305 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5013 | >20%                    |                 2 |              0.25065 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.502  | >20%                    |                 2 |              0.251   |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.513  | >20%                    |                 2 |              0.2565  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5145 | 10-15%                  |                 5 |              0.1029  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5164 | 5-10%                   |                 5 |              0.10328 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5216 | 10-15%                  |                 5 |              0.10432 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5238 | >20%                    |                 2 |              0.2619  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5263 | >20%                    |                 5 |              0.10526 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.528  | 15-20%                  |                 2 |              0.264   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5297 | 10-15%                  |                 5 |              0.10594 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5361 | >20%                    |                 5 |              0.10722 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5432 | 15-20%                  |                10 |              0.05432 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5496 | >20%                    |                 5 |              0.10992 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5527 | 5-10%                   |                 2 |              0.27635 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5532 | <5%                     |                 2 |              0.2766  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5563 | >20%                    |                 5 |              0.11126 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5587 | >20%                    |                10 |              0.05587 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.559  | >20%                    |                 2 |              0.2795  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5628 | >20%                    |                 2 |              0.2814  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5681 | 5-10%                   |                 5 |              0.11362 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.5729 | >20%                    |                10 |              0.05729 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5817 | >20%                    |                 5 |              0.11634 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.584  | >20%                    |                 5 |              0.1168  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5848 | >20%                    |                 2 |              0.2924  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5868 | >20%                    |                 5 |              0.11736 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5956 | >20%                    |                 2 |              0.2978  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6023 | >20%                    |                 2 |              0.30115 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6092 | 5-10%                   |                 5 |              0.12184 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6107 | >20%                    |                10 |              0.06107 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6107 | <5%                     |                 5 |              0.12214 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6181 | 10-15%                  |                 2 |              0.30905 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6213 | 15-20%                  |                10 |              0.06213 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6255 | 10-15%                  |                 5 |              0.1251  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6269 | >20%                    |                10 |              0.06269 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6282 | >20%                    |                 2 |              0.3141  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6286 | >20%                    |                10 |              0.06286 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6295 | >20%                    |                 5 |              0.1259  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6355 | >20%                    |                 5 |              0.1271  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6467 | >20%                    |                 5 |              0.12934 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6488 | >20%                    |                 5 |              0.12976 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6793 | >20%                    |                10 |              0.06793 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.68   | >20%                    |                 5 |              0.136   |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6877 | 15-20%                  |                 2 |              0.34385 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6912 | 15-20%                  |                 5 |              0.13824 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6977 | 15-20%                  |                 2 |              0.34885 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7092 | >20%                    |                 5 |              0.14184 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7117 | >20%                    |                 5 |              0.14234 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.721  | 5-10%                   |                 5 |              0.1442  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7226 | >20%                    |                10 |              0.07226 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7262 | <5%                     |                 5 |              0.14524 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7296 | >20%                    |                 5 |              0.14592 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7328 | <5%                     |                10 |              0.07328 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.749  | 15-20%                  |                10 |              0.0749  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7639 | <5%                     |                10 |              0.07639 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7678 | >20%                    |                 5 |              0.15356 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7679 | 15-20%                  |                10 |              0.07679 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7783 | <5%                     |                 5 |              0.15566 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7936 | >20%                    |                 5 |              0.15872 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8153 | 15-20%                  |                10 |              0.08153 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8185 | <5%                     |                10 |              0.08185 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8281 | >20%                    |                10 |              0.08281 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8295 | >20%                    |                10 |              0.08295 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8363 | 5-10%                   |                10 |              0.08363 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8446 | >20%                    |                 5 |              0.16892 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8456 | 5-10%                   |                10 |              0.08456 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8483 | 15-20%                  |                 5 |              0.16966 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8732 | 5-10%                   |                 5 |              0.17464 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8746 | >20%                    |                 5 |              0.17492 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8777 | 5-10%                   |                10 |              0.08777 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8796 | 15-20%                  |                10 |              0.08796 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9027 | <5%                     |                10 |              0.09027 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9112 | 15-20%                  |                10 |              0.09112 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9121 | 5-10%                   |                10 |              0.09121 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.92   | 15-20%                  |                10 |              0.092   |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9212 | >20%                    |                 2 |              0.4606  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9256 | >20%                    |                10 |              0.09256 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9267 | 5-10%                   |                10 |              0.09267 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9363 | >20%                    |                10 |              0.09363 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9389 | >20%                    |                10 |              0.09389 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9592 | 15-20%                  |                10 |              0.09592 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.97   | 5-10%                   |                10 |              0.097   |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9984 | 5-10%                   |                10 |              0.09984 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0079 | 15-20%                  |                10 |              0.10079 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0335 | >20%                    |                 2 |              0.51675 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0339 | <5%                     |                10 |              0.10339 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0382 | <5%                     |                10 |              0.10382 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0562 | >20%                    |                10 |              0.10562 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0618 | >20%                    |                 5 |              0.21236 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0704 | >20%                    |                10 |              0.10704 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0704 | >20%                    |                10 |              0.10704 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.077  | >20%                    |                10 |              0.1077  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.08   | 5-10%                   |                10 |              0.108   |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.106  | 15-20%                  |                10 |              0.1106  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1444 | >20%                    |                10 |              0.11444 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1447 | <5%                     |                 2 |              0.57235 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1489 | >20%                    |                10 |              0.11489 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1678 | >20%                    |                 5 |              0.23356 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1699 | >20%                    |                10 |              0.11699 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1993 | >20%                    |                 5 |              0.23986 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2355 | >20%                    |                10 |              0.12355 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.312  | 15-20%                  |                 5 |              0.2624  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3389 | >20%                    |                10 |              0.13389 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3546 | >20%                    |                 2 |              0.6773  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3595 | >20%                    |                 5 |              0.2719  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3984 | >20%                    |                 2 |              0.6992  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4448 | 5-10%                   |                10 |              0.14448 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4462 | >20%                    |                 5 |              0.28924 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5505 | <5%                     |                10 |              0.15505 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5886 | <5%                     |                 5 |              0.31772 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6995 | >20%                    |                10 |              0.16995 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.7162 | 5-10%                   |                 2 |              0.8581  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7429 | 10-15%                  |                10 |              0.17429 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8891 | <5%                     |                10 |              0.18891 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0197 | 5-10%                   |                10 |              0.20197 |