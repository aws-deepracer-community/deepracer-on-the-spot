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

Data correct as of 2025-03-17 01:46:08.707391, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1134 | 10-15%                  |                 2 |              0.0567  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1426 | 5-10%                   |                 5 |              0.02852 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1783 | >20%                    |                 5 |              0.03566 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1784 | >20%                    |                 2 |              0.0892  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1969 | 15-20%                  |                 2 |              0.09845 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2106 | 10-15%                  |                 2 |              0.1053  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2133 | 5-10%                   |                 2 |              0.10665 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2206 | 5-10%                   |                 5 |              0.04412 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2228 | 5-10%                   |                 2 |              0.1114  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2321 | >20%                    |                 2 |              0.11605 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2336 | 5-10%                   |                10 |              0.02336 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2379 | 15-20%                  |                 2 |              0.11895 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2437 | >20%                    |                 2 |              0.12185 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2458 | >20%                    |                 2 |              0.1229  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2468 | 15-20%                  |                 5 |              0.04936 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2498 | 5-10%                   |                 2 |              0.1249  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2612 | 5-10%                   |                 2 |              0.1306  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2666 | <5%                     |                 2 |              0.1333  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2721 | 5-10%                   |                10 |              0.02721 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2815 | >20%                    |                 2 |              0.14075 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2862 | >20%                    |                 5 |              0.05724 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2914 | <5%                     |                 2 |              0.1457  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2918 | <5%                     |                 2 |              0.1459  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2921 | 10-15%                  |                 2 |              0.14605 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2925 | >20%                    |                 5 |              0.0585  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2991 | 5-10%                   |                 2 |              0.14955 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3033 | >20%                    |                 2 |              0.15165 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3037 | >20%                    |                 2 |              0.15185 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3051 | 5-10%                   |                 2 |              0.15255 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3069 | 10-15%                  |                 5 |              0.06138 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3118 | 10-15%                  |                10 |              0.03118 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.32   | 10-15%                  |                 5 |              0.064   |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3217 | 10-15%                  |                 2 |              0.16085 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3317 | >20%                    |                 2 |              0.16585 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.3341 |                         |                 2 |              0.16705 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | 5-10%                   |                10 |              0.03351 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3481 | >20%                    |                 5 |              0.06962 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3515 | >20%                    |                 2 |              0.17575 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3519 | >20%                    |                 2 |              0.17595 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.358  | 10-15%                  |                 5 |              0.0716  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3635 | >20%                    |                 2 |              0.18175 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3638 | >20%                    |                 2 |              0.1819  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3663 | >20%                    |                10 |              0.03663 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.368  | >20%                    |                 5 |              0.0736  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.3694 |                         |                 5 |              0.07388 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3717 | >20%                    |                 5 |              0.07434 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3765 | >20%                    |                 2 |              0.18825 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3838 | 15-20%                  |                10 |              0.03838 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3878 | 5-10%                   |                 5 |              0.07756 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3917 | 5-10%                   |                 2 |              0.19585 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3956 | >20%                    |                 2 |              0.1978  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3961 | >20%                    |                 2 |              0.19805 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.397  | <5%                     |                 2 |              0.1985  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3988 | 5-10%                   |                10 |              0.03988 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3991 | >20%                    |                 5 |              0.07982 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4016 | 5-10%                   |                 5 |              0.08032 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4076 | <5%                     |                 2 |              0.2038  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4093 | 5-10%                   |                 2 |              0.20465 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4101 | 5-10%                   |                 2 |              0.20505 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4129 | 5-10%                   |                 2 |              0.20645 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4191 | <5%                     |                 5 |              0.08382 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4214 | >20%                    |                10 |              0.04214 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4218 | 15-20%                  |                 2 |              0.2109  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4223 | 10-15%                  |                10 |              0.04223 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4245 | <5%                     |                 5 |              0.0849  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4253 | <5%                     |                 2 |              0.21265 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4255 | 5-10%                   |                10 |              0.04255 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4286 | >20%                    |                 5 |              0.08572 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4332 | >20%                    |                 2 |              0.2166  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4359 | >20%                    |                 2 |              0.21795 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4391 | >20%                    |                10 |              0.04391 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4444 | 10-15%                  |                10 |              0.04444 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4531 | 5-10%                   |                 5 |              0.09062 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4584 | 5-10%                   |                 5 |              0.09168 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4585 | 5-10%                   |                 2 |              0.22925 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4647 | 10-15%                  |                 2 |              0.23235 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.466  | <5%                     |                10 |              0.0466  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4683 | >20%                    |                 5 |              0.09366 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4699 | <5%                     |                 5 |              0.09398 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.4702 | 5-10%                   |                 5 |              0.09404 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4708 | <5%                     |                 5 |              0.09416 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4734 | 10-15%                  |                 5 |              0.09468 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4805 | >20%                    |                 5 |              0.0961  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4837 | 5-10%                   |                 5 |              0.09674 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4875 | >20%                    |                 5 |              0.0975  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4925 | >20%                    |                 5 |              0.0985  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4954 | >20%                    |                 2 |              0.2477  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.498  | >20%                    |                 2 |              0.249   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5014 | >20%                    |                 2 |              0.2507  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5127 | <5%                     |                 2 |              0.25635 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5153 | 5-10%                   |                 5 |              0.10306 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5204 | >20%                    |                 5 |              0.10408 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5213 | 15-20%                  |                 2 |              0.26065 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5274 | >20%                    |                 5 |              0.10548 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5294 | >20%                    |                 2 |              0.2647  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5332 | <5%                     |                 5 |              0.10664 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5346 | 15-20%                  |                 2 |              0.2673  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5355 | <5%                     |                10 |              0.05355 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5449 | >20%                    |                 5 |              0.10898 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.555  | >20%                    |                 5 |              0.111   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5581 | 15-20%                  |                 5 |              0.11162 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5583 | 5-10%                   |                 5 |              0.11166 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5637 | 5-10%                   |                 5 |              0.11274 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5668 | 10-15%                  |                 5 |              0.11336 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5734 | >20%                    |                 2 |              0.2867  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5771 | 15-20%                  |                 5 |              0.11542 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5813 | <5%                     |                 5 |              0.11626 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5833 | >20%                    |                 2 |              0.29165 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.584  | >20%                    |                 2 |              0.292   |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.5983 | >20%                    |                 2 |              0.29915 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.614  | 10-15%                  |                 5 |              0.1228  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6411 | >20%                    |                10 |              0.06411 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6413 | >20%                    |                10 |              0.06413 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6437 | >20%                    |                 5 |              0.12874 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.65   | >20%                    |                 5 |              0.13    |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6573 | >20%                    |                 5 |              0.13146 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6661 | 10-15%                  |                 5 |              0.13322 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6861 | >20%                    |                 5 |              0.13722 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6908 | >20%                    |                 5 |              0.13816 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6992 |                         |                10 |              0.06992 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.706  | >20%                    |                10 |              0.0706  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7062 | >20%                    |                10 |              0.07062 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7095 | >20%                    |                 2 |              0.35475 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7127 | >20%                    |                10 |              0.07127 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7169 | 5-10%                   |                 2 |              0.35845 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.733  | >20%                    |                10 |              0.0733  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.734  | 5-10%                   |                 5 |              0.1468  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7351 | >20%                    |                10 |              0.07351 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7364 | <5%                     |                 5 |              0.14728 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7423 | <5%                     |                10 |              0.07423 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7466 | 5-10%                   |                10 |              0.07466 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.747  | >20%                    |                 5 |              0.1494  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7562 | <5%                     |                10 |              0.07562 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7638 | 5-10%                   |                10 |              0.07638 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7684 | >20%                    |                 5 |              0.15368 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.775  | 5-10%                   |                10 |              0.0775  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7849 | <5%                     |                10 |              0.07849 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7885 | >20%                    |                10 |              0.07885 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7976 | 15-20%                  |                 5 |              0.15952 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.8004 | >20%                    |                 2 |              0.4002  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8138 | <5%                     |                10 |              0.08138 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8159 | >20%                    |                10 |              0.08159 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8398 | 5-10%                   |                10 |              0.08398 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8458 | >20%                    |                10 |              0.08458 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.8493 | >20%                    |                 5 |              0.16986 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8502 | <5%                     |                10 |              0.08502 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8521 | >20%                    |                10 |              0.08521 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.855  | >20%                    |                10 |              0.0855  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8644 | 5-10%                   |                10 |              0.08644 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.868  | 15-20%                  |                10 |              0.0868  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8709 | 15-20%                  |                10 |              0.08709 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8722 | 15-20%                  |                 5 |              0.17444 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8888 | >20%                    |                10 |              0.08888 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8977 | <5%                     |                10 |              0.08977 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9021 | >20%                    |                 2 |              0.45105 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9129 | >20%                    |                10 |              0.09129 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9872 | >20%                    |                 2 |              0.4936  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9883 | 10-15%                  |                10 |              0.09883 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9937 | 5-10%                   |                10 |              0.09937 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0053 | >20%                    |                10 |              0.10053 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0578 | >20%                    |                 5 |              0.21156 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0806 | 5-10%                   |                10 |              0.10806 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.095  | >20%                    |                10 |              0.1095  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1131 | <5%                     |                10 |              0.11131 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1178 | 5-10%                   |                10 |              0.11178 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1286 | >20%                    |                10 |              0.11286 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1437 | >20%                    |                10 |              0.11437 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1787 | 15-20%                  |                10 |              0.11787 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1852 | 15-20%                  |                10 |              0.11852 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2406 | >20%                    |                10 |              0.12406 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2956 | 5-10%                   |                 2 |              0.6478  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.299  | 5-10%                   |                 5 |              0.2598  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3308 | >20%                    |                10 |              0.13308 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4023 | >20%                    |                 5 |              0.28046 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4417 | >20%                    |                 5 |              0.28834 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4951 | 10-15%                  |                 5 |              0.29902 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5059 | >20%                    |                10 |              0.15059 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5089 | >20%                    |                10 |              0.15089 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5328 | >20%                    |                 2 |              0.7664  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7345 | >20%                    |                10 |              0.17345 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.163  | 5-10%                   |                10 |              0.2163  |