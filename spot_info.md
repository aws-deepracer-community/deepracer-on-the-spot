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

Data correct as of 2025-06-07 01:53:22.026024, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1381 | 5-10%                   |                 2 |              0.06905 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1814 | >20%                    |                 2 |              0.0907  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1832 | >20%                    |                 2 |              0.0916  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 5-10%                   |                 5 |              0.03708 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | >20%                    |                 5 |              0.039   |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2065 | >20%                    |                 2 |              0.10325 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.221  | >20%                    |                 2 |              0.1105  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2311 | >20%                    |                 2 |              0.11555 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2339 | 15-20%                  |                 2 |              0.11695 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2358 | >20%                    |                 5 |              0.04716 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | >20%                    |                10 |              0.02395 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 5-10%                   |                10 |              0.02419 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2421 | >20%                    |                 5 |              0.04842 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2456 | <5%                     |                 2 |              0.1228  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2457 | 10-15%                  |                 2 |              0.12285 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2572 | 15-20%                  |                 2 |              0.1286  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2625 | >20%                    |                10 |              0.02625 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2661 | >20%                    |                 2 |              0.13305 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2765 | 15-20%                  |                 2 |              0.13825 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2776 | <5%                     |                 2 |              0.1388  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2788 | 10-15%                  |                 2 |              0.1394  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2797 | >20%                    |                 2 |              0.13985 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2872 | >20%                    |                 2 |              0.1436  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | 15-20%                  |                10 |              0.0294  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3001 | >20%                    |                 2 |              0.15005 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3013 | >20%                    |                 5 |              0.06026 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3042 | >20%                    |                 2 |              0.1521  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3108 | >20%                    |                 2 |              0.1554  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3117 | >20%                    |                 2 |              0.15585 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3174 | >20%                    |                 2 |              0.1587  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.325  | >20%                    |                 5 |              0.065   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.329  | 15-20%                  |                 5 |              0.0658  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3436 | 5-10%                   |                 2 |              0.1718  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.349  | 15-20%                  |                 5 |              0.0698  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3524 | >20%                    |                 2 |              0.1762  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3577 | <5%                     |                10 |              0.03577 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3593 | >20%                    |                10 |              0.03593 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3599 | 5-10%                   |                 2 |              0.17995 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3661 | >20%                    |                 2 |              0.18305 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3688 | 15-20%                  |                 2 |              0.1844  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3725 | 15-20%                  |                 2 |              0.18625 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3748 | >20%                    |                 2 |              0.1874  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3754 | >20%                    |                 5 |              0.07508 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.381  | >20%                    |                 5 |              0.0762  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3813 | >20%                    |                10 |              0.03813 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3865 | >20%                    |                 5 |              0.0773  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3888 | >20%                    |                10 |              0.03888 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3913 | 5-10%                   |                 5 |              0.07826 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3941 | 15-20%                  |                 2 |              0.19705 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3946 | 15-20%                  |                 2 |              0.1973  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3958 | >20%                    |                 2 |              0.1979  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4025 | <5%                     |                 5 |              0.0805  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4082 | 5-10%                   |                 2 |              0.2041  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4086 | >20%                    |                 5 |              0.08172 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4105 | >20%                    |                 2 |              0.20525 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4121 | <5%                     |                 2 |              0.20605 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.431  | >20%                    |                 2 |              0.2155  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4375 | >20%                    |                 5 |              0.0875  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4389 | 15-20%                  |                 2 |              0.21945 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4393 | >20%                    |                10 |              0.04393 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4396 | >20%                    |                 5 |              0.08792 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4406 | 15-20%                  |                 5 |              0.08812 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4406 | 5-10%                   |                 2 |              0.2203  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4417 | 15-20%                  |                 5 |              0.08834 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4424 | 5-10%                   |                 5 |              0.08848 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4535 | <5%                     |                 5 |              0.0907  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4542 | >20%                    |                 2 |              0.2271  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4559 | >20%                    |                 2 |              0.22795 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4575 | >20%                    |                 5 |              0.0915  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4669 | >20%                    |                 5 |              0.09338 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4734 | 15-20%                  |                 5 |              0.09468 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4864 | <5%                     |                 5 |              0.09728 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4866 | >20%                    |                 5 |              0.09732 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4891 | 10-15%                  |                 5 |              0.09782 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4895 | 15-20%                  |                10 |              0.04895 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4905 | >20%                    |                 5 |              0.0981  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4914 | 5-10%                   |                 5 |              0.09828 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4932 | 5-10%                   |                 5 |              0.09864 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4934 | 15-20%                  |                 5 |              0.09868 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4954 | >20%                    |                 2 |              0.2477  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4991 | >20%                    |                 2 |              0.24955 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5041 | >20%                    |                 2 |              0.25205 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5047 | 5-10%                   |                 2 |              0.25235 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5092 | 15-20%                  |                 2 |              0.2546  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5109 | >20%                    |                 5 |              0.10218 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5148 | <5%                     |                 5 |              0.10296 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5197 | >20%                    |                 2 |              0.25985 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.525  | >20%                    |                 5 |              0.105   |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5376 | >20%                    |                 5 |              0.10752 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5495 | >20%                    |                 2 |              0.27475 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5535 | >20%                    |                10 |              0.05535 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.564  | 10-15%                  |                 5 |              0.1128  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5675 | 10-15%                  |                10 |              0.05675 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5682 | >20%                    |                 2 |              0.2841  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5736 | >20%                    |                10 |              0.05736 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5775 | >20%                    |                10 |              0.05775 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5866 | >20%                    |                 2 |              0.2933  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5873 | >20%                    |                 5 |              0.11746 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5896 | >20%                    |                 5 |              0.11792 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5987 | <5%                     |                 2 |              0.29935 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6076 | 5-10%                   |                 2 |              0.3038  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6104 | >20%                    |                 5 |              0.12208 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6201 | >20%                    |                 2 |              0.31005 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6236 | 10-15%                  |                10 |              0.06236 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6236 | >20%                    |                 5 |              0.12472 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6257 | >20%                    |                 5 |              0.12514 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6259 | <5%                     |                10 |              0.06259 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.632  | 10-15%                  |                 5 |              0.1264  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6366 | >20%                    |                 5 |              0.12732 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6398 | >20%                    |                 5 |              0.12796 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6434 | >20%                    |                 2 |              0.3217  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6438 | >20%                    |                 5 |              0.12876 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6476 | >20%                    |                 2 |              0.3238  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6481 | 15-20%                  |                10 |              0.06481 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6591 | <5%                     |                 5 |              0.13182 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6594 | >20%                    |                10 |              0.06594 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6616 | >20%                    |                 2 |              0.3308  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6646 | 10-15%                  |                 2 |              0.3323  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6674 | 15-20%                  |                10 |              0.06674 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6903 | 15-20%                  |                10 |              0.06903 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7002 | 15-20%                  |                 5 |              0.14004 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7003 | >20%                    |                 5 |              0.14006 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7013 | 10-15%                  |                 5 |              0.14026 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.707  | >20%                    |                10 |              0.0707  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7084 | 15-20%                  |                10 |              0.07084 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7102 | 15-20%                  |                10 |              0.07102 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.713  | <5%                     |                 5 |              0.1426  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7262 | >20%                    |                10 |              0.07262 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7283 | <5%                     |                10 |              0.07283 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7294 | <5%                     |                 5 |              0.14588 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7324 | >20%                    |                10 |              0.07324 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7375 | <5%                     |                10 |              0.07375 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7703 | >20%                    |                10 |              0.07703 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7795 | >20%                    |                10 |              0.07795 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7813 | >20%                    |                10 |              0.07813 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7855 | >20%                    |                 5 |              0.1571  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7935 | >20%                    |                10 |              0.07935 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7948 | 15-20%                  |                10 |              0.07948 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7967 | >20%                    |                 5 |              0.15934 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8178 | 5-10%                   |                 5 |              0.16356 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8289 | >20%                    |                10 |              0.08289 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8375 | >20%                    |                10 |              0.08375 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8399 | >20%                    |                10 |              0.08399 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8702 | >20%                    |                 2 |              0.4351  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8831 | >20%                    |                10 |              0.08831 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8895 | 10-15%                  |                10 |              0.08895 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9014 | <5%                     |                10 |              0.09014 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9232 | >20%                    |                10 |              0.09232 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9298 | >20%                    |                 5 |              0.18596 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9342 | >20%                    |                10 |              0.09342 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9373 | >20%                    |                10 |              0.09373 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9396 | >20%                    |                10 |              0.09396 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9416 | >20%                    |                10 |              0.09416 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9905 | >20%                    |                10 |              0.09905 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9945 | >20%                    |                 5 |              0.1989  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0075 | >20%                    |                10 |              0.10075 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0162 | >20%                    |                 2 |              0.5081  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0312 | >20%                    |                10 |              0.10312 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0354 | <5%                     |                 2 |              0.5177  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0561 | >20%                    |                 5 |              0.21122 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0574 | >20%                    |                 2 |              0.5287  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0646 | 10-15%                  |                10 |              0.10646 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0689 | <5%                     |                 5 |              0.21378 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0768 | <5%                     |                 2 |              0.5384  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1015 | 15-20%                  |                10 |              0.11015 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.104  | >20%                    |                10 |              0.1104  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1316 | >20%                    |                10 |              0.11316 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1427 | 15-20%                  |                 5 |              0.22854 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1622 | 15-20%                  |                10 |              0.11622 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2121 | 15-20%                  |                10 |              0.12121 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2411 | 10-15%                  |                10 |              0.12411 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2957 | >20%                    |                10 |              0.12957 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3024 | >20%                    |                10 |              0.13024 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.322  | >20%                    |                 2 |              0.661   |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4072 | >20%                    |                10 |              0.14072 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4082 | <5%                     |                10 |              0.14082 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4206 | <5%                     |                 5 |              0.28412 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4712 | >20%                    |                 5 |              0.29424 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5542 | 10-15%                  |                10 |              0.15542 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.6241 | >20%                    |                10 |              0.16241 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0727 | <5%                     |                10 |              0.20727 |