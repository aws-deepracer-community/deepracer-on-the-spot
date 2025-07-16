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

Data correct as of 2025-07-16 02:03:20.474341, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.124  | >20%                    |                 2 |              0.062   |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1455 | <5%                     |                 2 |              0.07275 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1766 | 10-15%                  |                 5 |              0.03532 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1778 | 5-10%                   |                 2 |              0.0889  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1852 | >20%                    |                 5 |              0.03704 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1855 | >20%                    |                 2 |              0.09275 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2017 | >20%                    |                 5 |              0.04034 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2026 | >20%                    |                 5 |              0.04052 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2231 | >20%                    |                10 |              0.02231 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.225  | >20%                    |                 2 |              0.1125  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2262 | >20%                    |                 2 |              0.1131  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.234  | 10-15%                  |                 5 |              0.0468  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2389 | 15-20%                  |                 2 |              0.11945 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.239  | 5-10%                   |                 2 |              0.1195  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2401 | >20%                    |                 2 |              0.12005 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2434 | >20%                    |                 2 |              0.1217  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2438 | 15-20%                  |                 2 |              0.1219  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2517 | >20%                    |                10 |              0.02517 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2521 | >20%                    |                 2 |              0.12605 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2874 | 5-10%                   |                10 |              0.02874 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2878 | >20%                    |                 2 |              0.1439  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | >20%                    |                10 |              0.02887 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.294  | <5%                     |                 2 |              0.147   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3052 | >20%                    |                 5 |              0.06104 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3071 | >20%                    |                10 |              0.03071 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3078 | 5-10%                   |                 2 |              0.1539  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3105 | >20%                    |                 2 |              0.15525 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3118 | >20%                    |                 2 |              0.1559  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3136 | 10-15%                  |                 2 |              0.1568  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3183 | >20%                    |                 2 |              0.15915 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3209 | 15-20%                  |                 2 |              0.16045 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3309 | <5%                     |                 2 |              0.16545 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3359 | >20%                    |                 2 |              0.16795 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3516 | 10-15%                  |                 5 |              0.07032 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3579 | <5%                     |                 5 |              0.07158 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3587 | >20%                    |                 2 |              0.17935 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3598 | >20%                    |                 2 |              0.1799  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.365  | >20%                    |                 2 |              0.1825  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3683 | 15-20%                  |                 5 |              0.07366 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3854 | 5-10%                   |                 2 |              0.1927  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3865 | >20%                    |                 5 |              0.0773  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3898 | >20%                    |                 2 |              0.1949  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3924 | >20%                    |                 2 |              0.1962  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3932 | >20%                    |                 5 |              0.07864 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3959 | >20%                    |                 5 |              0.07918 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.401  | >20%                    |                 2 |              0.2005  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4077 | >20%                    |                 2 |              0.20385 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4106 | >20%                    |                 2 |              0.2053  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4169 | >20%                    |                 5 |              0.08338 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4308 | 15-20%                  |                 5 |              0.08616 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4344 | <5%                     |                 2 |              0.2172  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4371 | 5-10%                   |                 2 |              0.21855 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4382 | 10-15%                  |                 2 |              0.2191  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4465 | >20%                    |                 5 |              0.0893  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4477 | >20%                    |                 5 |              0.08954 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4574 | >20%                    |                 5 |              0.09148 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4592 | 5-10%                   |                 2 |              0.2296  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4592 | >20%                    |                 5 |              0.09184 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4598 | >20%                    |                 2 |              0.2299  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4722 | >20%                    |                 2 |              0.2361  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4728 | >20%                    |                 2 |              0.2364  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.482  | >20%                    |                 2 |              0.241   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4897 | <5%                     |                 5 |              0.09794 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4908 | >20%                    |                 2 |              0.2454  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4965 | 15-20%                  |                 2 |              0.24825 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4966 | >20%                    |                 2 |              0.2483  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4973 | >20%                    |                 2 |              0.24865 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4978 | >20%                    |                 5 |              0.09956 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4991 | >20%                    |                10 |              0.04991 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.504  | >20%                    |                 5 |              0.1008  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5053 | <5%                     |                 2 |              0.25265 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5077 | 15-20%                  |                 5 |              0.10154 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.509  | 15-20%                  |                 5 |              0.1018  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5093 | >20%                    |                 5 |              0.10186 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.5109 | >20%                    |                10 |              0.05109 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.511  | >20%                    |                 5 |              0.1022  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5116 | 10-15%                  |                 5 |              0.10232 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5256 | >20%                    |                 5 |              0.10512 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5326 | >20%                    |                 2 |              0.2663  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5366 | >20%                    |                 2 |              0.2683  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.542  | <5%                     |                 5 |              0.1084  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5442 | >20%                    |                 5 |              0.10884 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5481 | >20%                    |                 2 |              0.27405 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5538 | >20%                    |                 2 |              0.2769  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5591 | >20%                    |                10 |              0.05591 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5598 | >20%                    |                 5 |              0.11196 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5663 | >20%                    |                 5 |              0.11326 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5684 | >20%                    |                10 |              0.05684 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5722 | >20%                    |                 2 |              0.2861  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5843 | <5%                     |                 5 |              0.11686 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5893 | >20%                    |                 2 |              0.29465 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5924 | >20%                    |                10 |              0.05924 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5939 | >20%                    |                10 |              0.05939 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5984 | >20%                    |                 5 |              0.11968 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5986 | 15-20%                  |                10 |              0.05986 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5992 | <5%                     |                10 |              0.05992 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5998 | 10-15%                  |                 5 |              0.11996 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6069 | 10-15%                  |                 5 |              0.12138 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.609  | 15-20%                  |                10 |              0.0609  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6157 | >20%                    |                 5 |              0.12314 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6252 | >20%                    |                 2 |              0.3126  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.626  | >20%                    |                10 |              0.0626  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.63   | >20%                    |                 5 |              0.126   |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6348 | 10-15%                  |                 2 |              0.3174  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6452 | >20%                    |                 5 |              0.12904 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6453 | 5-10%                   |                 2 |              0.32265 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.649  | >20%                    |                 5 |              0.1298  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6541 | >20%                    |                 2 |              0.32705 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6715 | 5-10%                   |                 5 |              0.1343  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6874 | >20%                    |                10 |              0.06874 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6893 | >20%                    |                 5 |              0.13786 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6944 | 15-20%                  |                 5 |              0.13888 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6995 | 5-10%                   |                 5 |              0.1399  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7069 | >20%                    |                 5 |              0.14138 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7077 | >20%                    |                 5 |              0.14154 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.71   | >20%                    |                 5 |              0.142   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7243 | 10-15%                  |                10 |              0.07243 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7292 | >20%                    |                 2 |              0.3646  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7341 | <5%                     |                 5 |              0.14682 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7434 | 10-15%                  |                10 |              0.07434 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.778  | 15-20%                  |                10 |              0.0778  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7814 | 5-10%                   |                10 |              0.07814 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7856 | >20%                    |                 5 |              0.15712 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7866 | >20%                    |                10 |              0.07866 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7872 | >20%                    |                10 |              0.07872 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8053 | <5%                     |                10 |              0.08053 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8093 | 10-15%                  |                 5 |              0.16186 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.811  | >20%                    |                 5 |              0.1622  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8142 | 5-10%                   |                10 |              0.08142 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8169 | 10-15%                  |                10 |              0.08169 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8256 | 5-10%                   |                10 |              0.08256 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.837  | >20%                    |                10 |              0.0837  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8389 | >20%                    |                10 |              0.08389 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8476 | >20%                    |                 5 |              0.16952 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8552 | <5%                     |                 5 |              0.17104 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8565 | 10-15%                  |                10 |              0.08565 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8641 | <5%                     |                10 |              0.08641 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8699 | >20%                    |                 5 |              0.17398 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8816 | >20%                    |                10 |              0.08816 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8931 | 5-10%                   |                10 |              0.08931 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8965 | 15-20%                  |                10 |              0.08965 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9164 | >20%                    |                10 |              0.09164 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9341 | 15-20%                  |                10 |              0.09341 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9362 | >20%                    |                10 |              0.09362 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9492 | 15-20%                  |                10 |              0.09492 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9518 | >20%                    |                10 |              0.09518 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9608 | 5-10%                   |                10 |              0.09608 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9654 | >20%                    |                10 |              0.09654 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9959 | >20%                    |                10 |              0.09959 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0266 | <5%                     |                10 |              0.10266 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0286 | <5%                     |                10 |              0.10286 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0366 | >20%                    |                 5 |              0.20732 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0394 | >20%                    |                 2 |              0.5197  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0423 | >20%                    |                10 |              0.10423 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0425 | >20%                    |                 5 |              0.2085  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0529 | <5%                     |                10 |              0.10529 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0655 | >20%                    |                 2 |              0.53275 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0849 | 15-20%                  |                10 |              0.10849 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0868 | >20%                    |                10 |              0.10868 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0935 | >20%                    |                10 |              0.10935 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1276 | <5%                     |                 2 |              0.5638  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1524 | >20%                    |                10 |              0.11524 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1615 | >20%                    |                10 |              0.11615 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2515 | <5%                     |                 5 |              0.2503  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2538 | >20%                    |                10 |              0.12538 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2632 | >20%                    |                 5 |              0.25264 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2785 | 15-20%                  |                10 |              0.12785 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2848 | >20%                    |                 5 |              0.25696 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.309  | >20%                    |                 2 |              0.6545  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3189 | >20%                    |                 5 |              0.26378 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3609 | >20%                    |                10 |              0.13609 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3637 | >20%                    |                 2 |              0.68185 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4106 | 10-15%                  |                10 |              0.14106 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.428  | <5%                     |                10 |              0.1428  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4887 | <5%                     |                 5 |              0.29774 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5593 | 15-20%                  |                10 |              0.15593 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.7936 | <5%                     |                 2 |              0.8968  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.835  | <5%                     |                10 |              0.1835  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8613 | >20%                    |                10 |              0.18613 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0011 | 5-10%                   |                10 |              0.20011 |