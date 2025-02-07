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

Data correct as of 2025-02-07 01:37:47.122538, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1488 | >20%                    |                 2 |              0.0744  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | >20%                    |                 5 |              0.039   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.1994 | >20%                    |                 2 |              0.0997  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 10-15%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2167 | <5%                     |                 2 |              0.10835 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2275 | 5-10%                   |                 2 |              0.11375 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2291 | <5%                     |                 5 |              0.04582 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2309 | 10-15%                  |                 2 |              0.11545 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2334 | 10-15%                  |                 2 |              0.1167  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2359 | 5-10%                   |                 2 |              0.11795 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2428 | 5-10%                   |                 2 |              0.1214  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2458 | 10-15%                  |                 2 |              0.1229  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2495 | 15-20%                  |                10 |              0.02495 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2518 | <5%                     |                 2 |              0.1259  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2654 | <5%                     |                 2 |              0.1327  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2672 | >20%                    |                 2 |              0.1336  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2878 | <5%                     |                 2 |              0.1439  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2931 | <5%                     |                 2 |              0.14655 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2978 | <5%                     |                 2 |              0.1489  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2988 | 10-15%                  |                 2 |              0.1494  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3002 | 15-20%                  |                 2 |              0.1501  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3038 | 5-10%                   |                 2 |              0.1519  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3077 | 5-10%                   |                 2 |              0.15385 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3207 | <5%                     |                 2 |              0.16035 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3289 | >20%                    |                 2 |              0.16445 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3347 | 5-10%                   |                 5 |              0.06694 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3369 | <5%                     |                 5 |              0.06738 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.338  | >20%                    |                 2 |              0.169   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3402 | >20%                    |                 2 |              0.1701  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3437 | <5%                     |                10 |              0.03437 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3537 | 10-15%                  |                 5 |              0.07074 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3582 | 5-10%                   |                 2 |              0.1791  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3606 | 5-10%                   |                 5 |              0.07212 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3609 | <5%                     |                 2 |              0.18045 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3634 | 5-10%                   |                 2 |              0.1817  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3635 | 5-10%                   |                 2 |              0.18175 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3643 | 5-10%                   |                 2 |              0.18215 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.38   | 10-15%                  |                 2 |              0.19    |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.383  | >20%                    |                 2 |              0.1915  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3847 | <5%                     |                 5 |              0.07694 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3918 | <5%                     |                 2 |              0.1959  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3939 | <5%                     |                 5 |              0.07878 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3963 | 10-15%                  |                 5 |              0.07926 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3985 | 10-15%                  |                 2 |              0.19925 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3986 | 5-10%                   |                 5 |              0.07972 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4087 | 5-10%                   |                 2 |              0.20435 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4249 | 15-20%                  |                 5 |              0.08498 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4278 | 15-20%                  |                 5 |              0.08556 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4392 | >20%                    |                10 |              0.04392 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4451 | 5-10%                   |                 2 |              0.22255 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4505 | 5-10%                   |                 5 |              0.0901  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4506 | <5%                     |                10 |              0.04506 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4515 | >20%                    |                 5 |              0.0903  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4617 | <5%                     |                 2 |              0.23085 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4648 | <5%                     |                 2 |              0.2324  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4679 | >20%                    |                 5 |              0.09358 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4729 | >20%                    |                 2 |              0.23645 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4773 | <5%                     |                 5 |              0.09546 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4786 | <5%                     |                 5 |              0.09572 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4857 | 10-15%                  |                 5 |              0.09714 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4867 | >20%                    |                 5 |              0.09734 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4872 | 15-20%                  |                 5 |              0.09744 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4882 | >20%                    |                 5 |              0.09764 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4904 | 10-15%                  |                 5 |              0.09808 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4924 | <5%                     |                 5 |              0.09848 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4937 | 10-15%                  |                 2 |              0.24685 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.499  | >20%                    |                 2 |              0.2495  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5031 | 15-20%                  |                 5 |              0.10062 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5052 | <5%                     |                 5 |              0.10104 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5068 | <5%                     |                 5 |              0.10136 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5096 | 5-10%                   |                 2 |              0.2548  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5205 | 5-10%                   |                 2 |              0.26025 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5206 | 10-15%                  |                 2 |              0.2603  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5259 | 10-15%                  |                 5 |              0.10518 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5288 | 5-10%                   |                 5 |              0.10576 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.531  | <5%                     |                 2 |              0.2655  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5316 | 5-10%                   |                 5 |              0.10632 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5381 | <5%                     |                 5 |              0.10762 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5395 | 10-15%                  |                 5 |              0.1079  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5522 | >20%                    |                 2 |              0.2761  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5562 | <5%                     |                 5 |              0.11124 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5617 | 5-10%                   |                 5 |              0.11234 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5719 | 5-10%                   |                 5 |              0.11438 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5723 | 15-20%                  |                 2 |              0.28615 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5742 | 10-15%                  |                10 |              0.05742 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5748 | 5-10%                   |                 5 |              0.11496 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5861 | 5-10%                   |                 5 |              0.11722 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5891 | 5-10%                   |                10 |              0.05891 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5927 | >20%                    |                10 |              0.05927 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6008 | 15-20%                  |                10 |              0.06008 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6033 | 15-20%                  |                 5 |              0.12066 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6042 | >20%                    |                 2 |              0.3021  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6055 | 15-20%                  |                 2 |              0.30275 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6084 | 5-10%                   |                10 |              0.06084 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6154 | >20%                    |                 5 |              0.12308 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6187 | 5-10%                   |                 5 |              0.12374 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6255 | >20%                    |                 2 |              0.31275 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6282 | 5-10%                   |                 5 |              0.12564 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6309 | 5-10%                   |                10 |              0.06309 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6312 | >20%                    |                 5 |              0.12624 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6343 | 5-10%                   |                10 |              0.06343 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.6428 | 15-20%                  |                 2 |              0.3214  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6575 | 5-10%                   |                 5 |              0.1315  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6592 | >20%                    |                 2 |              0.3296  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6751 | <5%                     |                10 |              0.06751 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6774 | 10-15%                  |                10 |              0.06774 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6791 | <5%                     |                10 |              0.06791 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6929 | <5%                     |                10 |              0.06929 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6979 | 5-10%                   |                 5 |              0.13958 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7013 | 5-10%                   |                10 |              0.07013 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7169 | 10-15%                  |                10 |              0.07169 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.719  | 5-10%                   |                10 |              0.0719  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7207 | >20%                    |                 5 |              0.14414 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7308 | 15-20%                  |                10 |              0.07308 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7437 | >20%                    |                10 |              0.07437 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7459 | 10-15%                  |                10 |              0.07459 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7494 | <5%                     |                 5 |              0.14988 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7507 | >20%                    |                 5 |              0.15014 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7523 | >20%                    |                 5 |              0.15046 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7582 | <5%                     |                 2 |              0.3791  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.769  | >20%                    |                 5 |              0.1538  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7876 | 5-10%                   |                10 |              0.07876 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7914 | <5%                     |                10 |              0.07914 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7941 | 5-10%                   |                10 |              0.07941 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8029 | 10-15%                  |                 5 |              0.16058 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8069 | >20%                    |                10 |              0.08069 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.816  | 15-20%                  |                10 |              0.0816  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8173 | 10-15%                  |                10 |              0.08173 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.849  | 15-20%                  |                 2 |              0.4245  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8492 | <5%                     |                10 |              0.08492 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8589 | >20%                    |                10 |              0.08589 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8627 | <5%                     |                10 |              0.08627 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.8684 | <5%                     |                 5 |              0.17368 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8759 | 5-10%                   |                10 |              0.08759 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8769 | <5%                     |                10 |              0.08769 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.877  | >20%                    |                10 |              0.0877  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8777 | 10-15%                  |                 2 |              0.43885 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8779 | 5-10%                   |                10 |              0.08779 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8886 | <5%                     |                10 |              0.08886 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8888 | 5-10%                   |                 5 |              0.17776 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8937 | <5%                     |                10 |              0.08937 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.895  | <5%                     |                10 |              0.0895  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9031 | 5-10%                   |                10 |              0.09031 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.91   | 5-10%                   |                10 |              0.091   |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9269 | 5-10%                   |                10 |              0.09269 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9465 | 15-20%                  |                10 |              0.09465 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9469 | 5-10%                   |                 5 |              0.18938 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9594 | 15-20%                  |                 2 |              0.4797  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9974 | >20%                    |                10 |              0.09974 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0174 | 15-20%                  |                10 |              0.10174 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0183 | 5-10%                   |                 5 |              0.20366 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0252 | <5%                     |                10 |              0.10252 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0516 | 15-20%                  |                 5 |              0.21032 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0646 | 5-10%                   |                10 |              0.10646 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0919 | 10-15%                  |                 2 |              0.54595 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1779 | 5-10%                   |                10 |              0.11779 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1792 | 10-15%                  |                10 |              0.11792 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2025 | 10-15%                  |                10 |              0.12025 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2034 | 10-15%                  |                 2 |              0.6017  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.2097 | 10-15%                  |                10 |              0.12097 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2406 | >20%                    |                10 |              0.12406 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2487 | >20%                    |                10 |              0.12487 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.261  | 15-20%                  |                 5 |              0.2522  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3395 | 15-20%                  |                10 |              0.13395 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.406  | 5-10%                   |                10 |              0.1406  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4246 | 5-10%                   |                10 |              0.14246 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0419 | 5-10%                   |                10 |              0.20419 |