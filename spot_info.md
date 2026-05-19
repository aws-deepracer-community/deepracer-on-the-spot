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

Data correct as of 2026-05-19 03:58:21.365173, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1096 | >20%                    |                 2 |              0.0548  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1469 | 15-20%                  |                 2 |              0.07345 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.152  | >20%                    |                 2 |              0.076   |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2023 | 15-20%                  |                 5 |              0.04046 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2153 | >20%                    |                 2 |              0.10765 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2182 | >20%                    |                 2 |              0.1091  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2294 | 15-20%                  |                 2 |              0.1147  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2312 | >20%                    |                 2 |              0.1156  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2371 | 15-20%                  |                 5 |              0.04742 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2492 | >20%                    |                 2 |              0.1246  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2518 | >20%                    |                 2 |              0.1259  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2547 | >20%                    |                 5 |              0.05094 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2626 | 5-10%                   |                10 |              0.02626 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2752 | 15-20%                  |                 5 |              0.05504 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2752 | >20%                    |                 5 |              0.05504 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2755 | >20%                    |                 5 |              0.0551  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2789 | >20%                    |                 2 |              0.13945 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2866 | >20%                    |                 2 |              0.1433  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2934 | 15-20%                  |                 2 |              0.1467  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3091 | >20%                    |                 2 |              0.15455 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3115 | 10-15%                  |                 2 |              0.15575 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3146 | >20%                    |                 2 |              0.1573  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3153 | 10-15%                  |                 2 |              0.15765 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3186 | >20%                    |                 5 |              0.06372 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3194 | >20%                    |                10 |              0.03194 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3213 | >20%                    |                 2 |              0.16065 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.324  | 10-15%                  |                 2 |              0.162   |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3275 | >20%                    |                 5 |              0.0655  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3315 | >20%                    |                 2 |              0.16575 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3328 | <5%                     |                 2 |              0.1664  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3462 | >20%                    |                 5 |              0.06924 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.355  | >20%                    |                 2 |              0.1775  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3572 | 5-10%                   |                10 |              0.03572 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3621 | >20%                    |                 5 |              0.07242 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3717 | >20%                    |                 5 |              0.07434 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3748 | 10-15%                  |                 2 |              0.1874  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3762 | >20%                    |                 5 |              0.07524 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3782 | >20%                    |                 5 |              0.07564 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3814 | >20%                    |                 5 |              0.07628 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3969 | >20%                    |                 5 |              0.07938 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4036 | <5%                     |                 2 |              0.2018  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4147 | >20%                    |                 2 |              0.20735 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4163 | 5-10%                   |                 2 |              0.20815 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4247 | >20%                    |                10 |              0.04247 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4253 | >20%                    |                 2 |              0.21265 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4288 | <5%                     |                 5 |              0.08576 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4297 | >20%                    |                 5 |              0.08594 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4303 | >20%                    |                 5 |              0.08606 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4375 | >20%                    |                 5 |              0.0875  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4385 | >20%                    |                 2 |              0.21925 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4534 | >20%                    |                 5 |              0.09068 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4591 | <5%                     |                 2 |              0.22955 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4597 | >20%                    |                 5 |              0.09194 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4663 | 15-20%                  |                 2 |              0.23315 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4698 | >20%                    |                10 |              0.04698 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4715 | >20%                    |                 2 |              0.23575 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4728 | >20%                    |                 2 |              0.2364  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.475  | >20%                    |                 5 |              0.095   |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4783 | >20%                    |                10 |              0.04783 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4786 | 15-20%                  |                 2 |              0.2393  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4921 | >20%                    |                 5 |              0.09842 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4941 | >20%                    |                 5 |              0.09882 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5027 | 5-10%                   |                10 |              0.05027 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5037 | 5-10%                   |                 5 |              0.10074 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5082 | >20%                    |                 5 |              0.10164 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5156 | 15-20%                  |                 5 |              0.10312 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5241 | >20%                    |                10 |              0.05241 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5256 | >20%                    |                 2 |              0.2628  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5352 | 10-15%                  |                 5 |              0.10704 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5467 | >20%                    |                10 |              0.05467 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5474 | 15-20%                  |                 2 |              0.2737  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5504 | >20%                    |                 2 |              0.2752  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.556  | >20%                    |                10 |              0.0556  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5581 | >20%                    |                 5 |              0.11162 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5607 | 10-15%                  |                 2 |              0.28035 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5784 | >20%                    |                 5 |              0.11568 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.602  | >20%                    |                 2 |              0.301   |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6055 | >20%                    |                 2 |              0.30275 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.619  | >20%                    |                 5 |              0.1238  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6259 | >20%                    |                 2 |              0.31295 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6286 | >20%                    |                 5 |              0.12572 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.646  | >20%                    |                10 |              0.0646  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6495 | >20%                    |                 2 |              0.32475 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.6498 | >20%                    |                10 |              0.06498 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6524 | >20%                    |                 2 |              0.3262  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6662 | 5-10%                   |                10 |              0.06662 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6699 | 15-20%                  |                10 |              0.06699 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6723 | >20%                    |                10 |              0.06723 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6783 | >20%                    |                10 |              0.06783 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6912 | >20%                    |                 2 |              0.3456  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7033 | >20%                    |                10 |              0.07033 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7091 |                         |                 5 |              0.14182 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7119 | 10-15%                  |                 2 |              0.35595 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7157 |                         |                 2 |              0.35785 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.716  | >20%                    |                 5 |              0.1432  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7172 | 5-10%                   |                 2 |              0.3586  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7245 | >20%                    |                 5 |              0.1449  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7357 | >20%                    |                 5 |              0.14714 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7374 | >20%                    |                 5 |              0.14748 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7423 | >20%                    |                 5 |              0.14846 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7455 | >20%                    |                 5 |              0.1491  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7685 | 15-20%                  |                10 |              0.07685 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7697 | >20%                    |                10 |              0.07697 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7742 | >20%                    |                 2 |              0.3871  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7828 | >20%                    |                 5 |              0.15656 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7891 | >20%                    |                 5 |              0.15782 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7945 | >20%                    |                 5 |              0.1589  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      0.8059 |                         |                 5 |              0.16118 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8092 | 15-20%                  |                10 |              0.08092 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8252 | >20%                    |                 5 |              0.16504 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8373 | >20%                    |                10 |              0.08373 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8465 | >20%                    |                10 |              0.08465 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8662 | 10-15%                  |                10 |              0.08662 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8912 | >20%                    |                10 |              0.08912 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.902  | 15-20%                  |                10 |              0.0902  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9068 |                         |                 2 |              0.4534  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9323 | >20%                    |                10 |              0.09323 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9333 | 15-20%                  |                10 |              0.09333 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9616 | >20%                    |                 5 |              0.19232 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9729 | >20%                    |                10 |              0.09729 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9757 | >20%                    |                 5 |              0.19514 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9778 | >20%                    |                10 |              0.09778 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9831 | >20%                    |                10 |              0.09831 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9967 | >20%                    |                10 |              0.09967 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9978 | >20%                    |                10 |              0.09978 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0083 | >20%                    |                 5 |              0.20166 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0089 | 5-10%                   |                 5 |              0.20178 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      1.009  | >20%                    |                 5 |              0.2018  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.02   | >20%                    |                 2 |              0.51    |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0468 | >20%                    |                10 |              0.10468 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0502 | >20%                    |                10 |              0.10502 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0711 | >20%                    |                10 |              0.10711 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0985 | >20%                    |                10 |              0.10985 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1007 | 5-10%                   |                 2 |              0.55035 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1254 | >20%                    |                10 |              0.11254 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1258 | 5-10%                   |                10 |              0.11258 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1474 | >20%                    |                10 |              0.11474 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1497 | >20%                    |                10 |              0.11497 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1598 | 15-20%                  |                10 |              0.11598 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2038 | 5-10%                   |                 2 |              0.6019  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2311 | >20%                    |                10 |              0.12311 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2412 | 10-15%                  |                10 |              0.12412 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2459 | >20%                    |                 5 |              0.24918 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2829 | 15-20%                  |                 5 |              0.25658 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.2949 |                         |                10 |              0.12949 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2983 |                         |                10 |              0.12983 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.393  | >20%                    |                 5 |              0.2786  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4212 | 15-20%                  |                10 |              0.14212 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4624 | >20%                    |                10 |              0.14624 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5036 | 10-15%                  |                 2 |              0.7518  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6162 | 15-20%                  |                10 |              0.16162 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0862 | >20%                    |                10 |              0.20862 |