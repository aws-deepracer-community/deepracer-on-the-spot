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

Data correct as of 2026-01-11 02:13:11.726052, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1118 | >20%                    |                 2 |              0.0559  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1474 | >20%                    |                 2 |              0.0737  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.155  | >20%                    |                 5 |              0.031   |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1607 | >20%                    |                 2 |              0.08035 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1718 | <5%                     |                 2 |              0.0859  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.206  | <5%                     |                 5 |              0.0412  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2137 | >20%                    |                 2 |              0.10685 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2252 | >20%                    |                 2 |              0.1126  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2388 | >20%                    |                 2 |              0.1194  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.245  | >20%                    |                 2 |              0.1225  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2459 | >20%                    |                 5 |              0.04918 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.252  | >20%                    |                 2 |              0.126   |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2703 | >20%                    |                 2 |              0.13515 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2721 | >20%                    |                 2 |              0.13605 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.273  | >20%                    |                 5 |              0.0546  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2761 | 15-20%                  |                 5 |              0.05522 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2825 | >20%                    |                10 |              0.02825 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2846 | >20%                    |                 2 |              0.1423  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2889 | 5-10%                   |                10 |              0.02889 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2892 | 15-20%                  |                 2 |              0.1446  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2911 | >20%                    |                 2 |              0.14555 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2941 | >20%                    |                 5 |              0.05882 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3015 | >20%                    |                 2 |              0.15075 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3136 | 5-10%                   |                 5 |              0.06272 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3249 | >20%                    |                 5 |              0.06498 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3255 | >20%                    |                 2 |              0.16275 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3309 | >20%                    |                 2 |              0.16545 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3325 | >20%                    |                 5 |              0.0665  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3394 | <5%                     |                 5 |              0.06788 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3485 | 5-10%                   |                10 |              0.03485 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3523 | 5-10%                   |                 2 |              0.17615 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3583 | >20%                    |                 2 |              0.17915 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3685 | >20%                    |                 5 |              0.0737  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3696 | 10-15%                  |                 2 |              0.1848  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3708 | 5-10%                   |                 2 |              0.1854  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3741 | >20%                    |                 5 |              0.07482 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3749 | >20%                    |                 2 |              0.18745 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3762 | >20%                    |                 2 |              0.1881  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.38   | >20%                    |                 2 |              0.19    |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3801 | >20%                    |                 5 |              0.07602 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.384  | >20%                    |                 5 |              0.0768  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3855 | >20%                    |                 5 |              0.0771  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3879 | >20%                    |                 2 |              0.19395 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3899 | >20%                    |                 5 |              0.07798 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3967 | 15-20%                  |                10 |              0.03967 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3981 | >20%                    |                10 |              0.03981 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4025 | 10-15%                  |                 2 |              0.20125 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4027 | <5%                     |                10 |              0.04027 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.403  | >20%                    |                 2 |              0.2015  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4037 | >20%                    |                 2 |              0.20185 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4058 | >20%                    |                 5 |              0.08116 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4074 | >20%                    |                 2 |              0.2037  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4084 | >20%                    |                 2 |              0.2042  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4108 | >20%                    |                 5 |              0.08216 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4121 | >20%                    |                10 |              0.04121 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4135 | >20%                    |                10 |              0.04135 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.418  | >20%                    |                 2 |              0.209   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4189 | <5%                     |                 2 |              0.20945 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.427  | >20%                    |                10 |              0.0427  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4302 | >20%                    |                 5 |              0.08604 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4369 | 15-20%                  |                10 |              0.04369 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4373 | >20%                    |                 5 |              0.08746 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4404 | 10-15%                  |                 2 |              0.2202  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4413 | >20%                    |                 5 |              0.08826 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4462 | >20%                    |                 2 |              0.2231  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4527 | >20%                    |                 2 |              0.22635 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4528 | <5%                     |                10 |              0.04528 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4546 | <5%                     |                 2 |              0.2273  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.455  | >20%                    |                 2 |              0.2275  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4624 | >20%                    |                 5 |              0.09248 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4624 | >20%                    |                 5 |              0.09248 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4641 | >20%                    |                 5 |              0.09282 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4681 | 15-20%                  |                 2 |              0.23405 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4686 | >20%                    |                10 |              0.04686 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4698 | >20%                    |                 2 |              0.2349  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4744 | 15-20%                  |                 5 |              0.09488 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.484  | >20%                    |                 5 |              0.0968  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4846 | >20%                    |                 2 |              0.2423  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4946 | <5%                     |                 5 |              0.09892 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.496  | <5%                     |                 2 |              0.248   |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5009 | >20%                    |                 2 |              0.25045 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5027 | 15-20%                  |                 2 |              0.25135 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5092 | >20%                    |                 5 |              0.10184 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.521  | >20%                    |                 5 |              0.1042  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5364 | >20%                    |                 2 |              0.2682  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5371 | 15-20%                  |                 5 |              0.10742 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5376 | 10-15%                  |                 5 |              0.10752 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5385 | >20%                    |                 2 |              0.26925 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5445 | 5-10%                   |                 5 |              0.1089  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5489 | >20%                    |                 5 |              0.10978 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5644 | 15-20%                  |                 5 |              0.11288 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5658 | >20%                    |                 5 |              0.11316 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5747 | >20%                    |                 2 |              0.28735 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5749 | 15-20%                  |                 5 |              0.11498 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5774 | 15-20%                  |                10 |              0.05774 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5873 | >20%                    |                 5 |              0.11746 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5931 | >20%                    |                 5 |              0.11862 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5963 | >20%                    |                10 |              0.05963 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5976 | >20%                    |                 2 |              0.2988  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5977 | >20%                    |                 2 |              0.29885 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5984 | >20%                    |                10 |              0.05984 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6269 | 5-10%                   |                 5 |              0.12538 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6371 | 10-15%                  |                 5 |              0.12742 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6378 | 10-15%                  |                 2 |              0.3189  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6437 | 5-10%                   |                 5 |              0.12874 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6498 | >20%                    |                 5 |              0.12996 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6546 | >20%                    |                 2 |              0.3273  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6623 | 15-20%                  |                 5 |              0.13246 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6633 | >20%                    |                 5 |              0.13266 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6656 | >20%                    |                10 |              0.06656 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6691 | >20%                    |                 5 |              0.13382 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.6696 | 10-15%                  |                 5 |              0.13392 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.672  | 15-20%                  |                10 |              0.0672  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6767 | >20%                    |                10 |              0.06767 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6811 | <5%                     |                 2 |              0.34055 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.691  | >20%                    |                 2 |              0.3455  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6928 | 15-20%                  |                10 |              0.06928 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7183 | 15-20%                  |                 2 |              0.35915 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7257 | <5%                     |                 5 |              0.14514 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7274 | >20%                    |                10 |              0.07274 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7344 | <5%                     |                10 |              0.07344 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7462 | 15-20%                  |                10 |              0.07462 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7474 | 5-10%                   |                10 |              0.07474 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.754  | >20%                    |                 2 |              0.377   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7559 | >20%                    |                 5 |              0.15118 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7569 | >20%                    |                10 |              0.07569 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7583 | >20%                    |                10 |              0.07583 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7715 | >20%                    |                10 |              0.07715 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7731 | >20%                    |                 5 |              0.15462 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7762 | <5%                     |                10 |              0.07762 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7875 | 15-20%                  |                10 |              0.07875 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7879 | >20%                    |                 2 |              0.39395 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7883 |                         |                 2 |              0.39415 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8021 | >20%                    |                10 |              0.08021 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8102 | >20%                    |                10 |              0.08102 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8108 | >20%                    |                 2 |              0.4054  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8144 | >20%                    |                 5 |              0.16288 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8188 | 15-20%                  |                10 |              0.08188 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8225 | <5%                     |                10 |              0.08225 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8298 | 15-20%                  |                 5 |              0.16596 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8583 | >20%                    |                10 |              0.08583 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8605 | 10-15%                  |                 5 |              0.1721  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8667 | >20%                    |                10 |              0.08667 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8694 | 10-15%                  |                 5 |              0.17388 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8702 | >20%                    |                10 |              0.08702 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8932 | >20%                    |                10 |              0.08932 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9082 | >20%                    |                10 |              0.09082 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9086 | >20%                    |                 2 |              0.4543  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9233 | 15-20%                  |                10 |              0.09233 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9249 | >20%                    |                 5 |              0.18498 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9685 | 10-15%                  |                10 |              0.09685 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9954 | >20%                    |                10 |              0.09954 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9985 | >20%                    |                10 |              0.09985 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0236 | >20%                    |                 5 |              0.20472 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0352 | >20%                    |                 2 |              0.5176  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.065  | >20%                    |                10 |              0.1065  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0807 | 15-20%                  |                10 |              0.10807 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.082  | >20%                    |                10 |              0.1082  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0881 | >20%                    |                 5 |              0.21762 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0902 | >20%                    |                 2 |              0.5451  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.093  | >20%                    |                 2 |              0.5465  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1167 | 10-15%                  |                10 |              0.11167 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1552 | >20%                    |                10 |              0.11552 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1623 | >20%                    |                10 |              0.11623 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1691 | >20%                    |                 5 |              0.23382 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1701 | 15-20%                  |                10 |              0.11701 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.2149 | <5%                     |                10 |              0.12149 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2153 | >20%                    |                10 |              0.12153 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2337 | >20%                    |                 5 |              0.24674 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2347 | 15-20%                  |                10 |              0.12347 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.2637 | >20%                    |                 5 |              0.25274 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2769 | >20%                    |                10 |              0.12769 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.2961 |                         |                 5 |              0.25922 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3145 | >20%                    |                10 |              0.13145 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3566 | >20%                    |                 5 |              0.27132 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4244 | 10-15%                  |                 5 |              0.28488 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4463 | >20%                    |                 2 |              0.72315 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.564  | >20%                    |                10 |              0.1564  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.5726 | 10-15%                  |                10 |              0.15726 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5866 |                         |                10 |              0.15866 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5968 | >20%                    |                10 |              0.15968 |