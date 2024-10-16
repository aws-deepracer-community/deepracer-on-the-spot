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

Data correct as of 2024-10-16 01:38:49.653963, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1037 |                         |                 2 |              0.05185 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1174 |                         |                 2 |              0.0587  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.124  | <5%                     |                 2 |              0.062   |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1271 |                         |                 2 |              0.06355 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1394 | 10-15%                  |                 2 |              0.0697  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1403 |                         |                 5 |              0.02806 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 |                         |                 5 |              0.03178 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 |                         |                 2 |              0.0831  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1708 | <5%                     |                 2 |              0.0854  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.172  |                         |                 5 |              0.0344  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1853 | 15-20%                  |                 2 |              0.09265 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2071 | >20%                    |                 2 |              0.10355 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2137 |                         |                10 |              0.02137 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2161 | >20%                    |                 5 |              0.04322 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2186 | <5%                     |                 2 |              0.1093  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 |                         |                 5 |              0.04498 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2264 | >20%                    |                 2 |              0.1132  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2321 | >20%                    |                 5 |              0.04642 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2372 | <5%                     |                 2 |              0.1186  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 |                         |                10 |              0.02419 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2521 | <5%                     |                 2 |              0.12605 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2539 | <5%                     |                 2 |              0.12695 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2592 | 15-20%                  |                 2 |              0.1296  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2619 |                         |                10 |              0.02619 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2678 | <5%                     |                 2 |              0.1339  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2691 | >20%                    |                 5 |              0.05382 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2704 | <5%                     |                 2 |              0.1352  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2788 | >20%                    |                 5 |              0.05576 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2802 | 10-15%                  |                 2 |              0.1401  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2833 | 10-15%                  |                 2 |              0.14165 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.284  | <5%                     |                 2 |              0.142   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2883 | 5-10%                   |                 2 |              0.14415 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2945 | 15-20%                  |                 2 |              0.14725 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2997 | 15-20%                  |                 2 |              0.14985 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3137 | 15-20%                  |                 2 |              0.15685 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3212 | >20%                    |                 5 |              0.06424 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3338 | <5%                     |                 2 |              0.1669  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3371 | 5-10%                   |                 5 |              0.06742 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3385 | >20%                    |                 2 |              0.16925 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 |                         |                10 |              0.03424 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3446 | 5-10%                   |                 5 |              0.06892 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3471 | <5%                     |                 5 |              0.06942 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.348  | <5%                     |                 2 |              0.174   |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3482 | >20%                    |                 5 |              0.06964 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3519 | <5%                     |                10 |              0.03519 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3521 | 15-20%                  |                10 |              0.03521 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.3667 | <5%                     |                 2 |              0.18335 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3798 | 5-10%                   |                 5 |              0.07596 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3873 | >20%                    |                 2 |              0.19365 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3917 | 5-10%                   |                10 |              0.03917 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3967 | <5%                     |                 5 |              0.07934 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3992 | 15-20%                  |                 5 |              0.07984 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3998 | <5%                     |                 5 |              0.07996 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4017 | <5%                     |                 5 |              0.08034 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.4197 | 5-10%                   |                 5 |              0.08394 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4204 | 5-10%                   |                10 |              0.04204 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4206 | <5%                     |                 2 |              0.2103  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4248 | 5-10%                   |                 2 |              0.2124  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4272 | >20%                    |                 5 |              0.08544 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4274 | 15-20%                  |                 5 |              0.08548 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4308 | 5-10%                   |                 2 |              0.2154  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4332 | >20%                    |                 2 |              0.2166  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4385 | >20%                    |                 2 |              0.21925 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.443  | 10-15%                  |                 5 |              0.0886  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4457 | 15-20%                  |                 2 |              0.22285 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4482 | >20%                    |                 2 |              0.2241  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4532 | >20%                    |                 2 |              0.2266  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4613 | >20%                    |                 5 |              0.09226 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4629 | >20%                    |                10 |              0.04629 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4654 | 10-15%                  |                 5 |              0.09308 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4668 | 15-20%                  |                 5 |              0.09336 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4697 | 5-10%                   |                 2 |              0.23485 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4706 | <5%                     |                 5 |              0.09412 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4738 | >20%                    |                10 |              0.04738 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4843 | <5%                     |                 5 |              0.09686 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4866 | >20%                    |                 2 |              0.2433  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4954 | <5%                     |                 2 |              0.2477  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4969 | 10-15%                  |                 5 |              0.09938 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.504  | <5%                     |                 5 |              0.1008  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5087 | >20%                    |                 2 |              0.25435 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5216 | <5%                     |                 5 |              0.10432 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.523  | <5%                     |                 5 |              0.1046  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5266 | >20%                    |                 5 |              0.10532 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5295 | 5-10%                   |                10 |              0.05295 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5365 | <5%                     |                 5 |              0.1073  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.5612 | <5%                     |                10 |              0.05612 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5633 | 5-10%                   |                 5 |              0.11266 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5659 | 5-10%                   |                10 |              0.05659 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5664 | >20%                    |                 5 |              0.11328 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.5708 | >20%                    |                 2 |              0.2854  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5772 | >20%                    |                 5 |              0.11544 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5781 | 15-20%                  |                 5 |              0.11562 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5872 | 15-20%                  |                10 |              0.05872 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5909 | 5-10%                   |                10 |              0.05909 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5998 | 15-20%                  |                 5 |              0.11996 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6027 | 15-20%                  |                10 |              0.06027 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6032 | >20%                    |                 2 |              0.3016  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6101 | >20%                    |                 5 |              0.12202 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.617  | >20%                    |                10 |              0.0617  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6232 | >20%                    |                 5 |              0.12464 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6513 | <5%                     |                10 |              0.06513 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6569 | <5%                     |                10 |              0.06569 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.6607 | <5%                     |                10 |              0.06607 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.6655 | 15-20%                  |                10 |              0.06655 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6701 | >20%                    |                10 |              0.06701 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6763 | 5-10%                   |                 5 |              0.13526 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6917 | <5%                     |                10 |              0.06917 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6964 | >20%                    |                 2 |              0.3482  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7002 | 5-10%                   |                10 |              0.07002 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.733  | >20%                    |                 5 |              0.1466  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7416 | >20%                    |                10 |              0.07416 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7538 | 5-10%                   |                10 |              0.07538 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7681 | >20%                    |                10 |              0.07681 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7799 | 10-15%                  |                10 |              0.07799 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7805 | 10-15%                  |                 5 |              0.1561  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7931 | 5-10%                   |                10 |              0.07931 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7932 | 15-20%                  |                10 |              0.07932 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8174 | >20%                    |                10 |              0.08174 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8326 | 15-20%                  |                10 |              0.08326 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8761 | <5%                     |                10 |              0.08761 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8793 | 10-15%                  |                10 |              0.08793 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8821 | >20%                    |                 5 |              0.17642 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8958 | 10-15%                  |                 2 |              0.4479  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.91   | <5%                     |                 2 |              0.455   |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.911  | >20%                    |                10 |              0.0911  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9193 | >20%                    |                10 |              0.09193 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9318 | >20%                    |                10 |              0.09318 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.939  | <5%                     |                10 |              0.0939  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9616 | 5-10%                   |                10 |              0.09616 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0207 | >20%                    |                 5 |              0.20414 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0252 | 10-15%                  |                 5 |              0.20504 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0286 | <5%                     |                10 |              0.10286 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0313 | >20%                    |                10 |              0.10313 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1113 | >20%                    |                10 |              0.11113 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1811 | >20%                    |                10 |              0.11811 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4754 | 5-10%                   |                10 |              0.14754 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.5202 | >20%                    |                10 |              0.15202 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5414 | 5-10%                   |                10 |              0.15414 |