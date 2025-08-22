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

Data correct as of 2025-08-22 01:50:11.943945, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1009 | 5-10%                   |                 2 |              0.05045 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1588 | >20%                    |                 5 |              0.03176 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1996 | 10-15%                  |                 5 |              0.03992 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.205  | >20%                    |                 2 |              0.1025  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2102 | 10-15%                  |                 2 |              0.1051  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2134 | >20%                    |                 2 |              0.1067  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2295 | >20%                    |                 2 |              0.11475 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2444 | >20%                    |                 5 |              0.04888 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2499 | >20%                    |                 2 |              0.12495 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2661 | >20%                    |                 2 |              0.13305 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2682 | >20%                    |                 2 |              0.1341  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2987 | >20%                    |                 2 |              0.14935 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2991 | >20%                    |                 2 |              0.14955 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3027 | >20%                    |                 5 |              0.06054 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3028 | 10-15%                  |                 2 |              0.1514  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3067 | 10-15%                  |                 2 |              0.15335 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3102 | 10-15%                  |                 2 |              0.1551  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3252 | 5-10%                   |                 2 |              0.1626  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3421 | >20%                    |                 2 |              0.17105 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3465 | >20%                    |                 2 |              0.17325 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3511 | >20%                    |                10 |              0.03511 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3525 | >20%                    |                 2 |              0.17625 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3653 | >20%                    |                 2 |              0.18265 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3668 | >20%                    |                 5 |              0.07336 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3668 | >20%                    |                 2 |              0.1834  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3786 | >20%                    |                 2 |              0.1893  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3799 | >20%                    |                 2 |              0.18995 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.3864 | >20%                    |                 2 |              0.1932  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3899 | >20%                    |                 2 |              0.19495 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3912 | >20%                    |                 5 |              0.07824 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4092 | >20%                    |                 5 |              0.08184 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4171 | >20%                    |                 2 |              0.20855 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4174 | >20%                    |                 2 |              0.2087  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4179 | >20%                    |                 5 |              0.08358 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.419  | >20%                    |                 5 |              0.0838  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4209 | 10-15%                  |                 2 |              0.21045 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4254 | >20%                    |                 5 |              0.08508 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.426  | >20%                    |                 5 |              0.0852  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4453 | 10-15%                  |                 2 |              0.22265 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4487 | >20%                    |                 5 |              0.08974 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4537 | 10-15%                  |                 2 |              0.22685 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.456  | 10-15%                  |                10 |              0.0456  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4578 | >20%                    |                 5 |              0.09156 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4597 | 5-10%                   |                 2 |              0.22985 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4674 | <5%                     |                 2 |              0.2337  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4711 | >20%                    |                 2 |              0.23555 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4796 | >20%                    |                 2 |              0.2398  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4893 | >20%                    |                 5 |              0.09786 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.49   | >20%                    |                 5 |              0.098   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.497  | 15-20%                  |                 2 |              0.2485  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4988 | 15-20%                  |                 5 |              0.09976 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4989 | >20%                    |                 5 |              0.09978 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.501  | >20%                    |                 2 |              0.2505  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5011 | 5-10%                   |                 5 |              0.10022 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5091 | >20%                    |                 2 |              0.25455 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5096 | >20%                    |                 2 |              0.2548  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5109 | >20%                    |                 2 |              0.25545 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5126 | 15-20%                  |                 2 |              0.2563  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5187 | >20%                    |                 2 |              0.25935 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.52   | 15-20%                  |                 5 |              0.104   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.521  | >20%                    |                 5 |              0.1042  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5281 | >20%                    |                 2 |              0.26405 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5293 | 15-20%                  |                 5 |              0.10586 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5313 | 15-20%                  |                 2 |              0.26565 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5382 | >20%                    |                 2 |              0.2691  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5428 | >20%                    |                10 |              0.05428 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5477 | >20%                    |                 2 |              0.27385 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5522 | 15-20%                  |                 5 |              0.11044 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5557 | >20%                    |                 2 |              0.27785 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5642 | >20%                    |                 5 |              0.11284 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.567  | 10-15%                  |                 2 |              0.2835  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5694 | >20%                    |                 5 |              0.11388 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5739 | 15-20%                  |                 5 |              0.11478 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5888 | >20%                    |                 5 |              0.11776 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5895 | >20%                    |                 5 |              0.1179  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5898 | >20%                    |                 5 |              0.11796 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5996 | >20%                    |                 5 |              0.11992 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6011 | >20%                    |                 2 |              0.30055 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6049 | 10-15%                  |                 2 |              0.30245 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6053 | 10-15%                  |                 5 |              0.12106 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6111 | >20%                    |                 5 |              0.12222 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6119 | 15-20%                  |                 5 |              0.12238 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.621  | 10-15%                  |                 5 |              0.1242  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6227 | 15-20%                  |                 5 |              0.12454 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6247 | 15-20%                  |                 5 |              0.12494 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.632  | 10-15%                  |                10 |              0.0632  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6396 | >20%                    |                 2 |              0.3198  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6414 | 10-15%                  |                10 |              0.06414 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6507 | >20%                    |                 5 |              0.13014 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6527 | >20%                    |                 5 |              0.13054 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6621 | >20%                    |                 5 |              0.13242 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6729 | 15-20%                  |                 5 |              0.13458 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6833 | 5-10%                   |                10 |              0.06833 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6889 | >20%                    |                 5 |              0.13778 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6937 | <5%                     |                 2 |              0.34685 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6963 | 15-20%                  |                 2 |              0.34815 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7001 | 15-20%                  |                 5 |              0.14002 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7025 | 15-20%                  |                10 |              0.07025 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7041 | >20%                    |                 5 |              0.14082 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7113 | 15-20%                  |                 5 |              0.14226 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7138 | >20%                    |                10 |              0.07138 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.721  | >20%                    |                 5 |              0.1442  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7309 | >20%                    |                10 |              0.07309 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7349 | >20%                    |                10 |              0.07349 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7385 | >20%                    |                 5 |              0.1477  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7456 | >20%                    |                10 |              0.07456 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.77   | >20%                    |                10 |              0.077   |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7784 | >20%                    |                10 |              0.07784 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7997 | 5-10%                   |                 5 |              0.15994 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8108 | >20%                    |                 5 |              0.16216 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.812  | >20%                    |                10 |              0.0812  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8161 | >20%                    |                 5 |              0.16322 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8209 | >20%                    |                 5 |              0.16418 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8281 | 15-20%                  |                10 |              0.08281 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8317 | >20%                    |                10 |              0.08317 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8485 | 5-10%                   |                10 |              0.08485 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8527 | >20%                    |                 5 |              0.17054 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8527 | >20%                    |                10 |              0.08527 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8542 | >20%                    |                10 |              0.08542 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8569 | 5-10%                   |                 2 |              0.42845 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8629 | 5-10%                   |                10 |              0.08629 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8637 | >20%                    |                10 |              0.08637 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8658 | 5-10%                   |                10 |              0.08658 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8979 | 5-10%                   |                10 |              0.08979 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9068 | <5%                     |                10 |              0.09068 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.909  | 5-10%                   |                10 |              0.0909  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.91   | <5%                     |                10 |              0.091   |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9244 | 10-15%                  |                10 |              0.09244 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9276 | >20%                    |                 2 |              0.4638  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9388 | >20%                    |                 2 |              0.4694  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9482 | 15-20%                  |                10 |              0.09482 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9484 | <5%                     |                10 |              0.09484 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9589 | 10-15%                  |                10 |              0.09589 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9591 | 10-15%                  |                10 |              0.09591 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9937 | 10-15%                  |                10 |              0.09937 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9938 | 15-20%                  |                10 |              0.09938 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0254 | >20%                    |                10 |              0.10254 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0359 | >20%                    |                10 |              0.10359 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.046  | >20%                    |                 2 |              0.523   |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0486 | >20%                    |                10 |              0.10486 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0515 | >20%                    |                10 |              0.10515 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0645 | >20%                    |                10 |              0.10645 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0811 | >20%                    |                10 |              0.10811 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0813 | >20%                    |                10 |              0.10813 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0977 | <5%                     |                10 |              0.10977 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1122 | >20%                    |                10 |              0.11122 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1196 | >20%                    |                 5 |              0.22392 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.138  | >20%                    |                10 |              0.1138  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1617 | >20%                    |                10 |              0.11617 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1824 | <5%                     |                 2 |              0.5912  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1879 | >20%                    |                 2 |              0.59395 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2078 | 5-10%                   |                 5 |              0.24156 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2203 | 15-20%                  |                10 |              0.12203 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2493 | >20%                    |                 5 |              0.24986 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.276  | >20%                    |                 5 |              0.2552  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2937 | 5-10%                   |                 5 |              0.25874 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3396 | 15-20%                  |                 2 |              0.6698  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3519 | >20%                    |                10 |              0.13519 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.407  | >20%                    |                 5 |              0.2814  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4667 | 10-15%                  |                10 |              0.14667 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4674 | 15-20%                  |                 5 |              0.29348 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5301 | >20%                    |                10 |              0.15301 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5361 | >20%                    |                10 |              0.15361 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.538  | >20%                    |                10 |              0.1538  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5457 | >20%                    |                10 |              0.15457 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6838 | >20%                    |                10 |              0.16838 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8855 | 10-15%                  |                10 |              0.18855 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2414 | 10-15%                  |                10 |              0.22414 |