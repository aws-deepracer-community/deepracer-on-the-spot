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

Data correct as of 2026-05-15 03:52:15.701203, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1206 | >20%                    |                 2 |              0.0603  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1471 | 15-20%                  |                 2 |              0.07355 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1682 | >20%                    |                 2 |              0.0841  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.198  | 15-20%                  |                 5 |              0.0396  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.212  | >20%                    |                 2 |              0.106   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2271 | >20%                    |                 2 |              0.11355 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2328 | >20%                    |                 2 |              0.1164  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2348 | 15-20%                  |                 2 |              0.1174  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2366 | >20%                    |                 2 |              0.1183  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2381 | 15-20%                  |                 5 |              0.04762 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2393 | >20%                    |                 5 |              0.04786 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.246  | >20%                    |                 2 |              0.123   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2559 | 15-20%                  |                 5 |              0.05118 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2688 | >20%                    |                 5 |              0.05376 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2708 | >20%                    |                 2 |              0.1354  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2805 | 15-20%                  |                 2 |              0.14025 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2809 | >20%                    |                 2 |              0.14045 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2851 | 5-10%                   |                10 |              0.02851 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2853 | >20%                    |                 5 |              0.05706 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2951 | >20%                    |                 5 |              0.05902 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2981 | 5-10%                   |                10 |              0.02981 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3003 | 10-15%                  |                 2 |              0.15015 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.305  | >20%                    |                 2 |              0.1525  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3076 | >20%                    |                 2 |              0.1538  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3095 | >20%                    |                10 |              0.03095 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3169 | 10-15%                  |                 2 |              0.15845 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3204 | >20%                    |                 2 |              0.1602  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3234 | 10-15%                  |                 2 |              0.1617  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3322 | <5%                     |                 2 |              0.1661  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3471 | >20%                    |                 5 |              0.06942 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3477 | >20%                    |                 2 |              0.17385 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3615 | >20%                    |                 5 |              0.0723  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3664 | >20%                    |                 5 |              0.07328 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3784 | >20%                    |                 5 |              0.07568 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3791 | >20%                    |                 5 |              0.07582 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3799 | >20%                    |                 5 |              0.07598 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.388  | >20%                    |                 5 |              0.0776  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3924 | 10-15%                  |                 2 |              0.1962  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4016 | >20%                    |                 5 |              0.08032 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4024 | >20%                    |                 2 |              0.2012  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.403  | <5%                     |                 2 |              0.2015  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4095 | 5-10%                   |                 2 |              0.20475 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4212 | >20%                    |                 2 |              0.2106  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4307 | >20%                    |                 5 |              0.08614 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4318 | >20%                    |                10 |              0.04318 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4327 | >20%                    |                 2 |              0.21635 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4384 | >20%                    |                 2 |              0.2192  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4401 | >20%                    |                 5 |              0.08802 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4449 | >20%                    |                 2 |              0.22245 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4533 | <5%                     |                 2 |              0.22665 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4584 | 15-20%                  |                 2 |              0.2292  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4634 | >20%                    |                 5 |              0.09268 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4659 | >20%                    |                 5 |              0.09318 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4671 | 15-20%                  |                 2 |              0.23355 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4702 | >20%                    |                 5 |              0.09404 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4779 | >20%                    |                 2 |              0.23895 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4797 | >20%                    |                 5 |              0.09594 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.489  | >20%                    |                 5 |              0.0978  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4954 | >20%                    |                 5 |              0.09908 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5031 | >20%                    |                 2 |              0.25155 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5063 | 5-10%                   |                 5 |              0.10126 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5087 | >20%                    |                10 |              0.05087 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5123 | 15-20%                  |                 5 |              0.10246 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5192 | 5-10%                   |                10 |              0.05192 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5225 | <5%                     |                 5 |              0.1045  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5228 | >20%                    |                 5 |              0.10456 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5307 | >20%                    |                10 |              0.05307 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5329 | 10-15%                  |                 5 |              0.10658 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5458 | >20%                    |                10 |              0.05458 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5536 | >20%                    |                 5 |              0.11072 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5543 | 10-15%                  |                 2 |              0.27715 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5559 | >20%                    |                10 |              0.05559 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5593 | 15-20%                  |                 2 |              0.27965 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5611 | >20%                    |                 2 |              0.28055 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5725 | >20%                    |                10 |              0.05725 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6087 | >20%                    |                 2 |              0.30435 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6156 | >20%                    |                 2 |              0.3078  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6188 | >20%                    |                 5 |              0.12376 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6324 | >20%                    |                 2 |              0.3162  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6436 | >20%                    |                 2 |              0.3218  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6478 | >20%                    |                 5 |              0.12956 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6482 | >20%                    |                10 |              0.06482 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6632 | >20%                    |                10 |              0.06632 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6677 | 15-20%                  |                10 |              0.06677 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6677 | >20%                    |                 2 |              0.33385 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6691 | 5-10%                   |                10 |              0.06691 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6692 | 15-20%                  |                10 |              0.06692 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6835 | 5-10%                   |                 2 |              0.34175 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6911 | >20%                    |                 5 |              0.13822 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6953 | 10-15%                  |                 2 |              0.34765 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6963 | >20%                    |                10 |              0.06963 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.705  | >20%                    |                 5 |              0.141   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7076 | >20%                    |                 5 |              0.14152 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7077 | >20%                    |                 2 |              0.35385 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7155 | >20%                    |                 5 |              0.1431  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7296 | >20%                    |                 5 |              0.14592 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7298 | >20%                    |                 5 |              0.14596 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7305 | >20%                    |                10 |              0.07305 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7407 | >20%                    |                10 |              0.07407 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7578 |                         |                 2 |              0.3789  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7671 | >20%                    |                 2 |              0.38355 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7711 | >20%                    |                 5 |              0.15422 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.79   | >20%                    |                10 |              0.079   |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7913 | >20%                    |                10 |              0.07913 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7994 | >20%                    |                 5 |              0.15988 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7996 | >20%                    |                 5 |              0.15992 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.8146 | >20%                    |                10 |              0.08146 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8234 | >20%                    |                 5 |              0.16468 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8442 | >20%                    |                10 |              0.08442 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.856  |                         |                 5 |              0.1712  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.871  | >20%                    |                10 |              0.0871  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.872  | 5-10%                   |                 5 |              0.1744  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8741 | >20%                    |                10 |              0.08741 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8764 |                         |                 2 |              0.4382  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8869 | 10-15%                  |                10 |              0.08869 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8876 | >20%                    |                10 |              0.08876 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8892 | >20%                    |                10 |              0.08892 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8894 | 15-20%                  |                10 |              0.08894 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      0.9214 |                         |                 5 |              0.18428 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9272 | 15-20%                  |                10 |              0.09272 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9277 | 15-20%                  |                10 |              0.09277 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9301 | >20%                    |                10 |              0.09301 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9326 | >20%                    |                 5 |              0.18652 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.939  | >20%                    |                10 |              0.0939  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9637 | >20%                    |                10 |              0.09637 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9915 | >20%                    |                10 |              0.09915 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      1.0014 | >20%                    |                 5 |              0.20028 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0047 | >20%                    |                 5 |              0.20094 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0063 | >20%                    |                10 |              0.10063 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0083 | >20%                    |                 5 |              0.20166 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0111 | >20%                    |                 2 |              0.50555 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0467 | >20%                    |                10 |              0.10467 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0491 | >20%                    |                 5 |              0.20982 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0736 | >20%                    |                10 |              0.10736 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0998 | 5-10%                   |                10 |              0.10998 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2147 | 5-10%                   |                 2 |              0.60735 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.2162 | 15-20%                  |                10 |              0.12162 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2177 | 10-15%                  |                10 |              0.12177 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.2198 | 5-10%                   |                 2 |              0.6099  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2256 | >20%                    |                 5 |              0.24512 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3167 | 15-20%                  |                 5 |              0.26334 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3277 | >20%                    |                10 |              0.13277 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3308 | >20%                    |                10 |              0.13308 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3385 | >20%                    |                10 |              0.13385 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3771 | 10-15%                  |                 2 |              0.68855 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4202 | >20%                    |                 5 |              0.28404 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4794 | 15-20%                  |                10 |              0.14794 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5149 | >20%                    |                10 |              0.15149 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5427 | 15-20%                  |                10 |              0.15427 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5951 |                         |                10 |              0.15951 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6243 |                         |                10 |              0.16243 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0336 | >20%                    |                10 |              0.20336 |