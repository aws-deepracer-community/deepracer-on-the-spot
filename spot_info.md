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

Data correct as of 2026-04-05 02:53:43.803641, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1907 | >20%                    |                 2 |              0.09535 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2079 | 15-20%                  |                 2 |              0.10395 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2184 | >20%                    |                 2 |              0.1092  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2207 | >20%                    |                 2 |              0.11035 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.246  | >20%                    |                 2 |              0.123   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2484 | >20%                    |                 2 |              0.1242  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2516 | 15-20%                  |                 5 |              0.05032 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2658 | >20%                    |                 2 |              0.1329  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2763 | 15-20%                  |                 2 |              0.13815 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2775 | 10-15%                  |                 2 |              0.13875 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2823 | 15-20%                  |                 5 |              0.05646 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2925 | 5-10%                   |                10 |              0.02925 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2949 | >20%                    |                10 |              0.02949 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2962 | >20%                    |                 5 |              0.05924 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3018 | 5-10%                   |                10 |              0.03018 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3051 | >20%                    |                 5 |              0.06102 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3156 | >20%                    |                 2 |              0.1578  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3192 | >20%                    |                 5 |              0.06384 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3202 | 15-20%                  |                 5 |              0.06404 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3259 | 10-15%                  |                 2 |              0.16295 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3307 | >20%                    |                 2 |              0.16535 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3335 | <5%                     |                 2 |              0.16675 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3347 | 10-15%                  |                 2 |              0.16735 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3376 | >20%                    |                10 |              0.03376 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3421 | >20%                    |                 2 |              0.17105 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3428 | <5%                     |                 2 |              0.1714  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3428 | >20%                    |                 5 |              0.06856 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.352  | 10-15%                  |                 2 |              0.176   |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3557 | 5-10%                   |                10 |              0.03557 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3674 | 15-20%                  |                 2 |              0.1837  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3787 | >20%                    |                 2 |              0.18935 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3812 | >20%                    |                 2 |              0.1906  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3899 | >20%                    |                 5 |              0.07798 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3936 | >20%                    |                 5 |              0.07872 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3986 | >20%                    |                 5 |              0.07972 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4034 | >20%                    |                 2 |              0.2017  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.411  | >20%                    |                 5 |              0.0822  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4128 | <5%                     |                 2 |              0.2064  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4172 | 10-15%                  |                 2 |              0.2086  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4263 | >20%                    |                 2 |              0.21315 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4291 | 15-20%                  |                 2 |              0.21455 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4297 | >20%                    |                 2 |              0.21485 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.434  | >20%                    |                 5 |              0.0868  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4343 | >20%                    |                 5 |              0.08686 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4347 | >20%                    |                 2 |              0.21735 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4493 | >20%                    |                 2 |              0.22465 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4552 | >20%                    |                 2 |              0.2276  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4581 | <5%                     |                 5 |              0.09162 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4603 | >20%                    |                 5 |              0.09206 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4637 | >20%                    |                 5 |              0.09274 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4682 | >20%                    |                 5 |              0.09364 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4703 | 15-20%                  |                 2 |              0.23515 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4706 | >20%                    |                 2 |              0.2353  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4724 | >20%                    |                 5 |              0.09448 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4744 | 15-20%                  |                 2 |              0.2372  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.48   | >20%                    |                 5 |              0.096   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4822 | >20%                    |                 5 |              0.09644 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4888 | >20%                    |                 5 |              0.09776 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5022 | >20%                    |                 2 |              0.2511  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5047 | >20%                    |                 5 |              0.10094 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5076 | >20%                    |                 5 |              0.10152 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5078 | >20%                    |                 2 |              0.2539  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5224 | 5-10%                   |                10 |              0.05224 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5246 | >20%                    |                 2 |              0.2623  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5269 | >20%                    |                10 |              0.05269 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5358 | 5-10%                   |                 5 |              0.10716 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5374 | 15-20%                  |                10 |              0.05374 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.556  | 5-10%                   |                 2 |              0.278   |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5585 | 15-20%                  |                 5 |              0.1117  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5629 | >20%                    |                 5 |              0.11258 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5663 | >20%                    |                10 |              0.05663 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5667 | >20%                    |                10 |              0.05667 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5749 | >20%                    |                 5 |              0.11498 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5758 | >20%                    |                 5 |              0.11516 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5759 | >20%                    |                 2 |              0.28795 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5814 | >20%                    |                 5 |              0.11628 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5828 | >20%                    |                 2 |              0.2914  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5957 | 10-15%                  |                 5 |              0.11914 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5977 | >20%                    |                10 |              0.05977 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6089 | 5-10%                   |                 5 |              0.12178 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6147 | >20%                    |                 5 |              0.12294 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6256 | <5%                     |                10 |              0.06256 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6395 | >20%                    |                10 |              0.06395 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6398 | >20%                    |                 5 |              0.12796 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6426 | 10-15%                  |                 2 |              0.3213  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6492 | >20%                    |                10 |              0.06492 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6581 | 15-20%                  |                10 |              0.06581 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6712 | >20%                    |                10 |              0.06712 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6762 | >20%                    |                 2 |              0.3381  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.677  | >20%                    |                10 |              0.0677  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.679  | >20%                    |                 5 |              0.1358  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6796 | 5-10%                   |                 2 |              0.3398  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.68   | >20%                    |                 5 |              0.136   |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6965 | 15-20%                  |                10 |              0.06965 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.7311 | >20%                    |                 5 |              0.14622 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7355 | >20%                    |                 5 |              0.1471  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7362 | >20%                    |                 5 |              0.14724 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7384 | >20%                    |                10 |              0.07384 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7559 | >20%                    |                 2 |              0.37795 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7643 | >20%                    |                10 |              0.07643 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7732 | >20%                    |                 5 |              0.15464 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7744 | >20%                    |                 5 |              0.15488 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7777 | >20%                    |                 5 |              0.15554 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7801 | >20%                    |                10 |              0.07801 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7811 | >20%                    |                10 |              0.07811 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7896 | >20%                    |                10 |              0.07896 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7911 | >20%                    |                10 |              0.07911 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8101 | >20%                    |                 5 |              0.16202 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8224 | 5-10%                   |                 2 |              0.4112  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8338 | >20%                    |                 5 |              0.16676 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8351 | >20%                    |                10 |              0.08351 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8364 | >20%                    |                10 |              0.08364 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8369 | >20%                    |                10 |              0.08369 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8484 | >20%                    |                10 |              0.08484 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8518 | >20%                    |                 2 |              0.4259  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8538 | >20%                    |                 2 |              0.4269  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.855  | >20%                    |                10 |              0.0855  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.865  | 5-10%                   |                10 |              0.0865  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8659 | >20%                    |                 5 |              0.17318 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.867  | >20%                    |                 5 |              0.1734  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8834 | >20%                    |                10 |              0.08834 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8848 | 15-20%                  |                10 |              0.08848 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8972 | >20%                    |                 2 |              0.4486  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9042 | >20%                    |                10 |              0.09042 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9117 | >20%                    |                10 |              0.09117 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9179 | >20%                    |                10 |              0.09179 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9338 | 10-15%                  |                 2 |              0.4669  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9465 | >20%                    |                10 |              0.09465 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9609 | 15-20%                  |                10 |              0.09609 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9629 | 10-15%                  |                10 |              0.09629 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9647 | >20%                    |                 5 |              0.19294 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0075 | >20%                    |                10 |              0.10075 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0296 | 5-10%                   |                10 |              0.10296 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0302 | >20%                    |                10 |              0.10302 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0517 | 15-20%                  |                10 |              0.10517 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0632 | >20%                    |                10 |              0.10632 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0634 | >20%                    |                 5 |              0.21268 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1085 | >20%                    |                10 |              0.11085 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1114 | 10-15%                  |                10 |              0.11114 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1812 | >20%                    |                 5 |              0.23624 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2858 | 15-20%                  |                10 |              0.12858 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2876 | 15-20%                  |                10 |              0.12876 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3248 | >20%                    |                10 |              0.13248 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3996 | 5-10%                   |                 2 |              0.6998  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.43   | >20%                    |                 5 |              0.286   |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4344 | >20%                    |                 2 |              0.7172  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4466 | 15-20%                  |                 5 |              0.28932 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.8027 |                         |                 2 |              0.90135 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.858  |                         |                 5 |              0.3716  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.0413 | >20%                    |                10 |              0.20413 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      2.5509 |                         |                10 |              0.25509 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.8663 | >20%                    |                10 |              0.28663 |