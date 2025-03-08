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

Data correct as of 2025-03-08 01:16:04.681772, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1115 | 10-15%                  |                 2 |              0.05575 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1404 | >20%                    |                 2 |              0.0702  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1423 | 5-10%                   |                 5 |              0.02846 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1822 | >20%                    |                 5 |              0.03644 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1871 | 5-10%                   |                 2 |              0.09355 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1938 | 15-20%                  |                 5 |              0.03876 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2041 | >20%                    |                 5 |              0.04082 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2149 | 5-10%                   |                 2 |              0.10745 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.216  | 5-10%                   |                 5 |              0.0432  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2318 | >20%                    |                 2 |              0.1159  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2331 | >20%                    |                 2 |              0.11655 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2334 | >20%                    |                 2 |              0.1167  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.236  | 5-10%                   |                10 |              0.0236  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.236  | 15-20%                  |                 2 |              0.118   |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2412 | <5%                     |                 2 |              0.1206  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2431 | 10-15%                  |                 5 |              0.04862 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2462 | 5-10%                   |                 2 |              0.1231  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2469 | 10-15%                  |                 2 |              0.12345 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2511 | 15-20%                  |                 2 |              0.12555 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2588 | >20%                    |                 2 |              0.1294  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2644 | 5-10%                   |                10 |              0.02644 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2814 | 5-10%                   |                 2 |              0.1407  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2867 | 10-15%                  |                10 |              0.02867 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3006 | 5-10%                   |                 5 |              0.06012 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3019 | 5-10%                   |                 2 |              0.15095 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3036 | 5-10%                   |                 2 |              0.1518  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3052 | 10-15%                  |                 2 |              0.1526  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3091 | <5%                     |                 2 |              0.15455 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3122 | <5%                     |                 2 |              0.1561  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3125 | >20%                    |                 2 |              0.15625 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.3284 | 5-10%                   |                 5 |              0.06568 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | 5-10%                   |                10 |              0.03351 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.3422 | <5%                     |                 2 |              0.1711  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3436 | >20%                    |                 2 |              0.1718  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3442 | 10-15%                  |                 2 |              0.1721  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3484 | >20%                    |                 5 |              0.06968 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3529 | >20%                    |                 2 |              0.17645 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3549 | >20%                    |                 2 |              0.17745 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3612 | 5-10%                   |                 2 |              0.1806  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3617 | 10-15%                  |                 5 |              0.07234 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3639 | >20%                    |                10 |              0.03639 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3668 | 5-10%                   |                 5 |              0.07336 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3714 | >20%                    |                 2 |              0.1857  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3722 | 5-10%                   |                10 |              0.03722 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3739 | <5%                     |                 2 |              0.18695 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3758 | 15-20%                  |                10 |              0.03758 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3789 | >20%                    |                 2 |              0.18945 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3846 | <5%                     |                 5 |              0.07692 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3878 | >20%                    |                 2 |              0.1939  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3879 | >20%                    |                 5 |              0.07758 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3915 | 10-15%                  |                10 |              0.03915 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3931 | <5%                     |                 5 |              0.07862 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3934 | >20%                    |                 2 |              0.1967  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3953 | >20%                    |                 5 |              0.07906 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.405  | >20%                    |                 2 |              0.2025  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4067 | <5%                     |                 2 |              0.20335 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4138 | 5-10%                   |                 2 |              0.2069  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4158 | 10-15%                  |                10 |              0.04158 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4196 | <5%                     |                10 |              0.04196 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4243 | 5-10%                   |                 2 |              0.21215 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4278 | >20%                    |                10 |              0.04278 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4297 | 10-15%                  |                 5 |              0.08594 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4299 | 5-10%                   |                 2 |              0.21495 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4305 | 5-10%                   |                 2 |              0.21525 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4374 | >20%                    |                 5 |              0.08748 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4395 | 15-20%                  |                 2 |              0.21975 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4437 | >20%                    |                 2 |              0.22185 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4458 | <5%                     |                 2 |              0.2229  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4477 | >20%                    |                 5 |              0.08954 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4477 | >20%                    |                 2 |              0.22385 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4593 | 5-10%                   |                 5 |              0.09186 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4605 | >20%                    |                 2 |              0.23025 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.4628 | >20%                    |                 5 |              0.09256 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4723 | >20%                    |                 2 |              0.23615 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4793 | >20%                    |                 5 |              0.09586 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.486  | <5%                     |                 5 |              0.0972  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4875 | 5-10%                   |                 5 |              0.0975  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4908 | 5-10%                   |                 5 |              0.09816 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.492  | <5%                     |                 5 |              0.0984  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.5047 | 5-10%                   |                10 |              0.05047 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5116 | 10-15%                  |                 5 |              0.10232 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5141 | >20%                    |                 2 |              0.25705 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5176 | >20%                    |                 5 |              0.10352 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5202 | 10-15%                  |                 2 |              0.2601  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5224 | >20%                    |                 2 |              0.2612  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5248 | >20%                    |                 5 |              0.10496 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5271 | >20%                    |                 2 |              0.26355 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5283 | >20%                    |                 5 |              0.10566 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5511 | 5-10%                   |                10 |              0.05511 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.556  | >20%                    |                 5 |              0.1112  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5565 | >20%                    |                 2 |              0.27825 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5574 | 15-20%                  |                 2 |              0.2787  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5587 | 5-10%                   |                 5 |              0.11174 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5678 | <5%                     |                 5 |              0.11356 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5688 | 5-10%                   |                 5 |              0.11376 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5691 | 10-15%                  |                 5 |              0.11382 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5721 | >20%                    |                 2 |              0.28605 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5801 | 15-20%                  |                 5 |              0.11602 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5862 | 10-15%                  |                 5 |              0.11724 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5903 | 5-10%                   |                 5 |              0.11806 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5911 | 15-20%                  |                 2 |              0.29555 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5918 | >20%                    |                 5 |              0.11836 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6007 | >20%                    |                 2 |              0.30035 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6055 | <5%                     |                 5 |              0.1211  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6102 | 15-20%                  |                 5 |              0.12204 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.618  | >20%                    |                 5 |              0.1236  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6363 | >20%                    |                 2 |              0.31815 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6364 | >20%                    |                10 |              0.06364 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6741 | >20%                    |                 5 |              0.13482 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.675  | >20%                    |                 5 |              0.135   |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6836 | 10-15%                  |                 5 |              0.13672 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6845 | <5%                     |                10 |              0.06845 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6901 | >20%                    |                10 |              0.06901 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6976 | >20%                    |                 5 |              0.13952 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7014 | >20%                    |                10 |              0.07014 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7065 | >20%                    |                 5 |              0.1413  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.726  | >20%                    |                 5 |              0.1452  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.728  | >20%                    |                 2 |              0.364   |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7361 | >20%                    |                10 |              0.07361 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7361 | >20%                    |                10 |              0.07361 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7363 | 5-10%                   |                 2 |              0.36815 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7451 | >20%                    |                 5 |              0.14902 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7527 | >20%                    |                 2 |              0.37635 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7552 | <5%                     |                 5 |              0.15104 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7556 | >20%                    |                10 |              0.07556 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.763  | 5-10%                   |                10 |              0.0763  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7674 | 5-10%                   |                 5 |              0.15348 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7756 | >20%                    |                10 |              0.07756 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7834 | >20%                    |                 5 |              0.15668 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7841 | <5%                     |                10 |              0.07841 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7948 | >20%                    |                10 |              0.07948 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8088 | >20%                    |                10 |              0.08088 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8158 | >20%                    |                10 |              0.08158 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8207 | 15-20%                  |                 5 |              0.16414 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8243 | 5-10%                   |                10 |              0.08243 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8278 | <5%                     |                10 |              0.08278 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8315 | <5%                     |                10 |              0.08315 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8455 | >20%                    |                10 |              0.08455 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.8597 | >20%                    |                 5 |              0.17194 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8608 | <5%                     |                10 |              0.08608 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8608 | 5-10%                   |                10 |              0.08608 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8713 | 15-20%                  |                10 |              0.08713 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8811 | <5%                     |                10 |              0.08811 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8833 | 15-20%                  |                 5 |              0.17666 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8859 | 5-10%                   |                10 |              0.08859 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9131 | >20%                    |                10 |              0.09131 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9356 | >20%                    |                10 |              0.09356 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9722 | >20%                    |                10 |              0.09722 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9821 | 5-10%                   |                10 |              0.09821 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0005 | 15-20%                  |                10 |              0.10005 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0017 | <5%                     |                10 |              0.10017 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0313 | >20%                    |                10 |              0.10313 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0351 | 5-10%                   |                10 |              0.10351 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0364 | >20%                    |                10 |              0.10364 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0547 | 5-10%                   |                10 |              0.10547 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0588 | 10-15%                  |                10 |              0.10588 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0829 | <5%                     |                10 |              0.10829 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0857 | >20%                    |                 2 |              0.54285 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0967 | 5-10%                   |                 2 |              0.54835 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1262 | >20%                    |                10 |              0.11262 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1546 | >20%                    |                10 |              0.11546 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1812 | 15-20%                  |                10 |              0.11812 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.2117 | 15-20%                  |                10 |              0.12117 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2932 | >20%                    |                 5 |              0.25864 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3367 | 5-10%                   |                 5 |              0.26734 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3398 | >20%                    |                10 |              0.13398 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4035 | >20%                    |                10 |              0.14035 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4168 | 10-15%                  |                 5 |              0.28336 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.4229 | >20%                    |                 2 |              0.71145 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5724 | >20%                    |                10 |              0.15724 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.681  | >20%                    |                 5 |              0.3362  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6983 | >20%                    |                 2 |              0.84915 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7581 | >20%                    |                10 |              0.17581 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.821  | >20%                    |                10 |              0.1821  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.8507 | >20%                    |                 5 |              0.37014 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1693 | 5-10%                   |                10 |              0.21693 |