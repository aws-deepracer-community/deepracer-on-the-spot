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

Data correct as of 2025-05-25 02:01:44.486007, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1766 | >20%                    |                 2 |              0.0883  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 15-20%                  |                 5 |              0.039   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1976 | >20%                    |                 2 |              0.0988  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2049 | 5-10%                   |                 5 |              0.04098 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2116 | >20%                    |                 2 |              0.1058  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2221 | >20%                    |                 2 |              0.11105 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2338 | >20%                    |                 2 |              0.1169  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 10-15%                  |                10 |              0.02419 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2425 | 5-10%                   |                 2 |              0.12125 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2452 | >20%                    |                 5 |              0.04904 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2548 | 10-15%                  |                 2 |              0.1274  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2568 | <5%                     |                 2 |              0.1284  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2579 | 15-20%                  |                 2 |              0.12895 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.26   | 15-20%                  |                 2 |              0.13    |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2648 | >20%                    |                 2 |              0.1324  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2653 | >20%                    |                 2 |              0.13265 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2718 | 10-15%                  |                 2 |              0.1359  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2767 | >20%                    |                10 |              0.02767 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2845 | >20%                    |                 2 |              0.14225 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.292  | 15-20%                  |                 2 |              0.146   |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | <5%                     |                10 |              0.0294  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2988 | <5%                     |                 2 |              0.1494  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2991 | 15-20%                  |                 5 |              0.05982 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3037 | >20%                    |                10 |              0.03037 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3041 | >20%                    |                 2 |              0.15205 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3086 | 15-20%                  |                 2 |              0.1543  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3176 | 15-20%                  |                 2 |              0.1588  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.319  | >20%                    |                 5 |              0.0638  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3211 | >20%                    |                10 |              0.03211 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3234 | 15-20%                  |                 2 |              0.1617  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3307 | >20%                    |                 2 |              0.16535 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3412 | >20%                    |                 2 |              0.1706  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3417 | >20%                    |                 5 |              0.06834 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3467 | >20%                    |                10 |              0.03467 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.347  | 10-15%                  |                 5 |              0.0694  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3479 | >20%                    |                 5 |              0.06958 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3543 | 15-20%                  |                 2 |              0.17715 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3595 | >20%                    |                 2 |              0.17975 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3621 | >20%                    |                 2 |              0.18105 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3659 | >20%                    |                 5 |              0.07318 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3676 | >20%                    |                 5 |              0.07352 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3695 | 10-15%                  |                 5 |              0.0739  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3712 | 5-10%                   |                 2 |              0.1856  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3718 | 5-10%                   |                 2 |              0.1859  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3743 | 15-20%                  |                 2 |              0.18715 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3806 | >20%                    |                 2 |              0.1903  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3908 | <5%                     |                 2 |              0.1954  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3946 | >20%                    |                 2 |              0.1973  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4    | 15-20%                  |                 2 |              0.2     |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4058 | <5%                     |                 5 |              0.08116 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4126 | 10-15%                  |                 2 |              0.2063  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4139 | >20%                    |                 5 |              0.08278 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | 15-20%                  |                10 |              0.04161 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4181 | >20%                    |                10 |              0.04181 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4307 | 5-10%                   |                 5 |              0.08614 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4314 | >20%                    |                 2 |              0.2157  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4371 | 15-20%                  |                 5 |              0.08742 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4383 | >20%                    |                 2 |              0.21915 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4399 | <5%                     |                 2 |              0.21995 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4417 | <5%                     |                 5 |              0.08834 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4473 | >20%                    |                 2 |              0.22365 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4505 | 15-20%                  |                 5 |              0.0901  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.456  | 15-20%                  |                 5 |              0.0912  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4577 | >20%                    |                 2 |              0.22885 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4628 | 15-20%                  |                 5 |              0.09256 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4675 | 10-15%                  |                 5 |              0.0935  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4688 | >20%                    |                 5 |              0.09376 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4765 | >20%                    |                 5 |              0.0953  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4765 | >20%                    |                 2 |              0.23825 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4775 | >20%                    |                 5 |              0.0955  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4809 | >20%                    |                 2 |              0.24045 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4832 | >20%                    |                 5 |              0.09664 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4837 | 15-20%                  |                10 |              0.04837 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4842 | >20%                    |                 2 |              0.2421  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.487  | >20%                    |                 5 |              0.0974  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4882 | >20%                    |                10 |              0.04882 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.494  | >20%                    |                 5 |              0.0988  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.495  | 15-20%                  |                 2 |              0.2475  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4951 | <5%                     |                 5 |              0.09902 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4965 | 15-20%                  |                10 |              0.04965 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4983 | 15-20%                  |                 5 |              0.09966 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5005 | >20%                    |                10 |              0.05005 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5009 | >20%                    |                 5 |              0.10018 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5051 | 10-15%                  |                 5 |              0.10102 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5138 | >20%                    |                 2 |              0.2569  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5244 | 5-10%                   |                 5 |              0.10488 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5253 | >20%                    |                 2 |              0.26265 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5321 | >20%                    |                 2 |              0.26605 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5358 | <5%                     |                 5 |              0.10716 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5569 | 10-15%                  |                 2 |              0.27845 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5571 | >20%                    |                 5 |              0.11142 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5591 | >20%                    |                 5 |              0.11182 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5611 | >20%                    |                 2 |              0.28055 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5704 | 5-10%                   |                 5 |              0.11408 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5724 | >20%                    |                 5 |              0.11448 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5743 | >20%                    |                10 |              0.05743 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5762 | >20%                    |                 5 |              0.11524 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5769 | 10-15%                  |                10 |              0.05769 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5783 | >20%                    |                 2 |              0.28915 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5786 | >20%                    |                 5 |              0.11572 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5936 | >20%                    |                 5 |              0.11872 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6103 | 10-15%                  |                 5 |              0.12206 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6108 | 5-10%                   |                 2 |              0.3054  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6115 | 5-10%                   |                10 |              0.06115 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6176 | 5-10%                   |                 2 |              0.3088  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.621  | >20%                    |                 2 |              0.3105  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6222 | 10-15%                  |                 2 |              0.3111  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6289 | 10-15%                  |                10 |              0.06289 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6523 | <5%                     |                10 |              0.06523 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6672 | >20%                    |                 2 |              0.3336  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6714 | 15-20%                  |                 5 |              0.13428 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6742 | >20%                    |                 5 |              0.13484 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6791 | >20%                    |                 2 |              0.33955 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6793 | >20%                    |                10 |              0.06793 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6947 | <5%                     |                 5 |              0.13894 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6983 | 10-15%                  |                 5 |              0.13966 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7106 | >20%                    |                10 |              0.07106 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7128 | <5%                     |                10 |              0.07128 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7206 | >20%                    |                 5 |              0.14412 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7291 | 10-15%                  |                10 |              0.07291 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.732  | <5%                     |                10 |              0.0732  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7324 | 10-15%                  |                 5 |              0.14648 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7325 | >20%                    |                10 |              0.07325 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7353 | >20%                    |                10 |              0.07353 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7392 | >20%                    |                10 |              0.07392 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7448 | >20%                    |                 5 |              0.14896 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7516 | >20%                    |                 5 |              0.15032 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7658 | >20%                    |                10 |              0.07658 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7736 | <5%                     |                 5 |              0.15472 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7796 | 10-15%                  |                10 |              0.07796 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7861 | >20%                    |                 5 |              0.15722 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8087 | >20%                    |                10 |              0.08087 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8116 | 10-15%                  |                 5 |              0.16232 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8155 | >20%                    |                10 |              0.08155 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.82   | 15-20%                  |                10 |              0.082   |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8263 | 5-10%                   |                10 |              0.08263 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8286 | 15-20%                  |                10 |              0.08286 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8688 | >20%                    |                10 |              0.08688 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8927 | 10-15%                  |                 5 |              0.17854 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8936 | <5%                     |                10 |              0.08936 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8942 | >20%                    |                10 |              0.08942 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8979 | >20%                    |                10 |              0.08979 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9086 | >20%                    |                10 |              0.09086 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9233 | >20%                    |                10 |              0.09233 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.927  | >20%                    |                10 |              0.0927  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9418 | >20%                    |                10 |              0.09418 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9433 | >20%                    |                 5 |              0.18866 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9611 | >20%                    |                 2 |              0.48055 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9643 | 5-10%                   |                 2 |              0.48215 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9658 | >20%                    |                10 |              0.09658 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9697 | <5%                     |                10 |              0.09697 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9697 | >20%                    |                 2 |              0.48485 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9891 | 10-15%                  |                 5 |              0.19782 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0074 | >20%                    |                 2 |              0.5037  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0326 | >20%                    |                 5 |              0.20652 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0409 | 15-20%                  |                10 |              0.10409 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0531 | 15-20%                  |                10 |              0.10531 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0669 | >20%                    |                10 |              0.10669 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1076 | 5-10%                   |                10 |              0.11076 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1086 | <5%                     |                10 |              0.11086 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1221 | <5%                     |                 2 |              0.56105 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1552 | >20%                    |                 5 |              0.23104 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1895 | 15-20%                  |                10 |              0.11895 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2077 | 5-10%                   |                10 |              0.12077 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2248 | 10-15%                  |                10 |              0.12248 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2612 | 15-20%                  |                10 |              0.12612 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2737 | >20%                    |                10 |              0.12737 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3188 | >20%                    |                10 |              0.13188 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3868 | <5%                     |                 5 |              0.27736 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4194 | >20%                    |                 5 |              0.28388 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4233 | >20%                    |                10 |              0.14233 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4457 | 10-15%                  |                10 |              0.14457 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4857 | >20%                    |                 2 |              0.74285 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5495 | >20%                    |                10 |              0.15495 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0006 | <5%                     |                10 |              0.20006 |