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

Data correct as of 2024-09-05 07:23:27.941795, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | <5%                     |                 2 |              0.044   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1733 | 15-20%                  |                 5 |              0.03466 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1974 | 10-15%                  |                 2 |              0.0987  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.226  | >20%                    |                 2 |              0.113   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2415 | <5%                     |                 2 |              0.12075 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2517 | 10-15%                  |                 2 |              0.12585 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2546 | 5-10%                   |                 2 |              0.1273  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2577 | <5%                     |                10 |              0.02577 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2639 | <5%                     |                 2 |              0.13195 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2748 | <5%                     |                 2 |              0.1374  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2858 | <5%                     |                 2 |              0.1429  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2974 | <5%                     |                 5 |              0.05948 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2976 | 10-15%                  |                 2 |              0.1488  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3009 | <5%                     |                 2 |              0.15045 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3088 | <5%                     |                 2 |              0.1544  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3159 | <5%                     |                 2 |              0.15795 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3236 | <5%                     |                 2 |              0.1618  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3394 | 15-20%                  |                 5 |              0.06788 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3474 | <5%                     |                 2 |              0.1737  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3498 | <5%                     |                 2 |              0.1749  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3571 | <5%                     |                 2 |              0.17855 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3654 | <5%                     |                 2 |              0.1827  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | <5%                     |                10 |              0.03698 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3744 | <5%                     |                 5 |              0.07488 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3781 | >20%                    |                10 |              0.03781 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3784 | <5%                     |                 5 |              0.07568 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3855 | 10-15%                  |                 2 |              0.19275 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | 5-10%                   |                10 |              0.04161 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4181 | >20%                    |                 2 |              0.20905 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4182 | >20%                    |                 5 |              0.08364 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4285 | 15-20%                  |                 5 |              0.0857  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4332 | >20%                    |                 2 |              0.2166  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4421 | 10-15%                  |                 2 |              0.22105 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4472 | 10-15%                  |                 5 |              0.08944 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4525 | 15-20%                  |                 5 |              0.0905  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4538 | 5-10%                   |                 2 |              0.2269  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.456  | <5%                     |                 5 |              0.0912  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4653 | <5%                     |                 2 |              0.23265 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4669 | 10-15%                  |                 5 |              0.09338 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4689 | >20%                    |                 2 |              0.23445 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4775 | >20%                    |                 5 |              0.0955  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4777 | >20%                    |                 5 |              0.09554 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4788 | <5%                     |                 5 |              0.09576 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4795 | <5%                     |                 5 |              0.0959  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4883 | 5-10%                   |                 5 |              0.09766 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4892 | >20%                    |                 2 |              0.2446  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4912 | <5%                     |                 5 |              0.09824 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.506  | >20%                    |                 2 |              0.253   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5068 | 5-10%                   |                 5 |              0.10136 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.509  | >20%                    |                 5 |              0.1018  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5101 | <5%                     |                 5 |              0.10202 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.5108 | <5%                     |                 2 |              0.2554  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.5111 | <5%                     |                 2 |              0.25555 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5144 | 10-15%                  |                 5 |              0.10288 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.5156 | 10-15%                  |                 2 |              0.2578  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5166 | <5%                     |                10 |              0.05166 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5338 | <5%                     |                 2 |              0.2669  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5705 | >20%                    |                 5 |              0.1141  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5726 | 5-10%                   |                 2 |              0.2863  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5766 | >20%                    |                 2 |              0.2883  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5895 | <5%                     |                 5 |              0.1179  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5898 | >20%                    |                 2 |              0.2949  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.594  | >20%                    |                 2 |              0.297   |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.5975 | <5%                     |                10 |              0.05975 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5975 | <5%                     |                 5 |              0.1195  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5988 | 15-20%                  |                 5 |              0.11976 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6022 | 10-15%                  |                 2 |              0.3011  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6108 | >20%                    |                 5 |              0.12216 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6171 | >20%                    |                 5 |              0.12342 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6237 | <5%                     |                10 |              0.06237 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6379 | 10-15%                  |                 5 |              0.12758 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6454 | >20%                    |                 5 |              0.12908 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.6536 | <5%                     |                 5 |              0.13072 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6773 | <5%                     |                10 |              0.06773 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6879 | <5%                     |                 5 |              0.13758 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6911 | >20%                    |                10 |              0.06911 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7247 | >20%                    |                 2 |              0.36235 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7307 | <5%                     |                 5 |              0.14614 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7354 | <5%                     |                10 |              0.07354 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.749  | 10-15%                  |                10 |              0.0749  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7523 | 15-20%                  |                10 |              0.07523 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7594 | <5%                     |                 5 |              0.15188 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7601 | 10-15%                  |                10 |              0.07601 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7608 | >20%                    |                10 |              0.07608 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7759 | >20%                    |                 5 |              0.15518 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7843 | >20%                    |                 5 |              0.15686 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7979 | 10-15%                  |                10 |              0.07979 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8026 | >20%                    |                10 |              0.08026 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.806  | <5%                     |                10 |              0.0806  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8107 | 5-10%                   |                10 |              0.08107 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8238 | >20%                    |                10 |              0.08238 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.8327 | <5%                     |                10 |              0.08327 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8575 | <5%                     |                10 |              0.08575 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8688 | <5%                     |                10 |              0.08688 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8911 | >20%                    |                10 |              0.08911 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.897  | >20%                    |                 5 |              0.1794  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9252 | <5%                     |                10 |              0.09252 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9254 | 10-15%                  |                10 |              0.09254 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9349 | >20%                    |                10 |              0.09349 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9378 | >20%                    |                10 |              0.09378 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9603 | <5%                     |                10 |              0.09603 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9956 | 10-15%                  |                10 |              0.09956 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0007 | >20%                    |                10 |              0.10007 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      1.0007 | >20%                    |                 5 |              0.20014 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.0097 | 5-10%                   |                10 |              0.10097 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0408 | 10-15%                  |                10 |              0.10408 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0413 | >20%                    |                10 |              0.10413 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0919 | <5%                     |                10 |              0.10919 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1641 | >20%                    |                10 |              0.11641 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.191  | >20%                    |                10 |              0.1191  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2033 | >20%                    |                10 |              0.12033 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4445 | >20%                    |                10 |              0.14445 |