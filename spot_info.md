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

Data correct as of 2025-04-02 01:46:52.073586, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1262 | 15-20%                  |                 2 |              0.0631  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1277 | 5-10%                   |                 5 |              0.02554 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1409 | 10-15%                  |                 2 |              0.07045 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | 10-15%                  |                 5 |              0.03178 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 5-10%                   |                 5 |              0.039   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2004 | <5%                     |                 2 |              0.1002  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2122 | >20%                    |                 2 |              0.1061  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2208 | 15-20%                  |                 2 |              0.1104  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2324 | 15-20%                  |                 2 |              0.1162  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 10-15%                  |                10 |              0.02395 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 15-20%                  |                10 |              0.02419 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2446 | 15-20%                  |                 2 |              0.1223  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2459 | >20%                    |                 2 |              0.12295 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2499 | >20%                    |                 2 |              0.12495 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2681 | 10-15%                  |                 2 |              0.13405 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.274  | >20%                    |                 2 |              0.137   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2749 | 5-10%                   |                 2 |              0.13745 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.28   | <5%                     |                 2 |              0.14    |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2847 | <5%                     |                 2 |              0.14235 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2907 | 5-10%                   |                 2 |              0.14535 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | <5%                     |                10 |              0.0294  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2945 | 10-15%                  |                10 |              0.02945 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2962 | <5%                     |                 2 |              0.1481  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3009 | 15-20%                  |                 2 |              0.15045 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3021 | 10-15%                  |                 2 |              0.15105 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3074 | 10-15%                  |                 2 |              0.1537  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3135 | >20%                    |                 2 |              0.15675 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3289 | 10-15%                  |                 5 |              0.06578 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3335 | 10-15%                  |                 5 |              0.0667  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.338  | 15-20%                  |                 5 |              0.0676  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3384 | >20%                    |                 2 |              0.1692  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3386 | 15-20%                  |                10 |              0.03386 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.343  | 10-15%                  |                 5 |              0.0686  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3461 | >20%                    |                 2 |              0.17305 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3527 | 5-10%                   |                 5 |              0.07054 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3536 | >20%                    |                 5 |              0.07072 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3617 | >20%                    |                 2 |              0.18085 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3632 | >20%                    |                 2 |              0.1816  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3679 | >20%                    |                 2 |              0.18395 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3707 | >20%                    |                10 |              0.03707 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3762 | <5%                     |                 2 |              0.1881  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3765 | >20%                    |                 5 |              0.0753  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3782 | <5%                     |                 2 |              0.1891  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3826 | >20%                    |                 2 |              0.1913  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3941 | 15-20%                  |                 2 |              0.19705 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3964 | 10-15%                  |                 2 |              0.1982  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3971 | >20%                    |                 5 |              0.07942 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3977 | >20%                    |                10 |              0.03977 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3997 | >20%                    |                 5 |              0.07994 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4046 | >20%                    |                 2 |              0.2023  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.411  | >20%                    |                 2 |              0.2055  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4125 | >20%                    |                 2 |              0.20625 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.413  | 15-20%                  |                 2 |              0.2065  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4145 | >20%                    |                 2 |              0.20725 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4228 | <5%                     |                 2 |              0.2114  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4237 | 10-15%                  |                10 |              0.04237 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4312 | 5-10%                   |                 5 |              0.08624 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4334 | >20%                    |                 2 |              0.2167  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4369 | <5%                     |                 2 |              0.21845 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4378 | <5%                     |                 2 |              0.2189  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4469 | >20%                    |                 5 |              0.08938 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4478 | 10-15%                  |                 5 |              0.08956 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.449  | 10-15%                  |                 5 |              0.0898  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4511 | 10-15%                  |                 2 |              0.22555 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4578 | >20%                    |                 2 |              0.2289  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4624 | >20%                    |                 5 |              0.09248 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4624 | <5%                     |                10 |              0.04624 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.468  | >20%                    |                 5 |              0.0936  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4701 | >20%                    |                 5 |              0.09402 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4703 | <5%                     |                 5 |              0.09406 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4738 | >20%                    |                 5 |              0.09476 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4765 | 5-10%                   |                 5 |              0.0953  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4769 | 5-10%                   |                 5 |              0.09538 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4783 | >20%                    |                 5 |              0.09566 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.482  | 5-10%                   |                 2 |              0.241   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4869 | >20%                    |                 5 |              0.09738 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4883 | >20%                    |                 5 |              0.09766 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4902 | >20%                    |                10 |              0.04902 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4923 | >20%                    |                 5 |              0.09846 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4924 | >20%                    |                 5 |              0.09848 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.501  | >20%                    |                 2 |              0.2505  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.502  | >20%                    |                 2 |              0.251   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5053 | >20%                    |                 5 |              0.10106 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5063 | >20%                    |                 5 |              0.10126 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5098 | 5-10%                   |                 2 |              0.2549  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5145 | 15-20%                  |                 5 |              0.1029  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5244 | 5-10%                   |                 5 |              0.10488 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5289 | >20%                    |                10 |              0.05289 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.54   | >20%                    |                 2 |              0.27    |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5422 | 5-10%                   |                 5 |              0.10844 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.543  | >20%                    |                 2 |              0.2715  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.545  | 15-20%                  |                 2 |              0.2725  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5455 | 10-15%                  |                 5 |              0.1091  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5465 | 5-10%                   |                 5 |              0.1093  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5514 | 15-20%                  |                 2 |              0.2757  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5613 | 15-20%                  |                 5 |              0.11226 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5653 | <5%                     |                 5 |              0.11306 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5716 | >20%                    |                 5 |              0.11432 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5737 | >20%                    |                 5 |              0.11474 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5747 | >20%                    |                 2 |              0.28735 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5815 | 5-10%                   |                10 |              0.05815 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5848 | 15-20%                  |                 5 |              0.11696 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5925 | >20%                    |                 2 |              0.29625 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5943 | <5%                     |                 5 |              0.11886 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5965 | >20%                    |                 2 |              0.29825 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5965 | <5%                     |                10 |              0.05965 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5989 | >20%                    |                 5 |              0.11978 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5994 | >20%                    |                 5 |              0.11988 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.609  | <5%                     |                 5 |              0.1218  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6221 | 10-15%                  |                 5 |              0.12442 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6234 | 10-15%                  |                10 |              0.06234 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6245 | >20%                    |                10 |              0.06245 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6264 | <5%                     |                10 |              0.06264 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6292 | >20%                    |                10 |              0.06292 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6483 | >20%                    |                 2 |              0.32415 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6493 | >20%                    |                10 |              0.06493 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6541 | <5%                     |                 5 |              0.13082 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6545 | >20%                    |                 5 |              0.1309  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6629 | 10-15%                  |                 5 |              0.13258 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6699 | >20%                    |                10 |              0.06699 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6718 | 10-15%                  |                 2 |              0.3359  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.674  | >20%                    |                10 |              0.0674  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6821 | >20%                    |                 5 |              0.13642 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6873 | 10-15%                  |                 5 |              0.13746 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7214 | >20%                    |                 5 |              0.14428 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7247 | >20%                    |                10 |              0.07247 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7309 | <5%                     |                10 |              0.07309 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.7365 | 10-15%                  |                10 |              0.07365 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7437 | <5%                     |                 2 |              0.37185 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7557 | >20%                    |                10 |              0.07557 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7558 | 15-20%                  |                 5 |              0.15116 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7577 | >20%                    |                 2 |              0.37885 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7697 | 15-20%                  |                 5 |              0.15394 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7707 | <5%                     |                10 |              0.07707 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7734 | >20%                    |                 2 |              0.3867  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7756 | <5%                     |                 5 |              0.15512 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7784 | <5%                     |                10 |              0.07784 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7876 | >20%                    |                10 |              0.07876 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.789  | >20%                    |                 5 |              0.1578  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7901 | 10-15%                  |                10 |              0.07901 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7903 | 5-10%                   |                10 |              0.07903 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8188 | 5-10%                   |                10 |              0.08188 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.819  | <5%                     |                10 |              0.0819  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8316 | <5%                     |                10 |              0.08316 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.832  | 10-15%                  |                10 |              0.0832  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8394 | >20%                    |                10 |              0.08394 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8482 | <5%                     |                10 |              0.08482 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8489 | >20%                    |                10 |              0.08489 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8498 | >20%                    |                10 |              0.08498 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8589 | 15-20%                  |                10 |              0.08589 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8611 | 15-20%                  |                10 |              0.08611 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8665 | >20%                    |                10 |              0.08665 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8705 | 15-20%                  |                 5 |              0.1741  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8869 | <5%                     |                10 |              0.08869 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9011 | 10-15%                  |                10 |              0.09011 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9086 | >20%                    |                 2 |              0.4543  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9417 | 10-15%                  |                 2 |              0.47085 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9456 | >20%                    |                10 |              0.09456 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9584 | >20%                    |                 5 |              0.19168 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9785 | 5-10%                   |                10 |              0.09785 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9911 | 10-15%                  |                10 |              0.09911 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0004 | 15-20%                  |                10 |              0.10004 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0236 | >20%                    |                 5 |              0.20472 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0571 | >20%                    |                10 |              0.10571 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1043 | <5%                     |                10 |              0.11043 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1316 | 15-20%                  |                10 |              0.11316 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1686 | >20%                    |                 5 |              0.23372 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1743 | 15-20%                  |                10 |              0.11743 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1789 | >20%                    |                10 |              0.11789 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2009 | <5%                     |                10 |              0.12009 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2136 | <5%                     |                 5 |              0.24272 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2454 | >20%                    |                 2 |              0.6227  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2744 | 15-20%                  |                10 |              0.12744 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3431 | 5-10%                   |                 2 |              0.67155 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3938 | >20%                    |                10 |              0.13938 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4114 | >20%                    |                 5 |              0.28228 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5861 | 15-20%                  |                10 |              0.15861 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6071 | >20%                    |                10 |              0.16071 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6455 | >20%                    |                10 |              0.16455 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8917 | <5%                     |                10 |              0.18917 |