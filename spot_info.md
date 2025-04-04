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

Data correct as of 2025-04-04 01:45:19.592302, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1216 | 15-20%                  |                 2 |              0.0608  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1277 | 5-10%                   |                 5 |              0.02554 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1353 | 10-15%                  |                 2 |              0.06765 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | 10-15%                  |                 5 |              0.03178 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 5-10%                   |                 5 |              0.039   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2007 | <5%                     |                 2 |              0.10035 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2165 | 15-20%                  |                 2 |              0.10825 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2201 | >20%                    |                 2 |              0.11005 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2365 | 15-20%                  |                 2 |              0.11825 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 10-15%                  |                10 |              0.02395 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 15-20%                  |                10 |              0.02419 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2432 | >20%                    |                 2 |              0.1216  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2481 | >20%                    |                 2 |              0.12405 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2496 | 15-20%                  |                 2 |              0.1248  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2603 | 10-15%                  |                 2 |              0.13015 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2689 | >20%                    |                 2 |              0.13445 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2781 | 5-10%                   |                 2 |              0.13905 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.28   | <5%                     |                 2 |              0.14    |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2878 | 10-15%                  |                10 |              0.02878 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2884 | <5%                     |                 2 |              0.1442  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2885 | 5-10%                   |                 2 |              0.14425 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2939 | 15-20%                  |                 5 |              0.05878 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | <5%                     |                10 |              0.0294  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2946 | 15-20%                  |                 2 |              0.1473  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2986 | <5%                     |                 2 |              0.1493  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2998 | 10-15%                  |                 2 |              0.1499  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3092 | 10-15%                  |                 5 |              0.06184 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3097 | >20%                    |                 2 |              0.15485 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3098 | 10-15%                  |                 2 |              0.1549  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3219 | 15-20%                  |                10 |              0.03219 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3327 | 10-15%                  |                 5 |              0.06654 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3458 | 10-15%                  |                 5 |              0.06916 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3491 | >20%                    |                 2 |              0.17455 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.352  | >20%                    |                 5 |              0.0704  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3523 | 5-10%                   |                 5 |              0.07046 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3575 | >20%                    |                 2 |              0.17875 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.361  | >20%                    |                 2 |              0.1805  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3672 | >20%                    |                10 |              0.03672 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3683 | <5%                     |                 2 |              0.18415 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3757 | >20%                    |                 2 |              0.18785 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3772 | >20%                    |                 2 |              0.1886  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3778 | <5%                     |                 2 |              0.1889  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3851 | >20%                    |                 2 |              0.19255 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3866 | >20%                    |                10 |              0.03866 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3965 | >20%                    |                 2 |              0.19825 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.398  | 10-15%                  |                 2 |              0.199   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3987 | >20%                    |                 5 |              0.07974 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4021 | >20%                    |                 5 |              0.08042 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4031 | 15-20%                  |                 2 |              0.20155 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4059 | >20%                    |                 2 |              0.20295 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4095 | >20%                    |                 5 |              0.0819  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.412  | 15-20%                  |                 2 |              0.206   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4152 | 10-15%                  |                10 |              0.04152 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4181 | <5%                     |                 2 |              0.20905 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.424  | >20%                    |                 2 |              0.212   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4263 | >20%                    |                 2 |              0.21315 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4308 | >20%                    |                 2 |              0.2154  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4361 | 5-10%                   |                 5 |              0.08722 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4405 | 10-15%                  |                 5 |              0.0881  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4469 | 10-15%                  |                 5 |              0.08938 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4477 | >20%                    |                 5 |              0.08954 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.457  | >20%                    |                 2 |              0.2285  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4578 | <5%                     |                 2 |              0.2289  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4645 | >20%                    |                10 |              0.04645 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4665 | <5%                     |                 5 |              0.0933  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4684 | 10-15%                  |                 2 |              0.2342  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4684 | 5-10%                   |                 5 |              0.09368 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4685 | >20%                    |                 5 |              0.0937  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4716 | >20%                    |                 5 |              0.09432 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4723 | >20%                    |                10 |              0.04723 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4727 | >20%                    |                 5 |              0.09454 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4787 | 5-10%                   |                 5 |              0.09574 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4802 | >20%                    |                 5 |              0.09604 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4805 | <5%                     |                 2 |              0.24025 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4822 | >20%                    |                 5 |              0.09644 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4833 | 5-10%                   |                 2 |              0.24165 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4882 | >20%                    |                 5 |              0.09764 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4887 | <5%                     |                10 |              0.04887 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4967 | >20%                    |                 5 |              0.09934 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5001 | >20%                    |                 5 |              0.10002 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5002 | >20%                    |                 2 |              0.2501  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5057 | >20%                    |                 2 |              0.25285 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5105 | >20%                    |                 5 |              0.1021  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5128 | >20%                    |                 5 |              0.10256 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5182 | 15-20%                  |                 5 |              0.10364 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5211 | 5-10%                   |                 2 |              0.26055 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5283 | >20%                    |                 5 |              0.10566 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5296 | 5-10%                   |                10 |              0.05296 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5352 | 5-10%                   |                 5 |              0.10704 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5418 | 10-15%                  |                 5 |              0.10836 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5432 | <5%                     |                 5 |              0.10864 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5438 | 15-20%                  |                 2 |              0.2719  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5451 | >20%                    |                 2 |              0.27255 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5481 | 15-20%                  |                 2 |              0.27405 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5529 | 5-10%                   |                 5 |              0.11058 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.5582 | >20%                    |                 2 |              0.2791  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5692 | 15-20%                  |                 5 |              0.11384 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.572  | >20%                    |                 5 |              0.1144  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5753 | >20%                    |                 2 |              0.28765 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5841 | >20%                    |                 2 |              0.29205 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5847 | 5-10%                   |                 5 |              0.11694 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5894 | 15-20%                  |                 5 |              0.11788 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5903 | <5%                     |                 5 |              0.11806 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5904 | >20%                    |                 5 |              0.11808 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.591  | <5%                     |                10 |              0.0591  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.5934 | <5%                     |                 5 |              0.11868 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5947 | >20%                    |                 2 |              0.29735 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5966 | >20%                    |                 5 |              0.11932 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6025 | <5%                     |                10 |              0.06025 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6117 | >20%                    |                 5 |              0.12234 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.616  | >20%                    |                10 |              0.0616  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6344 | 10-15%                  |                 5 |              0.12688 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6408 | 10-15%                  |                10 |              0.06408 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6428 | >20%                    |                10 |              0.06428 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6487 | >20%                    |                10 |              0.06487 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6511 | 10-15%                  |                 5 |              0.13022 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6569 | >20%                    |                10 |              0.06569 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6599 | >20%                    |                 5 |              0.13198 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6623 | <5%                     |                 5 |              0.13246 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6788 | 10-15%                  |                 5 |              0.13576 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6809 | >20%                    |                10 |              0.06809 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6828 | 10-15%                  |                 2 |              0.3414  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6953 | >20%                    |                 2 |              0.34765 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6972 | >20%                    |                 5 |              0.13944 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7052 | >20%                    |                 5 |              0.14104 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.7096 | 10-15%                  |                10 |              0.07096 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7289 | <5%                     |                10 |              0.07289 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7358 | >20%                    |                10 |              0.07358 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7473 | <5%                     |                 2 |              0.37365 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.753  | >20%                    |                10 |              0.0753  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7549 | >20%                    |                 2 |              0.37745 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.769  | 15-20%                  |                 5 |              0.1538  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7708 | >20%                    |                10 |              0.07708 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7712 | >20%                    |                 5 |              0.15424 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7722 | 15-20%                  |                 5 |              0.15444 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7778 | >20%                    |                 2 |              0.3889  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7822 | <5%                     |                 5 |              0.15644 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7865 | <5%                     |                10 |              0.07865 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7896 | <5%                     |                10 |              0.07896 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7925 | 10-15%                  |                10 |              0.07925 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7982 | 5-10%                   |                10 |              0.07982 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8075 | 10-15%                  |                10 |              0.08075 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8235 | 15-20%                  |                10 |              0.08235 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8318 | <5%                     |                10 |              0.08318 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.836  | <5%                     |                10 |              0.0836  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8402 | >20%                    |                10 |              0.08402 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8448 | <5%                     |                10 |              0.08448 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8494 | >20%                    |                10 |              0.08494 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8503 | 15-20%                  |                10 |              0.08503 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8516 | 5-10%                   |                10 |              0.08516 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8575 | >20%                    |                10 |              0.08575 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8595 | 10-15%                  |                10 |              0.08595 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8707 | >20%                    |                10 |              0.08707 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8758 | 15-20%                  |                 5 |              0.17516 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.892  | <5%                     |                10 |              0.0892  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9144 | >20%                    |                 2 |              0.4572  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9556 | >20%                    |                 5 |              0.19112 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9708 | >20%                    |                 5 |              0.19416 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9711 | 5-10%                   |                10 |              0.09711 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9736 | 10-15%                  |                 2 |              0.4868  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9826 | 10-15%                  |                10 |              0.09826 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9829 | >20%                    |                10 |              0.09829 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9875 | 15-20%                  |                10 |              0.09875 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0615 | >20%                    |                10 |              0.10615 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1053 | <5%                     |                10 |              0.11053 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1504 | 15-20%                  |                10 |              0.11504 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1657 | >20%                    |                10 |              0.11657 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1665 | 15-20%                  |                10 |              0.11665 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1693 | <5%                     |                10 |              0.11693 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.177  | >20%                    |                 5 |              0.2354  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.209  | <5%                     |                 5 |              0.2418  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2617 | >20%                    |                 2 |              0.63085 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3019 | 15-20%                  |                10 |              0.13019 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3641 | >20%                    |                10 |              0.13641 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3795 | >20%                    |                 5 |              0.2759  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4476 | 5-10%                   |                 2 |              0.7238  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5882 | >20%                    |                10 |              0.15882 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6306 | 15-20%                  |                10 |              0.16306 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6431 | >20%                    |                10 |              0.16431 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.883  | <5%                     |                10 |              0.1883  |