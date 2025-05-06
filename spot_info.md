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

Data correct as of 2025-05-06 01:51:21.453246, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1265 | >20%                    |                 2 |              0.06325 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2006 | >20%                    |                 5 |              0.04012 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.213  | >20%                    |                 5 |              0.0426  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2178 | 15-20%                  |                 5 |              0.04356 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2207 | 5-10%                   |                 5 |              0.04414 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2212 | <5%                     |                 2 |              0.1106  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2246 | >20%                    |                 2 |              0.1123  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2311 | 15-20%                  |                 2 |              0.11555 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2491 | <5%                     |                 5 |              0.04982 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2569 | 15-20%                  |                 2 |              0.12845 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2581 | 5-10%                   |                 2 |              0.12905 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.26   | >20%                    |                 2 |              0.13    |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2686 | 5-10%                   |                 2 |              0.1343  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2729 | <5%                     |                 2 |              0.13645 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.283  | 10-15%                  |                10 |              0.0283  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2872 | <5%                     |                 2 |              0.1436  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2883 | >20%                    |                 2 |              0.14415 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2884 | >20%                    |                 2 |              0.1442  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2959 | 10-15%                  |                 2 |              0.14795 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.296  | 5-10%                   |                 2 |              0.148   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2967 | 5-10%                   |                 5 |              0.05934 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3059 | <5%                     |                 2 |              0.15295 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3085 | 15-20%                  |                10 |              0.03085 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3115 | 5-10%                   |                 2 |              0.15575 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.313  | >20%                    |                 2 |              0.1565  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3144 | 5-10%                   |                 2 |              0.1572  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3148 | 10-15%                  |                10 |              0.03148 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3152 | >20%                    |                 2 |              0.1576  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3183 | >20%                    |                10 |              0.03183 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3184 | 15-20%                  |                10 |              0.03184 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3195 | 15-20%                  |                10 |              0.03195 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3199 | >20%                    |                 2 |              0.15995 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3258 | <5%                     |                 5 |              0.06516 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.331  | >20%                    |                 2 |              0.1655  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3363 | >20%                    |                10 |              0.03363 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3364 | >20%                    |                 2 |              0.1682  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3484 | >20%                    |                 5 |              0.06968 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3511 | 5-10%                   |                 5 |              0.07022 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3534 | >20%                    |                 2 |              0.1767  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3577 | <5%                     |                 5 |              0.07154 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3617 | >20%                    |                 2 |              0.18085 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3625 | >20%                    |                 5 |              0.0725  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3693 | >20%                    |                 2 |              0.18465 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3731 | <5%                     |                 2 |              0.18655 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3739 | >20%                    |                10 |              0.03739 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.387  | >20%                    |                 5 |              0.0774  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3875 | >20%                    |                 2 |              0.19375 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3944 | 10-15%                  |                10 |              0.03944 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3949 | 15-20%                  |                 5 |              0.07898 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3992 | 10-15%                  |                 2 |              0.1996  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4006 | 10-15%                  |                10 |              0.04006 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4046 | >20%                    |                10 |              0.04046 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4057 | 5-10%                   |                 5 |              0.08114 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4084 | >20%                    |                 2 |              0.2042  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4142 | 10-15%                  |                 2 |              0.2071  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4154 | 5-10%                   |                 2 |              0.2077  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4157 | >20%                    |                 2 |              0.20785 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4163 | >20%                    |                 2 |              0.20815 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4165 | 10-15%                  |                 2 |              0.20825 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4182 | >20%                    |                 5 |              0.08364 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4284 | >20%                    |                 5 |              0.08568 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.435  | 15-20%                  |                 5 |              0.087   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4402 | 15-20%                  |                 2 |              0.2201  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4444 | >20%                    |                 2 |              0.2222  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4451 | <5%                     |                 5 |              0.08902 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4537 | >20%                    |                 5 |              0.09074 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4589 | 10-15%                  |                 5 |              0.09178 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4604 | >20%                    |                 5 |              0.09208 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4618 | <5%                     |                 2 |              0.2309  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4624 | >20%                    |                 5 |              0.09248 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4624 | >20%                    |                 5 |              0.09248 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4713 | >20%                    |                 2 |              0.23565 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4734 | 5-10%                   |                 5 |              0.09468 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4742 | >20%                    |                 5 |              0.09484 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4806 | >20%                    |                 2 |              0.2403  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4817 | >20%                    |                 5 |              0.09634 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4903 | <5%                     |                 5 |              0.09806 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4953 | 5-10%                   |                 5 |              0.09906 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4962 | >20%                    |                 2 |              0.2481  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.501  | >20%                    |                 5 |              0.1002  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5018 | 10-15%                  |                 5 |              0.10036 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5023 | 15-20%                  |                 5 |              0.10046 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5084 | >20%                    |                 5 |              0.10168 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5248 | >20%                    |                 2 |              0.2624  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.525  | >20%                    |                 2 |              0.2625  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5274 | >20%                    |                 2 |              0.2637  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5278 | >20%                    |                 2 |              0.2639  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5299 | 10-15%                  |                 2 |              0.26495 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5527 | >20%                    |                 5 |              0.11054 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5681 | <5%                     |                10 |              0.05681 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5697 | 10-15%                  |                10 |              0.05697 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5698 | 5-10%                   |                 5 |              0.11396 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5734 | 10-15%                  |                 5 |              0.11468 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5761 | >20%                    |                 5 |              0.11522 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5766 | >20%                    |                 5 |              0.11532 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5789 | 10-15%                  |                 2 |              0.28945 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5823 | >20%                    |                 2 |              0.29115 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5928 | >20%                    |                 2 |              0.2964  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5952 | <5%                     |                 5 |              0.11904 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5986 | >20%                    |                 5 |              0.11972 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6251 | >20%                    |                 2 |              0.31255 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.628  | 10-15%                  |                 5 |              0.1256  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6336 | >20%                    |                 5 |              0.12672 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6359 | >20%                    |                 5 |              0.12718 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6491 | 5-10%                   |                10 |              0.06491 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6493 | <5%                     |                10 |              0.06493 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6557 | 15-20%                  |                10 |              0.06557 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6588 | >20%                    |                 5 |              0.13176 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6624 | 15-20%                  |                 5 |              0.13248 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6666 | >20%                    |                 2 |              0.3333  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6716 | >20%                    |                10 |              0.06716 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6895 | >20%                    |                 2 |              0.34475 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6953 | >20%                    |                 2 |              0.34765 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.711  | >20%                    |                 5 |              0.1422  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7182 | >20%                    |                10 |              0.07182 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7225 | >20%                    |                 5 |              0.1445  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7333 | >20%                    |                10 |              0.07333 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7344 | <5%                     |                 5 |              0.14688 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7383 | >20%                    |                10 |              0.07383 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7389 | <5%                     |                 5 |              0.14778 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7419 | 5-10%                   |                10 |              0.07419 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7445 | >20%                    |                 5 |              0.1489  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7451 | 15-20%                  |                10 |              0.07451 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7688 | <5%                     |                 5 |              0.15376 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7706 | 10-15%                  |                10 |              0.07706 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7725 | >20%                    |                10 |              0.07725 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7739 | >20%                    |                 5 |              0.15478 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7937 | >20%                    |                 5 |              0.15874 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7968 | <5%                     |                10 |              0.07968 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7987 | 15-20%                  |                10 |              0.07987 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8103 | 15-20%                  |                10 |              0.08103 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8193 | 15-20%                  |                10 |              0.08193 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8222 | >20%                    |                 2 |              0.4111  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8235 | 10-15%                  |                10 |              0.08235 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.836  | 5-10%                   |                10 |              0.0836  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8458 | 10-15%                  |                10 |              0.08458 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8485 | >20%                    |                10 |              0.08485 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8501 | >20%                    |                 2 |              0.42505 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8518 | >20%                    |                10 |              0.08518 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8533 | 10-15%                  |                 5 |              0.17066 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8664 | 10-15%                  |                10 |              0.08664 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8667 | 10-15%                  |                10 |              0.08667 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8853 | >20%                    |                 5 |              0.17706 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8903 | <5%                     |                10 |              0.08903 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8904 | 15-20%                  |                10 |              0.08904 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8938 | >20%                    |                 2 |              0.4469  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8996 | >20%                    |                10 |              0.08996 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9    | >20%                    |                10 |              0.09    |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9003 | 10-15%                  |                10 |              0.09003 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9183 | 15-20%                  |                10 |              0.09183 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9188 | <5%                     |                10 |              0.09188 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.936  | >20%                    |                 2 |              0.468   |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9594 | >20%                    |                10 |              0.09594 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0184 | >20%                    |                 2 |              0.5092  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0272 | <5%                     |                10 |              0.10272 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0412 | >20%                    |                10 |              0.10412 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0447 | >20%                    |                10 |              0.10447 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0611 | >20%                    |                 5 |              0.21222 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0664 | >20%                    |                10 |              0.10664 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0701 | <5%                     |                 5 |              0.21402 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1149 | <5%                     |                10 |              0.11149 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1176 | 15-20%                  |                 2 |              0.5588  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1532 | 10-15%                  |                 5 |              0.23064 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1744 | >20%                    |                10 |              0.11744 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1765 | 10-15%                  |                 2 |              0.58825 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2052 | >20%                    |                 5 |              0.24104 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2097 | >20%                    |                10 |              0.12097 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2711 | <5%                     |                 5 |              0.25422 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2938 | >20%                    |                 5 |              0.25876 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3029 | >20%                    |                10 |              0.13029 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3889 | >20%                    |                 2 |              0.69445 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4205 | 15-20%                  |                10 |              0.14205 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4247 | >20%                    |                 5 |              0.28494 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4312 | 15-20%                  |                10 |              0.14312 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5057 | >20%                    |                10 |              0.15057 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.545  | 15-20%                  |                10 |              0.1545  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6941 | 5-10%                   |                10 |              0.16941 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8123 | >20%                    |                10 |              0.18123 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9751 | <5%                     |                10 |              0.19751 |