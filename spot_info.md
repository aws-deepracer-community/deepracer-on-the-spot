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

Data correct as of 2024-11-19 01:42:38.181818, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1331 | >20%                    |                 5 |              0.02662 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 5-10%                   |                 2 |              0.0831  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1749 | 10-15%                  |                 2 |              0.08745 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2207 | 15-20%                  |                 2 |              0.11035 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2225 | 5-10%                   |                 2 |              0.11125 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.2231 | >20%                    |                 5 |              0.04462 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 5-10%                   |                 2 |              0.1121  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2391 | 5-10%                   |                 2 |              0.11955 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2433 | <5%                     |                 2 |              0.12165 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2601 | 5-10%                   |                 2 |              0.13005 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2689 | 5-10%                   |                 2 |              0.13445 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2783 | <5%                     |                 2 |              0.13915 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2875 | 5-10%                   |                 2 |              0.14375 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2917 | <5%                     |                 2 |              0.14585 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | <5%                     |                 5 |              0.06008 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3202 | <5%                     |                 2 |              0.1601  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3326 | 10-15%                  |                 2 |              0.1663  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3335 | <5%                     |                 5 |              0.0667  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3394 | 15-20%                  |                 5 |              0.06788 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3436 | >20%                    |                 2 |              0.1718  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3448 | 5-10%                   |                 2 |              0.1724  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.3456 | 5-10%                   |                 2 |              0.1728  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3504 | <5%                     |                 2 |              0.1752  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3571 | <5%                     |                10 |              0.03571 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3573 | >20%                    |                 2 |              0.17865 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3656 | >20%                    |                 2 |              0.1828  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3673 | <5%                     |                 5 |              0.07346 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3717 | <5%                     |                 2 |              0.18585 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3735 | >20%                    |                 5 |              0.0747  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3867 | 15-20%                  |                 5 |              0.07734 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3924 | >20%                    |                 2 |              0.1962  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.393  | 5-10%                   |                 2 |              0.1965  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3994 | >20%                    |                 2 |              0.1997  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.414  | 5-10%                   |                 2 |              0.207   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4162 | 5-10%                   |                 2 |              0.2081  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4186 | 5-10%                   |                 2 |              0.2093  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4195 | >20%                    |                 5 |              0.0839  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4233 | <5%                     |                 2 |              0.21165 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.425  | >20%                    |                 5 |              0.085   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4258 | >20%                    |                 2 |              0.2129  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4289 | 10-15%                  |                 2 |              0.21445 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4354 | >20%                    |                 2 |              0.2177  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4397 | >20%                    |                 2 |              0.21985 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4447 | 5-10%                   |                 5 |              0.08894 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4481 | 10-15%                  |                 5 |              0.08962 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4503 | 5-10%                   |                 5 |              0.09006 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | 5-10%                   |                10 |              0.04529 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4546 | 10-15%                  |                 5 |              0.09092 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4547 | <5%                     |                 5 |              0.09094 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4568 | 10-15%                  |                 5 |              0.09136 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4612 | <5%                     |                 2 |              0.2306  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4716 | <5%                     |                10 |              0.04716 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4718 | 15-20%                  |                 5 |              0.09436 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.479  | 15-20%                  |                 5 |              0.0958  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4833 | 15-20%                  |                 5 |              0.09666 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.485  | >20%                    |                10 |              0.0485  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4887 | <5%                     |                 2 |              0.24435 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.4952 | 5-10%                   |                 5 |              0.09904 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.5022 | 5-10%                   |                 2 |              0.2511  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5047 | 10-15%                  |                 2 |              0.25235 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5116 | 10-15%                  |                 2 |              0.2558  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5143 | <5%                     |                 5 |              0.10286 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5147 | <5%                     |                 5 |              0.10294 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5382 | 5-10%                   |                 2 |              0.2691  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5392 | <5%                     |                 5 |              0.10784 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5395 | 15-20%                  |                 5 |              0.1079  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5428 | >20%                    |                 5 |              0.10856 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5511 | 10-15%                  |                 5 |              0.11022 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5532 | >20%                    |                 5 |              0.11064 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5545 | 5-10%                   |                 5 |              0.1109  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5546 | >20%                    |                10 |              0.05546 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5658 | >20%                    |                 5 |              0.11316 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5659 | >20%                    |                10 |              0.05659 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5694 | 10-15%                  |                10 |              0.05694 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5705 | >20%                    |                 2 |              0.28525 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5749 | 10-15%                  |                 5 |              0.11498 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5867 | >20%                    |                10 |              0.05867 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5909 | 15-20%                  |                 2 |              0.29545 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6201 | 5-10%                   |                 5 |              0.12402 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6225 | 5-10%                   |                10 |              0.06225 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6698 | <5%                     |                 5 |              0.13396 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6728 | >20%                    |                 5 |              0.13456 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6774 | >20%                    |                 2 |              0.3387  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6799 | 5-10%                   |                10 |              0.06799 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6803 | >20%                    |                 5 |              0.13606 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6845 | 15-20%                  |                 5 |              0.1369  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6888 | 10-15%                  |                10 |              0.06888 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6909 | >20%                    |                10 |              0.06909 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6933 | <5%                     |                 5 |              0.13866 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6967 | 5-10%                   |                 5 |              0.13934 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7089 | <5%                     |                 5 |              0.14178 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7227 | >20%                    |                10 |              0.07227 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7255 | 5-10%                   |                10 |              0.07255 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.7294 | >20%                    |                10 |              0.07294 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7389 | 15-20%                  |                 5 |              0.14778 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7441 | <5%                     |                10 |              0.07441 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7592 | <5%                     |                 5 |              0.15184 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7633 | 10-15%                  |                10 |              0.07633 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7685 | 10-15%                  |                10 |              0.07685 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7831 | <5%                     |                 2 |              0.39155 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7868 | 10-15%                  |                10 |              0.07868 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7927 | 5-10%                   |                 5 |              0.15854 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8007 | 5-10%                   |                10 |              0.08007 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8055 | >20%                    |                10 |              0.08055 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8081 | 5-10%                   |                10 |              0.08081 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8501 | >20%                    |                 5 |              0.17002 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8518 | 10-15%                  |                10 |              0.08518 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8559 | 5-10%                   |                10 |              0.08559 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8639 | >20%                    |                10 |              0.08639 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8677 | 5-10%                   |                10 |              0.08677 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8694 | 5-10%                   |                10 |              0.08694 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9166 | 5-10%                   |                10 |              0.09166 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9715 | 15-20%                  |                10 |              0.09715 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9799 | <5%                     |                10 |              0.09799 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9903 | <5%                     |                10 |              0.09903 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9941 | 5-10%                   |                10 |              0.09941 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0067 | 5-10%                   |                10 |              0.10067 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0135 | <5%                     |                10 |              0.10135 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.034  | 15-20%                  |                10 |              0.1034  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0352 | >20%                    |                10 |              0.10352 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0593 | <5%                     |                10 |              0.10593 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0658 | 15-20%                  |                10 |              0.10658 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1397 | 10-15%                  |                10 |              0.11397 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1701 | 10-15%                  |                10 |              0.11701 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3505 | >20%                    |                10 |              0.13505 |