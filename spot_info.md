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

Data correct as of 2026-10-23 04:02:57.034776, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0923 | >20%                    |                 2 |              0.04615 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1539 | 15-20%                  |                 5 |              0.03078 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1618 | 15-20%                  |                 2 |              0.0809  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1659 | 10-15%                  |                 2 |              0.08295 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1974 | >20%                    |                 5 |              0.03948 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2054 | >20%                    |                 2 |              0.1027  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.2414 | >20%                    |                 2 |              0.1207  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2529 | >20%                    |                 2 |              0.12645 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2668 | >20%                    |                 5 |              0.05336 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.268  | >20%                    |                 2 |              0.134   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.278  | >20%                    |                 5 |              0.0556  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3004 | >20%                    |                 2 |              0.1502  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3049 | >20%                    |                 2 |              0.15245 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3084 | >20%                    |                 2 |              0.1542  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3216 | 15-20%                  |                 2 |              0.1608  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.322  | >20%                    |                 2 |              0.161   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3272 | >20%                    |                 2 |              0.1636  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3614 | >20%                    |                 2 |              0.1807  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3672 | >20%                    |                 5 |              0.07344 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.369  | 10-15%                  |                 2 |              0.1845  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3735 | >20%                    |                 2 |              0.18675 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3782 | 15-20%                  |                 2 |              0.1891  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3797 | 15-20%                  |                 2 |              0.18985 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3811 | >20%                    |                 5 |              0.07622 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3881 | >20%                    |                 5 |              0.07762 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3904 | >20%                    |                10 |              0.03904 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3956 | <5%                     |                 2 |              0.1978  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4028 | >20%                    |                 2 |              0.2014  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4095 | >20%                    |                 5 |              0.0819  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4178 | >20%                    |                10 |              0.04178 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4238 | >20%                    |                 5 |              0.08476 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4256 | >20%                    |                 5 |              0.08512 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4316 | >20%                    |                 2 |              0.2158  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4375 | <5%                     |                10 |              0.04375 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4379 | >20%                    |                 5 |              0.08758 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4698 | >20%                    |                 5 |              0.09396 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4699 | >20%                    |                 5 |              0.09398 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4735 | >20%                    |                 2 |              0.23675 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.475  | >20%                    |                 2 |              0.2375  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4809 | 10-15%                  |                 2 |              0.24045 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4882 | >20%                    |                 2 |              0.2441  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4905 | >20%                    |                 2 |              0.24525 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5012 | >20%                    |                 5 |              0.10024 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.5029 |                         |                 2 |              0.25145 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5109 | 5-10%                   |                10 |              0.05109 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.5136 |                         |                10 |              0.05136 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5143 | >20%                    |                 5 |              0.10286 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5172 | >20%                    |                10 |              0.05172 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.522  | >20%                    |                 5 |              0.1044  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.537  | >20%                    |                 5 |              0.1074  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5478 | >20%                    |                 2 |              0.2739  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5592 | >20%                    |                 2 |              0.2796  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5621 | >20%                    |                 2 |              0.28105 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5642 | 15-20%                  |                 2 |              0.2821  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5663 | >20%                    |                10 |              0.05663 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5753 | >20%                    |                 5 |              0.11506 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5789 | >20%                    |                 5 |              0.11578 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5896 | 10-15%                  |                 5 |              0.11792 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5918 | 5-10%                   |                10 |              0.05918 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6055 | >20%                    |                 2 |              0.30275 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6164 | >20%                    |                 5 |              0.12328 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6168 | 10-15%                  |                 2 |              0.3084  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6426 | <5%                     |                 2 |              0.3213  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.651  | >20%                    |                 5 |              0.1302  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6544 | >20%                    |                 2 |              0.3272  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6636 | 5-10%                   |                 2 |              0.3318  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6659 | >20%                    |                 5 |              0.13318 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.667  | >20%                    |                10 |              0.0667  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6751 | >20%                    |                 5 |              0.13502 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6763 | <5%                     |                 2 |              0.33815 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6806 | >20%                    |                 5 |              0.13612 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.683  | >20%                    |                 5 |              0.1366  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7027 | 15-20%                  |                 2 |              0.35135 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7044 | >20%                    |                 5 |              0.14088 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7339 | 15-20%                  |                 5 |              0.14678 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7443 | >20%                    |                 5 |              0.14886 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.751  | >20%                    |                10 |              0.0751  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7516 | 10-15%                  |                10 |              0.07516 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7701 | 15-20%                  |                10 |              0.07701 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7967 | >20%                    |                10 |              0.07967 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7997 | >20%                    |                10 |              0.07997 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7998 | 15-20%                  |                10 |              0.07998 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8095 | >20%                    |                 5 |              0.1619  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8108 | 15-20%                  |                10 |              0.08108 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8183 | 5-10%                   |                10 |              0.08183 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8183 | >20%                    |                 5 |              0.16366 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8389 | >20%                    |                10 |              0.08389 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8446 | >20%                    |                 2 |              0.4223  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8469 | 15-20%                  |                 5 |              0.16938 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8506 | >20%                    |                10 |              0.08506 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8537 | 10-15%                  |                 2 |              0.42685 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8605 | 10-15%                  |                 2 |              0.43025 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8755 | >20%                    |                10 |              0.08755 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8903 | >20%                    |                10 |              0.08903 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.8992 | >20%                    |                 5 |              0.17984 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9114 | <5%                     |                 5 |              0.18228 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.9114 | 5-10%                   |                 5 |              0.18228 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9171 | >20%                    |                 5 |              0.18342 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9237 | >20%                    |                 5 |              0.18474 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9395 | >20%                    |                10 |              0.09395 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9404 | >20%                    |                10 |              0.09404 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9647 | >20%                    |                 5 |              0.19294 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9869 | >20%                    |                10 |              0.09869 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1      | >20%                    |                10 |              0.1     |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0011 | 15-20%                  |                10 |              0.10011 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0068 | >20%                    |                 5 |              0.20136 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0233 | 15-20%                  |                10 |              0.10233 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      1.026  |                         |                 5 |              0.2052  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0353 | >20%                    |                10 |              0.10353 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0841 | >20%                    |                 5 |              0.21682 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0881 | >20%                    |                10 |              0.10881 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.117  | 5-10%                   |                10 |              0.1117  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1246 | >20%                    |                 2 |              0.5623  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1314 | >20%                    |                 5 |              0.22628 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.1836 | >20%                    |                 5 |              0.23672 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2053 | >20%                    |                10 |              0.12053 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2058 | >20%                    |                10 |              0.12058 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2399 | 15-20%                  |                10 |              0.12399 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.2501 | >20%                    |                10 |              0.12501 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.285  | >20%                    |                10 |              0.1285  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3228 | >20%                    |                10 |              0.13228 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3457 | >20%                    |                 2 |              0.67285 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3581 | 15-20%                  |                10 |              0.13581 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3704 |                         |                 5 |              0.27408 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3769 | 10-15%                  |                10 |              0.13769 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3771 | >20%                    |                10 |              0.13771 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.3829 |                         |                 2 |              0.69145 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3904 | >20%                    |                 5 |              0.27808 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.4004 | >20%                    |                 5 |              0.28008 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.4079 | >20%                    |                 2 |              0.70395 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4479 | >20%                    |                10 |              0.14479 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.487  | 5-10%                   |                 2 |              0.7435  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5012 | 5-10%                   |                 5 |              0.30024 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.5294 |                         |                10 |              0.15294 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.545  |                         |                 2 |              0.7725  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      1.5758 | >20%                    |                 2 |              0.7879  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.6142 | >20%                    |                 2 |              0.8071  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6482 | >20%                    |                10 |              0.16482 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.7201 | 10-15%                  |                 2 |              0.86005 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7321 | >20%                    |                 5 |              0.34642 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.7493 | 5-10%                   |                 2 |              0.87465 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.754  | >20%                    |                10 |              0.1754  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7887 | >20%                    |                10 |              0.17887 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.9236 | 15-20%                  |                10 |              0.19236 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.0526 | >20%                    |                10 |              0.20526 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0878 | 15-20%                  |                 5 |              0.41756 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2233 | 5-10%                   |                 2 |              1.11165 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.232  | 5-10%                   |                10 |              0.2232  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.2929 | >20%                    |                 5 |              0.45858 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      2.3287 |                         |                 5 |              0.46574 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.5083 |                         |                10 |              0.25083 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5896 | >20%                    |                10 |              0.25896 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0649 | >20%                    |                10 |              0.30649 |