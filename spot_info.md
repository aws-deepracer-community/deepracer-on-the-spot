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

Data correct as of 2026-09-06 03:47:51.691649, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.13   | >20%                    |                 2 |              0.065   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1705 | 15-20%                  |                 2 |              0.08525 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1975 | >20%                    |                 2 |              0.09875 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2103 | 15-20%                  |                 5 |              0.04206 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2103 | >20%                    |                 2 |              0.10515 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2149 | >20%                    |                 5 |              0.04298 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2382 | 5-10%                   |                10 |              0.02382 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2504 | >20%                    |                 5 |              0.05008 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2534 | 15-20%                  |                 5 |              0.05068 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2612 | >20%                    |                 2 |              0.1306  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2671 | 15-20%                  |                 2 |              0.13355 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2691 | >20%                    |                 2 |              0.13455 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2824 | >20%                    |                 2 |              0.1412  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2935 | >20%                    |                 2 |              0.14675 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3076 | >20%                    |                 2 |              0.1538  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3126 | 10-15%                  |                 2 |              0.1563  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3135 | >20%                    |                 2 |              0.15675 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3318 | >20%                    |                 2 |              0.1659  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3417 | 15-20%                  |                 2 |              0.17085 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3498 | >20%                    |                 5 |              0.06996 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3518 | >20%                    |                 5 |              0.07036 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3749 | >20%                    |                 5 |              0.07498 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3814 | <5%                     |                 2 |              0.1907  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3828 | >20%                    |                 2 |              0.1914  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.388  | >20%                    |                 2 |              0.194   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4008 | 10-15%                  |                 2 |              0.2004  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4013 | >20%                    |                 2 |              0.20065 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4066 | >20%                    |                 5 |              0.08132 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4079 | 15-20%                  |                 2 |              0.20395 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4117 | 10-15%                  |                10 |              0.04117 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4142 | >20%                    |                 5 |              0.08284 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.4164 |                         |                 5 |              0.08328 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4171 | >20%                    |                 2 |              0.20855 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4317 | >20%                    |                 2 |              0.21585 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4399 | 10-15%                  |                 2 |              0.21995 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4475 | >20%                    |                 5 |              0.0895  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4589 | >20%                    |                 2 |              0.22945 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4604 | >20%                    |                10 |              0.04604 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4616 | >20%                    |                 5 |              0.09232 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4656 | >20%                    |                 5 |              0.09312 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4803 | >20%                    |                 2 |              0.24015 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4881 | >20%                    |                 5 |              0.09762 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4927 |                         |                 2 |              0.24635 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4927 | >20%                    |                 5 |              0.09854 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4991 | <5%                     |                 2 |              0.24955 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5094 | 15-20%                  |                 2 |              0.2547  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5114 | >20%                    |                 5 |              0.10228 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5148 | >20%                    |                10 |              0.05148 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5196 | >20%                    |                10 |              0.05196 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5207 | >20%                    |                 5 |              0.10414 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5275 | >20%                    |                 2 |              0.26375 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5295 | >20%                    |                 5 |              0.1059  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5332 | >20%                    |                 5 |              0.10664 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5418 | >20%                    |                 5 |              0.10836 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5437 | >20%                    |                 2 |              0.27185 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5485 | >20%                    |                 2 |              0.27425 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5486 | 10-15%                  |                 2 |              0.2743  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5515 | >20%                    |                 2 |              0.27575 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5608 | >20%                    |                 5 |              0.11216 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5621 | >20%                    |                 5 |              0.11242 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5622 | 5-10%                   |                10 |              0.05622 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5691 | 5-10%                   |                10 |              0.05691 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5797 | 15-20%                  |                10 |              0.05797 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5842 | >20%                    |                 2 |              0.2921  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5943 | >20%                    |                10 |              0.05943 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5948 | >20%                    |                 5 |              0.11896 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5954 | >20%                    |                 5 |              0.11908 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.601  | >20%                    |                10 |              0.0601  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6051 | 10-15%                  |                 5 |              0.12102 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6218 | >20%                    |                 5 |              0.12436 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6246 | >20%                    |                 2 |              0.3123  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.638  | 5-10%                   |                 2 |              0.319   |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6426 | 5-10%                   |                 5 |              0.12852 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6468 | >20%                    |                 5 |              0.12936 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6677 | 15-20%                  |                10 |              0.06677 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6699 | >20%                    |                 5 |              0.13398 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6706 | <5%                     |                 2 |              0.3353  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7085 | >20%                    |                10 |              0.07085 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7134 | >20%                    |                 5 |              0.14268 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7313 | >20%                    |                 5 |              0.14626 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7322 | 15-20%                  |                 5 |              0.14644 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7363 | >20%                    |                 2 |              0.36815 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.737  | 15-20%                  |                 5 |              0.1474  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7441 | >20%                    |                 5 |              0.14882 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7546 | >20%                    |                10 |              0.07546 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.802  | >20%                    |                 5 |              0.1604  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8023 | 15-20%                  |                 2 |              0.40115 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8064 | 15-20%                  |                10 |              0.08064 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8132 | >20%                    |                 2 |              0.4066  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8187 | >20%                    |                10 |              0.08187 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8299 | >20%                    |                10 |              0.08299 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8308 | <5%                     |                10 |              0.08308 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8509 | >20%                    |                 5 |              0.17018 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8616 | 10-15%                  |                 2 |              0.4308  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.8636 | >20%                    |                 5 |              0.17272 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8666 | >20%                    |                10 |              0.08666 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8792 | 5-10%                   |                10 |              0.08792 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8799 | >20%                    |                10 |              0.08799 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9065 | >20%                    |                10 |              0.09065 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.9069 | >20%                    |                 2 |              0.45345 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.91   | <5%                     |                 5 |              0.182   |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9303 |                         |                 2 |              0.46515 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9356 | 10-15%                  |                 2 |              0.4678  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9679 | >20%                    |                 2 |              0.48395 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9695 | 10-15%                  |                 2 |              0.48475 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9851 | >20%                    |                10 |              0.09851 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9897 | >20%                    |                10 |              0.09897 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9944 | >20%                    |                10 |              0.09944 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0336 | 15-20%                  |                10 |              0.10336 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0341 | 5-10%                   |                 2 |              0.51705 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0362 | >20%                    |                10 |              0.10362 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0459 | >20%                    |                 5 |              0.20918 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.0532 | >20%                    |                 5 |              0.21064 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0968 | >20%                    |                10 |              0.10968 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1122 | 15-20%                  |                10 |              0.11122 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1122 | >20%                    |                10 |              0.11122 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1146 | 5-10%                   |                10 |              0.11146 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1209 | >20%                    |                10 |              0.11209 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1317 | >20%                    |                 5 |              0.22634 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1374 | >20%                    |                 5 |              0.22748 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1788 | >20%                    |                10 |              0.11788 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.196  |                         |                 5 |              0.2392  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.2002 |                         |                 2 |              0.6001  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2047 | >20%                    |                10 |              0.12047 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.2117 | >20%                    |                 5 |              0.24234 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2144 | >20%                    |                10 |              0.12144 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.2404 | >20%                    |                 2 |              0.6202  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2533 |                         |                 5 |              0.25066 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2756 | >20%                    |                 5 |              0.25512 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.2871 | >20%                    |                10 |              0.12871 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3106 | 10-15%                  |                10 |              0.13106 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3155 | >20%                    |                10 |              0.13155 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3221 | >20%                    |                10 |              0.13221 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3546 | 15-20%                  |                10 |              0.13546 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.376  | 5-10%                   |                 5 |              0.2752  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4107 |                         |                10 |              0.14107 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.4561 |                         |                10 |              0.14561 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4633 | >20%                    |                 2 |              0.73165 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.5645 | >20%                    |                 5 |              0.3129  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.573  | 15-20%                  |                10 |              0.1573  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.5976 | >20%                    |                10 |              0.15976 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6011 | >20%                    |                10 |              0.16011 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.6577 | >20%                    |                10 |              0.16577 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.6778 | >20%                    |                 5 |              0.33556 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.7347 | >20%                    |                 5 |              0.34694 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.8458 | >20%                    |                 5 |              0.36916 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.9166 |                         |                10 |              0.19166 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.9607 | 15-20%                  |                 5 |              0.39214 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9812 | 5-10%                   |                 2 |              0.9906  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      2.0434 | 15-20%                  |                10 |              0.20434 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      2.0459 | 5-10%                   |                 2 |              1.02295 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.0601 | 5-10%                   |                10 |              0.20601 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5211 | >20%                    |                10 |              0.25211 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.7967 | >20%                    |                10 |              0.27967 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.9555 | >20%                    |                10 |              0.29555 |