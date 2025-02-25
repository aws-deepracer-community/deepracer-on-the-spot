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

Data correct as of 2025-02-25 01:40:43.172969, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1214 | >20%                    |                 2 |              0.0607  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1307 | 10-15%                  |                 2 |              0.06535 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | 5-10%                   |                 5 |              0.0282  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1679 | <5%                     |                 2 |              0.08395 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1888 | <5%                     |                 5 |              0.03776 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 10-15%                  |                 5 |              0.039   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2112 | 15-20%                  |                 5 |              0.04224 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.213  | 5-10%                   |                 2 |              0.1065  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2163 | >20%                    |                 2 |              0.10815 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2209 | >20%                    |                 5 |              0.04418 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.222  | <5%                     |                 2 |              0.111   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2248 | >20%                    |                 2 |              0.1124  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2368 | >20%                    |                 2 |              0.1184  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2407 | <5%                     |                 5 |              0.04814 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2411 | <5%                     |                 5 |              0.04822 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2415 | 5-10%                   |                10 |              0.02415 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2422 | >20%                    |                 2 |              0.1211  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2443 | >20%                    |                 2 |              0.12215 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.248  |                         |                 2 |              0.124   |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2492 | 15-20%                  |                10 |              0.02492 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2512 | >20%                    |                 2 |              0.1256  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2585 | >20%                    |                 5 |              0.0517  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2694 | 5-10%                   |                 2 |              0.1347  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2728 | 10-15%                  |                10 |              0.02728 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2778 | 15-20%                  |                 2 |              0.1389  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2797 | 5-10%                   |                 2 |              0.13985 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.2828 | 5-10%                   |                 5 |              0.05656 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2844 | <5%                     |                 2 |              0.1422  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.29   | >20%                    |                 2 |              0.145   |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2921 | 5-10%                   |                 2 |              0.14605 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3006 | 10-15%                  |                 2 |              0.1503  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3047 | 15-20%                  |                 2 |              0.15235 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3135 | <5%                     |                 2 |              0.15675 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3168 | <5%                     |                 2 |              0.1584  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.321  | 15-20%                  |                 5 |              0.0642  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3234 | <5%                     |                 2 |              0.1617  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3276 | 15-20%                  |                 2 |              0.1638  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3333 | 10-15%                  |                 2 |              0.16665 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3365 | >20%                    |                 2 |              0.16825 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3379 | >20%                    |                 2 |              0.16895 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3398 | >20%                    |                10 |              0.03398 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3438 | 5-10%                   |                10 |              0.03438 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.3448 |                         |                 5 |              0.06896 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3476 | <5%                     |                10 |              0.03476 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3569 | 15-20%                  |                 2 |              0.17845 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3622 | 10-15%                  |                 5 |              0.07244 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3632 | <5%                     |                 5 |              0.07264 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3723 | 15-20%                  |                10 |              0.03723 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3766 | <5%                     |                 2 |              0.1883  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3827 | 5-10%                   |                 5 |              0.07654 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3889 | 10-15%                  |                10 |              0.03889 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3914 | >20%                    |                 5 |              0.07828 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3938 | <5%                     |                 2 |              0.1969  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4002 | 5-10%                   |                 2 |              0.2001  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4042 | >20%                    |                 5 |              0.08084 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4051 | <5%                     |                 5 |              0.08102 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4092 | 5-10%                   |                 2 |              0.2046  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4132 | 10-15%                  |                 2 |              0.2066  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.416  | 5-10%                   |                 2 |              0.208   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4192 | 5-10%                   |                 2 |              0.2096  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4211 | 15-20%                  |                 2 |              0.21055 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4217 | >20%                    |                 5 |              0.08434 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4303 | >20%                    |                 2 |              0.21515 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4363 | <5%                     |                 2 |              0.21815 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4562 | >20%                    |                 5 |              0.09124 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4575 | <5%                     |                 5 |              0.0915  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4666 | >20%                    |                 2 |              0.2333  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4675 | >20%                    |                 2 |              0.23375 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4695 | 10-15%                  |                 5 |              0.0939  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4707 | >20%                    |                 2 |              0.23535 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4752 | 5-10%                   |                 5 |              0.09504 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4791 | <5%                     |                10 |              0.04791 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4814 | 15-20%                  |                 5 |              0.09628 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4834 | 5-10%                   |                 5 |              0.09668 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.491  | >20%                    |                 2 |              0.2455  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4984 | <5%                     |                 5 |              0.09968 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5023 | >20%                    |                 5 |              0.10046 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.5044 |                         |                10 |              0.05044 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.507  | >20%                    |                 5 |              0.1014  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5111 | >20%                    |                 2 |              0.25555 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5112 | >20%                    |                 2 |              0.2556  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5118 | >20%                    |                 2 |              0.2559  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5155 | >20%                    |                 2 |              0.25775 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5201 | >20%                    |                 5 |              0.10402 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5234 | 10-15%                  |                 5 |              0.10468 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5246 | <5%                     |                 2 |              0.2623  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5274 | <5%                     |                 5 |              0.10548 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5346 | 5-10%                   |                 5 |              0.10692 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5365 | >20%                    |                 5 |              0.1073  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5406 | 10-15%                  |                 5 |              0.10812 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5473 | >20%                    |                 2 |              0.27365 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5563 | >20%                    |                 2 |              0.27815 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5578 | 5-10%                   |                 5 |              0.11156 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5604 | 15-20%                  |                 2 |              0.2802  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5638 | >20%                    |                 5 |              0.11276 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5682 | >20%                    |                 2 |              0.2841  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5683 | >20%                    |                 5 |              0.11366 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5689 | 5-10%                   |                 5 |              0.11378 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5773 | 5-10%                   |                 2 |              0.28865 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5884 | 5-10%                   |                10 |              0.05884 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5903 | 15-20%                  |                10 |              0.05903 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5976 | <5%                     |                 5 |              0.11952 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6003 | 10-15%                  |                 5 |              0.12006 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6083 | 5-10%                   |                 5 |              0.12166 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6109 | 10-15%                  |                 5 |              0.12218 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6244 | 15-20%                  |                 5 |              0.12488 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6249 | 10-15%                  |                10 |              0.06249 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6427 | >20%                    |                 5 |              0.12854 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6451 | >20%                    |                 5 |              0.12902 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6497 | >20%                    |                10 |              0.06497 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.655  | <5%                     |                10 |              0.0655  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6629 | 5-10%                   |                 5 |              0.13258 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6691 | >20%                    |                10 |              0.06691 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6692 | 10-15%                  |                 5 |              0.13384 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6754 | >20%                    |                 2 |              0.3377  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7054 | >20%                    |                 2 |              0.3527  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7067 | 5-10%                   |                 5 |              0.14134 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7148 | >20%                    |                 5 |              0.14296 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7171 | >20%                    |                10 |              0.07171 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7355 | >20%                    |                 5 |              0.1471  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7367 | 5-10%                   |                 5 |              0.14734 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7405 | 5-10%                   |                10 |              0.07405 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7599 | <5%                     |                 5 |              0.15198 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7602 | >20%                    |                 5 |              0.15204 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7637 | >20%                    |                10 |              0.07637 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7637 | <5%                     |                10 |              0.07637 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.777  | 15-20%                  |                10 |              0.0777  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7833 | >20%                    |                10 |              0.07833 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7926 | >20%                    |                 5 |              0.15852 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7974 | 10-15%                  |                10 |              0.07974 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7974 | 15-20%                  |                 2 |              0.3987  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7984 | >20%                    |                 5 |              0.15968 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8001 | >20%                    |                10 |              0.08001 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8005 | 5-10%                   |                10 |              0.08005 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8024 | 5-10%                   |                 2 |              0.4012  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.82   | 15-20%                  |                10 |              0.082   |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.822  | <5%                     |                10 |              0.0822  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8313 | >20%                    |                10 |              0.08313 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8436 | >20%                    |                10 |              0.08436 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8626 | <5%                     |                10 |              0.08626 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8691 | <5%                     |                10 |              0.08691 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.87   | >20%                    |                10 |              0.087   |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.876  | 10-15%                  |                10 |              0.0876  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8817 | <5%                     |                10 |              0.08817 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8917 | 5-10%                   |                10 |              0.08917 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9291 | >20%                    |                10 |              0.09291 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9386 | >20%                    |                10 |              0.09386 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9395 | >20%                    |                 5 |              0.1879  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9488 | 10-15%                  |                10 |              0.09488 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.9532 | 5-10%                   |                10 |              0.09532 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.957  | 5-10%                   |                10 |              0.0957  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9767 | >20%                    |                10 |              0.09767 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9899 | 10-15%                  |                10 |              0.09899 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.0039 | >20%                    |                 2 |              0.50195 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0235 | 15-20%                  |                10 |              0.10235 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0237 | >20%                    |                10 |              0.10237 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0303 | 15-20%                  |                10 |              0.10303 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.093  | <5%                     |                10 |              0.1093  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1016 | >20%                    |                10 |              0.11016 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1205 | 10-15%                  |                10 |              0.11205 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1258 | 10-15%                  |                 2 |              0.5629  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1647 | 5-10%                   |                 5 |              0.23294 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1653 | >20%                    |                10 |              0.11653 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.176  | 15-20%                  |                 5 |              0.2352  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1897 | 15-20%                  |                10 |              0.11897 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2213 | >20%                    |                 5 |              0.24426 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2607 | >20%                    |                 2 |              0.63035 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2846 | 10-15%                  |                 5 |              0.25692 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3254 | >20%                    |                 2 |              0.6627  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3435 | >20%                    |                10 |              0.13435 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3521 | >20%                    |                 5 |              0.27042 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4554 | >20%                    |                10 |              0.14554 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5592 | >20%                    |                10 |              0.15592 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7363 | >20%                    |                10 |              0.17363 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.789  | >20%                    |                10 |              0.1789  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0652 | 5-10%                   |                10 |              0.20652 |