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

Data correct as of 2025-11-03 01:56:09.150855, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0919 | 5-10%                   |                 2 |              0.04595 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.143  | >20%                    |                 5 |              0.0286  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1462 | >20%                    |                 2 |              0.0731  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1921 | >20%                    |                 2 |              0.09605 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1936 | 10-15%                  |                 5 |              0.03872 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2332 | >20%                    |                 2 |              0.1166  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2476 | >20%                    |                 5 |              0.04952 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2478 | >20%                    |                 5 |              0.04956 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2553 | >20%                    |                 2 |              0.12765 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.259  | >20%                    |                 2 |              0.1295  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2618 | >20%                    |                 2 |              0.1309  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2629 | >20%                    |                 2 |              0.13145 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2646 | 10-15%                  |                 2 |              0.1323  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2656 | 10-15%                  |                 2 |              0.1328  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2676 | 5-10%                   |                 2 |              0.1338  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.27   | 10-15%                  |                 2 |              0.135   |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2792 | 5-10%                   |                 2 |              0.1396  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2874 | >20%                    |                 2 |              0.1437  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2975 | >20%                    |                 2 |              0.14875 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3063 | 15-20%                  |                 2 |              0.15315 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3075 | >20%                    |                 2 |              0.15375 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3093 | >20%                    |                 2 |              0.15465 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3201 | 15-20%                  |                 2 |              0.16005 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3206 | >20%                    |                 5 |              0.06412 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3246 | >20%                    |                 2 |              0.1623  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3345 | >20%                    |                 2 |              0.16725 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3385 | >20%                    |                 2 |              0.16925 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3506 | >20%                    |                 5 |              0.07012 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3685 | >20%                    |                 2 |              0.18425 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3714 | <5%                     |                10 |              0.03714 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3788 | 15-20%                  |                 2 |              0.1894  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3824 | >20%                    |                 2 |              0.1912  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3911 | >20%                    |                 2 |              0.19555 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3963 | >20%                    |                 2 |              0.19815 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3963 | >20%                    |                 5 |              0.07926 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3981 | >20%                    |                 5 |              0.07962 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3982 | 10-15%                  |                 2 |              0.1991  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4088 | >20%                    |                10 |              0.04088 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4131 | >20%                    |                 2 |              0.20655 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4168 | >20%                    |                 2 |              0.2084  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4173 | 5-10%                   |                 5 |              0.08346 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4193 | 5-10%                   |                 2 |              0.20965 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4217 | >20%                    |                 2 |              0.21085 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4261 | >20%                    |                 5 |              0.08522 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4269 | 15-20%                  |                 2 |              0.21345 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4282 | <5%                     |                 2 |              0.2141  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4336 | >20%                    |                 5 |              0.08672 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.434  | 5-10%                   |                 2 |              0.217   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4343 | >20%                    |                 2 |              0.21715 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4455 | >20%                    |                 2 |              0.22275 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.446  | >20%                    |                 5 |              0.0892  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4474 | >20%                    |                 5 |              0.08948 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4505 | >20%                    |                 2 |              0.22525 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4524 | >20%                    |                 5 |              0.09048 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4555 | >20%                    |                 5 |              0.0911  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4558 | 15-20%                  |                 5 |              0.09116 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4572 | >20%                    |                 2 |              0.2286  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4588 | >20%                    |                 2 |              0.2294  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4624 | >20%                    |                 5 |              0.09248 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4649 | >20%                    |                 5 |              0.09298 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4661 | >20%                    |                 5 |              0.09322 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4663 | >20%                    |                 5 |              0.09326 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4681 | >20%                    |                 2 |              0.23405 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.469  | 5-10%                   |                 2 |              0.2345  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4693 | >20%                    |                 5 |              0.09386 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4775 | 10-15%                  |                 2 |              0.23875 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.479  | 10-15%                  |                 2 |              0.2395  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4843 | >20%                    |                 5 |              0.09686 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4882 | >20%                    |                 2 |              0.2441  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.495  | >20%                    |                 2 |              0.2475  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4959 | >20%                    |                10 |              0.04959 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4969 | 15-20%                  |                10 |              0.04969 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5035 | >20%                    |                 5 |              0.1007  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5095 | >20%                    |                 5 |              0.1019  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5117 | >20%                    |                10 |              0.05117 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5184 | >20%                    |                 2 |              0.2592  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5202 | 15-20%                  |                 5 |              0.10404 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5465 | >20%                    |                 5 |              0.1093  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5512 | >20%                    |                 5 |              0.11024 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5583 | >20%                    |                 5 |              0.11166 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5697 | >20%                    |                 5 |              0.11394 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5724 | >20%                    |                 5 |              0.11448 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5794 | 15-20%                  |                 2 |              0.2897  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5886 | >20%                    |                 2 |              0.2943  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6106 | 10-15%                  |                 5 |              0.12212 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6113 | >20%                    |                 5 |              0.12226 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6134 | >20%                    |                 5 |              0.12268 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6154 | >20%                    |                 5 |              0.12308 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6155 | >20%                    |                 5 |              0.1231  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6176 | 5-10%                   |                10 |              0.06176 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6183 | >20%                    |                 5 |              0.12366 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.63   | 10-15%                  |                 5 |              0.126   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6338 | >20%                    |                 5 |              0.12676 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6342 | >20%                    |                 2 |              0.3171  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6346 | 15-20%                  |                 2 |              0.3173  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6469 | 15-20%                  |                 5 |              0.12938 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6583 | >20%                    |                 5 |              0.13166 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6641 | >20%                    |                10 |              0.06641 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6658 | >20%                    |                 2 |              0.3329  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6707 | 10-15%                  |                 5 |              0.13414 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6711 | 15-20%                  |                10 |              0.06711 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6751 | 10-15%                  |                 2 |              0.33755 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6795 | >20%                    |                 5 |              0.1359  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6824 | >20%                    |                 5 |              0.13648 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6835 | >20%                    |                 5 |              0.1367  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6854 | 15-20%                  |                10 |              0.06854 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6936 | 15-20%                  |                10 |              0.06936 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6979 | >20%                    |                 5 |              0.13958 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.7054 | >20%                    |                 5 |              0.14108 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7066 | >20%                    |                10 |              0.07066 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7167 | 15-20%                  |                 5 |              0.14334 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7168 | >20%                    |                10 |              0.07168 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7289 | >20%                    |                10 |              0.07289 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.7377 | >20%                    |                10 |              0.07377 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7407 | >20%                    |                10 |              0.07407 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7441 | >20%                    |                10 |              0.07441 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.745  | >20%                    |                10 |              0.0745  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7469 | >20%                    |                 5 |              0.14938 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7492 | <5%                     |                10 |              0.07492 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7623 | 15-20%                  |                10 |              0.07623 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7659 | 10-15%                  |                 5 |              0.15318 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7673 | >20%                    |                10 |              0.07673 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7682 | >20%                    |                 2 |              0.3841  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7801 | 15-20%                  |                10 |              0.07801 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7807 | >20%                    |                 5 |              0.15614 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7827 | >20%                    |                10 |              0.07827 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7881 | 10-15%                  |                 2 |              0.39405 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7894 | <5%                     |                10 |              0.07894 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8105 | 15-20%                  |                 5 |              0.1621  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8164 | >20%                    |                 5 |              0.16328 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8213 | 15-20%                  |                10 |              0.08213 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8224 | 15-20%                  |                10 |              0.08224 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8271 | <5%                     |                10 |              0.08271 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8288 | 10-15%                  |                10 |              0.08288 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8312 | 15-20%                  |                10 |              0.08312 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8417 | >20%                    |                 5 |              0.16834 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8443 | >20%                    |                10 |              0.08443 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.845  | >20%                    |                 5 |              0.169   |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8637 | >20%                    |                10 |              0.08637 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8872 | 10-15%                  |                10 |              0.08872 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8888 | >20%                    |                10 |              0.08888 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8889 | >20%                    |                 5 |              0.17778 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8931 | 10-15%                  |                10 |              0.08931 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8993 | >20%                    |                 2 |              0.44965 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9155 | 5-10%                   |                10 |              0.09155 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9265 | 15-20%                  |                10 |              0.09265 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9394 | >20%                    |                10 |              0.09394 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9581 | 10-15%                  |                 2 |              0.47905 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9587 | >20%                    |                 2 |              0.47935 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9786 | >20%                    |                10 |              0.09786 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9941 | 5-10%                   |                10 |              0.09941 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0147 | >20%                    |                10 |              0.10147 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      1.0225 | 5-10%                   |                10 |              0.10225 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0331 | <5%                     |                10 |              0.10331 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0349 | >20%                    |                 5 |              0.20698 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.037  | 5-10%                   |                10 |              0.1037  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0572 | >20%                    |                10 |              0.10572 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0618 | >20%                    |                 2 |              0.5309  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0671 | >20%                    |                10 |              0.10671 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1017 | >20%                    |                10 |              0.11017 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1017 | 15-20%                  |                10 |              0.11017 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.121  | >20%                    |                 5 |              0.2242  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1249 | 15-20%                  |                10 |              0.11249 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1464 | >20%                    |                 5 |              0.22928 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1487 | 10-15%                  |                10 |              0.11487 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1838 | 10-15%                  |                 5 |              0.23676 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1898 | >20%                    |                 5 |              0.23796 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2565 | >20%                    |                10 |              0.12565 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2903 | 10-15%                  |                10 |              0.12903 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.3879 | >20%                    |                10 |              0.13879 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4914 | 5-10%                   |                 2 |              0.7457  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5595 | >20%                    |                10 |              0.15595 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5774 | >20%                    |                10 |              0.15774 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5891 | 10-15%                  |                 5 |              0.31782 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6235 | >20%                    |                10 |              0.16235 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6344 | >20%                    |                10 |              0.16344 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.7488 | 10-15%                  |                10 |              0.17488 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3443 | 15-20%                  |                10 |              0.23443 |