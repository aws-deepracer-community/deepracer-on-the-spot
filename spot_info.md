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

Data correct as of 2026-04-16 03:21:43.210286, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1856 | >20%                    |                 2 |              0.0928  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1923 | 15-20%                  |                 2 |              0.09615 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2031 | >20%                    |                 2 |              0.10155 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2266 | 15-20%                  |                 5 |              0.04532 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2317 | >20%                    |                 2 |              0.11585 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2327 | >20%                    |                 2 |              0.11635 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2483 | >20%                    |                 2 |              0.12415 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2589 | >20%                    |                 2 |              0.12945 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2825 | 15-20%                  |                 2 |              0.14125 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.284  | 10-15%                  |                 2 |              0.142   |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2977 | 15-20%                  |                 5 |              0.05954 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3074 | >20%                    |                 2 |              0.1537  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3125 | 15-20%                  |                 5 |              0.0625  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3126 | >20%                    |                 2 |              0.1563  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3154 | >20%                    |                 5 |              0.06308 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.321  | 5-10%                   |                10 |              0.0321  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3245 | 15-20%                  |                 2 |              0.16225 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.327  | 10-15%                  |                 2 |              0.1635  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3299 | >20%                    |                10 |              0.03299 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3309 | >20%                    |                 5 |              0.06618 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3337 | 5-10%                   |                10 |              0.03337 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3343 | <5%                     |                 2 |              0.16715 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.337  | 10-15%                  |                 2 |              0.1685  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3408 | >20%                    |                 5 |              0.06816 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3456 | >20%                    |                 5 |              0.06912 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3494 | >20%                    |                10 |              0.03494 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3524 | 5-10%                   |                10 |              0.03524 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3648 | 10-15%                  |                 2 |              0.1824  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3697 | >20%                    |                 2 |              0.18485 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3698 | >20%                    |                 5 |              0.07396 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3745 | >20%                    |                 2 |              0.18725 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3816 | >20%                    |                 2 |              0.1908  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3904 | >20%                    |                 2 |              0.1952  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3948 | >20%                    |                 5 |              0.07896 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3973 | >20%                    |                 2 |              0.19865 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4009 | >20%                    |                 5 |              0.08018 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4096 | <5%                     |                 2 |              0.2048  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4129 | >20%                    |                 2 |              0.20645 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4144 | <5%                     |                10 |              0.04144 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4148 | >20%                    |                 5 |              0.08296 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.418  | >20%                    |                 2 |              0.209   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4212 | >20%                    |                 5 |              0.08424 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.425  | >20%                    |                 2 |              0.2125  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4297 | <5%                     |                 2 |              0.21485 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4335 | >20%                    |                 2 |              0.21675 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4343 | 15-20%                  |                 2 |              0.21715 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4351 | >20%                    |                 5 |              0.08702 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4405 | >20%                    |                 5 |              0.0881  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4473 | 10-15%                  |                 2 |              0.22365 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4507 | 15-20%                  |                 2 |              0.22535 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4541 | >20%                    |                 5 |              0.09082 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4551 | 15-20%                  |                 2 |              0.22755 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4583 | >20%                    |                 5 |              0.09166 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4601 | >20%                    |                 5 |              0.09202 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4621 | >20%                    |                 2 |              0.23105 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.468  | >20%                    |                 2 |              0.234   |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4725 | >20%                    |                 5 |              0.0945  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4781 | >20%                    |                10 |              0.04781 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4847 | >20%                    |                 5 |              0.09694 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4858 | >20%                    |                 5 |              0.09716 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4903 | >20%                    |                 2 |              0.24515 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5066 | >20%                    |                 2 |              0.2533  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5185 | >20%                    |                 5 |              0.1037  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5201 | >20%                    |                 5 |              0.10402 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5282 | 5-10%                   |                 5 |              0.10564 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5296 | >20%                    |                 5 |              0.10592 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5343 | >20%                    |                 5 |              0.10686 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5348 | >20%                    |                 2 |              0.2674  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5364 | 15-20%                  |                 5 |              0.10728 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5388 | >20%                    |                 5 |              0.10776 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5399 | >20%                    |                10 |              0.05399 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5498 | >20%                    |                10 |              0.05498 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5503 | 5-10%                   |                 2 |              0.27515 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5637 | <5%                     |                 5 |              0.11274 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5642 | 5-10%                   |                 5 |              0.11284 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5675 | 5-10%                   |                 2 |              0.28375 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5703 | >20%                    |                10 |              0.05703 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.578  | >20%                    |                 5 |              0.1156  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5821 | 10-15%                  |                 5 |              0.11642 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5841 | >20%                    |                 2 |              0.29205 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5902 | >20%                    |                 2 |              0.2951  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5925 | >20%                    |                10 |              0.05925 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6053 | >20%                    |                10 |              0.06053 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.609  | >20%                    |                 5 |              0.1218  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6287 | >20%                    |                 5 |              0.12574 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6292 | 10-15%                  |                 2 |              0.3146  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6357 | >20%                    |                 5 |              0.12714 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6456 | >20%                    |                10 |              0.06456 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6613 | >20%                    |                 2 |              0.33065 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6709 | >20%                    |                 5 |              0.13418 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6725 | >20%                    |                10 |              0.06725 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6891 | >20%                    |                 2 |              0.34455 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7    | >20%                    |                10 |              0.07    |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7078 | >20%                    |                10 |              0.07078 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7163 | >20%                    |                 5 |              0.14326 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7203 | 5-10%                   |                10 |              0.07203 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.728  | >20%                    |                 5 |              0.1456  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7418 | >20%                    |                10 |              0.07418 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7544 | >20%                    |                 5 |              0.15088 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7603 | >20%                    |                10 |              0.07603 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7739 | >20%                    |                10 |              0.07739 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7816 | >20%                    |                10 |              0.07816 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7856 | >20%                    |                 5 |              0.15712 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7858 | >20%                    |                 2 |              0.3929  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.789  | 15-20%                  |                10 |              0.0789  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7912 | 5-10%                   |                10 |              0.07912 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7997 | >20%                    |                 5 |              0.15994 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7997 | >20%                    |                 2 |              0.39985 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8077 | >20%                    |                10 |              0.08077 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8101 | >20%                    |                 5 |              0.16202 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8214 | >20%                    |                10 |              0.08214 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8307 | >20%                    |                10 |              0.08307 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8397 | >20%                    |                 5 |              0.16794 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8549 | >20%                    |                 5 |              0.17098 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8558 | 5-10%                   |                 2 |              0.4279  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8651 | 15-20%                  |                10 |              0.08651 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8674 | 15-20%                  |                10 |              0.08674 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8718 | 15-20%                  |                10 |              0.08718 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9021 | >20%                    |                 5 |              0.18042 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9123 | >20%                    |                10 |              0.09123 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9128 | >20%                    |                10 |              0.09128 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9248 | >20%                    |                10 |              0.09248 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9399 | >20%                    |                10 |              0.09399 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9456 | >20%                    |                10 |              0.09456 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9545 | 15-20%                  |                10 |              0.09545 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9545 | >20%                    |                10 |              0.09545 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9681 | 10-15%                  |                10 |              0.09681 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9797 | >20%                    |                10 |              0.09797 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9986 | 5-10%                   |                10 |              0.09986 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0336 | >20%                    |                 5 |              0.20672 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0405 | >20%                    |                 5 |              0.2081  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0464 | 10-15%                  |                 2 |              0.5232  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0496 | 15-20%                  |                10 |              0.10496 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1094 | >20%                    |                10 |              0.11094 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1104 | 10-15%                  |                10 |              0.11104 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1313 | >20%                    |                10 |              0.11313 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1571 | >20%                    |                10 |              0.11571 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2182 | >20%                    |                 5 |              0.24364 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.285  |                         |                 5 |              0.257   |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2888 | >20%                    |                 2 |              0.6444  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3073 | >20%                    |                 5 |              0.26146 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.32   | >20%                    |                 5 |              0.264   |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3616 | 15-20%                  |                10 |              0.13616 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.4191 | >20%                    |                10 |              0.14191 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4258 | 15-20%                  |                10 |              0.14258 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.5136 |                         |                 2 |              0.7568  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5652 | >20%                    |                10 |              0.15652 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6219 | 15-20%                  |                 5 |              0.32438 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6528 | >20%                    |                10 |              0.16528 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.7076 | 5-10%                   |                 2 |              0.8538  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.7407 |                         |                10 |              0.17407 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.3069 | >20%                    |                10 |              0.33069 |