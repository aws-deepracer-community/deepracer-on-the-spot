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

Data correct as of 2025-10-13 01:51:55.712905, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.128  | >20%                    |                 2 |              0.064   |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1962 | >20%                    |                 5 |              0.03924 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.214  | >20%                    |                 2 |              0.107   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2172 | 10-15%                  |                 2 |              0.1086  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2279 | >20%                    |                 5 |              0.04558 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2305 | >20%                    |                 2 |              0.11525 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2413 | >20%                    |                 2 |              0.12065 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2477 | >20%                    |                 2 |              0.12385 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2523 | >20%                    |                 2 |              0.12615 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2554 | >20%                    |                 2 |              0.1277  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.258  | 5-10%                   |                 2 |              0.129   |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2591 | 5-10%                   |                 2 |              0.12955 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2732 | 10-15%                  |                 2 |              0.1366  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2908 | >20%                    |                 2 |              0.1454  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2996 | >20%                    |                 2 |              0.1498  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3028 | 15-20%                  |                 2 |              0.1514  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3253 | 10-15%                  |                 2 |              0.16265 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3272 | >20%                    |                 5 |              0.06544 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3346 | >20%                    |                 2 |              0.1673  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3351 | 15-20%                  |                 2 |              0.16755 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3357 | >20%                    |                10 |              0.03357 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3411 | >20%                    |                 2 |              0.17055 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3477 | 5-10%                   |                10 |              0.03477 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3524 | >20%                    |                 2 |              0.1762  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3567 | >20%                    |                 2 |              0.17835 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3651 | >20%                    |                 2 |              0.18255 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3667 | 15-20%                  |                 2 |              0.18335 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3743 | >20%                    |                 5 |              0.07486 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3775 | 10-15%                  |                10 |              0.03775 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3781 | >20%                    |                 5 |              0.07562 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.381  | 15-20%                  |                 2 |              0.1905  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3854 | >20%                    |                 2 |              0.1927  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3884 | >20%                    |                 2 |              0.1942  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3911 | >20%                    |                 2 |              0.19555 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3947 | >20%                    |                 2 |              0.19735 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3971 | >20%                    |                 5 |              0.07942 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4039 | >20%                    |                 5 |              0.08078 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4068 | 5-10%                   |                 5 |              0.08136 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4144 | 5-10%                   |                 2 |              0.2072  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4191 | >20%                    |                 2 |              0.20955 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4282 | >20%                    |                 2 |              0.2141  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4288 | 5-10%                   |                 2 |              0.2144  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4317 | >20%                    |                 5 |              0.08634 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4329 | >20%                    |                 2 |              0.21645 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4445 | >20%                    |                 2 |              0.22225 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.446  | >20%                    |                 5 |              0.0892  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4495 | >20%                    |                 5 |              0.0899  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4517 | >20%                    |                 5 |              0.09034 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4526 | >20%                    |                 5 |              0.09052 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4543 | >20%                    |                 2 |              0.22715 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.459  | 15-20%                  |                 5 |              0.0918  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4619 | >20%                    |                 2 |              0.23095 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4626 | <5%                     |                 2 |              0.2313  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4626 | 10-15%                  |                 5 |              0.09252 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4654 | 10-15%                  |                 2 |              0.2327  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4832 | >20%                    |                 2 |              0.2416  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.484  | >20%                    |                 5 |              0.0968  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4892 | >20%                    |                 2 |              0.2446  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4894 | 10-15%                  |                 2 |              0.2447  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5022 | >20%                    |                 5 |              0.10044 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5174 | >20%                    |                 5 |              0.10348 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5226 | >20%                    |                 2 |              0.2613  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5313 | >20%                    |                 5 |              0.10626 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5488 | >20%                    |                 5 |              0.10976 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5507 | >20%                    |                 5 |              0.11014 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5537 | >20%                    |                 5 |              0.11074 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5563 | 5-10%                   |                 2 |              0.27815 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5705 | >20%                    |                 2 |              0.28525 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5797 | >20%                    |                 2 |              0.28985 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5802 | >20%                    |                 5 |              0.11604 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5812 | >20%                    |                 5 |              0.11624 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5887 | 10-15%                  |                 2 |              0.29435 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5987 | >20%                    |                 5 |              0.11974 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6013 | >20%                    |                 5 |              0.12026 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6061 | 15-20%                  |                 2 |              0.30305 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6092 | >20%                    |                 5 |              0.12184 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.611  | >20%                    |                 5 |              0.1222  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6246 | >20%                    |                 5 |              0.12492 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6257 | >20%                    |                 5 |              0.12514 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.628  | 10-15%                  |                 5 |              0.1256  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6317 | >20%                    |                 2 |              0.31585 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6339 | >20%                    |                 5 |              0.12678 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6364 | >20%                    |                 5 |              0.12728 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6382 | 10-15%                  |                 5 |              0.12764 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6419 | >20%                    |                10 |              0.06419 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6429 | >20%                    |                10 |              0.06429 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6437 | 15-20%                  |                 5 |              0.12874 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6445 | >20%                    |                 2 |              0.32225 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6465 | 15-20%                  |                 2 |              0.32325 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6552 | 15-20%                  |                 5 |              0.13104 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6628 | 15-20%                  |                10 |              0.06628 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6642 | 15-20%                  |                10 |              0.06642 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6671 | 15-20%                  |                10 |              0.06671 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6706 | >20%                    |                 5 |              0.13412 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6739 | >20%                    |                 5 |              0.13478 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6743 | >20%                    |                 5 |              0.13486 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.683  | <5%                     |                10 |              0.0683  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.692  | >20%                    |                10 |              0.0692  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.695  | >20%                    |                 5 |              0.139   |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6981 | 15-20%                  |                 5 |              0.13962 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6989 | >20%                    |                 2 |              0.34945 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7193 | <5%                     |                10 |              0.07193 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7207 | >20%                    |                 5 |              0.14414 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7251 | >20%                    |                 5 |              0.14502 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7282 | 15-20%                  |                10 |              0.07282 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7302 | >20%                    |                10 |              0.07302 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7422 | >20%                    |                10 |              0.07422 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7447 | >20%                    |                 5 |              0.14894 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7473 | >20%                    |                 5 |              0.14946 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7621 | >20%                    |                10 |              0.07621 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7781 | 15-20%                  |                10 |              0.07781 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7784 | 15-20%                  |                10 |              0.07784 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7946 | 10-15%                  |                 2 |              0.3973  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7991 | >20%                    |                 5 |              0.15982 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8033 | 5-10%                   |                10 |              0.08033 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8046 | >20%                    |                10 |              0.08046 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8069 | >20%                    |                10 |              0.08069 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8099 | >20%                    |                 5 |              0.16198 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8113 | >20%                    |                 2 |              0.40565 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8208 | 10-15%                  |                 2 |              0.4104  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8281 | 15-20%                  |                10 |              0.08281 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.83   | >20%                    |                10 |              0.083   |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8321 | 15-20%                  |                 5 |              0.16642 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8367 | >20%                    |                10 |              0.08367 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.842  | >20%                    |                10 |              0.0842  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8459 | 10-15%                  |                 5 |              0.16918 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8491 | >20%                    |                 5 |              0.16982 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8526 | >20%                    |                 5 |              0.17052 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8721 | 15-20%                  |                10 |              0.08721 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8937 | >20%                    |                 5 |              0.17874 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8953 | <5%                     |                10 |              0.08953 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9147 | 10-15%                  |                10 |              0.09147 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9206 | <5%                     |                10 |              0.09206 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9229 | 15-20%                  |                10 |              0.09229 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9412 | >20%                    |                 2 |              0.4706  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9461 | >20%                    |                10 |              0.09461 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9534 | 10-15%                  |                10 |              0.09534 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9687 | 5-10%                   |                10 |              0.09687 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.981  | >20%                    |                10 |              0.0981  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9813 | >20%                    |                 2 |              0.49065 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9877 | 15-20%                  |                10 |              0.09877 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9962 | 5-10%                   |                10 |              0.09962 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.022  | 10-15%                  |                10 |              0.1022  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0263 | >20%                    |                 2 |              0.51315 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0442 | >20%                    |                 5 |              0.20884 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.046  | >20%                    |                10 |              0.1046  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0564 | >20%                    |                 5 |              0.21128 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0754 | 15-20%                  |                10 |              0.10754 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0803 | >20%                    |                10 |              0.10803 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0877 | 15-20%                  |                10 |              0.10877 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0933 | <5%                     |                10 |              0.10933 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0961 | >20%                    |                10 |              0.10961 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1089 | 10-15%                  |                 2 |              0.55445 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1195 | >20%                    |                 5 |              0.2239  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1261 | >20%                    |                10 |              0.11261 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1327 | 10-15%                  |                10 |              0.11327 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1334 | >20%                    |                10 |              0.11334 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1532 | >20%                    |                 5 |              0.23064 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.177  | 5-10%                   |                10 |              0.1177  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2045 | 5-10%                   |                10 |              0.12045 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2363 | >20%                    |                10 |              0.12363 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2385 | 5-10%                   |                 2 |              0.61925 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2752 | 10-15%                  |                10 |              0.12752 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2773 | >20%                    |                10 |              0.12773 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3538 | >20%                    |                10 |              0.13538 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3934 | 10-15%                  |                 5 |              0.27868 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5291 | >20%                    |                10 |              0.15291 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6484 | 10-15%                  |                 5 |              0.32968 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6774 | >20%                    |                10 |              0.16774 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6909 | >20%                    |                10 |              0.16909 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1298 | 10-15%                  |                10 |              0.21298 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3066 | 15-20%                  |                10 |              0.23066 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.407  | >20%                    |                10 |              0.2407  |