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

Data correct as of 2026-09-19 03:55:50.274243, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1082 | >20%                    |                 2 |              0.0541  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1541 | 15-20%                  |                 2 |              0.07705 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1798 | >20%                    |                 5 |              0.03596 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2277 | 15-20%                  |                 5 |              0.04554 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2285 | >20%                    |                 2 |              0.11425 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2342 | >20%                    |                 2 |              0.1171  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2428 | >20%                    |                 2 |              0.1214  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2555 | >20%                    |                 2 |              0.12775 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.257  | >20%                    |                 2 |              0.1285  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.2645 | >20%                    |                 2 |              0.13225 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.2692 |                         |                 5 |              0.05384 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2857 | >20%                    |                 2 |              0.14285 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2904 | 15-20%                  |                 2 |              0.1452  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3097 | 10-15%                  |                 2 |              0.15485 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3144 | >20%                    |                 2 |              0.1572  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3434 | >20%                    |                 2 |              0.1717  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3467 | >20%                    |                 5 |              0.06934 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3496 | >20%                    |                 2 |              0.1748  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3638 | >20%                    |                 5 |              0.07276 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3701 | 15-20%                  |                 2 |              0.18505 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3787 | >20%                    |                 5 |              0.07574 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3855 | 10-15%                  |                 2 |              0.19275 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3892 | <5%                     |                 2 |              0.1946  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3951 | >20%                    |                 5 |              0.07902 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3967 | >20%                    |                 2 |              0.19835 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4049 | >20%                    |                 5 |              0.08098 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.416  | >20%                    |                 2 |              0.208   |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4208 | >20%                    |                10 |              0.04208 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.425  | 15-20%                  |                 2 |              0.2125  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4304 | >20%                    |                 5 |              0.08608 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4318 | >20%                    |                 2 |              0.2159  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4341 | >20%                    |                 2 |              0.21705 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4413 | 5-10%                   |                10 |              0.04413 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4414 | >20%                    |                 2 |              0.2207  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.461  | 15-20%                  |                 2 |              0.2305  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4667 | >20%                    |                10 |              0.04667 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.474  | >20%                    |                 5 |              0.0948  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4752 | >20%                    |                 5 |              0.09504 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4836 | 10-15%                  |                 2 |              0.2418  |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.486  |                         |                 2 |              0.243   |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.486  | >20%                    |                 5 |              0.0972  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.496  | >20%                    |                 5 |              0.0992  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4975 | >20%                    |                 5 |              0.0995  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5017 | >20%                    |                 5 |              0.10034 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5017 | <5%                     |                 2 |              0.25085 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5057 | >20%                    |                 2 |              0.25285 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5146 | >20%                    |                 5 |              0.10292 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5191 | >20%                    |                 5 |              0.10382 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5289 | 10-15%                  |                10 |              0.05289 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5302 | >20%                    |                10 |              0.05302 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5403 | >20%                    |                 2 |              0.27015 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5441 | >20%                    |                 2 |              0.27205 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5446 | <5%                     |                10 |              0.05446 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5619 | >20%                    |                 5 |              0.11238 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5649 | >20%                    |                 5 |              0.11298 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5768 | >20%                    |                 2 |              0.2884  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5786 | >20%                    |                 5 |              0.11572 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.596  | 15-20%                  |                10 |              0.0596  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5961 | 15-20%                  |                10 |              0.05961 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5982 | 10-15%                  |                 5 |              0.11964 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6017 | 5-10%                   |                10 |              0.06017 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6166 | >20%                    |                 5 |              0.12332 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6249 | >20%                    |                10 |              0.06249 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6274 | >20%                    |                 5 |              0.12548 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6283 | 5-10%                   |                 5 |              0.12566 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.6358 | >20%                    |                 2 |              0.3179  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6401 | 10-15%                  |                 2 |              0.32005 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6661 | >20%                    |                 5 |              0.13322 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6768 | <5%                     |                 2 |              0.3384  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6829 | 5-10%                   |                 2 |              0.34145 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6888 | >20%                    |                 5 |              0.13776 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.689  | >20%                    |                10 |              0.0689  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6978 | >20%                    |                 5 |              0.13956 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.7125 | >20%                    |                 2 |              0.35625 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7136 | >20%                    |                 5 |              0.14272 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7147 | >20%                    |                 5 |              0.14294 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7158 | >20%                    |                10 |              0.07158 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7181 | >20%                    |                 2 |              0.35905 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7234 | >20%                    |                10 |              0.07234 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7328 | 15-20%                  |                 5 |              0.14656 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7332 | 15-20%                  |                 2 |              0.3666  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7428 | >20%                    |                10 |              0.07428 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7482 | >20%                    |                 2 |              0.3741  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7595 | >20%                    |                 5 |              0.1519  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7665 | >20%                    |                 5 |              0.1533  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.791  | >20%                    |                10 |              0.0791  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8376 | 10-15%                  |                 2 |              0.4188  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8399 | >20%                    |                 2 |              0.41995 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8434 | 15-20%                  |                10 |              0.08434 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8455 | >20%                    |                 2 |              0.42275 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8481 | >20%                    |                 5 |              0.16962 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8571 | >20%                    |                10 |              0.08571 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8594 | 15-20%                  |                 5 |              0.17188 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8685 | >20%                    |                10 |              0.08685 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8772 | 5-10%                   |                10 |              0.08772 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9056 | <5%                     |                 5 |              0.18112 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.911  | >20%                    |                 5 |              0.1822  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9124 | >20%                    |                 5 |              0.18248 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.916  | 10-15%                  |                 2 |              0.458   |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9379 |                         |                 2 |              0.46895 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9659 | >20%                    |                10 |              0.09659 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9702 | 15-20%                  |                10 |              0.09702 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9801 | >20%                    |                 5 |              0.19602 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9917 | >20%                    |                10 |              0.09917 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9937 | >20%                    |                10 |              0.09937 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0203 | 15-20%                  |                10 |              0.10203 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.0215 | >20%                    |                 5 |              0.2043  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0294 | >20%                    |                10 |              0.10294 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      1.0408 | >20%                    |                 2 |              0.5204  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0534 | >20%                    |                10 |              0.10534 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.0717 |                         |                10 |              0.10717 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0728 | >20%                    |                10 |              0.10728 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.0779 | >20%                    |                 5 |              0.21558 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0801 | 15-20%                  |                10 |              0.10801 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0895 | >20%                    |                10 |              0.10895 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0937 | >20%                    |                10 |              0.10937 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.096  | >20%                    |                10 |              0.1096  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1034 | >20%                    |                 5 |              0.22068 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1161 | 5-10%                   |                10 |              0.11161 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1228 | >20%                    |                10 |              0.11228 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1334 | >20%                    |                 5 |              0.22668 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1508 | 5-10%                   |                 2 |              0.5754  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1812 |                         |                 2 |              0.5906  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1861 |                         |                 5 |              0.23722 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2105 | >20%                    |                10 |              0.12105 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2138 | >20%                    |                10 |              0.12138 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2155 | >20%                    |                10 |              0.12155 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2476 |                         |                 5 |              0.24952 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.273  | >20%                    |                 5 |              0.2546  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3452 | >20%                    |                10 |              0.13452 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3479 | >20%                    |                 2 |              0.67395 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3569 | 10-15%                  |                10 |              0.13569 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3612 | 10-15%                  |                 2 |              0.6806  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3791 | >20%                    |                10 |              0.13791 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.387  | 15-20%                  |                10 |              0.1387  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4096 | >20%                    |                 5 |              0.28192 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.4246 | 5-10%                   |                 2 |              0.7123  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4588 | >20%                    |                10 |              0.14588 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5316 | >20%                    |                 2 |              0.7658  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.55   | 5-10%                   |                 5 |              0.31    |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6204 | >20%                    |                10 |              0.16204 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7898 | >20%                    |                 5 |              0.35796 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.8319 | 15-20%                  |                10 |              0.18319 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8864 |                         |                10 |              0.18864 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0406 | 5-10%                   |                 2 |              1.0203  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.1005 |                         |                10 |              0.21005 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.1215 | 15-20%                  |                 5 |              0.4243  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2405 | 5-10%                   |                10 |              0.22405 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.6188 | >20%                    |                10 |              0.26188 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6334 | >20%                    |                10 |              0.26334 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0317 | >20%                    |                10 |              0.30317 |