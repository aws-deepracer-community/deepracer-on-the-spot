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

Data correct as of 2025-04-18 01:44:30.222134, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1119 | 10-15%                  |                 2 |              0.05595 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1131 | 15-20%                  |                 2 |              0.05655 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1277 | 5-10%                   |                 5 |              0.02554 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1542 | >20%                    |                 2 |              0.0771  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | 10-15%                  |                 5 |              0.03178 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1644 | >20%                    |                 2 |              0.0822  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1879 | 15-20%                  |                 5 |              0.03758 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1929 | <5%                     |                 2 |              0.09645 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2042 | 5-10%                   |                 5 |              0.04084 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2311 | 15-20%                  |                 2 |              0.11555 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 15-20%                  |                10 |              0.02419 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2427 | >20%                    |                 2 |              0.12135 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2721 | 10-15%                  |                 2 |              0.13605 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2732 | 10-15%                  |                10 |              0.02732 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2737 | 5-10%                   |                 5 |              0.05474 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.278  | 10-15%                  |                 2 |              0.139   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2783 | 5-10%                   |                 2 |              0.13915 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2816 | 10-15%                  |                 5 |              0.05632 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2822 | <5%                     |                 2 |              0.1411  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2848 | <5%                     |                 2 |              0.1424  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2851 | 15-20%                  |                 2 |              0.14255 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2865 | 15-20%                  |                 2 |              0.14325 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2923 | <5%                     |                 2 |              0.14615 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.296  | 5-10%                   |                 2 |              0.148   |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.2966 | <5%                     |                10 |              0.02966 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2986 | 10-15%                  |                 2 |              0.1493  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3007 | >20%                    |                 2 |              0.15035 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3022 | 10-15%                  |                10 |              0.03022 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3139 | >20%                    |                 2 |              0.15695 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3146 | 10-15%                  |                 5 |              0.06292 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3214 | 10-15%                  |                 2 |              0.1607  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3352 | 10-15%                  |                10 |              0.03352 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.342  | >20%                    |                 2 |              0.171   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3446 | >20%                    |                 5 |              0.06892 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3457 | <5%                     |                10 |              0.03457 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3518 | >20%                    |                 5 |              0.07036 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.357  | >20%                    |                 2 |              0.1785  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3592 | 15-20%                  |                 2 |              0.1796  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3619 | >20%                    |                 2 |              0.18095 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3658 | >20%                    |                 2 |              0.1829  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3739 | <5%                     |                 2 |              0.18695 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3746 | >20%                    |                10 |              0.03746 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3795 | >20%                    |                10 |              0.03795 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3841 | 10-15%                  |                 5 |              0.07682 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3844 | <5%                     |                 2 |              0.1922  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3865 | >20%                    |                 2 |              0.19325 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3885 | >20%                    |                 2 |              0.19425 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3906 | <5%                     |                 2 |              0.1953  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3965 | >20%                    |                 2 |              0.19825 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4071 | >20%                    |                 5 |              0.08142 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4148 | 10-15%                  |                 5 |              0.08296 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.417  | 10-15%                  |                 2 |              0.2085  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4178 | 15-20%                  |                 2 |              0.2089  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4183 | 15-20%                  |                 2 |              0.20915 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4199 | >20%                    |                 5 |              0.08398 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4218 | >20%                    |                 5 |              0.08436 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4245 | >20%                    |                 5 |              0.0849  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4284 | >20%                    |                10 |              0.04284 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4317 | 10-15%                  |                10 |              0.04317 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4327 | 15-20%                  |                10 |              0.04327 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4358 | >20%                    |                 5 |              0.08716 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4369 | >20%                    |                10 |              0.04369 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4373 | >20%                    |                 2 |              0.21865 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4385 | <5%                     |                 2 |              0.21925 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4389 | >20%                    |                 5 |              0.08778 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.445  | 5-10%                   |                 5 |              0.089   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4462 | 10-15%                  |                 5 |              0.08924 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4528 | 5-10%                   |                10 |              0.04528 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.456  | <5%                     |                 5 |              0.0912  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4576 | >20%                    |                 5 |              0.09152 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4614 | >20%                    |                 2 |              0.2307  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4619 | <5%                     |                 2 |              0.23095 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4697 | >20%                    |                 2 |              0.23485 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4731 | >20%                    |                 5 |              0.09462 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.474  | >20%                    |                 5 |              0.0948  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4748 | >20%                    |                 2 |              0.2374  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4749 | 5-10%                   |                 5 |              0.09498 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4773 | >20%                    |                 5 |              0.09546 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4884 | <5%                     |                 5 |              0.09768 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.491  | 5-10%                   |                 2 |              0.2455  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4993 | >20%                    |                 2 |              0.24965 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5036 | >20%                    |                 5 |              0.10072 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5106 | >20%                    |                 2 |              0.2553  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5142 | 15-20%                  |                 5 |              0.10284 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5146 | 5-10%                   |                 5 |              0.10292 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5282 | 15-20%                  |                 2 |              0.2641  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5334 | 10-15%                  |                 5 |              0.10668 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5403 | 15-20%                  |                 2 |              0.27015 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5412 | 5-10%                   |                 5 |              0.10824 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5605 | 5-10%                   |                 5 |              0.1121  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5609 | >20%                    |                 5 |              0.11218 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.569  | 10-15%                  |                10 |              0.0569  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.57   | 5-10%                   |                 2 |              0.285   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5762 | >20%                    |                 2 |              0.2881  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5807 | 15-20%                  |                 5 |              0.11614 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5823 | >20%                    |                 2 |              0.29115 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5842 | >20%                    |                 5 |              0.11684 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5848 | >20%                    |                 2 |              0.2924  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5853 | >20%                    |                 5 |              0.11706 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5859 | 15-20%                  |                 5 |              0.11718 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5983 | >20%                    |                 2 |              0.29915 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6008 | >20%                    |                 2 |              0.3004  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6051 | >20%                    |                10 |              0.06051 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.606  | <5%                     |                 5 |              0.1212  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6155 | 10-15%                  |                 5 |              0.1231  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6361 | >20%                    |                 5 |              0.12722 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.646  | >20%                    |                 5 |              0.1292  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6577 | <5%                     |                 5 |              0.13154 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6586 | 5-10%                   |                10 |              0.06586 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6613 | 10-15%                  |                 5 |              0.13226 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6639 | >20%                    |                 5 |              0.13278 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6643 | 10-15%                  |                 2 |              0.33215 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6705 | >20%                    |                 2 |              0.33525 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6726 | <5%                     |                 5 |              0.13452 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6771 | >20%                    |                10 |              0.06771 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6795 | >20%                    |                10 |              0.06795 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6917 | >20%                    |                 5 |              0.13834 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.692  | >20%                    |                10 |              0.0692  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6928 | >20%                    |                 2 |              0.3464  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6951 | 10-15%                  |                 5 |              0.13902 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6955 | >20%                    |                10 |              0.06955 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6955 | >20%                    |                 2 |              0.34775 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6991 | >20%                    |                 5 |              0.13982 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7095 | <5%                     |                10 |              0.07095 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7251 | <5%                     |                10 |              0.07251 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7354 | >20%                    |                 5 |              0.14708 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7377 | 5-10%                   |                 5 |              0.14754 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7429 | <5%                     |                 5 |              0.14858 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.756  | >20%                    |                10 |              0.0756  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7565 | <5%                     |                10 |              0.07565 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7689 | <5%                     |                10 |              0.07689 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7704 | >20%                    |                 5 |              0.15408 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7719 | 15-20%                  |                 5 |              0.15438 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7738 | >20%                    |                10 |              0.07738 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7799 | 5-10%                   |                10 |              0.07799 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7828 | <5%                     |                10 |              0.07828 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7892 | 15-20%                  |                 5 |              0.15784 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8046 | 15-20%                  |                10 |              0.08046 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8052 | <5%                     |                10 |              0.08052 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8116 | 10-15%                  |                10 |              0.08116 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8128 | 10-15%                  |                10 |              0.08128 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8196 | >20%                    |                10 |              0.08196 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8289 | 10-15%                  |                10 |              0.08289 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8338 | >20%                    |                 2 |              0.4169  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8341 | 15-20%                  |                10 |              0.08341 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8528 | 15-20%                  |                10 |              0.08528 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8561 | >20%                    |                 2 |              0.42805 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.859  | >20%                    |                10 |              0.0859  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8688 | <5%                     |                10 |              0.08688 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8853 | 10-15%                  |                10 |              0.08853 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8857 | <5%                     |                10 |              0.08857 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9073 | >20%                    |                10 |              0.09073 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9095 | >20%                    |                10 |              0.09095 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9133 | 15-20%                  |                 5 |              0.18266 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9136 | >20%                    |                10 |              0.09136 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9285 | >20%                    |                10 |              0.09285 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9352 | <5%                     |                10 |              0.09352 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9577 | >20%                    |                 5 |              0.19154 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9752 | 5-10%                   |                10 |              0.09752 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0046 | 10-15%                  |                10 |              0.10046 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.032  | >20%                    |                10 |              0.1032  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0515 | >20%                    |                 5 |              0.2103  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0524 | <5%                     |                 2 |              0.5262  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0765 | >20%                    |                 5 |              0.2153  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1049 | <5%                     |                10 |              0.11049 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1103 | <5%                     |                10 |              0.11103 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1249 | 10-15%                  |                 2 |              0.56245 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1668 | 15-20%                  |                10 |              0.11668 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2074 | 15-20%                  |                10 |              0.12074 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2164 | >20%                    |                 5 |              0.24328 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2448 | <5%                     |                 5 |              0.24896 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2689 | >20%                    |                10 |              0.12689 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2869 | >20%                    |                10 |              0.12869 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.292  | >20%                    |                 5 |              0.2584  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2962 | 5-10%                   |                 2 |              0.6481  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3729 | 15-20%                  |                10 |              0.13729 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4151 | >20%                    |                 2 |              0.70755 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6499 | >20%                    |                10 |              0.16499 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6541 | >20%                    |                10 |              0.16541 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8659 | <5%                     |                10 |              0.18659 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9112 | 15-20%                  |                10 |              0.19112 |