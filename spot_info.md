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

Data correct as of 2025-10-07 01:43:24.200001, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.169  | >20%                    |                 5 |              0.0338  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1768 | >20%                    |                 2 |              0.0884  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1861 | 10-15%                  |                 5 |              0.03722 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2095 | >20%                    |                 2 |              0.10475 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2127 | 10-15%                  |                 2 |              0.10635 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2405 | >20%                    |                 2 |              0.12025 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2463 | 5-10%                   |                 2 |              0.12315 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2474 | >20%                    |                 5 |              0.04948 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2496 | >20%                    |                 2 |              0.1248  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2584 | >20%                    |                 2 |              0.1292  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2664 | >20%                    |                 2 |              0.1332  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2852 | 10-15%                  |                 2 |              0.1426  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.294  | >20%                    |                 2 |              0.147   |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2969 | >20%                    |                10 |              0.02969 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2985 | >20%                    |                 2 |              0.14925 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3038 | 5-10%                   |                 2 |              0.1519  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3073 | >20%                    |                 5 |              0.06146 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3162 | 15-20%                  |                 2 |              0.1581  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3253 | 15-20%                  |                 2 |              0.16265 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3306 | 10-15%                  |                 2 |              0.1653  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3407 | >20%                    |                 2 |              0.17035 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3411 | >20%                    |                 2 |              0.17055 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3455 | >20%                    |                 2 |              0.17275 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3648 | >20%                    |                 5 |              0.07296 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3683 | >20%                    |                 2 |              0.18415 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3702 | >20%                    |                 2 |              0.1851  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3712 | >20%                    |                 5 |              0.07424 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3718 | 15-20%                  |                 2 |              0.1859  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.373  | >20%                    |                10 |              0.0373  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3821 | >20%                    |                 2 |              0.19105 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3836 | >20%                    |                 2 |              0.1918  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.396  | >20%                    |                 2 |              0.198   |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4009 | >20%                    |                 5 |              0.08018 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4054 | >20%                    |                 2 |              0.2027  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4073 | >20%                    |                 5 |              0.08146 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4123 | >20%                    |                 5 |              0.08246 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4141 | >20%                    |                 5 |              0.08282 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.416  | 5-10%                   |                 2 |              0.208   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4191 | 5-10%                   |                 2 |              0.20955 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4329 | >20%                    |                 2 |              0.21645 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4356 | 15-20%                  |                 2 |              0.2178  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4373 | 10-15%                  |                 5 |              0.08746 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4381 | >20%                    |                 5 |              0.08762 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4388 | >20%                    |                 2 |              0.2194  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4405 | >20%                    |                 2 |              0.22025 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4484 | >20%                    |                 5 |              0.08968 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4487 | >20%                    |                 2 |              0.22435 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4519 | <5%                     |                 2 |              0.22595 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4537 | >20%                    |                 5 |              0.09074 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4575 | 15-20%                  |                 5 |              0.0915  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4603 | >20%                    |                 2 |              0.23015 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4608 | 10-15%                  |                 2 |              0.2304  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4797 | >20%                    |                 2 |              0.23985 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4805 | >20%                    |                 2 |              0.24025 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4893 | 10-15%                  |                 2 |              0.24465 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4934 | >20%                    |                 5 |              0.09868 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5018 | >20%                    |                 5 |              0.10036 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5098 | >20%                    |                 2 |              0.2549  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5108 | >20%                    |                 2 |              0.2554  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5111 | 5-10%                   |                 5 |              0.10222 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5164 | >20%                    |                 5 |              0.10328 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5174 | >20%                    |                 5 |              0.10348 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5328 | 5-10%                   |                 2 |              0.2664  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.533  | >20%                    |                 5 |              0.1066  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5411 | >20%                    |                10 |              0.05411 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5446 | 10-15%                  |                 2 |              0.2723  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5492 | >20%                    |                 5 |              0.10984 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5515 | >20%                    |                 5 |              0.1103  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5536 | >20%                    |                 2 |              0.2768  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.566  | 15-20%                  |                 2 |              0.283   |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5682 | >20%                    |                 5 |              0.11364 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5721 | <5%                     |                10 |              0.05721 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5743 | 15-20%                  |                10 |              0.05743 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5864 | >20%                    |                 5 |              0.11728 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5875 | >20%                    |                10 |              0.05875 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5935 | >20%                    |                 5 |              0.1187  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5952 | >20%                    |                 5 |              0.11904 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6045 | >20%                    |                 2 |              0.30225 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.607  | >20%                    |                 2 |              0.3035  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6089 | >20%                    |                 2 |              0.30445 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6124 | 10-15%                  |                 5 |              0.12248 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6136 | >20%                    |                 5 |              0.12272 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6182 | >20%                    |                 5 |              0.12364 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6195 | 10-15%                  |                 5 |              0.1239  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6247 | >20%                    |                 5 |              0.12494 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6353 | 15-20%                  |                 5 |              0.12706 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6526 | 15-20%                  |                 2 |              0.3263  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6556 | >20%                    |                 5 |              0.13112 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6657 | >20%                    |                 5 |              0.13314 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6667 | >20%                    |                 5 |              0.13334 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6761 | >20%                    |                 5 |              0.13522 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6778 | >20%                    |                 5 |              0.13556 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.692  | >20%                    |                 5 |              0.1384  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6925 | >20%                    |                10 |              0.06925 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6925 | 15-20%                  |                 5 |              0.1385  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6973 | >20%                    |                 5 |              0.13946 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6984 | >20%                    |                 2 |              0.3492  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7018 | 15-20%                  |                10 |              0.07018 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.702  | >20%                    |                 5 |              0.1404  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7033 | >20%                    |                 5 |              0.14066 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7042 | >20%                    |                 5 |              0.14084 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7089 | 15-20%                  |                10 |              0.07089 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7161 | >20%                    |                10 |              0.07161 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7162 | 15-20%                  |                10 |              0.07162 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7203 | 15-20%                  |                 5 |              0.14406 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7215 | 5-10%                   |                10 |              0.07215 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7418 | >20%                    |                10 |              0.07418 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7518 | >20%                    |                10 |              0.07518 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7543 | >20%                    |                 2 |              0.37715 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7545 | 10-15%                  |                 2 |              0.37725 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7602 | 15-20%                  |                10 |              0.07602 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7866 | >20%                    |                10 |              0.07866 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7964 | >20%                    |                 5 |              0.15928 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8024 | >20%                    |                 5 |              0.16048 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.807  | >20%                    |                10 |              0.0807  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8102 | 15-20%                  |                 5 |              0.16204 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8124 | >20%                    |                 5 |              0.16248 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8145 | >20%                    |                10 |              0.08145 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8152 | 15-20%                  |                10 |              0.08152 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8284 | <5%                     |                10 |              0.08284 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8347 | >20%                    |                10 |              0.08347 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8381 | >20%                    |                10 |              0.08381 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8439 | >20%                    |                 5 |              0.16878 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8736 | 10-15%                  |                 5 |              0.17472 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8812 | 15-20%                  |                10 |              0.08812 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8878 | 10-15%                  |                 2 |              0.4439  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8904 | >20%                    |                 5 |              0.17808 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8956 | >20%                    |                10 |              0.08956 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9132 | 10-15%                  |                10 |              0.09132 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9133 | 10-15%                  |                10 |              0.09133 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.914  | <5%                     |                10 |              0.0914  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9154 | 15-20%                  |                10 |              0.09154 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9191 | >20%                    |                10 |              0.09191 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9246 | 5-10%                   |                10 |              0.09246 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9481 | <5%                     |                10 |              0.09481 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9637 | >20%                    |                 2 |              0.48185 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9647 | >20%                    |                10 |              0.09647 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9917 | 15-20%                  |                10 |              0.09917 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9924 | 5-10%                   |                10 |              0.09924 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9999 | 15-20%                  |                10 |              0.09999 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0006 | >20%                    |                 2 |              0.5003  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.016  | 10-15%                  |                10 |              0.1016  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0211 | >20%                    |                 5 |              0.20422 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0457 | >20%                    |                 2 |              0.52285 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.053  | >20%                    |                10 |              0.1053  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0786 | >20%                    |                10 |              0.10786 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0816 | >20%                    |                 5 |              0.21632 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0833 | 10-15%                  |                 2 |              0.54165 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0929 | >20%                    |                 5 |              0.21858 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0951 | 10-15%                  |                10 |              0.10951 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0992 | >20%                    |                 5 |              0.21984 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1    | >20%                    |                10 |              0.11    |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1106 | 15-20%                  |                10 |              0.11106 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1328 | <5%                     |                10 |              0.11328 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1393 | >20%                    |                 5 |              0.22786 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1393 | 5-10%                   |                10 |              0.11393 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1481 | 5-10%                   |                10 |              0.11481 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1555 | >20%                    |                10 |              0.11555 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2497 | 15-20%                  |                10 |              0.12497 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2577 | 5-10%                   |                 2 |              0.62885 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2758 | >20%                    |                10 |              0.12758 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3121 | 10-15%                  |                10 |              0.13121 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3174 | >20%                    |                10 |              0.13174 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3937 | 10-15%                  |                 5 |              0.27874 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4955 | >20%                    |                10 |              0.14955 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5915 | >20%                    |                10 |              0.15915 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6348 | >20%                    |                10 |              0.16348 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6928 | 10-15%                  |                 5 |              0.33856 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7148 | >20%                    |                10 |              0.17148 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0531 | 10-15%                  |                10 |              0.20531 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3275 | 15-20%                  |                10 |              0.23275 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.9539 | >20%                    |                10 |              0.29539 |