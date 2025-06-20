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

Data correct as of 2025-06-20 01:56:02.270688, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1297 | >20%                    |                 2 |              0.06485 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1776 | 15-20%                  |                 2 |              0.0888  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1843 | >20%                    |                 5 |              0.03686 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 15-20%                  |                 5 |              0.03708 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2007 | >20%                    |                 5 |              0.04014 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2114 | >20%                    |                 2 |              0.1057  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2118 | 5-10%                   |                 2 |              0.1059  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2207 | >20%                    |                 5 |              0.04414 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2208 | >20%                    |                 2 |              0.1104  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.229  | 15-20%                  |                 2 |              0.1145  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2292 | >20%                    |                 2 |              0.1146  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2406 | <5%                     |                 2 |              0.1203  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2487 | 15-20%                  |                 2 |              0.12435 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2496 | >20%                    |                10 |              0.02496 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2504 | 15-20%                  |                 5 |              0.05008 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2684 | >20%                    |                 2 |              0.1342  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2735 | 10-15%                  |                10 |              0.02735 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2738 | >20%                    |                 2 |              0.1369  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2765 | 5-10%                   |                10 |              0.02765 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.287  | >20%                    |                 2 |              0.1435  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2894 | >20%                    |                 2 |              0.1447  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2932 | <5%                     |                 2 |              0.1466  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2936 | 15-20%                  |                 2 |              0.1468  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2986 | >20%                    |                 2 |              0.1493  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3058 | >20%                    |                 2 |              0.1529  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3067 | >20%                    |                 2 |              0.15335 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3075 | 15-20%                  |                 5 |              0.0615  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3109 | >20%                    |                 2 |              0.15545 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3139 | >20%                    |                 5 |              0.06278 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3146 | >20%                    |                 5 |              0.06292 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3203 | >20%                    |                 2 |              0.16015 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3229 | >20%                    |                 2 |              0.16145 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3318 | <5%                     |                 2 |              0.1659  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3378 | 10-15%                  |                 2 |              0.1689  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3476 | 15-20%                  |                10 |              0.03476 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3515 | 10-15%                  |                 2 |              0.17575 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3528 | >20%                    |                 5 |              0.07056 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3568 | >20%                    |                10 |              0.03568 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3573 | 10-15%                  |                 2 |              0.17865 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3609 | 5-10%                   |                 2 |              0.18045 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3748 | <5%                     |                 5 |              0.07496 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3769 | >20%                    |                 2 |              0.18845 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3811 | >20%                    |                 5 |              0.07622 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3879 | 10-15%                  |                 2 |              0.19395 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3903 | >20%                    |                 2 |              0.19515 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.403  | 10-15%                  |                 5 |              0.0806  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.405  | >20%                    |                 2 |              0.2025  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4073 | >20%                    |                 2 |              0.20365 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.41   | >20%                    |                 5 |              0.082   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4157 | 10-15%                  |                 5 |              0.08314 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.417  | >20%                    |                 5 |              0.0834  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.417  | 5-10%                   |                 2 |              0.2085  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4198 | >20%                    |                 5 |              0.08396 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.428  | <5%                     |                 2 |              0.214   |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4292 | >20%                    |                 5 |              0.08584 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4315 | >20%                    |                 2 |              0.21575 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4359 | >20%                    |                 2 |              0.21795 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4413 | >20%                    |                10 |              0.04413 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4422 | 15-20%                  |                 5 |              0.08844 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4429 | 15-20%                  |                 2 |              0.22145 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4539 | >20%                    |                 2 |              0.22695 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4588 | >20%                    |                 2 |              0.2294  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4609 | >20%                    |                 5 |              0.09218 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4613 | <5%                     |                 5 |              0.09226 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4674 | <5%                     |                 5 |              0.09348 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4688 | >20%                    |                 2 |              0.2344  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4688 | >20%                    |                 5 |              0.09376 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4689 | >20%                    |                 5 |              0.09378 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4696 | >20%                    |                 2 |              0.2348  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4791 | >20%                    |                 5 |              0.09582 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4888 | >20%                    |                10 |              0.04888 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4894 | 15-20%                  |                 2 |              0.2447  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4944 | >20%                    |                 5 |              0.09888 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4949 | >20%                    |                 2 |              0.24745 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4995 | 10-15%                  |                 2 |              0.24975 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4998 | >20%                    |                10 |              0.04998 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5022 | >20%                    |                 2 |              0.2511  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.503  | 10-15%                  |                 5 |              0.1006  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5031 | <5%                     |                 5 |              0.10062 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5049 | 5-10%                   |                 2 |              0.25245 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5119 | 15-20%                  |                 5 |              0.10238 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5152 | 10-15%                  |                 5 |              0.10304 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5232 | >20%                    |                 5 |              0.10464 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5251 | 5-10%                   |                 5 |              0.10502 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5304 | >20%                    |                 2 |              0.2652  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5319 | <5%                     |                 5 |              0.10638 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5378 | >20%                    |                 2 |              0.2689  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5494 | <5%                     |                 5 |              0.10988 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5512 | 15-20%                  |                 2 |              0.2756  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5595 | 10-15%                  |                 5 |              0.1119  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5654 | >20%                    |                 5 |              0.11308 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5668 | 10-15%                  |                10 |              0.05668 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5728 | >20%                    |                 5 |              0.11456 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5761 | >20%                    |                 5 |              0.11522 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5861 | <5%                     |                 5 |              0.11722 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5887 | >20%                    |                10 |              0.05887 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.594  | >20%                    |                 5 |              0.1188  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5992 | <5%                     |                 2 |              0.2996  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6091 | 5-10%                   |                 2 |              0.30455 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6096 | >20%                    |                 5 |              0.12192 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6133 | >20%                    |                 2 |              0.30665 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6145 | >20%                    |                 5 |              0.1229  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.615  | >20%                    |                 2 |              0.3075  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6267 | >20%                    |                10 |              0.06267 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6294 | <5%                     |                10 |              0.06294 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6313 | >20%                    |                 2 |              0.31565 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6332 | >20%                    |                 5 |              0.12664 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6367 | >20%                    |                 5 |              0.12734 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6392 | >20%                    |                 5 |              0.12784 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6495 | >20%                    |                 5 |              0.1299  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6504 | <5%                     |                 5 |              0.13008 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6515 | >20%                    |                 5 |              0.1303  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6541 | >20%                    |                 5 |              0.13082 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6581 | >20%                    |                10 |              0.06581 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6667 | 15-20%                  |                10 |              0.06667 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6862 | 10-15%                  |                 5 |              0.13724 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6902 | 10-15%                  |                 5 |              0.13804 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6929 | >20%                    |                10 |              0.06929 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6974 | <5%                     |                10 |              0.06974 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6987 | >20%                    |                10 |              0.06987 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7012 | >20%                    |                 2 |              0.3506  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7053 | 15-20%                  |                10 |              0.07053 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7107 | <5%                     |                 5 |              0.14214 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7122 | 10-15%                  |                 2 |              0.3561  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7199 | 15-20%                  |                10 |              0.07199 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7214 | >20%                    |                10 |              0.07214 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7236 | >20%                    |                 5 |              0.14472 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7263 | >20%                    |                10 |              0.07263 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7371 | >20%                    |                10 |              0.07371 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7414 | >20%                    |                10 |              0.07414 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7544 | 10-15%                  |                10 |              0.07544 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7676 | 15-20%                  |                10 |              0.07676 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7701 | <5%                     |                10 |              0.07701 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7736 | >20%                    |                10 |              0.07736 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7831 | >20%                    |                 5 |              0.15662 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7991 | >20%                    |                10 |              0.07991 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8    | 5-10%                   |                 5 |              0.16    |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8019 | <5%                     |                10 |              0.08019 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8053 | >20%                    |                 5 |              0.16106 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8118 | >20%                    |                10 |              0.08118 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8167 | >20%                    |                10 |              0.08167 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8211 | 15-20%                  |                10 |              0.08211 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.856  | >20%                    |                10 |              0.0856  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8745 | >20%                    |                10 |              0.08745 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8841 | 15-20%                  |                10 |              0.08841 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.886  | <5%                     |                10 |              0.0886  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8886 | >20%                    |                10 |              0.08886 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8913 | >20%                    |                10 |              0.08913 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9094 | >20%                    |                10 |              0.09094 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9271 | >20%                    |                10 |              0.09271 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9446 | >20%                    |                10 |              0.09446 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9583 | >20%                    |                 5 |              0.19166 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9596 | <5%                     |                10 |              0.09596 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9657 | >20%                    |                10 |              0.09657 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9732 | >20%                    |                10 |              0.09732 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9766 | >20%                    |                 2 |              0.4883  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9853 | >20%                    |                 2 |              0.49265 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.017  | >20%                    |                10 |              0.1017  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.023  | 10-15%                  |                10 |              0.1023  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0231 | >20%                    |                10 |              0.10231 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.045  | 15-20%                  |                10 |              0.1045  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0514 | >20%                    |                10 |              0.10514 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0721 | <5%                     |                 2 |              0.53605 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0905 | 15-20%                  |                10 |              0.10905 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1025 | >20%                    |                10 |              0.11025 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1084 | 15-20%                  |                10 |              0.11084 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1184 | >20%                    |                 2 |              0.5592  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.198  | <5%                     |                 5 |              0.2396  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2192 | 10-15%                  |                10 |              0.12192 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2328 | >20%                    |                 5 |              0.24656 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2756 | >20%                    |                10 |              0.12756 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3169 | >20%                    |                 5 |              0.26338 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3173 | >20%                    |                10 |              0.13173 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.4033 | <5%                     |                 2 |              0.70165 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4188 | >20%                    |                10 |              0.14188 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4273 | <5%                     |                 5 |              0.28546 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5303 | >20%                    |                 5 |              0.30606 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6377 | 10-15%                  |                10 |              0.16377 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.7761 | <5%                     |                10 |              0.17761 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.8121 | >20%                    |                 2 |              0.90605 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0825 | <5%                     |                10 |              0.20825 |