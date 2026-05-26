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

Data correct as of 2026-05-26 03:59:17.578680, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1381 | 15-20%                  |                 2 |              0.06905 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1413 | >20%                    |                 2 |              0.07065 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1679 | >20%                    |                 2 |              0.08395 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1764 | >20%                    |                 2 |              0.0882  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2025 | 15-20%                  |                 2 |              0.10125 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2078 | 15-20%                  |                 5 |              0.04156 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2134 | 15-20%                  |                 5 |              0.04268 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2244 | >20%                    |                 2 |              0.1122  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2416 | >20%                    |                 2 |              0.1208  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2504 | >20%                    |                 2 |              0.1252  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.255  | >20%                    |                 2 |              0.1275  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.259  | >20%                    |                 2 |              0.1295  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2611 | >20%                    |                 2 |              0.13055 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2739 | 10-15%                  |                 2 |              0.13695 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2784 | >20%                    |                 2 |              0.1392  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2832 | 5-10%                   |                10 |              0.02832 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2843 | >20%                    |                 5 |              0.05686 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2897 | >20%                    |                 5 |              0.05794 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2913 | >20%                    |                 2 |              0.14565 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.294  | >20%                    |                 5 |              0.0588  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2976 | 15-20%                  |                 5 |              0.05952 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2978 | >20%                    |                 2 |              0.1489  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3012 | >20%                    |                 5 |              0.06024 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3033 | 5-10%                   |                10 |              0.03033 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.312  | 15-20%                  |                 2 |              0.156   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3183 | >20%                    |                 5 |              0.06366 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3196 | >20%                    |                 5 |              0.06392 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3207 | >20%                    |                 5 |              0.06414 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3223 | >20%                    |                 2 |              0.16115 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3245 | >20%                    |                10 |              0.03245 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3337 | <5%                     |                 2 |              0.16685 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.343  | 10-15%                  |                 2 |              0.1715  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3488 | 10-15%                  |                 2 |              0.1744  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3645 | 10-15%                  |                 2 |              0.18225 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3666 | >20%                    |                 5 |              0.07332 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3681 | >20%                    |                 2 |              0.18405 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3689 | >20%                    |                 5 |              0.07378 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3704 | >20%                    |                10 |              0.03704 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3725 | >20%                    |                 5 |              0.0745  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3928 | >20%                    |                 5 |              0.07856 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4092 | >20%                    |                 5 |              0.08184 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4098 | >20%                    |                10 |              0.04098 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4099 | >20%                    |                 5 |              0.08198 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4101 | >20%                    |                 2 |              0.20505 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4142 | >20%                    |                10 |              0.04142 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4148 | <5%                     |                 2 |              0.2074  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4158 | >20%                    |                 5 |              0.08316 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4295 | >20%                    |                 5 |              0.0859  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4325 | 5-10%                   |                 2 |              0.21625 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.44   | >20%                    |                 2 |              0.22    |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4427 | >20%                    |                 2 |              0.22135 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4449 | >20%                    |                 2 |              0.22245 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4518 | >20%                    |                 5 |              0.09036 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4545 | >20%                    |                 2 |              0.22725 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4627 | <5%                     |                 2 |              0.23135 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4742 | 15-20%                  |                 2 |              0.2371  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4776 | <5%                     |                 5 |              0.09552 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4815 | >20%                    |                 5 |              0.0963  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4836 | >20%                    |                 2 |              0.2418  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.484  | >20%                    |                 5 |              0.0968  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4889 | 15-20%                  |                 2 |              0.24445 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4992 | 10-15%                  |                 2 |              0.2496  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5033 | 5-10%                   |                 5 |              0.10066 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.507  | >20%                    |                 5 |              0.1014  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5183 | 15-20%                  |                 2 |              0.25915 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5242 | >20%                    |                10 |              0.05242 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.547  | 10-15%                  |                 5 |              0.1094  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5492 | >20%                    |                 5 |              0.10984 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5502 | 5-10%                   |                10 |              0.05502 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5517 | >20%                    |                10 |              0.05517 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5535 | >20%                    |                 2 |              0.27675 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5595 | >20%                    |                 2 |              0.27975 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.561  | 15-20%                  |                 5 |              0.1122  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5641 | >20%                    |                 5 |              0.11282 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5685 | >20%                    |                 5 |              0.1137  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5702 |                         |                 2 |              0.2851  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5762 | >20%                    |                 2 |              0.2881  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5798 | >20%                    |                 5 |              0.11596 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5828 | >20%                    |                 5 |              0.11656 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5881 | >20%                    |                 5 |              0.11762 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6006 | >20%                    |                 2 |              0.3003  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6018 | >20%                    |                10 |              0.06018 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6047 | >20%                    |                 2 |              0.30235 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6496 | >20%                    |                 2 |              0.3248  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6501 | 5-10%                   |                10 |              0.06501 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6512 | >20%                    |                 5 |              0.13024 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6564 | 15-20%                  |                10 |              0.06564 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6813 | >20%                    |                 5 |              0.13626 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6833 | >20%                    |                10 |              0.06833 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6887 | >20%                    |                 5 |              0.13774 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7094 | 15-20%                  |                10 |              0.07094 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7135 | >20%                    |                10 |              0.07135 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7135 | >20%                    |                10 |              0.07135 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7206 | 5-10%                   |                 2 |              0.3603  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7324 | >20%                    |                 5 |              0.14648 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7338 | >20%                    |                 2 |              0.3669  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7371 | >20%                    |                 5 |              0.14742 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.748  | >20%                    |                 2 |              0.374   |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7559 | >20%                    |                10 |              0.07559 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7571 | >20%                    |                 5 |              0.15142 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7711 | >20%                    |                 5 |              0.15422 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7748 |                         |                 5 |              0.15496 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.7808 | >20%                    |                10 |              0.07808 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7841 | >20%                    |                10 |              0.07841 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7861 | 10-15%                  |                 2 |              0.39305 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7988 | >20%                    |                 5 |              0.15976 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8083 | >20%                    |                 5 |              0.16166 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8202 | 10-15%                  |                10 |              0.08202 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8238 | >20%                    |                10 |              0.08238 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.826  | >20%                    |                10 |              0.0826  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8388 | >20%                    |                 5 |              0.16776 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8427 | >20%                    |                10 |              0.08427 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8444 | 15-20%                  |                10 |              0.08444 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8531 |                         |                 2 |              0.42655 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8838 | 15-20%                  |                10 |              0.08838 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8873 | 15-20%                  |                10 |              0.08873 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9351 | >20%                    |                10 |              0.09351 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9376 | >20%                    |                10 |              0.09376 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9391 | >20%                    |                 5 |              0.18782 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9426 | >20%                    |                10 |              0.09426 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9447 | >20%                    |                10 |              0.09447 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      0.9483 |                         |                 5 |              0.18966 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9623 | >20%                    |                10 |              0.09623 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9741 | >20%                    |                10 |              0.09741 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9743 | >20%                    |                 5 |              0.19486 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9779 | >20%                    |                 5 |              0.19558 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9859 | >20%                    |                 2 |              0.49295 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9871 | >20%                    |                 5 |              0.19742 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.9981 |                         |                10 |              0.09981 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9997 | >20%                    |                10 |              0.09997 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0031 |                         |                10 |              0.10031 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0066 | >20%                    |                10 |              0.10066 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0228 | >20%                    |                10 |              0.10228 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0497 | >20%                    |                10 |              0.10497 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0577 | >20%                    |                10 |              0.10577 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0715 | >20%                    |                10 |              0.10715 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0755 | 5-10%                   |                 5 |              0.2151  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1052 | >20%                    |                10 |              0.11052 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1063 | 5-10%                   |                 2 |              0.55315 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1083 | 5-10%                   |                 2 |              0.55415 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.21   | 15-20%                  |                10 |              0.121   |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2219 | 5-10%                   |                10 |              0.12219 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2547 | 10-15%                  |                10 |              0.12547 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2894 | 15-20%                  |                 5 |              0.25788 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2901 | 15-20%                  |                10 |              0.12901 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3098 | >20%                    |                10 |              0.13098 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3547 | >20%                    |                 5 |              0.27094 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4119 | >20%                    |                10 |              0.14119 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.421  | >20%                    |                 5 |              0.2842  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5323 | 10-15%                  |                 2 |              0.76615 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7005 | 15-20%                  |                10 |              0.17005 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0737 | >20%                    |                10 |              0.20737 |