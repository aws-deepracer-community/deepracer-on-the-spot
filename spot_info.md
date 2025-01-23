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

Data correct as of 2025-01-23 01:35:35.413536, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.1992 | >20%                    |                 5 |              0.03984 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2011 | 10-15%                  |                 2 |              0.10055 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2192 | 5-10%                   |                 2 |              0.1096  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2246 | 15-20%                  |                 2 |              0.1123  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2278 | <5%                     |                 2 |              0.1139  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2424 | 5-10%                   |                 2 |              0.1212  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2443 | 5-10%                   |                 2 |              0.12215 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2525 | <5%                     |                 5 |              0.0505  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2627 | 5-10%                   |                 2 |              0.13135 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | <5%                     |                 5 |              0.0552  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2794 | <5%                     |                 2 |              0.1397  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2813 | 10-15%                  |                 2 |              0.14065 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2996 | <5%                     |                 2 |              0.1498  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3112 | >20%                    |                 2 |              0.1556  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3122 | 5-10%                   |                 2 |              0.1561  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3216 | 10-15%                  |                 2 |              0.1608  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3217 | >20%                    |                 2 |              0.16085 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3403 | 5-10%                   |                 5 |              0.06806 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3474 | <5%                     |                 2 |              0.1737  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3533 | <5%                     |                 5 |              0.07066 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3555 | >20%                    |                 2 |              0.17775 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3641 | <5%                     |                 2 |              0.18205 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3682 | <5%                     |                 2 |              0.1841  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3755 | <5%                     |                 2 |              0.18775 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3784 | 5-10%                   |                 2 |              0.1892  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3801 | 5-10%                   |                 5 |              0.07602 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.384  | 5-10%                   |                 2 |              0.192   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3862 | >20%                    |                 2 |              0.1931  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.388  | <5%                     |                 2 |              0.194   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3893 | 10-15%                  |                 5 |              0.07786 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3967 | <5%                     |                 2 |              0.19835 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3991 | 5-10%                   |                 2 |              0.19955 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4034 | >20%                    |                 5 |              0.08068 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4118 | 5-10%                   |                 2 |              0.2059  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4162 | 10-15%                  |                 2 |              0.2081  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4181 | 5-10%                   |                 5 |              0.08362 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4184 | >20%                    |                 2 |              0.2092  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.422  | <5%                     |                 2 |              0.211   |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4271 | >20%                    |                 2 |              0.21355 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4326 | <5%                     |                 5 |              0.08652 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4362 | >20%                    |                 5 |              0.08724 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4374 | 10-15%                  |                10 |              0.04374 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4414 | 10-15%                  |                 5 |              0.08828 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4593 | 15-20%                  |                 5 |              0.09186 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4609 | <5%                     |                 5 |              0.09218 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4674 | 10-15%                  |                 5 |              0.09348 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4702 | 10-15%                  |                 5 |              0.09404 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4739 | <5%                     |                 2 |              0.23695 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4802 | <5%                     |                 5 |              0.09604 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.482  | >20%                    |                 5 |              0.0964  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4911 | 15-20%                  |                 2 |              0.24555 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4946 | 10-15%                  |                10 |              0.04946 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4957 | <5%                     |                 5 |              0.09914 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4969 | 5-10%                   |                 5 |              0.09938 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4973 | <5%                     |                 2 |              0.24865 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4986 | <5%                     |                 2 |              0.2493  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4993 | <5%                     |                 5 |              0.09986 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5053 | <5%                     |                 2 |              0.25265 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5073 | 5-10%                   |                 2 |              0.25365 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5125 | <5%                     |                 5 |              0.1025  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5133 | 5-10%                   |                 5 |              0.10266 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5152 | <5%                     |                 5 |              0.10304 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5174 | >20%                    |                 2 |              0.2587  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5297 | >20%                    |                 5 |              0.10594 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5369 | 5-10%                   |                 5 |              0.10738 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5385 | 5-10%                   |                 5 |              0.1077  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5463 | >20%                    |                 5 |              0.10926 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5523 | <5%                     |                 5 |              0.11046 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5592 | 5-10%                   |                 5 |              0.11184 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5626 | <5%                     |                 5 |              0.11252 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5642 | 15-20%                  |                 2 |              0.2821  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5698 | >20%                    |                10 |              0.05698 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5711 | <5%                     |                 5 |              0.11422 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5743 | <5%                     |                 5 |              0.11486 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.58   | 15-20%                  |                 2 |              0.29    |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5875 | 5-10%                   |                 5 |              0.1175  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6063 | 5-10%                   |                10 |              0.06063 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6361 | >20%                    |                 2 |              0.31805 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6366 | 15-20%                  |                10 |              0.06366 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6412 | 5-10%                   |                10 |              0.06412 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6423 | >20%                    |                 5 |              0.12846 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6547 | <5%                     |                10 |              0.06547 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6627 | >20%                    |                10 |              0.06627 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6647 | >20%                    |                 5 |              0.13294 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6747 | >20%                    |                10 |              0.06747 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6782 | <5%                     |                 5 |              0.13564 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6793 | >20%                    |                10 |              0.06793 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.685  | 10-15%                  |                 5 |              0.137   |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6901 | 5-10%                   |                 5 |              0.13802 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6906 | >20%                    |                10 |              0.06906 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6961 | >20%                    |                 5 |              0.13922 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7247 | <5%                     |                10 |              0.07247 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7248 | 15-20%                  |                10 |              0.07248 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7325 | 5-10%                   |                 5 |              0.1465  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7387 | 10-15%                  |                10 |              0.07387 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7469 | <5%                     |                 2 |              0.37345 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7526 | >20%                    |                 5 |              0.15052 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7543 | 5-10%                   |                 2 |              0.37715 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7701 | 5-10%                   |                10 |              0.07701 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7731 | >20%                    |                 5 |              0.15462 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7747 | 10-15%                  |                10 |              0.07747 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7811 | 5-10%                   |                10 |              0.07811 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7813 | 5-10%                   |                10 |              0.07813 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7864 | 10-15%                  |                10 |              0.07864 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7884 | >20%                    |                 5 |              0.15768 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7927 | 15-20%                  |                 2 |              0.39635 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8169 | <5%                     |                10 |              0.08169 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.82   | >20%                    |                10 |              0.082   |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8265 | 15-20%                  |                10 |              0.08265 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8268 | 15-20%                  |                10 |              0.08268 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8325 | 10-15%                  |                10 |              0.08325 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8476 | >20%                    |                10 |              0.08476 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8515 | 5-10%                   |                10 |              0.08515 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8837 | <5%                     |                10 |              0.08837 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8929 | 5-10%                   |                 5 |              0.17858 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8966 | 5-10%                   |                10 |              0.08966 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9127 | <5%                     |                10 |              0.09127 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9263 | <5%                     |                10 |              0.09263 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9475 | <5%                     |                10 |              0.09475 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9671 | 10-15%                  |                10 |              0.09671 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9707 | <5%                     |                10 |              0.09707 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.991  | <5%                     |                10 |              0.0991  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.007  | >20%                    |                10 |              0.1007  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0295 | 5-10%                   |                10 |              0.10295 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0614 | <5%                     |                10 |              0.10614 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0807 | 15-20%                  |                10 |              0.10807 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0881 | 5-10%                   |                 5 |              0.21762 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.094  | 10-15%                  |                 5 |              0.2188  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1128 | 10-15%                  |                10 |              0.11128 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1198 | 15-20%                  |                 2 |              0.5599  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1608 | 10-15%                  |                10 |              0.11608 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2125 | 5-10%                   |                 2 |              0.60625 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2639 | >20%                    |                10 |              0.12639 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4305 | 10-15%                  |                10 |              0.14305 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.454  | 5-10%                   |                10 |              0.1454  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4615 | 5-10%                   |                10 |              0.14615 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4633 | 15-20%                  |                 5 |              0.29266 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0438 | 10-15%                  |                10 |              0.20438 |