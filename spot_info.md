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

Data correct as of 2025-08-20 01:50:49.813224, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.101  | 5-10%                   |                 2 |              0.0505  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1628 | >20%                    |                 5 |              0.03256 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1934 | >20%                    |                 2 |              0.0967  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1994 | 10-15%                  |                 5 |              0.03988 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2065 | 10-15%                  |                 2 |              0.10325 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.21   | >20%                    |                 2 |              0.105   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2352 | >20%                    |                 5 |              0.04704 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2465 | >20%                    |                 2 |              0.12325 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2504 | >20%                    |                 2 |              0.1252  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2598 | >20%                    |                 2 |              0.1299  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2669 | >20%                    |                 2 |              0.13345 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3025 | >20%                    |                 2 |              0.15125 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3068 | >20%                    |                 2 |              0.1534  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3103 | 10-15%                  |                 2 |              0.15515 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3108 | 10-15%                  |                 2 |              0.1554  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3135 | 10-15%                  |                 2 |              0.15675 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3147 | 5-10%                   |                 2 |              0.15735 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3318 | >20%                    |                 5 |              0.06636 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3456 | >20%                    |                 2 |              0.1728  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3472 | >20%                    |                10 |              0.03472 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3524 | >20%                    |                 2 |              0.1762  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3533 | >20%                    |                 2 |              0.17665 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3562 | >20%                    |                 2 |              0.1781  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3683 | >20%                    |                 5 |              0.07366 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.37   | >20%                    |                 2 |              0.185   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3724 | >20%                    |                 2 |              0.1862  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3773 | >20%                    |                 2 |              0.18865 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3877 | >20%                    |                 2 |              0.19385 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3988 | >20%                    |                 5 |              0.07976 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4007 | >20%                    |                 2 |              0.20035 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4098 | >20%                    |                 5 |              0.08196 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4151 | >20%                    |                 5 |              0.08302 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4207 | >20%                    |                 5 |              0.08414 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.423  | >20%                    |                 5 |              0.0846  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4237 | >20%                    |                 2 |              0.21185 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4301 | >20%                    |                 5 |              0.08602 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4321 | 10-15%                  |                 2 |              0.21605 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4324 | >20%                    |                 2 |              0.2162  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4502 | >20%                    |                 5 |              0.09004 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4512 | 10-15%                  |                 2 |              0.2256  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4514 | 10-15%                  |                 2 |              0.2257  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4553 | >20%                    |                 5 |              0.09106 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4703 | <5%                     |                 2 |              0.23515 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4734 | >20%                    |                 2 |              0.2367  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.476  | 5-10%                   |                 2 |              0.238   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4825 | >20%                    |                 2 |              0.24125 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4901 | >20%                    |                 5 |              0.09802 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.491  | >20%                    |                 2 |              0.2455  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4911 | >20%                    |                 5 |              0.09822 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.494  | 15-20%                  |                 2 |              0.247   |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4976 | 10-15%                  |                10 |              0.04976 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4993 | 5-10%                   |                 5 |              0.09986 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5004 | >20%                    |                 5 |              0.10008 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5019 | 15-20%                  |                 5 |              0.10038 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5032 | >20%                    |                 2 |              0.2516  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5087 | 15-20%                  |                 2 |              0.25435 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5135 | >20%                    |                 2 |              0.25675 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5158 | >20%                    |                 2 |              0.2579  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.516  | >20%                    |                 2 |              0.258   |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.523  | 15-20%                  |                 5 |              0.1046  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.525  | >20%                    |                 5 |              0.105   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5269 | 15-20%                  |                 5 |              0.10538 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5325 | >20%                    |                 5 |              0.1065  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5364 | >20%                    |                 2 |              0.2682  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5409 | >20%                    |                 2 |              0.27045 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5471 | >20%                    |                 2 |              0.27355 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5483 | >20%                    |                 2 |              0.27415 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5724 | >20%                    |                 5 |              0.11448 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5753 | 15-20%                  |                 2 |              0.28765 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5832 | >20%                    |                 5 |              0.11664 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5873 | 10-15%                  |                 2 |              0.29365 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5902 | >20%                    |                 5 |              0.11804 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.5904 | >20%                    |                 2 |              0.2952  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5967 | >20%                    |                10 |              0.05967 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5975 | >20%                    |                 5 |              0.1195  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5978 | 10-15%                  |                 2 |              0.2989  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6011 | >20%                    |                 5 |              0.12022 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.61   | 15-20%                  |                 5 |              0.122   |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6137 | 10-15%                  |                 5 |              0.12274 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6149 | 15-20%                  |                 5 |              0.12298 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6187 | 10-15%                  |                 5 |              0.12374 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.622  | 15-20%                  |                 5 |              0.1244  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.624  | 15-20%                  |                 5 |              0.1248  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6313 | >20%                    |                 5 |              0.12626 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6379 | >20%                    |                 2 |              0.31895 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6423 | >20%                    |                 5 |              0.12846 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6499 | 15-20%                  |                 5 |              0.12998 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6531 | >20%                    |                 5 |              0.13062 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6668 | 10-15%                  |                10 |              0.06668 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.672  | 15-20%                  |                 5 |              0.1344  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6766 | >20%                    |                 5 |              0.13532 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6825 | 10-15%                  |                10 |              0.06825 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6843 | 15-20%                  |                 5 |              0.13686 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6934 | <5%                     |                 2 |              0.3467  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6941 | 15-20%                  |                10 |              0.06941 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6981 | 5-10%                   |                10 |              0.06981 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6987 | >20%                    |                 5 |              0.13974 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7154 | 15-20%                  |                 2 |              0.3577  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7214 | >20%                    |                10 |              0.07214 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7258 | >20%                    |                 5 |              0.14516 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7259 | >20%                    |                10 |              0.07259 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7323 | >20%                    |                10 |              0.07323 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7368 | >20%                    |                 5 |              0.14736 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7487 | >20%                    |                 5 |              0.14974 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7495 | >20%                    |                10 |              0.07495 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7502 | >20%                    |                10 |              0.07502 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7663 | >20%                    |                10 |              0.07663 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7839 | 15-20%                  |                 5 |              0.15678 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7959 | 5-10%                   |                 5 |              0.15918 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8035 | >20%                    |                10 |              0.08035 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.818  | >20%                    |                 5 |              0.1636  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8281 | 5-10%                   |                 2 |              0.41405 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8296 | >20%                    |                 5 |              0.16592 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8463 | >20%                    |                10 |              0.08463 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.847  | >20%                    |                 5 |              0.1694  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8536 | >20%                    |                10 |              0.08536 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8554 | >20%                    |                10 |              0.08554 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8636 | 5-10%                   |                10 |              0.08636 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8836 | 5-10%                   |                10 |              0.08836 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8895 | <5%                     |                10 |              0.08895 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8971 | 5-10%                   |                10 |              0.08971 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8988 | <5%                     |                10 |              0.08988 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.904  | 5-10%                   |                10 |              0.0904  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9108 | 15-20%                  |                10 |              0.09108 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9135 | 5-10%                   |                10 |              0.09135 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9215 | 10-15%                  |                10 |              0.09215 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9238 | >20%                    |                 2 |              0.4619  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9356 | >20%                    |                10 |              0.09356 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9366 | 10-15%                  |                10 |              0.09366 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9462 | >20%                    |                 5 |              0.18924 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9473 | >20%                    |                 2 |              0.47365 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9503 | <5%                     |                10 |              0.09503 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9587 | 10-15%                  |                10 |              0.09587 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9659 | 15-20%                  |                10 |              0.09659 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.999  | 10-15%                  |                10 |              0.0999  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0046 | >20%                    |                10 |              0.10046 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0095 | 15-20%                  |                10 |              0.10095 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0394 | >20%                    |                10 |              0.10394 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0502 | >20%                    |                10 |              0.10502 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0721 | >20%                    |                10 |              0.10721 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0817 | >20%                    |                 2 |              0.54085 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0864 | >20%                    |                10 |              0.10864 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0931 | <5%                     |                10 |              0.10931 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1033 | >20%                    |                10 |              0.11033 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1127 | >20%                    |                 5 |              0.22254 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1268 | >20%                    |                10 |              0.11268 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1344 | >20%                    |                10 |              0.11344 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1413 | >20%                    |                10 |              0.11413 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1873 | <5%                     |                 2 |              0.59365 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1935 | >20%                    |                 2 |              0.59675 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.204  | 5-10%                   |                 5 |              0.2408  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.214  | 15-20%                  |                10 |              0.1214  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.235  | >20%                    |                10 |              0.1235  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2454 | >20%                    |                 5 |              0.24908 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2867 | >20%                    |                 5 |              0.25734 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.3087 | 10-15%                  |                10 |              0.13087 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3518 | >20%                    |                10 |              0.13518 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3605 | >20%                    |                 5 |              0.2721  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.367  | 15-20%                  |                 2 |              0.6835  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3978 | 5-10%                   |                 5 |              0.27956 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4773 | 15-20%                  |                 5 |              0.29546 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4832 | >20%                    |                10 |              0.14832 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5204 | >20%                    |                10 |              0.15204 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5246 | >20%                    |                10 |              0.15246 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5329 | >20%                    |                10 |              0.15329 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6878 | >20%                    |                10 |              0.16878 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0955 | 10-15%                  |                10 |              0.20955 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2792 | 10-15%                  |                10 |              0.22792 |