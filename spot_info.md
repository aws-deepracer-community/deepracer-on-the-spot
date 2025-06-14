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

Data correct as of 2025-06-14 01:52:19.218036, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1014 | >20%                    |                 2 |              0.0507  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1487 | >20%                    |                 5 |              0.02974 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1605 | 5-10%                   |                 2 |              0.08025 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1747 | >20%                    |                 5 |              0.03494 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 15-20%                  |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2075 | >20%                    |                 2 |              0.10375 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.209  | >20%                    |                 5 |              0.0418  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2142 | >20%                    |                 2 |              0.1071  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2195 | 10-15%                  |                10 |              0.02195 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2239 | >20%                    |                 2 |              0.11195 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.23   | 15-20%                  |                 2 |              0.115   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2353 | 15-20%                  |                 2 |              0.11765 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2359 | 15-20%                  |                 2 |              0.11795 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2409 | >20%                    |                 2 |              0.12045 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2448 | <5%                     |                 2 |              0.1224  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2456 | >20%                    |                10 |              0.02456 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2469 | 15-20%                  |                10 |              0.02469 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2617 | 5-10%                   |                10 |              0.02617 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2675 | >20%                    |                 5 |              0.0535  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2703 | >20%                    |                 2 |              0.13515 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2759 | 15-20%                  |                 2 |              0.13795 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2785 | >20%                    |                 2 |              0.13925 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.281  | <5%                     |                 2 |              0.1405  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2851 | >20%                    |                 5 |              0.05702 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2942 | >20%                    |                 2 |              0.1471  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2994 | >20%                    |                 2 |              0.1497  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3057 | 10-15%                  |                 2 |              0.15285 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3071 | >20%                    |                 2 |              0.15355 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3115 | >20%                    |                 2 |              0.15575 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3117 | >20%                    |                 2 |              0.15585 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.317  | 15-20%                  |                 5 |              0.0634  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3179 | >20%                    |                 2 |              0.15895 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.319  | >20%                    |                 2 |              0.1595  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3225 | 15-20%                  |                 5 |              0.0645  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3233 | >20%                    |                 5 |              0.06466 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3337 | 5-10%                   |                 2 |              0.16685 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3343 | <5%                     |                 2 |              0.16715 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3493 | >20%                    |                10 |              0.03493 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3548 | 10-15%                  |                 2 |              0.1774  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3684 | 10-15%                  |                 2 |              0.1842  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3733 | >20%                    |                 5 |              0.07466 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3744 | >20%                    |                 5 |              0.07488 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3803 | 10-15%                  |                 2 |              0.19015 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3807 | >20%                    |                 2 |              0.19035 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3829 | >20%                    |                 2 |              0.19145 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3936 | <5%                     |                 5 |              0.07872 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3939 | 10-15%                  |                 5 |              0.07878 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3948 | >20%                    |                 5 |              0.07896 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4002 | >20%                    |                 2 |              0.2001  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4023 | >20%                    |                 2 |              0.20115 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4061 | >20%                    |                 5 |              0.08122 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4065 | >20%                    |                10 |              0.04065 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4113 | >20%                    |                10 |              0.04113 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4172 | 15-20%                  |                 2 |              0.2086  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4174 | >20%                    |                 5 |              0.08348 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4176 | 10-15%                  |                 5 |              0.08352 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4204 | <5%                     |                 2 |              0.2102  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4222 | >20%                    |                10 |              0.04222 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4277 | 5-10%                   |                 2 |              0.21385 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4402 | >20%                    |                 2 |              0.2201  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4407 | <5%                     |                 5 |              0.08814 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4436 | 15-20%                  |                 5 |              0.08872 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4463 | >20%                    |                 2 |              0.22315 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4464 | >20%                    |                10 |              0.04464 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4481 | >20%                    |                 2 |              0.22405 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4511 | >20%                    |                 5 |              0.09022 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4516 | >20%                    |                 5 |              0.09032 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4559 | 15-20%                  |                10 |              0.04559 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4564 | >20%                    |                 5 |              0.09128 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4565 | >20%                    |                 5 |              0.0913  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.473  | <5%                     |                 5 |              0.0946  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4761 | >20%                    |                 5 |              0.09522 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4799 | >20%                    |                 2 |              0.23995 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4839 | <5%                     |                 5 |              0.09678 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4884 | >20%                    |                 2 |              0.2442  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4916 | >20%                    |                 2 |              0.2458  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4923 | >20%                    |                10 |              0.04923 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4975 | 5-10%                   |                 5 |              0.0995  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4979 | >20%                    |                 5 |              0.09958 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4984 | 10-15%                  |                 5 |              0.09968 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5025 | 10-15%                  |                 5 |              0.1005  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5054 | 15-20%                  |                 5 |              0.10108 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5075 | 10-15%                  |                 2 |              0.25375 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5082 | <5%                     |                 5 |              0.10164 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5097 | 15-20%                  |                 2 |              0.25485 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5179 | <5%                     |                 5 |              0.10358 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5375 | >20%                    |                 2 |              0.26875 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5395 | >20%                    |                 2 |              0.26975 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5436 | 15-20%                  |                 2 |              0.2718  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5496 | 5-10%                   |                 2 |              0.2748  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5515 | >20%                    |                 5 |              0.1103  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5524 | >20%                    |                 5 |              0.11048 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5553 | >20%                    |                 2 |              0.27765 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.56   | 10-15%                  |                10 |              0.056   |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5729 | >20%                    |                 2 |              0.28645 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5772 | >20%                    |                 5 |              0.11544 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5787 | 10-15%                  |                 5 |              0.11574 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5884 | >20%                    |                 5 |              0.11768 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.59   | 5-10%                   |                 2 |              0.295   |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6069 | <5%                     |                 2 |              0.30345 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6074 | >20%                    |                 2 |              0.3037  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.617  | >20%                    |                 5 |              0.1234  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6203 | >20%                    |                 2 |              0.31015 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6299 | >20%                    |                 5 |              0.12598 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6383 | >20%                    |                 5 |              0.12766 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6386 | >20%                    |                 5 |              0.12772 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6421 | >20%                    |                 5 |              0.12842 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6452 | >20%                    |                 2 |              0.3226  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6523 | <5%                     |                 5 |              0.13046 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6546 | >20%                    |                10 |              0.06546 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6596 | >20%                    |                 5 |              0.13192 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6671 | 10-15%                  |                 5 |              0.13342 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6731 | >20%                    |                 5 |              0.13462 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6812 | <5%                     |                10 |              0.06812 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6858 | <5%                     |                 5 |              0.13716 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6887 | 10-15%                  |                 2 |              0.34435 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6899 | >20%                    |                10 |              0.06899 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6933 | >20%                    |                10 |              0.06933 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.695  | 15-20%                  |                10 |              0.0695  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6973 | 15-20%                  |                10 |              0.06973 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6984 | >20%                    |                 5 |              0.13968 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7017 | >20%                    |                10 |              0.07017 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7033 | >20%                    |                 2 |              0.35165 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7083 | 10-15%                  |                 5 |              0.14166 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7162 | >20%                    |                10 |              0.07162 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7184 | <5%                     |                 5 |              0.14368 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7186 | >20%                    |                10 |              0.07186 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.719  | <5%                     |                10 |              0.0719  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7232 | 15-20%                  |                10 |              0.07232 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7274 | >20%                    |                10 |              0.07274 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7284 | 15-20%                  |                10 |              0.07284 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7482 | >20%                    |                 2 |              0.3741  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7575 | <5%                     |                10 |              0.07575 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7624 | >20%                    |                10 |              0.07624 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7704 | >20%                    |                 5 |              0.15408 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7763 | >20%                    |                10 |              0.07763 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7937 | 10-15%                  |                10 |              0.07937 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7958 | >20%                    |                 5 |              0.15916 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7973 | >20%                    |                10 |              0.07973 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8016 | >20%                    |                10 |              0.08016 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8034 | <5%                     |                10 |              0.08034 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8115 | 5-10%                   |                 5 |              0.1623  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8146 | 15-20%                  |                10 |              0.08146 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8231 | >20%                    |                 5 |              0.16462 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8443 | >20%                    |                10 |              0.08443 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8555 | >20%                    |                10 |              0.08555 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8745 | 15-20%                  |                10 |              0.08745 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8998 | >20%                    |                10 |              0.08998 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9041 | <5%                     |                10 |              0.09041 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9059 | >20%                    |                10 |              0.09059 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9311 | >20%                    |                10 |              0.09311 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9358 | >20%                    |                10 |              0.09358 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9595 | >20%                    |                10 |              0.09595 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9689 | >20%                    |                 5 |              0.19378 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9843 | >20%                    |                10 |              0.09843 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9862 | >20%                    |                10 |              0.09862 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9976 | >20%                    |                10 |              0.09976 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0057 | >20%                    |                10 |              0.10057 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0101 | >20%                    |                10 |              0.10101 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0131 | 10-15%                  |                10 |              0.10131 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0466 | >20%                    |                 2 |              0.5233  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.057  | <5%                     |                 2 |              0.5285  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0692 | <5%                     |                 2 |              0.5346  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0787 | >20%                    |                 2 |              0.53935 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0853 | 15-20%                  |                10 |              0.10853 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0889 | >20%                    |                10 |              0.10889 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1128 | >20%                    |                10 |              0.11128 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1151 | >20%                    |                 5 |              0.22302 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1246 | <5%                     |                 5 |              0.22492 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1386 | 15-20%                  |                10 |              0.11386 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1885 | 15-20%                  |                10 |              0.11885 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2044 | <5%                     |                10 |              0.12044 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2076 | 10-15%                  |                10 |              0.12076 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2438 | >20%                    |                 5 |              0.24876 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2846 | >20%                    |                10 |              0.12846 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3966 | >20%                    |                10 |              0.13966 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4017 | <5%                     |                 5 |              0.28034 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4674 | >20%                    |                 5 |              0.29348 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5042 | >20%                    |                 2 |              0.7521  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5868 | 10-15%                  |                10 |              0.15868 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.6795 | <5%                     |                10 |              0.16795 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0073 | <5%                     |                10 |              0.20073 |