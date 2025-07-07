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

Data correct as of 2025-07-07 02:03:13.873559, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.166  | 10-15%                  |                 5 |              0.0332  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1668 | >20%                    |                 5 |              0.03336 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.169  | <5%                     |                 2 |              0.0845  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1806 | 5-10%                   |                 2 |              0.0903  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.186  | >20%                    |                 2 |              0.093   |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1888 | >20%                    |                 5 |              0.03776 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1896 | >20%                    |                 2 |              0.0948  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.1988 | >20%                    |                 5 |              0.03976 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2014 | >20%                    |                10 |              0.02014 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2185 | >20%                    |                 2 |              0.10925 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2207 | 15-20%                  |                 2 |              0.11035 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2254 | 10-15%                  |                 5 |              0.04508 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2305 | >20%                    |                 2 |              0.11525 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2369 | >20%                    |                 2 |              0.11845 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | >20%                    |                10 |              0.02395 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2419 | 15-20%                  |                 2 |              0.12095 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2438 | 5-10%                   |                 2 |              0.1219  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2557 | >20%                    |                 2 |              0.12785 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2583 | >20%                    |                 2 |              0.12915 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2604 | >20%                    |                 5 |              0.05208 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2724 | 5-10%                   |                10 |              0.02724 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2848 | >20%                    |                 2 |              0.1424  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2861 | >20%                    |                 5 |              0.05722 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.2996 | >20%                    |                10 |              0.02996 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3022 | <5%                     |                 2 |              0.1511  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3036 | >20%                    |                 2 |              0.1518  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3145 | 10-15%                  |                 2 |              0.15725 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3155 | 5-10%                   |                 2 |              0.15775 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3244 | >20%                    |                 2 |              0.1622  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3261 | 15-20%                  |                 2 |              0.16305 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3358 | >20%                    |                 5 |              0.06716 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3389 | <5%                     |                 2 |              0.16945 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.343  | >20%                    |                 2 |              0.1715  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3455 | 15-20%                  |                 5 |              0.0691  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.351  | <5%                     |                10 |              0.0351  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3537 | >20%                    |                 2 |              0.17685 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3689 | >20%                    |                 5 |              0.07378 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3715 | >20%                    |                 2 |              0.18575 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.372  | >20%                    |                 2 |              0.186   |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3747 | >20%                    |                10 |              0.03747 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3847 | >20%                    |                 2 |              0.19235 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3871 | 5-10%                   |                 2 |              0.19355 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3997 | >20%                    |                 2 |              0.19985 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4012 | >20%                    |                 5 |              0.08024 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4026 | >20%                    |                 2 |              0.2013  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4073 | >20%                    |                10 |              0.04073 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4127 | 5-10%                   |                 2 |              0.20635 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4209 | >20%                    |                 2 |              0.21045 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4307 | >20%                    |                 5 |              0.08614 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4333 | <5%                     |                 2 |              0.21665 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4345 | >20%                    |                 2 |              0.21725 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4373 | >20%                    |                 2 |              0.21865 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4431 | 10-15%                  |                 2 |              0.22155 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4483 | 15-20%                  |                 5 |              0.08966 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4485 | 10-15%                  |                 5 |              0.0897  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4503 | <5%                     |                 2 |              0.22515 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4503 | >20%                    |                 5 |              0.09006 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4536 | >20%                    |                 5 |              0.09072 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4606 | >20%                    |                 2 |              0.2303  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4616 | >20%                    |                 2 |              0.2308  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4674 | <5%                     |                 5 |              0.09348 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4694 | >20%                    |                 2 |              0.2347  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4726 | >20%                    |                 5 |              0.09452 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4737 | >20%                    |                 5 |              0.09474 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4762 | <5%                     |                 5 |              0.09524 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4806 | >20%                    |                10 |              0.04806 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.484  | 5-10%                   |                 2 |              0.242   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4865 | >20%                    |                 2 |              0.24325 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.499  | 10-15%                  |                 5 |              0.0998  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5013 | >20%                    |                 2 |              0.25065 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5017 | 15-20%                  |                 5 |              0.10034 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5026 | 15-20%                  |                 2 |              0.2513  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.505  | >20%                    |                 5 |              0.101   |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.506  | >20%                    |                 2 |              0.253   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.508  | <5%                     |                 5 |              0.1016  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5084 | 15-20%                  |                 5 |              0.10168 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5162 | >20%                    |                 5 |              0.10324 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5221 | >20%                    |                 2 |              0.26105 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5248 | >20%                    |                 2 |              0.2624  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5287 | >20%                    |                10 |              0.05287 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5289 | >20%                    |                 5 |              0.10578 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5293 | >20%                    |                 5 |              0.10586 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5316 | >20%                    |                 5 |              0.10632 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5323 | >20%                    |                 2 |              0.26615 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5533 | >20%                    |                 5 |              0.11066 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5594 | >20%                    |                 2 |              0.2797  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5639 | >20%                    |                 5 |              0.11278 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5672 | <5%                     |                 5 |              0.11344 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.57   | >20%                    |                 2 |              0.285   |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5744 | >20%                    |                 2 |              0.2872  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.5765 | >20%                    |                10 |              0.05765 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5786 | 15-20%                  |                10 |              0.05786 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5794 | >20%                    |                 2 |              0.2897  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5866 | 5-10%                   |                 2 |              0.2933  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5902 | >20%                    |                 2 |              0.2951  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.591  | >20%                    |                 5 |              0.1182  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5931 | >20%                    |                 5 |              0.11862 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6007 | 10-15%                  |                 5 |              0.12014 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6125 | 10-15%                  |                 5 |              0.1225  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6221 | 15-20%                  |                10 |              0.06221 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6224 | >20%                    |                 5 |              0.12448 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6329 | 10-15%                  |                 2 |              0.31645 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6345 | >20%                    |                10 |              0.06345 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6349 | >20%                    |                 5 |              0.12698 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6367 | >20%                    |                10 |              0.06367 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6493 | >20%                    |                 5 |              0.12986 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6501 | >20%                    |                10 |              0.06501 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6507 | >20%                    |                 5 |              0.13014 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6512 | 5-10%                   |                 5 |              0.13024 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6574 | >20%                    |                 2 |              0.3287  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6594 | >20%                    |                 5 |              0.13188 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6613 | 5-10%                   |                 5 |              0.13226 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6685 | >20%                    |                 5 |              0.1337  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6781 | >20%                    |                 5 |              0.13562 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6933 | <5%                     |                 5 |              0.13866 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6959 | >20%                    |                10 |              0.06959 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6978 | >20%                    |                 5 |              0.13956 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6989 | >20%                    |                 5 |              0.13978 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7092 | 10-15%                  |                10 |              0.07092 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7139 | 15-20%                  |                 5 |              0.14278 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7155 | <5%                     |                 5 |              0.1431  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7189 | 10-15%                  |                10 |              0.07189 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7297 | >20%                    |                 5 |              0.14594 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7402 | >20%                    |                 5 |              0.14804 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7553 | 10-15%                  |                10 |              0.07553 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7597 | >20%                    |                 2 |              0.37985 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.762  | 5-10%                   |                10 |              0.0762  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7632 | 15-20%                  |                10 |              0.07632 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7699 | >20%                    |                10 |              0.07699 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7843 | >20%                    |                 5 |              0.15686 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7853 | <5%                     |                10 |              0.07853 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7998 | 5-10%                   |                10 |              0.07998 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8145 | 10-15%                  |                 5 |              0.1629  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8223 | >20%                    |                 5 |              0.16446 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8376 | <5%                     |                10 |              0.08376 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.844  | 10-15%                  |                10 |              0.0844  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8454 | 5-10%                   |                10 |              0.08454 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8512 | >20%                    |                10 |              0.08512 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8567 | >20%                    |                10 |              0.08567 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.858  | 5-10%                   |                10 |              0.0858  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8595 | <5%                     |                10 |              0.08595 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.874  | >20%                    |                10 |              0.0874  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9023 | >20%                    |                10 |              0.09023 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9025 | 15-20%                  |                10 |              0.09025 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9172 | >20%                    |                10 |              0.09172 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9192 | >20%                    |                 5 |              0.18384 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9199 | >20%                    |                10 |              0.09199 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9256 | 15-20%                  |                10 |              0.09256 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9298 | 5-10%                   |                10 |              0.09298 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9344 | >20%                    |                10 |              0.09344 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.952  | >20%                    |                10 |              0.0952  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9529 | >20%                    |                10 |              0.09529 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9639 | 15-20%                  |                10 |              0.09639 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9898 | >20%                    |                10 |              0.09898 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9962 | >20%                    |                 2 |              0.4981  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0182 | >20%                    |                10 |              0.10182 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0252 | >20%                    |                10 |              0.10252 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0335 | <5%                     |                10 |              0.10335 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0425 | <5%                     |                10 |              0.10425 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0484 | >20%                    |                 2 |              0.5242  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0633 | <5%                     |                 2 |              0.53165 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0696 | 15-20%                  |                10 |              0.10696 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0787 | <5%                     |                10 |              0.10787 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1197 | >20%                    |                10 |              0.11197 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.1414 | <5%                     |                10 |              0.11414 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1511 | >20%                    |                10 |              0.11511 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1643 | >20%                    |                 2 |              0.58215 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2135 | >20%                    |                 2 |              0.60675 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2184 | >20%                    |                10 |              0.12184 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2344 | >20%                    |                 5 |              0.24688 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2648 | <5%                     |                 5 |              0.25296 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2719 | 10-15%                  |                10 |              0.12719 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2903 | 15-20%                  |                10 |              0.12903 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2968 | >20%                    |                 5 |              0.25936 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4066 | >20%                    |                10 |              0.14066 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4547 | <5%                     |                 5 |              0.29094 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5278 | >20%                    |                 5 |              0.30556 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6375 | 15-20%                  |                10 |              0.16375 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8431 | >20%                    |                10 |              0.18431 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8475 | <5%                     |                10 |              0.18475 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0445 | 5-10%                   |                10 |              0.20445 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      2.1082 | <5%                     |                 2 |              1.0541  |