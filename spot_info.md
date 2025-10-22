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

Data correct as of 2025-10-22 01:52:00.181762, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.112  | 5-10%                   |                 2 |              0.056   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1488 | 10-15%                  |                 2 |              0.0744  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1596 | >20%                    |                 5 |              0.03192 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1846 | >20%                    |                 2 |              0.0923  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1986 | 10-15%                  |                 5 |              0.03972 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2141 | >20%                    |                 5 |              0.04282 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2176 | >20%                    |                 2 |              0.1088  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2432 | 10-15%                  |                 2 |              0.1216  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2461 | >20%                    |                 2 |              0.12305 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2514 | >20%                    |                 5 |              0.05028 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2515 | >20%                    |                 2 |              0.12575 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2575 | 5-10%                   |                 2 |              0.12875 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2586 | >20%                    |                 2 |              0.1293  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2612 | >20%                    |                 2 |              0.1306  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2622 | 10-15%                  |                 2 |              0.1311  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2657 | >20%                    |                 2 |              0.13285 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.273  | 5-10%                   |                 2 |              0.1365  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.2827 | >20%                    |                 5 |              0.05654 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2849 | >20%                    |                 2 |              0.14245 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2986 | 15-20%                  |                 2 |              0.1493  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3041 | >20%                    |                 2 |              0.15205 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3253 | 5-10%                   |                10 |              0.03253 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3333 | >20%                    |                 2 |              0.16665 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3388 | >20%                    |                 2 |              0.1694  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3396 | >20%                    |                 2 |              0.1698  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3542 | >20%                    |                 2 |              0.1771  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3562 | 10-15%                  |                 2 |              0.1781  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3571 | >20%                    |                 5 |              0.07142 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3611 | 15-20%                  |                 2 |              0.18055 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3748 | 15-20%                  |                 2 |              0.1874  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3771 | >20%                    |                10 |              0.03771 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3793 | >20%                    |                 5 |              0.07586 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3828 | >20%                    |                 2 |              0.1914  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3867 | >20%                    |                 2 |              0.19335 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3979 | >20%                    |                 2 |              0.19895 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4    | >20%                    |                 2 |              0.2     |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4011 | >20%                    |                 2 |              0.20055 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4101 | >20%                    |                 5 |              0.08202 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4103 | 15-20%                  |                 2 |              0.20515 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.414  | >20%                    |                 2 |              0.207   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4218 | 5-10%                   |                 2 |              0.2109  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4234 | >20%                    |                 5 |              0.08468 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.426  | 5-10%                   |                 5 |              0.0852  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4276 | <5%                     |                 2 |              0.2138  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4322 | >20%                    |                 2 |              0.2161  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4357 | >20%                    |                 5 |              0.08714 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4389 | 5-10%                   |                 2 |              0.21945 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4397 | >20%                    |                 5 |              0.08794 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4406 | >20%                    |                 2 |              0.2203  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4434 | >20%                    |                 5 |              0.08868 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4454 | >20%                    |                 5 |              0.08908 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4502 | >20%                    |                10 |              0.04502 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4529 | >20%                    |                 5 |              0.09058 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4606 | >20%                    |                 2 |              0.2303  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4614 | <5%                     |                10 |              0.04614 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4622 | >20%                    |                 5 |              0.09244 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4708 | >20%                    |                 2 |              0.2354  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4708 | >20%                    |                 2 |              0.2354  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4721 | >20%                    |                 5 |              0.09442 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4752 | 10-15%                  |                 2 |              0.2376  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4789 | >20%                    |                 2 |              0.23945 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.483  | >20%                    |                 2 |              0.2415  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4858 | 15-20%                  |                 5 |              0.09716 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4949 | >20%                    |                 2 |              0.24745 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4978 | >20%                    |                 2 |              0.2489  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4978 | >20%                    |                 5 |              0.09956 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5245 | >20%                    |                 5 |              0.1049  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5282 | 10-15%                  |                 5 |              0.10564 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5331 | 15-20%                  |                10 |              0.05331 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.534  | >20%                    |                 5 |              0.1068  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5483 | >20%                    |                 2 |              0.27415 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5493 | 10-15%                  |                 2 |              0.27465 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5509 | >20%                    |                 5 |              0.11018 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.554  | >20%                    |                 5 |              0.1108  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5643 | 5-10%                   |                 2 |              0.28215 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5651 | 15-20%                  |                 5 |              0.11302 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5747 | >20%                    |                 5 |              0.11494 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5749 | >20%                    |                 5 |              0.11498 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5774 | >20%                    |                 5 |              0.11548 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5824 | >20%                    |                 5 |              0.11648 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5826 | >20%                    |                 5 |              0.11652 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.586  | >20%                    |                 5 |              0.1172  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5961 | 15-20%                  |                 2 |              0.29805 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6007 | >20%                    |                 5 |              0.12014 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6102 | >20%                    |                 5 |              0.12204 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6159 | 10-15%                  |                 5 |              0.12318 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6214 | >20%                    |                 5 |              0.12428 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6222 | >20%                    |                 2 |              0.3111  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6223 | >20%                    |                 5 |              0.12446 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6255 | >20%                    |                 5 |              0.1251  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6274 | 10-15%                  |                 5 |              0.12548 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6283 | >20%                    |                 2 |              0.31415 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.639  | 15-20%                  |                 2 |              0.3195  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.648  | >20%                    |                 5 |              0.1296  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6494 | >20%                    |                 5 |              0.12988 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6534 | 15-20%                  |                 5 |              0.13068 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6536 | 15-20%                  |                10 |              0.06536 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6585 | >20%                    |                10 |              0.06585 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6641 | >20%                    |                 5 |              0.13282 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6761 | >20%                    |                 5 |              0.13522 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6771 | >20%                    |                10 |              0.06771 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6802 | >20%                    |                 2 |              0.3401  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.687  | >20%                    |                 5 |              0.1374  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7053 | >20%                    |                10 |              0.07053 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7081 | 15-20%                  |                10 |              0.07081 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7121 | >20%                    |                 5 |              0.14242 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7145 | 15-20%                  |                10 |              0.07145 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7148 | <5%                     |                10 |              0.07148 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7207 | >20%                    |                 5 |              0.14414 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7225 | 15-20%                  |                 5 |              0.1445  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7244 | 15-20%                  |                10 |              0.07244 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.726  | 10-15%                  |                 2 |              0.363   |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7488 | >20%                    |                10 |              0.07488 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7564 | >20%                    |                 2 |              0.3782  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7671 | >20%                    |                10 |              0.07671 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7762 | >20%                    |                 5 |              0.15524 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7779 | >20%                    |                10 |              0.07779 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7809 | >20%                    |                10 |              0.07809 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7994 | >20%                    |                 5 |              0.15988 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8004 | >20%                    |                10 |              0.08004 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8048 | 15-20%                  |                10 |              0.08048 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.812  | >20%                    |                10 |              0.0812  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8194 | >20%                    |                10 |              0.08194 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.822  | 15-20%                  |                 5 |              0.1644  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8289 | 15-20%                  |                10 |              0.08289 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8353 | >20%                    |                 5 |              0.16706 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8357 | 5-10%                   |                10 |              0.08357 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8364 | <5%                     |                10 |              0.08364 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8383 | >20%                    |                10 |              0.08383 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8462 | 10-15%                  |                 2 |              0.4231  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8479 | 15-20%                  |                10 |              0.08479 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8654 | >20%                    |                10 |              0.08654 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8841 | >20%                    |                 5 |              0.17682 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8894 | 15-20%                  |                10 |              0.08894 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8913 | >20%                    |                 5 |              0.17826 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8914 | 10-15%                  |                 5 |              0.17828 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9058 | <5%                     |                10 |              0.09058 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9183 | >20%                    |                10 |              0.09183 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9192 | >20%                    |                 2 |              0.4596  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.951  | 10-15%                  |                10 |              0.0951  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9639 | 10-15%                  |                10 |              0.09639 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9727 | >20%                    |                 2 |              0.48635 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9994 | 5-10%                   |                10 |              0.09994 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0025 | >20%                    |                 2 |              0.50125 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0048 | 15-20%                  |                10 |              0.10048 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.0106 | >20%                    |                10 |              0.10106 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0353 | 10-15%                  |                10 |              0.10353 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0404 | >20%                    |                10 |              0.10404 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0448 | >20%                    |                 5 |              0.20896 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0525 | 15-20%                  |                10 |              0.10525 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0667 | >20%                    |                10 |              0.10667 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0843 | >20%                    |                10 |              0.10843 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0951 | >20%                    |                 5 |              0.21902 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0973 | >20%                    |                10 |              0.10973 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0994 | 15-20%                  |                10 |              0.10994 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1215 | >20%                    |                 5 |              0.2243  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1371 | >20%                    |                10 |              0.11371 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1381 | >20%                    |                10 |              0.11381 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1382 | 10-15%                  |                 2 |              0.5691  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.145  | 5-10%                   |                10 |              0.1145  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1502 | 10-15%                  |                10 |              0.11502 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1624 | 5-10%                   |                10 |              0.11624 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1874 | <5%                     |                10 |              0.11874 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.197  | >20%                    |                 5 |              0.2394  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2859 | 5-10%                   |                 2 |              0.64295 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3048 | >20%                    |                10 |              0.13048 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3078 | 10-15%                  |                10 |              0.13078 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3833 | 10-15%                  |                 5 |              0.27666 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6052 | >20%                    |                10 |              0.16052 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6166 | 10-15%                  |                 5 |              0.32332 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6378 | >20%                    |                10 |              0.16378 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7751 | >20%                    |                10 |              0.17751 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.7822 | >20%                    |                10 |              0.17822 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2097 | 10-15%                  |                10 |              0.22097 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3807 | 15-20%                  |                10 |              0.23807 |