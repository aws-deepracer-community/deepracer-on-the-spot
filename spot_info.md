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

Data correct as of 2025-10-09 01:44:24.902217, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1895 | >20%                    |                 5 |              0.0379  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2114 | 10-15%                  |                 2 |              0.1057  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2176 | >20%                    |                 2 |              0.1088  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2378 | >20%                    |                 5 |              0.04756 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2472 | >20%                    |                 2 |              0.1236  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2487 | >20%                    |                 2 |              0.12435 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2516 | >20%                    |                 2 |              0.1258  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.252  | 5-10%                   |                 2 |              0.126   |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2615 | >20%                    |                 2 |              0.13075 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2834 | 10-15%                  |                 2 |              0.1417  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2907 | 15-20%                  |                 2 |              0.14535 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2926 | >20%                    |                10 |              0.02926 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2932 | >20%                    |                 2 |              0.1466  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2953 | 5-10%                   |                 2 |              0.14765 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3107 | >20%                    |                 2 |              0.15535 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3146 | >20%                    |                 5 |              0.06292 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3289 | 15-20%                  |                 2 |              0.16445 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3322 | 10-15%                  |                 2 |              0.1661  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3399 | >20%                    |                 2 |              0.16995 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3405 | >20%                    |                 2 |              0.17025 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3457 | >20%                    |                 2 |              0.17285 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3556 | >20%                    |                10 |              0.03556 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3575 | >20%                    |                 2 |              0.17875 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3765 | >20%                    |                 2 |              0.18825 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.377  | >20%                    |                 2 |              0.1885  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3772 | >20%                    |                 5 |              0.07544 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3776 | 15-20%                  |                 2 |              0.1888  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3804 | >20%                    |                 2 |              0.1902  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.385  | >20%                    |                 5 |              0.077   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.39   | >20%                    |                 2 |              0.195   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4011 | >20%                    |                 2 |              0.20055 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.402  | >20%                    |                 5 |              0.0804  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.418  | 5-10%                   |                 2 |              0.209   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4183 | >20%                    |                 5 |              0.08366 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.423  | >20%                    |                 5 |              0.0846  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.423  | 5-10%                   |                 2 |              0.2115  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4268 | >20%                    |                 5 |              0.08536 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4323 | 15-20%                  |                 2 |              0.21615 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.436  | >20%                    |                 2 |              0.218   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4377 | >20%                    |                 2 |              0.21885 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4405 | >20%                    |                 2 |              0.22025 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4408 | 10-15%                  |                 5 |              0.08816 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4421 | >20%                    |                 2 |              0.22105 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4457 | >20%                    |                 5 |              0.08914 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4484 | >20%                    |                 2 |              0.2242  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4526 | >20%                    |                 5 |              0.09052 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4578 | >20%                    |                 5 |              0.09156 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4593 | 10-15%                  |                 2 |              0.22965 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.461  | 15-20%                  |                 5 |              0.0922  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4643 | <5%                     |                 2 |              0.23215 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4758 | >20%                    |                 2 |              0.2379  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4877 | 10-15%                  |                 2 |              0.24385 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4884 | >20%                    |                 2 |              0.2442  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4945 | 5-10%                   |                 5 |              0.0989  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4948 | >20%                    |                 2 |              0.2474  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4948 | >20%                    |                 5 |              0.09896 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5037 | >20%                    |                 5 |              0.10074 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5147 | >20%                    |                 2 |              0.25735 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.521  | >20%                    |                 5 |              0.1042  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5263 | >20%                    |                 5 |              0.10526 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5363 | >20%                    |                 5 |              0.10726 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.543  | 5-10%                   |                 2 |              0.2715  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.545  | >20%                    |                 5 |              0.109   |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5469 | >20%                    |                 5 |              0.10938 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5501 | 10-15%                  |                 2 |              0.27505 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5606 | >20%                    |                 2 |              0.2803  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5766 | 15-20%                  |                 2 |              0.2883  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5807 | >20%                    |                 5 |              0.11614 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5809 | >20%                    |                 5 |              0.11618 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5813 | >20%                    |                10 |              0.05813 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5814 | 15-20%                  |                10 |              0.05814 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5926 | >20%                    |                 5 |              0.11852 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.6023 | >20%                    |                 2 |              0.30115 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6047 | >20%                    |                10 |              0.06047 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6113 | <5%                     |                10 |              0.06113 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6126 | 10-15%                  |                 5 |              0.12252 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6128 | >20%                    |                 5 |              0.12256 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6181 | >20%                    |                 5 |              0.12362 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6195 | >20%                    |                 5 |              0.1239  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6204 | >20%                    |                 2 |              0.3102  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6306 | >20%                    |                 5 |              0.12612 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6317 | >20%                    |                 2 |              0.31585 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.632  | 10-15%                  |                 5 |              0.1264  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6498 | >20%                    |                 5 |              0.12996 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6552 | 15-20%                  |                 2 |              0.3276  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6623 | 15-20%                  |                 5 |              0.13246 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6632 | 15-20%                  |                 5 |              0.13264 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6643 | >20%                    |                 5 |              0.13286 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6725 | >20%                    |                 5 |              0.1345  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6756 | >20%                    |                 5 |              0.13512 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6858 | >20%                    |                 5 |              0.13716 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6989 | 15-20%                  |                10 |              0.06989 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7003 | >20%                    |                 5 |              0.14006 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7015 | >20%                    |                 2 |              0.35075 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7032 | >20%                    |                 5 |              0.14064 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.705  | >20%                    |                 5 |              0.141   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7096 | >20%                    |                 5 |              0.14192 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7097 | >20%                    |                10 |              0.07097 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7103 | 15-20%                  |                 5 |              0.14206 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7116 | >20%                    |                10 |              0.07116 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7119 | 15-20%                  |                10 |              0.07119 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7214 | 15-20%                  |                10 |              0.07214 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7235 | >20%                    |                 5 |              0.1447  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7494 | 5-10%                   |                10 |              0.07494 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7563 | >20%                    |                10 |              0.07563 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7607 | >20%                    |                10 |              0.07607 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7653 | >20%                    |                10 |              0.07653 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.766  | >20%                    |                 2 |              0.383   |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7714 | 10-15%                  |                 2 |              0.3857  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7728 | 15-20%                  |                10 |              0.07728 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7937 | 15-20%                  |                 5 |              0.15874 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8005 | >20%                    |                 5 |              0.1601  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8031 | >20%                    |                 5 |              0.16062 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8059 | 15-20%                  |                10 |              0.08059 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8103 | >20%                    |                10 |              0.08103 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8116 | >20%                    |                10 |              0.08116 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.816  | >20%                    |                 5 |              0.1632  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.825  | >20%                    |                10 |              0.0825  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.84   | <5%                     |                10 |              0.084   |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8414 | >20%                    |                 5 |              0.16828 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8503 | >20%                    |                10 |              0.08503 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8658 | 10-15%                  |                 2 |              0.4329  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8688 | 10-15%                  |                 5 |              0.17376 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8879 | <5%                     |                10 |              0.08879 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8935 | 15-20%                  |                10 |              0.08935 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9027 | >20%                    |                 5 |              0.18054 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9133 | 5-10%                   |                10 |              0.09133 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9153 | 10-15%                  |                10 |              0.09153 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9199 | 15-20%                  |                10 |              0.09199 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9254 | 10-15%                  |                10 |              0.09254 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9344 | 15-20%                  |                10 |              0.09344 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9429 | >20%                    |                 2 |              0.47145 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9639 | <5%                     |                10 |              0.09639 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9659 | >20%                    |                10 |              0.09659 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9662 | >20%                    |                 5 |              0.19324 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9783 | >20%                    |                10 |              0.09783 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9864 | 5-10%                   |                10 |              0.09864 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9916 | >20%                    |                10 |              0.09916 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9998 | 15-20%                  |                10 |              0.09998 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0049 | >20%                    |                 2 |              0.50245 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0212 | 10-15%                  |                10 |              0.10212 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0328 | >20%                    |                 2 |              0.5164  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0495 | >20%                    |                 5 |              0.2099  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0647 | >20%                    |                10 |              0.10647 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0755 | >20%                    |                 5 |              0.2151  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0831 | >20%                    |                10 |              0.10831 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0874 | 10-15%                  |                10 |              0.10874 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0907 | 10-15%                  |                 2 |              0.54535 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0979 | <5%                     |                10 |              0.10979 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0981 | >20%                    |                10 |              0.10981 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0998 | 15-20%                  |                10 |              0.10998 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1087 | >20%                    |                 5 |              0.22174 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1376 | 5-10%                   |                10 |              0.11376 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1452 | >20%                    |                10 |              0.11452 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1468 | >20%                    |                 5 |              0.22936 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1504 | 5-10%                   |                10 |              0.11504 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2492 | 5-10%                   |                 2 |              0.6246  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2544 | 15-20%                  |                10 |              0.12544 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.276  | 10-15%                  |                10 |              0.1276  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2962 | >20%                    |                10 |              0.12962 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3221 | >20%                    |                10 |              0.13221 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3897 | 10-15%                  |                 5 |              0.27794 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4492 | >20%                    |                10 |              0.14492 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5684 | >20%                    |                10 |              0.15684 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6563 | 10-15%                  |                 5 |              0.33126 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6868 | >20%                    |                10 |              0.16868 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7273 | >20%                    |                10 |              0.17273 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0639 | 10-15%                  |                10 |              0.20639 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3405 | 15-20%                  |                10 |              0.23405 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.7763 | >20%                    |                10 |              0.27763 |