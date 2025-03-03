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

Data correct as of 2025-03-03 01:43:17.821115, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1117 | >20%                    |                 2 |              0.05585 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1341 | 10-15%                  |                 2 |              0.06705 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1446 | 5-10%                   |                 5 |              0.02892 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1899 | <5%                     |                 5 |              0.03798 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1941 | <5%                     |                 2 |              0.09705 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 10-15%                  |                 5 |              0.039   |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1987 | >20%                    |                 5 |              0.03974 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2117 | >20%                    |                 5 |              0.04234 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2141 | 5-10%                   |                 2 |              0.10705 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2293 | 15-20%                  |                 5 |              0.04586 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2298 | <5%                     |                 2 |              0.1149  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2333 | >20%                    |                 2 |              0.11665 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2336 | >20%                    |                 2 |              0.1168  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2365 | 5-10%                   |                10 |              0.02365 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2366 | >20%                    |                 2 |              0.1183  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2392 | >20%                    |                 2 |              0.1196  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 15-20%                  |                10 |              0.02395 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2466 | <5%                     |                 5 |              0.04932 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2486 | >20%                    |                 2 |              0.1243  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2581 | 15-20%                  |                 2 |              0.12905 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2648 | 5-10%                   |                 2 |              0.1324  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.274  | <5%                     |                 2 |              0.137   |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2776 | 10-15%                  |                10 |              0.02776 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2822 | 5-10%                   |                 2 |              0.1411  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2892 | 15-20%                  |                 2 |              0.1446  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2953 | 5-10%                   |                 2 |              0.14765 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.299  | 10-15%                  |                 2 |              0.1495  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.313  | 15-20%                  |                 2 |              0.1565  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3133 | <5%                     |                 2 |              0.15665 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3158 | <5%                     |                 2 |              0.1579  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.3181 |                         |                 2 |              0.15905 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3183 | 5-10%                   |                 5 |              0.06366 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3262 | 10-15%                  |                 2 |              0.1631  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3265 | >20%                    |                 2 |              0.16325 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3283 | >20%                    |                 2 |              0.16415 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3405 | <5%                     |                 5 |              0.0681  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.3406 |                         |                 5 |              0.06812 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3412 | >20%                    |                10 |              0.03412 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3454 | 15-20%                  |                 5 |              0.06908 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3462 | <5%                     |                 2 |              0.1731  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3506 | 15-20%                  |                10 |              0.03506 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3508 | <5%                     |                 5 |              0.07016 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.354  | >20%                    |                 2 |              0.177   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.356  | 10-15%                  |                 5 |              0.0712  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3604 | 5-10%                   |                10 |              0.03604 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3673 | 15-20%                  |                 2 |              0.18365 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3716 | <5%                     |                 2 |              0.1858  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3754 | 5-10%                   |                 5 |              0.07508 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3799 | >20%                    |                 2 |              0.18995 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3836 | <5%                     |                10 |              0.03836 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3856 | >20%                    |                 5 |              0.07712 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3862 | <5%                     |                 5 |              0.07724 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3972 | 15-20%                  |                 2 |              0.1986  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4009 | 10-15%                  |                10 |              0.04009 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4045 | <5%                     |                 2 |              0.20225 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4159 | >20%                    |                 2 |              0.20795 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4163 | 5-10%                   |                 2 |              0.20815 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4163 | 5-10%                   |                 2 |              0.20815 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4213 | 10-15%                  |                 2 |              0.21065 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4227 | >20%                    |                 2 |              0.21135 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4302 | 5-10%                   |                 2 |              0.2151  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4313 | >20%                    |                 2 |              0.21565 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4351 | >20%                    |                 5 |              0.08702 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4365 | <5%                     |                 2 |              0.21825 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4366 | >20%                    |                 5 |              0.08732 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4402 | 5-10%                   |                 2 |              0.2201  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.443  | >20%                    |                 2 |              0.2215  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4474 | >20%                    |                 2 |              0.2237  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4532 | >20%                    |                 2 |              0.2266  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4608 | <5%                     |                10 |              0.04608 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4612 | 10-15%                  |                 5 |              0.09224 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4649 | 5-10%                   |                 5 |              0.09298 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4654 | 15-20%                  |                10 |              0.04654 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4686 | >20%                    |                 5 |              0.09372 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.477  | >20%                    |                 5 |              0.0954  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4781 | 15-20%                  |                 5 |              0.09562 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4794 | <5%                     |                 5 |              0.09588 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5042 | <5%                     |                 5 |              0.10084 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5056 | >20%                    |                 2 |              0.2528  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5069 | >20%                    |                 5 |              0.10138 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5107 | <5%                     |                 5 |              0.10214 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.5108 |                         |                10 |              0.05108 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5118 | >20%                    |                 2 |              0.2559  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5173 | >20%                    |                 5 |              0.10346 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5179 | >20%                    |                 5 |              0.10358 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5246 | >20%                    |                 2 |              0.2623  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5259 | 5-10%                   |                 5 |              0.10518 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5269 | 15-20%                  |                10 |              0.05269 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5315 | <5%                     |                 2 |              0.26575 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5459 | 5-10%                   |                 5 |              0.10918 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5478 | 10-15%                  |                 5 |              0.10956 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5558 | >20%                    |                 2 |              0.2779  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5599 | 15-20%                  |                 2 |              0.27995 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5607 | 5-10%                   |                 5 |              0.11214 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.565  | 10-15%                  |                 5 |              0.113   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.566  | 10-15%                  |                 5 |              0.1132  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5675 | >20%                    |                 5 |              0.1135  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5694 | 5-10%                   |                 5 |              0.11388 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5755 | 5-10%                   |                10 |              0.05755 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5815 | >20%                    |                 2 |              0.29075 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5825 | 10-15%                  |                 5 |              0.1165  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5872 | 5-10%                   |                 2 |              0.2936  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5923 | 5-10%                   |                 5 |              0.11846 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.606  | >20%                    |                 2 |              0.303   |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6103 | <5%                     |                 5 |              0.12206 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6133 | 15-20%                  |                 5 |              0.12266 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6284 | 10-15%                  |                10 |              0.06284 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6307 | >20%                    |                 5 |              0.12614 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6476 | <5%                     |                10 |              0.06476 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6537 | 10-15%                  |                 5 |              0.13074 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6592 | 5-10%                   |                 5 |              0.13184 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6639 | >20%                    |                10 |              0.06639 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6695 | >20%                    |                 2 |              0.33475 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6915 | >20%                    |                10 |              0.06915 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.701  | >20%                    |                 2 |              0.3505  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7053 | >20%                    |                 5 |              0.14106 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7189 | >20%                    |                 5 |              0.14378 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7268 | 5-10%                   |                 5 |              0.14536 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7293 | >20%                    |                10 |              0.07293 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7419 | >20%                    |                10 |              0.07419 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7476 | 15-20%                  |                 2 |              0.3738  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7525 | <5%                     |                 5 |              0.1505  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7539 | 5-10%                   |                 2 |              0.37695 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7551 | 5-10%                   |                 5 |              0.15102 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.764  | >20%                    |                10 |              0.0764  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7663 | >20%                    |                 5 |              0.15326 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7723 | >20%                    |                10 |              0.07723 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7734 | >20%                    |                10 |              0.07734 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7754 | >20%                    |                10 |              0.07754 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7758 | 15-20%                  |                10 |              0.07758 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7768 | 5-10%                   |                10 |              0.07768 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7953 | <5%                     |                10 |              0.07953 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7963 | >20%                    |                 5 |              0.15926 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7963 | 10-15%                  |                10 |              0.07963 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7978 | <5%                     |                10 |              0.07978 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.8023 | >20%                    |                 5 |              0.16046 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.8036 | >20%                    |                 5 |              0.16072 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8123 | >20%                    |                 5 |              0.16246 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8291 | <5%                     |                10 |              0.08291 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.832  | >20%                    |                10 |              0.0832  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.863  | 15-20%                  |                10 |              0.0863  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8635 | <5%                     |                10 |              0.08635 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8713 | 10-15%                  |                10 |              0.08713 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8725 | >20%                    |                 5 |              0.1745  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8838 | 5-10%                   |                10 |              0.08838 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8976 | <5%                     |                10 |              0.08976 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.908  | 5-10%                   |                10 |              0.0908  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9262 | >20%                    |                10 |              0.09262 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9413 | >20%                    |                10 |              0.09413 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9521 | 10-15%                  |                10 |              0.09521 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9778 | >20%                    |                10 |              0.09778 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9827 | 5-10%                   |                10 |              0.09827 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.9973 | 5-10%                   |                10 |              0.09973 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0176 | 15-20%                  |                10 |              0.10176 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0193 | 15-20%                  |                10 |              0.10193 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0475 | >20%                    |                10 |              0.10475 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0477 | 10-15%                  |                10 |              0.10477 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0816 | <5%                     |                10 |              0.10816 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0962 | 10-15%                  |                10 |              0.10962 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1112 | >20%                    |                10 |              0.11112 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1218 | >20%                    |                 2 |              0.5609  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1251 | 10-15%                  |                 2 |              0.56255 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1384 | >20%                    |                 2 |              0.5692  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1555 | >20%                    |                10 |              0.11555 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1908 | 15-20%                  |                10 |              0.11908 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2775 | 5-10%                   |                 5 |              0.2555  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2937 | >20%                    |                 5 |              0.25874 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3134 | >20%                    |                10 |              0.13134 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3263 | 10-15%                  |                 5 |              0.26526 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4083 | >20%                    |                10 |              0.14083 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4649 | >20%                    |                 5 |              0.29298 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4979 | >20%                    |                 2 |              0.74895 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5092 | 15-20%                  |                 5 |              0.30184 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5699 | >20%                    |                10 |              0.15699 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7254 | >20%                    |                10 |              0.17254 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8068 | >20%                    |                10 |              0.18068 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1    | 5-10%                   |                10 |              0.21    |