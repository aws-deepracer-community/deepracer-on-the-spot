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

Data correct as of 2025-06-01 02:12:02.606967, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1282 | <5%                     |                 2 |              0.0641  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 15-20%                  |                 5 |              0.039   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2036 | >20%                    |                 2 |              0.1018  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2131 | >20%                    |                 2 |              0.10655 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2143 | >20%                    |                 5 |              0.04286 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2243 | 5-10%                   |                 5 |              0.04486 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2311 | >20%                    |                 2 |              0.11555 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2342 | 5-10%                   |                 2 |              0.1171  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2414 | >20%                    |                10 |              0.02414 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 10-15%                  |                10 |              0.02419 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2419 | <5%                     |                 2 |              0.12095 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2458 | >20%                    |                10 |              0.02458 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2516 | >20%                    |                 2 |              0.1258  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2544 | >20%                    |                 2 |              0.1272  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2572 | 10-15%                  |                 2 |              0.1286  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2594 | 10-15%                  |                 2 |              0.1297  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2623 | 15-20%                  |                 2 |              0.13115 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.273  | <5%                     |                 2 |              0.1365  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2755 | >20%                    |                 2 |              0.13775 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2773 | 15-20%                  |                 5 |              0.05546 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2781 | >20%                    |                 2 |              0.13905 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2783 | 15-20%                  |                 2 |              0.13915 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | <5%                     |                10 |              0.0294  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2955 | >20%                    |                 2 |              0.14775 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3007 | 15-20%                  |                 2 |              0.15035 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3039 | 15-20%                  |                 2 |              0.15195 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3124 | 15-20%                  |                 2 |              0.1562  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3234 | >20%                    |                 2 |              0.1617  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3397 | >20%                    |                 5 |              0.06794 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3427 | 15-20%                  |                 2 |              0.17135 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3446 | >20%                    |                 2 |              0.1723  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3483 | >20%                    |                 5 |              0.06966 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3492 | >20%                    |                 5 |              0.06984 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3504 | >20%                    |                 2 |              0.1752  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3562 | >20%                    |                 5 |              0.07124 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3667 | >20%                    |                10 |              0.03667 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3684 | 10-15%                  |                 5 |              0.07368 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3705 | >20%                    |                 5 |              0.0741  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3712 | 15-20%                  |                 2 |              0.1856  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3719 | >20%                    |                10 |              0.03719 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3724 | 5-10%                   |                 2 |              0.1862  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3729 | 5-10%                   |                 2 |              0.18645 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3768 | 15-20%                  |                 2 |              0.1884  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3772 | >20%                    |                 2 |              0.1886  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3781 | >20%                    |                 5 |              0.07562 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3852 | 15-20%                  |                 2 |              0.1926  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3962 | >20%                    |                 2 |              0.1981  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3967 | <5%                     |                 2 |              0.19835 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4074 | 10-15%                  |                 5 |              0.08148 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4079 | <5%                     |                 5 |              0.08158 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4097 | >20%                    |                10 |              0.04097 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4138 | >20%                    |                 2 |              0.2069  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4165 | >20%                    |                 5 |              0.0833  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.417  | >20%                    |                 2 |              0.2085  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4217 | 10-15%                  |                 2 |              0.21085 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4265 | <5%                     |                 2 |              0.21325 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4296 | 15-20%                  |                 5 |              0.08592 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4332 | 15-20%                  |                 5 |              0.08664 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4395 | >20%                    |                 2 |              0.21975 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4457 | >20%                    |                 5 |              0.08914 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4464 | >20%                    |                 2 |              0.2232  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4521 | >20%                    |                 2 |              0.22605 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4528 | 10-15%                  |                 5 |              0.09056 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4532 | >20%                    |                10 |              0.04532 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4611 | 15-20%                  |                 5 |              0.09222 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4624 | >20%                    |                 2 |              0.2312  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4625 | 5-10%                   |                 5 |              0.0925  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4642 | >20%                    |                 2 |              0.2321  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4674 | >20%                    |                 5 |              0.09348 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4697 | 15-20%                  |                 5 |              0.09394 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4704 | <5%                     |                 5 |              0.09408 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4793 | >20%                    |                 2 |              0.23965 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4799 | 15-20%                  |                10 |              0.04799 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4842 | >20%                    |                 5 |              0.09684 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.486  | 5-10%                   |                 5 |              0.0972  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4918 | <5%                     |                 5 |              0.09836 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4939 | >20%                    |                 2 |              0.24695 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4957 | 10-15%                  |                 5 |              0.09914 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4972 | 15-20%                  |                 5 |              0.09944 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4989 | >20%                    |                 5 |              0.09978 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4992 | 15-20%                  |                 2 |              0.2496  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5035 | 15-20%                  |                10 |              0.05035 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5041 | >20%                    |                 2 |              0.25205 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.505  | >20%                    |                 5 |              0.101   |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5051 | <5%                     |                 5 |              0.10102 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5289 | >20%                    |                 5 |              0.10578 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5308 | >20%                    |                 2 |              0.2654  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5348 | >20%                    |                 5 |              0.10696 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5358 | 10-15%                  |                10 |              0.05358 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5476 | >20%                    |                10 |              0.05476 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.55   | >20%                    |                 5 |              0.11    |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5563 | 5-10%                   |                 5 |              0.11126 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.568  | 10-15%                  |                 2 |              0.284   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5794 | >20%                    |                 5 |              0.11588 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.583  | 15-20%                  |                10 |              0.0583  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.596  | >20%                    |                 5 |              0.1192  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5981 | 5-10%                   |                 2 |              0.29905 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5991 | >20%                    |                10 |              0.05991 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6034 | >20%                    |                 2 |              0.3017  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6076 | >20%                    |                 5 |              0.12152 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6206 | 10-15%                  |                 5 |              0.12412 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6236 | 5-10%                   |                 2 |              0.3118  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.627  | <5%                     |                10 |              0.0627  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6276 | >20%                    |                 2 |              0.3138  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6307 | <5%                     |                 5 |              0.12614 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.637  | >20%                    |                 5 |              0.1274  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6492 | 5-10%                   |                10 |              0.06492 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6503 | >20%                    |                 5 |              0.13006 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6541 | >20%                    |                 2 |              0.32705 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.659  | >20%                    |                10 |              0.0659  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6603 | >20%                    |                 5 |              0.13206 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6607 | >20%                    |                 5 |              0.13214 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6684 | 10-15%                  |                10 |              0.06684 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6724 | 15-20%                  |                 5 |              0.13448 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6789 | >20%                    |                 2 |              0.33945 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6797 | >20%                    |                 2 |              0.33985 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6808 | 10-15%                  |                 2 |              0.3404  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.682  | <5%                     |                10 |              0.0682  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7008 | 10-15%                  |                10 |              0.07008 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7085 | >20%                    |                10 |              0.07085 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7087 | 10-15%                  |                 5 |              0.14174 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7087 | >20%                    |                10 |              0.07087 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7233 | <5%                     |                 5 |              0.14466 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7267 | >20%                    |                10 |              0.07267 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7344 | <5%                     |                10 |              0.07344 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7377 | 10-15%                  |                 5 |              0.14754 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7434 | >20%                    |                10 |              0.07434 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7486 | >20%                    |                10 |              0.07486 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7539 | >20%                    |                 5 |              0.15078 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7738 | >20%                    |                10 |              0.07738 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7739 | >20%                    |                10 |              0.07739 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7753 | 15-20%                  |                10 |              0.07753 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7938 | >20%                    |                 5 |              0.15876 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8002 | >20%                    |                 5 |              0.16004 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8077 | 10-15%                  |                 5 |              0.16154 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8139 | 10-15%                  |                10 |              0.08139 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8148 | >20%                    |                10 |              0.08148 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.834  | 15-20%                  |                10 |              0.0834  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8375 | >20%                    |                10 |              0.08375 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8537 | >20%                    |                10 |              0.08537 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8736 | 5-10%                   |                10 |              0.08736 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8821 | >20%                    |                10 |              0.08821 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8824 | <5%                     |                10 |              0.08824 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8936 | >20%                    |                10 |              0.08936 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.912  | 5-10%                   |                 2 |              0.456   |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9195 | >20%                    |                10 |              0.09195 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9296 | 10-15%                  |                 5 |              0.18592 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.936  | >20%                    |                 2 |              0.468   |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9445 | >20%                    |                10 |              0.09445 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9529 | >20%                    |                10 |              0.09529 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9549 | >20%                    |                10 |              0.09549 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.959  | >20%                    |                10 |              0.0959  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9649 | >20%                    |                 5 |              0.19298 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9923 | <5%                     |                10 |              0.09923 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0099 | >20%                    |                 2 |              0.50495 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.01   | 10-15%                  |                 5 |              0.202   |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0159 | >20%                    |                 5 |              0.20318 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0332 | >20%                    |                 2 |              0.5166  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0491 | 15-20%                  |                10 |              0.10491 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0542 | <5%                     |                10 |              0.10542 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0699 | 15-20%                  |                10 |              0.10699 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0784 | >20%                    |                 5 |              0.21568 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0828 | <5%                     |                 2 |              0.5414  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1879 | 15-20%                  |                10 |              0.11879 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2246 | 10-15%                  |                10 |              0.12246 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2305 | 5-10%                   |                10 |              0.12305 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2857 | 10-15%                  |                10 |              0.12857 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2989 | >20%                    |                10 |              0.12989 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3134 | >20%                    |                10 |              0.13134 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3248 | >20%                    |                 5 |              0.26496 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3361 | 5-10%                   |                10 |              0.13361 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3469 | >20%                    |                 2 |              0.67345 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3552 | 15-20%                  |                10 |              0.13552 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4201 | >20%                    |                10 |              0.14201 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4446 | <5%                     |                 5 |              0.28892 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5081 | >20%                    |                10 |              0.15081 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0898 | <5%                     |                10 |              0.20898 |