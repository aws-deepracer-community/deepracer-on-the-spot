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

Data correct as of 2024-09-06 01:25:05.370806, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | <5%                     |                 2 |              0.044   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1797 | 15-20%                  |                 5 |              0.03594 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2033 | 10-15%                  |                 2 |              0.10165 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2273 | 15-20%                  |                 2 |              0.11365 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2405 | <5%                     |                 2 |              0.12025 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2516 | 10-15%                  |                 2 |              0.1258  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2546 | 5-10%                   |                 2 |              0.1273  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2639 | <5%                     |                 2 |              0.13195 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.276  | <5%                     |                 2 |              0.138   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2831 | <5%                     |                 2 |              0.14155 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2906 | <5%                     |                 5 |              0.05812 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2945 | 10-15%                  |                 2 |              0.14725 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3029 | <5%                     |                 2 |              0.15145 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3129 | <5%                     |                 2 |              0.15645 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3177 | <5%                     |                 2 |              0.15885 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3212 | <5%                     |                 2 |              0.1606  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3416 | 15-20%                  |                 5 |              0.06832 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3498 | <5%                     |                 2 |              0.1749  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3514 | <5%                     |                 2 |              0.1757  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.36   | <5%                     |                 2 |              0.18    |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3654 | <5%                     |                 2 |              0.1827  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.369  | >20%                    |                10 |              0.0369  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | <5%                     |                10 |              0.03698 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3749 | <5%                     |                 5 |              0.07498 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.379  | <5%                     |                 5 |              0.0758  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3866 | 10-15%                  |                 2 |              0.1933  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4093 | >20%                    |                 5 |              0.08186 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | 10-15%                  |                10 |              0.04161 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4168 | >20%                    |                 2 |              0.2084  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4284 | 15-20%                  |                 5 |              0.08568 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4313 | >20%                    |                 2 |              0.21565 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4421 | 10-15%                  |                 2 |              0.22105 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.447  | 10-15%                  |                 5 |              0.0894  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4471 | 5-10%                   |                 2 |              0.22355 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4525 | 15-20%                  |                 5 |              0.0905  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4577 | <5%                     |                 5 |              0.09154 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4578 | >20%                    |                 5 |              0.09156 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4653 | <5%                     |                 2 |              0.23265 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4682 | >20%                    |                 2 |              0.2341  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4686 | 10-15%                  |                 5 |              0.09372 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4788 | <5%                     |                 5 |              0.09576 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4795 | <5%                     |                 5 |              0.0959  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4796 | >20%                    |                 5 |              0.09592 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.485  | >20%                    |                 2 |              0.2425  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4883 | 5-10%                   |                 5 |              0.09766 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4912 | <5%                     |                 5 |              0.09824 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4987 | <5%                     |                10 |              0.04987 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5032 | >20%                    |                 2 |              0.2516  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5037 | <5%                     |                 5 |              0.10074 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5068 | 5-10%                   |                 5 |              0.10136 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.509  | >20%                    |                 5 |              0.1018  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.5095 | <5%                     |                 2 |              0.25475 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5132 | 5-10%                   |                 5 |              0.10264 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.5167 | 10-15%                  |                 2 |              0.25835 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.5266 | <5%                     |                 2 |              0.2633  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5594 | <5%                     |                 2 |              0.2797  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5635 | >20%                    |                 2 |              0.28175 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5661 | >20%                    |                 5 |              0.11322 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5803 | >20%                    |                 2 |              0.29015 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5866 | <5%                     |                 5 |              0.11732 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5927 | <5%                     |                 5 |              0.11854 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5952 | 5-10%                   |                 2 |              0.2976  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5962 | >20%                    |                 2 |              0.2981  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5977 | 15-20%                  |                 5 |              0.11954 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.6046 | <5%                     |                10 |              0.06046 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6101 | >20%                    |                 5 |              0.12202 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6114 | <5%                     |                10 |              0.06114 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6132 | 10-15%                  |                 2 |              0.3066  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6143 | >20%                    |                 5 |              0.12286 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6174 | 10-15%                  |                 5 |              0.12348 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6417 | >20%                    |                 5 |              0.12834 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.6513 | <5%                     |                 5 |              0.13026 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6882 | <5%                     |                10 |              0.06882 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7013 | >20%                    |                10 |              0.07013 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7092 | <5%                     |                 5 |              0.14184 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.715  | 10-15%                  |                10 |              0.0715  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7159 | >20%                    |                 2 |              0.35795 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7354 | <5%                     |                10 |              0.07354 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7369 | 15-20%                  |                10 |              0.07369 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7486 | <5%                     |                 5 |              0.14972 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7657 | >20%                    |                10 |              0.07657 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7664 | 10-15%                  |                10 |              0.07664 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7698 | >20%                    |                 5 |              0.15396 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7863 | <5%                     |                 5 |              0.15726 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7874 | >20%                    |                 5 |              0.15748 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7979 | 10-15%                  |                10 |              0.07979 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.806  | <5%                     |                10 |              0.0806  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8083 | 5-10%                   |                10 |              0.08083 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8131 | >20%                    |                10 |              0.08131 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8207 | >20%                    |                10 |              0.08207 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.8336 | <5%                     |                10 |              0.08336 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8463 | <5%                     |                10 |              0.08463 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8703 | <5%                     |                10 |              0.08703 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8911 | >20%                    |                10 |              0.08911 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9027 | >20%                    |                 5 |              0.18054 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9134 | <5%                     |                10 |              0.09134 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9329 | >20%                    |                10 |              0.09329 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9331 | >20%                    |                10 |              0.09331 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9443 | 10-15%                  |                10 |              0.09443 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9626 | <5%                     |                10 |              0.09626 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.9958 | >20%                    |                 5 |              0.19916 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9998 | 10-15%                  |                10 |              0.09998 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0028 | >20%                    |                10 |              0.10028 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0281 | >20%                    |                10 |              0.10281 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.0358 | 5-10%                   |                10 |              0.10358 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0445 | 10-15%                  |                10 |              0.10445 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.117  | <5%                     |                10 |              0.1117  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1568 | >20%                    |                10 |              0.11568 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1963 | >20%                    |                10 |              0.11963 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2115 | >20%                    |                10 |              0.12115 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4389 | >20%                    |                10 |              0.14389 |