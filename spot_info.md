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

Data correct as of 2025-05-19 01:58:01.232480, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1678 | >20%                    |                 2 |              0.0839  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 15-20%                  |                 5 |              0.039   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2166 | <5%                     |                 5 |              0.04332 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2172 | >20%                    |                 2 |              0.1086  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2181 | 10-15%                  |                 2 |              0.10905 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2303 | >20%                    |                 2 |              0.11515 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.234  | >20%                    |                 5 |              0.0468  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2374 | 5-10%                   |                 2 |              0.1187  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2423 | >20%                    |                 2 |              0.12115 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2484 | 15-20%                  |                 2 |              0.1242  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2547 | 10-15%                  |                10 |              0.02547 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2559 | >20%                    |                 2 |              0.12795 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2603 | >20%                    |                 2 |              0.13015 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2618 | 5-10%                   |                 2 |              0.1309  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2726 | 15-20%                  |                 2 |              0.1363  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2761 | >20%                    |                 2 |              0.13805 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2834 | 15-20%                  |                 2 |              0.1417  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2894 | >20%                    |                 2 |              0.1447  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2898 | 5-10%                   |                 2 |              0.1449  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2912 | >20%                    |                 2 |              0.1456  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2919 | >20%                    |                 5 |              0.05838 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3027 | <5%                     |                 2 |              0.15135 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3029 | 5-10%                   |                10 |              0.03029 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3089 | >20%                    |                10 |              0.03089 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3093 | 10-15%                  |                 2 |              0.15465 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3176 | >20%                    |                10 |              0.03176 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3184 | 10-15%                  |                 2 |              0.1592  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3236 | >20%                    |                 2 |              0.1618  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3279 | >20%                    |                 5 |              0.06558 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3289 | 5-10%                   |                 5 |              0.06578 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3318 | >20%                    |                10 |              0.03318 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3379 | >20%                    |                 2 |              0.16895 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3409 | >20%                    |                 2 |              0.17045 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3422 | >20%                    |                 2 |              0.1711  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3427 | 15-20%                  |                10 |              0.03427 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3502 | 5-10%                   |                 5 |              0.07004 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3545 | 15-20%                  |                 5 |              0.0709  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3575 | >20%                    |                 2 |              0.17875 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3606 | >20%                    |                10 |              0.03606 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3616 | 5-10%                   |                 2 |              0.1808  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3638 | >20%                    |                 5 |              0.07276 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3647 | >20%                    |                 5 |              0.07294 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.368  | >20%                    |                 2 |              0.184   |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3698 | >20%                    |                10 |              0.03698 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.371  | >20%                    |                 2 |              0.1855  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3729 | 10-15%                  |                 2 |              0.18645 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.379  | 5-10%                   |                 2 |              0.1895  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3864 | >20%                    |                 2 |              0.1932  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3917 | >20%                    |                 5 |              0.07834 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4001 | <5%                     |                 5 |              0.08002 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4047 | >20%                    |                10 |              0.04047 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4055 | >20%                    |                 2 |              0.20275 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4076 | <5%                     |                 2 |              0.2038  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4085 | 10-15%                  |                 2 |              0.20425 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4098 | 15-20%                  |                 5 |              0.08196 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4125 | 5-10%                   |                 5 |              0.0825  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4129 | >20%                    |                10 |              0.04129 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4166 | <5%                     |                 5 |              0.08332 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4254 | 15-20%                  |                 2 |              0.2127  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4362 | <5%                     |                 2 |              0.2181  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4383 | 10-15%                  |                 5 |              0.08766 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4402 | >20%                    |                 2 |              0.2201  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4437 | 15-20%                  |                 5 |              0.08874 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4463 | 15-20%                  |                 5 |              0.08926 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4581 | >20%                    |                 5 |              0.09162 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4618 | >20%                    |                 2 |              0.2309  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4706 | >20%                    |                 5 |              0.09412 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4714 | >20%                    |                 2 |              0.2357  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4751 | >20%                    |                10 |              0.04751 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4764 | 15-20%                  |                 5 |              0.09528 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4774 | >20%                    |                 5 |              0.09548 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4802 | >20%                    |                 2 |              0.2401  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4834 | >20%                    |                 5 |              0.09668 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4856 | 10-15%                  |                 5 |              0.09712 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4956 | 10-15%                  |                 5 |              0.09912 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4957 | >20%                    |                 2 |              0.24785 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4962 | >20%                    |                 5 |              0.09924 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5028 | >20%                    |                10 |              0.05028 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.504  | >20%                    |                 2 |              0.252   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5126 | 15-20%                  |                 2 |              0.2563  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5142 | <5%                     |                 5 |              0.10284 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5165 | >20%                    |                 2 |              0.25825 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5179 | 10-15%                  |                 5 |              0.10358 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5192 | >20%                    |                 5 |              0.10384 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5283 | >20%                    |                 2 |              0.26415 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5319 | >20%                    |                 5 |              0.10638 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5321 | 10-15%                  |                 2 |              0.26605 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5331 | 15-20%                  |                 2 |              0.26655 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5457 | >20%                    |                10 |              0.05457 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5547 | >20%                    |                 2 |              0.27735 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5572 | >20%                    |                 2 |              0.2786  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5611 | >20%                    |                 5 |              0.11222 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5643 | >20%                    |                 5 |              0.11286 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5667 | 5-10%                   |                 5 |              0.11334 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.569  | 5-10%                   |                 5 |              0.1138  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5707 | >20%                    |                 5 |              0.11414 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5737 | >20%                    |                 5 |              0.11474 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5873 | >20%                    |                 2 |              0.29365 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5921 | >20%                    |                 5 |              0.11842 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6    | 5-10%                   |                 2 |              0.3     |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.605  | 5-10%                   |                10 |              0.0605  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6061 | <5%                     |                 2 |              0.30305 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6185 | 5-10%                   |                 5 |              0.1237  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6244 | 10-15%                  |                10 |              0.06244 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6248 | 10-15%                  |                10 |              0.06248 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.633  | 10-15%                  |                 5 |              0.1266  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6381 | 10-15%                  |                 5 |              0.12762 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6398 | 10-15%                  |                 5 |              0.12796 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6406 | >20%                    |                 5 |              0.12812 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6491 | >20%                    |                 2 |              0.32455 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.652  | >20%                    |                 5 |              0.1304  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6775 | >20%                    |                 5 |              0.1355  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6787 | >20%                    |                10 |              0.06787 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6832 | >20%                    |                10 |              0.06832 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6867 | >20%                    |                 2 |              0.34335 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6931 | >20%                    |                 2 |              0.34655 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7178 | <5%                     |                 5 |              0.14356 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7217 | >20%                    |                 5 |              0.14434 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.725  | <5%                     |                10 |              0.0725  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7371 | 10-15%                  |                10 |              0.07371 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.74   | 15-20%                  |                10 |              0.074   |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7415 | <5%                     |                10 |              0.07415 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7453 | <5%                     |                 5 |              0.14906 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7485 | >20%                    |                 5 |              0.1497  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7488 | >20%                    |                10 |              0.07488 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7783 | 5-10%                   |                10 |              0.07783 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7888 | 15-20%                  |                10 |              0.07888 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7921 | >20%                    |                 5 |              0.15842 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8068 | 10-15%                  |                 5 |              0.16136 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8079 | <5%                     |                 5 |              0.16158 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8097 | >20%                    |                10 |              0.08097 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.812  | >20%                    |                10 |              0.0812  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8125 | 15-20%                  |                10 |              0.08125 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8132 | <5%                     |                10 |              0.08132 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8162 | >20%                    |                10 |              0.08162 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.837  | 15-20%                  |                10 |              0.0837  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8441 | >20%                    |                10 |              0.08441 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8472 | >20%                    |                10 |              0.08472 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8479 | >20%                    |                10 |              0.08479 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8701 | 10-15%                  |                 2 |              0.43505 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8744 | >20%                    |                 2 |              0.4372  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8913 | >20%                    |                 2 |              0.44565 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9011 | 15-20%                  |                 5 |              0.18022 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9053 | >20%                    |                10 |              0.09053 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9193 | >20%                    |                10 |              0.09193 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9307 | >20%                    |                10 |              0.09307 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9323 | >20%                    |                10 |              0.09323 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9465 | <5%                     |                10 |              0.09465 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9714 | >20%                    |                10 |              0.09714 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9768 | >20%                    |                10 |              0.09768 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9918 | 15-20%                  |                 5 |              0.19836 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9958 | >20%                    |                10 |              0.09958 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0071 | 10-15%                  |                 5 |              0.20142 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0257 | 15-20%                  |                10 |              0.10257 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0296 | >20%                    |                 2 |              0.5148  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0586 | 10-15%                  |                10 |              0.10586 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0655 | >20%                    |                10 |              0.10655 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.087  | >20%                    |                 5 |              0.2174  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1012 | 5-10%                   |                10 |              0.11012 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1142 | <5%                     |                10 |              0.11142 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1175 | >20%                    |                 5 |              0.2235  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1559 | <5%                     |                 2 |              0.57795 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2089 | 15-20%                  |                10 |              0.12089 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2224 | 15-20%                  |                10 |              0.12224 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2336 | 5-10%                   |                10 |              0.12336 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2732 | 15-20%                  |                10 |              0.12732 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2881 | >20%                    |                 2 |              0.64405 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3119 | >20%                    |                 5 |              0.26238 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3317 | >20%                    |                10 |              0.13317 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3459 | <5%                     |                 5 |              0.26918 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3609 | >20%                    |                10 |              0.13609 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.379  | 10-15%                  |                10 |              0.1379  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4522 | >20%                    |                10 |              0.14522 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6479 | >20%                    |                10 |              0.16479 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0416 | <5%                     |                10 |              0.20416 |