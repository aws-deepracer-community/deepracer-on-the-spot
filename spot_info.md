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

Data correct as of 2026-08-29 06:26:51.283040, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.148  | >20%                    |                 2 |              0.074   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1797 | 15-20%                  |                 2 |              0.08985 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2061 | 15-20%                  |                 2 |              0.10305 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2075 | >20%                    |                 2 |              0.10375 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2087 | >20%                    |                 2 |              0.10435 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2148 | >20%                    |                 2 |              0.1074  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2273 | 10-15%                  |                 2 |              0.11365 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2367 | >20%                    |                 2 |              0.11835 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.247  | >20%                    |                 2 |              0.1235  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2492 | 5-10%                   |                10 |              0.02492 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.256  | >20%                    |                 5 |              0.0512  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2604 | 15-20%                  |                 2 |              0.1302  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2644 | 10-15%                  |                 2 |              0.1322  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2675 | >20%                    |                 2 |              0.13375 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2681 | >20%                    |                 2 |              0.13405 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3045 | 15-20%                  |                 5 |              0.0609  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3112 | >20%                    |                 2 |              0.1556  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3181 | >20%                    |                 2 |              0.15905 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3315 | 5-10%                   |                10 |              0.03315 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3367 | >20%                    |                 5 |              0.06734 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3377 | >20%                    |                 2 |              0.16885 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.343  | >20%                    |                 5 |              0.0686  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3447 | <5%                     |                 2 |              0.17235 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3478 | >20%                    |                 5 |              0.06956 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3498 | 10-15%                  |                 2 |              0.1749  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3502 | >20%                    |                 5 |              0.07004 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3516 | 15-20%                  |                 5 |              0.07032 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3569 | >20%                    |                 2 |              0.17845 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3673 | >20%                    |                 5 |              0.07346 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3729 | >20%                    |                 5 |              0.07458 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3802 | >20%                    |                 2 |              0.1901  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3813 | <5%                     |                 2 |              0.19065 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3892 | >20%                    |                 5 |              0.07784 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3918 | >20%                    |                 2 |              0.1959  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3946 | >20%                    |                10 |              0.03946 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3993 | >20%                    |                 2 |              0.19965 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4009 | 15-20%                  |                 2 |              0.20045 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4088 | >20%                    |                10 |              0.04088 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4122 | 10-15%                  |                 2 |              0.2061  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4187 | >20%                    |                10 |              0.04187 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4255 | >20%                    |                10 |              0.04255 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4288 | >20%                    |                 2 |              0.2144  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4332 | 15-20%                  |                 5 |              0.08664 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4373 | >20%                    |                 5 |              0.08746 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4377 | >20%                    |                 2 |              0.21885 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4381 | >20%                    |                 5 |              0.08762 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4468 | >20%                    |                 2 |              0.2234  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4536 | >20%                    |                 5 |              0.09072 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4556 |                         |                 2 |              0.2278  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4581 | >20%                    |                10 |              0.04581 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4596 | >20%                    |                 5 |              0.09192 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4637 | >20%                    |                 5 |              0.09274 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4798 | 15-20%                  |                 2 |              0.2399  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4817 | >20%                    |                 5 |              0.09634 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4962 | <5%                     |                 5 |              0.09924 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5011 | >20%                    |                 5 |              0.10022 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5049 | >20%                    |                10 |              0.05049 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5132 | <5%                     |                 2 |              0.2566  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5169 | >20%                    |                 5 |              0.10338 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5255 | 15-20%                  |                10 |              0.05255 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5262 | 5-10%                   |                 2 |              0.2631  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5265 | >20%                    |                 5 |              0.1053  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5281 | >20%                    |                 5 |              0.10562 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5444 | >20%                    |                 2 |              0.2722  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5457 | >20%                    |                10 |              0.05457 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.547  | >20%                    |                 2 |              0.2735  |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.5517 |                         |                 5 |              0.11034 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5596 | >20%                    |                10 |              0.05596 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5632 | >20%                    |                 5 |              0.11264 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5742 | >20%                    |                 2 |              0.2871  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.579  | 10-15%                  |                10 |              0.0579  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5838 | >20%                    |                 5 |              0.11676 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5854 | >20%                    |                10 |              0.05854 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5861 | >20%                    |                 5 |              0.11722 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6095 | 10-15%                  |                 5 |              0.1219  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6107 | >20%                    |                 5 |              0.12214 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6237 | >20%                    |                 5 |              0.12474 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6355 | 5-10%                   |                 5 |              0.1271  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6423 | >20%                    |                 5 |              0.12846 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6427 | >20%                    |                 2 |              0.32135 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6478 | 5-10%                   |                10 |              0.06478 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.649  | >20%                    |                 5 |              0.1298  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6586 | >20%                    |                 2 |              0.3293  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6724 | 5-10%                   |                10 |              0.06724 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6783 | 15-20%                  |                10 |              0.06783 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6901 | >20%                    |                10 |              0.06901 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6965 | >20%                    |                 2 |              0.34825 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7028 | >20%                    |                 2 |              0.3514  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7168 | >20%                    |                10 |              0.07168 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7394 | 15-20%                  |                 2 |              0.3697  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7462 | >20%                    |                 2 |              0.3731  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.77   | 5-10%                   |                10 |              0.077   |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7717 | >20%                    |                10 |              0.07717 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.7721 | >20%                    |                 2 |              0.38605 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7755 | >20%                    |                 5 |              0.1551  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7778 | 15-20%                  |                10 |              0.07778 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7807 | >20%                    |                 5 |              0.15614 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7995 | >20%                    |                10 |              0.07995 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8013 | >20%                    |                10 |              0.08013 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8129 | >20%                    |                10 |              0.08129 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8168 | >20%                    |                10 |              0.08168 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8204 | <5%                     |                10 |              0.08204 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8275 | 15-20%                  |                10 |              0.08275 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8347 | >20%                    |                10 |              0.08347 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8376 | 10-15%                  |                 2 |              0.4188  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8436 | >20%                    |                 5 |              0.16872 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8523 | >20%                    |                10 |              0.08523 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8536 | >20%                    |                 5 |              0.17072 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8591 | >20%                    |                10 |              0.08591 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8638 | >20%                    |                 5 |              0.17276 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.89   | >20%                    |                10 |              0.089   |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9048 | 5-10%                   |                 2 |              0.4524  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9188 | >20%                    |                 2 |              0.4594  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9382 | 10-15%                  |                 2 |              0.4691  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9474 | >20%                    |                10 |              0.09474 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9482 |                         |                 2 |              0.4741  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9506 |                         |                10 |              0.09506 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9594 | 5-10%                   |                 5 |              0.19188 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9717 | >20%                    |                10 |              0.09717 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9838 | 15-20%                  |                10 |              0.09838 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0144 | >20%                    |                10 |              0.10144 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0162 | >20%                    |                10 |              0.10162 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      1.0272 | >20%                    |                 5 |              0.20544 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0279 | >20%                    |                 5 |              0.20558 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.045  | >20%                    |                 5 |              0.209   |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0505 | >20%                    |                10 |              0.10505 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0749 | 10-15%                  |                 2 |              0.53745 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0786 | 5-10%                   |                10 |              0.10786 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1032 | >20%                    |                10 |              0.11032 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1094 | >20%                    |                 5 |              0.22188 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1164 | >20%                    |                 5 |              0.22328 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1203 | 15-20%                  |                10 |              0.11203 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.129  | >20%                    |                 5 |              0.2258  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1565 | >20%                    |                 5 |              0.2313  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1581 | >20%                    |                 2 |              0.57905 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.165  | >20%                    |                 5 |              0.233   |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1984 | 15-20%                  |                10 |              0.11984 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.2121 |                         |                 2 |              0.60605 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2289 | >20%                    |                10 |              0.12289 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3021 | >20%                    |                10 |              0.13021 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3043 | >20%                    |                 5 |              0.26086 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3348 |                         |                 5 |              0.26696 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.3511 |                         |                 5 |              0.27022 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.4252 |                         |                10 |              0.14252 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4597 | 10-15%                  |                10 |              0.14597 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.481  | >20%                    |                10 |              0.1481  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5459 | 15-20%                  |                 5 |              0.30918 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.5493 |                         |                10 |              0.15493 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.579  | >20%                    |                10 |              0.1579  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6111 | 15-20%                  |                10 |              0.16111 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7912 | >20%                    |                10 |              0.17912 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.8997 | 5-10%                   |                 2 |              0.94985 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9045 | 5-10%                   |                 2 |              0.95225 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      2.2121 | >20%                    |                10 |              0.22121 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.4597 | >20%                    |                 5 |              0.49194 |