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

Data correct as of 2025-01-25 01:24:29.340725, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | >20%                    |                 5 |              0.039   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2095 | 5-10%                   |                 2 |              0.10475 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2184 | <5%                     |                 2 |              0.1092  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2234 | >20%                    |                 2 |              0.1117  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2246 | 10-15%                  |                 2 |              0.1123  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2251 | 5-10%                   |                 2 |              0.11255 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2334 | <5%                     |                 5 |              0.04668 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2473 | 5-10%                   |                 2 |              0.12365 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2603 | 10-15%                  |                 2 |              0.13015 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.275  | <5%                     |                 2 |              0.1375  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2754 | 10-15%                  |                 2 |              0.1377  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3012 | <5%                     |                 2 |              0.1506  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3086 | >20%                    |                 2 |              0.1543  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3115 | 5-10%                   |                 2 |              0.15575 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3219 | 10-15%                  |                 2 |              0.16095 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3235 | >20%                    |                 2 |              0.16175 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3349 | 10-15%                  |                 5 |              0.06698 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3479 | <5%                     |                 2 |              0.17395 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3499 | <5%                     |                 5 |              0.06998 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3561 | <5%                     |                 2 |              0.17805 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.362  | >20%                    |                 2 |              0.181   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3699 | 10-15%                  |                 5 |              0.07398 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3726 | 5-10%                   |                 2 |              0.1863  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3735 | 5-10%                   |                 2 |              0.18675 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3744 | >20%                    |                 2 |              0.1872  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.38   | 15-20%                  |                10 |              0.038   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3818 | 5-10%                   |                 5 |              0.07636 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3836 | 5-10%                   |                 2 |              0.1918  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3844 | 5-10%                   |                 5 |              0.07688 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3997 | 5-10%                   |                 2 |              0.19985 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4027 | 5-10%                   |                 5 |              0.08054 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4029 | 10-15%                  |                 2 |              0.20145 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4033 | 5-10%                   |                 2 |              0.20165 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4106 | 10-15%                  |                 2 |              0.2053  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.411  | 15-20%                  |                 2 |              0.2055  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4118 | >20%                    |                 2 |              0.2059  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4199 | <5%                     |                 2 |              0.20995 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4203 | 5-10%                   |                 2 |              0.21015 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4264 | <5%                     |                 5 |              0.08528 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4395 | 15-20%                  |                 5 |              0.0879  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4402 | >20%                    |                 5 |              0.08804 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4512 | >20%                    |                 2 |              0.2256  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4539 | <5%                     |                 5 |              0.09078 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4555 | 15-20%                  |                 5 |              0.0911  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4642 | 15-20%                  |                 5 |              0.09284 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4789 | 5-10%                   |                 2 |              0.23945 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.484  | 15-20%                  |                 5 |              0.0968  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4852 | <5%                     |                 5 |              0.09704 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4855 | 15-20%                  |                 5 |              0.0971  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4932 | <5%                     |                 5 |              0.09864 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4932 | <5%                     |                 2 |              0.2466  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4966 | >20%                    |                 2 |              0.2483  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4982 | 10-15%                  |                 5 |              0.09964 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5033 | <5%                     |                 5 |              0.10066 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5039 | <5%                     |                 2 |              0.25195 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5089 | 5-10%                   |                 2 |              0.25445 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5149 | <5%                     |                 5 |              0.10298 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5151 | <5%                     |                 2 |              0.25755 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5185 | >20%                    |                 2 |              0.25925 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5186 | >20%                    |                 5 |              0.10372 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5246 | 10-15%                  |                 5 |              0.10492 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5297 | 10-15%                  |                 5 |              0.10594 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5351 | 5-10%                   |                 5 |              0.10702 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.5353 | 5-10%                   |                10 |              0.05353 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.545  | 5-10%                   |                 5 |              0.109   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5471 | >20%                    |                 5 |              0.10942 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5533 | 5-10%                   |                 5 |              0.11066 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5568 | 10-15%                  |                 2 |              0.2784  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5626 | 5-10%                   |                 5 |              0.11252 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5645 | <5%                     |                 5 |              0.1129  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5675 | 15-20%                  |                 2 |              0.28375 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5684 | <5%                     |                 5 |              0.11368 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5821 | 5-10%                   |                 5 |              0.11642 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5942 | >20%                    |                10 |              0.05942 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5985 | 5-10%                   |                10 |              0.05985 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6235 | 5-10%                   |                 5 |              0.1247  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6287 | <5%                     |                10 |              0.06287 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6353 | >20%                    |                10 |              0.06353 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6404 | >20%                    |                 2 |              0.3202  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6435 | 5-10%                   |                 5 |              0.1287  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6457 | 5-10%                   |                10 |              0.06457 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6498 | >20%                    |                 5 |              0.12996 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6511 | 15-20%                  |                10 |              0.06511 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6703 | >20%                    |                 5 |              0.13406 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6737 | >20%                    |                10 |              0.06737 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6807 | 5-10%                   |                 5 |              0.13614 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6816 | 5-10%                   |                 5 |              0.13632 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6824 | 5-10%                   |                10 |              0.06824 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6857 | 10-15%                  |                10 |              0.06857 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6922 | >20%                    |                 5 |              0.13844 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7017 | 15-20%                  |                 2 |              0.35085 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7061 | <5%                     |                10 |              0.07061 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7135 | <5%                     |                 5 |              0.1427  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7275 | >20%                    |                 5 |              0.1455  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.736  | 10-15%                  |                10 |              0.0736  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7485 | >20%                    |                 5 |              0.1497  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7515 | 10-15%                  |                10 |              0.07515 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.753  | <5%                     |                10 |              0.0753  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7571 | >20%                    |                10 |              0.07571 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7627 | >20%                    |                 5 |              0.15254 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7702 | 5-10%                   |                10 |              0.07702 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7809 | 5-10%                   |                10 |              0.07809 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7982 | 15-20%                  |                 2 |              0.3991  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8018 | <5%                     |                 2 |              0.4009  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8098 | 5-10%                   |                10 |              0.08098 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8145 | 15-20%                  |                10 |              0.08145 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8153 | 10-15%                  |                10 |              0.08153 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8279 | 15-20%                  |                10 |              0.08279 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8285 | 5-10%                   |                10 |              0.08285 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.83   | <5%                     |                10 |              0.083   |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8354 | 15-20%                  |                10 |              0.08354 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8511 | >20%                    |                10 |              0.08511 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.852  | <5%                     |                10 |              0.0852  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8925 | <5%                     |                10 |              0.08925 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8926 | 5-10%                   |                10 |              0.08926 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.93   | <5%                     |                10 |              0.093   |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9319 | 5-10%                   |                 5 |              0.18638 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9322 | 5-10%                   |                10 |              0.09322 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9611 | 5-10%                   |                10 |              0.09611 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9612 | 5-10%                   |                10 |              0.09612 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9681 | >20%                    |                10 |              0.09681 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9899 | >20%                    |                10 |              0.09899 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9987 | 15-20%                  |                10 |              0.09987 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0266 | 10-15%                  |                10 |              0.10266 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0534 | <5%                     |                10 |              0.10534 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0784 | 5-10%                   |                 5 |              0.21568 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0832 | 5-10%                   |                10 |              0.10832 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.085  | 10-15%                  |                 2 |              0.5425  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1054 | 15-20%                  |                 5 |              0.22108 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1636 | 10-15%                  |                10 |              0.11636 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2381 | >20%                    |                10 |              0.12381 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2771 | 10-15%                  |                 2 |              0.63855 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.369  | 5-10%                   |                10 |              0.1369  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4051 | 5-10%                   |                10 |              0.14051 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4091 | 15-20%                  |                 5 |              0.28182 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4549 | 5-10%                   |                10 |              0.14549 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0601 | 5-10%                   |                10 |              0.20601 |