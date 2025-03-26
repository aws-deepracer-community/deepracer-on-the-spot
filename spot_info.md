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

Data correct as of 2025-03-26 01:44:43.758138, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1152 | 15-20%                  |                 2 |              0.0576  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.133  | 5-10%                   |                 5 |              0.0266  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | 10-15%                  |                 5 |              0.03178 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.163  | 10-15%                  |                 2 |              0.0815  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 5-10%                   |                 5 |              0.039   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.206  | 5-10%                   |                 2 |              0.103   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2243 | >20%                    |                 2 |              0.11215 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2302 | 15-20%                  |                 2 |              0.1151  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2322 | >20%                    |                 2 |              0.1161  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 5-10%                   |                10 |              0.02395 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2397 | >20%                    |                 2 |              0.11985 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2428 | 15-20%                  |                 2 |              0.1214  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2475 | 15-20%                  |                 2 |              0.12375 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2529 | 5-10%                   |                 2 |              0.12645 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2575 | 15-20%                  |                10 |              0.02575 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2747 | <5%                     |                 2 |              0.13735 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2816 | 5-10%                   |                 2 |              0.1408  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2832 | 15-20%                  |                 2 |              0.1416  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2853 | <5%                     |                 2 |              0.14265 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2872 | <5%                     |                 2 |              0.1436  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2914 | 10-15%                  |                 2 |              0.1457  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2963 | >20%                    |                 2 |              0.14815 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2991 | 5-10%                   |                 2 |              0.14955 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | 10-15%                  |                10 |              0.0301  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3027 | 10-15%                  |                10 |              0.03027 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3031 | >20%                    |                 2 |              0.15155 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3101 | 15-20%                  |                 2 |              0.15505 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3118 | 10-15%                  |                 5 |              0.06236 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3153 | 10-15%                  |                 2 |              0.15765 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3388 | 15-20%                  |                 5 |              0.06776 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3468 | <5%                     |                10 |              0.03468 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3483 | >20%                    |                 2 |              0.17415 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3527 | >20%                    |                 2 |              0.17635 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3528 | >20%                    |                 2 |              0.1764  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3544 | >20%                    |                10 |              0.03544 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3596 | >20%                    |                 2 |              0.1798  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3604 | >20%                    |                 2 |              0.1802  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3641 | 15-20%                  |                 5 |              0.07282 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3644 | 10-15%                  |                 5 |              0.07288 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3672 | >20%                    |                 5 |              0.07344 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3729 | >20%                    |                10 |              0.03729 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3734 | 10-15%                  |                10 |              0.03734 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3768 | >20%                    |                 2 |              0.1884  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3775 | 5-10%                   |                 5 |              0.0755  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3776 | <5%                     |                 2 |              0.1888  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.3992 | >20%                    |                 5 |              0.07984 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3997 | <5%                     |                 2 |              0.19985 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4014 | >20%                    |                 5 |              0.08028 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4076 | <5%                     |                 2 |              0.2038  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4079 | 15-20%                  |                 2 |              0.20395 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4084 | >20%                    |                 2 |              0.2042  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4087 | 15-20%                  |                 2 |              0.20435 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4126 | 15-20%                  |                 2 |              0.2063  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4127 | 5-10%                   |                 2 |              0.20635 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4175 | >20%                    |                 5 |              0.0835  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4186 | <5%                     |                 2 |              0.2093  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.428  | >20%                    |                 5 |              0.0856  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4305 | >20%                    |                 2 |              0.21525 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4315 | 5-10%                   |                 2 |              0.21575 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4343 | 5-10%                   |                 5 |              0.08686 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4356 | >20%                    |                 2 |              0.2178  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4396 | <5%                     |                 2 |              0.2198  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4436 | >20%                    |                 5 |              0.08872 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.4441 | >20%                    |                 2 |              0.22205 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4488 | >20%                    |                 5 |              0.08976 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4527 | >20%                    |                 5 |              0.09054 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4529 | <5%                     |                 5 |              0.09058 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.453  | >20%                    |                 5 |              0.0906  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4544 | >20%                    |                 2 |              0.2272  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4566 | 5-10%                   |                 2 |              0.2283  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4569 | 5-10%                   |                 5 |              0.09138 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4624 | 10-15%                  |                 5 |              0.09248 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.466  | 15-20%                  |                 5 |              0.0932  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4673 | 5-10%                   |                 5 |              0.09346 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4743 | >20%                    |                 5 |              0.09486 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4753 | >20%                    |                 2 |              0.23765 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4795 | 10-15%                  |                 5 |              0.0959  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4837 | 5-10%                   |                 5 |              0.09674 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4838 | 5-10%                   |                 5 |              0.09676 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4953 | >20%                    |                 5 |              0.09906 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5002 | >20%                    |                 2 |              0.2501  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5016 | >20%                    |                 5 |              0.10032 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.5032 | >20%                    |                10 |              0.05032 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5046 | <5%                     |                 2 |              0.2523  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5061 | >20%                    |                 2 |              0.25305 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5064 | 10-15%                  |                 5 |              0.10128 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5093 | >20%                    |                 5 |              0.10186 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5129 | >20%                    |                 5 |              0.10258 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5168 | >20%                    |                 5 |              0.10336 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5184 | >20%                    |                 5 |              0.10368 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5281 | 10-15%                  |                 5 |              0.10562 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5346 | <5%                     |                10 |              0.05346 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.5382 | <5%                     |                 5 |              0.10764 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5409 | >20%                    |                 2 |              0.27045 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5448 | >20%                    |                 2 |              0.2724  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5464 | 10-15%                  |                 5 |              0.10928 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5478 | 15-20%                  |                 5 |              0.10956 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5501 | 15-20%                  |                 2 |              0.27505 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.5527 | 15-20%                  |                10 |              0.05527 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5599 | 10-15%                  |                 5 |              0.11198 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5599 | 10-15%                  |                10 |              0.05599 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5602 | 5-10%                   |                 5 |              0.11204 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.563  | >20%                    |                 2 |              0.2815  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.573  | >20%                    |                 2 |              0.2865  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.575  | <5%                     |                 5 |              0.115   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5796 | >20%                    |                 5 |              0.11592 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5856 | >20%                    |                 2 |              0.2928  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.588  | <5%                     |                 5 |              0.1176  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5888 | >20%                    |                 5 |              0.11776 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6022 | <5%                     |                10 |              0.06022 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.619  | <5%                     |                10 |              0.0619  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6192 | 15-20%                  |                 5 |              0.12384 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6216 | >20%                    |                 5 |              0.12432 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6312 | >20%                    |                10 |              0.06312 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6359 | >20%                    |                10 |              0.06359 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6582 | <5%                     |                 2 |              0.3291  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6725 | >20%                    |                 5 |              0.1345  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6736 | 15-20%                  |                 2 |              0.3368  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6776 | <5%                     |                 5 |              0.13552 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.686  | 10-15%                  |                 5 |              0.1372  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6934 | >20%                    |                10 |              0.06934 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6968 | 10-15%                  |                 5 |              0.13936 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6984 | 5-10%                   |                10 |              0.06984 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7026 | >20%                    |                 5 |              0.14052 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7044 | >20%                    |                10 |              0.07044 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.717  | <5%                     |                10 |              0.0717  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.719  | >20%                    |                10 |              0.0719  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7212 | >20%                    |                10 |              0.07212 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7294 | 5-10%                   |                10 |              0.07294 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7387 | 5-10%                   |                10 |              0.07387 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7406 | <5%                     |                 5 |              0.14812 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7464 | >20%                    |                10 |              0.07464 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7489 | >20%                    |                 5 |              0.14978 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7576 | >20%                    |                10 |              0.07576 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7613 | 15-20%                  |                 5 |              0.15226 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7634 | <5%                     |                10 |              0.07634 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7642 | 10-15%                  |                 2 |              0.3821  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7679 | >20%                    |                 5 |              0.15358 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.7688 | >20%                    |                10 |              0.07688 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7811 | <5%                     |                10 |              0.07811 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.801  | <5%                     |                10 |              0.0801  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8107 | >20%                    |                10 |              0.08107 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8111 | <5%                     |                10 |              0.08111 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8155 | >20%                    |                 2 |              0.40775 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.8159 | >20%                    |                 2 |              0.40795 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8184 | 5-10%                   |                10 |              0.08184 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8329 | >20%                    |                10 |              0.08329 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8542 | 15-20%                  |                 5 |              0.17084 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8555 | 15-20%                  |                10 |              0.08555 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.856  | >20%                    |                10 |              0.0856  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8579 | 5-10%                   |                10 |              0.08579 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8649 | >20%                    |                 2 |              0.43245 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.869  | 15-20%                  |                10 |              0.0869  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8726 | <5%                     |                10 |              0.08726 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8798 | <5%                     |                10 |              0.08798 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9043 | >20%                    |                10 |              0.09043 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9211 | >20%                    |                10 |              0.09211 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9609 | 10-15%                  |                10 |              0.09609 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9684 | 5-10%                   |                10 |              0.09684 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0279 | 5-10%                   |                10 |              0.10279 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0439 | >20%                    |                 5 |              0.20878 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0547 | >20%                    |                10 |              0.10547 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0605 | 15-20%                  |                10 |              0.10605 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0808 | <5%                     |                10 |              0.10808 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1025 | >20%                    |                10 |              0.11025 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1552 | >20%                    |                 5 |              0.23104 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1781 | <5%                     |                10 |              0.11781 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.1948 | >20%                    |                10 |              0.11948 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1977 | 15-20%                  |                10 |              0.11977 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2296 | 15-20%                  |                10 |              0.12296 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2386 | >20%                    |                10 |              0.12386 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2695 | >20%                    |                 2 |              0.63475 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3019 | 5-10%                   |                 2 |              0.65095 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3041 | <5%                     |                 5 |              0.26082 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3163 | >20%                    |                 5 |              0.26326 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4451 | >20%                    |                10 |              0.14451 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4768 | >20%                    |                 5 |              0.29536 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5211 | >20%                    |                10 |              0.15211 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6744 | >20%                    |                10 |              0.16744 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9954 | <5%                     |                10 |              0.19954 |