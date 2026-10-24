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

Data correct as of 2026-10-24 03:57:18.926553, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0912 | >20%                    |                 2 |              0.0456  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.159  | 10-15%                  |                 2 |              0.0795  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.161  | 15-20%                  |                 5 |              0.0322  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1677 | 15-20%                  |                 2 |              0.08385 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2084 | >20%                    |                 5 |              0.04168 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2193 | >20%                    |                 2 |              0.10965 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.248  | >20%                    |                 2 |              0.124   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2553 | >20%                    |                 2 |              0.12765 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2668 | >20%                    |                 5 |              0.05336 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.267  | >20%                    |                 2 |              0.1335  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2812 | >20%                    |                 5 |              0.05624 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3004 | >20%                    |                 2 |              0.1502  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3105 | >20%                    |                 2 |              0.15525 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3125 | >20%                    |                 2 |              0.15625 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3251 | >20%                    |                 2 |              0.16255 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3256 | 15-20%                  |                 2 |              0.1628  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3442 | >20%                    |                 2 |              0.1721  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3529 | >20%                    |                 2 |              0.17645 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3604 | >20%                    |                 2 |              0.1802  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3701 | 10-15%                  |                 2 |              0.18505 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3773 | >20%                    |                 5 |              0.07546 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3783 | 15-20%                  |                 2 |              0.18915 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3788 | 15-20%                  |                 2 |              0.1894  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3918 | >20%                    |                 5 |              0.07836 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3939 | <5%                     |                 2 |              0.19695 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3965 | >20%                    |                 5 |              0.0793  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.405  | >20%                    |                10 |              0.0405  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4052 | >20%                    |                 2 |              0.2026  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4228 | >20%                    |                 5 |              0.08456 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4246 | >20%                    |                 5 |              0.08492 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4251 | >20%                    |                 5 |              0.08502 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4315 | >20%                    |                10 |              0.04315 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4315 | >20%                    |                 2 |              0.21575 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4376 | >20%                    |                 5 |              0.08752 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4411 | <5%                     |                10 |              0.04411 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4668 | >20%                    |                 2 |              0.2334  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4698 | >20%                    |                 5 |              0.09396 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4699 | >20%                    |                 5 |              0.09398 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4758 | >20%                    |                 2 |              0.2379  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4797 | 10-15%                  |                 2 |              0.23985 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.484  | >20%                    |                 2 |              0.242   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4904 | >20%                    |                 2 |              0.2452  |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4943 |                         |                 2 |              0.24715 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5116 | >20%                    |                10 |              0.05116 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5141 | >20%                    |                 5 |              0.10282 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5173 | >20%                    |                 5 |              0.10346 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.5206 |                         |                10 |              0.05206 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5214 | >20%                    |                 5 |              0.10428 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5273 | 5-10%                   |                10 |              0.05273 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5442 | >20%                    |                10 |              0.05442 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5481 | >20%                    |                 2 |              0.27405 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5493 | >20%                    |                 5 |              0.10986 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5592 | >20%                    |                 2 |              0.2796  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5606 | >20%                    |                 2 |              0.2803  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5774 | >20%                    |                 5 |              0.11548 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.581  | >20%                    |                 5 |              0.1162  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5887 | 15-20%                  |                 2 |              0.29435 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5914 | 10-15%                  |                 5 |              0.11828 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6105 | >20%                    |                 2 |              0.30525 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6164 | >20%                    |                 5 |              0.12328 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6164 | 10-15%                  |                 2 |              0.3082  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6278 | 5-10%                   |                10 |              0.06278 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6391 | >20%                    |                 5 |              0.12782 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6435 | <5%                     |                 2 |              0.32175 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6557 | >20%                    |                 2 |              0.32785 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6643 | 5-10%                   |                 2 |              0.33215 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6643 | >20%                    |                 5 |              0.13286 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.673  | >20%                    |                10 |              0.0673  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6751 | >20%                    |                 5 |              0.13502 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6759 | <5%                     |                 2 |              0.33795 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6795 | >20%                    |                 5 |              0.1359  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6938 | 15-20%                  |                 2 |              0.3469  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6941 | >20%                    |                 5 |              0.13882 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7064 | >20%                    |                 5 |              0.14128 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7293 | 10-15%                  |                10 |              0.07293 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.734  | 15-20%                  |                 5 |              0.1468  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7443 | >20%                    |                 5 |              0.14886 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.751  | >20%                    |                10 |              0.0751  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7655 | 15-20%                  |                10 |              0.07655 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7967 | >20%                    |                10 |              0.07967 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7968 | >20%                    |                10 |              0.07968 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8025 | 15-20%                  |                10 |              0.08025 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8189 | 5-10%                   |                10 |              0.08189 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8296 | >20%                    |                 5 |              0.16592 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8323 | 15-20%                  |                10 |              0.08323 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8341 | >20%                    |                10 |              0.08341 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8427 | >20%                    |                 5 |              0.16854 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8444 | 10-15%                  |                 2 |              0.4222  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8469 | 15-20%                  |                 5 |              0.16938 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8477 | >20%                    |                 2 |              0.42385 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8605 | 10-15%                  |                 2 |              0.43025 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8642 | >20%                    |                10 |              0.08642 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8903 | >20%                    |                10 |              0.08903 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8941 | >20%                    |                 5 |              0.17882 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.8952 | >20%                    |                 5 |              0.17904 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.902  | >20%                    |                10 |              0.0902  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9102 | <5%                     |                 5 |              0.18204 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.9128 | 5-10%                   |                 5 |              0.18256 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9316 | >20%                    |                 5 |              0.18632 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9374 | >20%                    |                10 |              0.09374 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9395 | >20%                    |                10 |              0.09395 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9643 | >20%                    |                 5 |              0.19286 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.984  | >20%                    |                10 |              0.0984  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9931 | >20%                    |                10 |              0.09931 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9955 | 15-20%                  |                10 |              0.09955 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0221 | 15-20%                  |                10 |              0.10221 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0253 | >20%                    |                 5 |              0.20506 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0376 | >20%                    |                10 |              0.10376 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      1.0552 |                         |                 5 |              0.21104 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0749 | >20%                    |                 5 |              0.21498 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1168 | 5-10%                   |                10 |              0.11168 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1287 | >20%                    |                10 |              0.11287 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1425 | >20%                    |                 5 |              0.2285  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.1676 | >20%                    |                 5 |              0.23352 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.19   | >20%                    |                 2 |              0.595   |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2057 | >20%                    |                10 |              0.12057 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2057 | >20%                    |                10 |              0.12057 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.2681 | >20%                    |                10 |              0.12681 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2801 | >20%                    |                10 |              0.12801 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3036 | 15-20%                  |                10 |              0.13036 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.3441 | >20%                    |                10 |              0.13441 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3457 | >20%                    |                 2 |              0.67285 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3582 | 15-20%                  |                10 |              0.13582 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3589 |                         |                 5 |              0.27178 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3752 | >20%                    |                10 |              0.13752 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3769 | 10-15%                  |                10 |              0.13769 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.3782 |                         |                 2 |              0.6891  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.4224 | >20%                    |                 2 |              0.7112  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4332 | >20%                    |                 5 |              0.28664 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4466 | >20%                    |                10 |              0.14466 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.4602 | >20%                    |                 5 |              0.29204 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.505  | 5-10%                   |                 5 |              0.301   |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5098 | 5-10%                   |                 2 |              0.7549  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.5142 |                         |                10 |              0.15142 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.5301 |                         |                 2 |              0.76505 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      1.5758 | >20%                    |                 2 |              0.7879  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.614  | >20%                    |                10 |              0.1614  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.619  | >20%                    |                 2 |              0.8095  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7403 | >20%                    |                 5 |              0.34806 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.7959 | 10-15%                  |                 2 |              0.89795 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.8036 | 5-10%                   |                 2 |              0.9018  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8306 | >20%                    |                10 |              0.18306 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8377 | >20%                    |                10 |              0.18377 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.8893 | 15-20%                  |                10 |              0.18893 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0989 | 15-20%                  |                 5 |              0.41978 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.1489 | >20%                    |                10 |              0.21489 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.224  | 5-10%                   |                 2 |              1.112   |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2379 | 5-10%                   |                10 |              0.22379 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.3226 | >20%                    |                 5 |              0.46452 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      2.4504 |                         |                 5 |              0.49008 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.4631 |                         |                10 |              0.24631 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6036 | >20%                    |                10 |              0.26036 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0751 | >20%                    |                10 |              0.30751 |