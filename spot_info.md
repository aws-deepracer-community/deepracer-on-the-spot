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

Data correct as of 2025-03-25 01:45:29.117585, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1162 | 10-15%                  |                 2 |              0.0581  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.129  | 5-10%                   |                 5 |              0.0258  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1688 | 10-15%                  |                 2 |              0.0844  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 5-10%                   |                 5 |              0.039   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2074 | 5-10%                   |                 2 |              0.1037  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2203 | >20%                    |                 2 |              0.11015 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.227  | >20%                    |                 2 |              0.1135  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2306 | 15-20%                  |                 2 |              0.1153  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2388 | 15-20%                  |                 2 |              0.1194  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 5-10%                   |                10 |              0.02395 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2408 | >20%                    |                 2 |              0.1204  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2426 | >20%                    |                 2 |              0.1213  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2537 | 5-10%                   |                 2 |              0.12685 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2714 | 10-15%                  |                10 |              0.02714 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2728 | 5-10%                   |                 2 |              0.1364  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.277  | 5-10%                   |                 2 |              0.1385  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2804 | <5%                     |                 2 |              0.1402  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2823 | <5%                     |                 2 |              0.14115 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2834 | <5%                     |                 2 |              0.1417  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2911 | 10-15%                  |                 2 |              0.14555 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2981 | 5-10%                   |                 2 |              0.14905 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3005 | >20%                    |                 2 |              0.15025 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3025 | >20%                    |                 2 |              0.15125 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3043 | >20%                    |                 5 |              0.06086 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3086 | 10-15%                  |                10 |              0.03086 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3121 | >20%                    |                 2 |              0.15605 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3171 | 5-10%                   |                 2 |              0.15855 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | 5-10%                   |                10 |              0.03351 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3355 | 15-20%                  |                 5 |              0.0671  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3485 | >20%                    |                 2 |              0.17425 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3527 | >20%                    |                 2 |              0.17635 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3561 | >20%                    |                 2 |              0.17805 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3575 | >20%                    |                 2 |              0.17875 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3583 | 5-10%                   |                10 |              0.03583 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.359  | >20%                    |                 2 |              0.1795  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3636 | 10-15%                  |                 5 |              0.07272 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3637 | >20%                    |                 5 |              0.07274 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3659 | 5-10%                   |                10 |              0.03659 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3661 | >20%                    |                10 |              0.03661 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3714 | >20%                    |                 5 |              0.07428 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3726 | <5%                     |                 2 |              0.1863  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3729 | 15-20%                  |                10 |              0.03729 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3798 | 5-10%                   |                 2 |              0.1899  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3804 | 10-15%                  |                 5 |              0.07608 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3909 | 10-15%                  |                 2 |              0.19545 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.3954 |                         |                 5 |              0.07908 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3997 | <5%                     |                 2 |              0.19985 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4056 | >20%                    |                 5 |              0.08112 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4061 | >20%                    |                 2 |              0.20305 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4068 | >20%                    |                 2 |              0.2034  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4095 | 15-20%                  |                 2 |              0.20475 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4118 | >20%                    |                 2 |              0.2059  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4147 | >20%                    |                 5 |              0.08294 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4151 | 5-10%                   |                 2 |              0.20755 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4167 | 5-10%                   |                 2 |              0.20835 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4192 | 5-10%                   |                 5 |              0.08384 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4193 | 10-15%                  |                 5 |              0.08386 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4231 | >20%                    |                 2 |              0.21155 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4331 | 5-10%                   |                 5 |              0.08662 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.4345 | >20%                    |                 2 |              0.21725 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4348 |                         |                 2 |              0.2174  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4354 | >20%                    |                 2 |              0.2177  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4382 | 5-10%                   |                 2 |              0.2191  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4386 | <5%                     |                 2 |              0.2193  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4494 | <5%                     |                 5 |              0.08988 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4522 | <5%                     |                 5 |              0.09044 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4536 | >20%                    |                 5 |              0.09072 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.456  | <5%                     |                 5 |              0.0912  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4583 | >20%                    |                 5 |              0.09166 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4596 | 5-10%                   |                 5 |              0.09192 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4596 | 5-10%                   |                 2 |              0.2298  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4604 | 5-10%                   |                 5 |              0.09208 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4623 | 5-10%                   |                 5 |              0.09246 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4692 | 10-15%                  |                 5 |              0.09384 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.478  | >20%                    |                 5 |              0.0956  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4784 | >20%                    |                 5 |              0.09568 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4817 | >20%                    |                 2 |              0.24085 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4871 | <5%                     |                 5 |              0.09742 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.491  | >20%                    |                10 |              0.0491  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4924 | 5-10%                   |                 5 |              0.09848 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4935 | >20%                    |                 5 |              0.0987  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4969 | 10-15%                  |                 2 |              0.24845 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4985 | >20%                    |                 2 |              0.24925 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5003 | >20%                    |                 5 |              0.10006 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5024 | >20%                    |                 5 |              0.10048 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5101 | >20%                    |                 2 |              0.25505 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5202 | >20%                    |                 5 |              0.10404 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5227 | <5%                     |                10 |              0.05227 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.5248 | 5-10%                   |                 5 |              0.10496 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.5265 | >20%                    |                10 |              0.05265 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5301 | 10-15%                  |                 5 |              0.10602 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5303 | >20%                    |                 5 |              0.10606 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5403 | 15-20%                  |                 2 |              0.27015 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5425 | >20%                    |                 5 |              0.1085  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5432 | 15-20%                  |                 2 |              0.2716  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5464 | 5-10%                   |                 5 |              0.10928 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.551  | 15-20%                  |                 5 |              0.1102  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5535 | >20%                    |                 2 |              0.27675 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5556 | 5-10%                   |                 5 |              0.11112 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5609 | >20%                    |                 2 |              0.28045 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.5631 | >20%                    |                 2 |              0.28155 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.564  | 10-15%                  |                 5 |              0.1128  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5641 | 10-15%                  |                10 |              0.05641 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5759 | >20%                    |                 5 |              0.11518 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5759 | <5%                     |                 5 |              0.11518 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5843 | <5%                     |                 5 |              0.11686 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5861 | >20%                    |                 2 |              0.29305 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5927 | >20%                    |                 5 |              0.11854 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6143 | 15-20%                  |                 5 |              0.12286 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6179 | <5%                     |                10 |              0.06179 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6193 | >20%                    |                10 |              0.06193 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6309 | >20%                    |                 5 |              0.12618 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.639  | <5%                     |                 2 |              0.3195  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6441 | >20%                    |                10 |              0.06441 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6443 | <5%                     |                10 |              0.06443 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6728 | >20%                    |                 5 |              0.13456 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6831 | >20%                    |                 2 |              0.34155 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6842 | 10-15%                  |                 5 |              0.13684 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6854 | >20%                    |                 5 |              0.13708 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6886 | >20%                    |                10 |              0.06886 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6995 | 5-10%                   |                 5 |              0.1399  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7039 | >20%                    |                10 |              0.07039 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7065 | >20%                    |                 5 |              0.1413  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7157 | 5-10%                   |                10 |              0.07157 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7159 | >20%                    |                10 |              0.07159 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7224 |                         |                10 |              0.07224 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7224 | >20%                    |                10 |              0.07224 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7361 | <5%                     |                 5 |              0.14722 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7374 | 5-10%                   |                10 |              0.07374 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.739  | >20%                    |                10 |              0.0739  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7457 | 15-20%                  |                 5 |              0.14914 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7481 | 5-10%                   |                 2 |              0.37405 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7576 | >20%                    |                10 |              0.07576 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7616 | 5-10%                   |                10 |              0.07616 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7632 | <5%                     |                10 |              0.07632 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7665 | >20%                    |                 5 |              0.1533  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7701 | >20%                    |                 5 |              0.15402 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7796 | <5%                     |                10 |              0.07796 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7946 | <5%                     |                10 |              0.07946 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.8101 | >20%                    |                10 |              0.08101 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.8145 | >20%                    |                 2 |              0.40725 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.825  | 15-20%                  |                10 |              0.0825  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8329 | 15-20%                  |                10 |              0.08329 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8458 | >20%                    |                 2 |              0.4229  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.851  | 15-20%                  |                 5 |              0.1702  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8525 | 5-10%                   |                10 |              0.08525 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8528 | >20%                    |                10 |              0.08528 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8611 | >20%                    |                10 |              0.08611 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8617 | >20%                    |                10 |              0.08617 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8621 | <5%                     |                10 |              0.08621 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8637 | >20%                    |                10 |              0.08637 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8644 | >20%                    |                 2 |              0.4322  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.867  | <5%                     |                10 |              0.0867  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8833 | 5-10%                   |                10 |              0.08833 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8955 | >20%                    |                10 |              0.08955 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9201 | >20%                    |                10 |              0.09201 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9797 | 15-20%                  |                10 |              0.09797 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9912 | 10-15%                  |                10 |              0.09912 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0258 | >20%                    |                 5 |              0.20516 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0314 | 5-10%                   |                10 |              0.10314 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0541 | >20%                    |                10 |              0.10541 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0605 | 5-10%                   |                10 |              0.10605 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0928 | <5%                     |                10 |              0.10928 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0978 | >20%                    |                10 |              0.10978 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1482 | >20%                    |                 5 |              0.22964 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.157  | 5-10%                   |                10 |              0.1157  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1752 | >20%                    |                10 |              0.11752 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.186  | 15-20%                  |                10 |              0.1186  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2171 | >20%                    |                10 |              0.12171 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.241  | >20%                    |                10 |              0.1241  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2626 | >20%                    |                 2 |              0.6313  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2967 | 5-10%                   |                 5 |              0.25934 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3149 | 5-10%                   |                 2 |              0.65745 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3306 | >20%                    |                 5 |              0.26612 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.448  | >20%                    |                10 |              0.1448  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4724 | 10-15%                  |                 5 |              0.29448 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5132 | >20%                    |                10 |              0.15132 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6958 | >20%                    |                10 |              0.16958 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0234 | 5-10%                   |                10 |              0.20234 |