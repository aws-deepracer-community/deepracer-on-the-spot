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

Data correct as of 2026-08-28 10:26:23.038349, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.148  | >20%                    |                 2 |              0.074   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1792 | 15-20%                  |                 2 |              0.0896  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2069 | 15-20%                  |                 2 |              0.10345 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2117 | >20%                    |                 2 |              0.10585 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2126 | >20%                    |                 2 |              0.1063  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2273 | 10-15%                  |                 2 |              0.11365 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2346 | >20%                    |                 2 |              0.1173  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2549 | 5-10%                   |                10 |              0.02549 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2563 | >20%                    |                 2 |              0.12815 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2577 | >20%                    |                 5 |              0.05154 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2578 | 10-15%                  |                 2 |              0.1289  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2594 | 15-20%                  |                 2 |              0.1297  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2681 | >20%                    |                 2 |              0.13405 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2797 | >20%                    |                 2 |              0.13985 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3127 | >20%                    |                 2 |              0.15635 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3181 | >20%                    |                 2 |              0.15905 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3201 | 15-20%                  |                 5 |              0.06402 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3361 | >20%                    |                 5 |              0.06722 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3364 | >20%                    |                 5 |              0.06728 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3402 | 5-10%                   |                10 |              0.03402 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3403 | >20%                    |                 2 |              0.17015 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3483 | <5%                     |                 2 |              0.17415 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3533 | 10-15%                  |                 2 |              0.17665 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3559 | >20%                    |                 2 |              0.17795 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3618 | 15-20%                  |                 5 |              0.07236 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3634 | >20%                    |                 5 |              0.07268 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3675 | >20%                    |                 5 |              0.0735  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3706 | >20%                    |                 5 |              0.07412 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3721 | >20%                    |                 5 |              0.07442 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3802 | >20%                    |                 2 |              0.1901  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3813 | <5%                     |                 2 |              0.19065 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3906 | >20%                    |                 5 |              0.07812 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3917 | >20%                    |                10 |              0.03917 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3993 | >20%                    |                 2 |              0.19965 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4019 | 15-20%                  |                 2 |              0.20095 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4077 | >20%                    |                 2 |              0.20385 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4094 | >20%                    |                10 |              0.04094 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.412  | 10-15%                  |                 2 |              0.206   |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4281 | >20%                    |                10 |              0.04281 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4309 | >20%                    |                 5 |              0.08618 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4326 | >20%                    |                10 |              0.04326 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4344 | >20%                    |                 2 |              0.2172  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4359 | >20%                    |                 5 |              0.08718 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4367 | 15-20%                  |                 5 |              0.08734 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4395 | >20%                    |                 2 |              0.21975 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4458 | >20%                    |                 2 |              0.2229  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4539 | >20%                    |                 5 |              0.09078 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4555 | >20%                    |                10 |              0.04555 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4596 | >20%                    |                 5 |              0.09192 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4637 | >20%                    |                 5 |              0.09274 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.47   |                         |                 2 |              0.235   |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4762 | >20%                    |                 5 |              0.09524 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4779 | 15-20%                  |                 2 |              0.23895 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4854 | <5%                     |                 5 |              0.09708 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5011 | >20%                    |                 5 |              0.10022 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5111 | >20%                    |                10 |              0.05111 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5144 | >20%                    |                 5 |              0.10288 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5153 | 15-20%                  |                10 |              0.05153 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5185 | <5%                     |                 2 |              0.25925 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5241 | >20%                    |                 5 |              0.10482 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5265 | >20%                    |                 5 |              0.1053  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5289 | 5-10%                   |                 2 |              0.26445 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5431 | >20%                    |                 2 |              0.27155 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5465 | >20%                    |                 2 |              0.27325 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5571 | >20%                    |                10 |              0.05571 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5607 | >20%                    |                10 |              0.05607 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5633 | >20%                    |                 5 |              0.11266 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.572  | >20%                    |                 2 |              0.286   |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.5821 |                         |                 5 |              0.11642 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5854 | >20%                    |                 5 |              0.11708 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5948 | >20%                    |                 5 |              0.11896 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5952 | >20%                    |                 5 |              0.11904 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6011 | 10-15%                  |                10 |              0.06011 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6076 | 10-15%                  |                 5 |              0.12152 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6188 | >20%                    |                10 |              0.06188 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6218 | >20%                    |                 5 |              0.12436 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6307 | >20%                    |                 2 |              0.31535 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6364 | 5-10%                   |                 5 |              0.12728 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6469 | >20%                    |                 5 |              0.12938 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6478 | 5-10%                   |                10 |              0.06478 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6493 | >20%                    |                 2 |              0.32465 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.654  | >20%                    |                 2 |              0.327   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6627 | >20%                    |                 5 |              0.13254 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6852 | 15-20%                  |                10 |              0.06852 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.707  | >20%                    |                 2 |              0.3535  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7176 | >20%                    |                10 |              0.07176 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7207 | >20%                    |                 2 |              0.36035 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7247 | >20%                    |                10 |              0.07247 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7276 | 5-10%                   |                10 |              0.07276 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7391 | 15-20%                  |                 2 |              0.36955 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.756  | >20%                    |                10 |              0.0756  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.7645 | >20%                    |                 2 |              0.38225 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7784 | 15-20%                  |                10 |              0.07784 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7809 | 5-10%                   |                10 |              0.07809 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.781  | >20%                    |                 5 |              0.1562  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7952 | >20%                    |                10 |              0.07952 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8013 | >20%                    |                10 |              0.08013 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8063 | >20%                    |                10 |              0.08063 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8105 | >20%                    |                 5 |              0.1621  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8169 | >20%                    |                10 |              0.08169 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8194 | <5%                     |                10 |              0.08194 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8228 | >20%                    |                10 |              0.08228 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8275 | 15-20%                  |                10 |              0.08275 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8371 | 10-15%                  |                 2 |              0.41855 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8406 | >20%                    |                 5 |              0.16812 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8433 | >20%                    |                10 |              0.08433 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8589 | >20%                    |                 5 |              0.17178 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8595 | >20%                    |                10 |              0.08595 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8643 | >20%                    |                 5 |              0.17286 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8788 | >20%                    |                10 |              0.08788 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.919  |                         |                10 |              0.0919  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9254 |                         |                 2 |              0.4627  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9256 | 5-10%                   |                 2 |              0.4628  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9356 | 10-15%                  |                 2 |              0.4678  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9416 | >20%                    |                 2 |              0.4708  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9616 | >20%                    |                10 |              0.09616 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9681 | 5-10%                   |                 5 |              0.19362 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9706 | >20%                    |                 5 |              0.19412 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9869 | >20%                    |                10 |              0.09869 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9925 | 15-20%                  |                10 |              0.09925 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9951 | >20%                    |                10 |              0.09951 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0219 | >20%                    |                10 |              0.10219 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      1.0237 | >20%                    |                 5 |              0.20474 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0267 | >20%                    |                10 |              0.10267 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.033  | >20%                    |                 5 |              0.2066  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0754 | 10-15%                  |                 2 |              0.5377  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0832 | 15-20%                  |                10 |              0.10832 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0881 | >20%                    |                 5 |              0.21762 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.099  | 5-10%                   |                10 |              0.1099  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1002 | >20%                    |                 5 |              0.22004 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1069 | >20%                    |                10 |              0.11069 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1211 | >20%                    |                 5 |              0.22422 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.128  | >20%                    |                 5 |              0.2256  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.1571 | >20%                    |                 5 |              0.23142 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.158  | >20%                    |                 2 |              0.579   |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2071 | 15-20%                  |                10 |              0.12071 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2173 | >20%                    |                10 |              0.12173 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2393 | >20%                    |                10 |              0.12393 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.2526 |                         |                 2 |              0.6263  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3048 | >20%                    |                 5 |              0.26096 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3304 |                         |                 5 |              0.26608 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.3797 |                         |                 5 |              0.27594 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.3928 |                         |                10 |              0.13928 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.4167 | >20%                    |                10 |              0.14167 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4338 | >20%                    |                 5 |              0.28676 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4512 | 10-15%                  |                10 |              0.14512 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5441 | 15-20%                  |                 5 |              0.30882 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5798 | >20%                    |                10 |              0.15798 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6245 |                         |                10 |              0.16245 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6424 | 15-20%                  |                10 |              0.16424 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.721  | >20%                    |                10 |              0.1721  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.8978 | 5-10%                   |                 2 |              0.9489  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9054 | 5-10%                   |                 2 |              0.9527  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      2.2647 | >20%                    |                10 |              0.22647 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.4933 | >20%                    |                 5 |              0.49866 |