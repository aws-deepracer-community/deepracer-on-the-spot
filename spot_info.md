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

Data correct as of 2024-10-17 01:37:33.206932, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1037 |                         |                 2 |              0.05185 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1174 |                         |                 2 |              0.0587  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1271 |                         |                 2 |              0.06355 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1287 | <5%                     |                 2 |              0.06435 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1403 |                         |                 5 |              0.02806 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1446 | 10-15%                  |                 2 |              0.0723  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 |                         |                 5 |              0.03178 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 |                         |                 2 |              0.0831  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.172  |                         |                 5 |              0.0344  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1818 | <5%                     |                 2 |              0.0909  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1849 | 15-20%                  |                 2 |              0.09245 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2061 | >20%                    |                 2 |              0.10305 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2137 |                         |                10 |              0.02137 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2238 | >20%                    |                 2 |              0.1119  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 |                         |                 5 |              0.04498 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2295 | <5%                     |                 2 |              0.11475 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2362 | <5%                     |                 2 |              0.1181  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2373 | >20%                    |                 5 |              0.04746 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 |                         |                10 |              0.02419 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2559 | <5%                     |                 2 |              0.12795 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2573 | 15-20%                  |                 2 |              0.12865 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2619 |                         |                10 |              0.02619 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.263  | <5%                     |                 2 |              0.1315  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2633 | >20%                    |                 5 |              0.05266 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2685 | <5%                     |                 2 |              0.13425 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2694 | <5%                     |                 2 |              0.1347  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.284  | <5%                     |                 2 |              0.142   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2889 | 5-10%                   |                 2 |              0.14445 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2908 | >20%                    |                 5 |              0.05816 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2925 | 10-15%                  |                 2 |              0.14625 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2956 | 10-15%                  |                 2 |              0.1478  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2957 | 15-20%                  |                 2 |              0.14785 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3016 | 15-20%                  |                 2 |              0.1508  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.313  | 15-20%                  |                 2 |              0.1565  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3324 | >20%                    |                 5 |              0.06648 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3339 | <5%                     |                 5 |              0.06678 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3344 | <5%                     |                 2 |              0.1672  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3363 | 5-10%                   |                 5 |              0.06726 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.34   | >20%                    |                 2 |              0.17    |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 |                         |                10 |              0.03424 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.345  | <5%                     |                 2 |              0.1725  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3458 | >20%                    |                 5 |              0.06916 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3481 | 5-10%                   |                 5 |              0.06962 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3583 | <5%                     |                10 |              0.03583 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3606 | 15-20%                  |                10 |              0.03606 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.3897 | <5%                     |                 2 |              0.19485 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3903 | >20%                    |                 2 |              0.19515 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3956 | <5%                     |                 5 |              0.07912 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3998 | <5%                     |                 5 |              0.07996 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.402  | <5%                     |                 5 |              0.0804  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4038 | 5-10%                   |                 5 |              0.08076 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.411  | 5-10%                   |                 2 |              0.2055  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4155 | 5-10%                   |                10 |              0.04155 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4161 | <5%                     |                 2 |              0.20805 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4201 | 15-20%                  |                 5 |              0.08402 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4233 | 5-10%                   |                 2 |              0.21165 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4267 | >20%                    |                 2 |              0.21335 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4274 | 15-20%                  |                 5 |              0.08548 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4338 | 5-10%                   |                10 |              0.04338 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4397 | 15-20%                  |                 2 |              0.21985 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4483 | >20%                    |                 2 |              0.22415 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.45   | >20%                    |                 2 |              0.225   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4506 | >20%                    |                 2 |              0.2253  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.4509 | 5-10%                   |                 5 |              0.09018 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4525 | 10-15%                  |                 5 |              0.0905  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4536 | >20%                    |                 5 |              0.09072 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4608 | >20%                    |                 5 |              0.09216 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4624 | 15-20%                  |                 5 |              0.09248 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4626 | <5%                     |                 5 |              0.09252 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4673 | >20%                    |                10 |              0.04673 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4675 | <5%                     |                 5 |              0.0935  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4736 | 5-10%                   |                 2 |              0.2368  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4758 | 10-15%                  |                 5 |              0.09516 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4835 | >20%                    |                 2 |              0.24175 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4889 | 10-15%                  |                 5 |              0.09778 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4913 | >20%                    |                10 |              0.04913 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4962 | <5%                     |                 2 |              0.2481  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.502  | >20%                    |                 2 |              0.251   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.509  | <5%                     |                 5 |              0.1018  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5222 | 5-10%                   |                10 |              0.05222 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.523  | <5%                     |                 5 |              0.1046  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.524  | <5%                     |                 5 |              0.1048  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5247 | >20%                    |                 5 |              0.10494 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5386 | <5%                     |                 5 |              0.10772 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.5436 | <5%                     |                10 |              0.05436 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.5645 | >20%                    |                 2 |              0.28225 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5697 | >20%                    |                 5 |              0.11394 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5782 | 5-10%                   |                 5 |              0.11564 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5797 | >20%                    |                 5 |              0.11594 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5822 | 15-20%                  |                 5 |              0.11644 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5977 | 5-10%                   |                10 |              0.05977 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5977 | 15-20%                  |                 5 |              0.11954 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5993 | 15-20%                  |                10 |              0.05993 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6002 | >20%                    |                 2 |              0.3001  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6056 | >20%                    |                 5 |              0.12112 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6209 | 5-10%                   |                10 |              0.06209 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6229 | >20%                    |                 5 |              0.12458 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6274 | 15-20%                  |                10 |              0.06274 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6551 | <5%                     |                10 |              0.06551 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6601 | >20%                    |                10 |              0.06601 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.669  | <5%                     |                10 |              0.0669  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6715 | >20%                    |                10 |              0.06715 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.679  | 15-20%                  |                10 |              0.0679  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.6811 | <5%                     |                10 |              0.06811 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6918 | >20%                    |                 2 |              0.3459  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6947 | <5%                     |                10 |              0.06947 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6952 | 5-10%                   |                10 |              0.06952 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6991 | 5-10%                   |                 5 |              0.13982 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7316 | >20%                    |                 5 |              0.14632 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.741  | >20%                    |                10 |              0.0741  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7592 | 5-10%                   |                10 |              0.07592 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7605 | >20%                    |                10 |              0.07605 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7615 | 10-15%                  |                10 |              0.07615 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7853 | 10-15%                  |                 5 |              0.15706 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7853 | 15-20%                  |                10 |              0.07853 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7962 | 5-10%                   |                10 |              0.07962 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8228 | >20%                    |                10 |              0.08228 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8378 | 15-20%                  |                10 |              0.08378 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8675 | <5%                     |                10 |              0.08675 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8724 | 10-15%                  |                10 |              0.08724 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.881  | >20%                    |                 5 |              0.1762  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8958 | 10-15%                  |                 2 |              0.4479  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9129 | >20%                    |                10 |              0.09129 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9154 | <5%                     |                 2 |              0.4577  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9189 | >20%                    |                10 |              0.09189 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.922  | >20%                    |                10 |              0.0922  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9466 | <5%                     |                10 |              0.09466 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9698 | 5-10%                   |                10 |              0.09698 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0147 | >20%                    |                 5 |              0.20294 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0215 | <5%                     |                10 |              0.10215 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.024  | >20%                    |                10 |              0.1024  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0379 | 10-15%                  |                 5 |              0.20758 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.119  | >20%                    |                10 |              0.1119  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1899 | >20%                    |                10 |              0.11899 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4839 | 5-10%                   |                10 |              0.14839 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.5131 | >20%                    |                10 |              0.15131 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5441 | 5-10%                   |                10 |              0.15441 |