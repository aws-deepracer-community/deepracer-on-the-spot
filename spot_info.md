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

Data correct as of 2025-03-16 01:48:52.163867, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1172 | 10-15%                  |                 2 |              0.0586  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1354 | 5-10%                   |                 5 |              0.02708 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1768 | >20%                    |                 2 |              0.0884  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1792 | >20%                    |                 5 |              0.03584 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1972 | 15-20%                  |                 2 |              0.0986  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.214  | 5-10%                   |                 2 |              0.107   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2148 | 10-15%                  |                 2 |              0.1074  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2236 | 5-10%                   |                 5 |              0.04472 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2243 | 5-10%                   |                 2 |              0.11215 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2325 | >20%                    |                 2 |              0.11625 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2336 | 5-10%                   |                10 |              0.02336 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2357 | 15-20%                  |                 5 |              0.04714 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2383 | 15-20%                  |                 2 |              0.11915 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2436 | >20%                    |                 2 |              0.1218  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2441 | >20%                    |                 2 |              0.12205 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2469 | 5-10%                   |                 2 |              0.12345 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2612 | 5-10%                   |                 2 |              0.1306  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2679 | <5%                     |                 2 |              0.13395 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2705 | >20%                    |                 2 |              0.13525 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2781 | 5-10%                   |                10 |              0.02781 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2828 | >20%                    |                 5 |              0.05656 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2924 | >20%                    |                 5 |              0.05848 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2947 | <5%                     |                 2 |              0.14735 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2957 | 10-15%                  |                 2 |              0.14785 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2992 | 10-15%                  |                 5 |              0.05984 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2997 | 5-10%                   |                 2 |              0.14985 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3003 | <5%                     |                 2 |              0.15015 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3011 | 5-10%                   |                 2 |              0.15055 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3017 | 10-15%                  |                10 |              0.03017 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3021 | >20%                    |                 2 |              0.15105 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3037 | >20%                    |                 2 |              0.15185 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3121 | 10-15%                  |                 2 |              0.15605 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.32   | 10-15%                  |                 5 |              0.064   |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.3232 |                         |                 2 |              0.1616  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3332 | >20%                    |                 5 |              0.06664 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3335 | >20%                    |                 2 |              0.16675 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | 5-10%                   |                10 |              0.03351 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3491 | >20%                    |                 2 |              0.17455 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3533 | >20%                    |                 2 |              0.17665 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3584 | 10-15%                  |                 5 |              0.07168 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3614 | >20%                    |                10 |              0.03614 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3648 | >20%                    |                 2 |              0.1824  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3655 | >20%                    |                 2 |              0.18275 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3686 | >20%                    |                 5 |              0.07372 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.3694 |                         |                 5 |              0.07388 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3719 | >20%                    |                 5 |              0.07438 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3744 | >20%                    |                 2 |              0.1872  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3781 | 5-10%                   |                 5 |              0.07562 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3838 | 15-20%                  |                10 |              0.03838 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3899 | <5%                     |                 2 |              0.19495 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3908 | >20%                    |                 2 |              0.1954  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3928 | 5-10%                   |                10 |              0.03928 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3948 | 5-10%                   |                 5 |              0.07896 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3958 | 5-10%                   |                 2 |              0.1979  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3994 | >20%                    |                 5 |              0.07988 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4042 | 5-10%                   |                 2 |              0.2021  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4075 | >20%                    |                 2 |              0.20375 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4128 | <5%                     |                 5 |              0.08256 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4129 | 5-10%                   |                 2 |              0.20645 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4139 | 5-10%                   |                 2 |              0.20695 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4139 | <5%                     |                 2 |              0.20695 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4206 | 15-20%                  |                 2 |              0.2103  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4228 | 10-15%                  |                10 |              0.04228 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4266 | <5%                     |                 5 |              0.08532 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4277 | >20%                    |                 5 |              0.08554 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4281 | <5%                     |                 2 |              0.21405 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4359 | >20%                    |                 2 |              0.21795 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4374 | >20%                    |                 2 |              0.2187  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4378 | <5%                     |                10 |              0.04378 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.4387 | 5-10%                   |                 5 |              0.08774 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4449 | 10-15%                  |                10 |              0.04449 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4547 | 5-10%                   |                10 |              0.04547 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4557 | 5-10%                   |                 5 |              0.09114 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4569 | 5-10%                   |                 2 |              0.22845 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4595 | >20%                    |                 5 |              0.0919  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4663 | >20%                    |                10 |              0.04663 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4694 | 5-10%                   |                 5 |              0.09388 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4701 | <5%                     |                 5 |              0.09402 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4733 | >20%                    |                 5 |              0.09466 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4744 | 10-15%                  |                 5 |              0.09488 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.477  | 10-15%                  |                 2 |              0.2385  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4775 | <5%                     |                 5 |              0.0955  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4815 | 5-10%                   |                 5 |              0.0963  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.492  | <5%                     |                 2 |              0.246   |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4925 | >20%                    |                 5 |              0.0985  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4932 | >20%                    |                 5 |              0.09864 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4954 | >20%                    |                 2 |              0.2477  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5028 | >20%                    |                 2 |              0.2514  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5103 | >20%                    |                 5 |              0.10206 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5132 | 15-20%                  |                 2 |              0.2566  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5173 | >20%                    |                 2 |              0.25865 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5198 | 5-10%                   |                 5 |              0.10396 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5207 | >20%                    |                 5 |              0.10414 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5364 | >20%                    |                 2 |              0.2682  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5406 | 15-20%                  |                 2 |              0.2703  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.544  | <5%                     |                10 |              0.0544  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5449 | >20%                    |                 5 |              0.10898 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5506 | <5%                     |                 5 |              0.11012 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5578 | >20%                    |                 5 |              0.11156 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5581 | 15-20%                  |                 5 |              0.11162 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5657 | 5-10%                   |                 5 |              0.11314 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5703 | 5-10%                   |                 5 |              0.11406 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.573  | 10-15%                  |                 5 |              0.1146  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.577  | <5%                     |                 5 |              0.1154  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.579  | 15-20%                  |                 5 |              0.1158  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.58   | >20%                    |                 2 |              0.29    |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5887 | >20%                    |                 2 |              0.29435 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5925 | >20%                    |                 2 |              0.29625 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.5962 | >20%                    |                 2 |              0.2981  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.609  | 10-15%                  |                 5 |              0.1218  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6361 | >20%                    |                10 |              0.06361 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6513 | >20%                    |                10 |              0.06513 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6541 | >20%                    |                 5 |              0.13082 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6551 | >20%                    |                 5 |              0.13102 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6613 | >20%                    |                 5 |              0.13226 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6665 | 10-15%                  |                 5 |              0.1333  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6708 |                         |                10 |              0.06708 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6836 | >20%                    |                 5 |              0.13672 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7    | >20%                    |                10 |              0.07    |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7061 | >20%                    |                 5 |              0.14122 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7089 | >20%                    |                10 |              0.07089 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7101 | >20%                    |                10 |              0.07101 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7186 | >20%                    |                 2 |              0.3593  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7235 | 5-10%                   |                 2 |              0.36175 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.7296 | 5-10%                   |                10 |              0.07296 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.73   | >20%                    |                10 |              0.073   |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7304 | 5-10%                   |                 5 |              0.14608 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7336 | <5%                     |                10 |              0.07336 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7372 | >20%                    |                10 |              0.07372 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7425 | <5%                     |                 5 |              0.1485  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7466 | 5-10%                   |                10 |              0.07466 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.747  | >20%                    |                 5 |              0.1494  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7615 | >20%                    |                 5 |              0.1523  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7622 | <5%                     |                10 |              0.07622 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7757 | 5-10%                   |                10 |              0.07757 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7967 | <5%                     |                10 |              0.07967 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.8003 | >20%                    |                 2 |              0.40015 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8048 | >20%                    |                10 |              0.08048 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.824  | 15-20%                  |                 5 |              0.1648  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8299 | <5%                     |                10 |              0.08299 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8299 | >20%                    |                10 |              0.08299 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.8445 | >20%                    |                 5 |              0.1689  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8457 | >20%                    |                10 |              0.08457 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8521 | >20%                    |                10 |              0.08521 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8578 | 5-10%                   |                10 |              0.08578 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8607 | <5%                     |                10 |              0.08607 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8617 | 15-20%                  |                10 |              0.08617 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8696 | 5-10%                   |                10 |              0.08696 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8869 | >20%                    |                10 |              0.08869 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8918 | >20%                    |                10 |              0.08918 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8982 | 15-20%                  |                 5 |              0.17964 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9008 | 15-20%                  |                10 |              0.09008 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9061 | <5%                     |                10 |              0.09061 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9078 | >20%                    |                10 |              0.09078 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9434 | >20%                    |                 2 |              0.4717  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9995 | 5-10%                   |                10 |              0.09995 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.007  | 10-15%                  |                10 |              0.1007  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0098 | >20%                    |                10 |              0.10098 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.017  | >20%                    |                 2 |              0.5085  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0607 | >20%                    |                 5 |              0.21214 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0619 | 5-10%                   |                10 |              0.10619 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0909 | >20%                    |                10 |              0.10909 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1178 | 5-10%                   |                10 |              0.11178 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1242 | <5%                     |                10 |              0.11242 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.145  | >20%                    |                10 |              0.1145  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1508 | >20%                    |                10 |              0.11508 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1719 | 15-20%                  |                10 |              0.11719 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1751 | 15-20%                  |                10 |              0.11751 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2571 | >20%                    |                10 |              0.12571 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3051 | 5-10%                   |                 5 |              0.26102 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3083 | 5-10%                   |                 2 |              0.65415 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3451 | >20%                    |                10 |              0.13451 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4202 | >20%                    |                 5 |              0.28404 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4393 | >20%                    |                 5 |              0.28786 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.5019 | 10-15%                  |                 5 |              0.30038 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5063 | >20%                    |                10 |              0.15063 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5115 | >20%                    |                10 |              0.15115 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5602 | >20%                    |                 2 |              0.7801  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7491 | >20%                    |                10 |              0.17491 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1778 | 5-10%                   |                10 |              0.21778 |