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

Data correct as of 2026-08-31 04:41:36.202105, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1469 | >20%                    |                 2 |              0.07345 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1817 | 15-20%                  |                 2 |              0.09085 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2011 | 15-20%                  |                 2 |              0.10055 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2013 | >20%                    |                 2 |              0.10065 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2102 | >20%                    |                 2 |              0.1051  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2254 | 10-15%                  |                 2 |              0.1127  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2275 | >20%                    |                 2 |              0.11375 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.237  | >20%                    |                 2 |              0.1185  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2403 | >20%                    |                 2 |              0.12015 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2413 | >20%                    |                 2 |              0.12065 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2477 | 5-10%                   |                10 |              0.02477 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2527 | >20%                    |                 5 |              0.05054 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2682 | 15-20%                  |                 2 |              0.1341  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2704 | >20%                    |                 2 |              0.1352  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2776 | 10-15%                  |                 2 |              0.1388  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2928 | 15-20%                  |                 5 |              0.05856 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3064 | >20%                    |                 2 |              0.1532  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3074 | 5-10%                   |                10 |              0.03074 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3121 | 15-20%                  |                 5 |              0.06242 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3179 | >20%                    |                 2 |              0.15895 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3273 | >20%                    |                 5 |              0.06546 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.332  | <5%                     |                 2 |              0.166   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3346 | >20%                    |                 5 |              0.06692 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.336  | >20%                    |                 2 |              0.168   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3381 | >20%                    |                 5 |              0.06762 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3421 | >20%                    |                 2 |              0.17105 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3452 | 10-15%                  |                 2 |              0.1726  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3572 | >20%                    |                 5 |              0.07144 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3626 | >20%                    |                 5 |              0.07252 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3714 | >20%                    |                 2 |              0.1857  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3746 | >20%                    |                 5 |              0.07492 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3757 | >20%                    |                 5 |              0.07514 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3798 | <5%                     |                 2 |              0.1899  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3805 | >20%                    |                10 |              0.03805 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3829 | >20%                    |                 2 |              0.19145 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3853 | >20%                    |                10 |              0.03853 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3978 | 15-20%                  |                 2 |              0.1989  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4005 | >20%                    |                 2 |              0.20025 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4011 | >20%                    |                10 |              0.04011 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4138 | 10-15%                  |                 2 |              0.2069  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.426  | >20%                    |                 2 |              0.213   |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4329 | >20%                    |                10 |              0.04329 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4364 | >20%                    |                 2 |              0.2182  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4403 | >20%                    |                 5 |              0.08806 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4405 | 15-20%                  |                 5 |              0.0881  |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4416 |                         |                 2 |              0.2208  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4429 | >20%                    |                 5 |              0.08858 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4462 | >20%                    |                 2 |              0.2231  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4463 | >20%                    |                 5 |              0.08926 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4542 | >20%                    |                10 |              0.04542 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.458  | <5%                     |                 5 |              0.0916  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4674 | >20%                    |                 5 |              0.09348 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4714 | 15-20%                  |                 2 |              0.2357  |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.485  |                         |                 5 |              0.097   |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4887 | >20%                    |                10 |              0.04887 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4976 | <5%                     |                 2 |              0.2488  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.502  | >20%                    |                 5 |              0.1004  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5044 | >20%                    |                 5 |              0.10088 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5108 | 15-20%                  |                10 |              0.05108 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5145 | >20%                    |                 5 |              0.1029  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5222 | 5-10%                   |                 2 |              0.2611  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5236 | >20%                    |                 5 |              0.10472 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5286 | >20%                    |                 5 |              0.10572 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5411 | 10-15%                  |                10 |              0.05411 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5442 | >20%                    |                10 |              0.05442 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.548  | >20%                    |                 2 |              0.274   |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5509 | >20%                    |                10 |              0.05509 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5544 | >20%                    |                 5 |              0.11088 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5552 | >20%                    |                 2 |              0.2776  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5593 | >20%                    |                10 |              0.05593 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5676 | >20%                    |                 5 |              0.11352 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5741 | >20%                    |                 5 |              0.11482 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5752 | >20%                    |                 2 |              0.2876  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5855 | >20%                    |                 5 |              0.1171  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5875 | >20%                    |                 5 |              0.1175  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6087 | 10-15%                  |                 5 |              0.12174 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6099 | >20%                    |                 5 |              0.12198 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6224 | >20%                    |                 5 |              0.12448 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6322 | 5-10%                   |                 5 |              0.12644 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6396 | >20%                    |                 2 |              0.3198  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.662  | 5-10%                   |                10 |              0.0662  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6699 | 15-20%                  |                10 |              0.06699 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6778 | >20%                    |                10 |              0.06778 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6886 | 5-10%                   |                10 |              0.06886 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6971 | >20%                    |                10 |              0.06971 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6987 | >20%                    |                 2 |              0.34935 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7056 | >20%                    |                 2 |              0.3528  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.7075 | >20%                    |                 2 |              0.35375 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7078 | >20%                    |                 5 |              0.14156 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7125 | >20%                    |                 2 |              0.35625 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7172 | >20%                    |                 5 |              0.14344 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7205 | >20%                    |                10 |              0.07205 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7418 | >20%                    |                 5 |              0.14836 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7494 | 15-20%                  |                10 |              0.07494 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7571 | 15-20%                  |                 2 |              0.37855 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7851 | >20%                    |                10 |              0.07851 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8005 | >20%                    |                10 |              0.08005 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8017 | >20%                    |                 5 |              0.16034 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.8122 | >20%                    |                 2 |              0.4061  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8166 | 5-10%                   |                10 |              0.08166 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.819  | >20%                    |                10 |              0.0819  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8222 | <5%                     |                10 |              0.08222 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8269 | >20%                    |                 5 |              0.16538 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8279 | 15-20%                  |                10 |              0.08279 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8372 | >20%                    |                10 |              0.08372 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.842  | 10-15%                  |                 2 |              0.421   |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8475 | >20%                    |                10 |              0.08475 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8495 | >20%                    |                 5 |              0.1699  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8579 | >20%                    |                10 |              0.08579 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8808 | 5-10%                   |                 2 |              0.4404  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9052 | >20%                    |                 2 |              0.4526  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9304 |                         |                 2 |              0.4652  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9374 | 10-15%                  |                 2 |              0.4687  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9382 | >20%                    |                10 |              0.09382 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9406 | >20%                    |                10 |              0.09406 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9455 | >20%                    |                10 |              0.09455 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9527 | 5-10%                   |                 5 |              0.19054 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9555 | >20%                    |                10 |              0.09555 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9647 | >20%                    |                 5 |              0.19294 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9881 | 15-20%                  |                10 |              0.09881 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9976 | >20%                    |                10 |              0.09976 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0128 | 10-15%                  |                 2 |              0.5064  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0129 | >20%                    |                10 |              0.10129 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0291 | >20%                    |                 5 |              0.20582 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0344 |                         |                10 |              0.10344 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0436 | 5-10%                   |                10 |              0.10436 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0981 | >20%                    |                10 |              0.10981 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.1217 | >20%                    |                 5 |              0.22434 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1245 | >20%                    |                10 |              0.11245 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.131  | >20%                    |                 5 |              0.2262  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1315 | >20%                    |                 5 |              0.2263  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1326 | >20%                    |                 5 |              0.22652 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.1342 | >20%                    |                 5 |              0.22684 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1429 |                         |                 2 |              0.57145 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1432 | 15-20%                  |                10 |              0.11432 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1833 | >20%                    |                 2 |              0.59165 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2276 | 15-20%                  |                10 |              0.12276 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2433 |                         |                 5 |              0.24866 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2497 | >20%                    |                10 |              0.12497 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2631 |                         |                 5 |              0.25262 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.2761 | >20%                    |                 5 |              0.25522 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2832 | >20%                    |                 5 |              0.25664 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4346 | 10-15%                  |                10 |              0.14346 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.461  | >20%                    |                10 |              0.1461  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.4991 |                         |                10 |              0.14991 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.58   |                         |                10 |              0.158   |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.5801 | >20%                    |                10 |              0.15801 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5809 | >20%                    |                10 |              0.15809 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5869 | 15-20%                  |                 5 |              0.31738 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.59   | 15-20%                  |                10 |              0.159   |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.9027 | 5-10%                   |                 2 |              0.95135 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9172 | 5-10%                   |                 2 |              0.9586  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9989 | >20%                    |                10 |              0.19989 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      2.1    | >20%                    |                10 |              0.21    |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.3104 | >20%                    |                 5 |              0.46208 |