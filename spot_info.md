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

Data correct as of 2025-12-03 01:55:34.470056, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1346 | >20%                    |                 2 |              0.0673  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1426 | >20%                    |                 2 |              0.0713  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1754 | <5%                     |                 2 |              0.0877  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1991 | <5%                     |                 2 |              0.09955 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2001 | >20%                    |                 2 |              0.10005 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2107 | 10-15%                  |                 2 |              0.10535 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2276 | >20%                    |                 2 |              0.1138  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | >20%                    |                10 |              0.02308 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2333 | >20%                    |                 2 |              0.11665 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2333 | >20%                    |                 2 |              0.11665 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2365 | >20%                    |                 2 |              0.11825 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2474 | 5-10%                   |                 5 |              0.04948 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2562 | >20%                    |                 5 |              0.05124 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2656 | >20%                    |                 5 |              0.05312 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2668 | >20%                    |                 5 |              0.05336 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2669 | 10-15%                  |                 5 |              0.05338 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2714 | >20%                    |                 2 |              0.1357  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2791 | >20%                    |                 2 |              0.13955 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2806 | 10-15%                  |                 2 |              0.1403  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2828 | 15-20%                  |                 2 |              0.1414  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2853 | <5%                     |                 2 |              0.14265 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2878 | 5-10%                   |                 2 |              0.1439  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2922 | >20%                    |                 2 |              0.1461  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3091 | >20%                    |                 5 |              0.06182 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3091 | >20%                    |                 2 |              0.15455 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3181 | 10-15%                  |                10 |              0.03181 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3199 | 5-10%                   |                 2 |              0.15995 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3208 | 10-15%                  |                10 |              0.03208 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3287 | 15-20%                  |                 2 |              0.16435 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3395 | <5%                     |                 5 |              0.0679  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3403 | 5-10%                   |                10 |              0.03403 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3455 | 10-15%                  |                 2 |              0.17275 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.351  | >20%                    |                 2 |              0.1755  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3624 | 15-20%                  |                 2 |              0.1812  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3657 | >20%                    |                10 |              0.03657 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3692 | >20%                    |                 5 |              0.07384 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3728 | >20%                    |                 2 |              0.1864  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3736 | >20%                    |                 5 |              0.07472 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3737 | >20%                    |                 2 |              0.18685 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.374  | >20%                    |                 2 |              0.187   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3836 | 15-20%                  |                 5 |              0.07672 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3836 | >20%                    |                 2 |              0.1918  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3865 | >20%                    |                 2 |              0.19325 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3865 | <5%                     |                 2 |              0.19325 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.388  | >20%                    |                 5 |              0.0776  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3918 | 15-20%                  |                 2 |              0.1959  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3942 | >20%                    |                 2 |              0.1971  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.397  | >20%                    |                 2 |              0.1985  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4123 | 10-15%                  |                 5 |              0.08246 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4141 | 10-15%                  |                10 |              0.04141 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4195 | <5%                     |                 2 |              0.20975 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4226 | 15-20%                  |                 5 |              0.08452 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4239 | >20%                    |                 5 |              0.08478 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4241 | 5-10%                   |                 2 |              0.21205 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.428  | >20%                    |                 2 |              0.214   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4286 | >20%                    |                 2 |              0.2143  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4298 | >20%                    |                10 |              0.04298 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4326 | 15-20%                  |                 2 |              0.2163  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4342 | >20%                    |                 2 |              0.2171  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4423 | 10-15%                  |                 2 |              0.22115 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4435 | >20%                    |                10 |              0.04435 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4457 | 10-15%                  |                 5 |              0.08914 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4465 | >20%                    |                 5 |              0.0893  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4507 | >20%                    |                 5 |              0.09014 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4511 | >20%                    |                 2 |              0.22555 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4519 | >20%                    |                10 |              0.04519 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4524 | <5%                     |                 2 |              0.2262  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.454  | 15-20%                  |                 5 |              0.0908  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4656 | >20%                    |                 5 |              0.09312 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.467  | 15-20%                  |                10 |              0.0467  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4671 | >20%                    |                 2 |              0.23355 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4705 | >20%                    |                 5 |              0.0941  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4731 | >20%                    |                 2 |              0.23655 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4739 | 10-15%                  |                 2 |              0.23695 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.475  | >20%                    |                 5 |              0.095   |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4836 | >20%                    |                 5 |              0.09672 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4842 | 10-15%                  |                 2 |              0.2421  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4848 | 15-20%                  |                 5 |              0.09696 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4948 | >20%                    |                 5 |              0.09896 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4962 | >20%                    |                 5 |              0.09924 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5023 | 10-15%                  |                 5 |              0.10046 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5056 | >20%                    |                 5 |              0.10112 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5068 | <5%                     |                10 |              0.05068 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5125 | 10-15%                  |                 2 |              0.25625 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.513  | 15-20%                  |                 5 |              0.1026  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5421 | >20%                    |                 2 |              0.27105 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5484 | >20%                    |                 5 |              0.10968 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.549  | 10-15%                  |                 5 |              0.1098  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5492 | >20%                    |                 5 |              0.10984 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5497 | >20%                    |                 5 |              0.10994 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5537 | 5-10%                   |                10 |              0.05537 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5564 | 15-20%                  |                 5 |              0.11128 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5586 | 15-20%                  |                10 |              0.05586 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5631 | >20%                    |                 5 |              0.11262 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5646 | 15-20%                  |                 5 |              0.11292 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5716 | <5%                     |                10 |              0.05716 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5758 | 10-15%                  |                 5 |              0.11516 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5806 | 15-20%                  |                 5 |              0.11612 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5856 | >20%                    |                 2 |              0.2928  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5955 | >20%                    |                 5 |              0.1191  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6091 | 15-20%                  |                 5 |              0.12182 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6137 | >20%                    |                 2 |              0.30685 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6147 | 10-15%                  |                 5 |              0.12294 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6178 | >20%                    |                10 |              0.06178 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6188 | 10-15%                  |                 5 |              0.12376 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6207 | >20%                    |                 2 |              0.31035 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.622  | >20%                    |                 2 |              0.311   |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6291 | 5-10%                   |                 2 |              0.31455 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6305 | >20%                    |                 5 |              0.1261  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6397 | <5%                     |                 5 |              0.12794 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6438 | >20%                    |                 5 |              0.12876 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6469 | >20%                    |                 5 |              0.12938 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6572 | 10-15%                  |                 5 |              0.13144 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6632 | >20%                    |                10 |              0.06632 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6659 | 5-10%                   |                10 |              0.06659 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6687 | >20%                    |                10 |              0.06687 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6742 | >20%                    |                10 |              0.06742 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6761 | 15-20%                  |                10 |              0.06761 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6803 | >20%                    |                 5 |              0.13606 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6868 | >20%                    |                10 |              0.06868 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6947 | >20%                    |                 5 |              0.13894 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7111 | <5%                     |                10 |              0.07111 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7162 | >20%                    |                10 |              0.07162 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7172 | 5-10%                   |                 5 |              0.14344 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7183 | >20%                    |                10 |              0.07183 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7189 | >20%                    |                10 |              0.07189 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7223 | >20%                    |                 2 |              0.36115 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7369 | >20%                    |                 5 |              0.14738 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7412 | 15-20%                  |                10 |              0.07412 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.7451 | 15-20%                  |                10 |              0.07451 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7478 | >20%                    |                 2 |              0.3739  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7501 | >20%                    |                 2 |              0.37505 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.762  | >20%                    |                10 |              0.0762  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7634 | >20%                    |                10 |              0.07634 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7648 | >20%                    |                 5 |              0.15296 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7658 | 10-15%                  |                10 |              0.07658 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7665 | 10-15%                  |                10 |              0.07665 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7821 | >20%                    |                10 |              0.07821 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8007 | >20%                    |                10 |              0.08007 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8068 | >20%                    |                10 |              0.08068 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.818  | 15-20%                  |                 5 |              0.1636  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8382 | >20%                    |                10 |              0.08382 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8442 | 10-15%                  |                10 |              0.08442 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8496 | >20%                    |                 2 |              0.4248  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8523 | >20%                    |                 5 |              0.17046 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8576 | 10-15%                  |                 2 |              0.4288  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8657 | >20%                    |                 5 |              0.17314 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8675 | >20%                    |                10 |              0.08675 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.881  | >20%                    |                10 |              0.0881  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8956 | 10-15%                  |                10 |              0.08956 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9037 | >20%                    |                 5 |              0.18074 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9113 | 5-10%                   |                10 |              0.09113 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9125 | >20%                    |                10 |              0.09125 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9206 | >20%                    |                 5 |              0.18412 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9304 | 15-20%                  |                10 |              0.09304 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9435 | >20%                    |                 2 |              0.47175 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9645 | >20%                    |                10 |              0.09645 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9755 | >20%                    |                10 |              0.09755 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9826 | >20%                    |                10 |              0.09826 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9835 | <5%                     |                10 |              0.09835 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9926 | >20%                    |                 5 |              0.19852 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.026  | 10-15%                  |                10 |              0.1026  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0312 | >20%                    |                 2 |              0.5156  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0431 | 15-20%                  |                10 |              0.10431 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0444 | >20%                    |                10 |              0.10444 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.0513 | <5%                     |                 2 |              0.52565 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1067 | 15-20%                  |                10 |              0.11067 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1937 | <5%                     |                 5 |              0.23874 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2124 | >20%                    |                10 |              0.12124 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2248 | >20%                    |                 5 |              0.24496 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.285  | >20%                    |                10 |              0.1285  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.296  | >20%                    |                10 |              0.1296  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3786 | >20%                    |                 2 |              0.6893  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3964 | 10-15%                  |                10 |              0.13964 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4605 | >20%                    |                 2 |              0.73025 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.5135 | >20%                    |                10 |              0.15135 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5161 | >20%                    |                10 |              0.15161 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5405 | 5-10%                   |                 5 |              0.3081  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5454 | >20%                    |                 5 |              0.30908 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0052 | 15-20%                  |                10 |              0.20052 |