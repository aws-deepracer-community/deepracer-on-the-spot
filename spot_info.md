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

Data correct as of 2025-07-20 02:14:08.336096, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1198 | >20%                    |                 2 |              0.0599  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.15   | 5-10%                   |                 2 |              0.075   |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1547 | <5%                     |                 5 |              0.03094 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1693 | 15-20%                  |                 5 |              0.03386 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1843 | 5-10%                   |                 2 |              0.09215 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1888 | >20%                    |                 2 |              0.0944  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1894 | 5-10%                   |                 5 |              0.03788 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2034 | >20%                    |                 2 |              0.1017  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2318 | >20%                    |                 5 |              0.04636 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2336 | 15-20%                  |                 2 |              0.1168  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2343 | >20%                    |                 2 |              0.11715 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2403 | >20%                    |                 5 |              0.04806 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2412 | <5%                     |                 5 |              0.04824 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2432 | 5-10%                   |                 2 |              0.1216  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2498 | 15-20%                  |                 2 |              0.1249  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2526 | >20%                    |                 2 |              0.1263  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2583 | >20%                    |                 2 |              0.12915 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2624 | >20%                    |                10 |              0.02624 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2781 | >20%                    |                 2 |              0.13905 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2789 | >20%                    |                 2 |              0.13945 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2857 | <5%                     |                 5 |              0.05714 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2876 | 15-20%                  |                10 |              0.02876 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.299  | >20%                    |                 2 |              0.1495  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3021 | <5%                     |                 2 |              0.15105 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3125 | >20%                    |                 5 |              0.0625  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3164 | <5%                     |                10 |              0.03164 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3193 | 5-10%                   |                 2 |              0.15965 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.325  | 15-20%                  |                 2 |              0.1625  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.328  | <5%                     |                 2 |              0.164   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.328  | >20%                    |                 2 |              0.164   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3281 | 5-10%                   |                 2 |              0.16405 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3309 | 15-20%                  |                 2 |              0.16545 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3332 | >20%                    |                 2 |              0.1666  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3397 | >20%                    |                 5 |              0.06794 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3458 | 15-20%                  |                10 |              0.03458 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.348  | >20%                    |                 2 |              0.174   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3528 | 15-20%                  |                 2 |              0.1764  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3609 | >20%                    |                 2 |              0.18045 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3724 | >20%                    |                 5 |              0.07448 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3735 | 15-20%                  |                 5 |              0.0747  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3783 | >20%                    |                 5 |              0.07566 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3856 | >20%                    |                 5 |              0.07712 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3926 | >20%                    |                 5 |              0.07852 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3967 | >20%                    |                 2 |              0.19835 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4076 | <5%                     |                 2 |              0.2038  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4091 | >20%                    |                 2 |              0.20455 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4096 | >20%                    |                 2 |              0.2048  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4132 | >20%                    |                 2 |              0.2066  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4312 | >20%                    |                 2 |              0.2156  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4316 | 10-15%                  |                 2 |              0.2158  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4359 | >20%                    |                10 |              0.04359 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4359 | 15-20%                  |                 5 |              0.08718 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4454 | 5-10%                   |                 2 |              0.2227  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4477 | <5%                     |                 2 |              0.22385 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4488 | >20%                    |                 5 |              0.08976 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4543 | >20%                    |                 5 |              0.09086 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4566 | >20%                    |                 5 |              0.09132 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4657 | >20%                    |                 5 |              0.09314 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4711 | 10-15%                  |                 2 |              0.23555 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4779 | >20%                    |                 2 |              0.23895 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4791 | 5-10%                   |                 2 |              0.23955 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4805 | >20%                    |                 5 |              0.0961  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4831 | >20%                    |                 2 |              0.24155 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4859 | >20%                    |                 2 |              0.24295 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.487  | <5%                     |                10 |              0.0487  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4934 | >20%                    |                 5 |              0.09868 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4995 | >20%                    |                 2 |              0.24975 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.501  | >20%                    |                 2 |              0.2505  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5042 | >20%                    |                 2 |              0.2521  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5132 | >20%                    |                 5 |              0.10264 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5158 | 5-10%                   |                 5 |              0.10316 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5175 | >20%                    |                 2 |              0.25875 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5176 | 10-15%                  |                 5 |              0.10352 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5235 | 10-15%                  |                 5 |              0.1047  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5251 | 10-15%                  |                 5 |              0.10502 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.5256 | >20%                    |                10 |              0.05256 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5294 | 15-20%                  |                 2 |              0.2647  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5347 | >20%                    |                 5 |              0.10694 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5436 | >20%                    |                 5 |              0.10872 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5449 | 5-10%                   |                 2 |              0.27245 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5528 | >20%                    |                 5 |              0.11056 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5543 | >20%                    |                 2 |              0.27715 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5578 | >20%                    |                 2 |              0.2789  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5593 | >20%                    |                 2 |              0.27965 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5596 | 15-20%                  |                10 |              0.05596 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5678 | 5-10%                   |                 5 |              0.11356 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5685 | >20%                    |                10 |              0.05685 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5754 | >20%                    |                 5 |              0.11508 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5813 | >20%                    |                 2 |              0.29065 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5857 | <5%                     |                 2 |              0.29285 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5871 | >20%                    |                 5 |              0.11742 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5924 | >20%                    |                 5 |              0.11848 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6093 | >20%                    |                 2 |              0.30465 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6102 | 5-10%                   |                 5 |              0.12204 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.611  | >20%                    |                10 |              0.0611  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6141 | <5%                     |                 5 |              0.12282 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6213 | 15-20%                  |                10 |              0.06213 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6213 | 10-15%                  |                 5 |              0.12426 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6306 | >20%                    |                 2 |              0.3153  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6307 | >20%                    |                10 |              0.06307 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6316 | >20%                    |                10 |              0.06316 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6338 | >20%                    |                 5 |              0.12676 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6381 | >20%                    |                 5 |              0.12762 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6493 | 10-15%                  |                 2 |              0.32465 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6543 | >20%                    |                10 |              0.06543 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6544 | >20%                    |                 5 |              0.13088 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6556 | >20%                    |                 5 |              0.13112 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6718 | >20%                    |                 5 |              0.13436 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6813 | 15-20%                  |                 5 |              0.13626 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6923 | 15-20%                  |                 2 |              0.34615 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.701  | 15-20%                  |                 2 |              0.3505  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7075 | >20%                    |                 5 |              0.1415  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.709  | >20%                    |                10 |              0.0709  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7124 | >20%                    |                 5 |              0.14248 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7266 | <5%                     |                 5 |              0.14532 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7296 | >20%                    |                 5 |              0.14592 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7378 | >20%                    |                 5 |              0.14756 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7386 | 5-10%                   |                 5 |              0.14772 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7419 | <5%                     |                10 |              0.07419 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7422 | 15-20%                  |                10 |              0.07422 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7737 | 15-20%                  |                10 |              0.07737 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7802 | <5%                     |                10 |              0.07802 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7977 | >20%                    |                 5 |              0.15954 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8084 | <5%                     |                10 |              0.08084 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8162 | 15-20%                  |                10 |              0.08162 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8207 | >20%                    |                10 |              0.08207 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.821  | 15-20%                  |                 5 |              0.1642  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8226 | <5%                     |                 5 |              0.16452 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8316 | 15-20%                  |                10 |              0.08316 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8337 | 5-10%                   |                10 |              0.08337 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.837  | >20%                    |                 5 |              0.1674  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.838  | 5-10%                   |                10 |              0.0838  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8388 | >20%                    |                10 |              0.08388 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8664 | >20%                    |                 5 |              0.17328 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8782 | 5-10%                   |                 5 |              0.17564 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8819 | 5-10%                   |                10 |              0.08819 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8911 | 15-20%                  |                10 |              0.08911 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8974 | <5%                     |                10 |              0.08974 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9121 | 5-10%                   |                10 |              0.09121 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9258 | >20%                    |                10 |              0.09258 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9263 | 15-20%                  |                10 |              0.09263 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9318 | >20%                    |                10 |              0.09318 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9386 | >20%                    |                 2 |              0.4693  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9389 | 5-10%                   |                10 |              0.09389 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9539 | 15-20%                  |                10 |              0.09539 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9553 | >20%                    |                10 |              0.09553 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9869 | 5-10%                   |                10 |              0.09869 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9977 | 5-10%                   |                10 |              0.09977 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0096 | >20%                    |                10 |              0.10096 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0168 | 15-20%                  |                10 |              0.10168 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0364 | <5%                     |                10 |              0.10364 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0409 | >20%                    |                 2 |              0.52045 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0463 | <5%                     |                10 |              0.10463 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0464 | >20%                    |                 5 |              0.20928 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.065  | >20%                    |                10 |              0.1065  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.079  | >20%                    |                10 |              0.1079  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0843 | >20%                    |                10 |              0.10843 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0863 | 15-20%                  |                10 |              0.10863 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1031 | 5-10%                   |                10 |              0.11031 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1444 | >20%                    |                10 |              0.11444 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1447 | <5%                     |                 2 |              0.57235 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1464 | >20%                    |                 5 |              0.22928 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1545 | >20%                    |                10 |              0.11545 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2041 | >20%                    |                 5 |              0.24082 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2081 | >20%                    |                10 |              0.12081 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2193 | >20%                    |                10 |              0.12193 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.283  | 15-20%                  |                 5 |              0.2566  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.317  | >20%                    |                10 |              0.1317  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3831 | >20%                    |                 5 |              0.27662 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3968 | >20%                    |                 2 |              0.6984  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.402  | >20%                    |                 2 |              0.701   |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.418  | >20%                    |                 5 |              0.2836  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4379 | 5-10%                   |                10 |              0.14379 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5914 | <5%                     |                10 |              0.15914 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.597  | <5%                     |                 5 |              0.3194  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7151 | 10-15%                  |                10 |              0.17151 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.7162 | 5-10%                   |                 2 |              0.8581  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7696 | >20%                    |                10 |              0.17696 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8758 | <5%                     |                10 |              0.18758 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0073 | 5-10%                   |                10 |              0.20073 |