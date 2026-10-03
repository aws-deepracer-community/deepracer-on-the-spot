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

Data correct as of 2026-10-03 04:35:50.951552, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.109  | >20%                    |                 2 |              0.0545  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1518 | >20%                    |                 2 |              0.0759  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1654 | 15-20%                  |                 2 |              0.0827  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1966 | >20%                    |                 2 |              0.0983  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2019 | >20%                    |                 5 |              0.04038 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2178 | 15-20%                  |                 5 |              0.04356 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2228 | 15-20%                  |                 5 |              0.04456 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2309 | >20%                    |                 5 |              0.04618 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2359 | >20%                    |                 2 |              0.11795 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2678 | >20%                    |                 2 |              0.1339  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2859 | >20%                    |                 2 |              0.14295 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2885 | >20%                    |                 2 |              0.14425 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2953 | 15-20%                  |                 2 |              0.14765 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3038 | >20%                    |                 2 |              0.1519  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3046 | >20%                    |                 5 |              0.06092 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3084 | <5%                     |                10 |              0.03084 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3247 | >20%                    |                 2 |              0.16235 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3312 | >20%                    |                 5 |              0.06624 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.337  | 10-15%                  |                 2 |              0.1685  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3393 | >20%                    |                 2 |              0.16965 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.359  | 10-15%                  |                 2 |              0.1795  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.366  | >20%                    |                 2 |              0.183   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3737 | 15-20%                  |                 2 |              0.18685 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3756 | >20%                    |                 2 |              0.1878  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.377  | >20%                    |                 5 |              0.0754  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3786 | 5-10%                   |                10 |              0.03786 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3796 | >20%                    |                 2 |              0.1898  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3891 | >20%                    |                 2 |              0.19455 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3897 | <5%                     |                 2 |              0.19485 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3907 | >20%                    |                10 |              0.03907 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3965 | >20%                    |                 2 |              0.19825 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4125 | >20%                    |                 5 |              0.0825  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4201 | >20%                    |                 5 |              0.08402 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4227 | >20%                    |                 5 |              0.08454 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4255 | >20%                    |                 5 |              0.0851  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4327 | 15-20%                  |                 2 |              0.21635 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4369 | >20%                    |                 2 |              0.21845 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4392 | >20%                    |                10 |              0.04392 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4615 | >20%                    |                 5 |              0.0923  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4624 | >20%                    |                 5 |              0.09248 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4759 | >20%                    |                 5 |              0.09518 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4769 | 10-15%                  |                 2 |              0.23845 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4805 | >20%                    |                 2 |              0.24025 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4875 |                         |                 2 |              0.24375 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.488  | >20%                    |                 5 |              0.0976  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.4923 | >20%                    |                 5 |              0.09846 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.496  | >20%                    |                 2 |              0.248   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4975 | >20%                    |                 5 |              0.0995  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5069 | <5%                     |                 2 |              0.25345 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5087 | >20%                    |                 2 |              0.25435 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5209 | >20%                    |                 2 |              0.26045 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5477 | 15-20%                  |                 2 |              0.27385 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5503 | >20%                    |                 5 |              0.11006 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.556  | >20%                    |                10 |              0.0556  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5562 | >20%                    |                 2 |              0.2781  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5802 | >20%                    |                 5 |              0.11604 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5859 | 10-15%                  |                 5 |              0.11718 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5896 | >20%                    |                 5 |              0.11792 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.591  | >20%                    |                10 |              0.0591  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5926 | >20%                    |                 2 |              0.2963  |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.5939 |                         |                 5 |              0.11878 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6059 | >20%                    |                 2 |              0.30295 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6105 | >20%                    |                 5 |              0.1221  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6127 | 5-10%                   |                10 |              0.06127 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6143 | 10-15%                  |                 2 |              0.30715 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6226 | >20%                    |                 5 |              0.12452 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6339 | >20%                    |                 5 |              0.12678 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6386 | >20%                    |                10 |              0.06386 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.649  | >20%                    |                 2 |              0.3245  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6607 | >20%                    |                 5 |              0.13214 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6833 | >20%                    |                10 |              0.06833 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6837 | 5-10%                   |                 2 |              0.34185 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.6841 |                         |                10 |              0.06841 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6846 | <5%                     |                 2 |              0.3423  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6879 | >20%                    |                 2 |              0.34395 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.694  | 5-10%                   |                 5 |              0.1388  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6965 | >20%                    |                 5 |              0.1393  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7219 | >20%                    |                 5 |              0.14438 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7345 | 15-20%                  |                 5 |              0.1469  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.735  | 15-20%                  |                10 |              0.0735  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7362 | >20%                    |                 5 |              0.14724 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7389 | 15-20%                  |                 2 |              0.36945 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.74   | >20%                    |                 5 |              0.148   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7423 | >20%                    |                10 |              0.07423 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7462 | >20%                    |                 5 |              0.14924 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7595 | >20%                    |                 5 |              0.1519  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7691 | >20%                    |                10 |              0.07691 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7776 | 15-20%                  |                10 |              0.07776 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7855 | >20%                    |                 5 |              0.1571  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8015 | 15-20%                  |                10 |              0.08015 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8016 | >20%                    |                10 |              0.08016 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8306 | >20%                    |                 5 |              0.16612 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8345 | 5-10%                   |                10 |              0.08345 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8481 | >20%                    |                10 |              0.08481 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8481 | >20%                    |                10 |              0.08481 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8506 | >20%                    |                 2 |              0.4253  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8617 | 15-20%                  |                 5 |              0.17234 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8668 | 10-15%                  |                 2 |              0.4334  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8676 | >20%                    |                10 |              0.08676 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8738 | 10-15%                  |                10 |              0.08738 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8995 | >20%                    |                10 |              0.08995 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9032 | >20%                    |                10 |              0.09032 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9066 | <5%                     |                 5 |              0.18132 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9142 | >20%                    |                 5 |              0.18284 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9159 | >20%                    |                 2 |              0.45795 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9191 | 15-20%                  |                10 |              0.09191 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9295 | >20%                    |                 5 |              0.1859  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9461 | >20%                    |                 5 |              0.18922 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9465 | >20%                    |                10 |              0.09465 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9633 | >20%                    |                10 |              0.09633 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9717 | >20%                    |                 5 |              0.19434 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9741 | 10-15%                  |                 2 |              0.48705 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9754 | >20%                    |                10 |              0.09754 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9803 | >20%                    |                 5 |              0.19606 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9982 | 15-20%                  |                10 |              0.09982 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0043 | >20%                    |                10 |              0.10043 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0046 | >20%                    |                10 |              0.10046 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0119 | 15-20%                  |                10 |              0.10119 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.0206 | >20%                    |                 2 |              0.5103  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.033  | >20%                    |                10 |              0.1033  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0351 | >20%                    |                10 |              0.10351 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0613 | >20%                    |                10 |              0.10613 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0725 | >20%                    |                10 |              0.10725 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1187 | 5-10%                   |                10 |              0.11187 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1265 | >20%                    |                 5 |              0.2253  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.1367 |                         |                 2 |              0.56835 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.153  | 5-10%                   |                 2 |              0.5765  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2057 | >20%                    |                10 |              0.12057 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2231 | >20%                    |                10 |              0.12231 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2832 | 5-10%                   |                 2 |              0.6416  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3279 | >20%                    |                 2 |              0.66395 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3441 | >20%                    |                10 |              0.13441 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3677 | 15-20%                  |                10 |              0.13677 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4016 | 10-15%                  |                10 |              0.14016 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4242 | 10-15%                  |                 2 |              0.7121  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4293 | >20%                    |                10 |              0.14293 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5337 | >20%                    |                 2 |              0.76685 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5376 | 5-10%                   |                 5 |              0.30752 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5461 |                         |                10 |              0.15461 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.5532 |                         |                 2 |              0.7766  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5762 | >20%                    |                 5 |              0.31524 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6142 | 15-20%                  |                10 |              0.16142 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6224 | >20%                    |                10 |              0.16224 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.7036 |                         |                 5 |              0.34072 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.731  | >20%                    |                 5 |              0.3462  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.7581 |                         |                 5 |              0.35162 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8437 | >20%                    |                10 |              0.18437 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.9398 |                         |                10 |              0.19398 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9624 | >20%                    |                10 |              0.19624 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.081  | 15-20%                  |                 5 |              0.4162  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.1528 | >20%                    |                 5 |              0.43056 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2122 | 5-10%                   |                 2 |              1.1061  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2493 | 5-10%                   |                10 |              0.22493 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5695 | >20%                    |                10 |              0.25695 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.1513 | >20%                    |                10 |              0.31513 |