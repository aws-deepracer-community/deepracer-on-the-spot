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

Data correct as of 2025-12-20 01:53:05.966820, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1077 | >20%                    |                 2 |              0.05385 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1387 | >20%                    |                 2 |              0.06935 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1647 | 15-20%                  |                 2 |              0.08235 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1723 | >20%                    |                 2 |              0.08615 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1742 | <5%                     |                 2 |              0.0871  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2034 | >20%                    |                 5 |              0.04068 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2046 | >20%                    |                 2 |              0.1023  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2085 | 10-15%                  |                 2 |              0.10425 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2318 | >20%                    |                 2 |              0.1159  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2415 | 5-10%                   |                10 |              0.02415 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2433 | >20%                    |                 2 |              0.12165 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2441 | >20%                    |                 2 |              0.12205 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2509 | <5%                     |                 5 |              0.05018 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2532 | >20%                    |                 2 |              0.1266  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2598 | 5-10%                   |                 5 |              0.05196 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2786 | >20%                    |                 2 |              0.1393  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2787 | 5-10%                   |                 2 |              0.13935 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.282  | 15-20%                  |                 2 |              0.141   |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2822 | 10-15%                  |                 2 |              0.1411  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2823 | >20%                    |                 2 |              0.14115 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2932 | >20%                    |                 2 |              0.1466  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3033 | 10-15%                  |                 5 |              0.06066 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3054 | >20%                    |                 2 |              0.1527  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3061 | >20%                    |                 2 |              0.15305 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3178 | 10-15%                  |                 2 |              0.1589  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3205 | >20%                    |                10 |              0.03205 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3218 | >20%                    |                 5 |              0.06436 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3283 | >20%                    |                10 |              0.03283 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3304 | 10-15%                  |                10 |              0.03304 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3395 | >20%                    |                 5 |              0.0679  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3436 | >20%                    |                 5 |              0.06872 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3533 | >20%                    |                 2 |              0.17665 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3537 | >20%                    |                10 |              0.03537 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3558 | >20%                    |                 2 |              0.1779  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3594 | >20%                    |                 2 |              0.1797  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3605 | 5-10%                   |                10 |              0.03605 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3636 | 15-20%                  |                 2 |              0.1818  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3696 | >20%                    |                 5 |              0.07392 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3704 | <5%                     |                 5 |              0.07408 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.376  | <5%                     |                 2 |              0.188   |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3807 | >20%                    |                10 |              0.03807 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3833 | 5-10%                   |                 2 |              0.19165 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3858 | 15-20%                  |                 5 |              0.07716 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3861 | >20%                    |                 5 |              0.07722 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3874 | <5%                     |                10 |              0.03874 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3915 | >20%                    |                 2 |              0.19575 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3922 | >20%                    |                 5 |              0.07844 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3954 | >20%                    |                 5 |              0.07908 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3958 | 10-15%                  |                 2 |              0.1979  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3971 | >20%                    |                 2 |              0.19855 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3983 | >20%                    |                 2 |              0.19915 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4001 | >20%                    |                 5 |              0.08002 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4017 | 15-20%                  |                 5 |              0.08034 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4038 | >20%                    |                 5 |              0.08076 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4094 | <5%                     |                 5 |              0.08188 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4185 | 10-15%                  |                 2 |              0.20925 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4198 | >20%                    |                 2 |              0.2099  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4218 | 10-15%                  |                10 |              0.04218 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4242 | >20%                    |                 5 |              0.08484 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4258 | <5%                     |                 2 |              0.2129  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4321 | >20%                    |                 2 |              0.21605 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4371 | <5%                     |                 2 |              0.21855 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4402 | >20%                    |                 5 |              0.08804 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4476 | >20%                    |                 5 |              0.08952 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4529 | 15-20%                  |                 2 |              0.22645 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4549 | >20%                    |                10 |              0.04549 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4584 | >20%                    |                 2 |              0.2292  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.465  | <5%                     |                10 |              0.0465  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.471  | 15-20%                  |                 5 |              0.0942  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.472  | 15-20%                  |                 5 |              0.0944  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4728 | >20%                    |                 2 |              0.2364  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4758 | >20%                    |                 2 |              0.2379  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.478  | 15-20%                  |                 2 |              0.239   |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4804 | 15-20%                  |                 5 |              0.09608 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4953 | 5-10%                   |                 5 |              0.09906 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4964 | >20%                    |                 5 |              0.09928 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4972 | >20%                    |                 2 |              0.2486  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5029 | >20%                    |                 2 |              0.25145 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5031 | >20%                    |                 5 |              0.10062 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5121 | 15-20%                  |                 5 |              0.10242 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5125 | >20%                    |                 5 |              0.1025  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5133 | >20%                    |                 2 |              0.25665 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5197 | 15-20%                  |                 2 |              0.25985 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5205 | 15-20%                  |                10 |              0.05205 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.524  | <5%                     |                 5 |              0.1048  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5273 | >20%                    |                10 |              0.05273 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5296 | >20%                    |                 5 |              0.10592 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5427 | >20%                    |                 5 |              0.10854 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5436 | >20%                    |                 2 |              0.2718  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5468 | >20%                    |                 5 |              0.10936 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5529 | >20%                    |                 5 |              0.11058 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5592 | >20%                    |                 5 |              0.11184 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5655 | >20%                    |                 2 |              0.28275 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.566  | >20%                    |                 5 |              0.1132  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5747 | 10-15%                  |                 5 |              0.11494 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5833 | >20%                    |                 2 |              0.29165 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5904 | >20%                    |                 5 |              0.11808 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6041 | 5-10%                   |                 5 |              0.12082 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6067 | >20%                    |                10 |              0.06067 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6135 | 5-10%                   |                 5 |              0.1227  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6138 | >20%                    |                 5 |              0.12276 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6157 | >20%                    |                 2 |              0.30785 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6291 | 5-10%                   |                 5 |              0.12582 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6312 | >20%                    |                 2 |              0.3156  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6348 | 15-20%                  |                 5 |              0.12696 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6382 | <5%                     |                10 |              0.06382 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6384 | >20%                    |                 2 |              0.3192  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6531 | >20%                    |                 5 |              0.13062 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6572 | 10-15%                  |                 5 |              0.13144 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6622 | >20%                    |                 2 |              0.3311  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6655 | >20%                    |                 5 |              0.1331  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6735 | >20%                    |                 5 |              0.1347  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.682  | >20%                    |                10 |              0.0682  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6954 | >20%                    |                10 |              0.06954 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6989 | >20%                    |                10 |              0.06989 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.7048 | 10-15%                  |                 5 |              0.14096 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7155 | >20%                    |                10 |              0.07155 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.722  | >20%                    |                10 |              0.0722  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7238 | >20%                    |                10 |              0.07238 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7263 | 5-10%                   |                10 |              0.07263 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7307 | >20%                    |                10 |              0.07307 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.731  | >20%                    |                10 |              0.0731  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7379 | <5%                     |                 5 |              0.14758 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7497 | 10-15%                  |                10 |              0.07497 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7543 | >20%                    |                 2 |              0.37715 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7555 | >20%                    |                10 |              0.07555 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7597 | >20%                    |                 2 |              0.37985 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7818 | >20%                    |                 2 |              0.3909  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7826 | 10-15%                  |                10 |              0.07826 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7834 | 15-20%                  |                10 |              0.07834 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.7862 | >20%                    |                 5 |              0.15724 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7943 | 10-15%                  |                10 |              0.07943 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8018 | >20%                    |                10 |              0.08018 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8084 | >20%                    |                 5 |              0.16168 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8104 | >20%                    |                 5 |              0.16208 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8107 | 10-15%                  |                 5 |              0.16214 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8228 | <5%                     |                10 |              0.08228 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8327 | 15-20%                  |                10 |              0.08327 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8331 | >20%                    |                10 |              0.08331 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8342 | >20%                    |                10 |              0.08342 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8521 | 15-20%                  |                10 |              0.08521 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8538 | 5-10%                   |                10 |              0.08538 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8547 | >20%                    |                 2 |              0.42735 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8627 | >20%                    |                10 |              0.08627 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8661 | >20%                    |                10 |              0.08661 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8758 | >20%                    |                 2 |              0.4379  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8899 | >20%                    |                10 |              0.08899 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.892  | 15-20%                  |                 2 |              0.446   |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.903  | >20%                    |                 5 |              0.1806  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9077 | 10-15%                  |                10 |              0.09077 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.9214 | >20%                    |                 5 |              0.18428 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9257 | >20%                    |                10 |              0.09257 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9325 | >20%                    |                 5 |              0.1865  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9369 | >20%                    |                 5 |              0.18738 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9461 | >20%                    |                10 |              0.09461 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9557 | >20%                    |                 5 |              0.19114 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9873 | 15-20%                  |                10 |              0.09873 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.009  | >20%                    |                10 |              0.1009  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0132 | 5-10%                   |                 5 |              0.20264 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      1.0244 | >20%                    |                 2 |              0.5122  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0264 | 10-15%                  |                10 |              0.10264 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0484 | 10-15%                  |                10 |              0.10484 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0494 | >20%                    |                10 |              0.10494 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0654 | >20%                    |                 2 |              0.5327  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0766 | 10-15%                  |                10 |              0.10766 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1309 | >20%                    |                 2 |              0.56545 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1967 | 5-10%                   |                10 |              0.11967 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.211  | >20%                    |                10 |              0.1211  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.259  | >20%                    |                10 |              0.1259  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2761 | >20%                    |                10 |              0.12761 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2958 | >20%                    |                10 |              0.12958 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3348 | >20%                    |                 2 |              0.6674  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4094 | >20%                    |                 2 |              0.7047  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.42   | >20%                    |                10 |              0.142   |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4556 | >20%                    |                 5 |              0.29112 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4596 | 10-15%                  |                 5 |              0.29192 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.5106 | >20%                    |                 5 |              0.30212 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5778 | 15-20%                  |                10 |              0.15778 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6661 | 15-20%                  |                10 |              0.16661 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0672 | 10-15%                  |                10 |              0.20672 |