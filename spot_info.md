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

Data correct as of 2026-04-07 02:48:51.778472, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1864 | >20%                    |                 2 |              0.0932  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1975 | 15-20%                  |                 2 |              0.09875 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2158 | >20%                    |                 2 |              0.1079  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2202 | >20%                    |                 2 |              0.1101  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2463 | >20%                    |                 2 |              0.12315 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2488 | >20%                    |                 2 |              0.1244  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2509 | 15-20%                  |                 5 |              0.05018 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2626 | >20%                    |                 2 |              0.1313  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2777 | 15-20%                  |                 5 |              0.05554 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2796 | 5-10%                   |                10 |              0.02796 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2804 | 15-20%                  |                 2 |              0.1402  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2975 | >20%                    |                10 |              0.02975 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2998 | >20%                    |                 5 |              0.05996 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3031 | 5-10%                   |                10 |              0.03031 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3067 | 10-15%                  |                 2 |              0.15335 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3097 | >20%                    |                 2 |              0.15485 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.311  | <5%                     |                 2 |              0.1555  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3134 | >20%                    |                 5 |              0.06268 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.327  | 10-15%                  |                 2 |              0.1635  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3286 | >20%                    |                 5 |              0.06572 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3291 | 15-20%                  |                 5 |              0.06582 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.33   | >20%                    |                 2 |              0.165   |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3376 | 10-15%                  |                 2 |              0.1688  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3382 | >20%                    |                10 |              0.03382 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3413 | <5%                     |                 2 |              0.17065 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3454 | >20%                    |                 5 |              0.06908 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3459 | >20%                    |                 2 |              0.17295 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3478 | 5-10%                   |                10 |              0.03478 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3579 | 10-15%                  |                 2 |              0.17895 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.358  | 15-20%                  |                 2 |              0.179   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3616 | >20%                    |                 2 |              0.1808  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3881 | >20%                    |                 2 |              0.19405 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3939 | >20%                    |                 5 |              0.07878 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4009 | >20%                    |                 5 |              0.08018 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4015 | >20%                    |                 5 |              0.0803  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4047 | >20%                    |                 2 |              0.20235 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4058 | >20%                    |                 5 |              0.08116 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4138 | <5%                     |                 2 |              0.2069  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4204 | 10-15%                  |                 2 |              0.2102  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4307 | >20%                    |                 2 |              0.21535 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4342 | >20%                    |                 2 |              0.2171  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4348 | >20%                    |                 5 |              0.08696 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4364 | 15-20%                  |                 2 |              0.2182  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4367 | >20%                    |                 2 |              0.21835 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4401 | >20%                    |                 2 |              0.22005 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4439 | >20%                    |                 5 |              0.08878 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4454 | >20%                    |                 5 |              0.08908 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4504 | 15-20%                  |                 2 |              0.2252  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4507 | >20%                    |                 5 |              0.09014 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4609 | >20%                    |                 2 |              0.23045 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4704 | >20%                    |                 5 |              0.09408 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4744 | 15-20%                  |                 2 |              0.2372  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4755 | >20%                    |                 5 |              0.0951  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4769 | >20%                    |                 2 |              0.23845 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4843 | >20%                    |                 5 |              0.09686 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4901 | >20%                    |                 5 |              0.09802 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4967 | >20%                    |                 5 |              0.09934 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4975 | >20%                    |                 5 |              0.0995  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5061 | >20%                    |                 5 |              0.10122 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5107 | >20%                    |                 2 |              0.25535 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5185 | <5%                     |                 5 |              0.1037  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5274 | 5-10%                   |                10 |              0.05274 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5296 | >20%                    |                10 |              0.05296 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5359 | 5-10%                   |                 5 |              0.10718 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5416 | >20%                    |                 2 |              0.2708  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5436 | 5-10%                   |                 2 |              0.2718  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5486 | >20%                    |                 2 |              0.2743  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5509 | >20%                    |                 2 |              0.27545 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5615 | >20%                    |                10 |              0.05615 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.563  | >20%                    |                 5 |              0.1126  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5734 | 15-20%                  |                 5 |              0.11468 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5739 | >20%                    |                10 |              0.05739 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5757 | >20%                    |                 5 |              0.11514 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5796 | <5%                     |                10 |              0.05796 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5828 | >20%                    |                 2 |              0.2914  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.591  | >20%                    |                10 |              0.0591  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5931 | 10-15%                  |                 5 |              0.11862 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5959 | 15-20%                  |                10 |              0.05959 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6086 | >20%                    |                 5 |              0.12172 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6106 | 5-10%                   |                 5 |              0.12212 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6283 | >20%                    |                10 |              0.06283 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6299 | 10-15%                  |                 2 |              0.31495 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6309 | >20%                    |                10 |              0.06309 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6345 | >20%                    |                 5 |              0.1269  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.651  | >20%                    |                 5 |              0.1302  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6576 | >20%                    |                 2 |              0.3288  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6577 | >20%                    |                10 |              0.06577 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6608 | >20%                    |                 5 |              0.13216 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6643 | 5-10%                   |                 2 |              0.33215 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6754 | >20%                    |                 5 |              0.13508 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6793 | >20%                    |                 5 |              0.13586 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.684  | >20%                    |                10 |              0.0684  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7084 | >20%                    |                10 |              0.07084 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7092 | 15-20%                  |                10 |              0.07092 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7218 | >20%                    |                 5 |              0.14436 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7382 | >20%                    |                10 |              0.07382 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.752  | >20%                    |                10 |              0.0752  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7547 | >20%                    |                 5 |              0.15094 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7556 | >20%                    |                 5 |              0.15112 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7559 | >20%                    |                10 |              0.07559 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.7564 | >20%                    |                 5 |              0.15128 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7673 | 15-20%                  |                10 |              0.07673 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7695 | >20%                    |                 2 |              0.38475 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7857 | >20%                    |                 5 |              0.15714 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7956 | >20%                    |                 5 |              0.15912 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8005 | >20%                    |                 2 |              0.40025 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8126 | >20%                    |                 5 |              0.16252 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8179 | >20%                    |                 5 |              0.16358 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8185 | >20%                    |                10 |              0.08185 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8263 | >20%                    |                10 |              0.08263 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8319 | 5-10%                   |                10 |              0.08319 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8343 | >20%                    |                10 |              0.08343 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8409 | >20%                    |                10 |              0.08409 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.848  | 5-10%                   |                 2 |              0.424   |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8512 | >20%                    |                 5 |              0.17024 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8534 | >20%                    |                10 |              0.08534 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8569 | >20%                    |                10 |              0.08569 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.86   | >20%                    |                10 |              0.086   |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8632 | >20%                    |                 5 |              0.17264 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8826 | 15-20%                  |                10 |              0.08826 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8843 | >20%                    |                10 |              0.08843 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8928 | >20%                    |                 2 |              0.4464  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8955 | >20%                    |                10 |              0.08955 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8991 | >20%                    |                 2 |              0.44955 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9341 | >20%                    |                10 |              0.09341 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.942  | 15-20%                  |                10 |              0.0942  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9492 | >20%                    |                 5 |              0.18984 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9497 | >20%                    |                10 |              0.09497 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9534 | 10-15%                  |                10 |              0.09534 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9803 | >20%                    |                10 |              0.09803 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9929 | 10-15%                  |                 2 |              0.49645 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0175 | >20%                    |                10 |              0.10175 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0333 | 5-10%                   |                10 |              0.10333 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0454 | >20%                    |                10 |              0.10454 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0568 | 15-20%                  |                10 |              0.10568 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0997 | >20%                    |                 5 |              0.21994 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1033 | >20%                    |                10 |              0.11033 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1549 | >20%                    |                10 |              0.11549 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1834 | 10-15%                  |                10 |              0.11834 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1944 | >20%                    |                 5 |              0.23888 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2469 | 15-20%                  |                10 |              0.12469 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3115 | 15-20%                  |                10 |              0.13115 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.401  | >20%                    |                10 |              0.1401  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4335 | >20%                    |                 5 |              0.2867  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.444  | 5-10%                   |                 2 |              0.722   |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4605 | >20%                    |                 2 |              0.73025 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4655 | 15-20%                  |                 5 |              0.2931  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.718  |                         |                 5 |              0.3436  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.9177 |                         |                 2 |              0.95885 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9349 | >20%                    |                10 |              0.19349 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      2.4674 |                         |                10 |              0.24674 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.9637 | >20%                    |                10 |              0.29637 |