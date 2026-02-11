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

Data correct as of 2026-02-11 02:46:00.905957, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1499 | >20%                    |                 2 |              0.07495 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1649 | >20%                    |                 2 |              0.08245 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1817 | 5-10%                   |                 2 |              0.09085 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1853 | >20%                    |                 2 |              0.09265 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1897 | >20%                    |                 5 |              0.03794 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2033 | >20%                    |                 5 |              0.04066 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2046 | >20%                    |                 2 |              0.1023  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2227 | >20%                    |                 5 |              0.04454 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2529 | >20%                    |                 2 |              0.12645 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.254  | 15-20%                  |                 2 |              0.127   |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2583 | <5%                     |                 5 |              0.05166 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2586 | 5-10%                   |                10 |              0.02586 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2597 | 10-15%                  |                 2 |              0.12985 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2599 | 10-15%                  |                 2 |              0.12995 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2645 | >20%                    |                 2 |              0.13225 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.2767 | >20%                    |                 2 |              0.13835 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2808 | >20%                    |                 2 |              0.1404  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2827 | >20%                    |                 2 |              0.14135 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.298  | >20%                    |                 2 |              0.149   |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.313  | >20%                    |                 2 |              0.1565  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3139 | >20%                    |                 2 |              0.15695 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3146 | >20%                    |                 2 |              0.1573  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3178 | >20%                    |                 5 |              0.06356 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3213 | >20%                    |                 5 |              0.06426 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.344  | >20%                    |                 2 |              0.172   |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3512 | 15-20%                  |                 2 |              0.1756  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3525 | <5%                     |                 2 |              0.17625 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.3552 | <5%                     |                 5 |              0.07104 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3553 | >20%                    |                 5 |              0.07106 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3582 | 15-20%                  |                 2 |              0.1791  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3591 | 5-10%                   |                 2 |              0.17955 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3644 | 5-10%                   |                10 |              0.03644 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3701 | 5-10%                   |                 5 |              0.07402 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3704 | >20%                    |                 2 |              0.1852  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3719 | <5%                     |                 5 |              0.07438 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3719 | 5-10%                   |                 2 |              0.18595 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3726 | >20%                    |                 5 |              0.07452 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3787 | <5%                     |                 5 |              0.07574 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.382  | >20%                    |                 5 |              0.0764  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.383  | 10-15%                  |                 2 |              0.1915  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3847 | <5%                     |                 5 |              0.07694 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3851 | <5%                     |                 2 |              0.19255 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3883 | >20%                    |                 5 |              0.07766 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.389  | >20%                    |                 5 |              0.0778  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3911 | >20%                    |                10 |              0.03911 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3922 | >20%                    |                 5 |              0.07844 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3936 | >20%                    |                 5 |              0.07872 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4015 | 10-15%                  |                 5 |              0.0803  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4043 | >20%                    |                 2 |              0.20215 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4067 | >20%                    |                 2 |              0.20335 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4078 | >20%                    |                 2 |              0.2039  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4093 | >20%                    |                 5 |              0.08186 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4112 | >20%                    |                10 |              0.04112 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.416  | 5-10%                   |                 2 |              0.208   |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4164 | >20%                    |                 2 |              0.2082  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4185 | >20%                    |                10 |              0.04185 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4198 | 15-20%                  |                 2 |              0.2099  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4246 | 15-20%                  |                 2 |              0.2123  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4258 | >20%                    |                 5 |              0.08516 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.428  | <5%                     |                 2 |              0.214   |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4287 | <5%                     |                 2 |              0.21435 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4366 | >20%                    |                 2 |              0.2183  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4379 | 15-20%                  |                 5 |              0.08758 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4389 | 5-10%                   |                 2 |              0.21945 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4407 | 5-10%                   |                 2 |              0.22035 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4437 | >20%                    |                 2 |              0.22185 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4559 | 15-20%                  |                 2 |              0.22795 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4582 | >20%                    |                 2 |              0.2291  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4604 | >20%                    |                 2 |              0.2302  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4633 | >20%                    |                10 |              0.04633 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4638 | 5-10%                   |                 2 |              0.2319  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4705 | 5-10%                   |                 5 |              0.0941  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4719 | >20%                    |                 5 |              0.09438 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4778 | <5%                     |                 2 |              0.2389  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4784 | 15-20%                  |                 5 |              0.09568 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.489  | >20%                    |                 2 |              0.2445  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4989 | >20%                    |                 2 |              0.24945 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4996 | >20%                    |                 2 |              0.2498  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.502  | >20%                    |                 2 |              0.251   |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5065 | <5%                     |                 5 |              0.1013  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5167 | 15-20%                  |                10 |              0.05167 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5219 | >20%                    |                 5 |              0.10438 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5238 | >20%                    |                 5 |              0.10476 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5249 | <5%                     |                 5 |              0.10498 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5264 | >20%                    |                10 |              0.05264 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5298 | >20%                    |                10 |              0.05298 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5301 | 5-10%                   |                 5 |              0.10602 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5351 | 15-20%                  |                 5 |              0.10702 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5395 | >20%                    |                10 |              0.05395 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5508 | >20%                    |                 5 |              0.11016 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5593 | >20%                    |                 5 |              0.11186 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.572  | >20%                    |                 5 |              0.1144  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5789 | 15-20%                  |                10 |              0.05789 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5914 | >20%                    |                 5 |              0.11828 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.594  | >20%                    |                 2 |              0.297   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5951 | >20%                    |                 5 |              0.11902 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5974 | 15-20%                  |                10 |              0.05974 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5991 | 5-10%                   |                 5 |              0.11982 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6001 | 10-15%                  |                 5 |              0.12002 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6001 | >20%                    |                 5 |              0.12002 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.603  | 5-10%                   |                 2 |              0.3015  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6042 | 15-20%                  |                 5 |              0.12084 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6063 | <5%                     |                10 |              0.06063 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6087 | >20%                    |                10 |              0.06087 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6106 | >20%                    |                10 |              0.06106 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6141 | 15-20%                  |                 2 |              0.30705 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6198 | 15-20%                  |                10 |              0.06198 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6296 | >20%                    |                 5 |              0.12592 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6461 | 10-15%                  |                10 |              0.06461 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6543 | >20%                    |                 5 |              0.13086 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6623 | >20%                    |                 5 |              0.13246 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.675  | <5%                     |                10 |              0.0675  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.677  | >20%                    |                 5 |              0.1354  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6775 | 5-10%                   |                 5 |              0.1355  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6918 | 5-10%                   |                 5 |              0.13836 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7004 | 5-10%                   |                 2 |              0.3502  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7016 | <5%                     |                10 |              0.07016 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7055 | >20%                    |                10 |              0.07055 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7091 | >20%                    |                 5 |              0.14182 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7136 | <5%                     |                10 |              0.07136 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7252 | >20%                    |                10 |              0.07252 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7323 | <5%                     |                10 |              0.07323 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7331 | 10-15%                  |                10 |              0.07331 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7345 | >20%                    |                10 |              0.07345 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7446 | >20%                    |                 2 |              0.3723  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.749  | >20%                    |                10 |              0.0749  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7536 | >20%                    |                10 |              0.07536 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7581 | >20%                    |                 2 |              0.37905 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7583 | >20%                    |                 5 |              0.15166 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7603 | 15-20%                  |                10 |              0.07603 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7936 | 5-10%                   |                10 |              0.07936 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7994 | >20%                    |                 5 |              0.15988 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8031 | <5%                     |                10 |              0.08031 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8043 | >20%                    |                 5 |              0.16086 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8046 | >20%                    |                 5 |              0.16092 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8069 | <5%                     |                 5 |              0.16138 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8074 | <5%                     |                10 |              0.08074 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8169 | >20%                    |                10 |              0.08169 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8222 | 5-10%                   |                10 |              0.08222 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8247 | >20%                    |                 5 |              0.16494 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8322 | >20%                    |                10 |              0.08322 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8411 | <5%                     |                10 |              0.08411 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8527 | >20%                    |                 5 |              0.17054 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8563 | >20%                    |                10 |              0.08563 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8587 | >20%                    |                10 |              0.08587 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8669 | 10-15%                  |                 2 |              0.43345 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8677 | >20%                    |                 2 |              0.43385 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8716 | >20%                    |                10 |              0.08716 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8967 | >20%                    |                 2 |              0.44835 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9006 | >20%                    |                 2 |              0.4503  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9275 | >20%                    |                 5 |              0.1855  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9335 | <5%                     |                10 |              0.09335 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9466 | <5%                     |                10 |              0.09466 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9572 | >20%                    |                 2 |              0.4786  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9655 | 10-15%                  |                10 |              0.09655 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9721 | >20%                    |                10 |              0.09721 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9799 |                         |                 2 |              0.48995 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.983  | >20%                    |                10 |              0.0983  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9899 | 15-20%                  |                10 |              0.09899 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0325 | >20%                    |                10 |              0.10325 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0332 | >20%                    |                10 |              0.10332 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0422 | 15-20%                  |                10 |              0.10422 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0434 | 10-15%                  |                 5 |              0.20868 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0835 | 5-10%                   |                10 |              0.10835 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0915 | 5-10%                   |                 5 |              0.2183  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0937 | >20%                    |                 5 |              0.21874 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1162 | >20%                    |                10 |              0.11162 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1207 | >20%                    |                10 |              0.11207 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1218 | >20%                    |                 2 |              0.5609  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1335 | >20%                    |                10 |              0.11335 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1649 | >20%                    |                10 |              0.11649 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.182  | <5%                     |                10 |              0.1182  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1966 | >20%                    |                10 |              0.11966 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2566 | >20%                    |                 5 |              0.25132 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.26   | >20%                    |                10 |              0.126   |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3024 |                         |                 5 |              0.26048 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3407 | 10-15%                  |                 5 |              0.26814 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4102 | >20%                    |                10 |              0.14102 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4332 | >20%                    |                 2 |              0.7166  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7522 | 15-20%                  |                10 |              0.17522 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9591 |                         |                10 |              0.19591 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0561 | 10-15%                  |                10 |              0.20561 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4254 | <5%                     |                 5 |              0.48508 |