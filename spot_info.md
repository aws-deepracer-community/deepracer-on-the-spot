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

Data correct as of 2026-06-19 04:50:56.060887, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1784 | >20%                    |                 2 |              0.0892  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1812 | >20%                    |                 2 |              0.0906  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.191  | 15-20%                  |                 2 |              0.0955  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1972 | >20%                    |                 2 |              0.0986  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2155 | 15-20%                  |                 5 |              0.0431  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2351 | >20%                    |                 2 |              0.11755 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2381 | >20%                    |                 2 |              0.11905 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2408 | >20%                    |                 2 |              0.1204  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2569 | >20%                    |                 2 |              0.12845 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2588 | >20%                    |                 2 |              0.1294  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2596 | >20%                    |                 2 |              0.1298  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2618 | 15-20%                  |                 2 |              0.1309  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.265  | >20%                    |                 2 |              0.1325  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2659 | 10-15%                  |                 2 |              0.13295 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2846 | 15-20%                  |                 2 |              0.1423  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.291  | 15-20%                  |                 5 |              0.0582  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2934 | 10-15%                  |                 2 |              0.1467  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2955 | 15-20%                  |                 5 |              0.0591  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.298  | >20%                    |                 5 |              0.0596  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3001 | >20%                    |                 5 |              0.06002 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3019 | >20%                    |                 2 |              0.15095 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3491 | 5-10%                   |                10 |              0.03491 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3503 | <5%                     |                 2 |              0.17515 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3508 | >20%                    |                10 |              0.03508 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3545 | >20%                    |                 2 |              0.17725 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3559 | >20%                    |                 5 |              0.07118 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3568 | 5-10%                   |                10 |              0.03568 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3645 | 10-15%                  |                 2 |              0.18225 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.365  | >20%                    |                 2 |              0.1825  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3801 | >20%                    |                 2 |              0.19005 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3806 | >20%                    |                 5 |              0.07612 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3822 | 5-10%                   |                10 |              0.03822 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3832 | >20%                    |                 5 |              0.07664 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3875 | >20%                    |                 2 |              0.19375 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3967 | >20%                    |                10 |              0.03967 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3996 | >20%                    |                 2 |              0.1998  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4004 | >20%                    |                10 |              0.04004 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4067 | >20%                    |                 5 |              0.08134 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4123 | >20%                    |                 5 |              0.08246 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4179 | >20%                    |                 5 |              0.08358 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4196 | >20%                    |                10 |              0.04196 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4208 | >20%                    |                 5 |              0.08416 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4237 | >20%                    |                 5 |              0.08474 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4274 | >20%                    |                 5 |              0.08548 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4311 | <5%                     |                 2 |              0.21555 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4338 | >20%                    |                 5 |              0.08676 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4376 | >20%                    |                10 |              0.04376 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4381 | >20%                    |                 2 |              0.21905 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4405 | <5%                     |                 2 |              0.22025 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4482 | >20%                    |                 2 |              0.2241  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4573 | 15-20%                  |                 5 |              0.09146 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4623 | 10-15%                  |                 2 |              0.23115 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4639 | >20%                    |                 5 |              0.09278 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.476  | >20%                    |                 5 |              0.0952  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4809 | 15-20%                  |                 2 |              0.24045 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4825 | 15-20%                  |                 2 |              0.24125 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4859 | >20%                    |                 2 |              0.24295 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5244 | 5-10%                   |                 5 |              0.10488 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5268 | 5-10%                   |                 2 |              0.2634  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.53   | 10-15%                  |                10 |              0.053   |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5328 | >20%                    |                 2 |              0.2664  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5331 | 5-10%                   |                 2 |              0.26655 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5335 | 15-20%                  |                 2 |              0.26675 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5345 | >20%                    |                 5 |              0.1069  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5361 | >20%                    |                 5 |              0.10722 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.546  | >20%                    |                 5 |              0.1092  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5532 | >20%                    |                 5 |              0.11064 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5579 | >20%                    |                 2 |              0.27895 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.561  | >20%                    |                 2 |              0.2805  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5625 | <5%                     |                 5 |              0.1125  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5627 | >20%                    |                 5 |              0.11254 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5671 | 10-15%                  |                 2 |              0.28355 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.569  | 10-15%                  |                 5 |              0.1138  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5787 | >20%                    |                10 |              0.05787 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.5809 | >20%                    |                 5 |              0.11618 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5812 | >20%                    |                 5 |              0.11624 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5873 | >20%                    |                 2 |              0.29365 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5882 | >20%                    |                 2 |              0.2941  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5916 | >20%                    |                 2 |              0.2958  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5917 |                         |                 2 |              0.29585 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.596  | >20%                    |                10 |              0.0596  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5963 | >20%                    |                 5 |              0.11926 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6032 | >20%                    |                10 |              0.06032 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6156 | >20%                    |                 5 |              0.12312 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6214 | >20%                    |                 5 |              0.12428 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.633  | >20%                    |                10 |              0.0633  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6476 | <5%                     |                10 |              0.06476 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6605 | 5-10%                   |                10 |              0.06605 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.661  | >20%                    |                10 |              0.0661  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6797 | 15-20%                  |                10 |              0.06797 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6889 | >20%                    |                 5 |              0.13778 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.699  | >20%                    |                 5 |              0.1398  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7003 |                         |                 5 |              0.14006 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7072 | 15-20%                  |                10 |              0.07072 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7075 | >20%                    |                 2 |              0.35375 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7114 | >20%                    |                 2 |              0.3557  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7213 | 5-10%                   |                10 |              0.07213 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7311 | >20%                    |                 5 |              0.14622 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7327 | >20%                    |                10 |              0.07327 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7341 | >20%                    |                 2 |              0.36705 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7343 | 5-10%                   |                 5 |              0.14686 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7367 | >20%                    |                10 |              0.07367 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7406 | >20%                    |                 5 |              0.14812 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7416 | >20%                    |                 5 |              0.14832 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7624 | >20%                    |                 5 |              0.15248 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7647 | >20%                    |                10 |              0.07647 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7816 | >20%                    |                10 |              0.07816 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8075 | >20%                    |                 5 |              0.1615  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8262 |                         |                 2 |              0.4131  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8381 | >20%                    |                10 |              0.08381 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8406 | 15-20%                  |                10 |              0.08406 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8411 | >20%                    |                 5 |              0.16822 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8517 | 15-20%                  |                10 |              0.08517 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8681 | >20%                    |                10 |              0.08681 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8787 | 15-20%                  |                10 |              0.08787 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.8844 |                         |                10 |              0.08844 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9051 | >20%                    |                 5 |              0.18102 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9149 | >20%                    |                10 |              0.09149 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9214 | >20%                    |                 5 |              0.18428 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.932  | >20%                    |                10 |              0.0932  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.933  | 5-10%                   |                 2 |              0.4665  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9411 | >20%                    |                10 |              0.09411 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9467 | >20%                    |                10 |              0.09467 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9549 | >20%                    |                10 |              0.09549 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9554 | >20%                    |                 5 |              0.19108 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9959 | >20%                    |                10 |              0.09959 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0022 | >20%                    |                10 |              0.10022 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0042 | >20%                    |                 2 |              0.5021  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0045 | >20%                    |                10 |              0.10045 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0081 | >20%                    |                 5 |              0.20162 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0084 | 10-15%                  |                 2 |              0.5042  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0199 | 5-10%                   |                10 |              0.10199 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0266 | >20%                    |                 5 |              0.20532 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0606 | >20%                    |                10 |              0.10606 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0675 |                         |                 5 |              0.2135  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0786 | 15-20%                  |                10 |              0.10786 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0974 | >20%                    |                 5 |              0.21948 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.1293 | 10-15%                  |                 2 |              0.56465 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1638 | >20%                    |                10 |              0.11638 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1897 | >20%                    |                10 |              0.11897 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.2156 | >20%                    |                10 |              0.12156 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3209 | >20%                    |                10 |              0.13209 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3985 | 15-20%                  |                 5 |              0.2797  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.4081 | 5-10%                   |                 2 |              0.70405 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4354 | 10-15%                  |                10 |              0.14354 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4626 | >20%                    |                 5 |              0.29252 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4777 | 15-20%                  |                10 |              0.14777 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5107 | >20%                    |                 5 |              0.30214 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6417 | >20%                    |                10 |              0.16417 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6575 |                         |                10 |              0.16575 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7053 | 15-20%                  |                10 |              0.17053 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8117 | >20%                    |                10 |              0.18117 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4492 | >20%                    |                10 |              0.24492 |