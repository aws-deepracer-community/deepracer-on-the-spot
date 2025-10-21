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

Data correct as of 2025-10-21 01:48:38.942582, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1042 | 5-10%                   |                 2 |              0.0521  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1408 | 10-15%                  |                 2 |              0.0704  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1576 | >20%                    |                 5 |              0.03152 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1815 | >20%                    |                 2 |              0.09075 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2014 | >20%                    |                 5 |              0.04028 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2033 | 10-15%                  |                 5 |              0.04066 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2274 | >20%                    |                 2 |              0.1137  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2387 | >20%                    |                 5 |              0.04774 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2408 | 10-15%                  |                 2 |              0.1204  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2434 | >20%                    |                 2 |              0.1217  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2476 | >20%                    |                 2 |              0.1238  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2567 | 5-10%                   |                 2 |              0.12835 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2598 | >20%                    |                 2 |              0.1299  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2647 | >20%                    |                 2 |              0.13235 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2665 | >20%                    |                 2 |              0.13325 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2698 | 10-15%                  |                 2 |              0.1349  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2723 | 5-10%                   |                 2 |              0.13615 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.284  | >20%                    |                 5 |              0.0568  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2856 | >20%                    |                 2 |              0.1428  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3065 | >20%                    |                 2 |              0.15325 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3077 | 15-20%                  |                 2 |              0.15385 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3084 | 5-10%                   |                10 |              0.03084 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3362 | >20%                    |                 2 |              0.1681  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3402 | >20%                    |                 2 |              0.1701  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3492 | >20%                    |                 2 |              0.1746  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3501 | 10-15%                  |                 2 |              0.17505 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3553 | 15-20%                  |                 2 |              0.17765 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3553 | >20%                    |                 2 |              0.17765 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3571 | >20%                    |                 5 |              0.07142 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3661 | >20%                    |                10 |              0.03661 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3753 | 15-20%                  |                 2 |              0.18765 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3782 | >20%                    |                 2 |              0.1891  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3814 | >20%                    |                 5 |              0.07628 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3824 | >20%                    |                 2 |              0.1912  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3946 | >20%                    |                 2 |              0.1973  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3979 | >20%                    |                 2 |              0.19895 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4027 | >20%                    |                 5 |              0.08054 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4095 | 15-20%                  |                 2 |              0.20475 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.413  | >20%                    |                 2 |              0.2065  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4152 | 5-10%                   |                 2 |              0.2076  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4177 | >20%                    |                 2 |              0.20885 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4242 | 5-10%                   |                 5 |              0.08484 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4264 | <5%                     |                 2 |              0.2132  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4298 | >20%                    |                 5 |              0.08596 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4325 | >20%                    |                 5 |              0.0865  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4345 | >20%                    |                 5 |              0.0869  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4372 | >20%                    |                 2 |              0.2186  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4391 | 5-10%                   |                 2 |              0.21955 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4405 | >20%                    |                10 |              0.04405 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4408 | >20%                    |                 5 |              0.08816 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4457 | >20%                    |                 5 |              0.08914 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4483 | >20%                    |                 5 |              0.08966 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4496 | >20%                    |                 2 |              0.2248  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4532 | >20%                    |                 2 |              0.2266  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4574 | >20%                    |                 5 |              0.09148 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4661 | >20%                    |                 2 |              0.23305 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4687 | >20%                    |                 5 |              0.09374 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4752 | 10-15%                  |                 2 |              0.2376  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4757 | >20%                    |                 2 |              0.23785 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4773 | >20%                    |                 2 |              0.23865 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4831 | >20%                    |                 2 |              0.24155 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4858 | <5%                     |                10 |              0.04858 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4884 | 15-20%                  |                 5 |              0.09768 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4969 | >20%                    |                 2 |              0.24845 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5022 | >20%                    |                 2 |              0.2511  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5034 | >20%                    |                 5 |              0.10068 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.517  | >20%                    |                 5 |              0.1034  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5233 | 10-15%                  |                 5 |              0.10466 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5238 | >20%                    |                 5 |              0.10476 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5476 | >20%                    |                 5 |              0.10952 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5512 | >20%                    |                 2 |              0.2756  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5538 | >20%                    |                 5 |              0.11076 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5565 | 10-15%                  |                 2 |              0.27825 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5592 | 15-20%                  |                10 |              0.05592 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5621 | 5-10%                   |                 2 |              0.28105 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5705 | >20%                    |                 5 |              0.1141  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.572  | >20%                    |                 5 |              0.1144  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5765 | 15-20%                  |                 5 |              0.1153  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5769 | >20%                    |                 5 |              0.11538 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5796 | >20%                    |                 5 |              0.11592 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5882 | >20%                    |                 5 |              0.11764 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5904 | >20%                    |                 5 |              0.11808 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5953 | 15-20%                  |                 2 |              0.29765 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5962 | >20%                    |                 5 |              0.11924 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6182 | >20%                    |                 5 |              0.12364 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6187 | 10-15%                  |                 5 |              0.12374 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6194 | >20%                    |                 2 |              0.3097  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6246 | >20%                    |                 5 |              0.12492 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.628  | >20%                    |                 5 |              0.1256  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6296 | >20%                    |                 2 |              0.3148  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6354 | 10-15%                  |                 5 |              0.12708 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.639  | 15-20%                  |                 2 |              0.3195  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.648  | >20%                    |                 5 |              0.1296  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6482 | 15-20%                  |                 5 |              0.12964 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6494 | >20%                    |                 5 |              0.12988 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6504 | >20%                    |                10 |              0.06504 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6533 | >20%                    |                 5 |              0.13066 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6595 | 15-20%                  |                10 |              0.06595 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6667 | >20%                    |                 5 |              0.13334 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6759 | >20%                    |                 5 |              0.13518 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6863 | >20%                    |                 2 |              0.34315 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.687  | >20%                    |                 5 |              0.1374  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6969 | >20%                    |                10 |              0.06969 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7024 | >20%                    |                10 |              0.07024 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.706  | 15-20%                  |                10 |              0.0706  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7171 | >20%                    |                 5 |              0.14342 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7175 | <5%                     |                10 |              0.07175 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7186 | 15-20%                  |                 5 |              0.14372 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7207 | >20%                    |                 5 |              0.14414 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7266 | 15-20%                  |                10 |              0.07266 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7416 | >20%                    |                10 |              0.07416 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.753  | >20%                    |                10 |              0.0753  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7557 | 10-15%                  |                 2 |              0.37785 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7638 | 15-20%                  |                10 |              0.07638 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7674 | >20%                    |                 2 |              0.3837  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.773  | >20%                    |                 5 |              0.1546  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7749 | >20%                    |                10 |              0.07749 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7917 | >20%                    |                10 |              0.07917 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7994 | >20%                    |                 5 |              0.15988 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8055 | 15-20%                  |                10 |              0.08055 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8055 | >20%                    |                10 |              0.08055 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8058 | 15-20%                  |                10 |              0.08058 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8068 | >20%                    |                10 |              0.08068 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.822  | 15-20%                  |                 5 |              0.1644  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8297 | >20%                    |                 5 |              0.16594 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8324 | 5-10%                   |                10 |              0.08324 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8383 | >20%                    |                10 |              0.08383 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8437 | <5%                     |                10 |              0.08437 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8477 | >20%                    |                10 |              0.08477 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8548 | 15-20%                  |                10 |              0.08548 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8564 | 10-15%                  |                 2 |              0.4282  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8565 | >20%                    |                10 |              0.08565 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8822 | >20%                    |                 5 |              0.17644 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8909 | 10-15%                  |                 5 |              0.17818 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8913 | >20%                    |                 5 |              0.17826 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.893  | 15-20%                  |                10 |              0.0893  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9154 | >20%                    |                10 |              0.09154 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9303 | <5%                     |                10 |              0.09303 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.935  | >20%                    |                 2 |              0.4675  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.951  | 10-15%                  |                10 |              0.0951  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.957  | >20%                    |                 2 |              0.4785  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9615 | 10-15%                  |                10 |              0.09615 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9873 | 15-20%                  |                10 |              0.09873 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9953 | 15-20%                  |                10 |              0.09953 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9996 | >20%                    |                 2 |              0.4998  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      1.0059 | 5-10%                   |                10 |              0.10059 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0337 | >20%                    |                 5 |              0.20674 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.0513 | >20%                    |                10 |              0.10513 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0533 | 10-15%                  |                10 |              0.10533 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0718 | >20%                    |                10 |              0.10718 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0788 | >20%                    |                10 |              0.10788 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0854 | 15-20%                  |                10 |              0.10854 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0901 | >20%                    |                10 |              0.10901 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0962 | >20%                    |                 5 |              0.21924 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0973 | >20%                    |                10 |              0.10973 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1288 | >20%                    |                 5 |              0.22576 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1326 | >20%                    |                10 |              0.11326 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1332 | 10-15%                  |                 2 |              0.5666  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1493 | 5-10%                   |                10 |              0.11493 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1535 | 10-15%                  |                10 |              0.11535 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.155  | >20%                    |                10 |              0.1155  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1736 | <5%                     |                10 |              0.11736 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.183  | 5-10%                   |                10 |              0.1183  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1954 | >20%                    |                 5 |              0.23908 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.293  | 5-10%                   |                 2 |              0.6465  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2991 | 10-15%                  |                10 |              0.12991 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3037 | >20%                    |                10 |              0.13037 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3994 | 10-15%                  |                 5 |              0.27988 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.619  | 10-15%                  |                 5 |              0.3238  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6347 | >20%                    |                10 |              0.16347 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6386 | >20%                    |                10 |              0.16386 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7656 | >20%                    |                10 |              0.17656 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.8463 | >20%                    |                10 |              0.18463 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1949 | 10-15%                  |                10 |              0.21949 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4038 | 15-20%                  |                10 |              0.24038 |