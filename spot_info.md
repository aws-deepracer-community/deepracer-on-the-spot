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

Data correct as of 2025-12-28 02:11:33.445242, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0969 | >20%                    |                 2 |              0.04845 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1384 | >20%                    |                 2 |              0.0692  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1547 | >20%                    |                 2 |              0.07735 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.165  | >20%                    |                 2 |              0.0825  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.176  | <5%                     |                 2 |              0.088   |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | >20%                    |                 5 |              0.03708 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2317 | >20%                    |                 2 |              0.11585 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.236  | >20%                    |                 2 |              0.118   |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2391 | 5-10%                   |                 2 |              0.11955 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2592 | <5%                     |                 2 |              0.1296  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2597 | >20%                    |                 2 |              0.12985 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2632 | >20%                    |                 2 |              0.1316  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2633 | >20%                    |                 2 |              0.13165 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2721 | >20%                    |                 2 |              0.13605 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2792 | 5-10%                   |                10 |              0.02792 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.28   | >20%                    |                 2 |              0.14    |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2826 | >20%                    |                 2 |              0.1413  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.285  | 5-10%                   |                 5 |              0.057   |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2855 | 15-20%                  |                 2 |              0.14275 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2887 | >20%                    |                 5 |              0.05774 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2999 | >20%                    |                10 |              0.02999 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3014 | >20%                    |                 2 |              0.1507  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3175 | >20%                    |                 2 |              0.15875 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3196 | >20%                    |                 2 |              0.1598  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3294 | >20%                    |                 2 |              0.1647  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3298 | >20%                    |                 5 |              0.06596 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3416 | >20%                    |                 5 |              0.06832 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3417 | 5-10%                   |                10 |              0.03417 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.342  | 15-20%                  |                 5 |              0.0684  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.347  | >20%                    |                 5 |              0.0694  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3497 | >20%                    |                 5 |              0.06994 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3587 | >20%                    |                 5 |              0.07174 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3588 | >20%                    |                 5 |              0.07176 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.36   | >20%                    |                 5 |              0.072   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3609 | >20%                    |                 2 |              0.18045 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3629 | 5-10%                   |                 2 |              0.18145 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3692 | 10-15%                  |                 2 |              0.1846  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3719 | >20%                    |                 2 |              0.18595 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.374  | <5%                     |                 5 |              0.0748  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3744 | >20%                    |                 2 |              0.1872  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3781 | >20%                    |                 2 |              0.18905 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3785 | >20%                    |                 2 |              0.18925 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3794 | >20%                    |                 2 |              0.1897  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3823 | 10-15%                  |                 2 |              0.19115 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3864 | >20%                    |                 5 |              0.07728 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3889 | >20%                    |                 2 |              0.19445 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3916 | >20%                    |                10 |              0.03916 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3927 | >20%                    |                 5 |              0.07854 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3937 | >20%                    |                10 |              0.03937 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4051 | 15-20%                  |                10 |              0.04051 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4061 | <5%                     |                10 |              0.04061 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4142 | <5%                     |                 5 |              0.08284 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4157 | >20%                    |                 5 |              0.08314 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4186 | <5%                     |                10 |              0.04186 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4188 | >20%                    |                 5 |              0.08376 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.419  | >20%                    |                 2 |              0.2095  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4207 | <5%                     |                 2 |              0.21035 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4208 | >20%                    |                10 |              0.04208 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4218 | >20%                    |                 5 |              0.08436 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4257 | 10-15%                  |                 2 |              0.21285 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4365 | >20%                    |                 2 |              0.21825 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4379 | >20%                    |                 2 |              0.21895 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4397 | >20%                    |                 5 |              0.08794 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4407 | >20%                    |                 5 |              0.08814 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4427 | >20%                    |                10 |              0.04427 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4454 | <5%                     |                 2 |              0.2227  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4462 | >20%                    |                10 |              0.04462 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4569 | >20%                    |                 5 |              0.09138 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.465  | >20%                    |                 2 |              0.2325  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4677 | >20%                    |                 5 |              0.09354 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4742 | >20%                    |                 2 |              0.2371  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4876 | >20%                    |                 2 |              0.2438  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4945 | 15-20%                  |                 2 |              0.24725 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.497  | >20%                    |                 5 |              0.0994  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5006 | 15-20%                  |                 2 |              0.2503  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5015 | 15-20%                  |                 5 |              0.1003  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5049 | >20%                    |                 2 |              0.25245 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5059 | >20%                    |                 2 |              0.25295 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5086 | >20%                    |                 5 |              0.10172 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5138 | >20%                    |                 2 |              0.2569  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5162 | 15-20%                  |                 5 |              0.10324 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5188 | <5%                     |                 5 |              0.10376 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5275 | >20%                    |                 5 |              0.1055  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5362 | >20%                    |                 2 |              0.2681  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5413 | >20%                    |                 5 |              0.10826 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5438 | >20%                    |                 5 |              0.10876 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5452 | 10-15%                  |                 5 |              0.10904 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5528 | 15-20%                  |                 5 |              0.11056 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5529 | 15-20%                  |                10 |              0.05529 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5534 | 10-15%                  |                 5 |              0.11068 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5589 | 5-10%                   |                 5 |              0.11178 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5616 | >20%                    |                 5 |              0.11232 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5657 | >20%                    |                 5 |              0.11314 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5673 | >20%                    |                 2 |              0.28365 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5838 | >20%                    |                10 |              0.05838 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5886 | >20%                    |                 5 |              0.11772 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6023 | >20%                    |                10 |              0.06023 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6059 | 10-15%                  |                 2 |              0.30295 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6063 | 15-20%                  |                 5 |              0.12126 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6099 | 5-10%                   |                 5 |              0.12198 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.611  | <5%                     |                 5 |              0.1222  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6329 | 10-15%                  |                 5 |              0.12658 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6331 | >20%                    |                 2 |              0.31655 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6342 | 15-20%                  |                 5 |              0.12684 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6408 | >20%                    |                 5 |              0.12816 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.648  | >20%                    |                 2 |              0.324   |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6543 | 15-20%                  |                10 |              0.06543 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6585 | 5-10%                   |                 5 |              0.1317  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6586 | >20%                    |                 2 |              0.3293  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.66   | >20%                    |                10 |              0.066   |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6745 | >20%                    |                 2 |              0.33725 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6773 | >20%                    |                 5 |              0.13546 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6893 | 10-15%                  |                 5 |              0.13786 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7043 | >20%                    |                 2 |              0.35215 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7104 | 15-20%                  |                10 |              0.07104 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.7139 | >20%                    |                 5 |              0.14278 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7254 | >20%                    |                10 |              0.07254 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7357 | 15-20%                  |                10 |              0.07357 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7393 | 15-20%                  |                 2 |              0.36965 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7476 | 5-10%                   |                10 |              0.07476 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.749  | >20%                    |                 5 |              0.1498  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7521 | >20%                    |                10 |              0.07521 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7538 | 15-20%                  |                10 |              0.07538 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7571 | >20%                    |                10 |              0.07571 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7651 | <5%                     |                10 |              0.07651 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7655 | >20%                    |                10 |              0.07655 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7664 | >20%                    |                10 |              0.07664 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7712 | >20%                    |                10 |              0.07712 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7794 | >20%                    |                10 |              0.07794 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7897 | >20%                    |                10 |              0.07897 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7992 | >20%                    |                 2 |              0.3996  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8033 | 15-20%                  |                 5 |              0.16066 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8049 | >20%                    |                 5 |              0.16098 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8081 | <5%                     |                10 |              0.08081 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8128 | 15-20%                  |                10 |              0.08128 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8184 | >20%                    |                 5 |              0.16368 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8208 | <5%                     |                 2 |              0.4104  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8223 | 15-20%                  |                10 |              0.08223 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8331 | <5%                     |                10 |              0.08331 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8362 | >20%                    |                 2 |              0.4181  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8441 | 15-20%                  |                10 |              0.08441 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8615 | >20%                    |                 5 |              0.1723  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8652 | >20%                    |                10 |              0.08652 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9085 | >20%                    |                10 |              0.09085 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9094 | >20%                    |                10 |              0.09094 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.935  | >20%                    |                10 |              0.0935  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9352 | >20%                    |                 2 |              0.4676  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.936  | >20%                    |                 2 |              0.468   |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9507 | >20%                    |                 5 |              0.19014 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9512 | >20%                    |                10 |              0.09512 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9527 | >20%                    |                10 |              0.09527 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9616 | >20%                    |                10 |              0.09616 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9662 | 10-15%                  |                 5 |              0.19324 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9676 | 15-20%                  |                10 |              0.09676 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9692 | 15-20%                  |                10 |              0.09692 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9924 | 10-15%                  |                10 |              0.09924 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0051 | >20%                    |                10 |              0.10051 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0154 | >20%                    |                 5 |              0.20308 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0215 | >20%                    |                 5 |              0.2043  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0681 | >20%                    |                 5 |              0.21362 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0697 | >20%                    |                 2 |              0.53485 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1162 | >20%                    |                 2 |              0.5581  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1306 | >20%                    |                 5 |              0.22612 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1383 | <5%                     |                10 |              0.11383 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1394 | >20%                    |                10 |              0.11394 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1568 | >20%                    |                10 |              0.11568 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1757 | >20%                    |                10 |              0.11757 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1861 | >20%                    |                 5 |              0.23722 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.1992 | 10-15%                  |                10 |              0.11992 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2684 | >20%                    |                10 |              0.12684 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3018 | >20%                    |                10 |              0.13018 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.348  | >20%                    |                 2 |              0.674   |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3668 | >20%                    |                10 |              0.13668 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4288 | 10-15%                  |                 5 |              0.28576 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4574 | >20%                    |                10 |              0.14574 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4632 | >20%                    |                 2 |              0.7316  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4911 | >20%                    |                 5 |              0.29822 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.55   | 15-20%                  |                10 |              0.155   |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6252 | >20%                    |                10 |              0.16252 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9428 | 10-15%                  |                10 |              0.19428 |