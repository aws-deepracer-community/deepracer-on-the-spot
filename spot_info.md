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

Data correct as of 2025-10-15 01:47:57.838071, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1739 | >20%                    |                 5 |              0.03478 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2221 | 10-15%                  |                 2 |              0.11105 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2237 | >20%                    |                 2 |              0.11185 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2283 | >20%                    |                 2 |              0.11415 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2324 | >20%                    |                 2 |              0.1162  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2506 | >20%                    |                 2 |              0.1253  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.254  | 5-10%                   |                 2 |              0.127   |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2578 | 5-10%                   |                 2 |              0.1289  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2601 | >20%                    |                 2 |              0.13005 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2609 | >20%                    |                 2 |              0.13045 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2662 | 10-15%                  |                 2 |              0.1331  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2907 | >20%                    |                 2 |              0.14535 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2976 | >20%                    |                 2 |              0.1488  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.2991 | >20%                    |                 5 |              0.05982 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3107 | 15-20%                  |                 2 |              0.15535 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3279 | >20%                    |                 5 |              0.06558 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3307 | >20%                    |                 2 |              0.16535 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3315 | 15-20%                  |                 2 |              0.16575 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3319 | 10-15%                  |                 2 |              0.16595 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3447 | >20%                    |                 2 |              0.17235 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3532 | >20%                    |                 2 |              0.1766  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3574 | 5-10%                   |                10 |              0.03574 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3605 | >20%                    |                10 |              0.03605 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3636 | >20%                    |                 2 |              0.1818  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3641 | 15-20%                  |                 2 |              0.18205 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3658 | >20%                    |                 2 |              0.1829  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3789 | 15-20%                  |                 2 |              0.18945 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3799 | >20%                    |                 5 |              0.07598 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3847 | >20%                    |                 2 |              0.19235 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3862 | >20%                    |                 5 |              0.07724 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3868 | >20%                    |                 2 |              0.1934  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3885 | >20%                    |                 5 |              0.0777  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3968 | >20%                    |                 2 |              0.1984  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3991 | >20%                    |                 2 |              0.19955 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4075 | >20%                    |                 5 |              0.0815  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4079 | 5-10%                   |                 5 |              0.08158 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4167 | 5-10%                   |                 2 |              0.20835 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4177 | >20%                    |                10 |              0.04177 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4188 | >20%                    |                 2 |              0.2094  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4222 | >20%                    |                 2 |              0.2111  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4328 | >20%                    |                 5 |              0.08656 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4337 | 5-10%                   |                 2 |              0.21685 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.435  | >20%                    |                 2 |              0.2175  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4363 | >20%                    |                 5 |              0.08726 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4439 | >20%                    |                 2 |              0.22195 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4451 | >20%                    |                 2 |              0.22255 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4558 | >20%                    |                 5 |              0.09116 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4566 | >20%                    |                 2 |              0.2283  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4588 | >20%                    |                 5 |              0.09176 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.46   | <5%                     |                 2 |              0.23    |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4611 | >20%                    |                 5 |              0.09222 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4663 | 15-20%                  |                 5 |              0.09326 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4695 | >20%                    |                 5 |              0.0939  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4751 | 10-15%                  |                 2 |              0.23755 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4793 | 10-15%                  |                 5 |              0.09586 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4824 | >20%                    |                 2 |              0.2412  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4845 | 10-15%                  |                 2 |              0.24225 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4874 | >20%                    |                 2 |              0.2437  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5047 | >20%                    |                 2 |              0.25235 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5074 | >20%                    |                 5 |              0.10148 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5124 | >20%                    |                 5 |              0.10248 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5347 | >20%                    |                 5 |              0.10694 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5388 | >20%                    |                 5 |              0.10776 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5483 | >20%                    |                 2 |              0.27415 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5539 | >20%                    |                 5 |              0.11078 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5593 | >20%                    |                 5 |              0.11186 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.561  | >20%                    |                 5 |              0.1122  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5614 | 5-10%                   |                 2 |              0.2807  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.568  | >20%                    |                 2 |              0.284   |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5869 | >20%                    |                 5 |              0.11738 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5882 | >20%                    |                 5 |              0.11764 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5895 | 10-15%                  |                 2 |              0.29475 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5925 | >20%                    |                 5 |              0.1185  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.604  | >20%                    |                 5 |              0.1208  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6156 | >20%                    |                 5 |              0.12312 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6163 | 15-20%                  |                 2 |              0.30815 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6206 | >20%                    |                 5 |              0.12412 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6298 | 10-15%                  |                 5 |              0.12596 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6309 | >20%                    |                 5 |              0.12618 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6327 | >20%                    |                 5 |              0.12654 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6377 | >20%                    |                 5 |              0.12754 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6383 | >20%                    |                10 |              0.06383 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6394 | 15-20%                  |                 5 |              0.12788 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.64   | >20%                    |                 2 |              0.32    |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6435 | 10-15%                  |                 5 |              0.1287  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.648  | <5%                     |                10 |              0.0648  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6502 | 15-20%                  |                10 |              0.06502 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6533 | 15-20%                  |                 2 |              0.32665 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6543 | 15-20%                  |                 5 |              0.13086 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6575 | >20%                    |                 2 |              0.32875 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6577 | >20%                    |                10 |              0.06577 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6611 | >20%                    |                 5 |              0.13222 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6643 | >20%                    |                 5 |              0.13286 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6691 | >20%                    |                 5 |              0.13382 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6838 | >20%                    |                 5 |              0.13676 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6861 | <5%                     |                10 |              0.06861 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6918 | 15-20%                  |                10 |              0.06918 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.696  | >20%                    |                 2 |              0.348   |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6993 | >20%                    |                10 |              0.06993 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7003 | 15-20%                  |                10 |              0.07003 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7022 | 15-20%                  |                 5 |              0.14044 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7041 | 15-20%                  |                10 |              0.07041 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7206 | >20%                    |                10 |              0.07206 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.721  | >20%                    |                 5 |              0.1442  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7294 | 15-20%                  |                10 |              0.07294 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7304 | >20%                    |                 5 |              0.14608 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7366 | >20%                    |                 5 |              0.14732 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7374 | >20%                    |                10 |              0.07374 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7512 | >20%                    |                 5 |              0.15024 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7656 | >20%                    |                10 |              0.07656 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7935 | >20%                    |                10 |              0.07935 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7968 | >20%                    |                 5 |              0.15936 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7995 | 15-20%                  |                10 |              0.07995 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.801  | >20%                    |                 2 |              0.4005  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8028 | >20%                    |                 5 |              0.16056 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8083 | 5-10%                   |                10 |              0.08083 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8113 | 10-15%                  |                 2 |              0.40565 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8118 | 15-20%                  |                10 |              0.08118 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.814  | >20%                    |                10 |              0.0814  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8251 | >20%                    |                10 |              0.08251 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8267 | >20%                    |                 5 |              0.16534 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8305 | 10-15%                  |                 2 |              0.41525 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8352 | 15-20%                  |                 5 |              0.16704 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8436 | >20%                    |                10 |              0.08436 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8587 | >20%                    |                 5 |              0.17174 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.865  | 10-15%                  |                 5 |              0.173   |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8699 | 15-20%                  |                10 |              0.08699 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8754 | >20%                    |                10 |              0.08754 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8944 | >20%                    |                 5 |              0.17888 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9078 | <5%                     |                10 |              0.09078 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9111 | <5%                     |                10 |              0.09111 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9113 | >20%                    |                10 |              0.09113 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.923  | >20%                    |                 2 |              0.4615  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9262 | 10-15%                  |                10 |              0.09262 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9284 | 15-20%                  |                10 |              0.09284 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9412 | 10-15%                  |                10 |              0.09412 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9598 | >20%                    |                10 |              0.09598 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9684 | 15-20%                  |                10 |              0.09684 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9844 | 5-10%                   |                10 |              0.09844 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9875 | >20%                    |                 2 |              0.49375 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0023 | >20%                    |                 2 |              0.50115 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0037 | 15-20%                  |                10 |              0.10037 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0066 | 5-10%                   |                10 |              0.10066 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0235 | 10-15%                  |                10 |              0.10235 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0495 | >20%                    |                 5 |              0.2099  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0896 | 10-15%                  |                 2 |              0.5448  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0899 | >20%                    |                10 |              0.10899 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0984 | 15-20%                  |                10 |              0.10984 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0987 | >20%                    |                10 |              0.10987 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1099 | >20%                    |                10 |              0.11099 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1119 | >20%                    |                10 |              0.11119 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1155 | >20%                    |                 5 |              0.2231  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1232 | >20%                    |                 5 |              0.22464 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1262 | <5%                     |                10 |              0.11262 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1284 | 10-15%                  |                10 |              0.11284 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1409 | >20%                    |                10 |              0.11409 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1572 | >20%                    |                 5 |              0.23144 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1877 | >20%                    |                10 |              0.11877 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1923 | 5-10%                   |                10 |              0.11923 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1988 | 5-10%                   |                10 |              0.11988 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2186 | >20%                    |                10 |              0.12186 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2638 | 10-15%                  |                10 |              0.12638 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2649 | 5-10%                   |                 2 |              0.63245 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2777 | >20%                    |                10 |              0.12777 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3964 | 10-15%                  |                 5 |              0.27928 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5546 | >20%                    |                10 |              0.15546 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6619 | 10-15%                  |                 5 |              0.33238 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6773 | >20%                    |                10 |              0.16773 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6984 | >20%                    |                10 |              0.16984 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1117 | 10-15%                  |                10 |              0.21117 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.2    | >20%                    |                10 |              0.22    |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.33   | 15-20%                  |                10 |              0.233   |