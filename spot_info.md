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

Data correct as of 2025-06-25 01:57:46.446811, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1685 | >20%                    |                 2 |              0.08425 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1732 | >20%                    |                 5 |              0.03464 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1878 | 15-20%                  |                 2 |              0.0939  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1943 | <5%                     |                 2 |              0.09715 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | >20%                    |                 5 |              0.039   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1971 | 15-20%                  |                 5 |              0.03942 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2066 | >20%                    |                 2 |              0.1033  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.216  | 10-15%                  |                10 |              0.0216  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2176 | >20%                    |                 2 |              0.1088  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2275 | >20%                    |                 5 |              0.0455  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2285 | 15-20%                  |                 2 |              0.11425 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.24   | 15-20%                  |                10 |              0.024   |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2509 | >20%                    |                10 |              0.02509 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2591 | >20%                    |                 2 |              0.12955 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2602 | 15-20%                  |                 2 |              0.1301  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.263  | 5-10%                   |                 2 |              0.1315  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2691 | >20%                    |                 2 |              0.13455 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2692 | 15-20%                  |                 2 |              0.1346  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2695 | >20%                    |                 2 |              0.13475 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2706 | >20%                    |                 2 |              0.1353  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2736 | 15-20%                  |                 5 |              0.05472 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2788 | 5-10%                   |                10 |              0.02788 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2921 | <5%                     |                 5 |              0.05842 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2975 | >20%                    |                 2 |              0.14875 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3033 | <5%                     |                 2 |              0.15165 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3035 | >20%                    |                 5 |              0.0607  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3056 | 15-20%                  |                 5 |              0.06112 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3079 | >20%                    |                 2 |              0.15395 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3085 | >20%                    |                 2 |              0.15425 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3118 | >20%                    |                 2 |              0.1559  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3127 | >20%                    |                 2 |              0.15635 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3136 | >20%                    |                 2 |              0.1568  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3166 | >20%                    |                10 |              0.03166 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3223 | >20%                    |                 2 |              0.16115 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3363 | 10-15%                  |                 2 |              0.16815 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3388 | <5%                     |                 2 |              0.1694  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3477 | 10-15%                  |                 2 |              0.17385 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3514 | >20%                    |                 5 |              0.07028 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3534 | 5-10%                   |                 2 |              0.1767  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3593 | 10-15%                  |                 2 |              0.17965 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3699 | >20%                    |                 2 |              0.18495 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3791 | >20%                    |                 5 |              0.07582 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3844 | 15-20%                  |                10 |              0.03844 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3862 | >20%                    |                 2 |              0.1931  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3967 | 10-15%                  |                 5 |              0.07934 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4058 | 10-15%                  |                 2 |              0.2029  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4095 | >20%                    |                 5 |              0.0819  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.411  | >20%                    |                 5 |              0.0822  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4133 | >20%                    |                 5 |              0.08266 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4225 | >20%                    |                 2 |              0.21125 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4238 | >20%                    |                 5 |              0.08476 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4274 | >20%                    |                 2 |              0.2137  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4354 | 15-20%                  |                 5 |              0.08708 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4363 | <5%                     |                 2 |              0.21815 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.442  | 10-15%                  |                 5 |              0.0884  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4453 | >20%                    |                 2 |              0.22265 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4511 | 5-10%                   |                 2 |              0.22555 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4579 | >20%                    |                10 |              0.04579 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4588 | >20%                    |                 2 |              0.2294  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.459  | >20%                    |                 5 |              0.0918  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.46   | >20%                    |                 2 |              0.23    |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4602 | 15-20%                  |                 2 |              0.2301  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4612 | >20%                    |                 5 |              0.09224 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.467  | >20%                    |                 5 |              0.0934  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4701 | >20%                    |                 2 |              0.23505 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4717 | >20%                    |                 2 |              0.23585 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4754 | >20%                    |                 5 |              0.09508 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4758 | >20%                    |                 5 |              0.09516 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4806 | <5%                     |                 5 |              0.09612 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4806 | <5%                     |                 5 |              0.09612 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4811 | >20%                    |                 2 |              0.24055 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4821 | 15-20%                  |                 5 |              0.09642 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.483  | >20%                    |                 2 |              0.2415  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4869 | >20%                    |                 2 |              0.24345 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4874 | 5-10%                   |                 2 |              0.2437  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4899 | 10-15%                  |                 5 |              0.09798 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5066 | 15-20%                  |                 2 |              0.2533  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.511  | 10-15%                  |                 2 |              0.2555  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5124 | >20%                    |                 5 |              0.10248 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5218 | >20%                    |                 2 |              0.2609  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5251 | <5%                     |                10 |              0.05251 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5254 | 5-10%                   |                 5 |              0.10508 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5262 | >20%                    |                 2 |              0.2631  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5423 | <5%                     |                 5 |              0.10846 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.549  | >20%                    |                10 |              0.0549  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.553  | >20%                    |                 5 |              0.1106  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5553 | 15-20%                  |                 2 |              0.27765 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5565 | 10-15%                  |                 5 |              0.1113  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5628 | 10-15%                  |                10 |              0.05628 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.567  | >20%                    |                 5 |              0.1134  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5708 | >20%                    |                 2 |              0.2854  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.572  | <5%                     |                 5 |              0.1144  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5721 | 10-15%                  |                 5 |              0.11442 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5843 | >20%                    |                 5 |              0.11686 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5941 | >20%                    |                 5 |              0.11882 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.601  | <5%                     |                 2 |              0.3005  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6051 | >20%                    |                 5 |              0.12102 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6053 | >20%                    |                 5 |              0.12106 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6057 | >20%                    |                 5 |              0.12114 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6073 | >20%                    |                 5 |              0.12146 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6084 | >20%                    |                10 |              0.06084 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.616  | >20%                    |                10 |              0.0616  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6184 | >20%                    |                 2 |              0.3092  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.62   | >20%                    |                 5 |              0.124   |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6228 | <5%                     |                 5 |              0.12456 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6286 | 5-10%                   |                 2 |              0.3143  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6382 | >20%                    |                 5 |              0.12764 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6424 | >20%                    |                 5 |              0.12848 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6458 | >20%                    |                 2 |              0.3229  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6461 | >20%                    |                10 |              0.06461 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6641 | >20%                    |                 5 |              0.13282 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6646 | <5%                     |                 5 |              0.13292 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6736 | 15-20%                  |                10 |              0.06736 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6771 | >20%                    |                 5 |              0.13542 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6779 | >20%                    |                10 |              0.06779 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.691  | 10-15%                  |                 2 |              0.3455  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6916 | >20%                    |                 2 |              0.3458  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6947 | <5%                     |                 5 |              0.13894 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7035 | >20%                    |                10 |              0.07035 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7039 | >20%                    |                10 |              0.07039 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7064 | 10-15%                  |                 5 |              0.14128 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7093 | <5%                     |                10 |              0.07093 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7111 | >20%                    |                10 |              0.07111 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7115 | <5%                     |                 5 |              0.1423  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7173 | >20%                    |                10 |              0.07173 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7211 | 15-20%                  |                10 |              0.07211 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7239 | >20%                    |                 5 |              0.14478 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.724  | 10-15%                  |                 5 |              0.1448  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7368 | 15-20%                  |                10 |              0.07368 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7455 | 10-15%                  |                10 |              0.07455 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7495 | >20%                    |                10 |              0.07495 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7569 | >20%                    |                10 |              0.07569 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7771 | >20%                    |                10 |              0.07771 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7886 | >20%                    |                10 |              0.07886 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7894 | 15-20%                  |                10 |              0.07894 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7898 | >20%                    |                 5 |              0.15796 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7942 | >20%                    |                 5 |              0.15884 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7981 | 5-10%                   |                 5 |              0.15962 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8049 | <5%                     |                10 |              0.08049 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8249 | >20%                    |                10 |              0.08249 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8317 | >20%                    |                10 |              0.08317 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8357 | <5%                     |                10 |              0.08357 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8495 | >20%                    |                10 |              0.08495 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8603 | 15-20%                  |                10 |              0.08603 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8716 | >20%                    |                10 |              0.08716 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8782 | <5%                     |                10 |              0.08782 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8816 | >20%                    |                10 |              0.08816 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8841 | 15-20%                  |                10 |              0.08841 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8849 | >20%                    |                10 |              0.08849 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8981 | >20%                    |                10 |              0.08981 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9065 | >20%                    |                10 |              0.09065 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9604 | >20%                    |                10 |              0.09604 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9663 | >20%                    |                10 |              0.09663 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9757 | >20%                    |                10 |              0.09757 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9802 | >20%                    |                 2 |              0.4901  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9861 | >20%                    |                 5 |              0.19722 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9914 | >20%                    |                10 |              0.09914 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0075 | >20%                    |                10 |              0.10075 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0084 | <5%                     |                10 |              0.10084 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0094 | 15-20%                  |                10 |              0.10094 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0123 | >20%                    |                 2 |              0.50615 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0172 | >20%                    |                10 |              0.10172 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0468 | 10-15%                  |                10 |              0.10468 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0664 | 15-20%                  |                10 |              0.10664 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0738 | <5%                     |                 2 |              0.5369  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0895 | >20%                    |                 2 |              0.54475 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1108 | >20%                    |                10 |              0.11108 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1172 | 15-20%                  |                10 |              0.11172 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1984 | <5%                     |                 5 |              0.23968 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2073 | 10-15%                  |                10 |              0.12073 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2315 | >20%                    |                10 |              0.12315 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2798 | >20%                    |                10 |              0.12798 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2852 | >20%                    |                 5 |              0.25704 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3789 | >20%                    |                 5 |              0.27578 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4177 | >20%                    |                 5 |              0.28354 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4468 | <5%                     |                 5 |              0.28936 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5054 | 10-15%                  |                10 |              0.15054 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5538 | >20%                    |                 2 |              0.7769  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.752  | <5%                     |                 2 |              0.876   |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8348 | <5%                     |                10 |              0.18348 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8788 | >20%                    |                10 |              0.18788 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.076  | <5%                     |                10 |              0.2076  |