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

Data correct as of 2025-03-23 01:49:49.577683, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1158 | 10-15%                  |                 2 |              0.0579  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1306 | 5-10%                   |                 5 |              0.02612 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1611 | >20%                    |                 5 |              0.03222 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1823 | 10-15%                  |                 2 |              0.09115 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.198  | 5-10%                   |                 5 |              0.0396  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2082 | 5-10%                   |                 2 |              0.1041  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2183 | >20%                    |                 2 |              0.10915 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2239 | >20%                    |                 2 |              0.11195 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.233  | 15-20%                  |                 2 |              0.1165  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2417 | 15-20%                  |                 2 |              0.12085 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2441 | >20%                    |                 2 |              0.12205 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2445 | >20%                    |                 2 |              0.12225 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.245  | 5-10%                   |                10 |              0.0245  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2549 | 5-10%                   |                 2 |              0.12745 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2586 | 5-10%                   |                 2 |              0.1293  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2716 | 5-10%                   |                 2 |              0.1358  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2775 | <5%                     |                 2 |              0.13875 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.282  | <5%                     |                 2 |              0.141   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2868 | <5%                     |                 2 |              0.1434  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2929 | 10-15%                  |                10 |              0.02929 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2939 | >20%                    |                 5 |              0.05878 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.295  | 5-10%                   |                 2 |              0.1475  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2956 | 10-15%                  |                 2 |              0.1478  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3005 | >20%                    |                 2 |              0.15025 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3037 | >20%                    |                 2 |              0.15185 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3059 | >20%                    |                 2 |              0.15295 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3136 | 15-20%                  |                 5 |              0.06272 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3163 | 5-10%                   |                 2 |              0.15815 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | 5-10%                   |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3433 | 10-15%                  |                10 |              0.03433 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3467 | >20%                    |                 2 |              0.17335 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3484 | 10-15%                  |                 2 |              0.1742  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3541 | >20%                    |                 2 |              0.17705 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3583 | >20%                    |                 2 |              0.17915 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3594 | >20%                    |                 2 |              0.1797  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3596 | >20%                    |                 2 |              0.1798  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.365  | 5-10%                   |                10 |              0.0365  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3675 | 10-15%                  |                 5 |              0.0735  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3701 | >20%                    |                 5 |              0.07402 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3705 | >20%                    |                 5 |              0.0741  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3723 | >20%                    |                 5 |              0.07446 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.377  |                         |                 5 |              0.0754  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3771 | 10-15%                  |                 5 |              0.07542 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3778 | <5%                     |                 2 |              0.1889  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3805 | 15-20%                  |                10 |              0.03805 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3812 | 10-15%                  |                 5 |              0.07624 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3838 | 5-10%                   |                 2 |              0.1919  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.387  | 5-10%                   |                10 |              0.0387  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3895 | >20%                    |                 2 |              0.19475 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3988 | >20%                    |                 2 |              0.1994  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.401  | <5%                     |                 2 |              0.2005  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.403  | >20%                    |                 2 |              0.2015  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4046 | >20%                    |                 2 |              0.2023  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4051 |                         |                 2 |              0.20255 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4097 | >20%                    |                10 |              0.04097 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4123 | 15-20%                  |                 2 |              0.20615 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4128 | 5-10%                   |                 5 |              0.08256 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4133 | >20%                    |                 5 |              0.08266 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4134 | 5-10%                   |                 2 |              0.2067  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4147 | >20%                    |                 2 |              0.20735 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4184 | 5-10%                   |                 2 |              0.2092  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.437  | 5-10%                   |                 5 |              0.0874  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4379 | 5-10%                   |                 2 |              0.21895 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4386 | <5%                     |                 2 |              0.2193  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4391 | <5%                     |                 5 |              0.08782 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4403 | 5-10%                   |                 5 |              0.08806 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4411 | 5-10%                   |                 5 |              0.08822 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.4412 | >20%                    |                 5 |              0.08824 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4453 | <5%                     |                 5 |              0.08906 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.447  | >20%                    |                 2 |              0.2235  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4512 | <5%                     |                 5 |              0.09024 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4528 | >20%                    |                10 |              0.04528 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4574 | >20%                    |                 5 |              0.09148 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4584 | 5-10%                   |                 5 |              0.09168 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4595 | >20%                    |                 5 |              0.0919  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4599 | 5-10%                   |                 2 |              0.22995 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4681 | 10-15%                  |                 5 |              0.09362 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4697 | >20%                    |                 5 |              0.09394 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4709 | 10-15%                  |                 2 |              0.23545 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4782 | >20%                    |                 5 |              0.09564 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4804 | <5%                     |                 5 |              0.09608 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4826 | >20%                    |                10 |              0.04826 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4945 | >20%                    |                 2 |              0.24725 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5003 | >20%                    |                 5 |              0.10006 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5052 | >20%                    |                 2 |              0.2526  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5078 | <5%                     |                10 |              0.05078 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.514  | 5-10%                   |                 5 |              0.1028  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.5154 | 5-10%                   |                 5 |              0.10308 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5235 | 5-10%                   |                 5 |              0.1047  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5254 | >20%                    |                 2 |              0.2627  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5294 | 10-15%                  |                 5 |              0.10588 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.53   | >20%                    |                 5 |              0.106   |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5319 | 15-20%                  |                 2 |              0.26595 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.534  | >20%                    |                 2 |              0.267   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5386 | 15-20%                  |                 2 |              0.2693  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5391 | >20%                    |                 5 |              0.10782 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5534 | >20%                    |                 5 |              0.11068 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5534 | 10-15%                  |                10 |              0.05534 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.555  | >20%                    |                 2 |              0.2775  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5568 | 5-10%                   |                 5 |              0.11136 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.558  | 15-20%                  |                 5 |              0.1116  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5647 | <5%                     |                 5 |              0.11294 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5669 | 10-15%                  |                 5 |              0.11338 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5678 | >20%                    |                 5 |              0.11356 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.5792 | >20%                    |                 2 |              0.2896  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5834 | <5%                     |                 5 |              0.11668 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5881 | >20%                    |                 2 |              0.29405 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5931 | >20%                    |                 5 |              0.11862 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5975 | >20%                    |                 5 |              0.1195  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5987 | 15-20%                  |                 5 |              0.11974 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.601  | <5%                     |                10 |              0.0601  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6228 | <5%                     |                 2 |              0.3114  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6255 | >20%                    |                 5 |              0.1251  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6278 | >20%                    |                10 |              0.06278 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6403 | >20%                    |                10 |              0.06403 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6704 | 10-15%                  |                 5 |              0.13408 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6799 | >20%                    |                 5 |              0.13598 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.685  | >20%                    |                 5 |              0.137   |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6874 | >20%                    |                10 |              0.06874 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6881 | >20%                    |                 2 |              0.34405 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6966 | <5%                     |                10 |              0.06966 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7142 | >20%                    |                10 |              0.07142 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7199 | >20%                    |                10 |              0.07199 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7207 | 5-10%                   |                 5 |              0.14414 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7256 | >20%                    |                10 |              0.07256 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7278 | 5-10%                   |                10 |              0.07278 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7303 | >20%                    |                10 |              0.07303 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7307 | <5%                     |                 5 |              0.14614 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7311 | 5-10%                   |                 2 |              0.36555 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7372 |                         |                10 |              0.07372 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7389 | 15-20%                  |                 5 |              0.14778 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7525 | 5-10%                   |                10 |              0.07525 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7574 | >20%                    |                 5 |              0.15148 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7663 | 5-10%                   |                10 |              0.07663 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7681 | <5%                     |                10 |              0.07681 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7701 | >20%                    |                 5 |              0.15402 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7745 | >20%                    |                10 |              0.07745 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7748 | >20%                    |                 5 |              0.15496 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.781  | <5%                     |                10 |              0.0781  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8021 | <5%                     |                10 |              0.08021 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.8154 | >20%                    |                 2 |              0.4077  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8476 | 5-10%                   |                10 |              0.08476 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8489 | 15-20%                  |                10 |              0.08489 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8543 | >20%                    |                10 |              0.08543 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8546 | >20%                    |                 2 |              0.4273  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8595 | 5-10%                   |                10 |              0.08595 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8597 | <5%                     |                10 |              0.08597 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.86   | 15-20%                  |                 5 |              0.172   |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8669 | 15-20%                  |                10 |              0.08669 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.8679 | >20%                    |                10 |              0.08679 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8684 | <5%                     |                10 |              0.08684 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.869  | >20%                    |                10 |              0.0869  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8789 | >20%                    |                10 |              0.08789 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8822 | >20%                    |                10 |              0.08822 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8829 | >20%                    |                10 |              0.08829 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8947 | >20%                    |                 2 |              0.44735 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9194 | >20%                    |                10 |              0.09194 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.004  | 10-15%                  |                10 |              0.1004  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0154 | >20%                    |                 5 |              0.20308 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0374 | 15-20%                  |                10 |              0.10374 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0401 | 5-10%                   |                10 |              0.10401 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0492 | >20%                    |                10 |              0.10492 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0567 | 5-10%                   |                10 |              0.10567 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0834 | >20%                    |                10 |              0.10834 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1019 | <5%                     |                10 |              0.11019 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1223 | >20%                    |                 5 |              0.22446 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1241 | 5-10%                   |                10 |              0.11241 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1711 | 15-20%                  |                10 |              0.11711 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1842 | >20%                    |                10 |              0.11842 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.1904 | >20%                    |                10 |              0.11904 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2418 | >20%                    |                10 |              0.12418 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2844 | >20%                    |                 2 |              0.6422  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3066 | 5-10%                   |                 5 |              0.26132 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3183 | >20%                    |                 5 |              0.26366 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.354  | 5-10%                   |                 2 |              0.677   |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4809 | >20%                    |                10 |              0.14809 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.503  | 10-15%                  |                 5 |              0.3006  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5036 | >20%                    |                10 |              0.15036 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6847 | >20%                    |                10 |              0.16847 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1308 | 5-10%                   |                10 |              0.21308 |