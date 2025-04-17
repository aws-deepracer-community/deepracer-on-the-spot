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

Data correct as of 2025-04-17 01:47:32.452935, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1132 | 10-15%                  |                 2 |              0.0566  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1155 | 15-20%                  |                 2 |              0.05775 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1277 | 5-10%                   |                 5 |              0.02554 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1534 | >20%                    |                 2 |              0.0767  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.161  | 10-15%                  |                 5 |              0.0322  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1643 | >20%                    |                 2 |              0.08215 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1879 | 15-20%                  |                 5 |              0.03758 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1926 | <5%                     |                 2 |              0.0963  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2096 | 5-10%                   |                 5 |              0.04192 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2311 | 15-20%                  |                 2 |              0.11555 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2388 | >20%                    |                 2 |              0.1194  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2455 | 15-20%                  |                10 |              0.02455 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2631 | 10-15%                  |                 5 |              0.05262 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2655 | 5-10%                   |                 5 |              0.0531  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2731 | 10-15%                  |                10 |              0.02731 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.277  | 10-15%                  |                 2 |              0.1385  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2788 | 10-15%                  |                 2 |              0.1394  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.279  | 5-10%                   |                 2 |              0.1395  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2828 | 15-20%                  |                 2 |              0.1414  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2838 | <5%                     |                 2 |              0.1419  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2848 | <5%                     |                 2 |              0.1424  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2881 | 15-20%                  |                 2 |              0.14405 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2889 | 5-10%                   |                 2 |              0.14445 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2957 | <5%                     |                 2 |              0.14785 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2961 | >20%                    |                 2 |              0.14805 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.2998 | <5%                     |                10 |              0.02998 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3004 | 10-15%                  |                 2 |              0.1502  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.304  | >20%                    |                 2 |              0.152   |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3047 | 10-15%                  |                10 |              0.03047 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3098 | 10-15%                  |                 5 |              0.06196 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3266 | 10-15%                  |                 2 |              0.1633  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3352 | 10-15%                  |                10 |              0.03352 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3405 | >20%                    |                 5 |              0.0681  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3433 | >20%                    |                 2 |              0.17165 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.349  | >20%                    |                 5 |              0.0698  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.357  | >20%                    |                 2 |              0.1785  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3597 | >20%                    |                 2 |              0.17985 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3624 | 15-20%                  |                 2 |              0.1812  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3656 | <5%                     |                10 |              0.03656 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3663 | >20%                    |                 2 |              0.18315 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3752 | >20%                    |                10 |              0.03752 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3807 | <5%                     |                 2 |              0.19035 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3829 | 10-15%                  |                 5 |              0.07658 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3841 | <5%                     |                 2 |              0.19205 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3848 | >20%                    |                 2 |              0.1924  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3865 | >20%                    |                 2 |              0.19325 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3867 | <5%                     |                 2 |              0.19335 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3911 | >20%                    |                 2 |              0.19555 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.392  | >20%                    |                 5 |              0.0784  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4036 | 15-20%                  |                10 |              0.04036 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4077 | >20%                    |                10 |              0.04077 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4125 | 10-15%                  |                 5 |              0.0825  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4139 | 15-20%                  |                 2 |              0.20695 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.416  | 10-15%                  |                 2 |              0.208   |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4166 | 15-20%                  |                 2 |              0.2083  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4233 | >20%                    |                 5 |              0.08466 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4274 | >20%                    |                 5 |              0.08548 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4307 | >20%                    |                 5 |              0.08614 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4333 | >20%                    |                10 |              0.04333 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4351 | 10-15%                  |                10 |              0.04351 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4388 | >20%                    |                 2 |              0.2194  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4392 | >20%                    |                 5 |              0.08784 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4418 | 10-15%                  |                 5 |              0.08836 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4433 | >20%                    |                 5 |              0.08866 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4446 | >20%                    |                 2 |              0.2223  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4449 | <5%                     |                 2 |              0.22245 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.445  | 5-10%                   |                 5 |              0.089   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4558 | <5%                     |                 2 |              0.2279  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4635 | >20%                    |                 2 |              0.23175 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4644 | >20%                    |                 5 |              0.09288 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4681 | <5%                     |                 5 |              0.09362 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4699 | >20%                    |                 2 |              0.23495 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4723 | >20%                    |                 5 |              0.09446 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4767 | 5-10%                   |                 5 |              0.09534 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4782 | >20%                    |                 5 |              0.09564 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4806 | 5-10%                   |                10 |              0.04806 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4826 | >20%                    |                 5 |              0.09652 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4845 | 5-10%                   |                 2 |              0.24225 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4942 | <5%                     |                 5 |              0.09884 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5016 | >20%                    |                 5 |              0.10032 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5044 | >20%                    |                 2 |              0.2522  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5111 | >20%                    |                 2 |              0.25555 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5141 | 15-20%                  |                 5 |              0.10282 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5214 | 10-15%                  |                 5 |              0.10428 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5246 | 5-10%                   |                 5 |              0.10492 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5256 | 15-20%                  |                 2 |              0.2628  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5304 | 5-10%                   |                 5 |              0.10608 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5359 | 15-20%                  |                 2 |              0.26795 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5563 | >20%                    |                 2 |              0.27815 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5613 | 5-10%                   |                 5 |              0.11226 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5673 | 5-10%                   |                 2 |              0.28365 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5673 | >20%                    |                 5 |              0.11346 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5675 | 10-15%                  |                10 |              0.05675 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5749 | 15-20%                  |                 5 |              0.11498 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5809 | >20%                    |                 5 |              0.11618 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5835 | >20%                    |                 5 |              0.1167  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5836 | >20%                    |                 2 |              0.2918  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5875 | >20%                    |                 2 |              0.29375 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.594  | >20%                    |                 2 |              0.297   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5963 | >20%                    |                 2 |              0.29815 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5986 | 15-20%                  |                 5 |              0.11972 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6065 | <5%                     |                 5 |              0.1213  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6093 | >20%                    |                10 |              0.06093 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6175 | 10-15%                  |                 5 |              0.1235  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6433 | >20%                    |                 5 |              0.12866 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6457 | >20%                    |                 5 |              0.12914 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6506 | 10-15%                  |                 5 |              0.13012 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6576 | <5%                     |                 5 |              0.13152 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6606 | >20%                    |                10 |              0.06606 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6643 | 10-15%                  |                 2 |              0.33215 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6652 | >20%                    |                 5 |              0.13304 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6726 | <5%                     |                 5 |              0.13452 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6736 | 5-10%                   |                10 |              0.06736 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6771 | >20%                    |                 2 |              0.33855 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6787 | >20%                    |                10 |              0.06787 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6901 | >20%                    |                10 |              0.06901 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6934 | >20%                    |                 5 |              0.13868 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6937 | >20%                    |                 5 |              0.13874 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6955 | >20%                    |                 2 |              0.34775 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7018 | >20%                    |                10 |              0.07018 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7064 | 5-10%                   |                 5 |              0.14128 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7087 | >20%                    |                 5 |              0.14174 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7118 | <5%                     |                10 |              0.07118 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.732  | <5%                     |                10 |              0.0732  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7333 | >20%                    |                 2 |              0.36665 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.7398 | 10-15%                  |                 5 |              0.14796 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7435 | <5%                     |                 5 |              0.1487  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7503 | >20%                    |                10 |              0.07503 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.759  | <5%                     |                10 |              0.0759  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7642 | <5%                     |                10 |              0.07642 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7709 | >20%                    |                 5 |              0.15418 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7713 | 5-10%                   |                10 |              0.07713 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7748 | >20%                    |                10 |              0.07748 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7773 | 15-20%                  |                 5 |              0.15546 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7782 | <5%                     |                10 |              0.07782 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.782  | 10-15%                  |                10 |              0.0782  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8001 | >20%                    |                10 |              0.08001 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8005 | <5%                     |                10 |              0.08005 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8036 | 15-20%                  |                 5 |              0.16072 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8045 | 10-15%                  |                10 |              0.08045 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8188 | 15-20%                  |                10 |              0.08188 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8343 | 10-15%                  |                10 |              0.08343 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8387 | >20%                    |                 2 |              0.41935 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8449 | >20%                    |                 2 |              0.42245 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8471 | 15-20%                  |                10 |              0.08471 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.851  | 15-20%                  |                10 |              0.0851  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8607 | >20%                    |                10 |              0.08607 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8688 | <5%                     |                10 |              0.08688 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8784 | 10-15%                  |                10 |              0.08784 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8852 | >20%                    |                10 |              0.08852 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8889 | <5%                     |                10 |              0.08889 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8956 | 15-20%                  |                 5 |              0.17912 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9031 | >20%                    |                10 |              0.09031 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9095 | >20%                    |                10 |              0.09095 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9217 | >20%                    |                10 |              0.09217 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9371 | <5%                     |                10 |              0.09371 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.967  | >20%                    |                 5 |              0.1934  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9705 | 5-10%                   |                10 |              0.09705 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9858 | 10-15%                  |                10 |              0.09858 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0277 | <5%                     |                 2 |              0.51385 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0311 | >20%                    |                10 |              0.10311 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0322 | >20%                    |                 5 |              0.20644 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0672 | >20%                    |                 5 |              0.21344 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1043 | <5%                     |                10 |              0.11043 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1125 | <5%                     |                10 |              0.11125 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1192 | 10-15%                  |                 2 |              0.5596  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1669 | 15-20%                  |                10 |              0.11669 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2211 | >20%                    |                 5 |              0.24422 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2271 | 15-20%                  |                10 |              0.12271 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2328 | <5%                     |                 5 |              0.24656 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2403 | >20%                    |                10 |              0.12403 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.292  | >20%                    |                 5 |              0.2584  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2954 | >20%                    |                10 |              0.12954 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3024 | 5-10%                   |                 2 |              0.6512  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3541 | 15-20%                  |                10 |              0.13541 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4291 | >20%                    |                 2 |              0.71455 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6455 | >20%                    |                10 |              0.16455 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.68   | >20%                    |                10 |              0.168   |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8441 | <5%                     |                10 |              0.18441 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.923  | 15-20%                  |                10 |              0.1923  |