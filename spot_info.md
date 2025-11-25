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

Data correct as of 2025-11-25 01:53:38.964862, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1251 | >20%                    |                 2 |              0.06255 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1482 | >20%                    |                 2 |              0.0741  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.1657 | 15-20%                  |                 2 |              0.08285 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1792 | <5%                     |                 2 |              0.0896  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1958 | <5%                     |                 2 |              0.0979  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2034 | 10-15%                  |                 2 |              0.1017  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2164 | >20%                    |                 2 |              0.1082  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2226 | 15-20%                  |                 2 |              0.1113  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2232 | >20%                    |                 2 |              0.1116  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.234  | >20%                    |                 2 |              0.117   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2419 | >20%                    |                 2 |              0.12095 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2512 | 5-10%                   |                 5 |              0.05024 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2589 | >20%                    |                 2 |              0.12945 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.259  | 10-15%                  |                 5 |              0.0518  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2634 | >20%                    |                 2 |              0.1317  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.27   | <5%                     |                 2 |              0.135   |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2704 | >20%                    |                10 |              0.02704 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2728 | >20%                    |                 5 |              0.05456 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2739 | >20%                    |                 2 |              0.13695 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2807 | >20%                    |                 5 |              0.05614 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2821 | >20%                    |                 2 |              0.14105 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2893 | 5-10%                   |                 2 |              0.14465 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2901 | 10-15%                  |                 2 |              0.14505 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2914 | <5%                     |                10 |              0.02914 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3021 | >20%                    |                 5 |              0.06042 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.31   | <5%                     |                 5 |              0.062   |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3259 | >20%                    |                 5 |              0.06518 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3284 | >20%                    |                 5 |              0.06568 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3296 | <5%                     |                 2 |              0.1648  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3363 | 10-15%                  |                10 |              0.03363 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.342  | 10-15%                  |                10 |              0.0342  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3461 | >20%                    |                10 |              0.03461 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3467 | 5-10%                   |                 2 |              0.17335 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3552 | 10-15%                  |                 2 |              0.1776  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3557 | >20%                    |                 2 |              0.17785 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3562 | >20%                    |                 2 |              0.1781  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3565 | 10-15%                  |                 2 |              0.17825 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3596 | 5-10%                   |                10 |              0.03596 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3637 | >20%                    |                 2 |              0.18185 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3642 | >20%                    |                 2 |              0.1821  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3645 | >20%                    |                 5 |              0.0729  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3659 | 15-20%                  |                 5 |              0.07318 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.378  | >20%                    |                10 |              0.0378  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3827 | <5%                     |                 2 |              0.19135 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.384  | >20%                    |                 2 |              0.192   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3874 | 15-20%                  |                 2 |              0.1937  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.393  | >20%                    |                 2 |              0.1965  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3953 | >20%                    |                 5 |              0.07906 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3967 | >20%                    |                 2 |              0.19835 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3974 | 10-15%                  |                 5 |              0.07948 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3993 | 15-20%                  |                 5 |              0.07986 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3996 | >20%                    |                 5 |              0.07992 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4015 | 15-20%                  |                 2 |              0.20075 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4018 | 10-15%                  |                10 |              0.04018 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4064 | 15-20%                  |                 2 |              0.2032  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4075 | >20%                    |                 2 |              0.20375 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4079 | >20%                    |                 5 |              0.08158 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4107 | >20%                    |                 2 |              0.20535 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4233 | >20%                    |                 2 |              0.21165 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4247 | >20%                    |                 5 |              0.08494 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4305 | 15-20%                  |                 5 |              0.0861  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4349 | >20%                    |                 2 |              0.21745 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4368 | 5-10%                   |                 2 |              0.2184  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4398 | >20%                    |                 2 |              0.2199  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4531 | >20%                    |                 2 |              0.22655 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4532 | >20%                    |                 5 |              0.09064 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4553 | 10-15%                  |                 5 |              0.09106 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4633 | 15-20%                  |                 5 |              0.09266 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4635 | >20%                    |                 2 |              0.23175 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4641 | <5%                     |                 2 |              0.23205 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.473  | >20%                    |                 5 |              0.0946  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4737 | 15-20%                  |                 5 |              0.09474 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4803 | >20%                    |                10 |              0.04803 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4825 | >20%                    |                10 |              0.04825 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4834 | 15-20%                  |                10 |              0.04834 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4834 | 10-15%                  |                 2 |              0.2417  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4841 | >20%                    |                 2 |              0.24205 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4855 | 10-15%                  |                 2 |              0.24275 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4875 | >20%                    |                 2 |              0.24375 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4878 | >20%                    |                 5 |              0.09756 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4905 | >20%                    |                 5 |              0.0981  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4965 | 10-15%                  |                 5 |              0.0993  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5027 | 10-15%                  |                 5 |              0.10054 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5096 | >20%                    |                 5 |              0.10192 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5103 | >20%                    |                 5 |              0.10206 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5147 | 10-15%                  |                 2 |              0.25735 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5243 | >20%                    |                 5 |              0.10486 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.525  | >20%                    |                 5 |              0.105   |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5475 | >20%                    |                 5 |              0.1095  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5577 | 15-20%                  |                 5 |              0.11154 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5667 | >20%                    |                 2 |              0.28335 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5704 | >20%                    |                 5 |              0.11408 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5725 | >20%                    |                10 |              0.05725 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5747 | 5-10%                   |                10 |              0.05747 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5773 | >20%                    |                 5 |              0.11546 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5784 | 15-20%                  |                 5 |              0.11568 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5909 | >20%                    |                 2 |              0.29545 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.597  | 10-15%                  |                 5 |              0.1194  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5975 | 15-20%                  |                 5 |              0.1195  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5979 | 10-15%                  |                 5 |              0.11958 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5985 | >20%                    |                 2 |              0.29925 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6025 | >20%                    |                 2 |              0.30125 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6041 | 10-15%                  |                 5 |              0.12082 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6076 | >20%                    |                 2 |              0.3038  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.611  | <5%                     |                10 |              0.0611  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.616  | 15-20%                  |                 5 |              0.1232  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6181 | 5-10%                   |                 5 |              0.12362 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6188 | >20%                    |                 5 |              0.12376 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6237 | <5%                     |                10 |              0.06237 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6277 | 15-20%                  |                10 |              0.06277 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6385 | 10-15%                  |                 5 |              0.1277  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6392 | >20%                    |                 5 |              0.12784 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.642  | >20%                    |                 5 |              0.1284  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6449 | >20%                    |                 5 |              0.12898 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6573 | >20%                    |                 2 |              0.32865 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.661  | >20%                    |                 5 |              0.1322  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6686 | >20%                    |                 5 |              0.13372 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6717 | 5-10%                   |                 2 |              0.33585 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6726 | 5-10%                   |                10 |              0.06726 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6761 | >20%                    |                10 |              0.06761 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6807 | 15-20%                  |                10 |              0.06807 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6835 | >20%                    |                10 |              0.06835 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7153 | 10-15%                  |                 2 |              0.35765 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.716  | >20%                    |                10 |              0.0716  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7219 | >20%                    |                10 |              0.07219 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.727  | >20%                    |                 2 |              0.3635  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7394 | >20%                    |                 5 |              0.14788 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7413 | >20%                    |                10 |              0.07413 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7587 | <5%                     |                10 |              0.07587 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7588 | 15-20%                  |                10 |              0.07588 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7682 | >20%                    |                10 |              0.07682 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7715 | >20%                    |                10 |              0.07715 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7725 | 10-15%                  |                10 |              0.07725 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.782  | >20%                    |                10 |              0.0782  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.785  | >20%                    |                10 |              0.0785  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7888 | >20%                    |                10 |              0.07888 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7902 | 10-15%                  |                10 |              0.07902 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8091 | >20%                    |                 5 |              0.16182 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8114 | >20%                    |                10 |              0.08114 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8204 | >20%                    |                 5 |              0.16408 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8268 | >20%                    |                10 |              0.08268 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8308 | 5-10%                   |                10 |              0.08308 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8394 | 15-20%                  |                 5 |              0.16788 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8508 | >20%                    |                10 |              0.08508 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8521 | >20%                    |                 5 |              0.17042 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8758 | >20%                    |                 5 |              0.17516 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8868 | >20%                    |                 5 |              0.17736 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8932 | >20%                    |                 2 |              0.4466  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8966 | 10-15%                  |                10 |              0.08966 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8984 | 10-15%                  |                10 |              0.08984 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9022 | 15-20%                  |                10 |              0.09022 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9096 | >20%                    |                10 |              0.09096 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9108 | <5%                     |                 5 |              0.18216 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9373 | >20%                    |                 2 |              0.46865 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9486 | >20%                    |                10 |              0.09486 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.954  | >20%                    |                10 |              0.0954  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9576 | >20%                    |                10 |              0.09576 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9632 | 10-15%                  |                10 |              0.09632 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9726 | >20%                    |                10 |              0.09726 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9731 | >20%                    |                 5 |              0.19462 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9835 | >20%                    |                 2 |              0.49175 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9907 | <5%                     |                10 |              0.09907 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0069 | 15-20%                  |                10 |              0.10069 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0107 | >20%                    |                10 |              0.10107 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0313 | >20%                    |                10 |              0.10313 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0596 | <5%                     |                 5 |              0.21192 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0822 | >20%                    |                10 |              0.10822 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1017 | 15-20%                  |                10 |              0.11017 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1419 | >20%                    |                 5 |              0.22838 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1486 | 15-20%                  |                10 |              0.11486 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1748 | >20%                    |                10 |              0.11748 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.1792 | <5%                     |                 2 |              0.5896  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2252 | >20%                    |                10 |              0.12252 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2494 | >20%                    |                 2 |              0.6247  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2827 | >20%                    |                 5 |              0.25654 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.352  | 10-15%                  |                10 |              0.1352  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3934 | >20%                    |                 2 |              0.6967  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3975 | >20%                    |                10 |              0.13975 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4513 | 5-10%                   |                 5 |              0.29026 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6275 | >20%                    |                10 |              0.16275 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9965 | 15-20%                  |                10 |              0.19965 |