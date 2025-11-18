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

Data correct as of 2025-11-18 01:52:36.066685, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1483 | 15-20%                  |                 2 |              0.07415 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1598 | >20%                    |                 2 |              0.0799  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1831 | <5%                     |                 2 |              0.09155 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2022 | >20%                    |                 2 |              0.1011  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2097 | 10-15%                  |                 2 |              0.10485 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2105 | 5-10%                   |                 5 |              0.0421  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2214 | <5%                     |                 2 |              0.1107  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2357 | >20%                    |                 2 |              0.11785 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2395 | 15-20%                  |                 2 |              0.11975 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2412 | >20%                    |                 5 |              0.04824 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2414 | >20%                    |                 2 |              0.1207  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2459 | >20%                    |                 2 |              0.12295 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2486 | >20%                    |                 2 |              0.1243  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2655 | <5%                     |                 2 |              0.13275 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2664 | >20%                    |                 2 |              0.1332  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2721 | >20%                    |                 2 |              0.13605 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2743 | >20%                    |                 2 |              0.13715 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2797 | 10-15%                  |                 5 |              0.05594 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2803 | >20%                    |                 5 |              0.05606 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2829 | 10-15%                  |                 2 |              0.14145 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2853 | 5-10%                   |                 2 |              0.14265 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2909 | >20%                    |                 5 |              0.05818 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3002 | 10-15%                  |                10 |              0.03002 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3087 | <5%                     |                 5 |              0.06174 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.32   | >20%                    |                 5 |              0.064   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3321 | >20%                    |                 2 |              0.16605 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3339 | <5%                     |                 2 |              0.16695 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3452 | >20%                    |                 5 |              0.06904 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3457 | >20%                    |                 2 |              0.17285 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3484 | <5%                     |                10 |              0.03484 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3484 | 5-10%                   |                 2 |              0.1742  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3507 | 10-15%                  |                 2 |              0.17535 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3538 | 10-15%                  |                 2 |              0.1769  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3541 | >20%                    |                 2 |              0.17705 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.363  | >20%                    |                10 |              0.0363  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3641 | >20%                    |                10 |              0.03641 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3665 | >20%                    |                10 |              0.03665 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3665 | <5%                     |                 2 |              0.18325 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3708 | >20%                    |                 2 |              0.1854  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3786 | 15-20%                  |                 2 |              0.1893  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.38   | 15-20%                  |                 5 |              0.076   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3939 | >20%                    |                 2 |              0.19695 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3977 | 15-20%                  |                 2 |              0.19885 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3981 | >20%                    |                 5 |              0.07962 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3981 | 5-10%                   |                10 |              0.03981 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3998 | >20%                    |                 2 |              0.1999  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4005 | >20%                    |                 2 |              0.20025 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4023 | 10-15%                  |                 5 |              0.08046 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4023 | >20%                    |                 2 |              0.20115 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4053 | >20%                    |                 2 |              0.20265 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4147 | >20%                    |                10 |              0.04147 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4148 | >20%                    |                 5 |              0.08296 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4155 | >20%                    |                 5 |              0.0831  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4158 | <5%                     |                10 |              0.04158 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4202 | >20%                    |                 5 |              0.08404 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4222 | >20%                    |                 5 |              0.08444 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4233 | 15-20%                  |                 2 |              0.21165 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4244 | <5%                     |                 2 |              0.2122  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.425  | 15-20%                  |                10 |              0.0425  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4253 | >20%                    |                 5 |              0.08506 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4267 | 5-10%                   |                 2 |              0.21335 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.43   | 15-20%                  |                 5 |              0.086   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4302 | 15-20%                  |                 5 |              0.08604 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4312 | 15-20%                  |                 5 |              0.08624 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4325 | >20%                    |                 2 |              0.21625 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4375 | 10-15%                  |                10 |              0.04375 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4378 | 10-15%                  |                 5 |              0.08756 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4415 | >20%                    |                 2 |              0.22075 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4436 | >20%                    |                 2 |              0.2218  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4503 | >20%                    |                 5 |              0.09006 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4541 | 15-20%                  |                 5 |              0.09082 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4565 | >20%                    |                 2 |              0.22825 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4636 | >20%                    |                 5 |              0.09272 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4665 | >20%                    |                 2 |              0.23325 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4701 | 10-15%                  |                10 |              0.04701 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4722 | >20%                    |                 2 |              0.2361  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4724 | >20%                    |                 5 |              0.09448 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4731 | >20%                    |                 5 |              0.09462 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4739 | >20%                    |                 5 |              0.09478 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4759 | >20%                    |                 2 |              0.23795 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4781 | 10-15%                  |                 2 |              0.23905 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4813 | >20%                    |                 5 |              0.09626 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4938 | >20%                    |                 5 |              0.09876 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4962 | 10-15%                  |                 2 |              0.2481  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4981 | >20%                    |                 2 |              0.24905 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5009 | 5-10%                   |                10 |              0.05009 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5085 | >20%                    |                 2 |              0.25425 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5162 | >20%                    |                10 |              0.05162 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5196 | >20%                    |                10 |              0.05196 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5199 | 15-20%                  |                 5 |              0.10398 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.522  | 10-15%                  |                 2 |              0.261   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5229 | 10-15%                  |                 5 |              0.10458 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5275 | >20%                    |                 5 |              0.1055  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5335 | 15-20%                  |                 5 |              0.1067  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5537 | >20%                    |                 5 |              0.11074 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.556  | >20%                    |                 5 |              0.1112  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5611 | 10-15%                  |                 5 |              0.11222 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5717 | >20%                    |                 5 |              0.11434 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.575  | 15-20%                  |                 5 |              0.115   |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5759 | 10-15%                  |                 5 |              0.11518 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.58   | >20%                    |                 5 |              0.116   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5877 | >20%                    |                 2 |              0.29385 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6064 | 10-15%                  |                 5 |              0.12128 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6075 | 10-15%                  |                10 |              0.06075 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6134 | 10-15%                  |                 5 |              0.12268 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6151 | 5-10%                   |                 5 |              0.12302 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6176 | >20%                    |                 2 |              0.3088  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6198 | >20%                    |                 2 |              0.3099  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6254 | >20%                    |                 2 |              0.3127  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6263 | >20%                    |                 5 |              0.12526 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6266 | 15-20%                  |                10 |              0.06266 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.643  | >20%                    |                 2 |              0.3215  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6454 | 10-15%                  |                 5 |              0.12908 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6505 | 10-15%                  |                 2 |              0.32525 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.654  | >20%                    |                10 |              0.0654  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6561 | >20%                    |                 5 |              0.13122 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6578 | 15-20%                  |                 5 |              0.13156 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6677 | 15-20%                  |                10 |              0.06677 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.675  | >20%                    |                 5 |              0.135   |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6982 | 5-10%                   |                 2 |              0.3491  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6996 | >20%                    |                10 |              0.06996 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7058 | >20%                    |                10 |              0.07058 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7086 | 5-10%                   |                10 |              0.07086 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.711  | >20%                    |                10 |              0.0711  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7145 | >20%                    |                 5 |              0.1429  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7232 | <5%                     |                10 |              0.07232 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7348 | >20%                    |                10 |              0.07348 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.735  | <5%                     |                10 |              0.0735  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7363 | >20%                    |                10 |              0.07363 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7384 | >20%                    |                 5 |              0.14768 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.7451 | >20%                    |                10 |              0.07451 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7505 | 15-20%                  |                10 |              0.07505 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7531 | >20%                    |                 5 |              0.15062 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7563 | >20%                    |                10 |              0.07563 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7612 | >20%                    |                10 |              0.07612 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7615 | >20%                    |                 5 |              0.1523  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7723 | >20%                    |                 5 |              0.15446 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7749 | >20%                    |                10 |              0.07749 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7798 | 15-20%                  |                 5 |              0.15596 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7875 | <5%                     |                10 |              0.07875 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7971 | 5-10%                   |                10 |              0.07971 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8075 | >20%                    |                 2 |              0.40375 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8091 | >20%                    |                10 |              0.08091 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8393 | >20%                    |                10 |              0.08393 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8469 | 10-15%                  |                10 |              0.08469 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8499 | >20%                    |                10 |              0.08499 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.865  | >20%                    |                 5 |              0.173   |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8679 | 15-20%                  |                10 |              0.08679 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8731 | >20%                    |                10 |              0.08731 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8773 | 10-15%                  |                10 |              0.08773 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8888 | 10-15%                  |                10 |              0.08888 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9046 | >20%                    |                 5 |              0.18092 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.921  | >20%                    |                10 |              0.0921  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9388 | >20%                    |                 2 |              0.4694  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9439 | <5%                     |                 5 |              0.18878 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.959  | 15-20%                  |                10 |              0.0959  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9774 | <5%                     |                10 |              0.09774 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9776 | 10-15%                  |                10 |              0.09776 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9854 | >20%                    |                10 |              0.09854 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.99   | >20%                    |                 2 |              0.495   |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0007 | >20%                    |                10 |              0.10007 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0044 | >20%                    |                10 |              0.10044 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0051 | >20%                    |                10 |              0.10051 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0309 | <5%                     |                 5 |              0.20618 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0471 | >20%                    |                 5 |              0.20942 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0525 | >20%                    |                10 |              0.10525 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0801 | >20%                    |                 5 |              0.21602 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1285 | >20%                    |                10 |              0.11285 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1377 | >20%                    |                10 |              0.11377 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1467 | 15-20%                  |                10 |              0.11467 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2761 | >20%                    |                 2 |              0.63805 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3525 | 10-15%                  |                10 |              0.13525 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3572 | >20%                    |                10 |              0.13572 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3587 | >20%                    |                 5 |              0.27174 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3955 | 15-20%                  |                10 |              0.13955 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4176 | 5-10%                   |                 5 |              0.28352 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4271 | >20%                    |                 2 |              0.71355 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4274 | <5%                     |                 2 |              0.7137  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4958 | >20%                    |                10 |              0.14958 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5515 | >20%                    |                10 |              0.15515 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.032  | 15-20%                  |                10 |              0.2032  |