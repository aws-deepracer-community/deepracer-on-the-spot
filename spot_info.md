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

Data correct as of 2025-04-20 01:53:54.382901, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1117 | >20%                    |                 2 |              0.05585 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1136 | 15-20%                  |                 2 |              0.0568  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1277 | 15-20%                  |                 5 |              0.02554 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.147  | >20%                    |                 2 |              0.0735  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.168  | >20%                    |                 5 |              0.0336  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1811 | 5-10%                   |                 2 |              0.09055 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1896 | <5%                     |                 2 |              0.0948  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2188 | 5-10%                   |                 5 |              0.04376 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | >20%                    |                10 |              0.02308 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.234  | 15-20%                  |                 2 |              0.117   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2572 | >20%                    |                 2 |              0.1286  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2573 | 5-10%                   |                 2 |              0.12865 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2666 | 15-20%                  |                10 |              0.02666 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2748 | 5-10%                   |                 2 |              0.1374  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2797 | >20%                    |                 2 |              0.13985 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2844 | <5%                     |                 2 |              0.1422  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2851 | >20%                    |                 2 |              0.14255 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2876 | <5%                     |                 2 |              0.1438  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2904 | <5%                     |                 2 |              0.1452  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2928 | 15-20%                  |                 2 |              0.1464  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2949 | >20%                    |                 2 |              0.14745 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2954 | >20%                    |                10 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2976 | <5%                     |                 5 |              0.05952 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3    | 5-10%                   |                 2 |              0.15    |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3015 | 10-15%                  |                10 |              0.03015 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3066 | 10-15%                  |                10 |              0.03066 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3123 | <5%                     |                 2 |              0.15615 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3151 | 5-10%                   |                 5 |              0.06302 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3212 | 15-20%                  |                10 |              0.03212 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3242 | >20%                    |                 5 |              0.06484 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3266 | >20%                    |                 2 |              0.1633  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3283 | >20%                    |                 2 |              0.16415 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3323 | >20%                    |                 5 |              0.06646 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3323 | 15-20%                  |                 2 |              0.16615 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3381 | >20%                    |                10 |              0.03381 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3419 | >20%                    |                 2 |              0.17095 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.345  | >20%                    |                 5 |              0.069   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3576 | >20%                    |                 2 |              0.1788  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3594 | >20%                    |                 2 |              0.1797  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3646 | >20%                    |                 2 |              0.1823  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3659 | 5-10%                   |                 2 |              0.18295 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3789 | 5-10%                   |                 2 |              0.18945 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3818 | >20%                    |                 5 |              0.07636 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.383  | >20%                    |                10 |              0.0383  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3838 | >20%                    |                 2 |              0.1919  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3973 | <5%                     |                 2 |              0.19865 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3985 | 10-15%                  |                 2 |              0.19925 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3995 | 10-15%                  |                 2 |              0.19975 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4106 | 5-10%                   |                 5 |              0.08212 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4161 | >20%                    |                 2 |              0.20805 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4203 | 10-15%                  |                 5 |              0.08406 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4209 | >20%                    |                 5 |              0.08418 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.421  | 15-20%                  |                 2 |              0.2105  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4211 | 10-15%                  |                10 |              0.04211 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4214 | >20%                    |                10 |              0.04214 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4225 | 15-20%                  |                 2 |              0.21125 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4253 | >20%                    |                 5 |              0.08506 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4293 | >20%                    |                10 |              0.04293 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.43   | 5-10%                   |                10 |              0.043   |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4348 | >20%                    |                 2 |              0.2174  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4348 | <5%                     |                 5 |              0.08696 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4386 | >20%                    |                 5 |              0.08772 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4413 | >20%                    |                 5 |              0.08826 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4449 | >20%                    |                 2 |              0.22245 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4499 | >20%                    |                 5 |              0.08998 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4499 | 5-10%                   |                 5 |              0.08998 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4522 | <5%                     |                 5 |              0.09044 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4564 | 10-15%                  |                 5 |              0.09128 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.461  | >20%                    |                 2 |              0.2305  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4645 | 15-20%                  |                10 |              0.04645 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4692 | >20%                    |                 5 |              0.09384 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4726 | >20%                    |                 2 |              0.2363  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4749 | <5%                     |                 5 |              0.09498 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4771 | 5-10%                   |                 5 |              0.09542 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4782 | 15-20%                  |                 5 |              0.09564 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4807 | <5%                     |                 5 |              0.09614 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4817 | >20%                    |                10 |              0.04817 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.485  | <5%                     |                 2 |              0.2425  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4987 | >20%                    |                 2 |              0.24935 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4997 | >20%                    |                 2 |              0.24985 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5017 | 10-15%                  |                 2 |              0.25085 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5121 | >20%                    |                 2 |              0.25605 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5133 | 10-15%                  |                 5 |              0.10266 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5145 | >20%                    |                 5 |              0.1029  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5155 | >20%                    |                 5 |              0.1031  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5322 | >20%                    |                 2 |              0.2661  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5361 | >20%                    |                 5 |              0.10722 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5381 | >20%                    |                 5 |              0.10762 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.541  | 10-15%                  |                 2 |              0.2705  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5454 | 5-10%                   |                 5 |              0.10908 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5585 | >20%                    |                 2 |              0.27925 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5591 | >20%                    |                 5 |              0.11182 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5732 | >20%                    |                 5 |              0.11464 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5769 | >20%                    |                 2 |              0.28845 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5796 | >20%                    |                 5 |              0.11592 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5862 | >20%                    |                 2 |              0.2931  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5892 | 15-20%                  |                 5 |              0.11784 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5962 | >20%                    |                 2 |              0.2981  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5984 | >20%                    |                 5 |              0.11968 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5988 | 10-15%                  |                10 |              0.05988 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6006 | >20%                    |                 5 |              0.12012 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6048 | <5%                     |                 5 |              0.12096 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6097 | >20%                    |                10 |              0.06097 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.613  | >20%                    |                 2 |              0.3065  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6167 | 10-15%                  |                 5 |              0.12334 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6435 | >20%                    |                 2 |              0.32175 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6572 | >20%                    |                 2 |              0.3286  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6619 | >20%                    |                 5 |              0.13238 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6622 | >20%                    |                 2 |              0.3311  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.666  | <5%                     |                 5 |              0.1332  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6667 | <5%                     |                10 |              0.06667 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6667 | 5-10%                   |                 5 |              0.13334 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6729 | 5-10%                   |                10 |              0.06729 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.675  | 15-20%                  |                10 |              0.0675  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6753 | 15-20%                  |                 5 |              0.13506 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6763 | >20%                    |                 5 |              0.13526 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6794 | >20%                    |                 5 |              0.13588 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6847 | >20%                    |                 2 |              0.34235 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6899 | >20%                    |                 5 |              0.13798 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6914 | >20%                    |                10 |              0.06914 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6947 | >20%                    |                 5 |              0.13894 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6981 | >20%                    |                10 |              0.06981 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7074 | 5-10%                   |                10 |              0.07074 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.711  | >20%                    |                 2 |              0.3555  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.728  | 15-20%                  |                10 |              0.0728  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7349 | <5%                     |                 5 |              0.14698 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7488 | 5-10%                   |                10 |              0.07488 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7542 | >20%                    |                 5 |              0.15084 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7687 | >20%                    |                 5 |              0.15374 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7691 | >20%                    |                10 |              0.07691 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7731 | 15-20%                  |                 5 |              0.15462 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7788 | 10-15%                  |                10 |              0.07788 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7831 | 10-15%                  |                 5 |              0.15662 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7899 | >20%                    |                10 |              0.07899 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7913 | >20%                    |                10 |              0.07913 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7973 | <5%                     |                10 |              0.07973 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7996 | >20%                    |                10 |              0.07996 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8112 | >20%                    |                 5 |              0.16224 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.814  | 5-10%                   |                10 |              0.0814  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8228 | 10-15%                  |                10 |              0.08228 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8311 | 5-10%                   |                10 |              0.08311 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.834  | >20%                    |                10 |              0.0834  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8449 | 10-15%                  |                10 |              0.08449 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8471 | >20%                    |                 2 |              0.42355 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8496 | 10-15%                  |                10 |              0.08496 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8496 | >20%                    |                10 |              0.08496 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8614 | <5%                     |                10 |              0.08614 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8683 | <5%                     |                10 |              0.08683 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.879  | >20%                    |                 2 |              0.4395  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8811 | >20%                    |                10 |              0.08811 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8823 | <5%                     |                10 |              0.08823 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9041 | >20%                    |                10 |              0.09041 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9108 | 15-20%                  |                10 |              0.09108 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9217 | 5-10%                   |                10 |              0.09217 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.926  | 15-20%                  |                 5 |              0.1852  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9366 | >20%                    |                10 |              0.09366 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9465 | >20%                    |                10 |              0.09465 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9465 | >20%                    |                 5 |              0.1893  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9709 | >20%                    |                10 |              0.09709 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0268 | >20%                    |                10 |              0.10268 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0375 | >20%                    |                10 |              0.10375 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0738 | <5%                     |                10 |              0.10738 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0935 | >20%                    |                 5 |              0.2187  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0938 | <5%                     |                10 |              0.10938 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1083 | >20%                    |                 5 |              0.22166 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1331 | 15-20%                  |                 2 |              0.56655 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1399 | >20%                    |                 2 |              0.56995 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1673 | >20%                    |                10 |              0.11673 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2156 | >20%                    |                 5 |              0.24312 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.227  | 15-20%                  |                10 |              0.1227  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2292 | <5%                     |                 5 |              0.24584 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2898 | >20%                    |                10 |              0.12898 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2951 | >20%                    |                 5 |              0.25902 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2964 | 10-15%                  |                 2 |              0.6482  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3081 | 15-20%                  |                10 |              0.13081 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4064 | 15-20%                  |                10 |              0.14064 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4133 | >20%                    |                 2 |              0.70665 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6236 | >20%                    |                10 |              0.16236 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6641 | >20%                    |                10 |              0.16641 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8483 | 5-10%                   |                10 |              0.18483 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.934  | >20%                    |                10 |              0.1934  |