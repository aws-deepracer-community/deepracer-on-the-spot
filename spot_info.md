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

Data correct as of 2025-04-27 01:54:27.938882, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1183 | >20%                    |                 2 |              0.05915 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1401 | >20%                    |                 2 |              0.07005 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.148  | 15-20%                  |                 5 |              0.0296  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1623 | <5%                     |                 2 |              0.08115 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.188  | <5%                     |                 5 |              0.0376  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1907 | 15-20%                  |                 2 |              0.09535 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2111 | <5%                     |                 2 |              0.10555 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2117 | >20%                    |                 5 |              0.04234 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2234 | 15-20%                  |                 2 |              0.1117  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.24   | 5-10%                   |                 5 |              0.048   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2402 | 5-10%                   |                 2 |              0.1201  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2526 | 15-20%                  |                10 |              0.02526 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2558 | >20%                    |                 2 |              0.1279  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2674 | >20%                    |                 5 |              0.05348 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2726 | 5-10%                   |                 2 |              0.1363  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2804 | >20%                    |                 2 |              0.1402  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2816 | >20%                    |                 2 |              0.1408  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.285  | <5%                     |                 2 |              0.1425  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | 10-15%                  |                10 |              0.02887 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2907 | 5-10%                   |                 2 |              0.14535 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2971 | <5%                     |                 2 |              0.14855 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3003 | <5%                     |                 2 |              0.15015 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3012 | 10-15%                  |                 2 |              0.1506  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3064 | 10-15%                  |                10 |              0.03064 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3074 | >20%                    |                 2 |              0.1537  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3095 | 5-10%                   |                 2 |              0.15475 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3107 | >20%                    |                 2 |              0.15535 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3143 | <5%                     |                 5 |              0.06286 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3169 | >20%                    |                10 |              0.03169 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3177 | 10-15%                  |                10 |              0.03177 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3183 | >20%                    |                10 |              0.03183 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3237 | >20%                    |                 2 |              0.16185 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.33   | 15-20%                  |                10 |              0.033   |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3377 | >20%                    |                 2 |              0.16885 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3385 | >20%                    |                 2 |              0.16925 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3443 | >20%                    |                10 |              0.03443 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3463 | 5-10%                   |                 2 |              0.17315 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3494 | >20%                    |                 5 |              0.06988 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3526 | >20%                    |                 2 |              0.1763  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.355  | >20%                    |                 2 |              0.1775  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3557 | <5%                     |                 5 |              0.07114 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3595 | >20%                    |                 2 |              0.17975 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3605 | >20%                    |                10 |              0.03605 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3621 | >20%                    |                 2 |              0.18105 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.365  | >20%                    |                 5 |              0.073   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3662 | >20%                    |                 5 |              0.07324 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3751 | 10-15%                  |                 2 |              0.18755 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3817 | 5-10%                   |                 5 |              0.07634 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3824 | 15-20%                  |                10 |              0.03824 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3902 | <5%                     |                 2 |              0.1951  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3977 | 5-10%                   |                 2 |              0.19885 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4045 | 5-10%                   |                 5 |              0.0809  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4105 | >20%                    |                 2 |              0.20525 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4114 | 10-15%                  |                 2 |              0.2057  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4141 | >20%                    |                 2 |              0.20705 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4162 | 15-20%                  |                 5 |              0.08324 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4188 | 10-15%                  |                 2 |              0.2094  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4254 | 5-10%                   |                 5 |              0.08508 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4262 | >20%                    |                 5 |              0.08524 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4278 | 15-20%                  |                 5 |              0.08556 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4278 | <5%                     |                 5 |              0.08556 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4391 | 15-20%                  |                 2 |              0.21955 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4421 | >20%                    |                 2 |              0.22105 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4476 | >20%                    |                 5 |              0.08952 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4544 | >20%                    |                 2 |              0.2272  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4605 | 10-15%                  |                 5 |              0.0921  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4629 | >20%                    |                 2 |              0.23145 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4718 | <5%                     |                 5 |              0.09436 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4724 | >20%                    |                 5 |              0.09448 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4724 | >20%                    |                 5 |              0.09448 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4774 | 5-10%                   |                 5 |              0.09548 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4845 | >20%                    |                10 |              0.04845 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4858 | >20%                    |                 5 |              0.09716 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4868 | >20%                    |                 5 |              0.09736 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4884 | >20%                    |                 5 |              0.09768 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4911 | >20%                    |                 5 |              0.09822 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4937 | 10-15%                  |                 5 |              0.09874 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4946 | 5-10%                   |                 5 |              0.09892 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5003 | <5%                     |                 2 |              0.25015 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5015 | >20%                    |                 2 |              0.25075 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5016 | >20%                    |                 2 |              0.2508  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5297 | >20%                    |                 2 |              0.26485 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5321 | 10-15%                  |                 2 |              0.26605 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.533  | 15-20%                  |                 5 |              0.1066  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5399 | 10-15%                  |                10 |              0.05399 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5399 | >20%                    |                 2 |              0.26995 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5533 | >20%                    |                 5 |              0.11066 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5536 | >20%                    |                10 |              0.05536 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.555  | >20%                    |                 5 |              0.111   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.564  | 5-10%                   |                 5 |              0.1128  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5644 | >20%                    |                 2 |              0.2822  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5677 | 10-15%                  |                 2 |              0.28385 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5699 | >20%                    |                 5 |              0.11398 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5722 | 10-15%                  |                 5 |              0.11444 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5743 | >20%                    |                 5 |              0.11486 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5754 | 10-15%                  |                10 |              0.05754 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5768 | 15-20%                  |                10 |              0.05768 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5836 | >20%                    |                 2 |              0.2918  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.584  | >20%                    |                 5 |              0.1168  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5896 | >20%                    |                 2 |              0.2948  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5958 | <5%                     |                 5 |              0.11916 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.608  | >20%                    |                 5 |              0.1216  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6206 | 10-15%                  |                 5 |              0.12412 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6347 | 15-20%                  |                10 |              0.06347 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.636  | >20%                    |                 5 |              0.1272  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6401 | >20%                    |                 2 |              0.32005 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6498 | >20%                    |                 2 |              0.3249  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6633 | <5%                     |                10 |              0.06633 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6672 | 10-15%                  |                10 |              0.06672 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6686 | >20%                    |                 5 |              0.13372 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.678  | >20%                    |                 2 |              0.339   |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6852 | >20%                    |                 2 |              0.3426  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6904 | 15-20%                  |                 5 |              0.13808 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6959 | >20%                    |                 2 |              0.34795 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7047 | >20%                    |                 2 |              0.35235 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7104 | <5%                     |                 5 |              0.14208 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7123 | <5%                     |                 5 |              0.14246 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7125 | >20%                    |                10 |              0.07125 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.714  | >20%                    |                10 |              0.0714  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7157 | >20%                    |                 5 |              0.14314 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7165 | 5-10%                   |                10 |              0.07165 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7183 | 5-10%                   |                10 |              0.07183 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7236 | >20%                    |                10 |              0.07236 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.735  | <5%                     |                 5 |              0.147   |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7452 | >20%                    |                 5 |              0.14904 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7516 | >20%                    |                 5 |              0.15032 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7601 | >20%                    |                 5 |              0.15202 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.768  | >20%                    |                 5 |              0.1536  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7722 | >20%                    |                10 |              0.07722 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7923 | >20%                    |                10 |              0.07923 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7959 | 10-15%                  |                10 |              0.07959 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8008 | 15-20%                  |                10 |              0.08008 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8135 | <5%                     |                10 |              0.08135 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8268 | 10-15%                  |                 5 |              0.16536 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8325 | >20%                    |                 5 |              0.1665  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8356 | 10-15%                  |                10 |              0.08356 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8365 | 15-20%                  |                10 |              0.08365 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8398 | 10-15%                  |                10 |              0.08398 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8408 | >20%                    |                 2 |              0.4204  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8519 | 15-20%                  |                10 |              0.08519 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8528 | 10-15%                  |                10 |              0.08528 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.854  | 5-10%                   |                10 |              0.0854  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8572 | 10-15%                  |                10 |              0.08572 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8589 | >20%                    |                10 |              0.08589 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8647 | >20%                    |                10 |              0.08647 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8729 | >20%                    |                10 |              0.08729 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8956 | <5%                     |                10 |              0.08956 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9002 | <5%                     |                10 |              0.09002 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9072 | >20%                    |                 2 |              0.4536  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9076 | 15-20%                  |                10 |              0.09076 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9446 | 10-15%                  |                 5 |              0.18892 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9464 | 15-20%                  |                10 |              0.09464 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9652 | >20%                    |                10 |              0.09652 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9787 | <5%                     |                10 |              0.09787 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9914 | >20%                    |                10 |              0.09914 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1      | >20%                    |                10 |              0.1     |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.0154 | >20%                    |                 5 |              0.20308 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0196 | >20%                    |                 2 |              0.5098  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0444 | >20%                    |                 2 |              0.5222  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0658 | <5%                     |                10 |              0.10658 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0663 | >20%                    |                10 |              0.10663 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0895 | >20%                    |                10 |              0.10895 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0998 | <5%                     |                10 |              0.10998 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1025 | <5%                     |                 5 |              0.2205  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1168 | >20%                    |                 5 |              0.22336 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.161  | >20%                    |                10 |              0.1161  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1796 | 15-20%                  |                 2 |              0.5898  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1894 | >20%                    |                10 |              0.11894 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1947 | 5-10%                   |                10 |              0.11947 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2139 | >20%                    |                 5 |              0.24278 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2396 | 10-15%                  |                 2 |              0.6198  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2604 | >20%                    |                 5 |              0.25208 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2663 | >20%                    |                10 |              0.12663 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2742 | <5%                     |                 5 |              0.25484 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3803 | >20%                    |                 2 |              0.69015 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.383  | 15-20%                  |                10 |              0.1383  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3831 | 15-20%                  |                10 |              0.13831 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3893 | >20%                    |                 5 |              0.27786 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.688  | >20%                    |                10 |              0.1688  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7267 | 15-20%                  |                10 |              0.17267 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.872  | >20%                    |                10 |              0.1872  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.977  | <5%                     |                10 |              0.1977  |