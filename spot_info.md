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

Data correct as of 2024-12-08 01:52:54.360947, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1478 | 10-15%                  |                 2 |              0.0739  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1961 | <5%                     |                 2 |              0.09805 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2008 | >20%                    |                 5 |              0.04016 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2064 | 10-15%                  |                 2 |              0.1032  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2146 | 5-10%                   |                 2 |              0.1073  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2251 | 5-10%                   |                 2 |              0.11255 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2275 | >20%                    |                 5 |              0.0455  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2333 | 15-20%                  |                 2 |              0.11665 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2335 | 15-20%                  |                 5 |              0.0467  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2389 | <5%                     |                 2 |              0.11945 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2439 | <5%                     |                 2 |              0.12195 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.251  | >20%                    |                 5 |              0.0502  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2568 | 10-15%                  |                 2 |              0.1284  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2581 | <5%                     |                10 |              0.02581 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2725 | <5%                     |                 5 |              0.0545  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2789 | <5%                     |                 2 |              0.13945 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 |                         |                 2 |              0.1402  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.285  | 5-10%                   |                 2 |              0.1425  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2935 | 10-15%                  |                 2 |              0.14675 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.295  | >20%                    |                 5 |              0.059   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.309  | <5%                     |                 2 |              0.1545  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3198 | 5-10%                   |                 2 |              0.1599  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.3282 | 5-10%                   |                 2 |              0.1641  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3337 | <5%                     |                10 |              0.03337 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3393 | >20%                    |                10 |              0.03393 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3409 | >20%                    |                 5 |              0.06818 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3422 | <5%                     |                 2 |              0.1711  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3431 | 5-10%                   |                 2 |              0.17155 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3446 | <5%                     |                 5 |              0.06892 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3466 | >20%                    |                 2 |              0.1733  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3491 | >20%                    |                 5 |              0.06982 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3494 | >20%                    |                 2 |              0.1747  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3494 | <5%                     |                 2 |              0.1747  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3513 | <5%                     |                 5 |              0.07026 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3551 | 15-20%                  |                 2 |              0.17755 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3569 | >20%                    |                 2 |              0.17845 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3633 | <5%                     |                 2 |              0.18165 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3727 | >20%                    |                 2 |              0.18635 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3757 |                         |                 5 |              0.07514 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3827 | 15-20%                  |                 2 |              0.19135 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3862 | 10-15%                  |                10 |              0.03862 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4077 | <5%                     |                 2 |              0.20385 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.4078 | <5%                     |                 5 |              0.08156 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4122 | 5-10%                   |                 2 |              0.2061  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4124 | 5-10%                   |                 5 |              0.08248 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4152 | 5-10%                   |                 2 |              0.2076  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4163 | >20%                    |                 2 |              0.20815 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4207 | 15-20%                  |                 5 |              0.08414 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.426  | 5-10%                   |                 2 |              0.213   |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4331 | 15-20%                  |                 5 |              0.08662 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.436  | >20%                    |                 2 |              0.218   |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.438  | <5%                     |                 2 |              0.219   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4411 | 10-15%                  |                10 |              0.04411 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4516 | 10-15%                  |                 2 |              0.2258  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4575 | >20%                    |                 2 |              0.22875 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4634 | <5%                     |                 2 |              0.2317  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4701 | 10-15%                  |                 5 |              0.09402 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4731 | <5%                     |                 5 |              0.09462 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4735 | 15-20%                  |                 5 |              0.0947  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4766 | <5%                     |                 5 |              0.09532 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4827 | 5-10%                   |                 5 |              0.09654 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4831 | 5-10%                   |                 2 |              0.24155 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4947 | 10-15%                  |                 2 |              0.24735 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.4962 | >20%                    |                 5 |              0.09924 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.506  | 5-10%                   |                 2 |              0.253   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5063 | 5-10%                   |                 5 |              0.10126 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5108 | >20%                    |                 5 |              0.10216 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5113 | <5%                     |                 5 |              0.10226 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5135 | 10-15%                  |                 2 |              0.25675 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5191 | <5%                     |                 5 |              0.10382 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5221 | <5%                     |                 5 |              0.10442 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5234 | 10-15%                  |                10 |              0.05234 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5281 | >20%                    |                 5 |              0.10562 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5291 | 15-20%                  |                 5 |              0.10582 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5337 | >20%                    |                 5 |              0.10674 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5403 | >20%                    |                 2 |              0.27015 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5409 | >20%                    |                10 |              0.05409 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5442 | 10-15%                  |                 5 |              0.10884 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5449 | 15-20%                  |                 2 |              0.27245 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5482 | 10-15%                  |                 5 |              0.10964 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5534 | <5%                     |                 5 |              0.11068 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5584 | 5-10%                   |                 5 |              0.11168 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 |                         |                10 |              0.05663 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5695 | 10-15%                  |                 5 |              0.1139  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.5769 |                         |                 2 |              0.28845 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5945 | >20%                    |                 5 |              0.1189  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6066 | >20%                    |                10 |              0.06066 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6209 | 15-20%                  |                10 |              0.06209 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6277 | 10-15%                  |                10 |              0.06277 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6346 | 5-10%                   |                10 |              0.06346 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6378 | >20%                    |                10 |              0.06378 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6541 | >20%                    |                 2 |              0.32705 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6558 | 5-10%                   |                10 |              0.06558 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6578 | <5%                     |                 5 |              0.13156 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.6641 | 5-10%                   |                10 |              0.06641 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6654 | >20%                    |                10 |              0.06654 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6768 | 5-10%                   |                 5 |              0.13536 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6803 | >20%                    |                10 |              0.06803 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6855 | 5-10%                   |                 5 |              0.1371  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6974 | 10-15%                  |                10 |              0.06974 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6996 | <5%                     |                 5 |              0.13992 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7231 | 15-20%                  |                 5 |              0.14462 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7346 | 15-20%                  |                 5 |              0.14692 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.742  | 5-10%                   |                 2 |              0.371   |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7615 | 5-10%                   |                10 |              0.07615 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7653 | <5%                     |                 2 |              0.38265 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7679 | >20%                    |                10 |              0.07679 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.781  | 5-10%                   |                 5 |              0.1562  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.782  | <5%                     |                 5 |              0.1564  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7968 | >20%                    |                 5 |              0.15936 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7974 | <5%                     |                10 |              0.07974 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8156 | 5-10%                   |                10 |              0.08156 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8234 | 10-15%                  |                10 |              0.08234 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      0.8255 |                         |                 5 |              0.1651  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8417 | 5-10%                   |                10 |              0.08417 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8487 | 5-10%                   |                10 |              0.08487 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.855  | 10-15%                  |                10 |              0.0855  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8984 | >20%                    |                10 |              0.08984 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9171 | 15-20%                  |                10 |              0.09171 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9291 | 5-10%                   |                10 |              0.09291 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9365 | 5-10%                   |                10 |              0.09365 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9422 | <5%                     |                10 |              0.09422 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9429 | <5%                     |                 5 |              0.18858 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9628 | 5-10%                   |                10 |              0.09628 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.966  | 5-10%                   |                10 |              0.0966  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9678 | <5%                     |                10 |              0.09678 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9967 | >20%                    |                10 |              0.09967 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0147 | >20%                    |                10 |              0.10147 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0152 | 15-20%                  |                10 |              0.10152 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0616 | 5-10%                   |                10 |              0.10616 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0889 | <5%                     |                10 |              0.10889 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1102 | 10-15%                  |                10 |              0.11102 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1609 | 15-20%                  |                10 |              0.11609 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.254  | <5%                     |                10 |              0.1254  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.2988 |                         |                10 |              0.12988 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3165 | >20%                    |                10 |              0.13165 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4661 | >20%                    |                10 |              0.14661 |