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

Data correct as of 2025-03-18 01:44:02.700433, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1134 | 10-15%                  |                 2 |              0.0567  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.147  | 5-10%                   |                 5 |              0.0294  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1783 | >20%                    |                 5 |              0.03566 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1864 | >20%                    |                 2 |              0.0932  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1986 | 15-20%                  |                 2 |              0.0993  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2072 | 10-15%                  |                 2 |              0.1036  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2139 | 5-10%                   |                 2 |              0.10695 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2245 | 5-10%                   |                 5 |              0.0449  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2285 | 5-10%                   |                 2 |              0.11425 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2301 | >20%                    |                 2 |              0.11505 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2335 | 5-10%                   |                10 |              0.02335 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2382 | 15-20%                  |                 2 |              0.1191  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2466 | >20%                    |                 2 |              0.1233  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2483 | >20%                    |                 2 |              0.12415 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2499 | 5-10%                   |                 2 |              0.12495 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2627 | 5-10%                   |                 2 |              0.13135 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2652 | 15-20%                  |                 5 |              0.05304 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2686 | <5%                     |                 2 |              0.1343  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2727 | 5-10%                   |                10 |              0.02727 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2909 | <5%                     |                 2 |              0.14545 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2918 | <5%                     |                 2 |              0.1459  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2925 | 10-15%                  |                 2 |              0.14625 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.296  | >20%                    |                 5 |              0.0592  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2987 | 5-10%                   |                 2 |              0.14935 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2987 | >20%                    |                 5 |              0.05974 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3024 | 5-10%                   |                 2 |              0.1512  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3028 | >20%                    |                 2 |              0.1514  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3032 | >20%                    |                 2 |              0.1516  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3079 | 10-15%                  |                 5 |              0.06158 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3094 | >20%                    |                 2 |              0.1547  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3118 | 10-15%                  |                10 |              0.03118 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3211 | 10-15%                  |                 2 |              0.16055 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3254 | 10-15%                  |                 5 |              0.06508 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3278 | >20%                    |                 2 |              0.1639  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | 5-10%                   |                10 |              0.03351 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.3468 |                         |                 2 |              0.1734  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3522 | >20%                    |                 2 |              0.1761  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.355  | >20%                    |                 2 |              0.1775  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3594 | >20%                    |                 2 |              0.1797  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3605 | >20%                    |                 5 |              0.0721  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3629 | >20%                    |                 2 |              0.18145 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3664 | 10-15%                  |                 5 |              0.07328 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.3694 |                         |                 5 |              0.07388 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3698 | >20%                    |                 5 |              0.07396 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3699 | >20%                    |                 5 |              0.07398 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.371  | >20%                    |                 2 |              0.1855  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3761 | >20%                    |                10 |              0.03761 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3843 | 15-20%                  |                10 |              0.03843 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3894 | 5-10%                   |                 2 |              0.1947  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3913 | >20%                    |                 2 |              0.19565 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3937 | >20%                    |                 5 |              0.07874 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3945 | <5%                     |                 2 |              0.19725 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3951 | 5-10%                   |                 5 |              0.07902 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3978 | 5-10%                   |                10 |              0.03978 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3988 | 5-10%                   |                10 |              0.03988 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4028 | >20%                    |                 2 |              0.2014  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4059 | <5%                     |                 2 |              0.20295 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4061 | 5-10%                   |                 5 |              0.08122 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4067 | 5-10%                   |                 2 |              0.20335 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4093 | 5-10%                   |                 2 |              0.20465 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4121 | 10-15%                  |                10 |              0.04121 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4146 | 5-10%                   |                 2 |              0.2073  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4179 | >20%                    |                10 |              0.04179 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4185 | 15-20%                  |                 2 |              0.20925 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4197 | <5%                     |                 2 |              0.20985 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.423  | >20%                    |                10 |              0.0423  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4237 | >20%                    |                 2 |              0.21185 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4256 | <5%                     |                 5 |              0.08512 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4278 | <5%                     |                 5 |              0.08556 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4296 | >20%                    |                 5 |              0.08592 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4344 | >20%                    |                 2 |              0.2172  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4431 | 5-10%                   |                 5 |              0.08862 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4453 | 5-10%                   |                 5 |              0.08906 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4587 | 5-10%                   |                 2 |              0.22935 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4597 | 10-15%                  |                10 |              0.04597 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4647 | 10-15%                  |                 2 |              0.23235 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4653 | >20%                    |                 5 |              0.09306 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4654 | <5%                     |                 5 |              0.09308 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.47   | <5%                     |                 5 |              0.094   |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.475  | <5%                     |                10 |              0.0475  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4776 | 10-15%                  |                 5 |              0.09552 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4814 | 5-10%                   |                 5 |              0.09628 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4846 | >20%                    |                 5 |              0.09692 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4879 | >20%                    |                 5 |              0.09758 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4897 | >20%                    |                 2 |              0.24485 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4903 | >20%                    |                 5 |              0.09806 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.4923 | 5-10%                   |                 5 |              0.09846 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4942 | >20%                    |                 2 |              0.2471  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.498  | >20%                    |                 2 |              0.249   |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5129 | 5-10%                   |                 5 |              0.10258 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5204 | >20%                    |                 5 |              0.10408 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5228 | <5%                     |                 5 |              0.10456 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5278 | >20%                    |                 2 |              0.2639  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5298 | 15-20%                  |                 2 |              0.2649  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5308 | 15-20%                  |                 2 |              0.2654  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5344 | <5%                     |                 2 |              0.2672  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5389 | 5-10%                   |                 5 |              0.10778 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5397 | <5%                     |                10 |              0.05397 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5412 | >20%                    |                 5 |              0.10824 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5462 | >20%                    |                 5 |              0.10924 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5467 | >20%                    |                 5 |              0.10934 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5526 | >20%                    |                 2 |              0.2763  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5532 | 15-20%                  |                 5 |              0.11064 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5583 | 10-15%                  |                 5 |              0.11166 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5619 | 15-20%                  |                 5 |              0.11238 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5658 | >20%                    |                 2 |              0.2829  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.568  | 5-10%                   |                 5 |              0.1136  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5907 | <5%                     |                 5 |              0.11814 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5947 | >20%                    |                 2 |              0.29735 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.5997 | >20%                    |                 2 |              0.29985 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6074 | 10-15%                  |                 5 |              0.12148 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6306 | >20%                    |                 5 |              0.12612 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6363 | >20%                    |                 5 |              0.12726 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6416 | >20%                    |                10 |              0.06416 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6455 | >20%                    |                10 |              0.06455 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6579 | >20%                    |                 5 |              0.13158 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6646 | 10-15%                  |                 5 |              0.13292 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6843 | >20%                    |                 5 |              0.13686 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6886 | >20%                    |                 5 |              0.13772 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7062 | >20%                    |                10 |              0.07062 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7079 | 5-10%                   |                 2 |              0.35395 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7081 | >20%                    |                10 |              0.07081 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7095 | >20%                    |                 2 |              0.35475 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7152 | >20%                    |                10 |              0.07152 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7164 | >20%                    |                10 |              0.07164 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7272 |                         |                10 |              0.07272 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7351 | >20%                    |                10 |              0.07351 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7356 | <5%                     |                 5 |              0.14712 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7397 | 5-10%                   |                 5 |              0.14794 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7488 | 5-10%                   |                10 |              0.07488 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.749  | <5%                     |                10 |              0.0749  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7564 | <5%                     |                10 |              0.07564 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7573 | 5-10%                   |                10 |              0.07573 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7701 | >20%                    |                 5 |              0.15402 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.773  | 15-20%                  |                 5 |              0.1546  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7757 | >20%                    |                10 |              0.07757 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7775 | <5%                     |                10 |              0.07775 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7815 | >20%                    |                 5 |              0.1563  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7943 | >20%                    |                 2 |              0.39715 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8072 | 5-10%                   |                10 |              0.08072 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8115 | <5%                     |                10 |              0.08115 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8167 | >20%                    |                10 |              0.08167 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8301 | 5-10%                   |                10 |              0.08301 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8458 | >20%                    |                10 |              0.08458 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8502 | <5%                     |                10 |              0.08502 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.8513 | >20%                    |                 5 |              0.17026 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8559 | >20%                    |                10 |              0.08559 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8566 | 5-10%                   |                10 |              0.08566 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8569 | >20%                    |                10 |              0.08569 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8648 | 15-20%                  |                10 |              0.08648 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8707 | 15-20%                  |                10 |              0.08707 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8729 | >20%                    |                 2 |              0.43645 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8762 | >20%                    |                10 |              0.08762 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8789 | 15-20%                  |                 5 |              0.17578 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8992 | <5%                     |                10 |              0.08992 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9148 | >20%                    |                10 |              0.09148 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9197 | >20%                    |                 2 |              0.45985 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9804 | 10-15%                  |                10 |              0.09804 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9837 | >20%                    |                10 |              0.09837 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0057 | 5-10%                   |                10 |              0.10057 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0387 | >20%                    |                 5 |              0.20774 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0828 | >20%                    |                10 |              0.10828 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0844 | 5-10%                   |                10 |              0.10844 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0856 | 5-10%                   |                10 |              0.10856 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1026 | <5%                     |                10 |              0.11026 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1183 | >20%                    |                10 |              0.11183 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1565 | >20%                    |                10 |              0.11565 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1624 | 15-20%                  |                10 |              0.11624 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1762 | 15-20%                  |                10 |              0.11762 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2317 | >20%                    |                10 |              0.12317 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2904 | 5-10%                   |                 2 |              0.6452  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2957 | 5-10%                   |                 5 |              0.25914 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3102 | >20%                    |                10 |              0.13102 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3605 | >20%                    |                 5 |              0.2721  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4175 | >20%                    |                 5 |              0.2835  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4944 | >20%                    |                 2 |              0.7472  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4951 | 10-15%                  |                 5 |              0.29902 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5073 | >20%                    |                10 |              0.15073 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5089 | >20%                    |                10 |              0.15089 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7346 | >20%                    |                10 |              0.17346 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1158 | 5-10%                   |                10 |              0.21158 |