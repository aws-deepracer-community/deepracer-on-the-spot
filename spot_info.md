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

Data correct as of 2025-03-05 01:41:53.553836, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.113  | >20%                    |                 2 |              0.0565  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1397 | 5-10%                   |                 5 |              0.02794 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1425 | 10-15%                  |                 2 |              0.07125 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1811 | >20%                    |                 5 |              0.03622 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1935 | <5%                     |                 5 |              0.0387  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 10-15%                  |                 5 |              0.039   |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1958 | >20%                    |                 5 |              0.03916 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2027 | <5%                     |                 2 |              0.10135 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2144 | 5-10%                   |                 2 |              0.1072  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2318 | >20%                    |                 2 |              0.1159  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2322 | >20%                    |                 2 |              0.1161  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2328 | <5%                     |                 2 |              0.1164  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2334 | 5-10%                   |                10 |              0.02334 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2339 | 15-20%                  |                 5 |              0.04678 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.235  | >20%                    |                 2 |              0.1175  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2365 | >20%                    |                 2 |              0.11825 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 15-20%                  |                10 |              0.02395 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2544 | 15-20%                  |                 2 |              0.1272  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2554 | >20%                    |                 2 |              0.1277  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2557 | 5-10%                   |                 2 |              0.12785 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.256  | <5%                     |                 5 |              0.0512  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2644 | 10-15%                  |                10 |              0.02644 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.273  | 15-20%                  |                 2 |              0.1365  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2743 | <5%                     |                 2 |              0.13715 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.297  | 5-10%                   |                 2 |              0.1485  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2996 | 5-10%                   |                 2 |              0.1498  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3037 | 10-15%                  |                 2 |              0.15185 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.308  | <5%                     |                 2 |              0.154   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3113 | <5%                     |                 2 |              0.15565 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3185 | 5-10%                   |                 5 |              0.0637  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3191 | 15-20%                  |                 2 |              0.15955 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3231 | 10-15%                  |                 2 |              0.16155 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.329  |                         |                 5 |              0.0658  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.3406 |                         |                 2 |              0.1703  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.341  | >20%                    |                 2 |              0.1705  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.346  | <5%                     |                10 |              0.0346  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3467 | <5%                     |                 2 |              0.17335 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3478 | 15-20%                  |                10 |              0.03478 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3481 | 15-20%                  |                 5 |              0.06962 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3484 | 5-10%                   |                10 |              0.03484 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3524 | 10-15%                  |                 5 |              0.07048 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.359  | >20%                    |                 2 |              0.1795  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3633 | 15-20%                  |                 2 |              0.18165 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.366  | <5%                     |                 5 |              0.0732  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3663 | <5%                     |                 5 |              0.07326 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3692 | 5-10%                   |                 5 |              0.07384 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3715 | >20%                    |                 2 |              0.18575 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3719 | >20%                    |                10 |              0.03719 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3732 | <5%                     |                 2 |              0.1866  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3815 | >20%                    |                 5 |              0.0763  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3822 | 15-20%                  |                 2 |              0.1911  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3841 | >20%                    |                 2 |              0.19205 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3895 | >20%                    |                 2 |              0.19475 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.395  | 10-15%                  |                10 |              0.0395  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3981 | <5%                     |                 5 |              0.07962 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.402  | >20%                    |                 2 |              0.201   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4041 | <5%                     |                 2 |              0.20205 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4099 | 5-10%                   |                 2 |              0.20495 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4162 | 5-10%                   |                 2 |              0.2081  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4223 | 10-15%                  |                 2 |              0.21115 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4308 | 5-10%                   |                 2 |              0.2154  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4319 | 5-10%                   |                 2 |              0.21595 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4396 | >20%                    |                 2 |              0.2198  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4418 | >20%                    |                 2 |              0.2209  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4422 | >20%                    |                 5 |              0.08844 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4423 | >20%                    |                 5 |              0.08846 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4424 | <5%                     |                 2 |              0.2212  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4466 | >20%                    |                 2 |              0.2233  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4532 | >20%                    |                 2 |              0.2266  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4602 | 15-20%                  |                10 |              0.04602 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4653 | 10-15%                  |                 5 |              0.09306 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4659 | >20%                    |                 5 |              0.09318 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4695 | >20%                    |                 5 |              0.0939  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4794 | 5-10%                   |                 5 |              0.09588 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4811 | 15-20%                  |                 5 |              0.09622 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4865 | 15-20%                  |                10 |              0.04865 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4894 | <5%                     |                 5 |              0.09788 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4914 | <5%                     |                10 |              0.04914 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5005 | <5%                     |                 5 |              0.1001  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5014 | <5%                     |                 5 |              0.10028 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.5029 |                         |                10 |              0.05029 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5087 | >20%                    |                 5 |              0.10174 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5128 | >20%                    |                 5 |              0.10256 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5134 | >20%                    |                 2 |              0.2567  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5165 | >20%                    |                 2 |              0.25825 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5215 | >20%                    |                 5 |              0.1043  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5241 | 5-10%                   |                 5 |              0.10482 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5263 | <5%                     |                 2 |              0.26315 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5373 | >20%                    |                 2 |              0.26865 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5383 | >20%                    |                 2 |              0.26915 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5507 | 5-10%                   |                10 |              0.05507 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5583 | 10-15%                  |                 5 |              0.11166 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5601 | 15-20%                  |                 2 |              0.28005 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5623 | 5-10%                   |                 5 |              0.11246 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5702 | 10-15%                  |                 5 |              0.11404 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5704 | 5-10%                   |                 5 |              0.11408 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5725 | >20%                    |                 2 |              0.28625 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5725 | 5-10%                   |                 5 |              0.1145  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5727 | 10-15%                  |                 5 |              0.11454 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5744 | 10-15%                  |                 5 |              0.11488 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5755 | >20%                    |                 5 |              0.1151  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5847 | 5-10%                   |                 5 |              0.11694 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5856 | 5-10%                   |                 2 |              0.2928  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6083 | <5%                     |                 5 |              0.12166 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6112 | 15-20%                  |                 5 |              0.12224 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.6264 | >20%                    |                 2 |              0.3132  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6273 | 10-15%                  |                10 |              0.06273 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6275 | >20%                    |                 5 |              0.1255  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6494 | 10-15%                  |                 5 |              0.12988 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6501 | >20%                    |                 2 |              0.32505 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.659  | <5%                     |                10 |              0.0659  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6631 | 5-10%                   |                 5 |              0.13262 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6731 | >20%                    |                10 |              0.06731 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6952 | >20%                    |                 5 |              0.13904 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6968 | >20%                    |                 5 |              0.13936 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7023 | >20%                    |                10 |              0.07023 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7269 | 5-10%                   |                 5 |              0.14538 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7278 | >20%                    |                 2 |              0.3639  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7314 | >20%                    |                 5 |              0.14628 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7314 | 15-20%                  |                 2 |              0.3657  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7369 | >20%                    |                10 |              0.07369 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7451 | 5-10%                   |                 2 |              0.37255 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7454 | >20%                    |                10 |              0.07454 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7498 | >20%                    |                10 |              0.07498 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7577 | <5%                     |                 5 |              0.15154 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.762  | >20%                    |                10 |              0.0762  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7621 | >20%                    |                 5 |              0.15242 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7714 | >20%                    |                 5 |              0.15428 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7721 | 5-10%                   |                 5 |              0.15442 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7764 | 15-20%                  |                10 |              0.07764 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7829 | >20%                    |                10 |              0.07829 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7867 | >20%                    |                10 |              0.07867 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8016 | >20%                    |                10 |              0.08016 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8042 | 10-15%                  |                10 |              0.08042 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8048 | 5-10%                   |                10 |              0.08048 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8149 | >20%                    |                 5 |              0.16298 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8181 | <5%                     |                10 |              0.08181 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8206 | <5%                     |                10 |              0.08206 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8221 | <5%                     |                10 |              0.08221 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.8452 | >20%                    |                 5 |              0.16904 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8599 | 15-20%                  |                10 |              0.08599 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8771 | 10-15%                  |                10 |              0.08771 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8779 | <5%                     |                10 |              0.08779 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8788 | >20%                    |                 5 |              0.17576 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8827 | 5-10%                   |                10 |              0.08827 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.887  | <5%                     |                10 |              0.0887  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9338 | >20%                    |                10 |              0.09338 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.936  | >20%                    |                10 |              0.0936  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9503 | 10-15%                  |                10 |              0.09503 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9647 | 5-10%                   |                10 |              0.09647 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.981  | >20%                    |                10 |              0.0981  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.992  | 5-10%                   |                10 |              0.0992  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0024 | 5-10%                   |                10 |              0.10024 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0145 | 15-20%                  |                10 |              0.10145 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0229 | 15-20%                  |                10 |              0.10229 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.037  | >20%                    |                10 |              0.1037  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0461 | 10-15%                  |                10 |              0.10461 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0917 | <5%                     |                10 |              0.10917 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0975 | 10-15%                  |                 2 |              0.54875 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1006 | >20%                    |                 2 |              0.5503  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1011 | 10-15%                  |                10 |              0.11011 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1534 | >20%                    |                10 |              0.11534 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1675 | >20%                    |                10 |              0.11675 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1696 | 15-20%                  |                10 |              0.11696 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.2106 | >20%                    |                 2 |              0.6053  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2843 | 5-10%                   |                 5 |              0.25686 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3149 | >20%                    |                 5 |              0.26298 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3294 | >20%                    |                10 |              0.13294 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3343 | 10-15%                  |                 5 |              0.26686 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4037 | >20%                    |                10 |              0.14037 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5739 | 15-20%                  |                 5 |              0.31478 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5926 | >20%                    |                10 |              0.15926 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6198 | >20%                    |                 2 |              0.8099  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.6978 | >20%                    |                 5 |              0.33956 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.803  | >20%                    |                10 |              0.1803  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.843  | >20%                    |                10 |              0.1843  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1213 | 5-10%                   |                10 |              0.21213 |