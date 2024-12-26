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

Data correct as of 2024-12-26 01:36:48.571460, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.1429 |                         |                 2 |              0.07145 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1536 |                         |                 2 |              0.0768  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1983 |                         |                 5 |              0.03966 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2004 | >20%                    |                 2 |              0.1002  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2039 | <5%                     |                 5 |              0.04078 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2142 |                         |                 5 |              0.04284 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2204 | 15-20%                  |                 2 |              0.1102  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2285 | 15-20%                  |                 2 |              0.11425 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2295 | 15-20%                  |                 2 |              0.11475 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2315 | 5-10%                   |                 2 |              0.11575 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.233  | >20%                    |                 2 |              0.1165  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2367 | 15-20%                  |                 2 |              0.11835 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2473 | 5-10%                   |                 2 |              0.12365 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2563 | <5%                     |                 2 |              0.12815 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2693 | <5%                     |                 2 |              0.13465 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2807 | 15-20%                  |                 5 |              0.05614 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2815 | <5%                     |                 2 |              0.14075 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2928 | 5-10%                   |                 2 |              0.1464  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2967 | 5-10%                   |                 2 |              0.14835 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.302  | 5-10%                   |                 2 |              0.151   |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3041 |                         |                10 |              0.03041 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.315  | >20%                    |                 2 |              0.1575  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3265 | <5%                     |                 2 |              0.16325 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3284 | >20%                    |                 2 |              0.1642  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3349 | <5%                     |                 5 |              0.06698 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3381 | 15-20%                  |                10 |              0.03381 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.34   | <5%                     |                 2 |              0.17    |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3405 |                         |                10 |              0.03405 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.348  | 10-15%                  |                 2 |              0.174   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3488 | 10-15%                  |                 2 |              0.1744  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3551 | 5-10%                   |                10 |              0.03551 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3578 | 10-15%                  |                 2 |              0.1789  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3593 | >20%                    |                 5 |              0.07186 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3603 | >20%                    |                 2 |              0.18015 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3662 | >20%                    |                10 |              0.03662 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3688 | 5-10%                   |                 5 |              0.07376 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3716 | >20%                    |                 5 |              0.07432 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3724 | >20%                    |                 2 |              0.1862  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3804 | <5%                     |                 5 |              0.07608 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.381  | <5%                     |                 2 |              0.1905  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3825 | <5%                     |                 5 |              0.0765  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3844 | 5-10%                   |                 2 |              0.1922  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3878 | <5%                     |                 5 |              0.07756 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.391  | >20%                    |                 2 |              0.1955  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3948 | >20%                    |                 2 |              0.1974  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4038 | 10-15%                  |                 2 |              0.2019  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4042 | 5-10%                   |                 2 |              0.2021  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.415  | 5-10%                   |                 5 |              0.083   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4225 | 5-10%                   |                 2 |              0.21125 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4265 | 10-15%                  |                 2 |              0.21325 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4284 | 5-10%                   |                 5 |              0.08568 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.437  | 10-15%                  |                10 |              0.0437  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.44   | >20%                    |                 5 |              0.088   |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4407 | >20%                    |                 5 |              0.08814 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4409 | 10-15%                  |                 5 |              0.08818 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4473 | <5%                     |                 5 |              0.08946 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4489 | >20%                    |                 5 |              0.08978 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4498 | >20%                    |                 5 |              0.08996 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4514 | 5-10%                   |                 5 |              0.09028 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.453  | 15-20%                  |                 2 |              0.2265  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4548 | 5-10%                   |                 2 |              0.2274  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.455  | 5-10%                   |                 5 |              0.091   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4554 | >20%                    |                 5 |              0.09108 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.464  | 5-10%                   |                 2 |              0.232   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4668 | 5-10%                   |                10 |              0.04668 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4767 | 10-15%                  |                 5 |              0.09534 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.477  | 10-15%                  |                10 |              0.0477  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4827 | <5%                     |                 5 |              0.09654 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4853 | 10-15%                  |                 2 |              0.24265 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4865 | 15-20%                  |                 2 |              0.24325 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4902 | <5%                     |                 5 |              0.09804 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4904 | 15-20%                  |                 5 |              0.09808 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.4946 | <5%                     |                 2 |              0.2473  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4965 | <5%                     |                 5 |              0.0993  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5052 | 10-15%                  |                 2 |              0.2526  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.511  | <5%                     |                 2 |              0.2555  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5273 | <5%                     |                 5 |              0.10546 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5319 | >20%                    |                 2 |              0.26595 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5339 | >20%                    |                10 |              0.05339 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5368 | >20%                    |                 5 |              0.10736 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5382 | >20%                    |                 5 |              0.10764 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5398 | >20%                    |                 5 |              0.10796 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5462 | 5-10%                   |                 5 |              0.10924 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5657 | 15-20%                  |                 5 |              0.11314 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5669 | 10-15%                  |                 5 |              0.11338 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5678 | >20%                    |                 5 |              0.11356 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5747 | >20%                    |                 2 |              0.28735 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5822 | <5%                     |                 5 |              0.11644 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5983 | >20%                    |                10 |              0.05983 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6213 | <5%                     |                 5 |              0.12426 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.644  | 15-20%                  |                 2 |              0.322   |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6535 | 10-15%                  |                10 |              0.06535 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6637 | >20%                    |                10 |              0.06637 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6653 | 5-10%                   |                10 |              0.06653 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6704 | <5%                     |                 5 |              0.13408 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6723 | 15-20%                  |                 5 |              0.13446 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.677  | >20%                    |                10 |              0.0677  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6807 | 5-10%                   |                10 |              0.06807 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6889 | >20%                    |                10 |              0.06889 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.689  | 15-20%                  |                 5 |              0.1378  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6909 | 10-15%                  |                10 |              0.06909 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6984 | 5-10%                   |                 5 |              0.13968 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7064 | >20%                    |                 2 |              0.3532  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7084 | <5%                     |                10 |              0.07084 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7092 | <5%                     |                 2 |              0.3546  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.742  | 5-10%                   |                10 |              0.0742  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7462 | >20%                    |                 5 |              0.14924 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.761  | >20%                    |                 5 |              0.1522  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7723 | 15-20%                  |                10 |              0.07723 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7793 | >20%                    |                 5 |              0.15586 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7969 | 15-20%                  |                10 |              0.07969 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.7971 | <5%                     |                 2 |              0.39855 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7998 | 5-10%                   |                10 |              0.07998 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8022 | <5%                     |                10 |              0.08022 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.8099 | >20%                    |                10 |              0.08099 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8207 | 5-10%                   |                10 |              0.08207 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8347 | 10-15%                  |                10 |              0.08347 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8403 | 10-15%                  |                10 |              0.08403 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8459 | 5-10%                   |                10 |              0.08459 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8486 | 10-15%                  |                10 |              0.08486 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8534 | >20%                    |                10 |              0.08534 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8693 | <5%                     |                10 |              0.08693 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8779 | 5-10%                   |                 5 |              0.17558 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8821 | 5-10%                   |                10 |              0.08821 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8873 | <5%                     |                10 |              0.08873 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9293 | 5-10%                   |                 5 |              0.18586 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9322 | >20%                    |                10 |              0.09322 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9528 | <5%                     |                 5 |              0.19056 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9529 | 15-20%                  |                10 |              0.09529 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9627 | 10-15%                  |                 2 |              0.48135 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.9656 | <5%                     |                10 |              0.09656 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9833 | 15-20%                  |                10 |              0.09833 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9919 | 5-10%                   |                10 |              0.09919 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0594 | <5%                     |                10 |              0.10594 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0838 | <5%                     |                10 |              0.10838 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0958 | >20%                    |                10 |              0.10958 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1156 | >20%                    |                10 |              0.11156 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1775 | 5-10%                   |                10 |              0.11775 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2813 | >20%                    |                10 |              0.12813 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2897 | <5%                     |                10 |              0.12897 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3913 | 5-10%                   |                10 |              0.13913 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5404 | 5-10%                   |                 5 |              0.30808 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0271 | 10-15%                  |                10 |              0.20271 |