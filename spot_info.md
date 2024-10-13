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

Data correct as of 2024-10-13 01:42:20.217680, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1091 | <5%                     |                 2 |              0.05455 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1296 | 10-15%                  |                 2 |              0.0648  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1532 | <5%                     |                 2 |              0.0766  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1763 | 15-20%                  |                 2 |              0.08815 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2092 | >20%                    |                 2 |              0.1046  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2255 | <5%                     |                 2 |              0.11275 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2274 | <5%                     |                 2 |              0.1137  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2299 | >20%                    |                 2 |              0.11495 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.237  | >20%                    |                 5 |              0.0474  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2434 | <5%                     |                 2 |              0.1217  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2488 | 10-15%                  |                 2 |              0.1244  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2515 | 15-20%                  |                 2 |              0.12575 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2519 | 10-15%                  |                 2 |              0.12595 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2559 | >20%                    |                 5 |              0.05118 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.26   | <5%                     |                 2 |              0.13    |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2729 | <5%                     |                 2 |              0.13645 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.277  | 15-20%                  |                 2 |              0.1385  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2794 | <5%                     |                 2 |              0.1397  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.2818 | >20%                    |                 5 |              0.05636 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2842 | <5%                     |                 2 |              0.1421  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.287  | 5-10%                   |                 2 |              0.1435  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2973 | >20%                    |                 5 |              0.05946 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3075 | 15-20%                  |                10 |              0.03075 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3084 | 15-20%                  |                 2 |              0.1542  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.31   | <5%                     |                 2 |              0.155   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3139 | 15-20%                  |                 2 |              0.15695 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.314  | <5%                     |                10 |              0.0314  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3299 | 5-10%                   |                 5 |              0.06598 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3351 | <5%                     |                 2 |              0.16755 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3377 | 5-10%                   |                 5 |              0.06754 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.338  | 15-20%                  |                 5 |              0.0676  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3425 | >20%                    |                 2 |              0.17125 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3494 | >20%                    |                 5 |              0.06988 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3512 | <5%                     |                 2 |              0.1756  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3519 | 5-10%                   |                 5 |              0.07038 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3598 | <5%                     |                 5 |              0.07196 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3788 | >20%                    |                 2 |              0.1894  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.3792 | 5-10%                   |                 5 |              0.07584 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3855 | >20%                    |                 5 |              0.0771  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3958 | >20%                    |                 5 |              0.07916 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4002 | <5%                     |                 5 |              0.08004 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4104 | <5%                     |                 5 |              0.08208 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4185 | 5-10%                   |                 2 |              0.20925 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4207 | >20%                    |                 2 |              0.21035 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4207 | >20%                    |                10 |              0.04207 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4226 | 5-10%                   |                10 |              0.04226 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4275 | 5-10%                   |                 2 |              0.21375 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4302 | <5%                     |                 5 |              0.08604 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4302 | <5%                     |                 2 |              0.2151  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4324 | 5-10%                   |                 2 |              0.2162  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4351 | 15-20%                  |                 5 |              0.08702 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4429 | >20%                    |                10 |              0.04429 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4459 | >20%                    |                 2 |              0.22295 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4489 | 15-20%                  |                 2 |              0.22445 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4511 | 10-15%                  |                 5 |              0.09022 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4527 | >20%                    |                 2 |              0.22635 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4528 | 10-15%                  |                 5 |              0.09056 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.4632 | 5-10%                   |                 5 |              0.09264 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4633 | <5%                     |                 2 |              0.23165 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4661 | <5%                     |                 5 |              0.09322 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4753 | 15-20%                  |                 5 |              0.09506 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4834 | <5%                     |                 5 |              0.09668 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4866 | >20%                    |                 2 |              0.2433  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4876 | 5-10%                   |                10 |              0.04876 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4883 | 5-10%                   |                10 |              0.04883 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4914 | 10-15%                  |                 5 |              0.09828 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4953 | >20%                    |                 2 |              0.24765 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.496  | <5%                     |                 5 |              0.0992  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5035 | >20%                    |                 2 |              0.25175 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5123 | 15-20%                  |                10 |              0.05123 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5174 | <5%                     |                 5 |              0.10348 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5204 | <5%                     |                 5 |              0.10408 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5256 | <5%                     |                 5 |              0.10512 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5314 | 5-10%                   |                10 |              0.05314 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5518 | >20%                    |                10 |              0.05518 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5519 | >20%                    |                 5 |              0.11038 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5752 | >20%                    |                 5 |              0.11504 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5902 | 15-20%                  |                 5 |              0.11804 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5939 | >20%                    |                 5 |              0.11878 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6054 | >20%                    |                 2 |              0.3027  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.6076 | <5%                     |                10 |              0.06076 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6117 | 15-20%                  |                 5 |              0.12234 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6122 | >20%                    |                 5 |              0.12244 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6296 | 5-10%                   |                 5 |              0.12592 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6323 | 15-20%                  |                10 |              0.06323 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.6473 | 15-20%                  |                10 |              0.06473 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.6515 | <5%                     |                10 |              0.06515 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6584 | <5%                     |                10 |              0.06584 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6592 | <5%                     |                10 |              0.06592 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6722 | >20%                    |                 2 |              0.3361  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6774 | >20%                    |                 5 |              0.13548 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6834 | 5-10%                   |                10 |              0.06834 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.685  | >20%                    |                10 |              0.0685  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6855 | >20%                    |                 2 |              0.34275 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6947 | <5%                     |                10 |              0.06947 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7203 | >20%                    |                10 |              0.07203 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7253 | >20%                    |                 5 |              0.14506 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7576 | 15-20%                  |                10 |              0.07576 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7577 | >20%                    |                10 |              0.07577 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7748 | 10-15%                  |                 5 |              0.15496 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7818 | 5-10%                   |                10 |              0.07818 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8027 | 10-15%                  |                10 |              0.08027 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.803  | 5-10%                   |                10 |              0.0803  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.816  | 15-20%                  |                10 |              0.0816  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8374 | >20%                    |                10 |              0.08374 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8693 | <5%                     |                10 |              0.08693 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8764 | <5%                     |                 2 |              0.4382  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9004 | >20%                    |                 5 |              0.18008 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9021 | >20%                    |                10 |              0.09021 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9055 | >20%                    |                10 |              0.09055 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9098 | 10-15%                  |                10 |              0.09098 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9187 | <5%                     |                10 |              0.09187 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9431 | 10-15%                  |                 2 |              0.47155 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9746 | 5-10%                   |                10 |              0.09746 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9817 | >20%                    |                10 |              0.09817 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0061 | <5%                     |                10 |              0.10061 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0272 | 10-15%                  |                 5 |              0.20544 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0426 | >20%                    |                10 |              0.10426 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1141 | >20%                    |                10 |              0.11141 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.121  | >20%                    |                 5 |              0.2242  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1523 | >20%                    |                10 |              0.11523 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.5019 | >20%                    |                10 |              0.15019 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.537  | 5-10%                   |                10 |              0.1537  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5445 | 5-10%                   |                10 |              0.15445 |