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

Data correct as of 2025-11-24 02:00:18.003886, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1205 | >20%                    |                 2 |              0.06025 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1503 | >20%                    |                 2 |              0.07515 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.1708 | 15-20%                  |                 2 |              0.0854  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1799 | <5%                     |                 2 |              0.08995 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1995 | <5%                     |                 2 |              0.09975 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.204  | 10-15%                  |                 2 |              0.102   |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2068 | 15-20%                  |                 2 |              0.1034  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.219  | >20%                    |                 2 |              0.1095  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2268 | >20%                    |                 2 |              0.1134  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2356 | >20%                    |                 2 |              0.1178  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2423 | >20%                    |                 2 |              0.12115 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2423 | 5-10%                   |                 5 |              0.04846 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2526 | >20%                    |                 2 |              0.1263  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2574 | 10-15%                  |                 5 |              0.05148 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2654 | >20%                    |                 2 |              0.1327  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2678 | <5%                     |                 2 |              0.1339  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2739 | >20%                    |                 2 |              0.13695 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2762 | >20%                    |                 5 |              0.05524 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2833 | >20%                    |                 5 |              0.05666 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2846 | >20%                    |                 5 |              0.05692 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2856 | >20%                    |                 2 |              0.1428  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2891 | >20%                    |                10 |              0.02891 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2892 | 10-15%                  |                 2 |              0.1446  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2893 | 5-10%                   |                 2 |              0.14465 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.304  | <5%                     |                10 |              0.0304  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.31   | <5%                     |                 5 |              0.062   |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3213 | <5%                     |                 2 |              0.16065 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3238 | >20%                    |                 5 |              0.06476 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3259 | >20%                    |                 5 |              0.06518 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3387 | 10-15%                  |                10 |              0.03387 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3461 | 5-10%                   |                 2 |              0.17305 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.349  | >20%                    |                10 |              0.0349  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3519 | >20%                    |                 2 |              0.17595 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3549 | 10-15%                  |                 2 |              0.17745 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3563 | 10-15%                  |                10 |              0.03563 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3569 | 10-15%                  |                 2 |              0.17845 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3608 | >20%                    |                 2 |              0.1804  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3615 | >20%                    |                 2 |              0.18075 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3633 | 5-10%                   |                10 |              0.03633 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3636 | >20%                    |                 2 |              0.1818  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3641 | >20%                    |                 5 |              0.07282 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3686 | 15-20%                  |                 5 |              0.07372 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3714 | >20%                    |                10 |              0.03714 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.3746 | >20%                    |                 2 |              0.1873  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.379  | <5%                     |                 2 |              0.1895  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3835 | >20%                    |                 2 |              0.19175 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3868 | 15-20%                  |                 2 |              0.1934  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3953 | 15-20%                  |                 2 |              0.19765 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3971 | >20%                    |                 2 |              0.19855 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3982 | 10-15%                  |                 5 |              0.07964 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4003 | >20%                    |                 5 |              0.08006 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4023 | 10-15%                  |                10 |              0.04023 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4028 | >20%                    |                 5 |              0.08056 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4029 | >20%                    |                 2 |              0.20145 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4047 | 15-20%                  |                 5 |              0.08094 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4055 | 15-20%                  |                 2 |              0.20275 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4088 | >20%                    |                 2 |              0.2044  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4108 | >20%                    |                 5 |              0.08216 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4265 | >20%                    |                 5 |              0.0853  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4295 | 5-10%                   |                 2 |              0.21475 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4302 | >20%                    |                 2 |              0.2151  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4317 | 15-20%                  |                 5 |              0.08634 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4336 | >20%                    |                 2 |              0.2168  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4373 | >20%                    |                 2 |              0.21865 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4383 | >20%                    |                 2 |              0.21915 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4522 | 15-20%                  |                 5 |              0.09044 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4539 | 10-15%                  |                 5 |              0.09078 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4562 | >20%                    |                 5 |              0.09124 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4603 | <5%                     |                 2 |              0.23015 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4636 | >20%                    |                 2 |              0.2318  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4703 | 15-20%                  |                 5 |              0.09406 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4825 | >20%                    |                 5 |              0.0965  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4835 | >20%                    |                 2 |              0.24175 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4839 | 10-15%                  |                 2 |              0.24195 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.485  | 15-20%                  |                10 |              0.0485  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4859 | 10-15%                  |                 2 |              0.24295 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.486  | >20%                    |                10 |              0.0486  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4863 | >20%                    |                10 |              0.04863 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4863 | >20%                    |                 2 |              0.24315 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4895 | >20%                    |                 5 |              0.0979  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4935 | >20%                    |                 5 |              0.0987  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5006 | 10-15%                  |                 5 |              0.10012 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5082 | >20%                    |                 5 |              0.10164 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5087 | 10-15%                  |                 5 |              0.10174 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5109 | 10-15%                  |                 2 |              0.25545 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5128 | >20%                    |                 5 |              0.10256 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5143 | >20%                    |                 5 |              0.10286 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5174 | >20%                    |                 5 |              0.10348 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5364 | >20%                    |                 2 |              0.2682  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5556 | >20%                    |                 5 |              0.11112 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5568 | >20%                    |                10 |              0.05568 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5627 | >20%                    |                 5 |              0.11254 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5638 | 15-20%                  |                 5 |              0.11276 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5741 | 15-20%                  |                 5 |              0.11482 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5781 | >20%                    |                 5 |              0.11562 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5783 | 5-10%                   |                10 |              0.05783 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5795 | 15-20%                  |                 5 |              0.1159  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5863 | 10-15%                  |                 5 |              0.11726 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.591  | >20%                    |                 2 |              0.2955  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6012 | 10-15%                  |                 5 |              0.12024 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6024 | >20%                    |                 2 |              0.3012  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6058 | 5-10%                   |                 5 |              0.12116 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6059 | 10-15%                  |                 5 |              0.12118 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6095 | >20%                    |                 2 |              0.30475 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6122 | >20%                    |                 2 |              0.3061  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6164 | >20%                    |                 5 |              0.12328 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6208 | <5%                     |                10 |              0.06208 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6213 | >20%                    |                 5 |              0.12426 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6221 | 15-20%                  |                 5 |              0.12442 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6313 | 15-20%                  |                10 |              0.06313 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6327 | 10-15%                  |                 5 |              0.12654 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6329 | <5%                     |                10 |              0.06329 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6353 | >20%                    |                 5 |              0.12706 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.636  | >20%                    |                 5 |              0.1272  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6444 | >20%                    |                 5 |              0.12888 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6458 | >20%                    |                 2 |              0.3229  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6703 | >20%                    |                 5 |              0.13406 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6752 | 15-20%                  |                10 |              0.06752 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6763 | 5-10%                   |                10 |              0.06763 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6771 | >20%                    |                10 |              0.06771 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6843 | 5-10%                   |                 2 |              0.34215 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6858 | >20%                    |                 2 |              0.3429  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6872 | >20%                    |                10 |              0.06872 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6915 | 10-15%                  |                 2 |              0.34575 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.709  | >20%                    |                10 |              0.0709  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7156 | >20%                    |                10 |              0.07156 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7409 | >20%                    |                 5 |              0.14818 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7451 | >20%                    |                10 |              0.07451 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7669 | 15-20%                  |                10 |              0.07669 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7675 | <5%                     |                10 |              0.07675 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7708 | >20%                    |                10 |              0.07708 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7722 | >20%                    |                10 |              0.07722 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7767 | >20%                    |                10 |              0.07767 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7808 | >20%                    |                10 |              0.07808 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7859 | >20%                    |                 5 |              0.15718 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7878 | 5-10%                   |                10 |              0.07878 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7895 | 10-15%                  |                10 |              0.07895 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7943 | >20%                    |                10 |              0.07943 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7946 | >20%                    |                10 |              0.07946 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7948 | 10-15%                  |                10 |              0.07948 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8066 | >20%                    |                 5 |              0.16132 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8268 | >20%                    |                10 |              0.08268 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8342 | >20%                    |                 2 |              0.4171  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8383 | >20%                    |                 5 |              0.16766 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8428 | 15-20%                  |                 5 |              0.16856 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8497 | >20%                    |                10 |              0.08497 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8805 | >20%                    |                 5 |              0.1761  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8818 | >20%                    |                10 |              0.08818 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8868 | >20%                    |                 5 |              0.17736 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.8938 | 15-20%                  |                10 |              0.08938 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8961 | 10-15%                  |                10 |              0.08961 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.902  | 10-15%                  |                10 |              0.0902  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9096 | >20%                    |                10 |              0.09096 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9373 | >20%                    |                 2 |              0.46865 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9468 | >20%                    |                10 |              0.09468 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9606 | >20%                    |                10 |              0.09606 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9613 | <5%                     |                 5 |              0.19226 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9629 | >20%                    |                10 |              0.09629 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9757 | >20%                    |                 2 |              0.48785 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9803 | 15-20%                  |                10 |              0.09803 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9905 | <5%                     |                10 |              0.09905 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9986 | 10-15%                  |                10 |              0.09986 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0111 | >20%                    |                 5 |              0.20222 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0188 | >20%                    |                10 |              0.10188 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0313 | >20%                    |                10 |              0.10313 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0495 | <5%                     |                 5 |              0.2099  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0944 | >20%                    |                10 |              0.10944 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1239 | >20%                    |                 5 |              0.22478 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1587 | 15-20%                  |                10 |              0.11587 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1753 | >20%                    |                10 |              0.11753 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1918 | 15-20%                  |                10 |              0.11918 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.194  | <5%                     |                 2 |              0.597   |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2554 | >20%                    |                 2 |              0.6277  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2703 | >20%                    |                10 |              0.12703 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2937 | >20%                    |                 5 |              0.25874 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3509 | 10-15%                  |                10 |              0.13509 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3776 | >20%                    |                10 |              0.13776 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4183 | >20%                    |                 2 |              0.70915 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4299 | 5-10%                   |                 5 |              0.28598 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.5967 | >20%                    |                10 |              0.15967 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0023 | 15-20%                  |                10 |              0.20023 |