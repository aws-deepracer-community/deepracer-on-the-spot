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

Data correct as of 2025-09-15 01:50:40.410460, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1246 | 5-10%                   |                 2 |              0.0623  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1482 | >20%                    |                 2 |              0.0741  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1681 | >20%                    |                 2 |              0.08405 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2022 | 10-15%                  |                 2 |              0.1011  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2312 | 10-15%                  |                 5 |              0.04624 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2345 | >20%                    |                 2 |              0.11725 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2491 | >20%                    |                 2 |              0.12455 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2648 | >20%                    |                 2 |              0.1324  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2679 | >20%                    |                 2 |              0.13395 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2884 | >20%                    |                 2 |              0.1442  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2888 | >20%                    |                 2 |              0.1444  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3052 | 15-20%                  |                 2 |              0.1526  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3078 | >20%                    |                 2 |              0.1539  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3114 | 5-10%                   |                 2 |              0.1557  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3135 | 10-15%                  |                 2 |              0.15675 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3194 | >20%                    |                 2 |              0.1597  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3258 | 5-10%                   |                 2 |              0.1629  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3408 | >20%                    |                 2 |              0.1704  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3459 | 15-20%                  |                 2 |              0.17295 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3595 | 10-15%                  |                 2 |              0.17975 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3602 | 15-20%                  |                 5 |              0.07204 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.361  | >20%                    |                 5 |              0.0722  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3657 | >20%                    |                 5 |              0.07314 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3674 | >20%                    |                 2 |              0.1837  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3709 | >20%                    |                 5 |              0.07418 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3715 | >20%                    |                 2 |              0.18575 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3769 | >20%                    |                10 |              0.03769 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.38   | 10-15%                  |                 5 |              0.076   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3823 | >20%                    |                 2 |              0.19115 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3867 | >20%                    |                 5 |              0.07734 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3924 | >20%                    |                 2 |              0.1962  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3932 | >20%                    |                 2 |              0.1966  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3948 | 15-20%                  |                10 |              0.03948 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4034 | >20%                    |                 5 |              0.08068 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4034 | >20%                    |                 5 |              0.08068 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4097 | >20%                    |                 2 |              0.20485 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4131 | >20%                    |                10 |              0.04131 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.418  | >20%                    |                 5 |              0.0836  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4211 | >20%                    |                 5 |              0.08422 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4242 | >20%                    |                 5 |              0.08484 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4253 | 15-20%                  |                 2 |              0.21265 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4399 | >20%                    |                 2 |              0.21995 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4498 | 15-20%                  |                 2 |              0.2249  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4527 | 10-15%                  |                 2 |              0.22635 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4556 | >20%                    |                 2 |              0.2278  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4636 | >20%                    |                 5 |              0.09272 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4641 | >20%                    |                 5 |              0.09282 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4649 | 5-10%                   |                 2 |              0.23245 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4662 | >20%                    |                 2 |              0.2331  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4689 | 10-15%                  |                 2 |              0.23445 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.47   | >20%                    |                 5 |              0.094   |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4753 | <5%                     |                 2 |              0.23765 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4756 | >20%                    |                 2 |              0.2378  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4863 | >20%                    |                 2 |              0.24315 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4947 | >20%                    |                 2 |              0.24735 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4959 | >20%                    |                 5 |              0.09918 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5075 | >20%                    |                 5 |              0.1015  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5102 | >20%                    |                 2 |              0.2551  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5108 | 5-10%                   |                 5 |              0.10216 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5123 | 10-15%                  |                 2 |              0.25615 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5136 | >20%                    |                 5 |              0.10272 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5146 | >20%                    |                 2 |              0.2573  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5211 | >20%                    |                 5 |              0.10422 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.524  | 15-20%                  |                 2 |              0.262   |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5277 | 5-10%                   |                 2 |              0.26385 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5376 | >20%                    |                 5 |              0.10752 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5398 | >20%                    |                 2 |              0.2699  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5451 | >20%                    |                10 |              0.05451 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5608 | >20%                    |                 5 |              0.11216 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.568  | >20%                    |                 5 |              0.1136  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5705 | >20%                    |                 2 |              0.28525 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5754 | >20%                    |                 2 |              0.2877  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.584  | >20%                    |                 5 |              0.1168  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5924 | >20%                    |                 5 |              0.11848 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5942 | 10-15%                  |                 5 |              0.11884 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5987 | >20%                    |                 5 |              0.11974 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6038 | 15-20%                  |                 5 |              0.12076 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6054 | 5-10%                   |                10 |              0.06054 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6095 | >20%                    |                 5 |              0.1219  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6155 | 10-15%                  |                 5 |              0.1231  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6157 | >20%                    |                 2 |              0.30785 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6194 | 15-20%                  |                10 |              0.06194 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6367 | >20%                    |                 5 |              0.12734 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6426 | 15-20%                  |                 2 |              0.3213  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6512 | >20%                    |                 5 |              0.13024 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.66   | 15-20%                  |                10 |              0.066   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6609 | 15-20%                  |                 5 |              0.13218 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6611 | >20%                    |                 2 |              0.33055 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6614 | >20%                    |                 5 |              0.13228 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6651 | >20%                    |                 5 |              0.13302 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6678 | >20%                    |                 2 |              0.3339  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6678 | >20%                    |                 5 |              0.13356 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6752 | 15-20%                  |                 5 |              0.13504 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.682  | >20%                    |                 5 |              0.1364  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6865 | 10-15%                  |                 2 |              0.34325 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6886 | 15-20%                  |                 5 |              0.13772 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7097 | >20%                    |                 5 |              0.14194 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7104 | >20%                    |                 5 |              0.14208 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7109 | >20%                    |                 5 |              0.14218 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7129 | >20%                    |                10 |              0.07129 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7202 | >20%                    |                10 |              0.07202 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7236 | >20%                    |                 5 |              0.14472 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7247 | <5%                     |                 2 |              0.36235 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7314 | >20%                    |                10 |              0.07314 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7334 | >20%                    |                 5 |              0.14668 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7533 | >20%                    |                10 |              0.07533 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7653 | >20%                    |                10 |              0.07653 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7675 | >20%                    |                10 |              0.07675 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7836 | >20%                    |                 5 |              0.15672 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7846 | 15-20%                  |                10 |              0.07846 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7898 | >20%                    |                 5 |              0.15796 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8145 | >20%                    |                 5 |              0.1629  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8395 | 10-15%                  |                 2 |              0.41975 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8454 | >20%                    |                 5 |              0.16908 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8456 | 15-20%                  |                10 |              0.08456 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8533 | 10-15%                  |                10 |              0.08533 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8633 | 10-15%                  |                10 |              0.08633 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8708 | <5%                     |                10 |              0.08708 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8977 | >20%                    |                 5 |              0.17954 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9065 | >20%                    |                10 |              0.09065 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.908  | 15-20%                  |                10 |              0.0908  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9114 | >20%                    |                10 |              0.09114 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9246 | <5%                     |                10 |              0.09246 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9289 | 5-10%                   |                10 |              0.09289 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9369 | >20%                    |                 5 |              0.18738 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9394 | 15-20%                  |                10 |              0.09394 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9509 | <5%                     |                10 |              0.09509 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.951  | 10-15%                  |                10 |              0.0951  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9584 | >20%                    |                10 |              0.09584 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9626 | 15-20%                  |                10 |              0.09626 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9744 | 15-20%                  |                10 |              0.09744 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.981  | >20%                    |                10 |              0.0981  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9821 | 10-15%                  |                10 |              0.09821 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9921 | >20%                    |                 2 |              0.49605 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0019 | >20%                    |                10 |              0.10019 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.02   | 15-20%                  |                10 |              0.102   |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0617 | 10-15%                  |                 5 |              0.21234 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0624 | >20%                    |                10 |              0.10624 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0647 | 5-10%                   |                10 |              0.10647 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0741 | >20%                    |                10 |              0.10741 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0755 | 5-10%                   |                10 |              0.10755 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0821 | >20%                    |                 2 |              0.54105 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1004 | 5-10%                   |                10 |              0.11004 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1039 | <5%                     |                10 |              0.11039 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1154 | 10-15%                  |                 2 |              0.5577  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1165 | >20%                    |                 2 |              0.55825 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1233 | 15-20%                  |                10 |              0.11233 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.133  | >20%                    |                 5 |              0.2266  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1367 | >20%                    |                10 |              0.11367 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1479 | >20%                    |                 5 |              0.22958 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1758 | 15-20%                  |                10 |              0.11758 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.2177 | >20%                    |                10 |              0.12177 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2213 | 5-10%                   |                 2 |              0.61065 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2342 | >20%                    |                10 |              0.12342 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2432 | >20%                    |                 5 |              0.24864 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2547 | >20%                    |                10 |              0.12547 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3188 | >20%                    |                10 |              0.13188 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3358 | 10-15%                  |                10 |              0.13358 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.349  | 10-15%                  |                 5 |              0.2698  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4689 | 10-15%                  |                 5 |              0.29378 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5048 | >20%                    |                10 |              0.15048 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.5348 | >20%                    |                10 |              0.15348 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5598 | >20%                    |                10 |              0.15598 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6985 | >20%                    |                10 |              0.16985 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8638 | >20%                    |                10 |              0.18638 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9031 | 15-20%                  |                10 |              0.19031 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.189  | 10-15%                  |                10 |              0.2189  |