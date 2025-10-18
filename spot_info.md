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

Data correct as of 2025-10-18 01:40:55.171597, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0901 | 5-10%                   |                 2 |              0.04505 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1271 | 10-15%                  |                 2 |              0.06355 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1325 | >20%                    |                 2 |              0.06625 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1705 | >20%                    |                 2 |              0.08525 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.172  | >20%                    |                 5 |              0.0344  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2214 | >20%                    |                 2 |              0.1107  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2281 | >20%                    |                 5 |              0.04562 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2297 | 10-15%                  |                 2 |              0.11485 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2412 | >20%                    |                 2 |              0.1206  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2453 | >20%                    |                 2 |              0.12265 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2495 | >20%                    |                 2 |              0.12475 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2571 | 5-10%                   |                 2 |              0.12855 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2619 | 5-10%                   |                10 |              0.02619 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2648 | >20%                    |                 2 |              0.1324  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2664 | 5-10%                   |                 2 |              0.1332  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2674 | >20%                    |                 2 |              0.1337  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2722 | 10-15%                  |                 2 |              0.1361  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2921 | >20%                    |                 2 |              0.14605 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3044 | >20%                    |                 2 |              0.1522  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3093 | >20%                    |                 5 |              0.06186 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3261 | >20%                    |                 2 |              0.16305 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3266 | 15-20%                  |                 2 |              0.1633  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3372 | 10-15%                  |                 2 |              0.1686  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3419 | >20%                    |                 2 |              0.17095 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3427 | >20%                    |                10 |              0.03427 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3448 | 15-20%                  |                 2 |              0.1724  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3518 | >20%                    |                 5 |              0.07036 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3536 | >20%                    |                 2 |              0.1768  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.358  | >20%                    |                 2 |              0.179   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3704 | 15-20%                  |                 2 |              0.1852  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3705 | 5-10%                   |                10 |              0.03705 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3835 | >20%                    |                 2 |              0.19175 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3853 | >20%                    |                 2 |              0.19265 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3873 | >20%                    |                 5 |              0.07746 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3876 | >20%                    |                 2 |              0.1938  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3967 | >20%                    |                 5 |              0.07934 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3977 | 10-15%                  |                10 |              0.03977 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3995 | >20%                    |                 2 |              0.19975 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4028 | >20%                    |                 2 |              0.2014  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4078 | 5-10%                   |                 2 |              0.2039  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.408  | >20%                    |                10 |              0.0408  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4104 | >20%                    |                 2 |              0.2052  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4167 | >20%                    |                 5 |              0.08334 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4192 | >20%                    |                 5 |              0.08384 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4208 | 5-10%                   |                 5 |              0.08416 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4214 | >20%                    |                 2 |              0.2107  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4243 | >20%                    |                 2 |              0.21215 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4297 | 5-10%                   |                 2 |              0.21485 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4324 | >20%                    |                 5 |              0.08648 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4335 | 15-20%                  |                 2 |              0.21675 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4375 | <5%                     |                 2 |              0.21875 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4443 | >20%                    |                 5 |              0.08886 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4465 | >20%                    |                10 |              0.04465 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4508 | >20%                    |                 2 |              0.2254  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.46   | >20%                    |                 5 |              0.092   |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4616 | >20%                    |                 2 |              0.2308  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4621 | >20%                    |                 5 |              0.09242 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4634 | >20%                    |                 2 |              0.2317  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4691 | >20%                    |                 5 |              0.09382 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4719 | >20%                    |                 5 |              0.09438 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4749 | 10-15%                  |                 2 |              0.23745 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4759 | 15-20%                  |                 5 |              0.09518 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4855 | >20%                    |                 2 |              0.24275 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4908 | >20%                    |                 2 |              0.2454  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4937 | >20%                    |                 2 |              0.24685 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5018 | >20%                    |                 5 |              0.10036 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5095 | >20%                    |                 2 |              0.25475 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5136 | >20%                    |                 5 |              0.10272 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5164 | 10-15%                  |                 5 |              0.10328 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5334 | >20%                    |                 5 |              0.10668 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5457 | >20%                    |                 5 |              0.10914 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.548  | <5%                     |                10 |              0.0548  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5496 | >20%                    |                 5 |              0.10992 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5577 | 5-10%                   |                 2 |              0.27885 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5584 | >20%                    |                 5 |              0.11168 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5637 | >20%                    |                 2 |              0.28185 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5759 | >20%                    |                 5 |              0.11518 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5839 | >20%                    |                 5 |              0.11678 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5953 | >20%                    |                 5 |              0.11906 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6001 | >20%                    |                 5 |              0.12002 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6008 | 10-15%                  |                 2 |              0.3004  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.602  | 15-20%                  |                10 |              0.0602  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6029 | 15-20%                  |                 2 |              0.30145 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.61   | >20%                    |                 5 |              0.122   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6108 | >20%                    |                 5 |              0.12216 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6219 | >20%                    |                 5 |              0.12438 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6228 | >20%                    |                 5 |              0.12456 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6317 | >20%                    |                 5 |              0.12634 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6325 | 10-15%                  |                 5 |              0.1265  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6328 | >20%                    |                 5 |              0.12656 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6333 | >20%                    |                 2 |              0.31665 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6389 | 10-15%                  |                 5 |              0.12778 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.641  | 15-20%                  |                 5 |              0.1282  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6455 | >20%                    |                10 |              0.06455 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6518 | 15-20%                  |                 2 |              0.3259  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6537 | 15-20%                  |                 5 |              0.13074 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6546 | >20%                    |                 5 |              0.13092 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6548 | >20%                    |                 5 |              0.13096 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6605 | >20%                    |                 2 |              0.33025 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6678 | 15-20%                  |                10 |              0.06678 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6694 | >20%                    |                 5 |              0.13388 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6848 | >20%                    |                 2 |              0.3424  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6994 | 15-20%                  |                10 |              0.06994 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7014 | >20%                    |                10 |              0.07014 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7076 | >20%                    |                10 |              0.07076 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7115 | >20%                    |                 5 |              0.1423  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7131 | 15-20%                  |                10 |              0.07131 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7132 | <5%                     |                10 |              0.07132 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7143 | >20%                    |                10 |              0.07143 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7178 | 15-20%                  |                 5 |              0.14356 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7183 | >20%                    |                 5 |              0.14366 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7283 | >20%                    |                 5 |              0.14566 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7291 | >20%                    |                 5 |              0.14582 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7299 | >20%                    |                 5 |              0.14598 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7457 | >20%                    |                10 |              0.07457 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7562 | 15-20%                  |                10 |              0.07562 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.757  | >20%                    |                10 |              0.0757  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7947 | >20%                    |                 2 |              0.39735 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7997 | >20%                    |                10 |              0.07997 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8037 | >20%                    |                 5 |              0.16074 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8066 | 10-15%                  |                 2 |              0.4033  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8066 | >20%                    |                10 |              0.08066 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8118 | 15-20%                  |                10 |              0.08118 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.813  | >20%                    |                10 |              0.0813  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8139 | >20%                    |                 5 |              0.16278 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.814  | 5-10%                   |                10 |              0.0814  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8248 | 15-20%                  |                 5 |              0.16496 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8371 | 10-15%                  |                 2 |              0.41855 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8482 | 15-20%                  |                10 |              0.08482 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8517 | 10-15%                  |                 5 |              0.17034 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.853  | >20%                    |                10 |              0.0853  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8614 | 15-20%                  |                10 |              0.08614 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8645 | >20%                    |                10 |              0.08645 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.867  | >20%                    |                 5 |              0.1734  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8956 | >20%                    |                 5 |              0.17912 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8971 | <5%                     |                10 |              0.08971 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9033 | >20%                    |                10 |              0.09033 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9132 | 15-20%                  |                10 |              0.09132 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.914  | <5%                     |                10 |              0.0914  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9219 | >20%                    |                 2 |              0.46095 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.926  | 10-15%                  |                10 |              0.0926  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9282 | >20%                    |                10 |              0.09282 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9401 | 15-20%                  |                10 |              0.09401 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.947  | 10-15%                  |                10 |              0.0947  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.967  | >20%                    |                 2 |              0.4835  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9839 | 5-10%                   |                10 |              0.09839 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.002  | >20%                    |                 2 |              0.501   |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.01   | 15-20%                  |                10 |              0.101   |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0467 | >20%                    |                 5 |              0.20934 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0504 | 10-15%                  |                10 |              0.10504 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0751 | >20%                    |                10 |              0.10751 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0911 | >20%                    |                10 |              0.10911 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0931 | 15-20%                  |                10 |              0.10931 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0958 | >20%                    |                10 |              0.10958 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.098  | >20%                    |                10 |              0.1098  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1134 | 10-15%                  |                 2 |              0.5567  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1179 | >20%                    |                10 |              0.11179 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1201 | >20%                    |                 5 |              0.22402 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1323 | >20%                    |                 5 |              0.22646 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.133  | <5%                     |                10 |              0.1133  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1422 | >20%                    |                10 |              0.11422 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1453 | 10-15%                  |                10 |              0.11453 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.17   | 5-10%                   |                10 |              0.117   |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1701 | >20%                    |                10 |              0.11701 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1873 | >20%                    |                 5 |              0.23746 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1931 | 5-10%                   |                10 |              0.11931 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2801 | 10-15%                  |                10 |              0.12801 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3095 | 5-10%                   |                 2 |              0.65475 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3312 | >20%                    |                10 |              0.13312 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4142 | 10-15%                  |                 5 |              0.28284 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6148 | >20%                    |                10 |              0.16148 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6149 | >20%                    |                10 |              0.16149 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6701 | 10-15%                  |                 5 |              0.33402 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7315 | >20%                    |                10 |              0.17315 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.967  | >20%                    |                10 |              0.1967  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1779 | 10-15%                  |                10 |              0.21779 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3795 | 15-20%                  |                10 |              0.23795 |