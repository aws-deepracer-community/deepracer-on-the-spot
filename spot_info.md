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

Data correct as of 2026-05-02 03:22:49.220366, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1542 | 15-20%                  |                 2 |              0.0771  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1564 | >20%                    |                 2 |              0.0782  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1685 | >20%                    |                 2 |              0.08425 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2257 | 15-20%                  |                 5 |              0.04514 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2328 | >20%                    |                 2 |              0.1164  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2363 | >20%                    |                 2 |              0.11815 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2471 | 15-20%                  |                 2 |              0.12355 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2603 | >20%                    |                 2 |              0.13015 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2799 | 15-20%                  |                 5 |              0.05598 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2844 | 15-20%                  |                 5 |              0.05688 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.291  | >20%                    |                 2 |              0.1455  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2945 | >20%                    |                 2 |              0.14725 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2946 | >20%                    |                 2 |              0.1473  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2951 | >20%                    |                 5 |              0.05902 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2967 | 15-20%                  |                 2 |              0.14835 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3004 | >20%                    |                 5 |              0.06008 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3023 | >20%                    |                 2 |              0.15115 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3056 | 10-15%                  |                 2 |              0.1528  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3089 | 10-15%                  |                 2 |              0.15445 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3232 | >20%                    |                 5 |              0.06464 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3268 | 10-15%                  |                 2 |              0.1634  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3355 | >20%                    |                10 |              0.03355 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3383 | <5%                     |                 2 |              0.16915 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.345  | >20%                    |                 5 |              0.069   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3615 | >20%                    |                 5 |              0.0723  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3616 | 5-10%                   |                10 |              0.03616 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.365  | >20%                    |                 2 |              0.1825  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3653 | 10-15%                  |                 2 |              0.18265 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3658 | >20%                    |                 2 |              0.1829  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3663 | >20%                    |                 2 |              0.18315 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3684 | >20%                    |                 5 |              0.07368 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3744 | >20%                    |                 5 |              0.07488 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3765 | >20%                    |                 5 |              0.0753  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3773 | 5-10%                   |                10 |              0.03773 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3881 | >20%                    |                 5 |              0.07762 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3897 | >20%                    |                 2 |              0.19485 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3956 | >20%                    |                 2 |              0.1978  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3958 | >20%                    |                 5 |              0.07916 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4017 | >20%                    |                 5 |              0.08034 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4017 | >20%                    |                 5 |              0.08034 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4119 | >20%                    |                 2 |              0.20595 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4172 | >20%                    |                10 |              0.04172 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4205 | >20%                    |                 5 |              0.0841  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4266 | <5%                     |                 2 |              0.2133  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4324 | >20%                    |                 5 |              0.08648 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4355 | >20%                    |                 2 |              0.21775 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4396 | 5-10%                   |                 2 |              0.2198  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4469 | >20%                    |                 5 |              0.08938 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4521 | >20%                    |                 5 |              0.09042 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4579 | <5%                     |                 2 |              0.22895 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4587 | >20%                    |                 2 |              0.22935 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4614 | >20%                    |                 2 |              0.2307  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4623 | >20%                    |                10 |              0.04623 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4642 | 15-20%                  |                 2 |              0.2321  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4653 | >20%                    |                 5 |              0.09306 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4662 | >20%                    |                 5 |              0.09324 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4738 | >20%                    |                10 |              0.04738 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4747 | 15-20%                  |                 2 |              0.23735 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4819 | >20%                    |                 5 |              0.09638 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.484  | >20%                    |                 5 |              0.0968  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.484  | 10-15%                  |                 2 |              0.242   |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4938 | >20%                    |                 5 |              0.09876 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5049 | >20%                    |                 2 |              0.25245 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.507  | <5%                     |                 5 |              0.1014  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5309 | 5-10%                   |                 5 |              0.10618 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5325 | 15-20%                  |                 5 |              0.1065  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5341 | >20%                    |                 2 |              0.26705 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5441 | >20%                    |                10 |              0.05441 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5525 | 5-10%                   |                 5 |              0.1105  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5528 | 10-15%                  |                 5 |              0.11056 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5747 | >20%                    |                 5 |              0.11494 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5751 | >20%                    |                 2 |              0.28755 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5817 | >20%                    |                 2 |              0.29085 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5964 | >20%                    |                 2 |              0.2982  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.6045 | 15-20%                  |                 2 |              0.30225 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6198 | >20%                    |                 2 |              0.3099  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6326 | 5-10%                   |                 2 |              0.3163  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6403 | >20%                    |                10 |              0.06403 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6475 | >20%                    |                10 |              0.06475 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.6516 | >20%                    |                10 |              0.06516 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6582 | >20%                    |                10 |              0.06582 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6621 | 5-10%                   |                10 |              0.06621 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6625 | >20%                    |                 2 |              0.33125 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6652 | >20%                    |                10 |              0.06652 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6748 | 10-15%                  |                 2 |              0.3374  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6767 | >20%                    |                 5 |              0.13534 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6798 | >20%                    |                 5 |              0.13596 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6838 | >20%                    |                 5 |              0.13676 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6861 | >20%                    |                10 |              0.06861 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6892 | >20%                    |                 5 |              0.13784 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6918 | >20%                    |                 2 |              0.3459  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6929 | >20%                    |                 2 |              0.34645 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.695  | >20%                    |                 5 |              0.139   |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7004 | >20%                    |                10 |              0.07004 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.712  | >20%                    |                10 |              0.0712  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7139 | >20%                    |                 5 |              0.14278 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7199 | >20%                    |                 5 |              0.14398 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.721  | >20%                    |                 5 |              0.1442  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7319 | 15-20%                  |                10 |              0.07319 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7359 | >20%                    |                10 |              0.07359 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7399 | 15-20%                  |                10 |              0.07399 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7453 | >20%                    |                 5 |              0.14906 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7484 | 15-20%                  |                10 |              0.07484 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7663 | >20%                    |                 5 |              0.15326 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.777  | >20%                    |                 5 |              0.1554  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7844 | 5-10%                   |                10 |              0.07844 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8068 | >20%                    |                10 |              0.08068 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8165 | >20%                    |                10 |              0.08165 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8264 | >20%                    |                 5 |              0.16528 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8612 | >20%                    |                 5 |              0.17224 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8768 | 5-10%                   |                10 |              0.08768 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8792 | >20%                    |                10 |              0.08792 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8874 | >20%                    |                 5 |              0.17748 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8915 | >20%                    |                10 |              0.08915 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8915 |                         |                 2 |              0.44575 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9007 | 10-15%                  |                10 |              0.09007 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9013 | >20%                    |                 2 |              0.45065 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9039 | >20%                    |                10 |              0.09039 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9171 | >20%                    |                 5 |              0.18342 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9322 | >20%                    |                10 |              0.09322 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9328 | >20%                    |                10 |              0.09328 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9441 | 15-20%                  |                10 |              0.09441 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9669 | 15-20%                  |                10 |              0.09669 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9758 | >20%                    |                10 |              0.09758 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9858 | >20%                    |                10 |              0.09858 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0311 | 15-20%                  |                10 |              0.10311 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0657 | >20%                    |                10 |              0.10657 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1074 |                         |                 2 |              0.5537  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.147  | 10-15%                  |                10 |              0.1147  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1555 | >20%                    |                10 |              0.11555 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1595 | >20%                    |                10 |              0.11595 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1895 | >20%                    |                 2 |              0.59475 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2457 |                         |                 5 |              0.24914 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2507 | >20%                    |                10 |              0.12507 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2576 | >20%                    |                 5 |              0.25152 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2788 | 5-10%                   |                 2 |              0.6394  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2899 | >20%                    |                 5 |              0.25798 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.3216 | 5-10%                   |                 2 |              0.6608  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3311 | >20%                    |                10 |              0.13311 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3642 | 15-20%                  |                10 |              0.13642 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4253 | >20%                    |                 5 |              0.28506 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.4315 |                         |                 5 |              0.2863  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4432 | 10-15%                  |                 2 |              0.7216  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4534 | 15-20%                  |                 5 |              0.29068 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4647 | >20%                    |                10 |              0.14647 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.5069 | >20%                    |                 5 |              0.30138 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5103 | 15-20%                  |                10 |              0.15103 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5991 | >20%                    |                10 |              0.15991 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.6085 | >20%                    |                10 |              0.16085 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6733 |                         |                10 |              0.16733 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.165  |                         |                10 |              0.2165  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.241  | >20%                    |                10 |              0.2241  |