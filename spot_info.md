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

Data correct as of 2025-09-20 01:40:33.970275, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1521 | >20%                    |                 2 |              0.07605 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1558 | >20%                    |                 2 |              0.0779  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1562 | 5-10%                   |                 2 |              0.0781  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1612 | >20%                    |                 5 |              0.03224 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1735 | >20%                    |                 2 |              0.08675 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1863 | 10-15%                  |                 2 |              0.09315 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2045 | 10-15%                  |                 5 |              0.0409  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2371 | >20%                    |                 2 |              0.11855 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2502 | >20%                    |                 2 |              0.1251  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2526 | >20%                    |                 5 |              0.05052 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2578 | >20%                    |                 2 |              0.1289  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2856 | <5%                     |                10 |              0.02856 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2939 | >20%                    |                 2 |              0.14695 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3008 | >20%                    |                 2 |              0.1504  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3051 | 10-15%                  |                 2 |              0.15255 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3096 | 5-10%                   |                 2 |              0.1548  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3171 | 15-20%                  |                 2 |              0.15855 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3186 | >20%                    |                 2 |              0.1593  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.321  | >20%                    |                10 |              0.0321  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3295 | 15-20%                  |                 2 |              0.16475 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3331 | 5-10%                   |                 2 |              0.16655 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3341 | >20%                    |                 2 |              0.16705 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3433 | >20%                    |                 2 |              0.17165 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3436 | 10-15%                  |                 2 |              0.1718  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3476 | >20%                    |                 5 |              0.06952 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3577 | >20%                    |                 2 |              0.17885 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3622 | >20%                    |                 2 |              0.1811  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3698 | >20%                    |                 2 |              0.1849  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3709 | >20%                    |                 5 |              0.07418 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3724 | >20%                    |                10 |              0.03724 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3725 | 10-15%                  |                 5 |              0.0745  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3742 | >20%                    |                 5 |              0.07484 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3822 | >20%                    |                 2 |              0.1911  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3864 | >20%                    |                 5 |              0.07728 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3871 | >20%                    |                 2 |              0.19355 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3871 | >20%                    |                 2 |              0.19355 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3957 | >20%                    |                 2 |              0.19785 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4084 | 15-20%                  |                 5 |              0.08168 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4126 | 15-20%                  |                10 |              0.04126 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4169 | >20%                    |                 5 |              0.08338 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4221 | >20%                    |                10 |              0.04221 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4233 | >20%                    |                 5 |              0.08466 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4235 | >20%                    |                 5 |              0.0847  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4308 | >20%                    |                 5 |              0.08616 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4379 | 15-20%                  |                 2 |              0.21895 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4391 | >20%                    |                 2 |              0.21955 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.44   | 15-20%                  |                 2 |              0.22    |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.442  | >20%                    |                 2 |              0.221   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4451 | 5-10%                   |                 2 |              0.22255 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4612 | >20%                    |                 2 |              0.2306  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4676 | >20%                    |                 5 |              0.09352 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4716 | >20%                    |                 2 |              0.2358  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4749 | >20%                    |                 5 |              0.09498 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4755 | 10-15%                  |                 2 |              0.23775 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4775 | 10-15%                  |                 2 |              0.23875 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4792 | <5%                     |                 2 |              0.2396  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4812 | >20%                    |                 5 |              0.09624 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5003 | >20%                    |                 5 |              0.10006 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5008 | >20%                    |                 5 |              0.10016 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5069 | >20%                    |                 5 |              0.10138 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5105 | >20%                    |                 2 |              0.25525 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5152 | >20%                    |                 2 |              0.2576  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5168 | >20%                    |                 5 |              0.10336 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5185 | 5-10%                   |                 5 |              0.1037  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5197 | >20%                    |                 2 |              0.25985 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5198 | >20%                    |                 2 |              0.2599  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5259 | 10-15%                  |                 2 |              0.26295 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5265 | 5-10%                   |                 2 |              0.26325 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5302 | >20%                    |                 5 |              0.10604 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5444 | >20%                    |                 5 |              0.10888 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5493 | >20%                    |                 2 |              0.27465 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5548 | >20%                    |                 5 |              0.11096 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5583 | >20%                    |                 2 |              0.27915 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5615 | 15-20%                  |                 2 |              0.28075 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5748 | >20%                    |                 5 |              0.11496 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5764 | 5-10%                   |                10 |              0.05764 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5865 | >20%                    |                 5 |              0.1173  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5881 | >20%                    |                 5 |              0.11762 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5889 | >20%                    |                 2 |              0.29445 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5896 | >20%                    |                 5 |              0.11792 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6003 | >20%                    |                 5 |              0.12006 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6022 | >20%                    |                 2 |              0.3011  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6141 | 10-15%                  |                 5 |              0.12282 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6185 | 10-15%                  |                 5 |              0.1237  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6313 | 15-20%                  |                 5 |              0.12626 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6368 | >20%                    |                10 |              0.06368 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6438 | >20%                    |                 5 |              0.12876 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6539 | 15-20%                  |                 2 |              0.32695 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6546 | 15-20%                  |                10 |              0.06546 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6599 | >20%                    |                 5 |              0.13198 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6621 | >20%                    |                10 |              0.06621 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6702 | 15-20%                  |                10 |              0.06702 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6733 | >20%                    |                 5 |              0.13466 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6777 | >20%                    |                 5 |              0.13554 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6779 | 15-20%                  |                 5 |              0.13558 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6836 | >20%                    |                 2 |              0.3418  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6868 | >20%                    |                 5 |              0.13736 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6915 | >20%                    |                 5 |              0.1383  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7005 | >20%                    |                 5 |              0.1401  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7019 | >20%                    |                 5 |              0.14038 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7022 | 15-20%                  |                 5 |              0.14044 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.706  | >20%                    |                10 |              0.0706  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7094 | >20%                    |                 5 |              0.14188 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7146 | >20%                    |                 5 |              0.14292 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7151 | >20%                    |                 2 |              0.35755 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.722  | >20%                    |                 5 |              0.1444  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7225 | 10-15%                  |                 2 |              0.36125 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7362 | >20%                    |                10 |              0.07362 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7365 | 15-20%                  |                10 |              0.07365 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7478 | >20%                    |                10 |              0.07478 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7624 | >20%                    |                10 |              0.07624 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7624 | >20%                    |                10 |              0.07624 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7652 | 15-20%                  |                 5 |              0.15304 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7962 | >20%                    |                 5 |              0.15924 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.804  | >20%                    |                 5 |              0.1608  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8174 | 10-15%                  |                 2 |              0.4087  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8333 | >20%                    |                 5 |              0.16666 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8343 | 15-20%                  |                10 |              0.08343 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8541 | <5%                     |                10 |              0.08541 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8668 | >20%                    |                 5 |              0.17336 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8694 | 10-15%                  |                10 |              0.08694 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8892 | 15-20%                  |                10 |              0.08892 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9036 | <5%                     |                10 |              0.09036 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.9098 | <5%                     |                 2 |              0.4549  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9115 | >20%                    |                10 |              0.09115 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9156 | 5-10%                   |                10 |              0.09156 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.922  | >20%                    |                 5 |              0.1844  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9242 | 15-20%                  |                10 |              0.09242 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9296 | 10-15%                  |                10 |              0.09296 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9359 | 10-15%                  |                10 |              0.09359 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9386 | >20%                    |                10 |              0.09386 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9413 | 15-20%                  |                10 |              0.09413 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9531 | >20%                    |                10 |              0.09531 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9594 | >20%                    |                10 |              0.09594 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9631 | 15-20%                  |                10 |              0.09631 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9699 | <5%                     |                10 |              0.09699 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.98   | >20%                    |                10 |              0.098   |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9804 | 10-15%                  |                 5 |              0.19608 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9916 | >20%                    |                10 |              0.09916 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0068 | 15-20%                  |                10 |              0.10068 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0269 | >20%                    |                 5 |              0.20538 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0295 | >20%                    |                 2 |              0.51475 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0572 | 10-15%                  |                10 |              0.10572 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0575 | 5-10%                   |                10 |              0.10575 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0716 | >20%                    |                 2 |              0.5358  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0764 | 5-10%                   |                10 |              0.10764 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0962 | 15-20%                  |                10 |              0.10962 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1013 | >20%                    |                 2 |              0.55065 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.109  | >20%                    |                 5 |              0.2218  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1153 | >20%                    |                10 |              0.11153 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1195 | 10-15%                  |                 2 |              0.55975 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.121  | 5-10%                   |                10 |              0.1121  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1268 | <5%                     |                10 |              0.11268 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1442 | >20%                    |                10 |              0.11442 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1603 | >20%                    |                10 |              0.11603 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1636 | >20%                    |                 5 |              0.23272 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1674 | >20%                    |                10 |              0.11674 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2116 | >20%                    |                 5 |              0.24232 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2229 | 15-20%                  |                10 |              0.12229 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2435 | 5-10%                   |                 2 |              0.62175 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2947 | >20%                    |                10 |              0.12947 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3351 | 10-15%                  |                 5 |              0.26702 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3552 | 10-15%                  |                10 |              0.13552 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3947 | >20%                    |                10 |              0.13947 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4656 | >20%                    |                10 |              0.14656 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5708 | 10-15%                  |                 5 |              0.31416 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6054 | >20%                    |                10 |              0.16054 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7634 | >20%                    |                10 |              0.17634 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.8389 | >20%                    |                10 |              0.18389 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8442 | >20%                    |                10 |              0.18442 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0294 | 15-20%                  |                10 |              0.20294 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1518 | 10-15%                  |                10 |              0.21518 |