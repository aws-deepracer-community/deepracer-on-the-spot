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

Data correct as of 2026-03-11 02:27:20.908574, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1164 | >20%                    |                 2 |              0.0582  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1221 | 10-15%                  |                 2 |              0.06105 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1474 | 15-20%                  |                 5 |              0.02948 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1649 | >20%                    |                 2 |              0.08245 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.1866 | <5%                     |                 2 |              0.0933  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2244 | 10-15%                  |                 2 |              0.1122  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2272 | 15-20%                  |                10 |              0.02272 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2407 | >20%                    |                 5 |              0.04814 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2427 | >20%                    |                 2 |              0.12135 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2472 | >20%                    |                 2 |              0.1236  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2485 | >20%                    |                 2 |              0.12425 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2577 | 5-10%                   |                10 |              0.02577 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2635 | >20%                    |                 2 |              0.13175 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2653 | 15-20%                  |                 2 |              0.13265 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.28   | >20%                    |                 2 |              0.14    |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.2812 | <5%                     |                 2 |              0.1406  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2913 | 10-15%                  |                 2 |              0.14565 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2948 | 15-20%                  |                 2 |              0.1474  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2971 | >20%                    |                 5 |              0.05942 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2989 | >20%                    |                 2 |              0.14945 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.304  | >20%                    |                 2 |              0.152   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3052 | >20%                    |                 2 |              0.1526  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3057 | >20%                    |                 2 |              0.15285 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3079 | >20%                    |                 2 |              0.15395 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3113 | 5-10%                   |                 2 |              0.15565 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3254 | 5-10%                   |                10 |              0.03254 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3266 | >20%                    |                 5 |              0.06532 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3318 | <5%                     |                 5 |              0.06636 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3329 | >20%                    |                 5 |              0.06658 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3351 | 5-10%                   |                 5 |              0.06702 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3404 | <5%                     |                 5 |              0.06808 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3414 | >20%                    |                 5 |              0.06828 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3553 | 5-10%                   |                 2 |              0.17765 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3556 | <5%                     |                 2 |              0.1778  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3561 | >20%                    |                 5 |              0.07122 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3572 | >20%                    |                 5 |              0.07144 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.358  | 10-15%                  |                 2 |              0.179   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3582 | >20%                    |                 5 |              0.07164 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3637 | >20%                    |                10 |              0.03637 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3643 | <5%                     |                 5 |              0.07286 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3676 | 15-20%                  |                 2 |              0.1838  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3711 | >20%                    |                10 |              0.03711 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3734 | 5-10%                   |                 2 |              0.1867  |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3769 | <5%                     |                10 |              0.03769 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.3813 | 5-10%                   |                 5 |              0.07626 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.3883 | >20%                    |                10 |              0.03883 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3951 | >20%                    |                 2 |              0.19755 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3951 | >20%                    |                 5 |              0.07902 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.396  | >20%                    |                 2 |              0.198   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3973 | 5-10%                   |                 2 |              0.19865 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4002 | 15-20%                  |                 5 |              0.08004 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4015 | >20%                    |                 2 |              0.20075 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.4025 | 15-20%                  |                 5 |              0.0805  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4041 | <5%                     |                 5 |              0.08082 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4094 | >20%                    |                 2 |              0.2047  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4095 | 5-10%                   |                 2 |              0.20475 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4169 | <5%                     |                 2 |              0.20845 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4176 | >20%                    |                 2 |              0.2088  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4215 | 15-20%                  |                 2 |              0.21075 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4264 | >20%                    |                10 |              0.04264 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.429  | 10-15%                  |                 5 |              0.0858  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4312 | >20%                    |                 5 |              0.08624 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4344 | 15-20%                  |                10 |              0.04344 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4365 | >20%                    |                 2 |              0.21825 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4392 | >20%                    |                 2 |              0.2196  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4413 | 15-20%                  |                 2 |              0.22065 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4448 | 15-20%                  |                 2 |              0.2224  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4452 | <5%                     |                10 |              0.04452 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4455 | 5-10%                   |                 5 |              0.0891  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4455 | 15-20%                  |                 5 |              0.0891  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.461  | >20%                    |                 5 |              0.0922  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4621 | >20%                    |                 5 |              0.09242 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4672 | 5-10%                   |                 2 |              0.2336  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4767 | >20%                    |                10 |              0.04767 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4777 | >20%                    |                 5 |              0.09554 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4807 | 5-10%                   |                 2 |              0.24035 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4815 | >20%                    |                 5 |              0.0963  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4855 | >20%                    |                10 |              0.04855 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4886 | >20%                    |                 2 |              0.2443  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4963 | <5%                     |                10 |              0.04963 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4969 | >20%                    |                 5 |              0.09938 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5124 | >20%                    |                 2 |              0.2562  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5145 | 15-20%                  |                 5 |              0.1029  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5243 | <5%                     |                10 |              0.05243 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5261 | >20%                    |                 5 |              0.10522 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5268 | >20%                    |                 2 |              0.2634  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5298 | <5%                     |                 5 |              0.10596 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5354 | >20%                    |                 5 |              0.10708 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5377 | <5%                     |                 5 |              0.10754 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5394 | 5-10%                   |                 5 |              0.10788 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5427 | >20%                    |                 2 |              0.27135 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5486 |                         |                 2 |              0.2743  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5493 | >20%                    |                 2 |              0.27465 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5537 | 15-20%                  |                10 |              0.05537 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.556  | >20%                    |                 5 |              0.1112  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5579 | >20%                    |                 2 |              0.27895 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5627 | 15-20%                  |                10 |              0.05627 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5664 | 15-20%                  |                10 |              0.05664 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5756 | >20%                    |                 5 |              0.11512 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5783 | >20%                    |                10 |              0.05783 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.58   | 5-10%                   |                 2 |              0.29    |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5801 | >20%                    |                10 |              0.05801 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5875 | >20%                    |                 5 |              0.1175  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5916 | >20%                    |                 5 |              0.11832 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5996 | <5%                     |                10 |              0.05996 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6014 | >20%                    |                 2 |              0.3007  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6025 | 5-10%                   |                 5 |              0.1205  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6058 | >20%                    |                 5 |              0.12116 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6161 | >20%                    |                 5 |              0.12322 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6171 | 5-10%                   |                 2 |              0.30855 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6173 | <5%                     |                10 |              0.06173 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6236 | >20%                    |                10 |              0.06236 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.626  | >20%                    |                 2 |              0.313   |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6272 | >20%                    |                10 |              0.06272 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6293 | >20%                    |                10 |              0.06293 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6303 | >20%                    |                 5 |              0.12606 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6322 | 15-20%                  |                 2 |              0.3161  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6432 | 5-10%                   |                 5 |              0.12864 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6524 | >20%                    |                10 |              0.06524 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6607 | >20%                    |                 5 |              0.13214 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6616 | >20%                    |                 5 |              0.13232 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6627 | >20%                    |                 2 |              0.33135 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6843 | 10-15%                  |                 5 |              0.13686 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6849 | >20%                    |                10 |              0.06849 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6872 | >20%                    |                10 |              0.06872 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6946 |                         |                 5 |              0.13892 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6975 | 15-20%                  |                10 |              0.06975 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6995 | <5%                     |                10 |              0.06995 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7189 | >20%                    |                 5 |              0.14378 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7359 | >20%                    |                 5 |              0.14718 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7394 | 10-15%                  |                10 |              0.07394 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7431 | >20%                    |                 5 |              0.14862 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.75   | >20%                    |                 5 |              0.15    |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7504 | >20%                    |                10 |              0.07504 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7743 | >20%                    |                10 |              0.07743 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7843 | <5%                     |                10 |              0.07843 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7879 | <5%                     |                 5 |              0.15758 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.791  | <5%                     |                10 |              0.0791  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8159 | >20%                    |                10 |              0.08159 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8183 | >20%                    |                 5 |              0.16366 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8199 | >20%                    |                 5 |              0.16398 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8373 | >20%                    |                 2 |              0.41865 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8453 | >20%                    |                10 |              0.08453 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.846  | <5%                     |                 5 |              0.1692  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8544 | 5-10%                   |                10 |              0.08544 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8549 | >20%                    |                 5 |              0.17098 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8613 | >20%                    |                10 |              0.08613 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8671 | 5-10%                   |                10 |              0.08671 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8672 | >20%                    |                10 |              0.08672 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8757 | >20%                    |                 5 |              0.17514 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8824 | >20%                    |                10 |              0.08824 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.89   | 10-15%                  |                10 |              0.089   |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8968 | <5%                     |                10 |              0.08968 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9089 | >20%                    |                 5 |              0.18178 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9231 | >20%                    |                 2 |              0.46155 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9342 | >20%                    |                10 |              0.09342 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9456 | 10-15%                  |                 2 |              0.4728  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9574 | >20%                    |                10 |              0.09574 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9681 | >20%                    |                10 |              0.09681 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9685 | 15-20%                  |                10 |              0.09685 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9783 | >20%                    |                10 |              0.09783 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9874 | >20%                    |                 2 |              0.4937  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9899 | 5-10%                   |                 5 |              0.19798 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9969 | >20%                    |                 2 |              0.49845 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0078 | 5-10%                   |                10 |              0.10078 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0269 | >20%                    |                10 |              0.10269 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.057  |                         |                10 |              0.1057  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0747 | 15-20%                  |                10 |              0.10747 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1014 | >20%                    |                10 |              0.11014 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1687 | <5%                     |                10 |              0.11687 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2259 | 10-15%                  |                 5 |              0.24518 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2455 | >20%                    |                 2 |              0.62275 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2584 | 10-15%                  |                10 |              0.12584 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.261  | >20%                    |                10 |              0.1261  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4042 | 10-15%                  |                 5 |              0.28084 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4083 | 15-20%                  |                10 |              0.14083 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4404 | >20%                    |                 2 |              0.7202  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4675 | >20%                    |                 5 |              0.2935  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5869 | >20%                    |                10 |              0.15869 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.64   | >20%                    |                10 |              0.164   |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6984 | >20%                    |                 2 |              0.8492  |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.7178 | <5%                     |                 5 |              0.34356 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.265  | 10-15%                  |                10 |              0.2265  |