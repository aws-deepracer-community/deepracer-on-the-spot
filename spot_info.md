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

Data correct as of 2024-12-29 01:44:57.369372, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.1518 |                         |                 2 |              0.0759  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1818 |                         |                 2 |              0.0909  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2023 | >20%                    |                 2 |              0.10115 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2025 | <5%                     |                 5 |              0.0405  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2044 | 15-20%                  |                 2 |              0.1022  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2194 | <5%                     |                 2 |              0.1097  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2204 | >20%                    |                 2 |              0.1102  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.222  |                         |                 5 |              0.0444  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2282 |                         |                 5 |              0.04564 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2304 | 15-20%                  |                 2 |              0.1152  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2337 | 15-20%                  |                 2 |              0.11685 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2354 | 5-10%                   |                 2 |              0.1177  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2453 | 15-20%                  |                 2 |              0.12265 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2511 | 5-10%                   |                 2 |              0.12555 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.288  | <5%                     |                 2 |              0.144   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2902 | <5%                     |                 2 |              0.1451  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2947 | 5-10%                   |                 2 |              0.14735 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2955 | 15-20%                  |                 5 |              0.0591  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2999 | >20%                    |                 2 |              0.14995 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3035 | 5-10%                   |                 2 |              0.15175 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3142 | 5-10%                   |                 2 |              0.1571  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3327 | <5%                     |                 2 |              0.16635 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3346 | <5%                     |                 2 |              0.1673  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3382 | <5%                     |                 5 |              0.06764 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3432 | >20%                    |                 2 |              0.1716  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3459 | >20%                    |                10 |              0.03459 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3486 |                         |                10 |              0.03486 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.353  | 10-15%                  |                 2 |              0.1765  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3596 | 10-15%                  |                 2 |              0.1798  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3651 | 15-20%                  |                10 |              0.03651 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3654 | >20%                    |                 2 |              0.1827  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3693 | 10-15%                  |                 2 |              0.18465 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3702 | >20%                    |                 2 |              0.1851  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3715 |                         |                10 |              0.03715 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3743 | 5-10%                   |                10 |              0.03743 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3812 | <5%                     |                 5 |              0.07624 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3816 | >20%                    |                 5 |              0.07632 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3826 | >20%                    |                 2 |              0.1913  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3923 | 5-10%                   |                 2 |              0.19615 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3972 | 10-15%                  |                 2 |              0.1986  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3988 | <5%                     |                 2 |              0.1994  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3998 | <5%                     |                 5 |              0.07996 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4015 | >20%                    |                 2 |              0.20075 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4117 | 5-10%                   |                 2 |              0.20585 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4177 | >20%                    |                 5 |              0.08354 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4186 | 10-15%                  |                 2 |              0.2093  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4276 | 5-10%                   |                 2 |              0.2138  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4288 | 10-15%                  |                10 |              0.04288 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4329 | 5-10%                   |                 5 |              0.08658 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4343 | 5-10%                   |                 5 |              0.08686 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4368 | 5-10%                   |                 5 |              0.08736 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4369 | <5%                     |                 5 |              0.08738 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4429 | 5-10%                   |                 2 |              0.22145 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4516 | <5%                     |                 5 |              0.09032 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4527 | >20%                    |                 5 |              0.09054 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4527 | >20%                    |                 5 |              0.09054 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4531 | >20%                    |                 5 |              0.09062 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4589 | 10-15%                  |                 5 |              0.09178 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4659 | >20%                    |                 5 |              0.09318 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.467  | 5-10%                   |                 2 |              0.2335  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4717 | 15-20%                  |                 2 |              0.23585 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4721 | 15-20%                  |                 5 |              0.09442 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.475  | 10-15%                  |                 5 |              0.095   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4767 | <5%                     |                 5 |              0.09534 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4796 | 5-10%                   |                 5 |              0.09592 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4825 | 5-10%                   |                 5 |              0.0965  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4932 | 15-20%                  |                 2 |              0.2466  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4954 | 10-15%                  |                 2 |              0.2477  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4989 | <5%                     |                 5 |              0.09978 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5033 | <5%                     |                 5 |              0.10066 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5108 | <5%                     |                 2 |              0.2554  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5113 | 10-15%                  |                 2 |              0.25565 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5144 | >20%                    |                 5 |              0.10288 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5176 | >20%                    |                 5 |              0.10352 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5312 | <5%                     |                 5 |              0.10624 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5347 | 5-10%                   |                10 |              0.05347 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5357 | >20%                    |                 5 |              0.10714 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5382 | 5-10%                   |                 5 |              0.10764 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5392 | >20%                    |                 2 |              0.2696  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5448 | 10-15%                  |                10 |              0.05448 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5574 | <5%                     |                 2 |              0.2787  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5626 | 15-20%                  |                 5 |              0.11252 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5629 | >20%                    |                 5 |              0.11258 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5638 | 10-15%                  |                 5 |              0.11276 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5762 | >20%                    |                 2 |              0.2881  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.58   | >20%                    |                 5 |              0.116   |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6155 | >20%                    |                10 |              0.06155 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6306 | <5%                     |                 5 |              0.12612 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6364 | >20%                    |                10 |              0.06364 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6554 | 5-10%                   |                10 |              0.06554 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6618 | <5%                     |                 5 |              0.13236 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6689 | 15-20%                  |                 2 |              0.33445 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6739 | <5%                     |                 5 |              0.13478 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6834 | 15-20%                  |                 5 |              0.13668 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6837 | >20%                    |                10 |              0.06837 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6901 | 10-15%                  |                10 |              0.06901 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6914 | 15-20%                  |                 5 |              0.13828 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6927 | >20%                    |                10 |              0.06927 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7035 | 10-15%                  |                10 |              0.07035 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7044 | 5-10%                   |                 5 |              0.14088 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7077 | 5-10%                   |                10 |              0.07077 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7161 | >20%                    |                 2 |              0.35805 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7223 | >20%                    |                10 |              0.07223 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7356 | <5%                     |                 2 |              0.3678  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7543 | 5-10%                   |                10 |              0.07543 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7549 | <5%                     |                10 |              0.07549 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7662 | >20%                    |                 5 |              0.15324 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7704 | >20%                    |                 5 |              0.15408 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7839 | 15-20%                  |                10 |              0.07839 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7849 | >20%                    |                 5 |              0.15698 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7964 | <5%                     |                10 |              0.07964 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8006 | 15-20%                  |                10 |              0.08006 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8077 | 5-10%                   |                10 |              0.08077 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8231 | 10-15%                  |                10 |              0.08231 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8308 | 5-10%                   |                10 |              0.08308 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.8398 | <5%                     |                 2 |              0.4199  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8555 | 10-15%                  |                10 |              0.08555 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8583 | >20%                    |                10 |              0.08583 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8593 | 10-15%                  |                10 |              0.08593 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8602 | 5-10%                   |                10 |              0.08602 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.8612 | >20%                    |                10 |              0.08612 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8724 | 5-10%                   |                10 |              0.08724 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8797 | <5%                     |                10 |              0.08797 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8954 | <5%                     |                10 |              0.08954 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9008 | 5-10%                   |                 5 |              0.18016 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9269 | 15-20%                  |                10 |              0.09269 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9491 | >20%                    |                10 |              0.09491 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9599 | 5-10%                   |                 5 |              0.19198 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9721 | <5%                     |                 5 |              0.19442 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9946 | 15-20%                  |                10 |              0.09946 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0055 | 10-15%                  |                 2 |              0.50275 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0065 | 5-10%                   |                10 |              0.10065 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0635 | <5%                     |                10 |              0.10635 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0893 | <5%                     |                10 |              0.10893 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1146 | <5%                     |                10 |              0.11146 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1232 | >20%                    |                10 |              0.11232 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1356 | >20%                    |                10 |              0.11356 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2404 | 5-10%                   |                10 |              0.12404 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3314 | >20%                    |                10 |              0.13314 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3449 | <5%                     |                10 |              0.13449 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4302 | 5-10%                   |                10 |              0.14302 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5716 | 5-10%                   |                 5 |              0.31432 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0635 | 10-15%                  |                10 |              0.20635 |