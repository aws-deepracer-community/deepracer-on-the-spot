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

Data correct as of 2024-12-09 01:49:36.907556, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1548 | 10-15%                  |                 2 |              0.0774  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1986 | <5%                     |                 2 |              0.0993  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2067 | >20%                    |                 5 |              0.04134 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2075 | 10-15%                  |                 2 |              0.10375 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2161 | 5-10%                   |                 2 |              0.10805 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2242 | >20%                    |                 5 |              0.04484 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2251 | 5-10%                   |                 2 |              0.11255 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.229  | 15-20%                  |                 2 |              0.1145  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2293 | 15-20%                  |                 5 |              0.04586 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2346 | <5%                     |                 2 |              0.1173  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2458 | <5%                     |                 2 |              0.1229  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2551 | 10-15%                  |                 2 |              0.12755 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2626 | >20%                    |                 5 |              0.05252 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2644 | <5%                     |                10 |              0.02644 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2777 | <5%                     |                 2 |              0.13885 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 |                         |                 2 |              0.1402  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2868 | 5-10%                   |                 2 |              0.1434  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.294  | 10-15%                  |                 2 |              0.147   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2958 | <5%                     |                 5 |              0.05916 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3026 | >20%                    |                 5 |              0.06052 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.311  | <5%                     |                 2 |              0.1555  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3182 | <5%                     |                10 |              0.03182 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3204 | 5-10%                   |                 2 |              0.1602  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3391 | 5-10%                   |                 2 |              0.16955 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.3407 | 5-10%                   |                 2 |              0.17035 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3423 | >20%                    |                 5 |              0.06846 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.344  | <5%                     |                 5 |              0.0688  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3495 | <5%                     |                 2 |              0.17475 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3501 | >20%                    |                 2 |              0.17505 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3508 | <5%                     |                 2 |              0.1754  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3515 | <5%                     |                 2 |              0.17575 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3516 | >20%                    |                10 |              0.03516 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3518 | >20%                    |                 2 |              0.1759  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3534 | <5%                     |                 5 |              0.07068 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3605 | >20%                    |                 2 |              0.18025 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3615 | >20%                    |                 5 |              0.0723  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3631 | >20%                    |                 2 |              0.18155 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3728 | 15-20%                  |                 2 |              0.1864  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3757 |                         |                 5 |              0.07514 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3826 | 15-20%                  |                 2 |              0.1913  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3971 | <5%                     |                 2 |              0.19855 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4065 | 5-10%                   |                 2 |              0.20325 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.41   | 5-10%                   |                 2 |              0.205   |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4147 | 10-15%                  |                10 |              0.04147 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4158 | 5-10%                   |                 5 |              0.08316 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4237 | 5-10%                   |                 2 |              0.21185 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4259 | 15-20%                  |                 5 |              0.08518 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.4266 | <5%                     |                 5 |              0.08532 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4275 | <5%                     |                 2 |              0.21375 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4294 | >20%                    |                 2 |              0.2147  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.434  | >20%                    |                 2 |              0.217   |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4444 | 15-20%                  |                 5 |              0.08888 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4469 | >20%                    |                 2 |              0.22345 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4511 | 10-15%                  |                 2 |              0.22555 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4607 | <5%                     |                 5 |              0.09214 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.463  | <5%                     |                 2 |              0.2315  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4653 | 10-15%                  |                10 |              0.04653 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4689 | 15-20%                  |                 5 |              0.09378 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4699 | 10-15%                  |                 5 |              0.09398 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4766 | <5%                     |                 5 |              0.09532 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4794 | 5-10%                   |                 5 |              0.09588 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4796 | 5-10%                   |                 2 |              0.2398  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4916 | 10-15%                  |                 2 |              0.2458  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5007 | >20%                    |                 5 |              0.10014 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.5036 | 5-10%                   |                 2 |              0.2518  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.506  | 5-10%                   |                 5 |              0.1012  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5065 | >20%                    |                 5 |              0.1013  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5091 | 10-15%                  |                 2 |              0.25455 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5124 | >20%                    |                 5 |              0.10248 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5126 | 15-20%                  |                 2 |              0.2563  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.514  | <5%                     |                 5 |              0.1028  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5156 | <5%                     |                 5 |              0.10312 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5181 | <5%                     |                 5 |              0.10362 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5212 | >20%                    |                10 |              0.05212 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5236 | 10-15%                  |                10 |              0.05236 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5258 | 10-15%                  |                 5 |              0.10516 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5337 | >20%                    |                 5 |              0.10674 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5345 | 15-20%                  |                 5 |              0.1069  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5445 | >20%                    |                 2 |              0.27225 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5498 | 5-10%                   |                 5 |              0.10996 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5549 | 10-15%                  |                 5 |              0.11098 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5553 | 10-15%                  |                 5 |              0.11106 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5593 | <5%                     |                 5 |              0.11186 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 |                         |                10 |              0.05663 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5813 | >20%                    |                10 |              0.05813 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.5832 |                         |                 2 |              0.2916  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6063 | 15-20%                  |                10 |              0.06063 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6167 | >20%                    |                 5 |              0.12334 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6292 | 10-15%                  |                10 |              0.06292 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6358 | >20%                    |                10 |              0.06358 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6375 | <5%                     |                 5 |              0.1275  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6489 | 5-10%                   |                10 |              0.06489 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6546 | >20%                    |                 2 |              0.3273  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.658  | 5-10%                   |                10 |              0.0658  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6706 | 5-10%                   |                 5 |              0.13412 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.671  | >20%                    |                10 |              0.0671  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.6774 | 5-10%                   |                10 |              0.06774 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6782 | <5%                     |                 5 |              0.13564 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6783 | 5-10%                   |                 5 |              0.13566 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6906 | >20%                    |                10 |              0.06906 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6981 | 10-15%                  |                10 |              0.06981 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7316 | 15-20%                  |                 5 |              0.14632 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7365 | 5-10%                   |                 2 |              0.36825 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7374 | 15-20%                  |                 5 |              0.14748 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7448 | 5-10%                   |                 5 |              0.14896 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7611 | 5-10%                   |                10 |              0.07611 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7629 | >20%                    |                10 |              0.07629 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7648 | >20%                    |                 5 |              0.15296 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7688 | <5%                     |                 5 |              0.15376 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7775 | <5%                     |                 2 |              0.38875 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7998 | <5%                     |                10 |              0.07998 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8089 | 10-15%                  |                10 |              0.08089 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8153 | 5-10%                   |                10 |              0.08153 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.848  | 5-10%                   |                10 |              0.0848  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      0.8546 |                         |                 5 |              0.17092 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.855  | 5-10%                   |                10 |              0.0855  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.856  | 10-15%                  |                10 |              0.0856  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8914 | >20%                    |                10 |              0.08914 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9076 | 15-20%                  |                10 |              0.09076 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9241 | 5-10%                   |                10 |              0.09241 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9251 | 5-10%                   |                10 |              0.09251 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9321 | 5-10%                   |                10 |              0.09321 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.937  | <5%                     |                 5 |              0.1874  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9548 | <5%                     |                10 |              0.09548 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9642 | 5-10%                   |                10 |              0.09642 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9657 | <5%                     |                10 |              0.09657 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9834 | >20%                    |                10 |              0.09834 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0245 | >20%                    |                10 |              0.10245 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0284 | 15-20%                  |                10 |              0.10284 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0379 | 5-10%                   |                10 |              0.10379 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0709 | 10-15%                  |                10 |              0.10709 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0939 | <5%                     |                10 |              0.10939 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1657 | 15-20%                  |                10 |              0.11657 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2609 | >20%                    |                10 |              0.12609 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2711 | <5%                     |                10 |              0.12711 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.3316 |                         |                10 |              0.13316 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4566 | >20%                    |                10 |              0.14566 |