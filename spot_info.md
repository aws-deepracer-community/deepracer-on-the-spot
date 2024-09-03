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

Data correct as of 2024-09-03 01:23:58.682189, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | <5%                     |                 2 |              0.044   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1575 | 15-20%                  |                 5 |              0.0315  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1735 | 10-15%                  |                 2 |              0.08675 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2267 | >20%                    |                 2 |              0.11335 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2417 | <5%                     |                 2 |              0.12085 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2501 | 10-15%                  |                 2 |              0.12505 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2568 | 5-10%                   |                 2 |              0.1284  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2643 | <5%                     |                 2 |              0.13215 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2716 | <5%                     |                 2 |              0.1358  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2823 | >20%                    |                10 |              0.02823 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2859 | <5%                     |                 2 |              0.14295 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2973 | <5%                     |                 5 |              0.05946 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.2993 | <5%                     |                 2 |              0.14965 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3121 | <5%                     |                 2 |              0.15605 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3126 | 10-15%                  |                 2 |              0.1563  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3151 | <5%                     |                 2 |              0.15755 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.325  | <5%                     |                 2 |              0.1625  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3323 | 15-20%                  |                 5 |              0.06646 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3472 | <5%                     |                 2 |              0.1736  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3531 | <5%                     |                 2 |              0.17655 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.356  | <5%                     |                 2 |              0.178   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | <5%                     |                10 |              0.03698 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3746 | <5%                     |                 2 |              0.1873  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.375  | <5%                     |                 5 |              0.075   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3797 | <5%                     |                 5 |              0.07594 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3824 | 10-15%                  |                 2 |              0.1912  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4142 | >20%                    |                10 |              0.04142 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | 5-10%                   |                10 |              0.04161 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4204 | >20%                    |                 2 |              0.2102  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.428  | >20%                    |                 2 |              0.214   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4295 | <5%                     |                 2 |              0.21475 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4333 | 15-20%                  |                 5 |              0.08666 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.44   | 5-10%                   |                 5 |              0.088   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4514 | 10-15%                  |                 2 |              0.2257  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4541 | 5-10%                   |                 2 |              0.22705 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4572 | 5-10%                   |                 2 |              0.2286  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4579 | <5%                     |                 5 |              0.09158 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.459  | >20%                    |                 5 |              0.0918  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4608 | >20%                    |                 2 |              0.2304  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4708 | <5%                     |                 5 |              0.09416 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.4718 | <5%                     |                 2 |              0.2359  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4729 | 5-10%                   |                 5 |              0.09458 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4734 | >20%                    |                 2 |              0.2367  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4737 | >20%                    |                 5 |              0.09474 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4737 | >20%                    |                 5 |              0.09474 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.4748 | <5%                     |                 2 |              0.2374  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4754 | 15-20%                  |                 5 |              0.09508 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4828 | <5%                     |                 5 |              0.09656 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4909 | 5-10%                   |                 5 |              0.09818 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.493  | 5-10%                   |                 5 |              0.0986  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5004 | <5%                     |                 5 |              0.10008 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5057 | >20%                    |                 2 |              0.25285 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5124 | 10-15%                  |                 2 |              0.2562  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.514  | <5%                     |                 5 |              0.1028  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5147 | 10-15%                  |                 5 |              0.10294 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5244 | >20%                    |                 5 |              0.10488 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.5245 | <5%                     |                 2 |              0.26225 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5704 | <5%                     |                10 |              0.05704 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5826 | >20%                    |                 2 |              0.2913  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5881 | <5%                     |                 5 |              0.11762 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5935 | >20%                    |                 2 |              0.29675 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5945 | 10-15%                  |                 2 |              0.29725 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.595  | 15-20%                  |                 5 |              0.119   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5976 | <5%                     |                 5 |              0.11952 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5994 | >20%                    |                 2 |              0.2997  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6113 | >20%                    |                 5 |              0.12226 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6137 | >20%                    |                 5 |              0.12274 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6145 | >20%                    |                 5 |              0.1229  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6202 | <5%                     |                10 |              0.06202 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6229 | <5%                     |                 5 |              0.12458 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.6322 | <5%                     |                10 |              0.06322 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6493 | 5-10%                   |                 5 |              0.12986 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6612 | >20%                    |                 5 |              0.13224 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6617 | <5%                     |                 5 |              0.13234 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6727 | <5%                     |                10 |              0.06727 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.6779 | <5%                     |                 5 |              0.13558 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.6816 | <5%                     |                 5 |              0.13632 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6833 | >20%                    |                10 |              0.06833 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7257 | >20%                    |                 2 |              0.36285 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7377 | >20%                    |                10 |              0.07377 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7408 | <5%                     |                10 |              0.07408 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7552 | 10-15%                  |                10 |              0.07552 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7741 | >20%                    |                 5 |              0.15482 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7774 | 15-20%                  |                10 |              0.07774 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7805 | 10-15%                  |                10 |              0.07805 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7907 | >20%                    |                 5 |              0.15814 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7967 | >20%                    |                10 |              0.07967 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7994 | 5-10%                   |                10 |              0.07994 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8004 | <5%                     |                10 |              0.08004 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8215 | 10-15%                  |                10 |              0.08215 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.8344 | <5%                     |                10 |              0.08344 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.841  | >20%                    |                10 |              0.0841  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8508 | <5%                     |                10 |              0.08508 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8605 | 10-15%                  |                10 |              0.08605 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8698 | <5%                     |                10 |              0.08698 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.8967 | 5-10%                   |                10 |              0.08967 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9055 | >20%                    |                 5 |              0.1811  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9187 | >20%                    |                10 |              0.09187 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9477 | >20%                    |                10 |              0.09477 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9503 | >20%                    |                10 |              0.09503 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9551 | <5%                     |                10 |              0.09551 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9609 | <5%                     |                10 |              0.09609 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9705 | <5%                     |                10 |              0.09705 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9789 | 5-10%                   |                10 |              0.09789 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.9965 | >20%                    |                 5 |              0.1993  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0063 | >20%                    |                10 |              0.10063 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0446 | 5-10%                   |                10 |              0.10446 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0702 | >20%                    |                10 |              0.10702 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1602 | >20%                    |                10 |              0.11602 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1936 | >20%                    |                10 |              0.11936 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2065 | >20%                    |                10 |              0.12065 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4392 | >20%                    |                10 |              0.14392 |