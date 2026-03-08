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

Data correct as of 2026-03-08 02:35:04.627870, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1315 | >20%                    |                 2 |              0.06575 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.161  | >20%                    |                 2 |              0.0805  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.1968 | <5%                     |                 2 |              0.0984  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.227  | 10-15%                  |                 2 |              0.1135  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2393 | >20%                    |                 2 |              0.11965 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2398 | 5-10%                   |                10 |              0.02398 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2454 | >20%                    |                 2 |              0.1227  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.248  | >20%                    |                 2 |              0.124   |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2488 | >20%                    |                 2 |              0.1244  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2609 | >20%                    |                 2 |              0.13045 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2621 | 15-20%                  |                 2 |              0.13105 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2632 | >20%                    |                 5 |              0.05264 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2666 | >20%                    |                 5 |              0.05332 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2981 | 10-15%                  |                 2 |              0.14905 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3037 | >20%                    |                 2 |              0.15185 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3069 | >20%                    |                 2 |              0.15345 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3074 | >20%                    |                 2 |              0.1537  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3075 | 5-10%                   |                 2 |              0.15375 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3094 | >20%                    |                 2 |              0.1547  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3104 | >20%                    |                 5 |              0.06208 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3106 | >20%                    |                 2 |              0.1553  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.316  | <5%                     |                 5 |              0.0632  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.331  | 5-10%                   |                10 |              0.0331  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3324 | >20%                    |                 5 |              0.06648 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3333 | <5%                     |                 2 |              0.16665 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3348 | >20%                    |                 5 |              0.06696 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.337  | 15-20%                  |                 2 |              0.1685  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3422 | >20%                    |                 5 |              0.06844 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3458 | >20%                    |                 2 |              0.1729  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3516 | <5%                     |                 5 |              0.07032 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3517 | 10-15%                  |                 2 |              0.17585 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3556 | 5-10%                   |                 2 |              0.1778  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3578 | >20%                    |                 5 |              0.07156 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3616 | 15-20%                  |                 2 |              0.1808  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3637 | >20%                    |                 5 |              0.07274 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3651 | <5%                     |                 2 |              0.18255 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3703 | <5%                     |                 5 |              0.07406 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3764 | >20%                    |                10 |              0.03764 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3769 | <5%                     |                10 |              0.03769 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.38   | >20%                    |                 5 |              0.076   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3803 | 5-10%                   |                 2 |              0.19015 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3864 | 5-10%                   |                 2 |              0.1932  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3968 | >20%                    |                 2 |              0.1984  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3968 | 15-20%                  |                 5 |              0.07936 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3974 | >20%                    |                10 |              0.03974 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3989 | <5%                     |                 5 |              0.07978 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4015 | 5-10%                   |                 5 |              0.0803  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4024 | 5-10%                   |                 2 |              0.2012  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4054 | >20%                    |                 2 |              0.2027  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4074 | 5-10%                   |                 5 |              0.08148 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4143 | 10-15%                  |                 5 |              0.08286 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4158 | >20%                    |                 2 |              0.2079  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.4164 | 15-20%                  |                 5 |              0.08328 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4189 | 15-20%                  |                 2 |              0.20945 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4198 | >20%                    |                 2 |              0.2099  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4205 | 5-10%                   |                 5 |              0.0841  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4258 | >20%                    |                 2 |              0.2129  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4271 | >20%                    |                10 |              0.04271 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4284 | >20%                    |                 2 |              0.2142  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4304 | >20%                    |                 5 |              0.08608 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.436  | 15-20%                  |                10 |              0.0436  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4399 | <5%                     |                 2 |              0.21995 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4404 | <5%                     |                10 |              0.04404 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.441  | 15-20%                  |                 5 |              0.0882  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4448 | 15-20%                  |                 2 |              0.2224  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4462 | 15-20%                  |                 2 |              0.2231  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4473 | >20%                    |                 5 |              0.08946 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4505 | >20%                    |                 2 |              0.22525 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4549 | 5-10%                   |                 2 |              0.22745 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.4556 | >20%                    |                10 |              0.04556 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4585 | >20%                    |                 5 |              0.0917  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4705 | 5-10%                   |                 2 |              0.23525 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4718 | >20%                    |                 5 |              0.09436 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4772 | >20%                    |                 5 |              0.09544 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.479  | 15-20%                  |                10 |              0.0479  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.4837 | <5%                     |                 5 |              0.09674 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4855 | >20%                    |                10 |              0.04855 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4936 | >20%                    |                 5 |              0.09872 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5061 | >20%                    |                 2 |              0.25305 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5111 | >20%                    |                 2 |              0.25555 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5189 | >20%                    |                 5 |              0.10378 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5209 | 15-20%                  |                 5 |              0.10418 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5248 | >20%                    |                10 |              0.05248 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5261 | >20%                    |                 5 |              0.10522 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.528  | >20%                    |                 2 |              0.264   |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5284 | <5%                     |                10 |              0.05284 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.53   | >20%                    |                 5 |              0.106   |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5399 | >20%                    |                10 |              0.05399 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5453 | <5%                     |                 5 |              0.10906 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5486 |                         |                 2 |              0.2743  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5509 | 15-20%                  |                10 |              0.05509 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5575 | 15-20%                  |                10 |              0.05575 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5579 | >20%                    |                 2 |              0.27895 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5687 | >20%                    |                 2 |              0.28435 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5723 | >20%                    |                 2 |              0.28615 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.577  | 5-10%                   |                 2 |              0.2885  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5827 | 5-10%                   |                 5 |              0.11654 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5835 | >20%                    |                 5 |              0.1167  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5853 | >20%                    |                 5 |              0.11706 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5921 | <5%                     |                10 |              0.05921 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6086 | 5-10%                   |                 5 |              0.12172 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6147 | <5%                     |                10 |              0.06147 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6152 | 5-10%                   |                 2 |              0.3076  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.616  | >20%                    |                 2 |              0.308   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6161 | >20%                    |                 5 |              0.12322 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6203 | >20%                    |                10 |              0.06203 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6309 | >20%                    |                10 |              0.06309 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6344 | 5-10%                   |                 5 |              0.12688 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6357 | >20%                    |                 5 |              0.12714 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6368 | >20%                    |                 5 |              0.12736 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6384 | >20%                    |                 5 |              0.12768 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6405 | >20%                    |                10 |              0.06405 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6422 | >20%                    |                10 |              0.06422 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6448 | 15-20%                  |                 2 |              0.3224  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6551 | 10-15%                  |                 5 |              0.13102 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6606 | >20%                    |                 2 |              0.3303  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6752 | >20%                    |                 5 |              0.13504 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6777 | >20%                    |                10 |              0.06777 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6874 | >20%                    |                 5 |              0.13748 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6946 |                         |                 5 |              0.13892 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6987 | >20%                    |                10 |              0.06987 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6995 | <5%                     |                10 |              0.06995 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7068 | >20%                    |                 5 |              0.14136 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7184 | >20%                    |                10 |              0.07184 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7234 | >20%                    |                 5 |              0.14468 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.7418 | <5%                     |                10 |              0.07418 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.745  | >20%                    |                10 |              0.0745  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.755  | 10-15%                  |                10 |              0.0755  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7659 | >20%                    |                10 |              0.07659 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7722 | 15-20%                  |                10 |              0.07722 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7737 | <5%                     |                10 |              0.07737 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7849 | >20%                    |                 5 |              0.15698 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7864 | >20%                    |                10 |              0.07864 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7888 | <5%                     |                10 |              0.07888 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7922 | >20%                    |                 2 |              0.3961  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7956 | <5%                     |                 5 |              0.15912 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8027 | >20%                    |                 5 |              0.16054 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8065 | >20%                    |                10 |              0.08065 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8133 | >20%                    |                 5 |              0.16266 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8371 | >20%                    |                10 |              0.08371 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8413 | >20%                    |                 5 |              0.16826 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.846  | <5%                     |                 5 |              0.1692  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8495 | >20%                    |                10 |              0.08495 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8614 | >20%                    |                10 |              0.08614 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8662 | >20%                    |                 5 |              0.17324 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9039 | 10-15%                  |                 2 |              0.45195 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9156 | 5-10%                   |                10 |              0.09156 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9159 | >20%                    |                 2 |              0.45795 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9321 | >20%                    |                 5 |              0.18642 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9335 | <5%                     |                10 |              0.09335 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9421 | >20%                    |                10 |              0.09421 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9505 | >20%                    |                 2 |              0.47525 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9511 | 5-10%                   |                10 |              0.09511 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9623 | >20%                    |                 5 |              0.19246 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9641 | >20%                    |                10 |              0.09641 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9652 | 15-20%                  |                10 |              0.09652 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9717 | 10-15%                  |                10 |              0.09717 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9749 | >20%                    |                10 |              0.09749 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9941 | >20%                    |                10 |              0.09941 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0054 | 5-10%                   |                10 |              0.10054 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0242 | 5-10%                   |                 5 |              0.20484 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0401 | >20%                    |                10 |              0.10401 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.042  | >20%                    |                 2 |              0.521   |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.057  |                         |                10 |              0.1057  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0598 | 15-20%                  |                10 |              0.10598 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0939 | 10-15%                  |                10 |              0.10939 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1209 | >20%                    |                10 |              0.11209 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1859 | 10-15%                  |                 5 |              0.23718 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.242  | <5%                     |                10 |              0.1242  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2608 | >20%                    |                10 |              0.12608 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3268 | 15-20%                  |                10 |              0.13268 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3344 | >20%                    |                 2 |              0.6672  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4096 | 10-15%                  |                 5 |              0.28192 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4178 | >20%                    |                 5 |              0.28356 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4209 | >20%                    |                 2 |              0.71045 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4546 | >20%                    |                 2 |              0.7273  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6132 | >20%                    |                10 |              0.16132 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.781  | >20%                    |                10 |              0.1781  |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.8526 | <5%                     |                 5 |              0.37052 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2402 | 10-15%                  |                10 |              0.22402 |