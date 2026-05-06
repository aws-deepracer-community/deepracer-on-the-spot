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

Data correct as of 2026-05-06 03:35:53.168705, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1372 | >20%                    |                 2 |              0.0686  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1397 | 15-20%                  |                 2 |              0.06985 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.172  | >20%                    |                 2 |              0.086   |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2152 | 15-20%                  |                 5 |              0.04304 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2358 | >20%                    |                 2 |              0.1179  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2398 | >20%                    |                 2 |              0.1199  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2405 | >20%                    |                 2 |              0.12025 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2465 | 15-20%                  |                 2 |              0.12325 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2581 | >20%                    |                 2 |              0.12905 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2619 | 15-20%                  |                 5 |              0.05238 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2881 | >20%                    |                 2 |              0.14405 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.289  | >20%                    |                 5 |              0.0578  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2908 | >20%                    |                 2 |              0.1454  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.2917 | 10-15%                  |                 2 |              0.14585 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2947 | 15-20%                  |                 5 |              0.05894 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2947 | 15-20%                  |                 2 |              0.14735 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2959 | >20%                    |                 5 |              0.05918 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2996 | >20%                    |                 5 |              0.05992 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3043 | >20%                    |                 2 |              0.15215 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3098 | 10-15%                  |                 2 |              0.1549  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3256 | 10-15%                  |                 2 |              0.1628  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3264 | 5-10%                   |                10 |              0.03264 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3285 | >20%                    |                 5 |              0.0657  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3342 | 10-15%                  |                 2 |              0.1671  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3405 | <5%                     |                 2 |              0.17025 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3413 | 5-10%                   |                10 |              0.03413 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3431 | >20%                    |                10 |              0.03431 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3458 | >20%                    |                 2 |              0.1729  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3564 | >20%                    |                 2 |              0.1782  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3586 | >20%                    |                 5 |              0.07172 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3596 | >20%                    |                 5 |              0.07192 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3611 | >20%                    |                 5 |              0.07222 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.364  | >20%                    |                 5 |              0.0728  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3673 | >20%                    |                 2 |              0.18365 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3699 | >20%                    |                 5 |              0.07398 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3881 | >20%                    |                 5 |              0.07762 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3923 | >20%                    |                 2 |              0.19615 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.401  | >20%                    |                 5 |              0.0802  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.407  | >20%                    |                 2 |              0.2035  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4076 | >20%                    |                 2 |              0.2038  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4079 | >20%                    |                 5 |              0.08158 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4279 | >20%                    |                 5 |              0.08558 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4295 | 5-10%                   |                 2 |              0.21475 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4319 | <5%                     |                 2 |              0.21595 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4391 | >20%                    |                 5 |              0.08782 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4405 | >20%                    |                 5 |              0.0881  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4411 | >20%                    |                 2 |              0.22055 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4428 | >20%                    |                10 |              0.04428 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4442 | >20%                    |                 5 |              0.08884 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4507 | 15-20%                  |                 2 |              0.22535 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4585 | >20%                    |                 2 |              0.22925 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4599 | <5%                     |                 2 |              0.22995 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4634 | >20%                    |                10 |              0.04634 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4667 | 15-20%                  |                 2 |              0.23335 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4725 | >20%                    |                 2 |              0.23625 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4776 | <5%                     |                 5 |              0.09552 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4784 | >20%                    |                 5 |              0.09568 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4839 | >20%                    |                 5 |              0.09678 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4848 | >20%                    |                 5 |              0.09696 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4893 | >20%                    |                 5 |              0.09786 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.49   | >20%                    |                10 |              0.049   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4902 | >20%                    |                 5 |              0.09804 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4927 | 10-15%                  |                 2 |              0.24635 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4927 | >20%                    |                 2 |              0.24635 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4968 | >20%                    |                 2 |              0.2484  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5037 | >20%                    |                10 |              0.05037 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.525  | 15-20%                  |                 5 |              0.105   |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5286 | 5-10%                   |                 5 |              0.10572 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5472 | 10-15%                  |                 5 |              0.10944 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5626 | >20%                    |                10 |              0.05626 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5757 | 15-20%                  |                 2 |              0.28785 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5774 | >20%                    |                 2 |              0.2887  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.578  | >20%                    |                 5 |              0.1156  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5949 | 5-10%                   |                 5 |              0.11898 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6107 | >20%                    |                 2 |              0.30535 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6305 | >20%                    |                 2 |              0.31525 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6317 | >20%                    |                 2 |              0.31585 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6319 | >20%                    |                10 |              0.06319 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6422 | 5-10%                   |                 2 |              0.3211  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6521 | >20%                    |                 5 |              0.13042 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6669 | >20%                    |                 5 |              0.13338 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6743 | >20%                    |                 5 |              0.13486 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6779 | 5-10%                   |                10 |              0.06779 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6806 | >20%                    |                10 |              0.06806 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6817 | >20%                    |                10 |              0.06817 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6832 | >20%                    |                 5 |              0.13664 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.684  | >20%                    |                 5 |              0.1368  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6899 | 15-20%                  |                10 |              0.06899 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6937 | >20%                    |                 2 |              0.34685 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.695  | >20%                    |                 2 |              0.3475  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6963 | 10-15%                  |                 2 |              0.34815 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6975 | >20%                    |                10 |              0.06975 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7092 | >20%                    |                10 |              0.07092 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7228 | 15-20%                  |                10 |              0.07228 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7244 | >20%                    |                 5 |              0.14488 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7355 | >20%                    |                 5 |              0.1471  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7417 | >20%                    |                 2 |              0.37085 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7463 | >20%                    |                10 |              0.07463 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7484 | 5-10%                   |                10 |              0.07484 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.7497 | >20%                    |                10 |              0.07497 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7546 | >20%                    |                 5 |              0.15092 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7551 | >20%                    |                 5 |              0.15102 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7687 | >20%                    |                 5 |              0.15374 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8008 | 15-20%                  |                10 |              0.08008 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.843  | >20%                    |                10 |              0.0843  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8441 | 5-10%                   |                10 |              0.08441 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8487 | >20%                    |                 5 |              0.16974 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8506 | >20%                    |                 2 |              0.4253  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8605 | >20%                    |                10 |              0.08605 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8721 | >20%                    |                10 |              0.08721 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8873 | >20%                    |                10 |              0.08873 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8877 | >20%                    |                10 |              0.08877 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8949 | >20%                    |                 5 |              0.17898 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9016 | >20%                    |                10 |              0.09016 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9069 |                         |                 2 |              0.45345 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9119 | >20%                    |                 5 |              0.18238 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9305 | >20%                    |                10 |              0.09305 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9421 | >20%                    |                 5 |              0.18842 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9425 | 15-20%                  |                10 |              0.09425 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9476 | >20%                    |                10 |              0.09476 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9524 | 15-20%                  |                10 |              0.09524 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.956  | 10-15%                  |                10 |              0.0956  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9564 | >20%                    |                10 |              0.09564 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9568 | >20%                    |                 5 |              0.19136 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9686 |                         |                 2 |              0.4843  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9775 | >20%                    |                10 |              0.09775 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0519 | 15-20%                  |                10 |              0.10519 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0622 | >20%                    |                10 |              0.10622 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0896 | >20%                    |                10 |              0.10896 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0988 | >20%                    |                 2 |              0.5494  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1331 | >20%                    |                10 |              0.11331 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.185  | >20%                    |                10 |              0.1185  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1946 | 10-15%                  |                10 |              0.11946 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2066 | >20%                    |                 5 |              0.24132 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2305 |                         |                 5 |              0.2461  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2368 | 5-10%                   |                 2 |              0.6184  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.2416 | 5-10%                   |                 2 |              0.6208  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2441 | >20%                    |                 5 |              0.24882 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2662 |                         |                 5 |              0.25324 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2919 | >20%                    |                 5 |              0.25838 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3013 | >20%                    |                 5 |              0.26026 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4179 | 15-20%                  |                 5 |              0.28358 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4825 | >20%                    |                10 |              0.14825 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5446 | >20%                    |                10 |              0.15446 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.562  | 15-20%                  |                10 |              0.1562  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.5679 | >20%                    |                10 |              0.15679 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5679 | 10-15%                  |                 2 |              0.78395 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6026 | 15-20%                  |                10 |              0.16026 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.6692 | >20%                    |                10 |              0.16692 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.7239 |                         |                10 |              0.17239 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.9457 |                         |                10 |              0.19457 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.131  | >20%                    |                10 |              0.2131  |