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

Data correct as of 2025-07-25 02:04:25.747634, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1536 | 5-10%                   |                 2 |              0.0768  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1599 | >20%                    |                 2 |              0.07995 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1731 | 5-10%                   |                 2 |              0.08655 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2061 | >20%                    |                 2 |              0.10305 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2144 | >20%                    |                 2 |              0.1072  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2232 | <5%                     |                 5 |              0.04464 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2246 | >20%                    |                 2 |              0.1123  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2325 | 15-20%                  |                 2 |              0.11625 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2325 | <5%                     |                 5 |              0.0465  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2435 | 5-10%                   |                 5 |              0.0487  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2479 | >20%                    |                 2 |              0.12395 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2501 | 15-20%                  |                 2 |              0.12505 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2502 | >20%                    |                 2 |              0.1251  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2578 | 5-10%                   |                 2 |              0.1289  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2646 | >20%                    |                 2 |              0.1323  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.2809 | >20%                    |                 5 |              0.05618 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2879 | >20%                    |                 2 |              0.14395 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2888 | >20%                    |                 5 |              0.05776 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2938 | >20%                    |                 5 |              0.05876 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3089 | <5%                     |                 2 |              0.15445 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3109 | >20%                    |                 5 |              0.06218 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3181 | 5-10%                   |                 2 |              0.15905 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3212 | >20%                    |                 5 |              0.06424 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3286 | 15-20%                  |                 2 |              0.1643  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3303 | 15-20%                  |                 5 |              0.06606 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3309 | >20%                    |                 2 |              0.16545 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.335  | 15-20%                  |                 2 |              0.1675  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3359 | 5-10%                   |                 2 |              0.16795 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3379 | <5%                     |                 2 |              0.16895 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.3389 | >20%                    |                10 |              0.03389 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3399 | 15-20%                  |                 2 |              0.16995 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.343  | >20%                    |                10 |              0.0343  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.355  | >20%                    |                 2 |              0.1775  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3556 | >20%                    |                 5 |              0.07112 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3643 | 15-20%                  |                10 |              0.03643 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3681 | >20%                    |                 2 |              0.18405 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.373  | >20%                    |                 5 |              0.0746  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3734 | >20%                    |                 5 |              0.07468 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3745 | <5%                     |                10 |              0.03745 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3753 | >20%                    |                 2 |              0.18765 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3782 | >20%                    |                 2 |              0.1891  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3958 | <5%                     |                10 |              0.03958 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4032 | >20%                    |                 5 |              0.08064 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4148 | 10-15%                  |                 2 |              0.2074  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4166 | <5%                     |                 2 |              0.2083  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4257 | >20%                    |                 2 |              0.21285 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4267 | 15-20%                  |                10 |              0.04267 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4356 | >20%                    |                 2 |              0.2178  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4443 | >20%                    |                 2 |              0.22215 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4492 | >20%                    |                 2 |              0.2246  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4502 | <5%                     |                 2 |              0.2251  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4528 | 5-10%                   |                 2 |              0.2264  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4537 | >20%                    |                10 |              0.04537 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4552 | 15-20%                  |                 5 |              0.09104 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4569 | >20%                    |                 5 |              0.09138 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4578 | >20%                    |                 2 |              0.2289  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.4595 | 15-20%                  |                10 |              0.04595 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4645 | >20%                    |                 5 |              0.0929  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4648 | >20%                    |                 5 |              0.09296 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4729 | >20%                    |                 2 |              0.23645 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4747 | 10-15%                  |                 2 |              0.23735 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4791 | 5-10%                   |                 2 |              0.23955 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4836 | >20%                    |                 5 |              0.09672 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4861 | >20%                    |                 2 |              0.24305 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4918 | 15-20%                  |                10 |              0.04918 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4976 | 5-10%                   |                 5 |              0.09952 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4985 | >20%                    |                 2 |              0.24925 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5013 | >20%                    |                 2 |              0.25065 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5054 | 10-15%                  |                 5 |              0.10108 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5057 | >20%                    |                 2 |              0.25285 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5124 | <5%                     |                 2 |              0.2562  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.513  | >20%                    |                 5 |              0.1026  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.523  | 10-15%                  |                 2 |              0.2615  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5354 | 15-20%                  |                 2 |              0.2677  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5403 | >20%                    |                 5 |              0.10806 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5412 | 10-15%                  |                 5 |              0.10824 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5455 | >20%                    |                 5 |              0.1091  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.554  | >20%                    |                 5 |              0.1108  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.557  | 10-15%                  |                 5 |              0.1114  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5708 | >20%                    |                 5 |              0.11416 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5721 | >20%                    |                 2 |              0.28605 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5782 | >20%                    |                 2 |              0.2891  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5794 | 5-10%                   |                 5 |              0.11588 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5841 | >20%                    |                 2 |              0.29205 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5885 | >20%                    |                 5 |              0.1177  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5893 | >20%                    |                 5 |              0.11786 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5911 | >20%                    |                 5 |              0.11822 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5924 | 5-10%                   |                 2 |              0.2962  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6004 | <5%                     |                 5 |              0.12008 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6055 | >20%                    |                 2 |              0.30275 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6093 | 5-10%                   |                 5 |              0.12186 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6148 | >20%                    |                 5 |              0.12296 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6233 | >20%                    |                 2 |              0.31165 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6234 | >20%                    |                10 |              0.06234 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6236 | >20%                    |                10 |              0.06236 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6317 | >20%                    |                 5 |              0.12634 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6333 | >20%                    |                 5 |              0.12666 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6394 | 10-15%                  |                 5 |              0.12788 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6528 | >20%                    |                 2 |              0.3264  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6589 | <5%                     |                10 |              0.06589 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6601 | >20%                    |                 5 |              0.13202 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6651 | >20%                    |                 2 |              0.33255 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6683 | >20%                    |                10 |              0.06683 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6857 | 15-20%                  |                 2 |              0.34285 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6914 | 5-10%                   |                 5 |              0.13828 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6934 | <5%                     |                 5 |              0.13868 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6942 | 15-20%                  |                 2 |              0.3471  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.7057 | >20%                    |                10 |              0.07057 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7096 | >20%                    |                 5 |              0.14192 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7123 | >20%                    |                 5 |              0.14246 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7206 | <5%                     |                 5 |              0.14412 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7255 | >20%                    |                10 |              0.07255 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7409 | >20%                    |                 5 |              0.14818 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7427 | 15-20%                  |                 5 |              0.14854 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7469 | 15-20%                  |                10 |              0.07469 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7527 | 15-20%                  |                10 |              0.07527 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7569 | >20%                    |                 5 |              0.15138 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7811 | <5%                     |                10 |              0.07811 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7835 | <5%                     |                10 |              0.07835 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7983 | >20%                    |                 5 |              0.15966 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8066 | >20%                    |                 5 |              0.16132 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8187 | 5-10%                   |                10 |              0.08187 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8283 | >20%                    |                 2 |              0.41415 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8345 | >20%                    |                10 |              0.08345 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8431 | >20%                    |                 5 |              0.16862 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8433 | >20%                    |                10 |              0.08433 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8615 | >20%                    |                10 |              0.08615 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8666 | 5-10%                   |                10 |              0.08666 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8694 | 15-20%                  |                10 |              0.08694 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8801 | 5-10%                   |                 5 |              0.17602 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8847 | 5-10%                   |                10 |              0.08847 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8913 | <5%                     |                10 |              0.08913 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8979 | >20%                    |                 5 |              0.17958 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9198 | >20%                    |                10 |              0.09198 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9205 | 5-10%                   |                10 |              0.09205 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9292 | >20%                    |                10 |              0.09292 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9313 | 5-10%                   |                10 |              0.09313 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9484 | 15-20%                  |                10 |              0.09484 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9487 | 15-20%                  |                 5 |              0.18974 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9614 | 15-20%                  |                10 |              0.09614 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9636 | 15-20%                  |                10 |              0.09636 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9673 | >20%                    |                10 |              0.09673 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9685 | 5-10%                   |                10 |              0.09685 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9987 | 15-20%                  |                10 |              0.09987 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0007 | 15-20%                  |                10 |              0.10007 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0054 | <5%                     |                10 |              0.10054 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0089 | 5-10%                   |                10 |              0.10089 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0242 | <5%                     |                10 |              0.10242 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0271 | >20%                    |                 2 |              0.51355 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0608 | 5-10%                   |                10 |              0.10608 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0817 | >20%                    |                10 |              0.10817 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.094  | >20%                    |                10 |              0.1094  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0952 | >20%                    |                10 |              0.10952 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1034 | >20%                    |                10 |              0.11034 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.1114 | >20%                    |                 5 |              0.22228 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1165 | 15-20%                  |                10 |              0.11165 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1209 | >20%                    |                 5 |              0.22418 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1262 | >20%                    |                10 |              0.11262 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1502 | >20%                    |                10 |              0.11502 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1876 | >20%                    |                10 |              0.11876 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1991 | >20%                    |                 5 |              0.23982 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2047 | <5%                     |                 2 |              0.60235 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2072 | >20%                    |                 2 |              0.6036  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2813 | >20%                    |                10 |              0.12813 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2925 | <5%                     |                10 |              0.12925 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3237 | >20%                    |                 5 |              0.26474 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3389 | 15-20%                  |                 5 |              0.26778 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3726 | >20%                    |                10 |              0.13726 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.4342 | >20%                    |                 2 |              0.7171  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4411 | 5-10%                   |                10 |              0.14411 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.5117 | >20%                    |                 5 |              0.30234 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5557 | <5%                     |                 5 |              0.31114 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6647 | >20%                    |                10 |              0.16647 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.6791 | 5-10%                   |                 2 |              0.83955 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9178 | 10-15%                  |                10 |              0.19178 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9502 | 5-10%                   |                10 |              0.19502 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0582 | <5%                     |                10 |              0.20582 |