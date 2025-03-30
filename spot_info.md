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

Data correct as of 2025-03-30 01:52:10.609929, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1306 | 15-20%                  |                 2 |              0.0653  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1344 | 5-10%                   |                 5 |              0.02688 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1536 | 10-15%                  |                 2 |              0.0768  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | 10-15%                  |                 5 |              0.03178 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 5-10%                   |                 5 |              0.039   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2007 | <5%                     |                 2 |              0.10035 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.209  | >20%                    |                 2 |              0.1045  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.225  | 15-20%                  |                 2 |              0.1125  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 10-15%                  |                10 |              0.02395 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2416 | >20%                    |                 2 |              0.1208  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 15-20%                  |                10 |              0.02419 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2431 | 15-20%                  |                 2 |              0.12155 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2435 | 15-20%                  |                 2 |              0.12175 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2519 | >20%                    |                 2 |              0.12595 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2552 | 10-15%                  |                 2 |              0.1276  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2779 | <5%                     |                 2 |              0.13895 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2782 | 5-10%                   |                 2 |              0.1391  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.287  | <5%                     |                 2 |              0.1435  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2873 | 10-15%                  |                10 |              0.02873 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2931 | >20%                    |                 2 |              0.14655 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.294  | <5%                     |                10 |              0.0294  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2946 | 5-10%                   |                 2 |              0.1473  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.296  | 10-15%                  |                 2 |              0.148   |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2981 | <5%                     |                 2 |              0.14905 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3023 | 15-20%                  |                10 |              0.03023 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3056 | >20%                    |                 2 |              0.1528  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.306  | 15-20%                  |                 2 |              0.153   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3135 | 10-15%                  |                 5 |              0.0627  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3163 | 10-15%                  |                 2 |              0.15815 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.32   | >20%                    |                 2 |              0.16    |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3373 | >20%                    |                 2 |              0.16865 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3428 | 10-15%                  |                 5 |              0.06856 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3543 | 10-15%                  |                 5 |              0.07086 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3571 | >20%                    |                 2 |              0.17855 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3587 | >20%                    |                10 |              0.03587 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3593 | >20%                    |                 2 |              0.17965 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3597 | >20%                    |                 2 |              0.17985 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3695 | 15-20%                  |                 5 |              0.0739  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.372  | >20%                    |                 5 |              0.0744  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3822 | 5-10%                   |                 5 |              0.07644 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3835 | <5%                     |                 2 |              0.19175 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3877 | >20%                    |                 2 |              0.19385 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3924 | 15-20%                  |                 2 |              0.1962  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3929 | >20%                    |                10 |              0.03929 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3938 | <5%                     |                 2 |              0.1969  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3975 | >20%                    |                 5 |              0.0795  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3996 | <5%                     |                 2 |              0.1998  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4037 | 15-20%                  |                 2 |              0.20185 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4038 | 10-15%                  |                 2 |              0.2019  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4092 | >20%                    |                 5 |              0.08184 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4105 | >20%                    |                 2 |              0.20525 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.415  | >20%                    |                 5 |              0.083   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4163 | <5%                     |                 2 |              0.20815 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4167 | >20%                    |                 2 |              0.20835 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4187 | >20%                    |                 2 |              0.20935 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4202 | 10-15%                  |                10 |              0.04202 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4215 | <5%                     |                 2 |              0.21075 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4295 | 10-15%                  |                 2 |              0.21475 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4349 | >20%                    |                 5 |              0.08698 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4358 | 5-10%                   |                 5 |              0.08716 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.441  | >20%                    |                 2 |              0.2205  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4428 | >20%                    |                 5 |              0.08856 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4475 | 10-15%                  |                 5 |              0.0895  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4491 | >20%                    |                 2 |              0.22455 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4554 | >20%                    |                 2 |              0.2277  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4577 | 10-15%                  |                 5 |              0.09154 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4578 | >20%                    |                 5 |              0.09156 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4634 | <5%                     |                 5 |              0.09268 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4654 | 5-10%                   |                 5 |              0.09308 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4741 | >20%                    |                 5 |              0.09482 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4756 | >20%                    |                 5 |              0.09512 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4763 | >20%                    |                 5 |              0.09526 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4774 | 5-10%                   |                 2 |              0.2387  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.481  | 5-10%                   |                 5 |              0.0962  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4827 | >20%                    |                 5 |              0.09654 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4837 | >20%                    |                 5 |              0.09674 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4899 | >20%                    |                 5 |              0.09798 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4919 | >20%                    |                 5 |              0.09838 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4923 | >20%                    |                10 |              0.04923 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4954 | 5-10%                   |                 5 |              0.09908 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4967 | 5-10%                   |                 2 |              0.24835 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4975 | 5-10%                   |                 5 |              0.0995  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.499  | >20%                    |                 5 |              0.0998  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4995 | >20%                    |                 2 |              0.24975 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4996 | >20%                    |                 2 |              0.2498  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5023 | >20%                    |                 5 |              0.10046 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5115 | >20%                    |                 5 |              0.1023  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5187 | 15-20%                  |                 5 |              0.10374 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5287 | <5%                     |                10 |              0.05287 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5373 | >20%                    |                 2 |              0.26865 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.548  | 15-20%                  |                 2 |              0.274   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.5485 | >20%                    |                 2 |              0.27425 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.5524 | >20%                    |                 2 |              0.2762  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5584 | 15-20%                  |                 5 |              0.11168 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5587 | 5-10%                   |                 5 |              0.11174 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5605 | >20%                    |                 2 |              0.28025 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5617 | 15-20%                  |                 2 |              0.28085 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5644 | 10-15%                  |                 5 |              0.11288 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5656 | 15-20%                  |                 5 |              0.11312 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5722 | >20%                    |                 2 |              0.2861  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5849 | <5%                     |                10 |              0.05849 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5879 | <5%                     |                 5 |              0.11758 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5884 | >20%                    |                 5 |              0.11768 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5904 | 10-15%                  |                10 |              0.05904 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5907 | >20%                    |                 2 |              0.29535 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5937 | <5%                     |                 5 |              0.11874 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5993 | >20%                    |                 5 |              0.11986 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.6072 | 10-15%                  |                 5 |              0.12144 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6097 | <5%                     |                10 |              0.06097 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6129 | <5%                     |                 5 |              0.12258 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6187 | >20%                    |                 5 |              0.12374 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6263 | 10-15%                  |                 5 |              0.12526 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.637  | >20%                    |                10 |              0.0637  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6392 | >20%                    |                10 |              0.06392 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6461 | >20%                    |                10 |              0.06461 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.6574 | 10-15%                  |                10 |              0.06574 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6614 | 5-10%                   |                10 |              0.06614 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6643 | >20%                    |                 5 |              0.13286 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6649 | >20%                    |                10 |              0.06649 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6682 | 10-15%                  |                 2 |              0.3341  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6711 | >20%                    |                 5 |              0.13422 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6781 | <5%                     |                 5 |              0.13562 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6865 | 15-20%                  |                 5 |              0.1373  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6888 | 10-15%                  |                 5 |              0.13776 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6901 | >20%                    |                10 |              0.06901 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7115 | >20%                    |                10 |              0.07115 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7137 | <5%                     |                10 |              0.07137 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7144 | >20%                    |                10 |              0.07144 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7231 | >20%                    |                 5 |              0.14462 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7274 | <5%                     |                 2 |              0.3637  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7275 | 5-10%                   |                10 |              0.07275 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.741  | 5-10%                   |                10 |              0.0741  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7413 | >20%                    |                10 |              0.07413 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7541 | <5%                     |                 5 |              0.15082 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7565 | 15-20%                  |                 5 |              0.1513  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7632 | >20%                    |                 2 |              0.3816  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7702 | >20%                    |                 2 |              0.3851  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7732 | <5%                     |                10 |              0.07732 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7808 | <5%                     |                10 |              0.07808 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7875 | >20%                    |                 5 |              0.1575  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7984 | >20%                    |                10 |              0.07984 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7991 | 10-15%                  |                10 |              0.07991 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.801  | >20%                    |                10 |              0.0801  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8048 | <5%                     |                10 |              0.08048 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8077 | >20%                    |                10 |              0.08077 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8181 | <5%                     |                10 |              0.08181 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8291 | 15-20%                  |                10 |              0.08291 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8443 | 15-20%                  |                10 |              0.08443 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8506 | >20%                    |                10 |              0.08506 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8578 | 10-15%                  |                10 |              0.08578 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8595 | 10-15%                  |                 2 |              0.42975 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8602 | 15-20%                  |                 5 |              0.17204 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8621 | >20%                    |                 2 |              0.43105 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8939 | <5%                     |                10 |              0.08939 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8945 | >20%                    |                10 |              0.08945 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9017 | <5%                     |                10 |              0.09017 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.915  | >20%                    |                10 |              0.0915  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.923  | 10-15%                  |                10 |              0.0923  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9623 | 5-10%                   |                10 |              0.09623 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9931 | >20%                    |                 5 |              0.19862 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0127 | 10-15%                  |                10 |              0.10127 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0127 | 15-20%                  |                10 |              0.10127 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0343 | >20%                    |                10 |              0.10343 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0944 | <5%                     |                10 |              0.10944 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.118  | 15-20%                  |                10 |              0.1118  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.18   | 15-20%                  |                10 |              0.118   |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1803 | >20%                    |                 5 |              0.23606 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.2097 | <5%                     |                10 |              0.12097 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2157 | >20%                    |                10 |              0.12157 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2401 | >20%                    |                 2 |              0.62005 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2402 | 5-10%                   |                 2 |              0.6201  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2414 | 15-20%                  |                10 |              0.12414 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2527 | <5%                     |                 5 |              0.25054 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2623 | >20%                    |                 5 |              0.25246 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4195 | 15-20%                  |                10 |              0.14195 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4534 | >20%                    |                10 |              0.14534 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4654 | >20%                    |                 5 |              0.29308 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5751 | >20%                    |                10 |              0.15751 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5952 | >20%                    |                10 |              0.15952 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.903  | <5%                     |                10 |              0.1903  |