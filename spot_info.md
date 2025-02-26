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

Data correct as of 2025-02-26 01:40:08.573166, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1149 | >20%                    |                 2 |              0.05745 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.136  | 10-15%                  |                 2 |              0.068   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1382 | 5-10%                   |                 5 |              0.02764 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1679 | <5%                     |                 2 |              0.08395 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.187  | <5%                     |                 5 |              0.0374  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 10-15%                  |                 5 |              0.039   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2131 | 5-10%                   |                 2 |              0.10655 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2197 | >20%                    |                 5 |              0.04394 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2216 | >20%                    |                 2 |              0.1108  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2229 | >20%                    |                 2 |              0.11145 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2256 | <5%                     |                 2 |              0.1128  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2366 | >20%                    |                 2 |              0.1183  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2382 | >20%                    |                 2 |              0.1191  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2384 | <5%                     |                 5 |              0.04768 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2422 | 5-10%                   |                10 |              0.02422 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2453 | >20%                    |                 2 |              0.12265 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2455 | 15-20%                  |                10 |              0.02455 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2484 | >20%                    |                 5 |              0.04968 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.2492 |                         |                 2 |              0.1246  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2575 | >20%                    |                 2 |              0.12875 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2595 | <5%                     |                 5 |              0.0519  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2681 | 5-10%                   |                 2 |              0.13405 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2694 | 10-15%                  |                10 |              0.02694 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2733 | 15-20%                  |                 2 |              0.13665 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.281  | 5-10%                   |                 2 |              0.1405  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.282  | <5%                     |                 2 |              0.141   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.2822 | 5-10%                   |                 5 |              0.05644 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2889 | 5-10%                   |                 2 |              0.14445 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2909 | >20%                    |                 2 |              0.14545 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2994 | 10-15%                  |                 2 |              0.1497  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3055 | 15-20%                  |                 2 |              0.15275 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3108 | <5%                     |                 2 |              0.1554  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3134 | <5%                     |                 2 |              0.1567  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3227 | 15-20%                  |                 2 |              0.16135 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.326  | 15-20%                  |                 5 |              0.0652  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3301 | <5%                     |                 2 |              0.16505 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3315 | 10-15%                  |                 2 |              0.16575 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3355 | >20%                    |                 2 |              0.16775 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3441 | >20%                    |                 2 |              0.17205 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3446 | 15-20%                  |                10 |              0.03446 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.3448 |                         |                 5 |              0.06896 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3483 | >20%                    |                10 |              0.03483 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3512 | 5-10%                   |                10 |              0.03512 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3569 | 15-20%                  |                 2 |              0.17845 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3605 | 10-15%                  |                 5 |              0.0721  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.361  | <5%                     |                10 |              0.0361  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3645 | <5%                     |                 5 |              0.0729  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3762 | <5%                     |                 2 |              0.1881  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3797 | 5-10%                   |                 5 |              0.07594 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3853 | 10-15%                  |                10 |              0.03853 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3868 | 15-20%                  |                10 |              0.03868 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3892 | >20%                    |                 5 |              0.07784 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3954 | <5%                     |                 2 |              0.1977  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4036 | 5-10%                   |                 2 |              0.2018  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4065 | <5%                     |                 5 |              0.0813  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4132 | 10-15%                  |                 2 |              0.2066  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4159 | 5-10%                   |                 2 |              0.20795 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.416  | >20%                    |                 5 |              0.0832  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4161 | >20%                    |                 5 |              0.08322 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4162 | 5-10%                   |                 2 |              0.2081  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4186 | >20%                    |                 2 |              0.2093  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4193 | 15-20%                  |                 2 |              0.20965 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4209 | 5-10%                   |                 2 |              0.21045 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4271 | <5%                     |                 2 |              0.21355 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4495 | >20%                    |                 2 |              0.22475 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.457  | >20%                    |                 5 |              0.0914  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4589 | <5%                     |                 5 |              0.09178 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4682 | 10-15%                  |                 5 |              0.09364 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4697 | >20%                    |                 2 |              0.23485 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4721 | >20%                    |                 2 |              0.23605 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4726 | 5-10%                   |                 5 |              0.09452 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4776 | 5-10%                   |                 5 |              0.09552 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4814 | 15-20%                  |                 5 |              0.09628 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4826 | <5%                     |                10 |              0.04826 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.486  | >20%                    |                 2 |              0.243   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4994 | <5%                     |                 5 |              0.09988 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.5039 |                         |                10 |              0.05039 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5041 | >20%                    |                 2 |              0.25205 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5053 | >20%                    |                 5 |              0.10106 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5058 | >20%                    |                 5 |              0.10116 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5092 | >20%                    |                 2 |              0.2546  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5098 | >20%                    |                 5 |              0.10196 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5115 | >20%                    |                 2 |              0.25575 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5128 | >20%                    |                 2 |              0.2564  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5245 | <5%                     |                 2 |              0.26225 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5274 | <5%                     |                 5 |              0.10548 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5278 | 5-10%                   |                 5 |              0.10556 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5339 | 10-15%                  |                 5 |              0.10678 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5351 | >20%                    |                 5 |              0.10702 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.54   | 10-15%                  |                 5 |              0.108   |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5427 | >20%                    |                 2 |              0.27135 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5519 | 15-20%                  |                 2 |              0.27595 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5582 | >20%                    |                 2 |              0.2791  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5612 | 5-10%                   |                 5 |              0.11224 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5681 | >20%                    |                 2 |              0.28405 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5682 | >20%                    |                 5 |              0.11364 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5701 | >20%                    |                 5 |              0.11402 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5708 | 5-10%                   |                10 |              0.05708 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5718 | 5-10%                   |                 5 |              0.11436 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5775 | 15-20%                  |                10 |              0.05775 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5865 | 5-10%                   |                 2 |              0.29325 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5911 | 10-15%                  |                 5 |              0.11822 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6015 | 10-15%                  |                 5 |              0.1203  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6035 | <5%                     |                 5 |              0.1207  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6044 | 5-10%                   |                 5 |              0.12088 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6195 | 10-15%                  |                10 |              0.06195 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6276 | 15-20%                  |                 5 |              0.12552 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6421 | >20%                    |                 5 |              0.12842 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6482 | >20%                    |                10 |              0.06482 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.655  | <5%                     |                10 |              0.0655  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6663 | 5-10%                   |                 5 |              0.13326 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6682 | 10-15%                  |                 5 |              0.13364 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.675  | >20%                    |                 5 |              0.135   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6811 | >20%                    |                10 |              0.06811 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.684  | >20%                    |                 2 |              0.342   |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6961 | >20%                    |                 2 |              0.34805 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7054 | 5-10%                   |                 5 |              0.14108 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7152 | >20%                    |                 5 |              0.14304 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7191 | >20%                    |                10 |              0.07191 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7249 | 5-10%                   |                 5 |              0.14498 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7278 | >20%                    |                 5 |              0.14556 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7519 | <5%                     |                 5 |              0.15038 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7561 | 5-10%                   |                10 |              0.07561 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7639 | <5%                     |                10 |              0.07639 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7697 | >20%                    |                 5 |              0.15394 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7718 | 15-20%                  |                10 |              0.07718 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.774  | >20%                    |                10 |              0.0774  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7814 | >20%                    |                10 |              0.07814 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7897 | >20%                    |                10 |              0.07897 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7923 | 15-20%                  |                 2 |              0.39615 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7924 | 10-15%                  |                10 |              0.07924 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7963 | >20%                    |                 5 |              0.15926 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7977 | >20%                    |                 5 |              0.15954 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8016 | 5-10%                   |                 2 |              0.4008  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.809  | >20%                    |                10 |              0.0809  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8188 | 5-10%                   |                10 |              0.08188 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8253 | 15-20%                  |                10 |              0.08253 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8287 | <5%                     |                10 |              0.08287 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8405 | >20%                    |                10 |              0.08405 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8517 | >20%                    |                10 |              0.08517 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8626 | <5%                     |                10 |              0.08626 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8745 | <5%                     |                10 |              0.08745 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8817 | 10-15%                  |                10 |              0.08817 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8845 | 5-10%                   |                10 |              0.08845 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8882 | <5%                     |                10 |              0.08882 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9187 | >20%                    |                 5 |              0.18374 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9301 | >20%                    |                10 |              0.09301 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9386 | >20%                    |                10 |              0.09386 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9411 | 10-15%                  |                10 |              0.09411 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9668 | 5-10%                   |                10 |              0.09668 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9727 | >20%                    |                10 |              0.09727 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9899 | 10-15%                  |                10 |              0.09899 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0097 | 5-10%                   |                10 |              0.10097 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0173 | >20%                    |                10 |              0.10173 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0223 | 15-20%                  |                10 |              0.10223 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0312 | 15-20%                  |                10 |              0.10312 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.042  | >20%                    |                 2 |              0.521   |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0787 | >20%                    |                10 |              0.10787 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0894 | <5%                     |                10 |              0.10894 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1089 | 10-15%                  |                 2 |              0.55445 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1199 | 10-15%                  |                10 |              0.11199 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1741 | >20%                    |                10 |              0.11741 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2095 | >20%                    |                 5 |              0.2419  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2097 | 15-20%                  |                10 |              0.12097 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2247 | 5-10%                   |                 5 |              0.24494 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2393 | 15-20%                  |                 5 |              0.24786 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2566 | >20%                    |                 2 |              0.6283  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2897 | 10-15%                  |                 5 |              0.25794 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.334  | >20%                    |                10 |              0.1334  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3466 | >20%                    |                 5 |              0.26932 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3631 | >20%                    |                 2 |              0.68155 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4628 | >20%                    |                10 |              0.14628 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5231 | >20%                    |                10 |              0.15231 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7458 | >20%                    |                10 |              0.17458 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7626 | >20%                    |                10 |              0.17626 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0548 | 5-10%                   |                10 |              0.20548 |