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

Data correct as of 2025-06-03 01:55:51.403468, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1352 | <5%                     |                 2 |              0.0676  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1931 | >20%                    |                 2 |              0.09655 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 15-20%                  |                 5 |              0.039   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2087 | 5-10%                   |                 5 |              0.04174 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2132 | >20%                    |                 2 |              0.1066  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2254 | >20%                    |                 5 |              0.04508 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2291 | >20%                    |                 2 |              0.11455 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2307 | 5-10%                   |                 2 |              0.11535 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | >20%                    |                10 |              0.02395 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 10-15%                  |                10 |              0.02419 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2423 | >20%                    |                 2 |              0.12115 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2424 | <5%                     |                 2 |              0.1212  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2485 | 10-15%                  |                 2 |              0.12425 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.25   | >20%                    |                10 |              0.025   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2611 | 15-20%                  |                 2 |              0.13055 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2632 | 10-15%                  |                 2 |              0.1316  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2729 | <5%                     |                 2 |              0.13645 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2756 | >20%                    |                 2 |              0.1378  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2774 | >20%                    |                 2 |              0.1387  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2809 | 15-20%                  |                 2 |              0.14045 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2824 | >20%                    |                 2 |              0.1412  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2912 | 15-20%                  |                 5 |              0.05824 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2939 | 15-20%                  |                 2 |              0.14695 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | <5%                     |                10 |              0.0294  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2979 | >20%                    |                 2 |              0.14895 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3035 | 15-20%                  |                 2 |              0.15175 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3177 | 15-20%                  |                 2 |              0.15885 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3216 | >20%                    |                 2 |              0.1608  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3387 | >20%                    |                 5 |              0.06774 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3406 | 15-20%                  |                 2 |              0.1703  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3411 | >20%                    |                 5 |              0.06822 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3481 | >20%                    |                 2 |              0.17405 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3535 | >20%                    |                 5 |              0.0707  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3558 | >20%                    |                 2 |              0.1779  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3596 | >20%                    |                10 |              0.03596 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3701 | 10-15%                  |                 5 |              0.07402 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3711 | >20%                    |                10 |              0.03711 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3713 | 15-20%                  |                 2 |              0.18565 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.373  | >20%                    |                 5 |              0.0746  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3735 | 15-20%                  |                 2 |              0.18675 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3736 | 5-10%                   |                 2 |              0.1868  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3784 | 15-20%                  |                 2 |              0.1892  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3791 | >20%                    |                 5 |              0.07582 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3892 | >20%                    |                10 |              0.03892 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3934 | 5-10%                   |                 2 |              0.1967  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3953 | >20%                    |                 5 |              0.07906 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.396  | >20%                    |                 2 |              0.198   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3969 | >20%                    |                 2 |              0.19845 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3995 | 10-15%                  |                 5 |              0.0799  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4081 | <5%                     |                 5 |              0.08162 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4089 | >20%                    |                 2 |              0.20445 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4099 | >20%                    |                 5 |              0.08198 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4106 | <5%                     |                 2 |              0.2053  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4149 | >20%                    |                 2 |              0.20745 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4231 | 10-15%                  |                 2 |              0.21155 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4274 | 15-20%                  |                 5 |              0.08548 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4313 | <5%                     |                 2 |              0.21565 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4404 | 15-20%                  |                 5 |              0.08808 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4442 | 10-15%                  |                 5 |              0.08884 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4451 | >20%                    |                 2 |              0.22255 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4463 | >20%                    |                 2 |              0.22315 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4474 | >20%                    |                10 |              0.04474 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4504 | >20%                    |                 5 |              0.09008 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4577 | <5%                     |                 5 |              0.09154 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4599 | >20%                    |                 5 |              0.09198 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4704 | 15-20%                  |                10 |              0.04704 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4705 | >20%                    |                 2 |              0.23525 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4707 | 15-20%                  |                 5 |              0.09414 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.472  | >20%                    |                 2 |              0.236   |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4734 | 5-10%                   |                 5 |              0.09468 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4823 | 15-20%                  |                 5 |              0.09646 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4859 | >20%                    |                 5 |              0.09718 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4877 | >20%                    |                 5 |              0.09754 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4905 | >20%                    |                10 |              0.04905 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.491  | 5-10%                   |                 5 |              0.0982  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4914 | 15-20%                  |                 5 |              0.09828 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4919 | <5%                     |                 5 |              0.09838 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4922 | >20%                    |                 2 |              0.2461  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4933 | >20%                    |                 2 |              0.24665 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4943 | >20%                    |                 2 |              0.24715 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4957 | >20%                    |                 5 |              0.09914 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4967 | 15-20%                  |                10 |              0.04967 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4998 | 10-15%                  |                 5 |              0.09996 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5016 | 15-20%                  |                 2 |              0.2508  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5062 | >20%                    |                 2 |              0.2531  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5116 | <5%                     |                 5 |              0.10232 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5125 | >20%                    |                10 |              0.05125 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5267 | >20%                    |                 2 |              0.26335 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5327 | >20%                    |                 5 |              0.10654 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.533  | >20%                    |                 5 |              0.1066  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5464 | 10-15%                  |                10 |              0.05464 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5572 | >20%                    |                 5 |              0.11144 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5628 | 5-10%                   |                 5 |              0.11256 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5656 | 10-15%                  |                 2 |              0.2828  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5861 | >20%                    |                 5 |              0.11722 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5875 | >20%                    |                 5 |              0.1175  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5989 | 5-10%                   |                 2 |              0.29945 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.608  | 5-10%                   |                 2 |              0.304   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.61   | >20%                    |                 2 |              0.305   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6106 | >20%                    |                 5 |              0.12212 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6134 | 15-20%                  |                10 |              0.06134 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6166 | 10-15%                  |                 5 |              0.12332 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6186 | <5%                     |                10 |              0.06186 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6302 | >20%                    |                 2 |              0.3151  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.631  | >20%                    |                 5 |              0.1262  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6397 | 5-10%                   |                10 |              0.06397 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6436 | <5%                     |                 5 |              0.12872 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6546 | >20%                    |                 5 |              0.13092 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6599 | >20%                    |                10 |              0.06599 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6608 | >20%                    |                 5 |              0.13216 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6681 | >20%                    |                 2 |              0.33405 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6696 | >20%                    |                 2 |              0.3348  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6728 | >20%                    |                 5 |              0.13456 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6735 | 10-15%                  |                10 |              0.06735 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6744 | 10-15%                  |                 2 |              0.3372  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.678  | >20%                    |                 2 |              0.339   |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6807 | 15-20%                  |                 5 |              0.13614 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6815 | <5%                     |                10 |              0.06815 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6828 | >20%                    |                10 |              0.06828 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6881 | 10-15%                  |                10 |              0.06881 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6908 | >20%                    |                10 |              0.06908 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7058 | >20%                    |                10 |              0.07058 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.709  | >20%                    |                10 |              0.0709  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7116 | 10-15%                  |                 5 |              0.14232 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7197 | <5%                     |                 5 |              0.14394 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7385 | <5%                     |                10 |              0.07385 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7437 | >20%                    |                10 |              0.07437 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.75   | >20%                    |                10 |              0.075   |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.757  | >20%                    |                10 |              0.0757  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7622 | 10-15%                  |                 5 |              0.15244 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7636 | >20%                    |                 5 |              0.15272 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7804 | >20%                    |                 5 |              0.15608 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7806 | 15-20%                  |                10 |              0.07806 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7827 | >20%                    |                10 |              0.07827 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7906 | >20%                    |                 5 |              0.15812 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8078 | 10-15%                  |                 5 |              0.16156 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.811  | 10-15%                  |                10 |              0.0811  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8182 | >20%                    |                10 |              0.08182 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8287 | 15-20%                  |                10 |              0.08287 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.83   | >20%                    |                10 |              0.083   |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8439 | >20%                    |                10 |              0.08439 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8744 | >20%                    |                10 |              0.08744 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8766 | >20%                    |                10 |              0.08766 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8902 | 5-10%                   |                10 |              0.08902 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9042 | <5%                     |                10 |              0.09042 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9057 | >20%                    |                10 |              0.09057 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9266 | >20%                    |                10 |              0.09266 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9296 | 10-15%                  |                 5 |              0.18592 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9365 | >20%                    |                 5 |              0.1873  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9455 | >20%                    |                10 |              0.09455 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9559 | 5-10%                   |                 2 |              0.47795 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9828 | >20%                    |                10 |              0.09828 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9843 | >20%                    |                 2 |              0.49215 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9899 | >20%                    |                10 |              0.09899 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0105 | <5%                     |                10 |              0.10105 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0258 | >20%                    |                 2 |              0.5129  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0261 | >20%                    |                 5 |              0.20522 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0359 | >20%                    |                 2 |              0.51795 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0453 | 15-20%                  |                10 |              0.10453 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0504 | >20%                    |                 5 |              0.21008 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0589 | 15-20%                  |                10 |              0.10589 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0612 | 10-15%                  |                 5 |              0.21224 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0779 | <5%                     |                10 |              0.10779 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0879 | <5%                     |                 2 |              0.54395 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1635 | 15-20%                  |                10 |              0.11635 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1984 | >20%                    |                10 |              0.11984 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2027 | 10-15%                  |                10 |              0.12027 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2625 | 10-15%                  |                10 |              0.12625 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2885 | >20%                    |                10 |              0.12885 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3054 | >20%                    |                 2 |              0.6527  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3619 | 15-20%                  |                10 |              0.13619 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3727 | >20%                    |                 5 |              0.27454 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3827 | 5-10%                   |                10 |              0.13827 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3884 | 5-10%                   |                10 |              0.13884 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4375 | <5%                     |                 5 |              0.2875  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4484 | >20%                    |                10 |              0.14484 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4802 | >20%                    |                10 |              0.14802 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0936 | <5%                     |                10 |              0.20936 |