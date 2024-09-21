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

Data correct as of 2024-09-21 01:26:04.770205, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0933 | <5%                     |                 2 |              0.04665 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1742 | 5-10%                   |                 2 |              0.0871  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2083 | 15-20%                  |                 2 |              0.10415 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2205 | <5%                     |                 2 |              0.11025 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2368 | 15-20%                  |                 2 |              0.1184  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2397 | <5%                     |                 2 |              0.11985 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2404 | 5-10%                   |                 2 |              0.1202  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.256  | <5%                     |                 2 |              0.128   |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2602 | 15-20%                  |                 5 |              0.05204 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2691 | >20%                    |                10 |              0.02691 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2738 | <5%                     |                 2 |              0.1369  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2871 | 10-15%                  |                 2 |              0.14355 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2923 | <5%                     |                 2 |              0.14615 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.2927 | <5%                     |                 5 |              0.05854 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2951 | 15-20%                  |                 5 |              0.05902 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3023 | <5%                     |                 2 |              0.15115 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3035 | <5%                     |                 2 |              0.15175 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.308  | 5-10%                   |                 2 |              0.154   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3169 | <5%                     |                 2 |              0.15845 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3244 | >20%                    |                 5 |              0.06488 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3522 | 5-10%                   |                 5 |              0.07044 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3526 | <5%                     |                 5 |              0.07052 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3567 | <5%                     |                 5 |              0.07134 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3593 | <5%                     |                 2 |              0.17965 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3627 | 10-15%                  |                 2 |              0.18135 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3629 | <5%                     |                 2 |              0.18145 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3685 | 15-20%                  |                10 |              0.03685 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3686 | <5%                     |                10 |              0.03686 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3766 | <5%                     |                 5 |              0.07532 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3772 | <5%                     |                 2 |              0.1886  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3791 | <5%                     |                 2 |              0.18955 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3885 | >20%                    |                 2 |              0.19425 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3959 | >20%                    |                 2 |              0.19795 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4061 | 5-10%                   |                 2 |              0.20305 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4114 | <5%                     |                10 |              0.04114 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.417  | >20%                    |                 2 |              0.2085  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4181 | 15-20%                  |                 5 |              0.08362 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4198 | 5-10%                   |                 5 |              0.08396 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4229 | <5%                     |                 2 |              0.21145 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4399 | <5%                     |                 2 |              0.21995 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4442 | <5%                     |                 5 |              0.08884 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4486 | 10-15%                  |                 2 |              0.2243  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4518 | 5-10%                   |                 5 |              0.09036 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4545 | >20%                    |                 2 |              0.22725 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4555 | >20%                    |                 5 |              0.0911  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4571 | <5%                     |                 5 |              0.09142 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.4651 | >20%                    |                 5 |              0.09302 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4688 | <5%                     |                 5 |              0.09376 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4714 | 5-10%                   |                 5 |              0.09428 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4789 | 5-10%                   |                 5 |              0.09578 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4902 | 15-20%                  |                 5 |              0.09804 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4974 | 15-20%                  |                 2 |              0.2487  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5017 | >20%                    |                 2 |              0.25085 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5059 | 10-15%                  |                 5 |              0.10118 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.5123 | <5%                     |                10 |              0.05123 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5171 | <5%                     |                 5 |              0.10342 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5402 | <5%                     |                 5 |              0.10804 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5434 | 10-15%                  |                10 |              0.05434 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5496 | <5%                     |                 5 |              0.10992 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5537 | >20%                    |                 5 |              0.11074 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5647 | <5%                     |                 5 |              0.11294 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5784 | >20%                    |                 5 |              0.11568 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5805 | 15-20%                  |                 2 |              0.29025 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5828 | >20%                    |                 2 |              0.2914  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5962 | >20%                    |                 5 |              0.11924 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5971 | 5-10%                   |                 5 |              0.11942 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6077 | >20%                    |                 5 |              0.12154 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6086 | 5-10%                   |                10 |              0.06086 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6241 | 15-20%                  |                 2 |              0.31205 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6312 | >20%                    |                 5 |              0.12624 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6392 | >20%                    |                10 |              0.06392 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6394 | >20%                    |                10 |              0.06394 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6551 | >20%                    |                10 |              0.06551 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6648 | <5%                     |                10 |              0.06648 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6747 | <5%                     |                10 |              0.06747 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.686  | 5-10%                   |                 5 |              0.1372  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6901 | >20%                    |                 2 |              0.34505 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7408 | 15-20%                  |                10 |              0.07408 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7471 | >20%                    |                 5 |              0.14942 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7665 | <5%                     |                10 |              0.07665 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7765 | 10-15%                  |                10 |              0.07765 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7786 | >20%                    |                 5 |              0.15572 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7891 | >20%                    |                10 |              0.07891 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8054 | >20%                    |                10 |              0.08054 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8131 | 10-15%                  |                10 |              0.08131 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8135 | 15-20%                  |                10 |              0.08135 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.814  | >20%                    |                10 |              0.0814  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8467 | <5%                     |                 2 |              0.42335 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.872  | 5-10%                   |                 5 |              0.1744  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8769 | <5%                     |                10 |              0.08769 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8889 | >20%                    |                10 |              0.08889 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9075 | <5%                     |                10 |              0.09075 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.9258 | >20%                    |                 5 |              0.18516 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9334 | >20%                    |                 5 |              0.18668 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9438 | 5-10%                   |                10 |              0.09438 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9462 | 5-10%                   |                 2 |              0.4731  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9485 | >20%                    |                10 |              0.09485 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9585 | >20%                    |                10 |              0.09585 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9896 | 5-10%                   |                10 |              0.09896 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0293 | <5%                     |                 2 |              0.51465 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0397 | 10-15%                  |                10 |              0.10397 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0496 | >20%                    |                10 |              0.10496 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0882 | 10-15%                  |                 5 |              0.21764 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0934 | >20%                    |                10 |              0.10934 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1068 | >20%                    |                10 |              0.11068 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1787 | 5-10%                   |                10 |              0.11787 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1849 | 15-20%                  |                10 |              0.11849 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.229  | >20%                    |                10 |              0.1229  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4405 | >20%                    |                10 |              0.14405 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6932 | 5-10%                   |                10 |              0.16932 |