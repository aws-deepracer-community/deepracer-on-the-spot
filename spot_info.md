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

Data correct as of 2025-03-02 01:45:13.158109, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1101 | >20%                    |                 2 |              0.05505 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1309 | 10-15%                  |                 2 |              0.06545 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1442 | 5-10%                   |                 5 |              0.02884 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1879 | <5%                     |                 2 |              0.09395 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1898 | <5%                     |                 5 |              0.03796 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 10-15%                  |                 5 |              0.039   |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2132 | >20%                    |                 5 |              0.04264 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2148 | 5-10%                   |                 2 |              0.1074  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2186 | >20%                    |                 5 |              0.04372 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2232 | 15-20%                  |                 5 |              0.04464 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.23   | <5%                     |                 2 |              0.115   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2331 | >20%                    |                 2 |              0.11655 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2349 | >20%                    |                 2 |              0.11745 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2367 | 5-10%                   |                10 |              0.02367 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2367 | >20%                    |                 2 |              0.11835 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2391 | >20%                    |                 2 |              0.11955 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 15-20%                  |                10 |              0.02395 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2421 | >20%                    |                 2 |              0.12105 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2427 | <5%                     |                 5 |              0.04854 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2622 | 15-20%                  |                 2 |              0.1311  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2683 | 5-10%                   |                 2 |              0.13415 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.27   | 5-10%                   |                 2 |              0.135   |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2792 | <5%                     |                 2 |              0.1396  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2806 | 10-15%                  |                10 |              0.02806 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2911 | 5-10%                   |                 2 |              0.14555 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2967 | 10-15%                  |                 2 |              0.14835 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.3014 |                         |                 2 |              0.1507  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3016 | 15-20%                  |                 2 |              0.1508  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3062 | 5-10%                   |                 5 |              0.06124 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3121 | 15-20%                  |                 2 |              0.15605 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3128 | <5%                     |                 5 |              0.06256 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3136 | >20%                    |                 2 |              0.1568  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3137 | <5%                     |                 2 |              0.15685 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3145 | <5%                     |                 2 |              0.15725 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3194 | 10-15%                  |                 2 |              0.1597  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3198 | >20%                    |                 2 |              0.1599  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3406 | >20%                    |                10 |              0.03406 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3409 | 15-20%                  |                 5 |              0.06818 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.3416 |                         |                 5 |              0.06832 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3451 | <5%                     |                 2 |              0.17255 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3462 | >20%                    |                 2 |              0.1731  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3466 | <5%                     |                 5 |              0.06932 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3506 | 15-20%                  |                10 |              0.03506 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3575 | 10-15%                  |                 5 |              0.0715  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3634 | 5-10%                   |                10 |              0.03634 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3635 | 15-20%                  |                 2 |              0.18175 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3732 | >20%                    |                 2 |              0.1866  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3745 | 5-10%                   |                 5 |              0.0749  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3767 | <5%                     |                 2 |              0.18835 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3847 | <5%                     |                 5 |              0.07694 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3864 | >20%                    |                 5 |              0.07728 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3981 | 15-20%                  |                 2 |              0.19905 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4026 | <5%                     |                 2 |              0.2013  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4035 | <5%                     |                10 |              0.04035 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4046 | 10-15%                  |                10 |              0.04046 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4171 | 5-10%                   |                 2 |              0.20855 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4176 | 5-10%                   |                 2 |              0.2088  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4185 | >20%                    |                 2 |              0.20925 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.424  | 10-15%                  |                 2 |              0.212   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4296 | >20%                    |                 5 |              0.08592 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4303 | 5-10%                   |                 2 |              0.21515 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4359 | 5-10%                   |                 2 |              0.21795 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4374 | <5%                     |                 2 |              0.2187  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4378 | >20%                    |                 5 |              0.08756 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4392 | >20%                    |                 2 |              0.2196  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4403 | >20%                    |                 2 |              0.22015 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4412 | >20%                    |                 2 |              0.2206  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4447 | <5%                     |                10 |              0.04447 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4448 | >20%                    |                 2 |              0.2224  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4578 | 15-20%                  |                10 |              0.04578 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4618 | 10-15%                  |                 5 |              0.09236 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4653 | >20%                    |                 2 |              0.23265 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4681 | 5-10%                   |                 5 |              0.09362 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4685 | >20%                    |                 5 |              0.0937  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4766 | <5%                     |                 5 |              0.09532 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4797 | 15-20%                  |                 5 |              0.09594 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.494  | >20%                    |                 5 |              0.0988  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5035 | >20%                    |                 5 |              0.1007  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5036 | >20%                    |                 2 |              0.2518  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.505  |                         |                10 |              0.0505  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5055 | <5%                     |                 5 |              0.1011  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5073 | >20%                    |                 2 |              0.25365 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5107 | <5%                     |                 5 |              0.10214 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5137 | >20%                    |                 5 |              0.10274 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5178 | 5-10%                   |                 5 |              0.10356 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5206 | >20%                    |                 5 |              0.10412 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5251 | >20%                    |                 2 |              0.26255 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5333 | 15-20%                  |                10 |              0.05333 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5341 | 5-10%                   |                 5 |              0.10682 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5378 | <5%                     |                 2 |              0.2689  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5452 | 10-15%                  |                 5 |              0.10904 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5499 | >20%                    |                 2 |              0.27495 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5526 | 10-15%                  |                 5 |              0.11052 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.559  | 15-20%                  |                 2 |              0.2795  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5607 | 5-10%                   |                 5 |              0.11214 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5627 | 10-15%                  |                 5 |              0.11254 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5643 | >20%                    |                 5 |              0.11286 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5707 | 5-10%                   |                 5 |              0.11414 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5741 | >20%                    |                 2 |              0.28705 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5754 | 5-10%                   |                10 |              0.05754 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5871 | 10-15%                  |                 5 |              0.11742 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5944 | >20%                    |                 2 |              0.2972  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6041 | 5-10%                   |                 2 |              0.30205 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6086 | 5-10%                   |                 5 |              0.12172 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6133 | 15-20%                  |                 5 |              0.12266 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.614  | <5%                     |                 5 |              0.1228  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.629  | 10-15%                  |                10 |              0.0629  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.64   | <5%                     |                10 |              0.064   |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6435 | >20%                    |                 5 |              0.1287  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6577 | 10-15%                  |                 5 |              0.13154 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.659  | >20%                    |                10 |              0.0659  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.666  | 5-10%                   |                 5 |              0.1332  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6755 | >20%                    |                 2 |              0.33775 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6915 | >20%                    |                10 |              0.06915 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6973 | >20%                    |                 2 |              0.34865 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7106 | >20%                    |                 5 |              0.14212 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7196 | >20%                    |                 5 |              0.14392 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7249 | >20%                    |                10 |              0.07249 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7328 | 5-10%                   |                 5 |              0.14656 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7424 | >20%                    |                 5 |              0.14848 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.746  | >20%                    |                10 |              0.0746  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7474 | <5%                     |                 5 |              0.14948 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7509 | 5-10%                   |                 5 |              0.15018 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7625 | 15-20%                  |                 2 |              0.38125 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7674 | 5-10%                   |                 2 |              0.3837  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7743 | >20%                    |                10 |              0.07743 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7749 | >20%                    |                 5 |              0.15498 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7754 | >20%                    |                10 |              0.07754 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7758 | 15-20%                  |                10 |              0.07758 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7769 | >20%                    |                10 |              0.07769 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7787 | 5-10%                   |                10 |              0.07787 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7803 | >20%                    |                 5 |              0.15606 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7912 | >20%                    |                10 |              0.07912 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7919 | 10-15%                  |                10 |              0.07919 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7945 | >20%                    |                 5 |              0.1589  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7953 | <5%                     |                10 |              0.07953 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7978 | <5%                     |                10 |              0.07978 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8114 | >20%                    |                 5 |              0.16228 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8318 | >20%                    |                10 |              0.08318 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8372 | <5%                     |                10 |              0.08372 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8619 | 15-20%                  |                10 |              0.08619 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8719 | 5-10%                   |                10 |              0.08719 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8792 | <5%                     |                10 |              0.08792 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8804 | >20%                    |                 5 |              0.17608 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8888 | 5-10%                   |                10 |              0.08888 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8933 | <5%                     |                10 |              0.08933 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8934 | 10-15%                  |                10 |              0.08934 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9205 | >20%                    |                10 |              0.09205 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9418 | >20%                    |                10 |              0.09418 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9665 | 10-15%                  |                10 |              0.09665 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9669 | 5-10%                   |                10 |              0.09669 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9808 | >20%                    |                10 |              0.09808 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.016  | 5-10%                   |                10 |              0.1016  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0164 | 15-20%                  |                10 |              0.10164 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0195 | 15-20%                  |                10 |              0.10195 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0305 | 10-15%                  |                10 |              0.10305 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.045  | >20%                    |                10 |              0.1045  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0828 | <5%                     |                10 |              0.10828 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0948 | >20%                    |                10 |              0.10948 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1042 | 10-15%                  |                10 |              0.11042 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.109  | >20%                    |                 2 |              0.5545  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.109  | 10-15%                  |                 2 |              0.5545  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1668 | >20%                    |                10 |              0.11668 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.176  | >20%                    |                 2 |              0.588   |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2043 | 15-20%                  |                10 |              0.12043 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2571 | 5-10%                   |                 5 |              0.25142 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.281  | >20%                    |                 5 |              0.2562  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3178 | >20%                    |                10 |              0.13178 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3194 | 10-15%                  |                 5 |              0.26388 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3929 | >20%                    |                 5 |              0.27858 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4318 | >20%                    |                10 |              0.14318 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4565 | 15-20%                  |                 5 |              0.2913  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4637 | >20%                    |                 2 |              0.73185 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5689 | >20%                    |                10 |              0.15689 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7325 | >20%                    |                10 |              0.17325 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7843 | >20%                    |                10 |              0.17843 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0681 | 5-10%                   |                10 |              0.20681 |