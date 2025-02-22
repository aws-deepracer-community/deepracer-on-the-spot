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

Data correct as of 2025-02-22 01:35:30.390559, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1243 | >20%                    |                 2 |              0.06215 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1325 | 10-15%                  |                 2 |              0.06625 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1432 | 5-10%                   |                 5 |              0.02864 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1683 | <5%                     |                 2 |              0.08415 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1931 | <5%                     |                 5 |              0.03862 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.1955 | 10-15%                  |                 5 |              0.0391  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2084 | >20%                    |                 2 |              0.1042  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2097 | <5%                     |                 5 |              0.04194 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2137 | 5-10%                   |                 2 |              0.10685 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2176 | >20%                    |                 2 |              0.1088  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2203 | <5%                     |                 2 |              0.11015 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2274 | >20%                    |                 5 |              0.04548 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2276 | >20%                    |                 2 |              0.1138  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2297 | <5%                     |                 5 |              0.04594 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2367 | >20%                    |                 2 |              0.11835 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.2378 |                         |                 2 |              0.1189  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2394 | >20%                    |                 2 |              0.1197  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2433 | 15-20%                  |                10 |              0.02433 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2459 | 5-10%                   |                10 |              0.02459 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2464 | >20%                    |                 2 |              0.1232  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2698 | 5-10%                   |                 2 |              0.1349  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 5-10%                   |                 5 |              0.0552  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2786 | 5-10%                   |                 2 |              0.1393  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.28   | <5%                     |                 2 |              0.14    |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.283  | >20%                    |                 2 |              0.1415  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2903 | 15-20%                  |                 2 |              0.14515 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2933 | 5-10%                   |                 2 |              0.14665 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2978 | >20%                    |                 5 |              0.05956 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3012 | <5%                     |                 2 |              0.1506  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.303  | 10-15%                  |                 2 |              0.1515  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.306  | 10-15%                  |                10 |              0.0306  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3127 | 15-20%                  |                 2 |              0.15635 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3157 | <5%                     |                 2 |              0.15785 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3168 | <5%                     |                 2 |              0.1584  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.3187 |                         |                 5 |              0.06374 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3196 | 10-15%                  |                 2 |              0.1598  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3197 | <5%                     |                10 |              0.03197 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3198 | 15-20%                  |                 5 |              0.06396 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3252 | >20%                    |                 2 |              0.1626  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3314 | 15-20%                  |                 2 |              0.1657  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3339 | >20%                    |                 2 |              0.16695 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3356 | >20%                    |                10 |              0.03356 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3406 | 5-10%                   |                10 |              0.03406 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3416 | >20%                    |                10 |              0.03416 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3437 | 15-20%                  |                10 |              0.03437 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3589 | 15-20%                  |                 2 |              0.17945 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3612 | 15-20%                  |                10 |              0.03612 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3628 | <5%                     |                 5 |              0.07256 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3645 | 10-15%                  |                 5 |              0.0729  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3665 | <5%                     |                 2 |              0.18325 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3723 | 10-15%                  |                10 |              0.03723 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3857 | 5-10%                   |                 5 |              0.07714 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3867 | 5-10%                   |                 2 |              0.19335 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3964 | 5-10%                   |                 2 |              0.1982  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3989 | 5-10%                   |                 2 |              0.19945 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4042 | >20%                    |                 5 |              0.08084 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4059 | 15-20%                  |                 2 |              0.20295 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4119 | <5%                     |                 5 |              0.08238 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4145 | 5-10%                   |                 2 |              0.20725 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4146 | >20%                    |                 5 |              0.08292 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.415  | 10-15%                  |                 2 |              0.2075  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4189 | <5%                     |                 2 |              0.20945 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4334 | <5%                     |                 2 |              0.2167  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4355 | >20%                    |                 5 |              0.0871  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4357 | >20%                    |                 2 |              0.21785 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.442  | >20%                    |                 2 |              0.221   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4429 | <5%                     |                 5 |              0.08858 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4544 | >20%                    |                 5 |              0.09088 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4738 | 10-15%                  |                 5 |              0.09476 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4761 | 15-20%                  |                 5 |              0.09522 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4793 | 5-10%                   |                 5 |              0.09586 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.4804 |                         |                10 |              0.04804 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4835 | 5-10%                   |                 5 |              0.0967  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4887 | <5%                     |                10 |              0.04887 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4963 | <5%                     |                 5 |              0.09926 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5028 | >20%                    |                 2 |              0.2514  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5034 | >20%                    |                 5 |              0.10068 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5079 | 10-15%                  |                 5 |              0.10158 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5088 | >20%                    |                 2 |              0.2544  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5095 | >20%                    |                 2 |              0.25475 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5106 | >20%                    |                 2 |              0.2553  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5141 | >20%                    |                 5 |              0.10282 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5174 | <5%                     |                 2 |              0.2587  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5179 | >20%                    |                 2 |              0.25895 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5208 | >20%                    |                 2 |              0.2604  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5243 | 10-15%                  |                 5 |              0.10486 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5323 | >20%                    |                 5 |              0.10646 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5414 | 15-20%                  |                 2 |              0.2707  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5423 | <5%                     |                 5 |              0.10846 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5465 | >20%                    |                 5 |              0.1093  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5474 | 5-10%                   |                 5 |              0.10948 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5483 | >20%                    |                 2 |              0.27415 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5503 | >20%                    |                 5 |              0.11006 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5506 | >20%                    |                 2 |              0.2753  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5626 | >20%                    |                 2 |              0.2813  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5627 | 5-10%                   |                 5 |              0.11254 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5664 | 5-10%                   |                 2 |              0.2832  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5666 | >20%                    |                 2 |              0.2833  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5725 | >20%                    |                 5 |              0.1145  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5758 | 5-10%                   |                 5 |              0.11516 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5764 | 5-10%                   |                10 |              0.05764 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5821 | <5%                     |                 5 |              0.11642 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5884 | 15-20%                  |                 5 |              0.11768 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5899 | >20%                    |                 5 |              0.11798 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5903 | 10-15%                  |                 5 |              0.11806 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6111 | 5-10%                   |                 5 |              0.12222 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6163 | 10-15%                  |                 5 |              0.12326 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6196 | 10-15%                  |                10 |              0.06196 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6302 | 15-20%                  |                10 |              0.06302 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6355 | <5%                     |                10 |              0.06355 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6495 | >20%                    |                10 |              0.06495 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6512 | >20%                    |                 5 |              0.13024 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6578 | >20%                    |                 2 |              0.3289  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.677  | 5-10%                   |                 5 |              0.1354  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6796 | 10-15%                  |                 5 |              0.13592 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6976 | >20%                    |                10 |              0.06976 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7006 | 5-10%                   |                10 |              0.07006 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7024 | 5-10%                   |                 5 |              0.14048 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7039 | >20%                    |                 2 |              0.35195 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7178 | >20%                    |                 5 |              0.14356 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7271 | >20%                    |                 5 |              0.14542 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.738  | >20%                    |                10 |              0.0738  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7428 | >20%                    |                10 |              0.07428 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7542 | 5-10%                   |                 5 |              0.15084 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.759  | <5%                     |                10 |              0.0759  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7655 | >20%                    |                 5 |              0.1531  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7723 | 15-20%                  |                10 |              0.07723 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7752 | <5%                     |                 5 |              0.15504 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7784 | >20%                    |                 5 |              0.15568 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7797 | >20%                    |                10 |              0.07797 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7837 | >20%                    |                 5 |              0.15674 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7946 | 10-15%                  |                10 |              0.07946 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7988 | >20%                    |                10 |              0.07988 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7996 | 15-20%                  |                 2 |              0.3998  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8058 | 5-10%                   |                10 |              0.08058 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8114 | 5-10%                   |                 2 |              0.4057  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8198 | 15-20%                  |                10 |              0.08198 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8223 | <5%                     |                10 |              0.08223 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8539 | >20%                    |                10 |              0.08539 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8635 | <5%                     |                10 |              0.08635 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8698 | >20%                    |                10 |              0.08698 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8837 | <5%                     |                10 |              0.08837 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8864 | 5-10%                   |                10 |              0.08864 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8865 | <5%                     |                10 |              0.08865 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8874 | 10-15%                  |                10 |              0.08874 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.8875 | 5-10%                   |                10 |              0.08875 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8894 | >20%                    |                 2 |              0.4447  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8969 | 10-15%                  |                10 |              0.08969 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9003 | >20%                    |                10 |              0.09003 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9173 | >20%                    |                10 |              0.09173 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9358 | >20%                    |                 5 |              0.18716 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9616 | >20%                    |                10 |              0.09616 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9622 | 5-10%                   |                10 |              0.09622 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9803 | 10-15%                  |                10 |              0.09803 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9856 | >20%                    |                10 |              0.09856 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9979 | >20%                    |                10 |              0.09979 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.009  | 15-20%                  |                10 |              0.1009  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0159 | 15-20%                  |                 5 |              0.20318 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0409 | 15-20%                  |                10 |              0.10409 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0415 | 5-10%                   |                 5 |              0.2083  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0519 | <5%                     |                10 |              0.10519 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.095  | >20%                    |                10 |              0.1095  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1113 | 10-15%                  |                10 |              0.11113 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1474 | 10-15%                  |                 2 |              0.5737  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1527 | 15-20%                  |                10 |              0.11527 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1634 | >20%                    |                 2 |              0.5817  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1645 | >20%                    |                10 |              0.11645 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2303 | >20%                    |                 2 |              0.61515 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2361 | >20%                    |                 5 |              0.24722 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2439 | >20%                    |                 5 |              0.24878 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2735 | 10-15%                  |                 5 |              0.2547  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3637 | >20%                    |                10 |              0.13637 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3696 | >20%                    |                10 |              0.13696 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6125 | >20%                    |                10 |              0.16125 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6932 | >20%                    |                10 |              0.16932 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7098 | >20%                    |                10 |              0.17098 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0146 | 5-10%                   |                10 |              0.20146 |