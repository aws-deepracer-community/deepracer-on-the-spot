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

Data correct as of 2025-05-16 01:53:42.081459, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1602 | >20%                    |                 5 |              0.03204 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1703 | >20%                    |                 2 |              0.08515 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 5-10%                   |                 5 |              0.039   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2018 | <5%                     |                 2 |              0.1009  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2123 | >20%                    |                 5 |              0.04246 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2129 | <5%                     |                 5 |              0.04258 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2164 | >20%                    |                 2 |              0.1082  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2223 | 5-10%                   |                 5 |              0.04446 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2256 | 15-20%                  |                 2 |              0.1128  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2292 | <5%                     |                 2 |              0.1146  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2578 | >20%                    |                 2 |              0.1289  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2612 | <5%                     |                 2 |              0.1306  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2639 | 15-20%                  |                 2 |              0.13195 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2667 | >20%                    |                 2 |              0.13335 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2673 | >20%                    |                 2 |              0.13365 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2694 | 5-10%                   |                 2 |              0.1347  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2711 | 15-20%                  |                 5 |              0.05422 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.273  | >20%                    |                 5 |              0.0546  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2776 | >20%                    |                 2 |              0.1388  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2785 | 15-20%                  |                10 |              0.02785 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2814 | 5-10%                   |                 2 |              0.1407  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.283  | 10-15%                  |                10 |              0.0283  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2876 | 5-10%                   |                 2 |              0.1438  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | 15-20%                  |                10 |              0.0294  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2955 | <5%                     |                 2 |              0.14775 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2963 | 10-15%                  |                 2 |              0.14815 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2981 | >20%                    |                 2 |              0.14905 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3031 | >20%                    |                 2 |              0.15155 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3179 | >20%                    |                 2 |              0.15895 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3249 | 5-10%                   |                 2 |              0.16245 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3269 | >20%                    |                 2 |              0.16345 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3273 | >20%                    |                10 |              0.03273 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3316 | <5%                     |                 5 |              0.06632 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3405 | >20%                    |                 2 |              0.17025 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3446 | 5-10%                   |                 2 |              0.1723  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3457 | >20%                    |                 5 |              0.06914 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.356  | 15-20%                  |                 5 |              0.0712  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3562 | 15-20%                  |                10 |              0.03562 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3578 | >20%                    |                 2 |              0.1789  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3582 | <5%                     |                 2 |              0.1791  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3629 | >20%                    |                 2 |              0.18145 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3661 | 10-15%                  |                 2 |              0.18305 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3681 | >20%                    |                 2 |              0.18405 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3681 | 10-15%                  |                10 |              0.03681 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3688 | >20%                    |                 5 |              0.07376 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3737 | >20%                    |                10 |              0.03737 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3766 | >20%                    |                 5 |              0.07532 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3804 | >20%                    |                 5 |              0.07608 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3847 | >20%                    |                 2 |              0.19235 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.385  | 5-10%                   |                 5 |              0.077   |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3858 | <5%                     |                10 |              0.03858 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3871 | >20%                    |                10 |              0.03871 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3882 | >20%                    |                 2 |              0.1941  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3975 | 5-10%                   |                 5 |              0.0795  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3996 | 10-15%                  |                 2 |              0.1998  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3999 | <5%                     |                10 |              0.03999 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4031 | >20%                    |                 2 |              0.20155 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4065 | 15-20%                  |                 5 |              0.0813  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4075 | 5-10%                   |                 2 |              0.20375 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4231 | <5%                     |                 5 |              0.08462 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4279 | 15-20%                  |                 2 |              0.21395 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.431  | 10-15%                  |                 2 |              0.2155  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4408 | <5%                     |                 2 |              0.2204  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4454 | >20%                    |                 5 |              0.08908 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4495 | 5-10%                   |                 5 |              0.0899  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4507 | >20%                    |                 2 |              0.22535 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4617 | >20%                    |                 5 |              0.09234 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4623 | 10-15%                  |                 5 |              0.09246 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4627 | >20%                    |                 2 |              0.23135 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4637 | 10-15%                  |                10 |              0.04637 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4644 | >20%                    |                 5 |              0.09288 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4698 | >20%                    |                 2 |              0.2349  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4778 | >20%                    |                 2 |              0.2389  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4817 | >20%                    |                 5 |              0.09634 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4861 | >20%                    |                 5 |              0.09722 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4877 | >20%                    |                 5 |              0.09754 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4897 | >20%                    |                 5 |              0.09794 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4902 | >20%                    |                10 |              0.04902 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4938 | >20%                    |                 5 |              0.09876 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4989 | 15-20%                  |                 5 |              0.09978 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4994 | 5-10%                   |                 5 |              0.09988 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5008 | >20%                    |                 2 |              0.2504  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5048 | >20%                    |                 2 |              0.2524  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5089 | >20%                    |                 2 |              0.25445 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.511  | >20%                    |                 2 |              0.2555  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5114 | >20%                    |                 5 |              0.10228 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5137 | 10-15%                  |                 2 |              0.25685 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5161 | <5%                     |                 5 |              0.10322 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5162 | >20%                    |                 2 |              0.2581  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5226 | 10-15%                  |                 5 |              0.10452 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5259 | <5%                     |                 5 |              0.10518 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5338 | >20%                    |                 5 |              0.10676 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.538  | >20%                    |                10 |              0.0538  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.557  | 10-15%                  |                 5 |              0.1114  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.568  | 5-10%                   |                 5 |              0.1136  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5714 | >20%                    |                 5 |              0.11428 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5744 | 10-15%                  |                 5 |              0.11488 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5757 | >20%                    |                 2 |              0.28785 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5847 | >20%                    |                 2 |              0.29235 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5857 | >20%                    |                 5 |              0.11714 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5969 | <5%                     |                 5 |              0.11938 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6013 | >20%                    |                 5 |              0.12026 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6083 | >20%                    |                 2 |              0.30415 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6097 | 10-15%                  |                 2 |              0.30485 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6117 | 10-15%                  |                10 |              0.06117 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6309 | 10-15%                  |                 5 |              0.12618 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6365 | >20%                    |                 5 |              0.1273  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6516 | 15-20%                  |                10 |              0.06516 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6569 | >20%                    |                 2 |              0.32845 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6596 | <5%                     |                 5 |              0.13192 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6669 | 15-20%                  |                 5 |              0.13338 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6683 | 5-10%                   |                10 |              0.06683 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6705 | >20%                    |                 2 |              0.33525 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6818 | >20%                    |                 5 |              0.13636 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6834 | >20%                    |                10 |              0.06834 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.686  | >20%                    |                10 |              0.0686  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6917 | >20%                    |                 5 |              0.13834 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6976 | >20%                    |                 2 |              0.3488  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6989 | >20%                    |                10 |              0.06989 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7147 | <5%                     |                 5 |              0.14294 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7318 | >20%                    |                 2 |              0.3659  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7359 | >20%                    |                 5 |              0.14718 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7403 | <5%                     |                 5 |              0.14806 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7416 | 5-10%                   |                10 |              0.07416 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7451 | <5%                     |                10 |              0.07451 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7488 | >20%                    |                10 |              0.07488 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7549 | >20%                    |                 5 |              0.15098 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7683 | 10-15%                  |                10 |              0.07683 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7901 | >20%                    |                10 |              0.07901 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7956 | 10-15%                  |                10 |              0.07956 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7965 | >20%                    |                 5 |              0.1593  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7977 | 10-15%                  |                10 |              0.07977 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8023 | >20%                    |                 5 |              0.16046 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8033 | 15-20%                  |                10 |              0.08033 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8094 | 15-20%                  |                10 |              0.08094 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8115 | 5-10%                   |                10 |              0.08115 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8135 | <5%                     |                 5 |              0.1627  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8248 | >20%                    |                10 |              0.08248 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8269 | 15-20%                  |                10 |              0.08269 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8371 | 10-15%                  |                10 |              0.08371 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8406 | 15-20%                  |                10 |              0.08406 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8616 | <5%                     |                10 |              0.08616 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8642 | 15-20%                  |                 2 |              0.4321  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8723 | >20%                    |                 2 |              0.43615 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.896  | >20%                    |                 2 |              0.448   |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9107 | >20%                    |                 5 |              0.18214 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9148 | 10-15%                  |                10 |              0.09148 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9149 | 15-20%                  |                10 |              0.09149 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9239 | 15-20%                  |                10 |              0.09239 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9342 | <5%                     |                10 |              0.09342 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9534 | >20%                    |                10 |              0.09534 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.964  | >20%                    |                10 |              0.0964  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9823 | 10-15%                  |                 5 |              0.19646 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9827 | >20%                    |                10 |              0.09827 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0039 | >20%                    |                 2 |              0.50195 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.013  | >20%                    |                10 |              0.1013  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0338 | <5%                     |                10 |              0.10338 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0436 | >20%                    |                10 |              0.10436 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0495 | >20%                    |                10 |              0.10495 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0515 | 10-15%                  |                10 |              0.10515 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0694 | >20%                    |                 5 |              0.21388 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0902 | >20%                    |                 5 |              0.21804 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1    | >20%                    |                 5 |              0.22    |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1243 | <5%                     |                10 |              0.11243 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1545 | 10-15%                  |                 2 |              0.57725 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2124 | >20%                    |                10 |              0.12124 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.228  | >20%                    |                10 |              0.1228  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2435 | >20%                    |                 2 |              0.62175 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2517 | >20%                    |                 5 |              0.25034 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2815 | >20%                    |                10 |              0.12815 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3315 | <5%                     |                 5 |              0.2663  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3789 | 15-20%                  |                10 |              0.13789 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3841 | 5-10%                   |                10 |              0.13841 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3921 | 15-20%                  |                10 |              0.13921 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4074 | 15-20%                  |                10 |              0.14074 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4146 | >20%                    |                10 |              0.14146 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7539 | >20%                    |                10 |              0.17539 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0574 | <5%                     |                10 |              0.20574 |