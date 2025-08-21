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

Data correct as of 2025-08-21 01:49:27.758385, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1009 | 5-10%                   |                 2 |              0.05045 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1605 | >20%                    |                 5 |              0.0321  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1979 | >20%                    |                 2 |              0.09895 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1994 | 10-15%                  |                 5 |              0.03988 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2061 | 10-15%                  |                 2 |              0.10305 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2117 | >20%                    |                 2 |              0.10585 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2395 | >20%                    |                 2 |              0.11975 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2439 | >20%                    |                 5 |              0.04878 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.251  | >20%                    |                 2 |              0.1255  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2606 | >20%                    |                 2 |              0.1303  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2708 | >20%                    |                 2 |              0.1354  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.302  | >20%                    |                 2 |              0.151   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3028 | 10-15%                  |                 2 |              0.1514  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.303  | >20%                    |                 2 |              0.1515  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3109 | 10-15%                  |                 2 |              0.15545 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.314  | 10-15%                  |                 2 |              0.157   |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3168 | >20%                    |                 5 |              0.06336 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3173 | 5-10%                   |                 2 |              0.15865 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3421 | >20%                    |                 2 |              0.17105 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3489 | >20%                    |                 2 |              0.17445 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3503 | >20%                    |                10 |              0.03503 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3537 | >20%                    |                 2 |              0.17685 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3603 | >20%                    |                 2 |              0.18015 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3668 | >20%                    |                 2 |              0.1834  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3683 | >20%                    |                 5 |              0.07366 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.376  | >20%                    |                 2 |              0.188   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3764 | >20%                    |                 2 |              0.1882  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3897 | >20%                    |                 2 |              0.19485 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3966 | >20%                    |                 5 |              0.07932 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4093 | >20%                    |                 2 |              0.20465 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4099 | >20%                    |                 5 |              0.08198 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4116 | >20%                    |                 5 |              0.08232 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4168 | >20%                    |                 2 |              0.2084  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4177 | >20%                    |                 2 |              0.20885 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4207 | >20%                    |                 5 |              0.08414 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4217 | >20%                    |                 5 |              0.08434 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4254 | >20%                    |                 5 |              0.08508 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4282 | 10-15%                  |                 2 |              0.2141  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4501 | 10-15%                  |                 2 |              0.22505 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4514 | 10-15%                  |                 2 |              0.2257  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4517 | >20%                    |                 5 |              0.09034 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.464  | 5-10%                   |                 2 |              0.232   |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4646 | >20%                    |                 5 |              0.09292 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4669 | >20%                    |                 5 |              0.09338 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4711 | >20%                    |                 2 |              0.23555 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4728 | <5%                     |                 2 |              0.2364  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.476  | 10-15%                  |                10 |              0.0476  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4812 | >20%                    |                 2 |              0.2406  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4906 | >20%                    |                 5 |              0.09812 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4951 | 15-20%                  |                 2 |              0.24755 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4956 | >20%                    |                 2 |              0.2478  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.496  | 15-20%                  |                 5 |              0.0992  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4987 | >20%                    |                 5 |              0.09974 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4999 | 5-10%                   |                 5 |              0.09998 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5043 | >20%                    |                 2 |              0.25215 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5131 | 15-20%                  |                 2 |              0.25655 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5135 | >20%                    |                 2 |              0.25675 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.515  | >20%                    |                 2 |              0.2575  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5157 | >20%                    |                 2 |              0.25785 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5214 | 15-20%                  |                 5 |              0.10428 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5222 | >20%                    |                 5 |              0.10444 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5231 | 15-20%                  |                 5 |              0.10462 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5372 | >20%                    |                 2 |              0.2686  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.544  | >20%                    |                 2 |              0.272   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5442 | >20%                    |                 5 |              0.10884 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5477 | >20%                    |                 2 |              0.27385 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5504 | 15-20%                  |                 2 |              0.2752  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5543 | >20%                    |                 2 |              0.27715 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5635 | >20%                    |                10 |              0.05635 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5719 | >20%                    |                 5 |              0.11438 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5768 | 15-20%                  |                 5 |              0.11536 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5832 | >20%                    |                 5 |              0.11664 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5861 | >20%                    |                 5 |              0.11722 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5873 | 10-15%                  |                 2 |              0.29365 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5895 | >20%                    |                 5 |              0.1179  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.5951 | >20%                    |                 2 |              0.29755 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6012 | 10-15%                  |                 2 |              0.3006  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6035 | >20%                    |                 5 |              0.1207  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6069 | 15-20%                  |                 5 |              0.12138 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.607  | 10-15%                  |                 5 |              0.1214  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6104 | 15-20%                  |                 5 |              0.12208 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6181 | 10-15%                  |                 5 |              0.12362 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6213 | >20%                    |                 5 |              0.12426 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6224 | 15-20%                  |                 5 |              0.12448 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6233 | 15-20%                  |                 5 |              0.12466 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6379 | >20%                    |                 2 |              0.31895 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.65   | >20%                    |                 5 |              0.13    |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6563 | >20%                    |                 5 |              0.13126 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6586 | 10-15%                  |                10 |              0.06586 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6736 | 10-15%                  |                10 |              0.06736 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6746 | 15-20%                  |                 5 |              0.13492 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6766 | >20%                    |                 5 |              0.13532 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6934 | <5%                     |                 2 |              0.3467  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.694  | 5-10%                   |                10 |              0.0694  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6991 | 15-20%                  |                 5 |              0.13982 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7017 | 15-20%                  |                 2 |              0.35085 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7025 | 15-20%                  |                10 |              0.07025 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7038 | >20%                    |                 5 |              0.14076 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7115 | >20%                    |                 5 |              0.1423  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7138 | >20%                    |                10 |              0.07138 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.721  | >20%                    |                 5 |              0.1442  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7295 | >20%                    |                10 |              0.07295 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7376 | >20%                    |                10 |              0.07376 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7421 | >20%                    |                 5 |              0.14842 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7428 | >20%                    |                10 |              0.07428 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7576 | >20%                    |                10 |              0.07576 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7704 | 15-20%                  |                 5 |              0.15408 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7777 | >20%                    |                10 |              0.07777 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7995 | 5-10%                   |                 5 |              0.1599  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.812  | >20%                    |                10 |              0.0812  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8152 | >20%                    |                 5 |              0.16304 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8215 | >20%                    |                 5 |              0.1643  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8411 | >20%                    |                10 |              0.08411 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8411 | >20%                    |                 5 |              0.16822 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8548 | 5-10%                   |                 2 |              0.4274  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8561 | >20%                    |                10 |              0.08561 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8615 | >20%                    |                10 |              0.08615 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8636 | 5-10%                   |                10 |              0.08636 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8653 | 5-10%                   |                10 |              0.08653 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8658 | 5-10%                   |                10 |              0.08658 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.866  | 15-20%                  |                10 |              0.0866  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8978 | >20%                    |                10 |              0.08978 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9031 | >20%                    |                 5 |              0.18062 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9046 | <5%                     |                10 |              0.09046 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9054 | 5-10%                   |                10 |              0.09054 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9065 | 5-10%                   |                10 |              0.09065 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9082 | <5%                     |                10 |              0.09082 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9227 | 10-15%                  |                10 |              0.09227 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9304 | >20%                    |                 2 |              0.4652  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9379 | 10-15%                  |                10 |              0.09379 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9386 | >20%                    |                 2 |              0.4693  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9482 | 15-20%                  |                10 |              0.09482 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9517 | <5%                     |                10 |              0.09517 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9574 | 10-15%                  |                10 |              0.09574 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9932 | 10-15%                  |                10 |              0.09932 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0023 | 15-20%                  |                10 |              0.10023 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0151 | >20%                    |                10 |              0.10151 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0403 | >20%                    |                10 |              0.10403 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0437 | >20%                    |                10 |              0.10437 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0557 | >20%                    |                 2 |              0.52785 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0704 | >20%                    |                10 |              0.10704 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0721 | >20%                    |                10 |              0.10721 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0912 | >20%                    |                10 |              0.10912 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0975 | <5%                     |                10 |              0.10975 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1033 | >20%                    |                10 |              0.11033 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1127 | >20%                    |                 5 |              0.22254 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1268 | >20%                    |                10 |              0.11268 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1528 | >20%                    |                10 |              0.11528 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.1533 | >20%                    |                10 |              0.11533 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1858 | <5%                     |                 2 |              0.5929  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1935 | >20%                    |                 2 |              0.59675 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2064 | 5-10%                   |                 5 |              0.24128 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2112 | 15-20%                  |                10 |              0.12112 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.276  | >20%                    |                 5 |              0.2552  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2881 | >20%                    |                 5 |              0.25762 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3482 | >20%                    |                10 |              0.13482 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3674 | 15-20%                  |                 2 |              0.6837  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3714 | 5-10%                   |                 5 |              0.27428 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3862 | >20%                    |                 5 |              0.27724 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.3954 | 10-15%                  |                10 |              0.13954 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4785 | 15-20%                  |                 5 |              0.2957  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5185 | >20%                    |                10 |              0.15185 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5219 | >20%                    |                10 |              0.15219 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5363 | >20%                    |                10 |              0.15363 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5554 | >20%                    |                10 |              0.15554 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6881 | >20%                    |                10 |              0.16881 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9626 | 10-15%                  |                10 |              0.19626 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2774 | 10-15%                  |                10 |              0.22774 |