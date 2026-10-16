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

Data correct as of 2026-10-16 03:52:43.980653, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0955 | >20%                    |                 2 |              0.04775 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1461 | >20%                    |                 2 |              0.07305 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1565 | 15-20%                  |                 2 |              0.07825 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1686 | 15-20%                  |                 5 |              0.03372 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2038 | >20%                    |                 5 |              0.04076 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2107 | >20%                    |                 2 |              0.10535 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2203 | 10-15%                  |                 2 |              0.11015 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2518 | >20%                    |                 2 |              0.1259  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2653 | >20%                    |                 2 |              0.13265 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2659 | 5-10%                   |                10 |              0.02659 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2768 | >20%                    |                 2 |              0.1384  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2829 | >20%                    |                 2 |              0.14145 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2978 | >20%                    |                 5 |              0.05956 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3002 | >20%                    |                 2 |              0.1501  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3051 | >20%                    |                 2 |              0.15255 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3119 | >20%                    |                 2 |              0.15595 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3126 | 15-20%                  |                 2 |              0.1563  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3399 | >20%                    |                 5 |              0.06798 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3566 | >20%                    |                 2 |              0.1783  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.363  | 10-15%                  |                 2 |              0.1815  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3713 | >20%                    |                 2 |              0.18565 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3736 | >20%                    |                10 |              0.03736 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3754 | >20%                    |                 5 |              0.07508 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3755 | 15-20%                  |                 2 |              0.18775 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3762 | 15-20%                  |                 2 |              0.1881  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3839 | >20%                    |                10 |              0.03839 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3849 | >20%                    |                10 |              0.03849 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3919 | <5%                     |                 2 |              0.19595 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3969 | >20%                    |                 5 |              0.07938 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.398  | >20%                    |                 5 |              0.0796  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.409  | >20%                    |                 5 |              0.0818  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4091 | >20%                    |                 5 |              0.08182 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4094 | <5%                     |                10 |              0.04094 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4127 | >20%                    |                 5 |              0.08254 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4278 | 5-10%                   |                10 |              0.04278 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4291 | >20%                    |                 2 |              0.21455 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4378 | >20%                    |                 2 |              0.2189  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4509 | >20%                    |                 2 |              0.22545 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4684 | >20%                    |                 5 |              0.09368 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4715 | >20%                    |                 2 |              0.23575 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4735 | 10-15%                  |                 2 |              0.23675 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4743 | >20%                    |                 5 |              0.09486 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4747 | >20%                    |                 5 |              0.09494 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4872 |                         |                 2 |              0.2436  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4902 | >20%                    |                 2 |              0.2451  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4957 | >20%                    |                 2 |              0.24785 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4973 | >20%                    |                 5 |              0.09946 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.499  | >20%                    |                 5 |              0.0998  |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.5093 |                         |                10 |              0.05093 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.513  | 5-10%                   |                10 |              0.0513  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5156 | >20%                    |                 2 |              0.2578  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5235 | >20%                    |                 2 |              0.26175 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5312 | >20%                    |                 5 |              0.10624 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5481 | >20%                    |                 2 |              0.27405 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5519 | 15-20%                  |                 2 |              0.27595 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5801 | 10-15%                  |                 5 |              0.11602 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5817 | >20%                    |                 5 |              0.11634 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5849 | <5%                     |                 2 |              0.29245 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5888 | >20%                    |                 5 |              0.11776 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5898 | >20%                    |                 2 |              0.2949  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6218 | >20%                    |                 5 |              0.12436 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6249 | 10-15%                  |                 2 |              0.31245 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6338 | >20%                    |                 2 |              0.3169  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6515 | >20%                    |                 5 |              0.1303  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6555 | >20%                    |                 5 |              0.1311  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6598 | >20%                    |                10 |              0.06598 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6613 | >20%                    |                 5 |              0.13226 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6651 | >20%                    |                10 |              0.06651 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6678 | 5-10%                   |                 2 |              0.3339  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6695 | >20%                    |                 2 |              0.33475 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6767 | >20%                    |                 5 |              0.13534 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6802 | >20%                    |                 5 |              0.13604 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6809 | >20%                    |                10 |              0.06809 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6821 | <5%                     |                 2 |              0.34105 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6829 | >20%                    |                 5 |              0.13658 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6923 | >20%                    |                 5 |              0.13846 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6999 | >20%                    |                 5 |              0.13998 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7094 | >20%                    |                 5 |              0.14188 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7346 | >20%                    |                 5 |              0.14692 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7349 | 15-20%                  |                 5 |              0.14698 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7459 | 15-20%                  |                10 |              0.07459 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7463 | >20%                    |                 5 |              0.14926 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7488 | 15-20%                  |                 2 |              0.3744  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7599 | >20%                    |                 5 |              0.15198 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7661 | >20%                    |                10 |              0.07661 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7894 | >20%                    |                 5 |              0.15788 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7945 | >20%                    |                10 |              0.07945 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7954 | 15-20%                  |                10 |              0.07954 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.809  | 15-20%                  |                10 |              0.0809  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.8248 | 5-10%                   |                 5 |              0.16496 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8316 | >20%                    |                10 |              0.08316 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8382 | >20%                    |                10 |              0.08382 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8408 | 5-10%                   |                10 |              0.08408 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8445 | >20%                    |                 2 |              0.42225 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8471 | 15-20%                  |                 5 |              0.16942 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8523 | 10-15%                  |                10 |              0.08523 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.8553 |                         |                 5 |              0.17106 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8617 | 10-15%                  |                 2 |              0.43085 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8709 | >20%                    |                10 |              0.08709 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8808 | >20%                    |                10 |              0.08808 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8834 | 10-15%                  |                 2 |              0.4417  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8964 | >20%                    |                 2 |              0.4482  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8972 | >20%                    |                10 |              0.08972 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9068 | >20%                    |                 5 |              0.18136 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9092 | <5%                     |                 5 |              0.18184 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9178 | >20%                    |                 5 |              0.18356 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9191 | 15-20%                  |                10 |              0.09191 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9207 | >20%                    |                10 |              0.09207 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9258 | >20%                    |                10 |              0.09258 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9276 | >20%                    |                 5 |              0.18552 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9501 | >20%                    |                10 |              0.09501 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9794 | >20%                    |                10 |              0.09794 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.983  | 15-20%                  |                10 |              0.0983  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9868 | >20%                    |                10 |              0.09868 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9981 | >20%                    |                 5 |              0.19962 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0146 | >20%                    |                10 |              0.10146 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0186 | 15-20%                  |                10 |              0.10186 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0314 | >20%                    |                10 |              0.10314 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0709 | >20%                    |                10 |              0.10709 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.118  | 5-10%                   |                10 |              0.1118  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1205 | >20%                    |                 5 |              0.2241  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1882 | >20%                    |                10 |              0.11882 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.206  | >20%                    |                10 |              0.1206  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2136 | 10-15%                  |                 2 |              0.6068  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      1.2443 | >20%                    |                 2 |              0.62215 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3246 | >20%                    |                10 |              0.13246 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3257 | 10-15%                  |                10 |              0.13257 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3457 | >20%                    |                 2 |              0.67285 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.3596 |                         |                 2 |              0.6798  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3619 | 15-20%                  |                10 |              0.13619 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3686 | >20%                    |                10 |              0.13686 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3844 | >20%                    |                 2 |              0.6922  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4331 | >20%                    |                10 |              0.14331 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.436  | >20%                    |                10 |              0.1436  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4613 | 5-10%                   |                 2 |              0.73065 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4624 | 15-20%                  |                10 |              0.14624 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5198 | 5-10%                   |                 5 |              0.30396 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.537  |                         |                 2 |              0.7685  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5428 | >20%                    |                 5 |              0.30856 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5766 | >20%                    |                 2 |              0.7883  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.5969 |                         |                 5 |              0.31938 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6088 | >20%                    |                10 |              0.16088 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6361 |                         |                10 |              0.16361 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6634 | >20%                    |                10 |              0.16634 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7457 | >20%                    |                 5 |              0.34914 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7784 | >20%                    |                10 |              0.17784 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.7785 | 5-10%                   |                 2 |              0.88925 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.932  | >20%                    |                 5 |              0.3864  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.9605 |                         |                 5 |              0.3921  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0902 | 15-20%                  |                 5 |              0.41804 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2088 | 5-10%                   |                 2 |              1.1044  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2905 | 5-10%                   |                10 |              0.22905 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.5559 |                         |                10 |              0.25559 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5827 | >20%                    |                10 |              0.25827 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0794 | >20%                    |                10 |              0.30794 |