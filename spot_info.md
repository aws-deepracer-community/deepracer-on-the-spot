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

Data correct as of 2025-11-22 01:47:50.093226, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1109 | >20%                    |                 2 |              0.05545 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.153  | >20%                    |                 2 |              0.0765  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1815 | <5%                     |                 2 |              0.09075 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1826 | 15-20%                  |                 2 |              0.0913  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.1886 | 15-20%                  |                 2 |              0.0943  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2056 | 10-15%                  |                 2 |              0.1028  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2069 | <5%                     |                 2 |              0.10345 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2249 | >20%                    |                 2 |              0.11245 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2287 | 5-10%                   |                 5 |              0.04574 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2326 | >20%                    |                 2 |              0.1163  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.238  | >20%                    |                 2 |              0.119   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2427 | >20%                    |                 2 |              0.12135 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2485 | >20%                    |                 2 |              0.12425 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2534 | 10-15%                  |                 5 |              0.05068 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2671 | >20%                    |                 5 |              0.05342 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2678 | >20%                    |                 2 |              0.1339  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.268  | >20%                    |                 5 |              0.0536  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2685 | <5%                     |                 2 |              0.13425 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2694 | >20%                    |                 2 |              0.1347  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2819 | 10-15%                  |                 2 |              0.14095 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2837 | >20%                    |                 2 |              0.14185 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2863 | >20%                    |                 5 |              0.05726 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2904 | 5-10%                   |                 2 |              0.1452  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3007 | <5%                     |                 2 |              0.15035 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3047 | <5%                     |                 5 |              0.06094 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3147 | >20%                    |                 5 |              0.06294 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3159 | >20%                    |                10 |              0.03159 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3389 | <5%                     |                10 |              0.03389 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3406 | 10-15%                  |                10 |              0.03406 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3433 | >20%                    |                 5 |              0.06866 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3451 | 5-10%                   |                 2 |              0.17255 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3481 | >20%                    |                 2 |              0.17405 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.353  | 10-15%                  |                 2 |              0.1765  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3553 | >20%                    |                10 |              0.03553 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3584 | 10-15%                  |                 2 |              0.1792  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3593 | >20%                    |                 2 |              0.17965 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.361  | >20%                    |                10 |              0.0361  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3621 | >20%                    |                 2 |              0.18105 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3624 | >20%                    |                 2 |              0.1812  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3637 | >20%                    |                 5 |              0.07274 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3659 | 5-10%                   |                10 |              0.03659 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.368  | <5%                     |                 2 |              0.184   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3705 | 15-20%                  |                 5 |              0.0741  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3719 | 15-20%                  |                 2 |              0.18595 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3851 | 15-20%                  |                 2 |              0.19255 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.3859 | >20%                    |                 2 |              0.19295 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3896 | >20%                    |                 2 |              0.1948  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3896 | >20%                    |                 2 |              0.1948  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3933 | 10-15%                  |                10 |              0.03933 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3966 | >20%                    |                 5 |              0.07932 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4004 | >20%                    |                 2 |              0.2002  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4007 | 10-15%                  |                 5 |              0.08014 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4035 | 10-15%                  |                10 |              0.04035 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4073 | >20%                    |                 2 |              0.20365 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4078 | >20%                    |                 5 |              0.08156 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4119 | 15-20%                  |                 2 |              0.20595 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4156 | >20%                    |                 5 |              0.08312 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4165 | 15-20%                  |                 5 |              0.0833  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4289 | >20%                    |                 5 |              0.08578 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4293 | 5-10%                   |                 2 |              0.21465 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4317 | >20%                    |                 2 |              0.21585 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4318 | >20%                    |                 2 |              0.2159  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4333 | 15-20%                  |                 5 |              0.08666 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.436  | >20%                    |                 2 |              0.218   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4367 | 15-20%                  |                 5 |              0.08734 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4473 | 10-15%                  |                 5 |              0.08946 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4514 | >20%                    |                 2 |              0.2257  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4599 | <5%                     |                 2 |              0.22995 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4616 | >20%                    |                 5 |              0.09232 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4645 | 15-20%                  |                 5 |              0.0929  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4673 | >20%                    |                 2 |              0.23365 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4754 | >20%                    |                 2 |              0.2377  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.478  | 10-15%                  |                 2 |              0.239   |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4793 | 10-15%                  |                 2 |              0.23965 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4814 | >20%                    |                 2 |              0.2407  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4861 | >20%                    |                 5 |              0.09722 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4894 | >20%                    |                 2 |              0.2447  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4896 | >20%                    |                 5 |              0.09792 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4901 | 15-20%                  |                10 |              0.04901 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4907 | >20%                    |                 5 |              0.09814 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4934 | >20%                    |                 5 |              0.09868 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4944 | >20%                    |                 5 |              0.09888 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4944 | >20%                    |                10 |              0.04944 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4949 | >20%                    |                10 |              0.04949 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4961 | >20%                    |                10 |              0.04961 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5113 | >20%                    |                 5 |              0.10226 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5114 | 10-15%                  |                 5 |              0.10228 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5128 | 10-15%                  |                 2 |              0.2564  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5139 | >20%                    |                 5 |              0.10278 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.514  | 10-15%                  |                 5 |              0.1028  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5431 | 15-20%                  |                 5 |              0.10862 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5573 | 15-20%                  |                 5 |              0.11146 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.558  | >20%                    |                 5 |              0.1116  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5594 | >20%                    |                 5 |              0.11188 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5664 | >20%                    |                 5 |              0.11328 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.577  | >20%                    |                 5 |              0.1154  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5775 | 15-20%                  |                 5 |              0.1155  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5786 | >20%                    |                 2 |              0.2893  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5873 | 5-10%                   |                10 |              0.05873 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5881 | 10-15%                  |                 5 |              0.11762 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5881 | 10-15%                  |                 5 |              0.11762 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5927 | >20%                    |                 5 |              0.11854 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5975 | 5-10%                   |                 5 |              0.1195  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6014 | >20%                    |                 2 |              0.3007  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6081 | >20%                    |                 2 |              0.30405 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.609  | >20%                    |                 2 |              0.3045  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6094 | 10-15%                  |                 5 |              0.12188 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6242 | >20%                    |                 2 |              0.3121  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6242 | >20%                    |                 2 |              0.3121  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6273 | 10-15%                  |                 5 |              0.12546 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6288 | >20%                    |                 5 |              0.12576 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6319 | 15-20%                  |                10 |              0.06319 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6395 | 15-20%                  |                 5 |              0.1279  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6454 | >20%                    |                 5 |              0.12908 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.651  | >20%                    |                 5 |              0.1302  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6522 | <5%                     |                10 |              0.06522 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6582 | <5%                     |                10 |              0.06582 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6659 | 15-20%                  |                10 |              0.06659 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6751 | >20%                    |                 5 |              0.13502 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6766 | 5-10%                   |                 2 |              0.3383  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6807 | >20%                    |                10 |              0.06807 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.681  | 10-15%                  |                 2 |              0.3405  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6906 | 5-10%                   |                10 |              0.06906 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.702  | 10-15%                  |                10 |              0.0702  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7051 | >20%                    |                10 |              0.07051 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7072 | >20%                    |                10 |              0.07072 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7178 | >20%                    |                10 |              0.07178 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7401 | >20%                    |                10 |              0.07401 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7418 | 5-10%                   |                10 |              0.07418 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7427 | >20%                    |                 5 |              0.14854 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7651 | 15-20%                  |                10 |              0.07651 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7665 | >20%                    |                10 |              0.07665 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7672 | >20%                    |                 5 |              0.15344 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7736 | >20%                    |                10 |              0.07736 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7742 | <5%                     |                10 |              0.07742 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7759 | >20%                    |                10 |              0.07759 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7786 | >20%                    |                 5 |              0.15572 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7865 | >20%                    |                10 |              0.07865 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7903 | 10-15%                  |                10 |              0.07903 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8025 | >20%                    |                 5 |              0.1605  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.812  | >20%                    |                10 |              0.0812  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8167 | >20%                    |                 2 |              0.40835 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8262 | >20%                    |                10 |              0.08262 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8312 | >20%                    |                10 |              0.08312 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8329 | >20%                    |                10 |              0.08329 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8355 | >20%                    |                10 |              0.08355 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8438 | 15-20%                  |                 5 |              0.16876 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.8794 | 15-20%                  |                10 |              0.08794 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8803 | 10-15%                  |                10 |              0.08803 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8835 | >20%                    |                10 |              0.08835 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8869 | >20%                    |                 5 |              0.17738 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.89   | >20%                    |                 5 |              0.178   |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8929 | 10-15%                  |                10 |              0.08929 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9112 | 15-20%                  |                10 |              0.09112 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9256 | >20%                    |                 2 |              0.4628  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.962  | >20%                    |                 2 |              0.481   |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9625 | >20%                    |                10 |              0.09625 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9734 | >20%                    |                10 |              0.09734 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9752 | >20%                    |                10 |              0.09752 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9821 | <5%                     |                10 |              0.09821 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9869 | 10-15%                  |                10 |              0.09869 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0257 | >20%                    |                10 |              0.10257 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0332 | <5%                     |                 5 |              0.20664 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0383 | >20%                    |                 5 |              0.20766 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0521 | >20%                    |                10 |              0.10521 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1091 | >20%                    |                 5 |              0.22182 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.111  | <5%                     |                 5 |              0.2222  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1147 | >20%                    |                10 |              0.11147 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1708 | 15-20%                  |                10 |              0.11708 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1738 | >20%                    |                10 |              0.11738 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.2127 | <5%                     |                 2 |              0.60635 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.273  | >20%                    |                10 |              0.1273  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3037 | >20%                    |                 2 |              0.65185 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.326  | 15-20%                  |                10 |              0.1326  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3607 | >20%                    |                 5 |              0.27214 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3699 | 10-15%                  |                10 |              0.13699 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3813 | >20%                    |                10 |              0.13813 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3964 | 5-10%                   |                 5 |              0.27928 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4275 | >20%                    |                 2 |              0.71375 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.5459 | >20%                    |                10 |              0.15459 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0341 | 15-20%                  |                10 |              0.20341 |