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

Data correct as of 2025-04-26 01:45:40.105199, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1181 | >20%                    |                 2 |              0.05905 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1305 | >20%                    |                 2 |              0.06525 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1421 | 15-20%                  |                 5 |              0.02842 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1716 | <5%                     |                 2 |              0.0858  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1919 | 15-20%                  |                 2 |              0.09595 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2059 | <5%                     |                 2 |              0.10295 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2144 | >20%                    |                 5 |              0.04288 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2258 | 15-20%                  |                 2 |              0.1129  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.24   | 5-10%                   |                 5 |              0.048   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2435 | 5-10%                   |                 2 |              0.12175 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2439 | 15-20%                  |                10 |              0.02439 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2545 | >20%                    |                 2 |              0.12725 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2718 | 5-10%                   |                 2 |              0.1359  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2731 | >20%                    |                 5 |              0.05462 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2792 | >20%                    |                 2 |              0.1396  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.287  | >20%                    |                 2 |              0.1435  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2879 | <5%                     |                 2 |              0.14395 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | 10-15%                  |                10 |              0.02887 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.289  | 5-10%                   |                 2 |              0.1445  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2952 | 10-15%                  |                10 |              0.02952 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2968 | 10-15%                  |                 2 |              0.1484  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2971 | <5%                     |                 2 |              0.14855 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3073 | >20%                    |                 2 |              0.15365 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3077 | 5-10%                   |                 2 |              0.15385 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3086 | <5%                     |                 2 |              0.1543  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3113 | 15-20%                  |                10 |              0.03113 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3118 | >20%                    |                 2 |              0.1559  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3241 | >20%                    |                 2 |              0.16205 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3244 | >20%                    |                10 |              0.03244 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3277 | >20%                    |                10 |              0.03277 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3283 | <5%                     |                 5 |              0.06566 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3349 | 10-15%                  |                10 |              0.03349 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3373 | >20%                    |                 2 |              0.16865 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3377 | >20%                    |                 2 |              0.16885 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3477 | >20%                    |                10 |              0.03477 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3494 | >20%                    |                 5 |              0.06988 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3508 | 5-10%                   |                 2 |              0.1754  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3552 | <5%                     |                 5 |              0.07104 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3564 | >20%                    |                 2 |              0.1782  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3571 | >20%                    |                 2 |              0.17855 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3584 | >20%                    |                 2 |              0.1792  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3621 | >20%                    |                10 |              0.03621 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3622 | >20%                    |                 2 |              0.1811  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3657 | >20%                    |                 5 |              0.07314 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3667 | >20%                    |                 5 |              0.07334 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3755 | 10-15%                  |                 2 |              0.18775 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3836 | 15-20%                  |                10 |              0.03836 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3909 | <5%                     |                 2 |              0.19545 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3949 | 5-10%                   |                 2 |              0.19745 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4026 | 5-10%                   |                 5 |              0.08052 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4105 | >20%                    |                 2 |              0.20525 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4114 | 10-15%                  |                 2 |              0.2057  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4119 | 15-20%                  |                 5 |              0.08238 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4159 | >20%                    |                 2 |              0.20795 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4183 | 10-15%                  |                 2 |              0.20915 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4255 | 5-10%                   |                 5 |              0.0851  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4287 | 5-10%                   |                 5 |              0.08574 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4301 | >20%                    |                 5 |              0.08602 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4309 | 15-20%                  |                 5 |              0.08618 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4363 | <5%                     |                 5 |              0.08726 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4395 | 15-20%                  |                 2 |              0.21975 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4432 | >20%                    |                 2 |              0.2216  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4447 | >20%                    |                 2 |              0.22235 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4478 | >20%                    |                 5 |              0.08956 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4554 | >20%                    |                 5 |              0.09108 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4599 | 10-15%                  |                 5 |              0.09198 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4656 | >20%                    |                 2 |              0.2328  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4717 | 5-10%                   |                 5 |              0.09434 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4728 | >20%                    |                 5 |              0.09456 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4741 | >20%                    |                 5 |              0.09482 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4744 | <5%                     |                 5 |              0.09488 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4848 | 5-10%                   |                 5 |              0.09696 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4892 | >20%                    |                 5 |              0.09784 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4941 | >20%                    |                 5 |              0.09882 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4953 | >20%                    |                 2 |              0.24765 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4986 | >20%                    |                 2 |              0.2493  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5037 | 10-15%                  |                 5 |              0.10074 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5062 | >20%                    |                 5 |              0.10124 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5096 | <5%                     |                 2 |              0.2548  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5129 | >20%                    |                10 |              0.05129 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5192 | 10-15%                  |                10 |              0.05192 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5213 | 10-15%                  |                 2 |              0.26065 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5336 | >20%                    |                 2 |              0.2668  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5398 | >20%                    |                 2 |              0.2699  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5424 | 15-20%                  |                 5 |              0.10848 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5519 | >20%                    |                 5 |              0.11038 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5533 | >20%                    |                 5 |              0.11066 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5569 | 15-20%                  |                10 |              0.05569 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5634 | >20%                    |                 5 |              0.11268 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.564  | 10-15%                  |                 5 |              0.1128  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5643 | 5-10%                   |                 5 |              0.11286 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.566  | 10-15%                  |                 2 |              0.283   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5669 | >20%                    |                 2 |              0.28345 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5737 | >20%                    |                 5 |              0.11474 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5748 | >20%                    |                 5 |              0.11496 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5803 | >20%                    |                10 |              0.05803 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5861 | >20%                    |                 2 |              0.29305 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5894 | >20%                    |                 2 |              0.2947  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5958 | <5%                     |                 5 |              0.11916 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6009 | 10-15%                  |                 5 |              0.12018 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6087 | 10-15%                  |                10 |              0.06087 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6276 | >20%                    |                 2 |              0.3138  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6283 | 15-20%                  |                10 |              0.06283 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6406 | >20%                    |                 5 |              0.12812 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6507 | >20%                    |                 5 |              0.13014 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6554 | 10-15%                  |                10 |              0.06554 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6608 | >20%                    |                 2 |              0.3304  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.665  | >20%                    |                 5 |              0.133   |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6745 | >20%                    |                 2 |              0.33725 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6748 | <5%                     |                10 |              0.06748 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6912 | 15-20%                  |                 5 |              0.13824 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6931 | >20%                    |                 2 |              0.34655 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6965 | <5%                     |                 5 |              0.1393  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7029 | >20%                    |                 2 |              0.35145 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7032 | >20%                    |                 2 |              0.3516  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7064 | <5%                     |                 5 |              0.14128 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7125 | >20%                    |                10 |              0.07125 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7131 | >20%                    |                10 |              0.07131 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.715  | 5-10%                   |                10 |              0.0715  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7214 | 5-10%                   |                10 |              0.07214 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7236 | >20%                    |                 5 |              0.14472 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.735  | <5%                     |                 5 |              0.147   |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7351 | >20%                    |                10 |              0.07351 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7373 | >20%                    |                 5 |              0.14746 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7452 | >20%                    |                 5 |              0.14904 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7457 | >20%                    |                 5 |              0.14914 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7686 | >20%                    |                 5 |              0.15372 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.774  | >20%                    |                10 |              0.0774  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7892 | 15-20%                  |                10 |              0.07892 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7927 | >20%                    |                10 |              0.07927 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7938 | 10-15%                  |                10 |              0.07938 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7944 | 10-15%                  |                 5 |              0.15888 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7984 | <5%                     |                10 |              0.07984 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8096 | 15-20%                  |                10 |              0.08096 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8284 | 15-20%                  |                10 |              0.08284 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8356 | 10-15%                  |                10 |              0.08356 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8379 | 10-15%                  |                10 |              0.08379 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8408 | >20%                    |                 2 |              0.4204  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8443 | >20%                    |                10 |              0.08443 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8499 | 10-15%                  |                10 |              0.08499 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8505 | 10-15%                  |                10 |              0.08505 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8531 | 5-10%                   |                10 |              0.08531 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8604 | >20%                    |                10 |              0.08604 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8624 | >20%                    |                10 |              0.08624 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8655 | >20%                    |                 5 |              0.1731  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8719 | >20%                    |                 2 |              0.43595 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8953 | <5%                     |                10 |              0.08953 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8961 | <5%                     |                10 |              0.08961 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9039 | 15-20%                  |                10 |              0.09039 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9352 | 15-20%                  |                10 |              0.09352 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9455 | 10-15%                  |                 5 |              0.1891  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9633 | >20%                    |                10 |              0.09633 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9987 | >20%                    |                10 |              0.09987 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0061 | >20%                    |                10 |              0.10061 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.0076 | <5%                     |                10 |              0.10076 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0161 | >20%                    |                 2 |              0.50805 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0528 | >20%                    |                10 |              0.10528 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.0606 | >20%                    |                 5 |              0.21212 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0766 | <5%                     |                10 |              0.10766 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.083  | <5%                     |                 5 |              0.2166  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0941 | >20%                    |                10 |              0.10941 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0974 | >20%                    |                 2 |              0.5487  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1024 | <5%                     |                10 |              0.11024 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1083 | 5-10%                   |                10 |              0.11083 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1468 | >20%                    |                10 |              0.11468 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1522 | >20%                    |                 5 |              0.23044 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1957 | >20%                    |                10 |              0.11957 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2273 | >20%                    |                 5 |              0.24546 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.2341 | 15-20%                  |                 2 |              0.61705 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2627 | <5%                     |                 5 |              0.25254 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2706 | >20%                    |                10 |              0.12706 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2743 | >20%                    |                 5 |              0.25486 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2829 | 10-15%                  |                 2 |              0.64145 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3385 | >20%                    |                 5 |              0.2677  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3782 | 15-20%                  |                10 |              0.13782 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3877 | >20%                    |                 2 |              0.69385 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3887 | 15-20%                  |                10 |              0.13887 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6301 | >20%                    |                10 |              0.16301 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7384 | 15-20%                  |                10 |              0.17384 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.841  | >20%                    |                10 |              0.1841  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9562 | <5%                     |                10 |              0.19562 |