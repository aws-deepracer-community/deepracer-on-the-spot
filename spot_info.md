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

Data correct as of 2025-06-21 01:54:01.878227, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1366 | >20%                    |                 2 |              0.0683  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1781 | >20%                    |                 5 |              0.03562 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1801 | 15-20%                  |                 2 |              0.09005 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 15-20%                  |                 5 |              0.03708 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2094 | >20%                    |                 2 |              0.1047  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2131 | >20%                    |                 5 |              0.04262 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2179 | >20%                    |                 5 |              0.04358 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2196 | 5-10%                   |                 2 |              0.1098  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2205 | >20%                    |                 2 |              0.11025 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2263 | 15-20%                  |                 2 |              0.11315 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2271 | <5%                     |                 2 |              0.11355 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2407 | >20%                    |                 2 |              0.12035 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2456 | >20%                    |                10 |              0.02456 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.25   | 15-20%                  |                 2 |              0.125   |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2524 | 15-20%                  |                 5 |              0.05048 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2627 | 10-15%                  |                10 |              0.02627 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2677 | >20%                    |                 2 |              0.13385 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2704 | 5-10%                   |                10 |              0.02704 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2752 | >20%                    |                 2 |              0.1376  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2811 | >20%                    |                 2 |              0.14055 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2927 | 15-20%                  |                 2 |              0.14635 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2938 | >20%                    |                 2 |              0.1469  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2981 | <5%                     |                 2 |              0.14905 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2986 | >20%                    |                 2 |              0.1493  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3056 | 15-20%                  |                 5 |              0.06112 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3097 | >20%                    |                 2 |              0.15485 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3099 | >20%                    |                 2 |              0.15495 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3118 | >20%                    |                 2 |              0.1559  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3128 | >20%                    |                 5 |              0.06256 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3138 | >20%                    |                 5 |              0.06276 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3213 | >20%                    |                 2 |              0.16065 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3257 | >20%                    |                 2 |              0.16285 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3343 | <5%                     |                 2 |              0.16715 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3344 | 10-15%                  |                 2 |              0.1672  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3451 | >20%                    |                10 |              0.03451 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3487 | 10-15%                  |                 2 |              0.17435 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3488 | <5%                     |                 5 |              0.06976 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3541 | 15-20%                  |                10 |              0.03541 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3564 | 10-15%                  |                 2 |              0.1782  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3671 | 5-10%                   |                 2 |              0.18355 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3679 | >20%                    |                 5 |              0.07358 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3765 | >20%                    |                 2 |              0.18825 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3857 | >20%                    |                 5 |              0.07714 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3883 | 10-15%                  |                 2 |              0.19415 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3953 | >20%                    |                 2 |              0.19765 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4045 | 10-15%                  |                 5 |              0.0809  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4078 | >20%                    |                 2 |              0.2039  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4092 | >20%                    |                 5 |              0.08184 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4124 | >20%                    |                 2 |              0.2062  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4161 | >20%                    |                 5 |              0.08322 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.417  | 5-10%                   |                 2 |              0.2085  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4198 | >20%                    |                 5 |              0.08396 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.421  | 10-15%                  |                 5 |              0.0842  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4276 | <5%                     |                 2 |              0.2138  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4292 | >20%                    |                 5 |              0.08584 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4295 | >20%                    |                 2 |              0.21475 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4366 | 15-20%                  |                 5 |              0.08732 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4373 | >20%                    |                 2 |              0.21865 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4436 | >20%                    |                10 |              0.04436 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4455 | >20%                    |                 2 |              0.22275 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4534 | 15-20%                  |                 2 |              0.2267  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4539 | >20%                    |                 2 |              0.22695 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4588 | >20%                    |                 2 |              0.2294  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4645 | >20%                    |                 5 |              0.0929  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4673 | <5%                     |                 5 |              0.09346 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4674 | <5%                     |                 5 |              0.09348 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4688 | >20%                    |                 5 |              0.09376 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4696 | >20%                    |                 2 |              0.2348  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.474  | >20%                    |                 5 |              0.0948  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.479  | >20%                    |                 5 |              0.0958  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4932 | 15-20%                  |                 2 |              0.2466  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4936 | 10-15%                  |                 5 |              0.09872 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.495  | >20%                    |                 2 |              0.2475  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4974 | >20%                    |                 5 |              0.09948 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5004 | >20%                    |                10 |              0.05004 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5017 | >20%                    |                 2 |              0.25085 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5019 | 5-10%                   |                 2 |              0.25095 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5051 | 10-15%                  |                 2 |              0.25255 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5108 | 15-20%                  |                 5 |              0.10216 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5179 | 10-15%                  |                 5 |              0.10358 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5212 | >20%                    |                 2 |              0.2606  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5248 | <5%                     |                 5 |              0.10496 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5274 | 5-10%                   |                 5 |              0.10548 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5299 | >20%                    |                 2 |              0.26495 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5329 | >20%                    |                10 |              0.05329 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5409 | >20%                    |                 5 |              0.10818 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5452 | 15-20%                  |                 2 |              0.2726  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5468 | <5%                     |                 5 |              0.10936 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5506 | <5%                     |                 5 |              0.11012 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.562  | 10-15%                  |                 5 |              0.1124  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5635 | >20%                    |                 5 |              0.1127  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5659 | 10-15%                  |                10 |              0.05659 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.573  | >20%                    |                 5 |              0.1146  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5812 | <5%                     |                 5 |              0.11624 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5837 | >20%                    |                 5 |              0.11674 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5887 | >20%                    |                 5 |              0.11774 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6015 | <5%                     |                 2 |              0.30075 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6062 | >20%                    |                 5 |              0.12124 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6116 | >20%                    |                 2 |              0.3058  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.615  | <5%                     |                10 |              0.0615  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6178 | >20%                    |                10 |              0.06178 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6214 | >20%                    |                 5 |              0.12428 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6222 | >20%                    |                10 |              0.06222 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.623  | 5-10%                   |                 2 |              0.3115  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6275 | >20%                    |                 5 |              0.1255  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6351 | >20%                    |                 2 |              0.31755 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6423 | >20%                    |                 5 |              0.12846 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6451 | >20%                    |                 5 |              0.12902 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6465 | >20%                    |                 5 |              0.1293  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6489 | >20%                    |                 2 |              0.32445 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6542 | <5%                     |                 5 |              0.13084 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6558 | >20%                    |                 5 |              0.13116 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.656  | >20%                    |                 5 |              0.1312  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6737 | 15-20%                  |                10 |              0.06737 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6778 | >20%                    |                10 |              0.06778 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6804 | >20%                    |                10 |              0.06804 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6902 | 10-15%                  |                 5 |              0.13804 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6905 | >20%                    |                 2 |              0.34525 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6926 | <5%                     |                10 |              0.06926 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7002 | 10-15%                  |                 5 |              0.14004 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7047 | >20%                    |                10 |              0.07047 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7063 | 15-20%                  |                10 |              0.07063 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7097 | 10-15%                  |                 2 |              0.35485 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7137 | <5%                     |                 5 |              0.14274 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7248 | 15-20%                  |                10 |              0.07248 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7266 | >20%                    |                 5 |              0.14532 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7317 | >20%                    |                10 |              0.07317 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7326 | >20%                    |                10 |              0.07326 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.737  | >20%                    |                10 |              0.0737  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7398 | 10-15%                  |                10 |              0.07398 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7448 | >20%                    |                10 |              0.07448 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7645 | <5%                     |                10 |              0.07645 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7658 | 15-20%                  |                10 |              0.07658 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7666 | >20%                    |                10 |              0.07666 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.78   | >20%                    |                 5 |              0.156   |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7967 | >20%                    |                 5 |              0.15934 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8108 | <5%                     |                10 |              0.08108 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8125 | 5-10%                   |                 5 |              0.1625  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8188 | >20%                    |                10 |              0.08188 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8266 | >20%                    |                10 |              0.08266 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8315 | >20%                    |                10 |              0.08315 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8366 | 15-20%                  |                10 |              0.08366 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.864  | >20%                    |                10 |              0.0864  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.868  | >20%                    |                10 |              0.0868  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8693 | >20%                    |                10 |              0.08693 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8839 | <5%                     |                10 |              0.08839 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.894  | 15-20%                  |                10 |              0.0894  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9029 | >20%                    |                10 |              0.09029 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9047 | >20%                    |                10 |              0.09047 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9229 | >20%                    |                10 |              0.09229 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9596 | <5%                     |                10 |              0.09596 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9601 | >20%                    |                10 |              0.09601 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9662 | >20%                    |                10 |              0.09662 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9713 | >20%                    |                 5 |              0.19426 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9786 | >20%                    |                 2 |              0.4893  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9883 | >20%                    |                10 |              0.09883 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9984 | >20%                    |                 2 |              0.4992  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0067 | >20%                    |                10 |              0.10067 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0205 | 10-15%                  |                10 |              0.10205 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0279 | >20%                    |                10 |              0.10279 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0345 | 15-20%                  |                10 |              0.10345 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0503 | >20%                    |                10 |              0.10503 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.071  | <5%                     |                 2 |              0.5355  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0928 | 15-20%                  |                10 |              0.10928 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0989 | >20%                    |                 2 |              0.54945 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1042 | >20%                    |                10 |              0.11042 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1068 | 15-20%                  |                10 |              0.11068 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2127 | <5%                     |                 5 |              0.24254 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2333 | 10-15%                  |                10 |              0.12333 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2756 | >20%                    |                10 |              0.12756 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2987 | >20%                    |                 5 |              0.25974 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3136 | >20%                    |                10 |              0.13136 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.332  | >20%                    |                 5 |              0.2664  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4185 | <5%                     |                 5 |              0.2837  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4905 | >20%                    |                 5 |              0.2981  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4963 | >20%                    |                10 |              0.14963 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.5004 | <5%                     |                 2 |              0.7502  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6377 | 10-15%                  |                10 |              0.16377 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.7296 | >20%                    |                 2 |              0.8648  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.79   | <5%                     |                10 |              0.179   |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1093 | <5%                     |                10 |              0.21093 |