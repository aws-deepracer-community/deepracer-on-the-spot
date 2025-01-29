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

Data correct as of 2025-01-29 01:27:39.979366, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | >20%                    |                 5 |              0.039   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2078 | <5%                     |                 2 |              0.1039  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.21   | >20%                    |                 2 |              0.105   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2145 | 5-10%                   |                 2 |              0.10725 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2269 | 10-15%                  |                 2 |              0.11345 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2327 | 10-15%                  |                 2 |              0.11635 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2353 | 5-10%                   |                 2 |              0.11765 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2487 | 10-15%                  |                 2 |              0.12435 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2531 | 5-10%                   |                 2 |              0.12655 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2644 | <5%                     |                 2 |              0.1322  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2956 | 10-15%                  |                 5 |              0.05912 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2979 | 5-10%                   |                 2 |              0.14895 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.301  | >20%                    |                 2 |              0.1505  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3019 | <5%                     |                 2 |              0.15095 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3138 | <5%                     |                 5 |              0.06276 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3179 | 10-15%                  |                 2 |              0.15895 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.326  | 5-10%                   |                 2 |              0.163   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.329  | >20%                    |                 2 |              0.1645  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3335 | 10-15%                  |                 5 |              0.0667  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3342 | <5%                     |                 2 |              0.1671  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3347 | 15-20%                  |                10 |              0.03347 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3429 | 5-10%                   |                 5 |              0.06858 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.344  | 5-10%                   |                 2 |              0.172   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3464 | <5%                     |                 2 |              0.1732  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3509 | >20%                    |                 2 |              0.17545 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3519 | >20%                    |                 2 |              0.17595 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.359  | <5%                     |                 5 |              0.0718  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3593 | 5-10%                   |                 2 |              0.17965 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3691 | 5-10%                   |                 5 |              0.07382 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3917 | 5-10%                   |                 5 |              0.07834 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3919 | 15-20%                  |                 5 |              0.07838 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3935 | 5-10%                   |                 2 |              0.19675 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4011 | 5-10%                   |                 2 |              0.20055 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.41   | <5%                     |                 2 |              0.205   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4129 | >20%                    |                 2 |              0.20645 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4184 | 10-15%                  |                 2 |              0.2092  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4299 | <5%                     |                 2 |              0.21495 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4331 | 10-15%                  |                 5 |              0.08662 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4408 | 5-10%                   |                 2 |              0.2204  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4457 | <5%                     |                 5 |              0.08914 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4492 | 10-15%                  |                 2 |              0.2246  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4539 | 15-20%                  |                 5 |              0.09078 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4704 | <5%                     |                 5 |              0.09408 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4732 | <5%                     |                 5 |              0.09464 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4812 | 5-10%                   |                 2 |              0.2406  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4823 | 15-20%                  |                 5 |              0.09646 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4953 | 15-20%                  |                 2 |              0.24765 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5026 | 10-15%                  |                 5 |              0.10052 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5037 | >20%                    |                 2 |              0.25185 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5048 | 15-20%                  |                 5 |              0.10096 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5051 | <5%                     |                 2 |              0.25255 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5066 | >20%                    |                 5 |              0.10132 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5066 | >20%                    |                 5 |              0.10132 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5082 | <5%                     |                 5 |              0.10164 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5084 | >20%                    |                 2 |              0.2542  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5096 | 15-20%                  |                 5 |              0.10192 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5101 | <5%                     |                 5 |              0.10202 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5153 | <5%                     |                 2 |              0.25765 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5166 | >20%                    |                 2 |              0.2583  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5209 | 5-10%                   |                 5 |              0.10418 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5285 | 10-15%                  |                 5 |              0.1057  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5286 | 5-10%                   |                 2 |              0.2643  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5308 | 5-10%                   |                 5 |              0.10616 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5309 | >20%                    |                 5 |              0.10618 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5391 | <5%                     |                 5 |              0.10782 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5481 | 10-15%                  |                 2 |              0.27405 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.551  | <5%                     |                 5 |              0.1102  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5607 | 15-20%                  |                 2 |              0.28035 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.569  | >20%                    |                 5 |              0.1138  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5741 | <5%                     |                10 |              0.05741 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5744 | 5-10%                   |                 5 |              0.11488 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.585  | 5-10%                   |                 5 |              0.117   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5854 | 5-10%                   |                10 |              0.05854 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5993 | 5-10%                   |                 5 |              0.11986 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.604  | 5-10%                   |                 5 |              0.1208  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.6064 | 5-10%                   |                10 |              0.06064 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6081 | >20%                    |                10 |              0.06081 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6158 | 5-10%                   |                10 |              0.06158 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6381 | 10-15%                  |                10 |              0.06381 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6404 | >20%                    |                 2 |              0.3202  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6429 | 5-10%                   |                 5 |              0.12858 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.647  | <5%                     |                10 |              0.0647  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6516 | <5%                     |                10 |              0.06516 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6665 | >20%                    |                10 |              0.06665 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6735 | 5-10%                   |                10 |              0.06735 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6795 | 15-20%                  |                10 |              0.06795 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6838 | 5-10%                   |                 5 |              0.13676 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6867 | 5-10%                   |                 5 |              0.13734 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6921 | >20%                    |                 5 |              0.13842 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6944 | <5%                     |                 5 |              0.13888 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7018 | 10-15%                  |                10 |              0.07018 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7078 | 10-15%                  |                10 |              0.07078 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7355 | 10-15%                  |                10 |              0.07355 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7416 | >20%                    |                 5 |              0.14832 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.744  | 15-20%                  |                 2 |              0.372   |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7486 | >20%                    |                 5 |              0.14972 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7646 | >20%                    |                10 |              0.07646 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7651 | >20%                    |                 5 |              0.15302 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7689 | 5-10%                   |                10 |              0.07689 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7712 | >20%                    |                10 |              0.07712 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7741 | >20%                    |                 5 |              0.15482 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7797 | <5%                     |                 2 |              0.38985 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7859 | 5-10%                   |                10 |              0.07859 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7908 | 15-20%                  |                 2 |              0.3954  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7934 | 5-10%                   |                10 |              0.07934 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7942 | 15-20%                  |                10 |              0.07942 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8164 | 5-10%                   |                10 |              0.08164 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8283 | >20%                    |                10 |              0.08283 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8445 | 5-10%                   |                10 |              0.08445 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8561 | <5%                     |                10 |              0.08561 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8616 | 15-20%                  |                10 |              0.08616 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.8743 | 10-15%                  |                10 |              0.08743 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8892 | 5-10%                   |                10 |              0.08892 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8942 | 15-20%                  |                10 |              0.08942 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9057 | 5-10%                   |                 5 |              0.18114 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9155 | <5%                     |                10 |              0.09155 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9162 | <5%                     |                10 |              0.09162 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9166 | >20%                    |                10 |              0.09166 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9174 | <5%                     |                10 |              0.09174 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9195 | 5-10%                   |                10 |              0.09195 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9641 | 5-10%                   |                10 |              0.09641 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0032 | >20%                    |                10 |              0.10032 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0178 | 15-20%                  |                10 |              0.10178 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0233 | <5%                     |                10 |              0.10233 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0498 | 15-20%                  |                 5 |              0.20996 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0555 | 5-10%                   |                 5 |              0.2111  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0862 | 10-15%                  |                 2 |              0.5431  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0893 | 5-10%                   |                10 |              0.10893 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.1718 | >20%                    |                10 |              0.11718 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2015 | 10-15%                  |                10 |              0.12015 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2632 | 10-15%                  |                 2 |              0.6316  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2952 | 15-20%                  |                 5 |              0.25904 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3044 | 5-10%                   |                10 |              0.13044 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3341 | 5-10%                   |                10 |              0.13341 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4268 | 5-10%                   |                10 |              0.14268 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0317 | 5-10%                   |                10 |              0.20317 |