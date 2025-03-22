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

Data correct as of 2025-03-22 01:42:04.684988, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1158 | 10-15%                  |                 2 |              0.0579  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1339 | 5-10%                   |                 5 |              0.02678 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1707 | >20%                    |                 5 |              0.03414 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.186  | 10-15%                  |                 2 |              0.093   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.207  | 5-10%                   |                 5 |              0.0414  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2082 | 5-10%                   |                 2 |              0.1041  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2118 | >20%                    |                 2 |              0.1059  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2239 | >20%                    |                 2 |              0.11195 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2339 | 15-20%                  |                 2 |              0.11695 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2348 | 15-20%                  |                 2 |              0.1174  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2433 | >20%                    |                 2 |              0.12165 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2473 | >20%                    |                 2 |              0.12365 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2514 | 5-10%                   |                10 |              0.02514 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2529 | 5-10%                   |                 2 |              0.12645 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2595 | 5-10%                   |                 2 |              0.12975 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.27   | 5-10%                   |                 2 |              0.135   |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2761 | <5%                     |                 2 |              0.13805 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.285  | <5%                     |                 2 |              0.1425  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2903 | <5%                     |                 2 |              0.14515 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2977 | 5-10%                   |                 2 |              0.14885 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2993 | >20%                    |                 2 |              0.14965 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3013 | 10-15%                  |                 2 |              0.15065 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3046 | 15-20%                  |                 5 |              0.06092 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3047 | 10-15%                  |                10 |              0.03047 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3065 | >20%                    |                 2 |              0.15325 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3069 | >20%                    |                 2 |              0.15345 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3107 | 5-10%                   |                 2 |              0.15535 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3126 | >20%                    |                 5 |              0.06252 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3349 | 10-15%                  |                 2 |              0.16745 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | 5-10%                   |                10 |              0.03351 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3402 | >20%                    |                 2 |              0.1701  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3554 | >20%                    |                 5 |              0.07108 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3564 | 10-15%                  |                10 |              0.03564 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3568 | >20%                    |                 2 |              0.1784  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3573 | >20%                    |                 2 |              0.17865 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3583 | >20%                    |                 2 |              0.17915 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3615 | >20%                    |                 2 |              0.18075 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3623 | 5-10%                   |                10 |              0.03623 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3623 | 10-15%                  |                 5 |              0.07246 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3639 | 10-15%                  |                 5 |              0.07278 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3689 | >20%                    |                 5 |              0.07378 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.3694 |                         |                 5 |              0.07388 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3701 | >20%                    |                 5 |              0.07402 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3766 | >20%                    |                 2 |              0.1883  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3805 | 15-20%                  |                10 |              0.03805 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3818 | 10-15%                  |                 5 |              0.07636 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3849 | <5%                     |                 2 |              0.19245 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.385  | 5-10%                   |                 2 |              0.1925  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3865 | >20%                    |                 2 |              0.19325 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.3923 |                         |                 2 |              0.19615 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4009 | <5%                     |                 2 |              0.20045 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4021 | 5-10%                   |                10 |              0.04021 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4071 | >20%                    |                 2 |              0.20355 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4084 | >20%                    |                 2 |              0.2042  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4105 | 5-10%                   |                 2 |              0.20525 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4126 | 15-20%                  |                 2 |              0.2063  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4154 | >20%                    |                10 |              0.04154 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4169 | >20%                    |                 5 |              0.08338 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4183 | 5-10%                   |                 2 |              0.20915 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4244 | 5-10%                   |                 5 |              0.08488 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4261 | 5-10%                   |                 2 |              0.21305 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.4274 | >20%                    |                 5 |              0.08548 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4296 | >20%                    |                 2 |              0.2148  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4309 | <5%                     |                 2 |              0.21545 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4309 | 5-10%                   |                 5 |              0.08618 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4326 | 5-10%                   |                 5 |              0.08652 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4386 | <5%                     |                 5 |              0.08772 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4395 | >20%                    |                 5 |              0.0879  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4398 | 5-10%                   |                 5 |              0.08796 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4408 | <5%                     |                 5 |              0.08816 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.442  | >20%                    |                10 |              0.0442  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4485 | >20%                    |                 2 |              0.22425 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4525 | <5%                     |                 5 |              0.0905  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4561 | 5-10%                   |                 2 |              0.22805 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4592 | 5-10%                   |                 5 |              0.09184 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4698 | >20%                    |                 5 |              0.09396 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4724 | 10-15%                  |                 5 |              0.09448 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4742 | <5%                     |                 5 |              0.09484 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4755 | >20%                    |                10 |              0.04755 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4768 | >20%                    |                 5 |              0.09536 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4775 | >20%                    |                 5 |              0.0955  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4783 | 10-15%                  |                 2 |              0.23915 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4972 | >20%                    |                 2 |              0.2486  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5009 | >20%                    |                 5 |              0.10018 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5055 | >20%                    |                 2 |              0.25275 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5078 | <5%                     |                10 |              0.05078 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5194 | 5-10%                   |                 5 |              0.10388 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.5231 | 5-10%                   |                 5 |              0.10462 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5232 | >20%                    |                 2 |              0.2616  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5264 | >20%                    |                 2 |              0.2632  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5292 | 15-20%                  |                 2 |              0.2646  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5294 | 5-10%                   |                 5 |              0.10588 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5309 | >20%                    |                 5 |              0.10618 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5312 | 10-15%                  |                 5 |              0.10624 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5337 | 10-15%                  |                10 |              0.05337 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5389 | 15-20%                  |                 2 |              0.26945 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5391 | >20%                    |                 5 |              0.10782 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5565 | >20%                    |                 5 |              0.1113  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5576 | <5%                     |                 5 |              0.11152 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5616 | >20%                    |                 2 |              0.2808  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5629 | 15-20%                  |                 5 |              0.11258 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5672 | >20%                    |                 5 |              0.11344 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5681 | 10-15%                  |                 5 |              0.11362 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5687 | 5-10%                   |                 5 |              0.11374 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5751 | 15-20%                  |                 5 |              0.11502 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5787 | <5%                     |                10 |              0.05787 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.5795 | >20%                    |                 2 |              0.28975 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5883 | >20%                    |                 2 |              0.29415 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5929 | >20%                    |                 5 |              0.11858 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5946 | <5%                     |                 5 |              0.11892 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.596  | >20%                    |                 5 |              0.1192  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6052 | <5%                     |                 2 |              0.3026  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.624  | >20%                    |                 5 |              0.1248  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6323 | >20%                    |                10 |              0.06323 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6357 | >20%                    |                10 |              0.06357 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6704 | 10-15%                  |                 5 |              0.13408 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6802 | >20%                    |                 5 |              0.13604 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6881 | >20%                    |                 2 |              0.34405 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6936 | >20%                    |                10 |              0.06936 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6952 | >20%                    |                 5 |              0.13904 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7201 | >20%                    |                10 |              0.07201 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7228 | <5%                     |                10 |              0.07228 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.723  | 5-10%                   |                 2 |              0.3615  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7249 | <5%                     |                 5 |              0.14498 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7261 | >20%                    |                10 |              0.07261 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7287 | 5-10%                   |                10 |              0.07287 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7299 | 5-10%                   |                 5 |              0.14598 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7303 | >20%                    |                10 |              0.07303 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7341 | >20%                    |                10 |              0.07341 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7472 | 15-20%                  |                 5 |              0.14944 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7482 |                         |                10 |              0.07482 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7571 | 5-10%                   |                10 |              0.07571 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7599 | <5%                     |                10 |              0.07599 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7623 | 5-10%                   |                10 |              0.07623 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7681 | >20%                    |                10 |              0.07681 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7684 | >20%                    |                 5 |              0.15368 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7746 | >20%                    |                 5 |              0.15492 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7749 | <5%                     |                10 |              0.07749 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7779 | >20%                    |                 5 |              0.15558 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8017 | <5%                     |                10 |              0.08017 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.8058 | >20%                    |                 2 |              0.4029  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8476 | >20%                    |                10 |              0.08476 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8476 | 5-10%                   |                10 |              0.08476 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8489 | 15-20%                  |                10 |              0.08489 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8564 | >20%                    |                 2 |              0.4282  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8578 | 15-20%                  |                 5 |              0.17156 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8597 | >20%                    |                10 |              0.08597 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8623 | 5-10%                   |                10 |              0.08623 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8678 | >20%                    |                10 |              0.08678 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8725 | <5%                     |                10 |              0.08725 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8776 | <5%                     |                10 |              0.08776 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8815 | 15-20%                  |                10 |              0.08815 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8825 | >20%                    |                10 |              0.08825 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8947 | >20%                    |                 2 |              0.44735 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8969 | >20%                    |                10 |              0.08969 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9013 | >20%                    |                10 |              0.09013 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9054 | >20%                    |                10 |              0.09054 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0003 | 10-15%                  |                10 |              0.10003 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0249 | >20%                    |                 5 |              0.20498 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0401 | 5-10%                   |                10 |              0.10401 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0442 | >20%                    |                10 |              0.10442 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0526 | 5-10%                   |                10 |              0.10526 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0849 | 15-20%                  |                10 |              0.10849 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0914 | >20%                    |                10 |              0.10914 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1059 | <5%                     |                10 |              0.11059 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1152 | 5-10%                   |                10 |              0.11152 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1422 | >20%                    |                 5 |              0.22844 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1743 | 15-20%                  |                10 |              0.11743 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.2042 | >20%                    |                10 |              0.12042 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2239 | >20%                    |                10 |              0.12239 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2317 | >20%                    |                10 |              0.12317 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3    | 5-10%                   |                 5 |              0.26    |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3169 | >20%                    |                 2 |              0.65845 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3504 | >20%                    |                 5 |              0.27008 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3749 | 5-10%                   |                 2 |              0.68745 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4924 | >20%                    |                10 |              0.14924 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4984 | >20%                    |                10 |              0.14984 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.5238 | 10-15%                  |                 5 |              0.30476 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6977 | >20%                    |                10 |              0.16977 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.135  | 5-10%                   |                10 |              0.2135  |