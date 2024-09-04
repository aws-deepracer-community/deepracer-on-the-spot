# Spot Prices and Interruption Frequency

## This page provides: -

Region - the region of the instance (note - some regions would require you to bake your own AMI using the image builder script)

vCPU - number of vCPUs

RAM (GB) - amount of memory 

GPU RAM (GB) - amount of GPU memory

SpotPrice - hourly price of the spot instance

InterruptionFrequency - the likelihood of your instance experiencing interruption based on the [last month of data](https://aws.amazon.com/ec2/spot/instance-advisor/)

NumberOfWorkers - the number of robomaker workers the instance can support

PricePerWorkerHour - SpotPrice divided by the number of workers the InstanceType can support

Data correct as of 2024-09-04 01:25:17.657517, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | <5%                     |                 2 |              0.044   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1622 | 15-20%                  |                 5 |              0.03244 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1844 | 10-15%                  |                 2 |              0.0922  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2259 | >20%                    |                 2 |              0.11295 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2424 | <5%                     |                 2 |              0.1212  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.251  | 10-15%                  |                 2 |              0.1255  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2567 | 5-10%                   |                 2 |              0.12835 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2637 | <5%                     |                 2 |              0.13185 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2716 | <5%                     |                 2 |              0.1358  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2719 | <5%                     |                10 |              0.02719 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2859 | <5%                     |                 2 |              0.14295 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3026 | <5%                     |                 2 |              0.1513  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3045 | 10-15%                  |                 2 |              0.15225 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3079 | <5%                     |                 5 |              0.06158 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3083 | <5%                     |                 2 |              0.15415 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3118 | <5%                     |                 2 |              0.1559  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.325  | <5%                     |                 2 |              0.1625  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3338 | 15-20%                  |                 5 |              0.06676 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3451 | <5%                     |                 2 |              0.17255 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3531 | <5%                     |                 2 |              0.17655 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3543 | <5%                     |                 2 |              0.17715 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | <5%                     |                10 |              0.03698 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3719 | <5%                     |                 2 |              0.18595 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3723 | <5%                     |                 5 |              0.07446 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3785 | <5%                     |                 5 |              0.0757  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3825 | 10-15%                  |                 2 |              0.19125 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4003 | >20%                    |                10 |              0.04003 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | 5-10%                   |                10 |              0.04161 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4181 | >20%                    |                 2 |              0.20905 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.428  | >20%                    |                 2 |              0.214   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4331 | 15-20%                  |                 5 |              0.08662 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4382 | >20%                    |                 5 |              0.08764 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4424 | 5-10%                   |                 5 |              0.08848 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4493 | <5%                     |                 2 |              0.22465 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4534 | 10-15%                  |                 2 |              0.2267  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4543 | <5%                     |                 5 |              0.09086 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4569 | 5-10%                   |                 2 |              0.22845 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.466  | 15-20%                  |                 5 |              0.0932  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4697 | 5-10%                   |                 5 |              0.09394 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.47   | >20%                    |                 5 |              0.094   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4721 | >20%                    |                 2 |              0.23605 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.479  | <5%                     |                 5 |              0.0958  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4824 | <5%                     |                 5 |              0.09648 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.4829 | <5%                     |                 2 |              0.24145 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4887 | 10-15%                  |                 2 |              0.24435 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4887 | >20%                    |                 2 |              0.24435 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4912 | <5%                     |                 5 |              0.09824 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4938 | 5-10%                   |                 5 |              0.09876 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4959 | >20%                    |                 5 |              0.09918 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4988 | 5-10%                   |                 5 |              0.09976 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5044 | <5%                     |                 2 |              0.2522  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5057 | >20%                    |                 2 |              0.25285 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5104 | >20%                    |                 5 |              0.10208 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.511  | 10-15%                  |                 5 |              0.1022  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5124 | <5%                     |                 5 |              0.10248 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.518  | <5%                     |                 2 |              0.259   |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.537  | <5%                     |                10 |              0.0537  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5377 | 5-10%                   |                 2 |              0.26885 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5829 | >20%                    |                 2 |              0.29145 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5899 | >20%                    |                 2 |              0.29495 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5923 | 15-20%                  |                 5 |              0.11846 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5932 | <5%                     |                 5 |              0.11864 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5975 | >20%                    |                 2 |              0.29875 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5984 | 10-15%                  |                 2 |              0.2992  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6018 | <5%                     |                 5 |              0.12036 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6115 | >20%                    |                 5 |              0.1223  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6148 | >20%                    |                 5 |              0.12296 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6195 | >20%                    |                 5 |              0.1239  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.6198 | <5%                     |                10 |              0.06198 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6245 | <5%                     |                10 |              0.06245 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6469 | >20%                    |                 5 |              0.12938 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6485 | 5-10%                   |                 5 |              0.1297  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6505 | <5%                     |                 5 |              0.1301  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.6564 | <5%                     |                 5 |              0.13128 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6769 | <5%                     |                10 |              0.06769 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6857 | >20%                    |                10 |              0.06857 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6861 | <5%                     |                 5 |              0.13722 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7142 | <5%                     |                 5 |              0.14284 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7266 | >20%                    |                 2 |              0.3633  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7362 | <5%                     |                10 |              0.07362 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7413 | >20%                    |                10 |              0.07413 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7565 | 10-15%                  |                10 |              0.07565 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7689 | 10-15%                  |                10 |              0.07689 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7704 | >20%                    |                 5 |              0.15408 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7791 | >20%                    |                10 |              0.07791 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7803 | 15-20%                  |                10 |              0.07803 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7921 | >20%                    |                 5 |              0.15842 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8003 | 5-10%                   |                10 |              0.08003 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8131 | <5%                     |                10 |              0.08131 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8231 | 10-15%                  |                10 |              0.08231 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.8277 | <5%                     |                10 |              0.08277 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8282 | >20%                    |                10 |              0.08282 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8515 | <5%                     |                10 |              0.08515 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8652 | <5%                     |                10 |              0.08652 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8902 | 10-15%                  |                10 |              0.08902 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9026 | >20%                    |                 5 |              0.18052 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9109 | >20%                    |                10 |              0.09109 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9392 | >20%                    |                10 |              0.09392 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9396 | >20%                    |                10 |              0.09396 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.9404 | 5-10%                   |                10 |              0.09404 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9588 | <5%                     |                10 |              0.09588 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9644 | <5%                     |                10 |              0.09644 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9832 | 5-10%                   |                10 |              0.09832 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.9965 | >20%                    |                 5 |              0.1993  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.999  | >20%                    |                10 |              0.0999  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0251 | <5%                     |                10 |              0.10251 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0427 | 5-10%                   |                10 |              0.10427 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0557 | >20%                    |                10 |              0.10557 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1654 | >20%                    |                10 |              0.11654 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1955 | >20%                    |                10 |              0.11955 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1973 | >20%                    |                10 |              0.11973 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4392 | >20%                    |                10 |              0.14392 |