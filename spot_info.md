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

Data correct as of 2025-12-06 01:50:14.678492, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1289 | >20%                    |                 2 |              0.06445 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1452 | >20%                    |                 2 |              0.0726  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1791 | <5%                     |                 2 |              0.08955 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1908 | <5%                     |                 2 |              0.0954  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1912 | >20%                    |                 2 |              0.0956  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1988 | 10-15%                  |                 2 |              0.0994  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.224  | >20%                    |                 2 |              0.112   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2297 | >20%                    |                 2 |              0.11485 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | >20%                    |                10 |              0.02308 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2339 | >20%                    |                 2 |              0.11695 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2451 | >20%                    |                 5 |              0.04902 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2481 | >20%                    |                 5 |              0.04962 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2491 | >20%                    |                 2 |              0.12455 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2549 | 10-15%                  |                 5 |              0.05098 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.256  | >20%                    |                 5 |              0.0512  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2628 | 15-20%                  |                 2 |              0.1314  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2789 | 10-15%                  |                 2 |              0.13945 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2802 | >20%                    |                 2 |              0.1401  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2818 | 5-10%                   |                 5 |              0.05636 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2849 | >20%                    |                 2 |              0.14245 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.288  | <5%                     |                 2 |              0.144   |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2892 | >20%                    |                 2 |              0.1446  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3023 | 5-10%                   |                 2 |              0.15115 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3041 | >20%                    |                 2 |              0.15205 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3042 | >20%                    |                 5 |              0.06084 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3101 | 5-10%                   |                 2 |              0.15505 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3223 | 10-15%                  |                10 |              0.03223 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3228 | 15-20%                  |                 2 |              0.1614  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3423 | >20%                    |                 2 |              0.17115 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3433 | 5-10%                   |                10 |              0.03433 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3496 | 15-20%                  |                 2 |              0.1748  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3505 | 10-15%                  |                 2 |              0.17525 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3556 | >20%                    |                10 |              0.03556 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3597 | >20%                    |                 2 |              0.17985 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3676 | >20%                    |                 2 |              0.1838  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.37   | 15-20%                  |                 2 |              0.185   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3734 | >20%                    |                 5 |              0.07468 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3746 | >20%                    |                 5 |              0.07492 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3752 | >20%                    |                 2 |              0.1876  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3759 | <5%                     |                 2 |              0.18795 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3806 | >20%                    |                 5 |              0.07612 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3816 | 15-20%                  |                 5 |              0.07632 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3819 | 10-15%                  |                10 |              0.03819 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3876 | >20%                    |                 2 |              0.1938  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3913 | >20%                    |                 2 |              0.19565 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3918 | <5%                     |                 5 |              0.07836 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3948 | 10-15%                  |                10 |              0.03948 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.395  | >20%                    |                 2 |              0.1975  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3979 | >20%                    |                 2 |              0.19895 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4058 | >20%                    |                 2 |              0.2029  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4081 | 10-15%                  |                 5 |              0.08162 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4173 | 5-10%                   |                 2 |              0.20865 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4241 | >20%                    |                10 |              0.04241 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4257 | 15-20%                  |                 5 |              0.08514 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4295 | 15-20%                  |                 2 |              0.21475 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4329 | <5%                     |                 2 |              0.21645 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4337 | >20%                    |                 5 |              0.08674 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.434  | 15-20%                  |                 5 |              0.0868  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4358 | <5%                     |                 2 |              0.2179  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4405 | 10-15%                  |                 5 |              0.0881  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4407 | >20%                    |                10 |              0.04407 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4412 | >20%                    |                 2 |              0.2206  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4437 | >20%                    |                 5 |              0.08874 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4441 | >20%                    |                 2 |              0.22205 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4444 | 15-20%                  |                10 |              0.04444 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4491 | >20%                    |                 2 |              0.22455 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4551 | >20%                    |                10 |              0.04551 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4552 | >20%                    |                 5 |              0.09104 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4569 | >20%                    |                 5 |              0.09138 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4608 | >20%                    |                 5 |              0.09216 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.461  | >20%                    |                 2 |              0.2305  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4616 | <5%                     |                10 |              0.04616 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4756 | 15-20%                  |                 5 |              0.09512 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4778 | >20%                    |                 5 |              0.09556 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4801 | 10-15%                  |                 2 |              0.24005 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4857 | >20%                    |                 5 |              0.09714 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4871 | 10-15%                  |                 2 |              0.24355 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4961 | 15-20%                  |                10 |              0.04961 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4969 | >20%                    |                 5 |              0.09938 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4992 | 10-15%                  |                 2 |              0.2496  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5039 | >20%                    |                 5 |              0.10078 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5042 | >20%                    |                 5 |              0.10084 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5064 | 10-15%                  |                 5 |              0.10128 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5085 | 10-15%                  |                 2 |              0.25425 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5163 | 15-20%                  |                 5 |              0.10326 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5241 | 10-15%                  |                 5 |              0.10482 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5258 | 5-10%                   |                10 |              0.05258 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.535  | >20%                    |                 2 |              0.2675  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5415 | >20%                    |                 5 |              0.1083  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5452 | >20%                    |                 5 |              0.10904 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.546  | <5%                     |                10 |              0.0546  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5517 | >20%                    |                 2 |              0.27585 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5546 | 15-20%                  |                 5 |              0.11092 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5598 | >20%                    |                 5 |              0.11196 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5629 | <5%                     |                 5 |              0.11258 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5679 | 10-15%                  |                 5 |              0.11358 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5696 | 15-20%                  |                 5 |              0.11392 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5701 | >20%                    |                 5 |              0.11402 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.584  | >20%                    |                 5 |              0.1168  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5841 | 15-20%                  |                 5 |              0.11682 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5876 | 10-15%                  |                 5 |              0.11752 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5913 | >20%                    |                10 |              0.05913 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5966 | >20%                    |                 2 |              0.2983  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6001 | 15-20%                  |                 5 |              0.12002 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6022 | >20%                    |                 2 |              0.3011  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6115 | >20%                    |                 5 |              0.1223  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6149 | >20%                    |                 2 |              0.30745 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6231 | 10-15%                  |                 5 |              0.12462 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6243 | >20%                    |                 2 |              0.31215 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6259 | 5-10%                   |                 2 |              0.31295 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6495 | >20%                    |                10 |              0.06495 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6551 | >20%                    |                10 |              0.06551 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6641 | 15-20%                  |                10 |              0.06641 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6669 | >20%                    |                10 |              0.06669 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6691 | 5-10%                   |                10 |              0.06691 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6767 | >20%                    |                 5 |              0.13534 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.677  | 10-15%                  |                 5 |              0.1354  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6786 | >20%                    |                 5 |              0.13572 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6862 | >20%                    |                 5 |              0.13724 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6982 | >20%                    |                10 |              0.06982 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7047 | 5-10%                   |                 5 |              0.14094 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7051 | >20%                    |                10 |              0.07051 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7145 | >20%                    |                 5 |              0.1429  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7156 | >20%                    |                 5 |              0.14312 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7198 | >20%                    |                 2 |              0.3599  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7207 | >20%                    |                10 |              0.07207 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7235 | >20%                    |                 2 |              0.36175 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7348 | 15-20%                  |                10 |              0.07348 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7396 | 10-15%                  |                10 |              0.07396 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.746  | >20%                    |                 5 |              0.1492  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7494 | >20%                    |                10 |              0.07494 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7596 | >20%                    |                10 |              0.07596 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7625 | 10-15%                  |                10 |              0.07625 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7647 | >20%                    |                10 |              0.07647 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7708 | >20%                    |                10 |              0.07708 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7748 | >20%                    |                10 |              0.07748 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.7776 | 15-20%                  |                10 |              0.07776 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7918 | <5%                     |                10 |              0.07918 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.809  | 15-20%                  |                 5 |              0.1618  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.823  | >20%                    |                 5 |              0.1646  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8279 | 10-15%                  |                 2 |              0.41395 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8297 | 10-15%                  |                10 |              0.08297 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8384 | >20%                    |                 2 |              0.4192  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8399 | >20%                    |                10 |              0.08399 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8407 | >20%                    |                10 |              0.08407 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8572 | >20%                    |                10 |              0.08572 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8797 | >20%                    |                 5 |              0.17594 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8803 | >20%                    |                10 |              0.08803 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8804 | >20%                    |                 2 |              0.4402  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8858 | 5-10%                   |                10 |              0.08858 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.895  | 15-20%                  |                10 |              0.0895  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8951 | 10-15%                  |                10 |              0.08951 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9053 | >20%                    |                10 |              0.09053 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.9083 | >20%                    |                 5 |              0.18166 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9204 | >20%                    |                 2 |              0.4602  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9231 | >20%                    |                 5 |              0.18462 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.968  | >20%                    |                10 |              0.0968  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9771 | >20%                    |                 2 |              0.48855 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9889 | >20%                    |                10 |              0.09889 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0003 | >20%                    |                 5 |              0.20006 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0039 | >20%                    |                10 |              0.10039 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0081 | >20%                    |                10 |              0.10081 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.0204 | <5%                     |                 2 |              0.5102  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.021  | <5%                     |                10 |              0.1021  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0225 | 15-20%                  |                10 |              0.10225 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0494 | 10-15%                  |                10 |              0.10494 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1493 | <5%                     |                 5 |              0.22986 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1633 | 15-20%                  |                10 |              0.11633 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1913 | >20%                    |                10 |              0.11913 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2106 | >20%                    |                 5 |              0.24212 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2455 | >20%                    |                10 |              0.12455 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.294  | >20%                    |                10 |              0.1294  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3144 | >20%                    |                10 |              0.13144 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3788 | >20%                    |                 2 |              0.6894  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.434  | 10-15%                  |                10 |              0.1434  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4899 | >20%                    |                 2 |              0.74495 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.496  | >20%                    |                10 |              0.1496  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5572 | >20%                    |                 5 |              0.31144 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5748 | 5-10%                   |                 5 |              0.31496 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.026  | 15-20%                  |                10 |              0.2026  |