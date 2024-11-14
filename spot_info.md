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

Data correct as of 2024-11-14 01:37:10.268930, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1563 | 15-20%                  |                 5 |              0.03126 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 5-10%                   |                 2 |              0.0831  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1812 | 10-15%                  |                 2 |              0.0906  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2123 | 15-20%                  |                 2 |              0.10615 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2203 | 5-10%                   |                 2 |              0.11015 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 5-10%                   |                 2 |              0.1121  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2429 | 5-10%                   |                 2 |              0.12145 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2473 | <5%                     |                 2 |              0.12365 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.2533 | >20%                    |                 5 |              0.05066 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2617 | 5-10%                   |                 2 |              0.13085 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2662 | 5-10%                   |                 2 |              0.1331  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2736 | 5-10%                   |                 2 |              0.1368  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.2775 | 5-10%                   |                 2 |              0.13875 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2787 | <5%                     |                 2 |              0.13935 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.279  | <5%                     |                 2 |              0.1395  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | <5%                     |                 5 |              0.06008 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | <5%                     |                10 |              0.0301  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3145 | <5%                     |                 2 |              0.15725 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.321  | <5%                     |                 5 |              0.0642  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3268 | >20%                    |                 2 |              0.1634  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3276 | 15-20%                  |                 2 |              0.1638  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.343  | 5-10%                   |                 2 |              0.1715  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3495 | <5%                     |                 2 |              0.17475 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3549 | 15-20%                  |                 2 |              0.17745 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3591 | <5%                     |                 2 |              0.17955 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3685 | >20%                    |                 2 |              0.18425 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3745 | <5%                     |                 5 |              0.0749  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.3769 | 5-10%                   |                 5 |              0.07538 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3821 | >20%                    |                 5 |              0.07642 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3848 | 15-20%                  |                 5 |              0.07696 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3867 | 5-10%                   |                 2 |              0.19335 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3907 | >20%                    |                 2 |              0.19535 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4048 | >20%                    |                 2 |              0.2024  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4116 | >20%                    |                 2 |              0.2058  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4198 | 5-10%                   |                 2 |              0.2099  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4206 | <5%                     |                 2 |              0.2103  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4206 | 10-15%                  |                 5 |              0.08412 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4236 | 5-10%                   |                 2 |              0.2118  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4247 | 5-10%                   |                 2 |              0.21235 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4296 | <5%                     |                 5 |              0.08592 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4333 | 10-15%                  |                 2 |              0.21665 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4415 | <5%                     |                 5 |              0.0883  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4492 | 10-15%                  |                 5 |              0.08984 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4508 | 10-15%                  |                 5 |              0.09016 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | 5-10%                   |                10 |              0.04529 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4533 | 5-10%                   |                 5 |              0.09066 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4545 | <5%                     |                 2 |              0.22725 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4637 | >20%                    |                 2 |              0.23185 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.466  | >20%                    |                 2 |              0.233   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4685 | 15-20%                  |                 5 |              0.0937  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4689 | 10-15%                  |                 5 |              0.09378 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4705 | >20%                    |                 5 |              0.0941  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.472  | 15-20%                  |                 5 |              0.0944  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4721 | 15-20%                  |                 5 |              0.09442 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.477  | 15-20%                  |                 5 |              0.0954  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4846 | <5%                     |                 2 |              0.2423  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4945 | <5%                     |                 2 |              0.24725 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5003 | 5-10%                   |                 5 |              0.10006 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5132 | 5-10%                   |                 2 |              0.2566  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5198 | <5%                     |                 5 |              0.10396 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5236 | >20%                    |                10 |              0.05236 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5238 | 10-15%                  |                 2 |              0.2619  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5275 | <5%                     |                 5 |              0.1055  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5395 | <5%                     |                 2 |              0.26975 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.549  | 15-20%                  |                 5 |              0.1098  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5505 | 5-10%                   |                 5 |              0.1101  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5519 | 10-15%                  |                 5 |              0.11038 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5545 | >20%                    |                 2 |              0.27725 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5546 | >20%                    |                 5 |              0.11092 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5663 | 10-15%                  |                 5 |              0.11326 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5698 | >20%                    |                 5 |              0.11396 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5708 | 15-20%                  |                 2 |              0.2854  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5719 | 10-15%                  |                10 |              0.05719 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5738 | 15-20%                  |                10 |              0.05738 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5758 | <5%                     |                 5 |              0.11516 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5783 | >20%                    |                 5 |              0.11566 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5802 | >20%                    |                 5 |              0.11604 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.584  | >20%                    |                10 |              0.0584  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5843 | >20%                    |                10 |              0.05843 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5914 | <5%                     |                10 |              0.05914 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5933 | 5-10%                   |                10 |              0.05933 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6018 | 5-10%                   |                 5 |              0.12036 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6226 | <5%                     |                 5 |              0.12452 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6458 | 5-10%                   |                10 |              0.06458 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6763 | >20%                    |                 2 |              0.33815 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.677  | 15-20%                  |                 5 |              0.1354  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6861 | >20%                    |                 5 |              0.13722 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6903 | >20%                    |                10 |              0.06903 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6954 | <5%                     |                 5 |              0.13908 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7036 | 5-10%                   |                 5 |              0.14072 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7106 | >20%                    |                10 |              0.07106 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7195 | >20%                    |                10 |              0.07195 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7408 | 10-15%                  |                10 |              0.07408 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.742  | 15-20%                  |                 5 |              0.1484  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7466 | 5-10%                   |                10 |              0.07466 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.747  | <5%                     |                10 |              0.0747  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7763 | 15-20%                  |                10 |              0.07763 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7951 | 10-15%                  |                10 |              0.07951 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7989 | <5%                     |                10 |              0.07989 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7999 | 5-10%                   |                 5 |              0.15998 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8094 | >20%                    |                10 |              0.08094 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8254 | <5%                     |                 2 |              0.4127  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8268 | <5%                     |                 5 |              0.16536 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8326 | 15-20%                  |                10 |              0.08326 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8329 | >20%                    |                10 |              0.08329 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8378 | 10-15%                  |                10 |              0.08378 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8462 | 10-15%                  |                10 |              0.08462 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8485 | 5-10%                   |                10 |              0.08485 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8564 | 10-15%                  |                10 |              0.08564 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8635 | >20%                    |                 5 |              0.1727  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8822 | <5%                     |                10 |              0.08822 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8837 | 5-10%                   |                10 |              0.08837 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9064 | 10-15%                  |                10 |              0.09064 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9674 | <5%                     |                10 |              0.09674 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9704 | <5%                     |                10 |              0.09704 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0014 | <5%                     |                10 |              0.10014 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0035 | 5-10%                   |                10 |              0.10035 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0225 | 15-20%                  |                10 |              0.10225 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0433 | >20%                    |                10 |              0.10433 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0454 | <5%                     |                10 |              0.10454 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0546 | >20%                    |                10 |              0.10546 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0785 | <5%                     |                10 |              0.10785 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1288 | 10-15%                  |                10 |              0.11288 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.139  | 15-20%                  |                10 |              0.1139  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3755 | >20%                    |                10 |              0.13755 |