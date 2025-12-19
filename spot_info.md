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

Data correct as of 2025-12-19 01:59:14.015578, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1095 | >20%                    |                 2 |              0.05475 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1434 | >20%                    |                 2 |              0.0717  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.161  | 15-20%                  |                 2 |              0.0805  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.167  | <5%                     |                 2 |              0.0835  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1685 | >20%                    |                 5 |              0.0337  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.174  | >20%                    |                 2 |              0.087   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1905 | >20%                    |                 2 |              0.09525 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2058 | >20%                    |                 5 |              0.04116 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2187 | 10-15%                  |                 2 |              0.10935 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.225  | >20%                    |                 2 |              0.1125  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2415 | 5-10%                   |                10 |              0.02415 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2428 | >20%                    |                 2 |              0.1214  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2477 | >20%                    |                 2 |              0.12385 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2516 | >20%                    |                 2 |              0.1258  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2521 | <5%                     |                 5 |              0.05042 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2524 | 5-10%                   |                 5 |              0.05048 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2816 | 15-20%                  |                 2 |              0.1408  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2819 | 5-10%                   |                 2 |              0.14095 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2826 | >20%                    |                 2 |              0.1413  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2842 | >20%                    |                 2 |              0.1421  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2852 | 10-15%                  |                 2 |              0.1426  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2956 | >20%                    |                 2 |              0.1478  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2982 | >20%                    |                 2 |              0.1491  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2989 | 10-15%                  |                 5 |              0.05978 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3022 | >20%                    |                10 |              0.03022 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3036 | >20%                    |                 2 |              0.1518  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.315  | 10-15%                  |                 2 |              0.1575  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3283 | >20%                    |                 5 |              0.06566 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3306 | 10-15%                  |                10 |              0.03306 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3351 | >20%                    |                 5 |              0.06702 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3394 | >20%                    |                10 |              0.03394 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3464 | >20%                    |                 2 |              0.1732  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3472 | >20%                    |                 5 |              0.06944 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.353  | >20%                    |                 2 |              0.1765  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.355  | >20%                    |                10 |              0.0355  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.36   | 15-20%                  |                 2 |              0.18    |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3605 | 5-10%                   |                10 |              0.03605 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3615 | >20%                    |                 2 |              0.18075 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3757 | >20%                    |                 5 |              0.07514 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3764 | >20%                    |                 2 |              0.1882  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.38   | <5%                     |                 2 |              0.19    |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3809 | >20%                    |                10 |              0.03809 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3867 | 5-10%                   |                 2 |              0.19335 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3889 | <5%                     |                10 |              0.03889 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3923 | >20%                    |                 5 |              0.07846 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3933 | 15-20%                  |                 5 |              0.07866 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3933 | >20%                    |                 5 |              0.07866 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3956 | >20%                    |                 5 |              0.07912 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3962 | <5%                     |                 5 |              0.07924 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3985 | 10-15%                  |                 2 |              0.19925 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3998 | >20%                    |                 2 |              0.1999  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4009 | >20%                    |                 2 |              0.20045 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4011 | >20%                    |                 5 |              0.08022 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4017 | 15-20%                  |                 5 |              0.08034 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4125 | 10-15%                  |                10 |              0.04125 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4132 | >20%                    |                 5 |              0.08264 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4185 | 10-15%                  |                 2 |              0.20925 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.425  | <5%                     |                 2 |              0.2125  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4251 | >20%                    |                 2 |              0.21255 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4309 | >20%                    |                 2 |              0.21545 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4375 | <5%                     |                 5 |              0.0875  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4384 | <5%                     |                 2 |              0.2192  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4408 | >20%                    |                 5 |              0.08816 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4434 | >20%                    |                 5 |              0.08868 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4475 | >20%                    |                 5 |              0.0895  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4529 | 15-20%                  |                 2 |              0.22645 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4548 | >20%                    |                10 |              0.04548 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4584 | >20%                    |                 2 |              0.2292  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4667 | 15-20%                  |                 5 |              0.09334 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4692 | >20%                    |                 2 |              0.2346  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4722 | 15-20%                  |                 5 |              0.09444 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4723 | 15-20%                  |                 2 |              0.23615 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4731 | <5%                     |                10 |              0.04731 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4731 | 15-20%                  |                 5 |              0.09462 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4766 | >20%                    |                 2 |              0.2383  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4946 | >20%                    |                 2 |              0.2473  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.495  | >20%                    |                 5 |              0.099   |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.497  | 5-10%                   |                 5 |              0.0994  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4975 | 15-20%                  |                10 |              0.04975 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.498  | >20%                    |                 2 |              0.249   |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5117 | 15-20%                  |                 5 |              0.10234 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5167 | >20%                    |                 5 |              0.10334 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5168 | 15-20%                  |                 2 |              0.2584  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.517  | >20%                    |                 5 |              0.1034  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5227 | >20%                    |                 2 |              0.26135 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5267 | <5%                     |                 5 |              0.10534 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5273 | >20%                    |                 5 |              0.10546 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5363 | >20%                    |                10 |              0.05363 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5416 | >20%                    |                 5 |              0.10832 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5529 | >20%                    |                 5 |              0.11058 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5546 | >20%                    |                 5 |              0.11092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5548 | >20%                    |                 2 |              0.2774  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5603 | >20%                    |                 5 |              0.11206 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5647 | >20%                    |                 2 |              0.28235 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.566  | >20%                    |                 5 |              0.1132  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5729 | 10-15%                  |                 5 |              0.11458 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5879 | >20%                    |                 2 |              0.29395 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5979 | 5-10%                   |                 5 |              0.11958 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5988 | >20%                    |                 5 |              0.11976 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6086 | >20%                    |                10 |              0.06086 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6122 | <5%                     |                10 |              0.06122 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6127 | >20%                    |                 2 |              0.30635 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6144 | >20%                    |                 5 |              0.12288 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6186 | 5-10%                   |                 5 |              0.12372 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6287 | 5-10%                   |                 5 |              0.12574 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6313 | >20%                    |                 2 |              0.31565 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6349 | 15-20%                  |                 5 |              0.12698 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.639  | >20%                    |                 2 |              0.3195  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6538 | 10-15%                  |                 5 |              0.13076 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6703 | >20%                    |                10 |              0.06703 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6736 | >20%                    |                 5 |              0.13472 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6743 | >20%                    |                 5 |              0.13486 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6746 | >20%                    |                 5 |              0.13492 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6793 | >20%                    |                 2 |              0.33965 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6927 | >20%                    |                10 |              0.06927 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6958 | 10-15%                  |                 5 |              0.13916 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6975 | <5%                     |                 5 |              0.1395  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7142 | 5-10%                   |                10 |              0.07142 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7156 | >20%                    |                10 |              0.07156 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.717  | >20%                    |                10 |              0.0717  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.727  | >20%                    |                10 |              0.0727  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7278 | >20%                    |                10 |              0.07278 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7279 | 10-15%                  |                10 |              0.07279 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7281 | >20%                    |                10 |              0.07281 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7401 | >20%                    |                10 |              0.07401 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7538 | 15-20%                  |                10 |              0.07538 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7552 | >20%                    |                 2 |              0.3776  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7555 | >20%                    |                 2 |              0.37775 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7616 | >20%                    |                10 |              0.07616 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7813 | 10-15%                  |                10 |              0.07813 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7853 | >20%                    |                 2 |              0.39265 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7965 | 10-15%                  |                10 |              0.07965 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7969 | >20%                    |                 5 |              0.15938 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.798  | >20%                    |                10 |              0.0798  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.802  | >20%                    |                 5 |              0.1604  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8045 | >20%                    |                 5 |              0.1609  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8107 | 10-15%                  |                 5 |              0.16214 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8122 | 15-20%                  |                10 |              0.08122 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8178 | >20%                    |                10 |              0.08178 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8208 | >20%                    |                10 |              0.08208 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8298 | 15-20%                  |                10 |              0.08298 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8306 | <5%                     |                10 |              0.08306 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8378 | >20%                    |                10 |              0.08378 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8456 | 5-10%                   |                10 |              0.08456 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8686 | >20%                    |                10 |              0.08686 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8696 | >20%                    |                 2 |              0.4348  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8778 | >20%                    |                 2 |              0.4389  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.88   | >20%                    |                10 |              0.088   |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8964 | >20%                    |                 5 |              0.17928 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8988 | 15-20%                  |                 2 |              0.4494  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9031 | >20%                    |                 5 |              0.18062 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9046 | 10-15%                  |                10 |              0.09046 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.9171 | >20%                    |                 5 |              0.18342 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9182 | >20%                    |                10 |              0.09182 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9184 | >20%                    |                 5 |              0.18368 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9376 | >20%                    |                10 |              0.09376 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9557 | >20%                    |                 5 |              0.19114 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9905 | 15-20%                  |                10 |              0.09905 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0232 | 5-10%                   |                 5 |              0.20464 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0333 | >20%                    |                10 |              0.10333 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0397 | 10-15%                  |                10 |              0.10397 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      1.0418 | >20%                    |                 2 |              0.5209  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0494 | >20%                    |                10 |              0.10494 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0495 | 10-15%                  |                10 |              0.10495 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0497 | 10-15%                  |                10 |              0.10497 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0878 | >20%                    |                 2 |              0.5439  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1309 | >20%                    |                 2 |              0.56545 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.2153 | >20%                    |                10 |              0.12153 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.2183 | 5-10%                   |                10 |              0.12183 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2391 | >20%                    |                10 |              0.12391 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2565 | >20%                    |                10 |              0.12565 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2973 | >20%                    |                10 |              0.12973 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3366 | >20%                    |                 2 |              0.6683  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4222 | >20%                    |                 2 |              0.7111  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4315 | >20%                    |                10 |              0.14315 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4479 | >20%                    |                 5 |              0.28958 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4491 | >20%                    |                 5 |              0.28982 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4834 | 10-15%                  |                 5 |              0.29668 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5874 | 15-20%                  |                10 |              0.15874 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6747 | 15-20%                  |                10 |              0.16747 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0731 | 10-15%                  |                10 |              0.20731 |