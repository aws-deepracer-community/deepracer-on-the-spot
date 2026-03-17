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

Data correct as of 2026-03-17 02:33:19.137155, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0948 | >20%                    |                 2 |              0.0474  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1019 | >20%                    |                 2 |              0.05095 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1415 | 10-15%                  |                 2 |              0.07075 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1749 | 15-20%                  |                 5 |              0.03498 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1777 | >20%                    |                 2 |              0.08885 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | >20%                    |                 5 |              0.03708 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.1866 | <5%                     |                 2 |              0.0933  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2099 | 10-15%                  |                 2 |              0.10495 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2338 | >20%                    |                 2 |              0.1169  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2473 | >20%                    |                 2 |              0.12365 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2574 | 5-10%                   |                10 |              0.02574 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2598 | >20%                    |                 2 |              0.1299  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.261  | >20%                    |                 2 |              0.1305  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.264  | 10-15%                  |                 2 |              0.132   |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2665 | >20%                    |                 2 |              0.13325 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2673 | 15-20%                  |                10 |              0.02673 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.272  | >20%                    |                 2 |              0.136   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2726 | >20%                    |                 5 |              0.05452 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2841 | 15-20%                  |                 2 |              0.14205 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2848 | 5-10%                   |                 5 |              0.05696 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2862 | >20%                    |                 5 |              0.05724 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.2895 | <5%                     |                 2 |              0.14475 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2896 | >20%                    |                 2 |              0.1448  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.293  | >20%                    |                 2 |              0.1465  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.2962 | >20%                    |                 2 |              0.1481  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2993 | 5-10%                   |                 2 |              0.14965 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3054 | 15-20%                  |                 2 |              0.1527  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3106 | >20%                    |                 5 |              0.06212 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3117 | >20%                    |                 2 |              0.15585 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3189 | <5%                     |                 2 |              0.15945 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3309 | >20%                    |                 5 |              0.06618 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.3346 | >20%                    |                10 |              0.03346 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3353 | >20%                    |                 2 |              0.16765 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3362 | <5%                     |                 5 |              0.06724 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3388 | >20%                    |                10 |              0.03388 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3418 | 5-10%                   |                10 |              0.03418 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3458 | <5%                     |                 5 |              0.06916 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3492 | 5-10%                   |                 5 |              0.06984 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.3547 | 5-10%                   |                 5 |              0.07094 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3566 | 10-15%                  |                 2 |              0.1783  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3583 | <5%                     |                 5 |              0.07166 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3608 | >20%                    |                 5 |              0.07216 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3665 | 5-10%                   |                 2 |              0.18325 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3685 |                         |                 5 |              0.0737  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3741 | 15-20%                  |                 5 |              0.07482 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3749 | >20%                    |                10 |              0.03749 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3757 | 15-20%                  |                 2 |              0.18785 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3762 | >20%                    |                10 |              0.03762 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3769 | <5%                     |                10 |              0.03769 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.377  | >20%                    |                 5 |              0.0754  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3807 | >20%                    |                 2 |              0.19035 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3809 | 5-10%                   |                 2 |              0.19045 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3841 | >20%                    |                 5 |              0.07682 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3842 | >20%                    |                 5 |              0.07684 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3897 | 15-20%                  |                 2 |              0.19485 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3916 | >20%                    |                10 |              0.03916 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3923 | <5%                     |                 5 |              0.07846 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3976 | >20%                    |                 5 |              0.07952 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3999 | >20%                    |                 2 |              0.19995 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4061 | 5-10%                   |                 2 |              0.20305 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4078 | 15-20%                  |                10 |              0.04078 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4167 | 5-10%                   |                 2 |              0.20835 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4274 | >20%                    |                 2 |              0.2137  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.4283 | 15-20%                  |                 5 |              0.08566 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4324 | <5%                     |                 5 |              0.08648 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4349 | <5%                     |                10 |              0.04349 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4366 | 15-20%                  |                 2 |              0.2183  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4373 | 15-20%                  |                 5 |              0.08746 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4377 | >20%                    |                 5 |              0.08754 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4425 | >20%                    |                 2 |              0.22125 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4429 | <5%                     |                 2 |              0.22145 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.449  | >20%                    |                 2 |              0.2245  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4572 | 5-10%                   |                 5 |              0.09144 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4691 | >20%                    |                 5 |              0.09382 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4728 | >20%                    |                 2 |              0.2364  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4738 | 15-20%                  |                 2 |              0.2369  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4804 | >20%                    |                 5 |              0.09608 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4847 | >20%                    |                 2 |              0.24235 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4861 | >20%                    |                 5 |              0.09722 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4928 | <5%                     |                10 |              0.04928 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.496  | 10-15%                  |                 5 |              0.0992  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4967 | 5-10%                   |                 2 |              0.24835 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4968 | >20%                    |                 2 |              0.2484  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5099 | >20%                    |                 2 |              0.25495 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.511  | <5%                     |                10 |              0.0511  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5122 | >20%                    |                 2 |              0.2561  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5153 | >20%                    |                 5 |              0.10306 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5162 | >20%                    |                10 |              0.05162 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5198 | >20%                    |                 5 |              0.10396 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5224 | 15-20%                  |                 5 |              0.10448 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5229 | >20%                    |                 5 |              0.10458 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5366 | 5-10%                   |                 2 |              0.2683  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5387 | >20%                    |                10 |              0.05387 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5418 | >20%                    |                 5 |              0.10836 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5457 | 15-20%                  |                10 |              0.05457 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5515 | >20%                    |                 5 |              0.1103  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5524 | 15-20%                  |                10 |              0.05524 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5555 |                         |                10 |              0.05555 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.561  | >20%                    |                 2 |              0.2805  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5654 | >20%                    |                 5 |              0.11308 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5706 | >20%                    |                10 |              0.05706 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5795 | <5%                     |                10 |              0.05795 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5997 | 15-20%                  |                10 |              0.05997 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5997 | >20%                    |                 5 |              0.11994 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6024 | <5%                     |                10 |              0.06024 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6073 | >20%                    |                 2 |              0.30365 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6081 | 5-10%                   |                 2 |              0.30405 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6132 | 5-10%                   |                 5 |              0.12264 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6166 | >20%                    |                 5 |              0.12332 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.619  | 5-10%                   |                 2 |              0.3095  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6219 | >20%                    |                10 |              0.06219 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.625  | 15-20%                  |                10 |              0.0625  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6291 | >20%                    |                 2 |              0.31455 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6295 | >20%                    |                 2 |              0.31475 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6299 | >20%                    |                10 |              0.06299 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6362 | >20%                    |                 5 |              0.12724 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6381 | >20%                    |                10 |              0.06381 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6409 | >20%                    |                10 |              0.06409 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.642  | >20%                    |                10 |              0.0642  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6569 | >20%                    |                 5 |              0.13138 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6756 | 5-10%                   |                 5 |              0.13512 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6793 | >20%                    |                 5 |              0.13586 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6908 | 15-20%                  |                 2 |              0.3454  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6936 | 10-15%                  |                 5 |              0.13872 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.715  | >20%                    |                10 |              0.0715  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7191 | >20%                    |                 5 |              0.14382 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7218 | 10-15%                  |                10 |              0.07218 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7269 | >20%                    |                 5 |              0.14538 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7337 |                         |                 2 |              0.36685 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7405 | <5%                     |                 5 |              0.1481  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7554 | >20%                    |                10 |              0.07554 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7609 | >20%                    |                 5 |              0.15218 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7648 | >20%                    |                 5 |              0.15296 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7727 | <5%                     |                 5 |              0.15454 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7765 | >20%                    |                10 |              0.07765 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7772 | 10-15%                  |                10 |              0.07772 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7966 | <5%                     |                 5 |              0.15932 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8091 | <5%                     |                10 |              0.08091 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8181 | <5%                     |                10 |              0.08181 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8344 | >20%                    |                 5 |              0.16688 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8361 | 5-10%                   |                10 |              0.08361 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8363 | >20%                    |                10 |              0.08363 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8406 | >20%                    |                 2 |              0.4203  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8578 | >20%                    |                10 |              0.08578 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8593 | >20%                    |                10 |              0.08593 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8631 | >20%                    |                 5 |              0.17262 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8779 | >20%                    |                 5 |              0.17558 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8802 | >20%                    |                10 |              0.08802 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8809 | 10-15%                  |                 2 |              0.44045 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8961 | 5-10%                   |                10 |              0.08961 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8998 | >20%                    |                 2 |              0.4499  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9035 | >20%                    |                10 |              0.09035 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9051 | <5%                     |                10 |              0.09051 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.909  | >20%                    |                10 |              0.0909  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9201 | >20%                    |                10 |              0.09201 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9227 | >20%                    |                10 |              0.09227 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.924  | >20%                    |                 5 |              0.1848  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9597 | >20%                    |                10 |              0.09597 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9714 | 5-10%                   |                 5 |              0.19428 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9728 | >20%                    |                 2 |              0.4864  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9793 | >20%                    |                 2 |              0.48965 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9797 | 15-20%                  |                10 |              0.09797 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0168 | >20%                    |                10 |              0.10168 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0187 | >20%                    |                10 |              0.10187 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0364 | 5-10%                   |                10 |              0.10364 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      1.0528 | >20%                    |                 5 |              0.21056 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.114  | 15-20%                  |                10 |              0.1114  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1466 | 10-15%                  |                 5 |              0.22932 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.155  | <5%                     |                10 |              0.1155  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1993 | >20%                    |                 2 |              0.59965 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2189 | >20%                    |                10 |              0.12189 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.3024 | <5%                     |                 5 |              0.26048 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3338 | >20%                    |                 2 |              0.6669  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3478 | 10-15%                  |                10 |              0.13478 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4148 | >20%                    |                 2 |              0.7074  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4432 | >20%                    |                10 |              0.14432 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4568 | >20%                    |                 5 |              0.29136 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4956 | >20%                    |                 5 |              0.29912 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5094 | 10-15%                  |                 5 |              0.30188 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5233 | >20%                    |                 2 |              0.76165 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5349 | 15-20%                  |                10 |              0.15349 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5675 | >20%                    |                10 |              0.15675 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3156 | 10-15%                  |                10 |              0.23156 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.6924 | <5%                     |                10 |              0.26924 |