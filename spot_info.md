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

Data correct as of 2026-07-24 02:56:54.743593, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1375 | >20%                    |                 2 |              0.06875 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1613 | >20%                    |                 2 |              0.08065 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1927 | >20%                    |                 2 |              0.09635 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2086 | 15-20%                  |                 2 |              0.1043  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2208 | >20%                    |                 2 |              0.1104  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2431 | >20%                    |                 2 |              0.12155 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2571 | >20%                    |                 2 |              0.12855 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2675 | >20%                    |                 2 |              0.13375 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2683 | >20%                    |                 2 |              0.13415 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2687 | 15-20%                  |                 5 |              0.05374 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2704 | >20%                    |                 2 |              0.1352  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2843 | >20%                    |                 2 |              0.14215 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2857 | 15-20%                  |                 2 |              0.14285 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2885 | 5-10%                   |                10 |              0.02885 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2886 | 10-15%                  |                 2 |              0.1443  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2925 | >20%                    |                 2 |              0.14625 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3032 | 15-20%                  |                 2 |              0.1516  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3156 | >20%                    |                 2 |              0.1578  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3204 | 15-20%                  |                 5 |              0.06408 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3204 | >20%                    |                 5 |              0.06408 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3374 | >20%                    |                 5 |              0.06748 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3476 | 5-10%                   |                10 |              0.03476 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3537 | >20%                    |                10 |              0.03537 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3548 | >20%                    |                 5 |              0.07096 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3594 | >20%                    |                 2 |              0.1797  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3662 | <5%                     |                 2 |              0.1831  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3827 | >20%                    |                 5 |              0.07654 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3859 | >20%                    |                 5 |              0.07718 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3887 | 15-20%                  |                 2 |              0.19435 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.3918 | >20%                    |                10 |              0.03918 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.397  | 10-15%                  |                 2 |              0.1985  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4059 | >20%                    |                 2 |              0.20295 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4093 | >20%                    |                 5 |              0.08186 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4113 | >20%                    |                 2 |              0.20565 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4154 | >20%                    |                 5 |              0.08308 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4166 | 5-10%                   |                10 |              0.04166 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4185 | >20%                    |                10 |              0.04185 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4244 | >20%                    |                10 |              0.04244 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4248 | 10-15%                  |                 2 |              0.2124  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4279 | 10-15%                  |                 2 |              0.21395 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4329 | >20%                    |                 5 |              0.08658 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4363 | >20%                    |                 5 |              0.08726 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4467 | >20%                    |                 5 |              0.08934 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4535 | >20%                    |                 2 |              0.22675 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4559 | >20%                    |                 2 |              0.22795 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4617 | >20%                    |                 2 |              0.23085 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.463  | >20%                    |                 2 |              0.2315  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4701 | >20%                    |                 2 |              0.23505 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4831 | >20%                    |                 5 |              0.09662 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4896 | 15-20%                  |                 5 |              0.09792 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4923 | <5%                     |                 2 |              0.24615 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4942 | >20%                    |                 5 |              0.09884 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4951 | 10-15%                  |                10 |              0.04951 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4957 | >20%                    |                10 |              0.04957 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4962 | <5%                     |                 2 |              0.2481  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.498  | >20%                    |                10 |              0.0498  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5091 | >20%                    |                 5 |              0.10182 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5201 | >20%                    |                 5 |              0.10402 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5269 | >20%                    |                 5 |              0.10538 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5283 | >20%                    |                 2 |              0.26415 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5333 | >20%                    |                 5 |              0.10666 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5499 | 15-20%                  |                 2 |              0.27495 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5568 | >20%                    |                 2 |              0.2784  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5584 | 10-15%                  |                 5 |              0.11168 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.56   | >20%                    |                 5 |              0.112   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5741 | >20%                    |                 5 |              0.11482 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5773 | 5-10%                   |                 2 |              0.28865 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5884 | >20%                    |                 5 |              0.11768 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.591  | >20%                    |                 5 |              0.1182  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6402 | >20%                    |                 5 |              0.12804 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6406 | 15-20%                  |                 5 |              0.12812 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6411 | >20%                    |                10 |              0.06411 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6469 | 5-10%                   |                 5 |              0.12938 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6479 | >20%                    |                 2 |              0.32395 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6516 | >20%                    |                 5 |              0.13032 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6551 | >20%                    |                 2 |              0.32755 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6657 | >20%                    |                 5 |              0.13314 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6684 | >20%                    |                10 |              0.06684 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6695 | >20%                    |                 5 |              0.1339  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6857 | >20%                    |                 5 |              0.13714 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.6955 |                         |                 2 |              0.34775 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7043 | 15-20%                  |                10 |              0.07043 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7053 | >20%                    |                10 |              0.07053 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.7107 | >20%                    |                 2 |              0.35535 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7186 | >20%                    |                 5 |              0.14372 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7222 | >20%                    |                10 |              0.07222 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7257 | <5%                     |                 5 |              0.14514 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7289 | >20%                    |                10 |              0.07289 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7298 | >20%                    |                10 |              0.07298 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7356 |                         |                 2 |              0.3678  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7547 | >20%                    |                 5 |              0.15094 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7629 | >20%                    |                10 |              0.07629 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7787 | 5-10%                   |                10 |              0.07787 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7859 | >20%                    |                 5 |              0.15718 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7966 | >20%                    |                10 |              0.07966 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7981 | <5%                     |                10 |              0.07981 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8086 | >20%                    |                10 |              0.08086 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8103 | 15-20%                  |                 2 |              0.40515 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8187 | >20%                    |                 2 |              0.40935 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8217 | >20%                    |                 5 |              0.16434 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8429 | >20%                    |                10 |              0.08429 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8467 | >20%                    |                 2 |              0.42335 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8508 | >20%                    |                 5 |              0.17016 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8573 | 15-20%                  |                10 |              0.08573 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8601 |                         |                 5 |              0.17202 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.867  | 10-15%                  |                 2 |              0.4335  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.868  | >20%                    |                 2 |              0.434   |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8775 | >20%                    |                 5 |              0.1755  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8781 | 10-15%                  |                 2 |              0.43905 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8836 | 15-20%                  |                10 |              0.08836 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8923 | 15-20%                  |                10 |              0.08923 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9143 | 5-10%                   |                10 |              0.09143 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9287 | >20%                    |                10 |              0.09287 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9314 | 5-10%                   |                 2 |              0.4657  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9316 | >20%                    |                 5 |              0.18632 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9426 | >20%                    |                10 |              0.09426 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9578 | >20%                    |                10 |              0.09578 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9611 | >20%                    |                10 |              0.09611 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9741 | >20%                    |                 5 |              0.19482 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9807 | 15-20%                  |                10 |              0.09807 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9977 | >20%                    |                10 |              0.09977 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0056 | >20%                    |                 5 |              0.20112 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0063 | >20%                    |                 5 |              0.20126 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0162 | >20%                    |                 5 |              0.20324 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0305 | >20%                    |                10 |              0.10305 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.031  | >20%                    |                 2 |              0.5155  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0675 |                         |                10 |              0.10675 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0728 | 5-10%                   |                 5 |              0.21456 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0906 | >20%                    |                 2 |              0.5453  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0928 | >20%                    |                10 |              0.10928 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1503 | >20%                    |                10 |              0.11503 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1518 | >20%                    |                 5 |              0.23036 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1721 | 10-15%                  |                 2 |              0.58605 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1857 | >20%                    |                10 |              0.11857 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.235  | 15-20%                  |                10 |              0.1235  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2567 | >20%                    |                10 |              0.12567 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3055 | 15-20%                  |                10 |              0.13055 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3462 |                         |                 5 |              0.26924 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3546 | 5-10%                   |                 2 |              0.6773  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4063 | >20%                    |                10 |              0.14063 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4134 | >20%                    |                 5 |              0.28268 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.4298 |                         |                10 |              0.14298 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4436 | >20%                    |                10 |              0.14436 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4596 | 5-10%                   |                10 |              0.14596 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.5274 | >20%                    |                 5 |              0.30548 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5615 | >20%                    |                10 |              0.15615 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5645 | 15-20%                  |                 5 |              0.3129  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5653 | 10-15%                  |                10 |              0.15653 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5893 | 15-20%                  |                10 |              0.15893 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6765 | >20%                    |                10 |              0.16765 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.967  | >20%                    |                10 |              0.1967  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.1544 | 5-10%                   |                 2 |              1.0772  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.261  | >20%                    |                 5 |              0.4522  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.5623 | >20%                    |                 5 |              0.51246 |