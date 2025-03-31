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

Data correct as of 2025-03-31 01:50:38.743484, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1277 | 5-10%                   |                 5 |              0.02554 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1295 | 15-20%                  |                 2 |              0.06475 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1495 | 10-15%                  |                 2 |              0.07475 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | 10-15%                  |                 5 |              0.03178 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 5-10%                   |                 5 |              0.039   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2007 | <5%                     |                 2 |              0.10035 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2122 | >20%                    |                 2 |              0.1061  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2247 | 15-20%                  |                 2 |              0.11235 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2385 | 15-20%                  |                 2 |              0.11925 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 10-15%                  |                10 |              0.02395 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 15-20%                  |                10 |              0.02419 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2435 | 15-20%                  |                 2 |              0.12175 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2436 | >20%                    |                 2 |              0.1218  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2519 | >20%                    |                 2 |              0.12595 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2623 | 10-15%                  |                 2 |              0.13115 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2747 | 5-10%                   |                 2 |              0.13735 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2803 | <5%                     |                 2 |              0.14015 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2885 | >20%                    |                 2 |              0.14425 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2889 | <5%                     |                 2 |              0.14445 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2896 | 10-15%                  |                10 |              0.02896 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.294  | <5%                     |                10 |              0.0294  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2942 | 5-10%                   |                 2 |              0.1471  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2979 | 10-15%                  |                 2 |              0.14895 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3004 | <5%                     |                 2 |              0.1502  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3021 | 15-20%                  |                 2 |              0.15105 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.309  | >20%                    |                 2 |              0.1545  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3169 | 10-15%                  |                 2 |              0.15845 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3171 | 15-20%                  |                10 |              0.03171 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3174 | 10-15%                  |                 5 |              0.06348 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3223 | >20%                    |                 2 |              0.16115 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3386 | 10-15%                  |                 5 |              0.06772 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3423 | >20%                    |                 2 |              0.17115 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3469 | 10-15%                  |                 5 |              0.06938 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3588 | >20%                    |                 2 |              0.1794  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.362  | >20%                    |                10 |              0.0362  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3638 | >20%                    |                 2 |              0.1819  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3657 | >20%                    |                 2 |              0.18285 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3686 | >20%                    |                 5 |              0.07372 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3752 | 15-20%                  |                 5 |              0.07504 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3822 | 5-10%                   |                 5 |              0.07644 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3847 | <5%                     |                 2 |              0.19235 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3852 | >20%                    |                 2 |              0.1926  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3874 | <5%                     |                 2 |              0.1937  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3938 | 15-20%                  |                 2 |              0.1969  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3975 | >20%                    |                 5 |              0.0795  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3983 | >20%                    |                 5 |              0.07966 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3997 | >20%                    |                10 |              0.03997 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4003 | >20%                    |                 5 |              0.08006 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4012 | 15-20%                  |                 2 |              0.2006  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4032 | 10-15%                  |                 2 |              0.2016  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4101 | <5%                     |                 2 |              0.20505 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4127 | <5%                     |                 2 |              0.20635 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.413  | >20%                    |                 2 |              0.2065  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4145 | >20%                    |                 2 |              0.20725 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4159 | >20%                    |                 2 |              0.20795 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4259 | 10-15%                  |                10 |              0.04259 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4259 | <5%                     |                 2 |              0.21295 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4273 | >20%                    |                 2 |              0.21365 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4332 | >20%                    |                 2 |              0.2166  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4346 | 5-10%                   |                 5 |              0.08692 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.435  | 10-15%                  |                 2 |              0.2175  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4409 | >20%                    |                 5 |              0.08818 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4435 | >20%                    |                 5 |              0.0887  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4512 | 10-15%                  |                 5 |              0.09024 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4571 | 10-15%                  |                 5 |              0.09142 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4574 | >20%                    |                 2 |              0.2287  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4578 | >20%                    |                 5 |              0.09156 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4656 | <5%                     |                 5 |              0.09312 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4659 | >20%                    |                 5 |              0.09318 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4741 | 5-10%                   |                 5 |              0.09482 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.477  | >20%                    |                 5 |              0.0954  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4801 | 5-10%                   |                 5 |              0.09602 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4805 | >20%                    |                 5 |              0.0961  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4822 | 5-10%                   |                 2 |              0.2411  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4857 | >20%                    |                 5 |              0.09714 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4872 | >20%                    |                 5 |              0.09744 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4887 | <5%                     |                10 |              0.04887 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4948 | >20%                    |                 5 |              0.09896 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4952 | 5-10%                   |                 2 |              0.2476  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4963 | >20%                    |                 5 |              0.09926 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5012 | >20%                    |                 2 |              0.2506  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5019 | >20%                    |                 2 |              0.25095 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5023 | >20%                    |                 5 |              0.10046 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.5037 | >20%                    |                10 |              0.05037 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.505  | >20%                    |                 5 |              0.101   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.505  | 5-10%                   |                 5 |              0.101   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5075 | 5-10%                   |                 5 |              0.1015  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5092 | >20%                    |                 5 |              0.10184 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5173 | 15-20%                  |                 5 |              0.10346 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.5294 | >20%                    |                 2 |              0.2647  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.537  | >20%                    |                 2 |              0.2685  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5469 | 15-20%                  |                 2 |              0.27345 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5484 | 5-10%                   |                 5 |              0.10968 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5587 | 10-15%                  |                 5 |              0.11174 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5617 | 15-20%                  |                 2 |              0.28085 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.5647 | >20%                    |                 2 |              0.28235 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5682 | 15-20%                  |                 5 |              0.11364 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5698 | 15-20%                  |                 5 |              0.11396 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5808 | >20%                    |                 2 |              0.2904  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5812 | >20%                    |                 5 |              0.11624 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.5869 | >20%                    |                10 |              0.05869 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5888 | <5%                     |                 5 |              0.11776 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5902 | <5%                     |                 5 |              0.11804 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5906 | >20%                    |                 2 |              0.2953  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5944 | >20%                    |                 2 |              0.2972  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5965 | 10-15%                  |                10 |              0.05965 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6001 | >20%                    |                 5 |              0.12002 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6017 | <5%                     |                10 |              0.06017 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6078 | >20%                    |                 5 |              0.12156 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6106 | <5%                     |                10 |              0.06106 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6164 | <5%                     |                 5 |              0.12328 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.6274 | 10-15%                  |                 5 |              0.12548 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6325 | 10-15%                  |                 5 |              0.1265  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6391 | >20%                    |                10 |              0.06391 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6407 | 5-10%                   |                10 |              0.06407 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6461 | >20%                    |                10 |              0.06461 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6503 | >20%                    |                10 |              0.06503 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6621 | >20%                    |                 5 |              0.13242 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6643 | >20%                    |                 5 |              0.13286 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6767 | <5%                     |                 5 |              0.13534 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.679  | 10-15%                  |                 2 |              0.3395  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.6863 | 10-15%                  |                10 |              0.06863 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6897 | 10-15%                  |                 5 |              0.13794 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.704  | >20%                    |                10 |              0.0704  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7078 | >20%                    |                10 |              0.07078 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7162 | 15-20%                  |                 5 |              0.14324 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7169 | <5%                     |                10 |              0.07169 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7226 | >20%                    |                 5 |              0.14452 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7274 | <5%                     |                 2 |              0.3637  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.728  | >20%                    |                10 |              0.0728  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7413 | >20%                    |                10 |              0.07413 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7492 | 5-10%                   |                10 |              0.07492 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7541 | <5%                     |                 5 |              0.15082 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7565 | 5-10%                   |                10 |              0.07565 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7587 | <5%                     |                10 |              0.07587 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7615 | >20%                    |                 2 |              0.38075 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7644 | 15-20%                  |                 5 |              0.15288 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.765  | >20%                    |                 2 |              0.3825  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7804 | <5%                     |                10 |              0.07804 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7856 | 10-15%                  |                10 |              0.07856 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7876 | >20%                    |                 5 |              0.15752 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.801  | >20%                    |                10 |              0.0801  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8048 | <5%                     |                10 |              0.08048 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8171 | >20%                    |                10 |              0.08171 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8181 | <5%                     |                10 |              0.08181 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8191 | >20%                    |                10 |              0.08191 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8291 | 15-20%                  |                10 |              0.08291 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8406 | 10-15%                  |                10 |              0.08406 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8454 | >20%                    |                10 |              0.08454 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.847  | 15-20%                  |                10 |              0.0847  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8592 | 15-20%                  |                 5 |              0.17184 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8657 | >20%                    |                 2 |              0.43285 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8806 | 10-15%                  |                 2 |              0.4403  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8852 | >20%                    |                10 |              0.08852 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8951 | <5%                     |                10 |              0.08951 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.896  | <5%                     |                10 |              0.0896  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9039 | 10-15%                  |                10 |              0.09039 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.915  | >20%                    |                10 |              0.0915  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9655 | 5-10%                   |                10 |              0.09655 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9698 | >20%                    |                 5 |              0.19396 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9966 | 10-15%                  |                10 |              0.09966 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0075 | 15-20%                  |                10 |              0.10075 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0343 | >20%                    |                10 |              0.10343 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1042 | <5%                     |                10 |              0.11042 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1201 | 15-20%                  |                10 |              0.11201 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1258 | >20%                    |                 5 |              0.22516 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1875 | 15-20%                  |                10 |              0.11875 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.1994 | >20%                    |                10 |              0.11994 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.2059 | <5%                     |                10 |              0.12059 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2231 | >20%                    |                 5 |              0.24462 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2502 | <5%                     |                 5 |              0.25004 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2564 | 15-20%                  |                10 |              0.12564 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2593 | >20%                    |                 2 |              0.62965 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2673 | 5-10%                   |                 2 |              0.63365 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4536 | >20%                    |                10 |              0.14536 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4616 | >20%                    |                 5 |              0.29232 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4922 | 15-20%                  |                10 |              0.14922 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5953 | >20%                    |                10 |              0.15953 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6209 | >20%                    |                10 |              0.16209 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9156 | <5%                     |                10 |              0.19156 |