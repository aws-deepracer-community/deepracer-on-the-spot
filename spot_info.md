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

Data correct as of 2025-03-27 01:44:40.247546, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1152 | 15-20%                  |                 2 |              0.0576  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1341 | 5-10%                   |                 5 |              0.02682 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1567 | 10-15%                  |                 2 |              0.07835 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | 10-15%                  |                 5 |              0.03178 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 5-10%                   |                 5 |              0.039   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2034 | <5%                     |                 2 |              0.1017  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2267 | >20%                    |                 2 |              0.11335 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2295 | 15-20%                  |                 2 |              0.11475 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2339 | >20%                    |                 2 |              0.11695 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 10-15%                  |                10 |              0.02395 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.242  | >20%                    |                 2 |              0.121   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.242  | 15-20%                  |                 2 |              0.121   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2458 | 15-20%                  |                 2 |              0.1229  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2484 | 15-20%                  |                10 |              0.02484 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2529 | 5-10%                   |                 2 |              0.12645 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2767 | <5%                     |                 2 |              0.13835 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2832 | 5-10%                   |                 2 |              0.1416  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2888 | <5%                     |                 2 |              0.1444  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2905 | <5%                     |                 2 |              0.14525 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2906 | 15-20%                  |                 2 |              0.1453  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2916 | 10-15%                  |                 2 |              0.1458  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2963 | >20%                    |                 2 |              0.14815 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2968 | 5-10%                   |                 2 |              0.1484  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3001 | 10-15%                  |                10 |              0.03001 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | 10-15%                  |                10 |              0.0301  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3043 | >20%                    |                 2 |              0.15215 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3078 | 15-20%                  |                 2 |              0.1539  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.314  | 10-15%                  |                 5 |              0.0628  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3159 | 10-15%                  |                 2 |              0.15795 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3264 | <5%                     |                10 |              0.03264 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3373 | >20%                    |                 2 |              0.16865 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3441 | 15-20%                  |                 5 |              0.06882 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3512 | >20%                    |                 2 |              0.1756  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.352  | >20%                    |                 2 |              0.176   |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3544 | >20%                    |                10 |              0.03544 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3562 | >20%                    |                 2 |              0.1781  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3598 | 10-15%                  |                 5 |              0.07196 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3607 | 10-15%                  |                 5 |              0.07214 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3685 | >20%                    |                 5 |              0.0737  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3758 | >20%                    |                 2 |              0.1879  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3773 | <5%                     |                 2 |              0.18865 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3775 | 5-10%                   |                 5 |              0.0755  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3793 | >20%                    |                10 |              0.03793 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3806 | >20%                    |                 2 |              0.1903  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3807 | 10-15%                  |                10 |              0.03807 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3987 | >20%                    |                 5 |              0.07974 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3993 | <5%                     |                 2 |              0.19965 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4025 | >20%                    |                 5 |              0.0805  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4025 | <5%                     |                 2 |              0.20125 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4029 | 15-20%                  |                 2 |              0.20145 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4071 | 15-20%                  |                 2 |              0.20355 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4107 | >20%                    |                 2 |              0.20535 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4159 | >20%                    |                 5 |              0.08318 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4178 | <5%                     |                 2 |              0.2089  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4201 | 10-15%                  |                 2 |              0.21005 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4288 | <5%                     |                 2 |              0.2144  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4294 | 5-10%                   |                 2 |              0.2147  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4315 | >20%                    |                 2 |              0.21575 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4351 | >20%                    |                 2 |              0.21755 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4361 | 5-10%                   |                 5 |              0.08722 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4394 | >20%                    |                 2 |              0.2197  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4488 | >20%                    |                 5 |              0.08976 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4502 | >20%                    |                 5 |              0.09004 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4503 | >20%                    |                 5 |              0.09006 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4563 | >20%                    |                 5 |              0.09126 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4566 | 5-10%                   |                 2 |              0.2283  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4569 | 5-10%                   |                 5 |              0.09138 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.457  | <5%                     |                 5 |              0.0914  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4632 | 10-15%                  |                 5 |              0.09264 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.464  | >20%                    |                 5 |              0.0928  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4648 | 15-20%                  |                 5 |              0.09296 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.466  | >20%                    |                 2 |              0.233   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4697 | >20%                    |                 2 |              0.23485 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4717 | 10-15%                  |                 5 |              0.09434 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4758 | >20%                    |                 5 |              0.09516 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4772 | >20%                    |                 2 |              0.2386  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4831 | 5-10%                   |                 5 |              0.09662 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4859 | 5-10%                   |                 5 |              0.09718 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4892 | >20%                    |                 5 |              0.09784 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4951 | 5-10%                   |                 5 |              0.09902 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4968 | <5%                     |                 2 |              0.2484  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4987 | >20%                    |                 5 |              0.09974 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.504  | >20%                    |                 5 |              0.1008  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5049 | >20%                    |                 2 |              0.25245 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.5056 | >20%                    |                10 |              0.05056 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5072 | >20%                    |                 5 |              0.10144 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5073 | >20%                    |                 5 |              0.10146 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5092 | >20%                    |                 2 |              0.2546  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5098 | >20%                    |                 5 |              0.10196 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5186 | 15-20%                  |                 5 |              0.10372 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5353 | 10-15%                  |                 5 |              0.10706 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5412 | <5%                     |                10 |              0.05412 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5466 | >20%                    |                 2 |              0.2733  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.5467 | <5%                     |                 5 |              0.10934 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5479 | 15-20%                  |                 5 |              0.10958 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5483 | 15-20%                  |                 2 |              0.27415 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5499 | 10-15%                  |                 5 |              0.10998 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5541 | 10-15%                  |                 2 |              0.27705 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.5566 | >20%                    |                 2 |              0.2783  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5585 | 10-15%                  |                10 |              0.05585 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.562  | 10-15%                  |                 5 |              0.1124  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5631 | 5-10%                   |                 5 |              0.11262 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5747 | >20%                    |                 2 |              0.28735 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5776 | <5%                     |                 5 |              0.11552 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.584  | >20%                    |                 5 |              0.1168  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5852 | >20%                    |                 2 |              0.2926  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.5867 | 10-15%                  |                10 |              0.05867 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5923 | <5%                     |                 5 |              0.11846 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5933 | >20%                    |                 5 |              0.11866 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5963 | <5%                     |                10 |              0.05963 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6022 | <5%                     |                10 |              0.06022 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6172 | 15-20%                  |                 5 |              0.12344 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6272 | >20%                    |                 5 |              0.12544 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6316 | >20%                    |                10 |              0.06316 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6398 | >20%                    |                10 |              0.06398 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6669 | 10-15%                  |                 2 |              0.33345 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6702 | <5%                     |                 5 |              0.13404 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6725 | >20%                    |                 5 |              0.1345  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6792 | <5%                     |                 2 |              0.3396  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6893 | 15-20%                  |                 5 |              0.13786 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6919 | 10-15%                  |                 5 |              0.13838 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6935 | >20%                    |                 5 |              0.1387  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6961 | 5-10%                   |                10 |              0.06961 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6969 | >20%                    |                10 |              0.06969 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6972 | >20%                    |                10 |              0.06972 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6994 | >20%                    |                10 |              0.06994 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7182 | <5%                     |                10 |              0.07182 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7196 | >20%                    |                10 |              0.07196 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7281 | 5-10%                   |                10 |              0.07281 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7284 | 5-10%                   |                10 |              0.07284 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7399 | >20%                    |                 5 |              0.14798 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7406 | <5%                     |                 5 |              0.14812 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.7413 | >20%                    |                10 |              0.07413 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7492 | >20%                    |                10 |              0.07492 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7546 | 15-20%                  |                 5 |              0.15092 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7637 | <5%                     |                10 |              0.07637 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7679 | >20%                    |                 5 |              0.15358 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7764 | >20%                    |                10 |              0.07764 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7911 | 10-15%                  |                 2 |              0.39555 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7939 | >20%                    |                 2 |              0.39695 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7942 | <5%                     |                10 |              0.07942 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.8015 | >20%                    |                 2 |              0.40075 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8027 | <5%                     |                10 |              0.08027 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8107 | >20%                    |                10 |              0.08107 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.815  | <5%                     |                10 |              0.0815  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8212 | 5-10%                   |                10 |              0.08212 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8244 | >20%                    |                10 |              0.08244 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8357 | >20%                    |                10 |              0.08357 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8542 | 15-20%                  |                 5 |              0.17084 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8555 | 15-20%                  |                10 |              0.08555 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.856  | 15-20%                  |                10 |              0.0856  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8594 | 5-10%                   |                10 |              0.08594 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8637 | >20%                    |                 2 |              0.43185 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8715 | <5%                     |                10 |              0.08715 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.877  | <5%                     |                10 |              0.0877  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.902  | >20%                    |                10 |              0.0902  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.915  | >20%                    |                10 |              0.0915  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9596 | 10-15%                  |                10 |              0.09596 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9684 | 5-10%                   |                10 |              0.09684 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0125 | 5-10%                   |                10 |              0.10125 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0417 | >20%                    |                 5 |              0.20834 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0428 | >20%                    |                10 |              0.10428 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.056  | 15-20%                  |                10 |              0.1056  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0847 | <5%                     |                10 |              0.10847 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1211 | 15-20%                  |                10 |              0.11211 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1566 | >20%                    |                 5 |              0.23132 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1846 | 15-20%                  |                10 |              0.11846 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.1935 | >20%                    |                10 |              0.11935 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1941 | <5%                     |                10 |              0.11941 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2282 | 15-20%                  |                10 |              0.12282 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2517 | >20%                    |                 2 |              0.62585 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2522 | 15-20%                  |                10 |              0.12522 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2744 | 5-10%                   |                 2 |              0.6372  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2959 | <5%                     |                 5 |              0.25918 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3146 | >20%                    |                 5 |              0.26292 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4431 | >20%                    |                10 |              0.14431 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4893 | >20%                    |                 5 |              0.29786 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5265 | >20%                    |                10 |              0.15265 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6434 | >20%                    |                10 |              0.16434 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9644 | <5%                     |                10 |              0.19644 |