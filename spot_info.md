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

Data correct as of 2025-09-29 01:47:27.015345, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1916 | >20%                    |                 2 |              0.0958  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1981 | 10-15%                  |                 2 |              0.09905 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2036 | >20%                    |                 2 |              0.1018  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2224 | 5-10%                   |                 2 |              0.1112  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2331 | >20%                    |                 2 |              0.11655 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2392 | >20%                    |                 5 |              0.04784 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2433 | >20%                    |                 2 |              0.12165 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2527 | 10-15%                  |                 5 |              0.05054 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2563 | >20%                    |                 2 |              0.12815 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.263  | >20%                    |                 2 |              0.1315  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2768 | >20%                    |                 5 |              0.05536 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2956 | 10-15%                  |                 2 |              0.1478  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2986 | >20%                    |                 2 |              0.1493  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2995 | >20%                    |                 2 |              0.14975 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3071 | 5-10%                   |                 2 |              0.15355 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3219 | >20%                    |                 2 |              0.16095 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3249 | 15-20%                  |                 2 |              0.16245 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3307 | 10-15%                  |                 2 |              0.16535 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3334 | >20%                    |                 2 |              0.1667  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3515 | 15-20%                  |                 2 |              0.17575 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3552 | 5-10%                   |                 2 |              0.1776  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3574 | >20%                    |                 2 |              0.1787  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3598 | >20%                    |                 2 |              0.1799  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3621 | >20%                    |                 2 |              0.18105 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3634 | >20%                    |                10 |              0.03634 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.372  | >20%                    |                 2 |              0.186   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.375  | >20%                    |                 5 |              0.075   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3792 | >20%                    |                 5 |              0.07584 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3958 | >20%                    |                 5 |              0.07916 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3972 | >20%                    |                 2 |              0.1986  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.398  | 15-20%                  |                 2 |              0.199   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3999 | >20%                    |                 2 |              0.19995 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4012 | >20%                    |                 2 |              0.2006  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4153 | >20%                    |                 5 |              0.08306 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4179 | >20%                    |                10 |              0.04179 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4196 | >20%                    |                 2 |              0.2098  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4208 | >20%                    |                 2 |              0.2104  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4217 | >20%                    |                10 |              0.04217 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4232 | >20%                    |                 5 |              0.08464 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4293 | 5-10%                   |                 2 |              0.21465 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4324 | >20%                    |                 2 |              0.2162  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4342 | >20%                    |                 5 |              0.08684 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4342 | >20%                    |                 5 |              0.08684 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4351 | 15-20%                  |                 2 |              0.21755 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4393 | 10-15%                  |                 5 |              0.08786 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4407 | >20%                    |                 5 |              0.08814 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4426 | >20%                    |                 2 |              0.2213  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4459 | 15-20%                  |                 5 |              0.08918 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4502 | <5%                     |                 2 |              0.2251  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4524 | 10-15%                  |                 2 |              0.2262  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4551 | <5%                     |                10 |              0.04551 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4634 | >20%                    |                 2 |              0.2317  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4722 | >20%                    |                 5 |              0.09444 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4793 | >20%                    |                 5 |              0.09586 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4845 | 10-15%                  |                 2 |              0.24225 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4924 | >20%                    |                 5 |              0.09848 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5003 | >20%                    |                 5 |              0.10006 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5043 | >20%                    |                 2 |              0.25215 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5064 | >20%                    |                 2 |              0.2532  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5064 | >20%                    |                 2 |              0.2532  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5065 | 5-10%                   |                 5 |              0.1013  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5099 | >20%                    |                 5 |              0.10198 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5195 | >20%                    |                10 |              0.05195 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.523  | >20%                    |                 5 |              0.1046  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5386 | 10-15%                  |                 2 |              0.2693  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5399 | >20%                    |                 2 |              0.26995 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5494 | >20%                    |                 2 |              0.2747  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5527 | 5-10%                   |                 2 |              0.27635 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5616 | >20%                    |                 5 |              0.11232 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5616 | >20%                    |                 5 |              0.11232 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5642 | >20%                    |                 5 |              0.11284 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5864 | >20%                    |                 2 |              0.2932  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5873 | 15-20%                  |                10 |              0.05873 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.594  | >20%                    |                 5 |              0.1188  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.598  | 15-20%                  |                 2 |              0.299   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5986 | >20%                    |                 2 |              0.2993  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6009 | >20%                    |                 5 |              0.12018 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6049 | >20%                    |                 5 |              0.12098 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6066 | >20%                    |                 2 |              0.3033  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6085 | >20%                    |                 5 |              0.1217  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6188 | >20%                    |                 5 |              0.12376 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6362 | 10-15%                  |                 5 |              0.12724 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.637  | >20%                    |                 5 |              0.1274  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6375 | 10-15%                  |                 5 |              0.1275  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6379 | >20%                    |                 5 |              0.12758 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6384 | >20%                    |                 5 |              0.12768 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6428 | 15-20%                  |                 2 |              0.3214  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6447 | 15-20%                  |                 5 |              0.12894 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6608 | 5-10%                   |                10 |              0.06608 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6622 | >20%                    |                 5 |              0.13244 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.667  | >20%                    |                 5 |              0.1334  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6739 | >20%                    |                 5 |              0.13478 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6792 | >20%                    |                 2 |              0.3396  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6799 | >20%                    |                 5 |              0.13598 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6824 | >20%                    |                 5 |              0.13648 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6855 | >20%                    |                 5 |              0.1371  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6896 | >20%                    |                 5 |              0.13792 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6965 | >20%                    |                 5 |              0.1393  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7068 | 15-20%                  |                10 |              0.07068 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7088 | 15-20%                  |                 5 |              0.14176 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.709  | 15-20%                  |                10 |              0.0709  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.71   | >20%                    |                10 |              0.071   |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7108 | >20%                    |                 2 |              0.3554  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7254 | >20%                    |                 5 |              0.14508 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.731  | 15-20%                  |                 5 |              0.1462  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7363 | >20%                    |                10 |              0.07363 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7428 | >20%                    |                10 |              0.07428 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7456 | >20%                    |                 5 |              0.14912 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7646 | 10-15%                  |                 2 |              0.3823  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7717 | >20%                    |                10 |              0.07717 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7728 | 15-20%                  |                10 |              0.07728 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7826 | >20%                    |                10 |              0.07826 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8055 | >20%                    |                 5 |              0.1611  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8088 | >20%                    |                10 |              0.08088 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8141 | >20%                    |                 5 |              0.16282 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8219 | 15-20%                  |                10 |              0.08219 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8311 | >20%                    |                10 |              0.08311 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8312 | 15-20%                  |                 5 |              0.16624 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8322 | 10-15%                  |                 2 |              0.4161  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8454 | <5%                     |                10 |              0.08454 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8511 | >20%                    |                10 |              0.08511 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8524 | 15-20%                  |                10 |              0.08524 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.863  | >20%                    |                 5 |              0.1726  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8674 | 10-15%                  |                10 |              0.08674 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8715 | 15-20%                  |                10 |              0.08715 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8777 | >20%                    |                10 |              0.08777 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8891 | <5%                     |                10 |              0.08891 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8893 | >20%                    |                10 |              0.08893 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9064 | 10-15%                  |                10 |              0.09064 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9115 | >20%                    |                10 |              0.09115 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9282 | 15-20%                  |                10 |              0.09282 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9341 | <5%                     |                10 |              0.09341 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9481 | 5-10%                   |                10 |              0.09481 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9546 | >20%                    |                 5 |              0.19092 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9831 | 15-20%                  |                10 |              0.09831 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.989  | 15-20%                  |                10 |              0.0989  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.002  | 10-15%                  |                10 |              0.1002  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0034 | 10-15%                  |                 5 |              0.20068 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0128 | >20%                    |                10 |              0.10128 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0299 | >20%                    |                 2 |              0.51495 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0365 | 5-10%                   |                10 |              0.10365 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0551 | >20%                    |                 2 |              0.52755 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0562 | >20%                    |                 2 |              0.5281  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0705 | >20%                    |                 5 |              0.2141  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0779 | >20%                    |                10 |              0.10779 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0805 | >20%                    |                10 |              0.10805 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0826 | 15-20%                  |                10 |              0.10826 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0849 | 10-15%                  |                 2 |              0.54245 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1107 | 5-10%                   |                10 |              0.11107 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1372 | >20%                    |                 5 |              0.22744 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1405 | <5%                     |                10 |              0.11405 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1406 | >20%                    |                10 |              0.11406 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.141  | 5-10%                   |                10 |              0.1141  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1436 | >20%                    |                 5 |              0.22872 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1714 | >20%                    |                 5 |              0.23428 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1855 | 10-15%                  |                10 |              0.11855 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1905 | >20%                    |                10 |              0.11905 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2113 | 15-20%                  |                10 |              0.12113 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2127 | 5-10%                   |                 2 |              0.60635 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.319  | 10-15%                  |                10 |              0.1319  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3222 | >20%                    |                10 |              0.13222 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3423 | 10-15%                  |                 5 |              0.26846 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4299 | >20%                    |                10 |              0.14299 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6102 | >20%                    |                10 |              0.16102 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6258 | >20%                    |                10 |              0.16258 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6458 | >20%                    |                10 |              0.16458 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6484 | 10-15%                  |                 5 |              0.32968 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7111 | >20%                    |                10 |              0.17111 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0079 | 10-15%                  |                10 |              0.20079 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.24   | 15-20%                  |                10 |              0.224   |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      3.0028 | >20%                    |                10 |              0.30028 |