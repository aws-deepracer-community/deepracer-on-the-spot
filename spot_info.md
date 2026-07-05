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

Data correct as of 2026-07-05 03:51:09.243335, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1213 | >20%                    |                 2 |              0.06065 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2062 | >20%                    |                 2 |              0.1031  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2087 | 15-20%                  |                 2 |              0.10435 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2281 | >20%                    |                 2 |              0.11405 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2452 | >20%                    |                 2 |              0.1226  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2516 | >20%                    |                 2 |              0.1258  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2532 | >20%                    |                 2 |              0.1266  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2581 | 15-20%                  |                 5 |              0.05162 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2624 | >20%                    |                 2 |              0.1312  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2639 | >20%                    |                 2 |              0.13195 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2644 | >20%                    |                 2 |              0.1322  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2653 | 10-15%                  |                 2 |              0.13265 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2759 | 15-20%                  |                 2 |              0.13795 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2779 | 5-10%                   |                10 |              0.02779 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2844 | 15-20%                  |                 2 |              0.1422  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2846 | >20%                    |                 2 |              0.1423  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2899 | 15-20%                  |                 5 |              0.05798 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3302 | >20%                    |                 2 |              0.1651  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3331 | >20%                    |                 5 |              0.06662 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3367 | >20%                    |                 5 |              0.06734 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3458 | >20%                    |                 2 |              0.1729  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3518 | >20%                    |                 5 |              0.07036 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3526 | <5%                     |                 2 |              0.1763  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3541 | >20%                    |                 5 |              0.07082 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.356  | 5-10%                   |                10 |              0.0356  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3637 | 5-10%                   |                10 |              0.03637 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3648 | >20%                    |                 5 |              0.07296 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.367  | >20%                    |                10 |              0.0367  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3678 | >20%                    |                 5 |              0.07356 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3751 | >20%                    |                 5 |              0.07502 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3881 | >20%                    |                 2 |              0.19405 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3982 | 10-15%                  |                 2 |              0.1991  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4021 | 10-15%                  |                 2 |              0.20105 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4044 | >20%                    |                10 |              0.04044 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4093 | >20%                    |                 2 |              0.20465 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4132 | >20%                    |                 2 |              0.2066  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4162 | >20%                    |                10 |              0.04162 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4166 | >20%                    |                 5 |              0.08332 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4217 | >20%                    |                10 |              0.04217 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4262 | >20%                    |                 2 |              0.2131  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4268 | 10-15%                  |                 2 |              0.2134  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4349 | >20%                    |                 5 |              0.08698 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4388 | <5%                     |                 2 |              0.2194  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4432 | <5%                     |                 2 |              0.2216  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4514 | >20%                    |                 2 |              0.2257  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4597 | >20%                    |                 5 |              0.09194 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4613 | 15-20%                  |                 2 |              0.23065 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4621 | 15-20%                  |                 5 |              0.09242 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4632 | >20%                    |                10 |              0.04632 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4687 | >20%                    |                10 |              0.04687 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4735 | >20%                    |                 5 |              0.0947  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4737 | >20%                    |                 5 |              0.09474 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4749 | >20%                    |                 2 |              0.23745 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4825 | >20%                    |                 2 |              0.24125 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4825 | >20%                    |                 5 |              0.0965  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4836 | >20%                    |                 2 |              0.2418  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4868 | >20%                    |                 2 |              0.2434  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4912 | >20%                    |                 5 |              0.09824 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5005 | >20%                    |                 5 |              0.1001  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5024 | >20%                    |                 5 |              0.10048 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5063 | 15-20%                  |                 2 |              0.25315 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5196 | >20%                    |                10 |              0.05196 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5238 | 15-20%                  |                 2 |              0.2619  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5296 | >20%                    |                 5 |              0.10592 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5318 | 5-10%                   |                 2 |              0.2659  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5378 | >20%                    |                 5 |              0.10756 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5461 | 5-10%                   |                 5 |              0.10922 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5475 | >20%                    |                 5 |              0.1095  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5533 | 10-15%                  |                 5 |              0.11066 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5687 | 15-20%                  |                 5 |              0.11374 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5741 | >20%                    |                 2 |              0.28705 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5929 | >20%                    |                 5 |              0.11858 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6045 | >20%                    |                10 |              0.06045 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.606  | <5%                     |                 5 |              0.1212  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6155 | >20%                    |                 5 |              0.1231  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6172 | >20%                    |                10 |              0.06172 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6284 | >20%                    |                 5 |              0.12568 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6331 | >20%                    |                10 |              0.06331 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6342 | >20%                    |                 5 |              0.12684 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.6352 |                         |                 2 |              0.3176  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6363 | 10-15%                  |                10 |              0.06363 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6411 | >20%                    |                 2 |              0.32055 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.6568 |                         |                10 |              0.06568 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6579 | >20%                    |                10 |              0.06579 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6599 |                         |                 2 |              0.32995 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6617 | >20%                    |                 5 |              0.13234 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.671  | >20%                    |                 2 |              0.3355  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6711 | >20%                    |                 2 |              0.33555 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6727 | >20%                    |                 5 |              0.13454 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6818 | >20%                    |                 5 |              0.13636 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6893 | >20%                    |                 5 |              0.13786 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6894 | >20%                    |                 2 |              0.3447  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6952 | >20%                    |                10 |              0.06952 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7079 | >20%                    |                 2 |              0.35395 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7144 | 5-10%                   |                 2 |              0.3572  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7169 | 5-10%                   |                 5 |              0.14338 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7204 | <5%                     |                10 |              0.07204 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7253 | 10-15%                  |                 2 |              0.36265 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7258 | >20%                    |                10 |              0.07258 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7331 | >20%                    |                10 |              0.07331 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7525 | >20%                    |                 5 |              0.1505  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7602 | 15-20%                  |                10 |              0.07602 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7736 | 5-10%                   |                10 |              0.07736 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7816 | 15-20%                  |                10 |              0.07816 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7879 | >20%                    |                10 |              0.07879 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7945 | >20%                    |                 5 |              0.1589  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7946 | >20%                    |                 5 |              0.15892 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7961 | >20%                    |                 5 |              0.15922 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8044 | >20%                    |                 2 |              0.4022  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8267 | >20%                    |                10 |              0.08267 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8307 | >20%                    |                10 |              0.08307 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8398 | >20%                    |                10 |              0.08398 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8423 | 5-10%                   |                10 |              0.08423 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8598 | 15-20%                  |                10 |              0.08598 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8601 | >20%                    |                10 |              0.08601 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8665 | >20%                    |                10 |              0.08665 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8752 | 15-20%                  |                10 |              0.08752 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.888  | >20%                    |                 5 |              0.1776  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8883 | 15-20%                  |                10 |              0.08883 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8901 | >20%                    |                 5 |              0.17802 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8968 | 10-15%                  |                 2 |              0.4484  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9047 | 10-15%                  |                 2 |              0.45235 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9156 | >20%                    |                10 |              0.09156 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9187 | >20%                    |                10 |              0.09187 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9212 | >20%                    |                10 |              0.09212 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9357 | >20%                    |                 5 |              0.18714 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9379 | >20%                    |                10 |              0.09379 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9601 |                         |                 5 |              0.19202 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9848 | >20%                    |                10 |              0.09848 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9882 | >20%                    |                10 |              0.09882 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9993 | >20%                    |                 5 |              0.19986 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0128 | >20%                    |                 5 |              0.20256 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0145 | 5-10%                   |                10 |              0.10145 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0151 | >20%                    |                10 |              0.10151 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0247 | >20%                    |                 5 |              0.20494 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0284 | >20%                    |                10 |              0.10284 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0291 | 15-20%                  |                10 |              0.10291 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0656 | >20%                    |                 2 |              0.5328  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1091 | >20%                    |                 5 |              0.22182 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1311 | >20%                    |                 5 |              0.22622 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.139  | >20%                    |                10 |              0.1139  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.149  |                         |                10 |              0.1149  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1583 | >20%                    |                10 |              0.11583 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2064 |                         |                 5 |              0.24128 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3002 | 15-20%                  |                10 |              0.13002 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4001 | >20%                    |                 5 |              0.28002 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.4069 | 5-10%                   |                 2 |              0.70345 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4297 | >20%                    |                10 |              0.14297 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4484 | 15-20%                  |                 5 |              0.28968 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4718 | 15-20%                  |                10 |              0.14718 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.568  | >20%                    |                 5 |              0.3136  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.6809 | 10-15%                  |                10 |              0.16809 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.7751 | 5-10%                   |                 2 |              0.88755 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.0421 | >20%                    |                10 |              0.20421 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3703 | >20%                    |                10 |              0.23703 |