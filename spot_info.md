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

Data correct as of 2025-12-18 01:56:14.507325, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1118 | >20%                    |                 2 |              0.0559  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1494 | >20%                    |                 2 |              0.0747  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1564 | 15-20%                  |                 2 |              0.0782  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1602 | <5%                     |                 2 |              0.0801  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1751 | >20%                    |                 2 |              0.08755 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1772 | >20%                    |                 5 |              0.03544 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1856 | >20%                    |                 2 |              0.0928  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.208  | >20%                    |                 5 |              0.0416  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2156 | >20%                    |                 2 |              0.1078  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2251 | 10-15%                  |                 2 |              0.11255 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2411 | 5-10%                   |                 5 |              0.04822 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2422 | >20%                    |                 2 |              0.1211  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2477 | >20%                    |                 2 |              0.12385 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2519 | >20%                    |                 2 |              0.12595 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2524 | 5-10%                   |                10 |              0.02524 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2613 | <5%                     |                 5 |              0.05226 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2801 | 15-20%                  |                 2 |              0.14005 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2831 | >20%                    |                10 |              0.02831 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2873 | >20%                    |                 2 |              0.14365 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2875 | 10-15%                  |                 2 |              0.14375 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2886 | >20%                    |                 2 |              0.1443  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2905 | 10-15%                  |                 5 |              0.0581  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2907 | 5-10%                   |                 2 |              0.14535 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2972 | >20%                    |                 2 |              0.1486  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2992 | >20%                    |                 2 |              0.1496  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3011 | >20%                    |                 2 |              0.15055 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.315  | 10-15%                  |                 2 |              0.1575  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3321 | >20%                    |                 5 |              0.06642 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3329 | 10-15%                  |                10 |              0.03329 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3339 | >20%                    |                 5 |              0.06678 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3368 | >20%                    |                 2 |              0.1684  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3521 | >20%                    |                 5 |              0.07042 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3548 | >20%                    |                 2 |              0.1774  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.358  | 15-20%                  |                 2 |              0.179   |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3594 | 5-10%                   |                10 |              0.03594 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3606 | >20%                    |                10 |              0.03606 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3623 | >20%                    |                 2 |              0.18115 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.363  | >20%                    |                 2 |              0.1815  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3642 | >20%                    |                10 |              0.03642 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3788 | <5%                     |                 2 |              0.1894  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3827 | >20%                    |                 5 |              0.07654 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3846 | >20%                    |                10 |              0.03846 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.385  | 5-10%                   |                 2 |              0.1925  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3882 | 10-15%                  |                10 |              0.03882 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3895 | <5%                     |                10 |              0.03895 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3947 | 15-20%                  |                 5 |              0.07894 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3974 | >20%                    |                 5 |              0.07948 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3977 | >20%                    |                 5 |              0.07954 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3985 | >20%                    |                 5 |              0.0797  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3995 | >20%                    |                 2 |              0.19975 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4001 | >20%                    |                 5 |              0.08002 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4004 | >20%                    |                 2 |              0.2002  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4047 | 15-20%                  |                 5 |              0.08094 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4079 | 10-15%                  |                 2 |              0.20395 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.418  | <5%                     |                 5 |              0.0836  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4192 | <5%                     |                 5 |              0.08384 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4202 | 10-15%                  |                 2 |              0.2101  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4207 | >20%                    |                 5 |              0.08414 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4214 | >20%                    |                 2 |              0.2107  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4249 | <5%                     |                 2 |              0.21245 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4255 | >20%                    |                 2 |              0.21275 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4445 | >20%                    |                10 |              0.04445 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4458 | <5%                     |                 2 |              0.2229  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4475 | >20%                    |                 5 |              0.0895  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4503 | >20%                    |                 5 |              0.09006 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4523 | >20%                    |                 5 |              0.09046 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4571 | >20%                    |                 2 |              0.22855 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4589 | 15-20%                  |                 2 |              0.22945 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4661 | 15-20%                  |                 5 |              0.09322 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4689 | 15-20%                  |                 2 |              0.23445 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4691 | 15-20%                  |                 5 |              0.09382 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4703 | >20%                    |                 2 |              0.23515 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4723 | 15-20%                  |                 5 |              0.09446 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4729 | >20%                    |                 2 |              0.23645 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.474  | 15-20%                  |                10 |              0.0474  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4782 | <5%                     |                10 |              0.04782 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4865 | >20%                    |                 2 |              0.24325 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4948 | >20%                    |                 2 |              0.2474  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4961 | 5-10%                   |                 5 |              0.09922 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4961 | >20%                    |                 5 |              0.09922 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5132 | 15-20%                  |                 5 |              0.10264 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.514  | 15-20%                  |                 2 |              0.257   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5169 | >20%                    |                 5 |              0.10338 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5252 | >20%                    |                 5 |              0.10504 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5262 | >20%                    |                 5 |              0.10524 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.527  | >20%                    |                 2 |              0.2635  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5335 | <5%                     |                 5 |              0.1067  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5448 | >20%                    |                10 |              0.05448 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5528 | >20%                    |                 5 |              0.11056 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5578 | >20%                    |                 5 |              0.11156 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5603 | >20%                    |                 2 |              0.28015 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5639 | >20%                    |                 5 |              0.11278 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.565  | >20%                    |                 2 |              0.2825  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5676 | >20%                    |                 5 |              0.11352 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5705 | >20%                    |                 5 |              0.1141  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.575  | 10-15%                  |                 5 |              0.115   |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5789 | <5%                     |                10 |              0.05789 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5895 | >20%                    |                 2 |              0.29475 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5897 | >20%                    |                 2 |              0.29485 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5976 | 5-10%                   |                 5 |              0.11952 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6117 | >20%                    |                 5 |              0.12234 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6137 | >20%                    |                10 |              0.06137 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6181 | >20%                    |                 5 |              0.12362 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6204 | 5-10%                   |                 5 |              0.12408 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6256 | 5-10%                   |                 5 |              0.12512 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6327 | >20%                    |                 2 |              0.31635 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6357 | 15-20%                  |                 5 |              0.12714 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6426 | >20%                    |                 2 |              0.3213  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6536 | 10-15%                  |                 5 |              0.13072 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6683 | <5%                     |                 5 |              0.13366 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6701 | >20%                    |                10 |              0.06701 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6778 | >20%                    |                 5 |              0.13556 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6842 | >20%                    |                10 |              0.06842 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6845 | >20%                    |                 2 |              0.34225 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.686  | >20%                    |                 5 |              0.1372  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6862 | 10-15%                  |                 5 |              0.13724 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6866 | >20%                    |                 5 |              0.13732 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6941 | 10-15%                  |                10 |              0.06941 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7142 | 5-10%                   |                10 |              0.07142 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7161 | >20%                    |                10 |              0.07161 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7163 | >20%                    |                10 |              0.07163 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7201 | >20%                    |                10 |              0.07201 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7331 | >20%                    |                10 |              0.07331 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7387 | >20%                    |                10 |              0.07387 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7437 | 15-20%                  |                10 |              0.07437 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7468 | >20%                    |                10 |              0.07468 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7499 | >20%                    |                 2 |              0.37495 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7555 | >20%                    |                 2 |              0.37775 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7601 | >20%                    |                10 |              0.07601 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7722 | >20%                    |                10 |              0.07722 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.7772 | >20%                    |                10 |              0.07772 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.78   | 15-20%                  |                10 |              0.078   |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7834 | >20%                    |                 2 |              0.3917  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7834 | 10-15%                  |                10 |              0.07834 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7969 | >20%                    |                 5 |              0.15938 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7969 | 10-15%                  |                10 |              0.07969 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7977 | >20%                    |                10 |              0.07977 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8027 | >20%                    |                 5 |              0.16054 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.8056 | >20%                    |                 5 |              0.16112 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8141 | 15-20%                  |                10 |              0.08141 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8192 | 10-15%                  |                 5 |              0.16384 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8251 | <5%                     |                10 |              0.08251 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8394 | >20%                    |                 5 |              0.16788 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8451 | 5-10%                   |                10 |              0.08451 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8656 | >20%                    |                10 |              0.08656 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8696 | >20%                    |                 2 |              0.4348  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8753 | >20%                    |                10 |              0.08753 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8788 | >20%                    |                10 |              0.08788 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8854 | >20%                    |                 2 |              0.4427  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.903  | 10-15%                  |                10 |              0.0903  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.9062 | >20%                    |                 5 |              0.18124 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9071 | >20%                    |                 5 |              0.18142 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.9101 | 15-20%                  |                 2 |              0.45505 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9142 | >20%                    |                10 |              0.09142 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9176 | >20%                    |                 5 |              0.18352 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.935  | >20%                    |                 5 |              0.187   |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9376 | >20%                    |                10 |              0.09376 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.997  | 15-20%                  |                10 |              0.0997  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0221 | 10-15%                  |                10 |              0.10221 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0349 | 5-10%                   |                 5 |              0.20698 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0427 | 10-15%                  |                10 |              0.10427 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0441 | 10-15%                  |                10 |              0.10441 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0453 | >20%                    |                10 |              0.10453 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      1.049  | >20%                    |                 2 |              0.5245  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0667 | >20%                    |                10 |              0.10667 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0937 | >20%                    |                 2 |              0.54685 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1254 | >20%                    |                 2 |              0.5627  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.2153 | >20%                    |                10 |              0.12153 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.2218 | 5-10%                   |                10 |              0.12218 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2296 | >20%                    |                10 |              0.12296 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.232  | >20%                    |                10 |              0.1232  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3149 | >20%                    |                10 |              0.13149 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3303 | >20%                    |                 2 |              0.66515 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4133 | >20%                    |                 5 |              0.28266 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4238 | >20%                    |                 2 |              0.7119  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4409 | >20%                    |                10 |              0.14409 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4465 | >20%                    |                 5 |              0.2893  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5036 | 10-15%                  |                 5 |              0.30072 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5993 | 15-20%                  |                10 |              0.15993 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6584 | 15-20%                  |                10 |              0.16584 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0914 | 10-15%                  |                10 |              0.20914 |