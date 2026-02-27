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

Data correct as of 2026-02-27 02:30:33.091989, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1614 | >20%                    |                 2 |              0.0807  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.1944 | >20%                    |                 2 |              0.0972  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1946 | >20%                    |                 2 |              0.0973  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2388 | >20%                    |                 2 |              0.1194  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2474 | <5%                     |                 2 |              0.1237  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2491 | >20%                    |                 2 |              0.12455 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2567 | 15-20%                  |                 2 |              0.12835 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2595 | 10-15%                  |                 2 |              0.12975 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2608 | 10-15%                  |                 2 |              0.1304  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2623 | >20%                    |                 2 |              0.13115 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.276  | >20%                    |                 2 |              0.138   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2817 | >20%                    |                 2 |              0.14085 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2835 | 5-10%                   |                10 |              0.02835 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2842 | >20%                    |                 5 |              0.05684 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2963 | <5%                     |                10 |              0.02963 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3038 | <5%                     |                 5 |              0.06076 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3042 | 5-10%                   |                 2 |              0.1521  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3075 | >20%                    |                 2 |              0.15375 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3103 | 5-10%                   |                 2 |              0.15515 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3104 | >20%                    |                 2 |              0.1552  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3113 | >20%                    |                 2 |              0.15565 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.317  | >20%                    |                 5 |              0.0634  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3336 | >20%                    |                 5 |              0.06672 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3354 | >20%                    |                 2 |              0.1677  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.341  | 5-10%                   |                10 |              0.0341  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3423 | <5%                     |                10 |              0.03423 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3473 | >20%                    |                 5 |              0.06946 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3483 | >20%                    |                 5 |              0.06966 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3486 | 5-10%                   |                 5 |              0.06972 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3525 | 10-15%                  |                 2 |              0.17625 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3542 | <5%                     |                 5 |              0.07084 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3584 | >20%                    |                 5 |              0.07168 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3696 | 15-20%                  |                 2 |              0.1848  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3701 | 15-20%                  |                 2 |              0.18505 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3759 | 5-10%                   |                 2 |              0.18795 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3816 | >20%                    |                 5 |              0.07632 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.3839 | >20%                    |                 2 |              0.19195 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.39   | >20%                    |                 2 |              0.195   |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3902 | >20%                    |                 5 |              0.07804 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3913 | 15-20%                  |                 2 |              0.19565 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3926 | >20%                    |                 2 |              0.1963  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3947 | >20%                    |                 2 |              0.19735 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3947 | >20%                    |                 5 |              0.07894 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4054 | >20%                    |                10 |              0.04054 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4092 | >20%                    |                 5 |              0.08184 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4103 | 10-15%                  |                 5 |              0.08206 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4142 | <5%                     |                 2 |              0.2071  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.418  | 15-20%                  |                 2 |              0.209   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4181 | >20%                    |                10 |              0.04181 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4185 | 5-10%                   |                 2 |              0.20925 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4208 | >20%                    |                10 |              0.04208 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4309 | >20%                    |                 2 |              0.21545 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.432  | <5%                     |                 2 |              0.216   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4329 | >20%                    |                 2 |              0.21645 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4367 | 15-20%                  |                 5 |              0.08734 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4408 | >20%                    |                 2 |              0.2204  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4418 | 5-10%                   |                 2 |              0.2209  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4422 | <5%                     |                 2 |              0.2211  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4463 | 5-10%                   |                 2 |              0.22315 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4473 | >20%                    |                10 |              0.04473 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4478 | <5%                     |                10 |              0.04478 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4481 | >20%                    |                 5 |              0.08962 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4501 | >20%                    |                 5 |              0.09002 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4511 | <5%                     |                 5 |              0.09022 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4511 | 5-10%                   |                 2 |              0.22555 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4582 | >20%                    |                 2 |              0.2291  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.459  | >20%                    |                 5 |              0.0918  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4619 | >20%                    |                 2 |              0.23095 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4623 | >20%                    |                10 |              0.04623 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4626 | >20%                    |                 2 |              0.2313  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4631 | 5-10%                   |                 5 |              0.09262 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4681 | 5-10%                   |                 5 |              0.09362 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.4772 | 15-20%                  |                10 |              0.04772 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4812 | >20%                    |                 5 |              0.09624 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4828 | <5%                     |                 5 |              0.09656 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.488  | 15-20%                  |                 2 |              0.244   |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4956 | 15-20%                  |                 5 |              0.09912 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4983 | >20%                    |                 2 |              0.24915 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5149 | >20%                    |                 5 |              0.10298 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5223 | <5%                     |                10 |              0.05223 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5228 | >20%                    |                 2 |              0.2614  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5243 | >20%                    |                 2 |              0.26215 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5283 | >20%                    |                 5 |              0.10566 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5291 | >20%                    |                 5 |              0.10582 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5292 | <5%                     |                 5 |              0.10584 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5402 | >20%                    |                 5 |              0.10804 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5411 | >20%                    |                 5 |              0.10822 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5416 | >20%                    |                 5 |              0.10832 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5488 | <5%                     |                 5 |              0.10976 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5506 | 15-20%                  |                 5 |              0.11012 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5634 | 15-20%                  |                 5 |              0.11268 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5638 | 15-20%                  |                10 |              0.05638 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5641 | >20%                    |                10 |              0.05641 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5721 | >20%                    |                10 |              0.05721 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5736 | >20%                    |                10 |              0.05736 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5802 | 15-20%                  |                10 |              0.05802 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5979 | 5-10%                   |                 2 |              0.29895 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6015 | >20%                    |                10 |              0.06015 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6095 | <5%                     |                10 |              0.06095 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6177 | >20%                    |                 5 |              0.12354 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6178 | 15-20%                  |                 2 |              0.3089  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.618  | >20%                    |                 5 |              0.1236  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6296 | >20%                    |                 2 |              0.3148  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6327 | >20%                    |                 5 |              0.12654 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.637  | >20%                    |                 5 |              0.1274  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6402 | >20%                    |                10 |              0.06402 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.6413 |                         |                 2 |              0.32065 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.643  | >20%                    |                 2 |              0.3215  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6499 | 15-20%                  |                10 |              0.06499 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6553 | 10-15%                  |                 5 |              0.13106 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6564 | 5-10%                   |                 2 |              0.3282  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.6644 | >20%                    |                10 |              0.06644 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6669 | >20%                    |                 2 |              0.33345 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6674 | 5-10%                   |                 5 |              0.13348 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6689 | 5-10%                   |                 5 |              0.13378 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6815 | >20%                    |                 5 |              0.1363  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.682  | >20%                    |                 5 |              0.1364  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.688  | 5-10%                   |                 5 |              0.1376  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6972 | 10-15%                  |                10 |              0.06972 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7029 | <5%                     |                10 |              0.07029 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7062 | 10-15%                  |                10 |              0.07062 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7143 | >20%                    |                 5 |              0.14286 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7232 | >20%                    |                 5 |              0.14464 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7344 | >20%                    |                10 |              0.07344 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7366 | >20%                    |                10 |              0.07366 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7454 | >20%                    |                10 |              0.07454 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7465 | <5%                     |                10 |              0.07465 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.774  | >20%                    |                 5 |              0.1548  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7937 | >20%                    |                10 |              0.07937 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.794  | 15-20%                  |                10 |              0.0794  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8063 | >20%                    |                 2 |              0.40315 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8064 |                         |                 5 |              0.16128 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8158 | >20%                    |                10 |              0.08158 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8221 | 5-10%                   |                10 |              0.08221 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8289 | <5%                     |                 5 |              0.16578 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8347 | <5%                     |                10 |              0.08347 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8358 | <5%                     |                 5 |              0.16716 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8366 | >20%                    |                 5 |              0.16732 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8366 | >20%                    |                 2 |              0.4183  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8461 | >20%                    |                 5 |              0.16922 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8485 | <5%                     |                10 |              0.08485 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.854  | >20%                    |                 5 |              0.1708  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8564 | >20%                    |                10 |              0.08564 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8679 | >20%                    |                 2 |              0.43395 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8693 | >20%                    |                10 |              0.08693 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.88   | >20%                    |                 5 |              0.176   |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9044 | <5%                     |                10 |              0.09044 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9047 | 10-15%                  |                 2 |              0.45235 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.91   | 5-10%                   |                10 |              0.091   |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9162 | >20%                    |                10 |              0.09162 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9323 | >20%                    |                 2 |              0.46615 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.936  | <5%                     |                10 |              0.0936  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.944  | >20%                    |                 5 |              0.1888  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9729 | >20%                    |                10 |              0.09729 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9737 | >20%                    |                10 |              0.09737 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9828 | 10-15%                  |                10 |              0.09828 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0224 | >20%                    |                10 |              0.10224 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.0312 | <5%                     |                 2 |              0.5156  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0374 | 5-10%                   |                 5 |              0.20748 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0413 | >20%                    |                10 |              0.10413 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0517 | 10-15%                  |                 5 |              0.21034 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0687 | >20%                    |                 2 |              0.53435 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0692 | 5-10%                   |                10 |              0.10692 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0705 | >20%                    |                10 |              0.10705 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0723 | >20%                    |                10 |              0.10723 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0819 | >20%                    |                 5 |              0.21638 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0883 | >20%                    |                10 |              0.10883 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1244 | 15-20%                  |                10 |              0.11244 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1679 | 15-20%                  |                10 |              0.11679 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2309 | <5%                     |                10 |              0.12309 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.235  |                         |                10 |              0.1235  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2594 | >20%                    |                 2 |              0.6297  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2797 | >20%                    |                10 |              0.12797 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3131 | >20%                    |                10 |              0.13131 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4162 | >20%                    |                 5 |              0.28324 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4409 | >20%                    |                 2 |              0.72045 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4466 | 10-15%                  |                 5 |              0.28932 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6325 | 15-20%                  |                10 |              0.16325 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.659  | >20%                    |                10 |              0.1659  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7074 | >20%                    |                10 |              0.17074 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3336 | 10-15%                  |                10 |              0.23336 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.5003 | <5%                     |                 5 |              0.50006 |