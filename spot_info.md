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

Data correct as of 2024-09-18 01:25:54.404028, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0924 | <5%                     |                 2 |              0.0462  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1953 | 5-10%                   |                 2 |              0.09765 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2125 | 15-20%                  |                 2 |              0.10625 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2351 | <5%                     |                 2 |              0.11755 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2359 | 15-20%                  |                 2 |              0.11795 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2414 | <5%                     |                 2 |              0.1207  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2454 | 15-20%                  |                 5 |              0.04908 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.252  | 5-10%                   |                 2 |              0.126   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2602 | <5%                     |                 2 |              0.1301  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2717 | <5%                     |                 2 |              0.13585 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2822 | >20%                    |                10 |              0.02822 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2866 | 10-15%                  |                 2 |              0.1433  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.297  | <5%                     |                 2 |              0.1485  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3048 | <5%                     |                 2 |              0.1524  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3083 | <5%                     |                 5 |              0.06166 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3109 | <5%                     |                 5 |              0.06218 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3161 | <5%                     |                10 |              0.03161 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3197 | 15-20%                  |                 5 |              0.06394 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3225 | <5%                     |                 2 |              0.16125 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3369 | 5-10%                   |                 2 |              0.16845 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3436 | <5%                     |                 2 |              0.1718  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3599 | 15-20%                  |                10 |              0.03599 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3617 | <5%                     |                 2 |              0.18085 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3649 | <5%                     |                 2 |              0.18245 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3649 | 5-10%                   |                 5 |              0.07298 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.365  | <5%                     |                 2 |              0.1825  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3742 | >20%                    |                 5 |              0.07484 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3751 | <5%                     |                 5 |              0.07502 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3759 | <5%                     |                 2 |              0.18795 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3778 | 10-15%                  |                 2 |              0.1889  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3988 | >20%                    |                 2 |              0.1994  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4062 | >20%                    |                 2 |              0.2031  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4102 | 5-10%                   |                 2 |              0.2051  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4118 | 15-20%                  |                 5 |              0.08236 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4173 | >20%                    |                10 |              0.04173 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4191 | 5-10%                   |                 2 |              0.20955 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.4206 | <5%                     |                 5 |              0.08412 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4387 | <5%                     |                 2 |              0.21935 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4395 | >20%                    |                 2 |              0.21975 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4456 | <5%                     |                 5 |              0.08912 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4457 | 10-15%                  |                 5 |              0.08914 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4544 | 5-10%                   |                 5 |              0.09088 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4585 | >20%                    |                 2 |              0.22925 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4611 | 10-15%                  |                 2 |              0.23055 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4635 | <5%                     |                 5 |              0.0927  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4654 | <5%                     |                 5 |              0.09308 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4768 | 15-20%                  |                 5 |              0.09536 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4802 | <5%                     |                10 |              0.04802 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4886 | <5%                     |                 5 |              0.09772 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4908 | 5-10%                   |                 5 |              0.09816 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4931 | >20%                    |                 5 |              0.09862 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4969 | <5%                     |                10 |              0.04969 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4974 | >20%                    |                 2 |              0.2487  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.502  | 10-15%                  |                 5 |              0.1004  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5163 | 15-20%                  |                 2 |              0.25815 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.517  | >20%                    |                 5 |              0.1034  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5197 | <5%                     |                 5 |              0.10394 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5301 | >20%                    |                 5 |              0.10602 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5302 | <5%                     |                 5 |              0.10604 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.548  | <5%                     |                 5 |              0.1096  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5701 | >20%                    |                 5 |              0.11402 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5707 | 15-20%                  |                 2 |              0.28535 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5747 | <5%                     |                 5 |              0.11494 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5837 | 10-15%                  |                10 |              0.05837 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5864 | >20%                    |                 2 |              0.2932  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6051 | >20%                    |                 5 |              0.12102 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6074 | >20%                    |                 5 |              0.12148 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6121 | 5-10%                   |                10 |              0.06121 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6167 | 5-10%                   |                 5 |              0.12334 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6205 | >20%                    |                 5 |              0.1241  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.628  | 15-20%                  |                 2 |              0.314   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6778 | >20%                    |                10 |              0.06778 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6869 | <5%                     |                10 |              0.06869 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.693  | <5%                     |                10 |              0.0693  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7039 | >20%                    |                 2 |              0.35195 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7279 | >20%                    |                10 |              0.07279 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7402 | <5%                     |                 5 |              0.14804 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7406 | 15-20%                  |                10 |              0.07406 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7627 | >20%                    |                10 |              0.07627 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7668 | <5%                     |                 2 |              0.3834  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7677 | 10-15%                  |                10 |              0.07677 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7784 | 15-20%                  |                10 |              0.07784 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7803 | >20%                    |                 5 |              0.15606 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7818 | >20%                    |                 5 |              0.15636 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7983 | >20%                    |                10 |              0.07983 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8066 | <5%                     |                10 |              0.08066 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8294 | >20%                    |                10 |              0.08294 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8341 | 10-15%                  |                10 |              0.08341 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8577 | >20%                    |                10 |              0.08577 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8655 | 5-10%                   |                 5 |              0.1731  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8718 | <5%                     |                10 |              0.08718 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8918 | >20%                    |                10 |              0.08918 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.9215 | >20%                    |                 5 |              0.1843  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.937  | 5-10%                   |                10 |              0.0937  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9386 | >20%                    |                10 |              0.09386 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9475 | 5-10%                   |                 2 |              0.47375 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9523 | <5%                     |                10 |              0.09523 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9538 | >20%                    |                 5 |              0.19076 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9651 | >20%                    |                10 |              0.09651 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9996 | <5%                     |                 2 |              0.4998  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1      | 5-10%                   |                10 |              0.1     |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0371 | >20%                    |                10 |              0.10371 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0433 | 10-15%                  |                10 |              0.10433 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1047 | 5-10%                   |                 5 |              0.22094 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1297 | >20%                    |                10 |              0.11297 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1373 | >20%                    |                10 |              0.11373 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1769 | 15-20%                  |                10 |              0.11769 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2153 | <5%                     |                10 |              0.12153 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2311 | >20%                    |                10 |              0.12311 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4415 | >20%                    |                10 |              0.14415 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.8128 | <5%                     |                10 |              0.18128 |