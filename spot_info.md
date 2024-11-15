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

Data correct as of 2024-11-15 01:42:44.873332, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1573 | >20%                    |                 5 |              0.03146 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 5-10%                   |                 2 |              0.0831  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1803 | 10-15%                  |                 2 |              0.09015 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2128 | 15-20%                  |                 2 |              0.1064  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2184 | 5-10%                   |                 2 |              0.1092  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 10-15%                  |                 2 |              0.1121  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2433 | 5-10%                   |                 2 |              0.12165 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.247  | <5%                     |                 2 |              0.1235  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.2507 | >20%                    |                 5 |              0.05014 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2617 | 5-10%                   |                 2 |              0.13085 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2662 | 5-10%                   |                 2 |              0.1331  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.272  | 5-10%                   |                 2 |              0.136   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2758 | <5%                     |                 2 |              0.1379  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2811 | <5%                     |                 2 |              0.14055 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.2904 | 5-10%                   |                 2 |              0.1452  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | <5%                     |                 5 |              0.06008 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3066 | <5%                     |                10 |              0.03066 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3145 | <5%                     |                 2 |              0.15725 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3221 | <5%                     |                 5 |              0.06442 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3286 | 15-20%                  |                 2 |              0.1643  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3432 | 5-10%                   |                 2 |              0.1716  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3465 | >20%                    |                 2 |              0.17325 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3491 | <5%                     |                 2 |              0.17455 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3541 | 15-20%                  |                 2 |              0.17705 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3577 | <5%                     |                 2 |              0.17885 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3692 | >20%                    |                 2 |              0.1846  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3736 | <5%                     |                 5 |              0.07472 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3782 | >20%                    |                 5 |              0.07564 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3809 | 15-20%                  |                 5 |              0.07618 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.388  | 5-10%                   |                 2 |              0.194   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3961 | >20%                    |                 2 |              0.19805 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.3966 | 5-10%                   |                 5 |              0.07932 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3969 | >20%                    |                 2 |              0.19845 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4042 | 10-15%                  |                 5 |              0.08084 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4155 | >20%                    |                 2 |              0.20775 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4195 | 5-10%                   |                 2 |              0.20975 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4198 | 5-10%                   |                 2 |              0.2099  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4219 | 5-10%                   |                 2 |              0.21095 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4296 | 5-10%                   |                 5 |              0.08592 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4309 | 10-15%                  |                 2 |              0.21545 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4368 | <5%                     |                 2 |              0.2184  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4415 | <5%                     |                 5 |              0.0883  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4475 | 10-15%                  |                 5 |              0.0895  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4503 | 10-15%                  |                 5 |              0.09006 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4509 | 15-20%                  |                 5 |              0.09018 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | 5-10%                   |                10 |              0.04529 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4533 | 5-10%                   |                 5 |              0.09066 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4607 | >20%                    |                 2 |              0.23035 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4677 | 15-20%                  |                 5 |              0.09354 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.468  | 15-20%                  |                 5 |              0.0936  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4689 | 10-15%                  |                 5 |              0.09378 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4703 | >20%                    |                 2 |              0.23515 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.477  | <5%                     |                 2 |              0.2385  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4779 | 15-20%                  |                 5 |              0.09558 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4815 | >20%                    |                 5 |              0.0963  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4836 | <5%                     |                 2 |              0.2418  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4991 | 5-10%                   |                 2 |              0.24955 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4996 | 5-10%                   |                 5 |              0.09992 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.501  | <5%                     |                 2 |              0.2505  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.503  | 5-10%                   |                 2 |              0.2515  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5115 | <5%                     |                 5 |              0.1023  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5214 | 10-15%                  |                 2 |              0.2607  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5236 | >20%                    |                10 |              0.05236 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.529  | <5%                     |                 5 |              0.1058  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5489 | 5-10%                   |                 5 |              0.10978 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5504 | 5-10%                   |                 5 |              0.11008 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5508 | 15-20%                  |                 5 |              0.11016 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5519 | <5%                     |                10 |              0.05519 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5572 | >20%                    |                 2 |              0.2786  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.561  | >20%                    |                 5 |              0.1122  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5648 | 10-15%                  |                 5 |              0.11296 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5662 | >20%                    |                 5 |              0.11324 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5678 | 10-15%                  |                10 |              0.05678 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.571  | 15-20%                  |                10 |              0.0571  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.578  | 15-20%                  |                 2 |              0.289   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.579  | >20%                    |                10 |              0.0579  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5851 | >20%                    |                 5 |              0.11702 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.598  | >20%                    |                10 |              0.0598  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6015 | 5-10%                   |                10 |              0.06015 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6137 | 5-10%                   |                 5 |              0.12274 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6202 | <5%                     |                 5 |              0.12404 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6361 | >20%                    |                 5 |              0.12722 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6476 | 5-10%                   |                10 |              0.06476 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6567 | <5%                     |                 5 |              0.13134 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6676 | >20%                    |                 5 |              0.13352 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6776 | >20%                    |                 2 |              0.3388  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6798 | 15-20%                  |                 5 |              0.13596 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6817 | >20%                    |                10 |              0.06817 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6903 | >20%                    |                10 |              0.06903 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6918 | <5%                     |                 5 |              0.13836 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7047 | 5-10%                   |                 5 |              0.14094 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.713  | >20%                    |                10 |              0.0713  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7372 | <5%                     |                10 |              0.07372 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7398 | 5-10%                   |                10 |              0.07398 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7439 | 15-20%                  |                 5 |              0.14878 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7518 | 10-15%                  |                10 |              0.07518 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7793 | 15-20%                  |                10 |              0.07793 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8013 | >20%                    |                10 |              0.08013 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8019 | <5%                     |                 5 |              0.16038 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8054 | <5%                     |                10 |              0.08054 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8097 | 5-10%                   |                10 |              0.08097 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8118 | <5%                     |                 2 |              0.4059  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.8121 | 5-10%                   |                 5 |              0.16242 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8204 | 15-20%                  |                10 |              0.08204 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8329 | >20%                    |                10 |              0.08329 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.837  | 10-15%                  |                10 |              0.0837  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.848  | 10-15%                  |                10 |              0.0848  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.856  | <5%                     |                10 |              0.0856  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8584 | 5-10%                   |                10 |              0.08584 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8661 | >20%                    |                 5 |              0.17322 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8665 | 5-10%                   |                10 |              0.08665 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8926 | 15-20%                  |                10 |              0.08926 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.913  | 5-10%                   |                10 |              0.0913  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9698 | <5%                     |                10 |              0.09698 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9802 | <5%                     |                10 |              0.09802 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0005 | <5%                     |                10 |              0.10005 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0035 | 5-10%                   |                10 |              0.10035 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0263 | 15-20%                  |                10 |              0.10263 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0454 | <5%                     |                10 |              0.10454 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0521 | >20%                    |                10 |              0.10521 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0551 | >20%                    |                10 |              0.10551 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0702 | <5%                     |                10 |              0.10702 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1301 | 10-15%                  |                10 |              0.11301 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.139  | 15-20%                  |                10 |              0.1139  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3592 | >20%                    |                10 |              0.13592 |