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

Data correct as of 2025-06-04 01:55:54.022201, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1394 | <5%                     |                 2 |              0.0697  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1849 | >20%                    |                 2 |              0.09245 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 15-20%                  |                 5 |              0.039   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2023 | 5-10%                   |                 5 |              0.04046 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.213  | >20%                    |                 2 |              0.1065  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2296 | >20%                    |                 2 |              0.1148  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2306 | 5-10%                   |                 2 |              0.1153  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2329 | >20%                    |                 5 |              0.04658 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | >20%                    |                10 |              0.02395 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2397 | >20%                    |                 2 |              0.11985 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 10-15%                  |                10 |              0.02419 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2458 | <5%                     |                 2 |              0.1229  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2485 | 10-15%                  |                 2 |              0.12425 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2593 | >20%                    |                10 |              0.02593 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2632 | 15-20%                  |                 2 |              0.1316  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2639 | 10-15%                  |                 2 |              0.13195 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2733 | <5%                     |                 2 |              0.13665 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2794 | >20%                    |                 2 |              0.1397  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2809 | 15-20%                  |                 2 |              0.14045 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2833 | >20%                    |                 2 |              0.14165 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2885 | >20%                    |                 2 |              0.14425 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2912 | 15-20%                  |                 2 |              0.1456  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | <5%                     |                10 |              0.0294  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2979 | >20%                    |                 2 |              0.14895 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3035 | 15-20%                  |                 5 |              0.0607  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3063 | 15-20%                  |                 2 |              0.15315 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3103 | >20%                    |                 2 |              0.15515 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3169 | 15-20%                  |                 2 |              0.15845 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3329 | >20%                    |                 5 |              0.06658 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3404 | >20%                    |                 5 |              0.06808 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3405 | 15-20%                  |                 2 |              0.17025 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3507 | >20%                    |                10 |              0.03507 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3545 | >20%                    |                 5 |              0.0709  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3552 | >20%                    |                 2 |              0.1776  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3558 | >20%                    |                 2 |              0.1779  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3626 | 5-10%                   |                 2 |              0.1813  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.365  | >20%                    |                10 |              0.0365  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3714 | 15-20%                  |                 2 |              0.1857  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3716 | >20%                    |                 5 |              0.07432 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3741 | 15-20%                  |                 2 |              0.18705 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3759 | 10-15%                  |                 5 |              0.07518 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3773 | >20%                    |                 5 |              0.07546 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3796 | 15-20%                  |                 2 |              0.1898  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3856 | >20%                    |                10 |              0.03856 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3902 | >20%                    |                 2 |              0.1951  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3938 | 5-10%                   |                 2 |              0.1969  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3962 | >20%                    |                 2 |              0.1981  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4018 | 10-15%                  |                 5 |              0.08036 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.402  | >20%                    |                10 |              0.0402  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4062 | >20%                    |                 2 |              0.2031  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4065 | >20%                    |                 5 |              0.0813  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.408  | >20%                    |                 2 |              0.204   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4106 | <5%                     |                 2 |              0.2053  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4124 | <5%                     |                 5 |              0.08248 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4215 | >20%                    |                 5 |              0.0843  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4231 | 10-15%                  |                 2 |              0.21155 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4264 | 15-20%                  |                 5 |              0.08528 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4354 | <5%                     |                 2 |              0.2177  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4408 | 15-20%                  |                 5 |              0.08816 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4427 | >20%                    |                 5 |              0.08854 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4442 | 10-15%                  |                 5 |              0.08884 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4448 | >20%                    |                 2 |              0.2224  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4511 | >20%                    |                 2 |              0.22555 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4523 | >20%                    |                 5 |              0.09046 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4573 | <5%                     |                 5 |              0.09146 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4641 | 15-20%                  |                10 |              0.04641 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4655 | >20%                    |                 2 |              0.23275 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4721 | 15-20%                  |                 5 |              0.09442 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4747 | >20%                    |                 2 |              0.23735 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4762 | >20%                    |                 5 |              0.09524 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4787 | >20%                    |                10 |              0.04787 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4794 | 5-10%                   |                 5 |              0.09588 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.483  | 15-20%                  |                 5 |              0.0966  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4867 | >20%                    |                 5 |              0.09734 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4873 | >20%                    |                 2 |              0.24365 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4891 | <5%                     |                 5 |              0.09782 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4916 | 15-20%                  |                 5 |              0.09832 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4932 | 5-10%                   |                 5 |              0.09864 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4949 | >20%                    |                 2 |              0.24745 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4967 | 15-20%                  |                10 |              0.04967 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5007 | >20%                    |                 5 |              0.10014 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5012 | 10-15%                  |                 5 |              0.10024 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5018 | >20%                    |                10 |              0.05018 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5032 | >20%                    |                10 |              0.05032 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5035 | >20%                    |                 2 |              0.25175 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5059 | 15-20%                  |                 2 |              0.25295 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5116 | <5%                     |                 5 |              0.10232 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5217 | >20%                    |                 2 |              0.26085 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5286 | >20%                    |                 5 |              0.10572 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.532  | >20%                    |                 5 |              0.1064  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5325 | >20%                    |                 2 |              0.26625 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5544 | 10-15%                  |                10 |              0.05544 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5575 | 10-15%                  |                 2 |              0.27875 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5628 | 5-10%                   |                 5 |              0.11256 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5775 | >20%                    |                 5 |              0.1155  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5857 | >20%                    |                 5 |              0.11714 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5874 | >20%                    |                 5 |              0.11748 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.602  | 5-10%                   |                 2 |              0.301   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6026 | >20%                    |                 2 |              0.3013  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6055 | 5-10%                   |                 2 |              0.30275 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6096 | <5%                     |                10 |              0.06096 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6154 | >20%                    |                 5 |              0.12308 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6189 | 15-20%                  |                10 |              0.06189 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.623  | 10-15%                  |                 5 |              0.1246  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6275 | >20%                    |                 2 |              0.31375 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6334 | >20%                    |                 5 |              0.12668 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6368 | 5-10%                   |                10 |              0.06368 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.644  | >20%                    |                 5 |              0.1288  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6478 | <5%                     |                 5 |              0.12956 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6523 | >20%                    |                 5 |              0.13046 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6682 | >20%                    |                10 |              0.06682 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6708 | >20%                    |                 2 |              0.3354  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6748 | 10-15%                  |                 2 |              0.3374  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6789 | >20%                    |                 5 |              0.13578 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.679  | >20%                    |                 2 |              0.3395  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6807 | 15-20%                  |                 5 |              0.13614 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6854 | 10-15%                  |                10 |              0.06854 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6876 | 10-15%                  |                10 |              0.06876 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6879 | >20%                    |                10 |              0.06879 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6911 | <5%                     |                10 |              0.06911 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6947 | >20%                    |                10 |              0.06947 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6951 | >20%                    |                 2 |              0.34755 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6995 | >20%                    |                10 |              0.06995 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.713  | >20%                    |                10 |              0.0713  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.717  | 10-15%                  |                 5 |              0.1434  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7199 | <5%                     |                 5 |              0.14398 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7209 | >20%                    |                 5 |              0.14418 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7352 | >20%                    |                10 |              0.07352 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7356 | <5%                     |                10 |              0.07356 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7456 | >20%                    |                10 |              0.07456 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7545 | >20%                    |                10 |              0.07545 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7604 | 10-15%                  |                 5 |              0.15208 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7771 | >20%                    |                 5 |              0.15542 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7896 | 15-20%                  |                10 |              0.07896 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7914 | >20%                    |                 5 |              0.15828 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7938 | >20%                    |                10 |              0.07938 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8052 | 10-15%                  |                10 |              0.08052 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8129 | 10-15%                  |                 5 |              0.16258 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8233 | 15-20%                  |                10 |              0.08233 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8366 | >20%                    |                10 |              0.08366 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8482 | >20%                    |                10 |              0.08482 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.849  | >20%                    |                10 |              0.0849  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8766 | >20%                    |                10 |              0.08766 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8791 | >20%                    |                10 |              0.08791 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9007 | 5-10%                   |                10 |              0.09007 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9109 | <5%                     |                10 |              0.09109 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9254 | >20%                    |                10 |              0.09254 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9264 | >20%                    |                10 |              0.09264 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9296 | 10-15%                  |                 5 |              0.18592 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9323 | >20%                    |                 5 |              0.18646 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9451 | >20%                    |                10 |              0.09451 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9559 | 5-10%                   |                 2 |              0.47795 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9791 | >20%                    |                10 |              0.09791 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9907 | >20%                    |                 2 |              0.49535 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9943 | >20%                    |                10 |              0.09943 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0281 | >20%                    |                 2 |              0.51405 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0408 | >20%                    |                 5 |              0.20816 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0432 | >20%                    |                 2 |              0.5216  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0492 | 15-20%                  |                10 |              0.10492 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0501 | >20%                    |                 5 |              0.21002 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0627 | <5%                     |                10 |              0.10627 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0661 | 15-20%                  |                10 |              0.10661 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0697 | 10-15%                  |                 5 |              0.21394 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0812 | <5%                     |                 2 |              0.5406  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0843 | <5%                     |                10 |              0.10843 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.16   | >20%                    |                10 |              0.116   |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1635 | 15-20%                  |                10 |              0.11635 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2055 | 10-15%                  |                10 |              0.12055 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2355 | 10-15%                  |                10 |              0.12355 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2863 | >20%                    |                10 |              0.12863 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.294  | >20%                    |                 2 |              0.647   |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.346  | 15-20%                  |                10 |              0.1346  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3946 | <5%                     |                 5 |              0.27892 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4202 | 5-10%                   |                10 |              0.14202 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4222 | >20%                    |                 5 |              0.28444 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4436 | >20%                    |                10 |              0.14436 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4545 | >20%                    |                10 |              0.14545 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4709 | 5-10%                   |                10 |              0.14709 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.085  | <5%                     |                10 |              0.2085  |