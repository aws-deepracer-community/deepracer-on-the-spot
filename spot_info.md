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

Data correct as of 2024-11-17 01:46:40.731277, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1458 | >20%                    |                 5 |              0.02916 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 5-10%                   |                 2 |              0.0831  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1776 | 10-15%                  |                 2 |              0.0888  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2181 | 15-20%                  |                 2 |              0.10905 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2197 | 5-10%                   |                 2 |              0.10985 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 10-15%                  |                 2 |              0.1121  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.2361 | >20%                    |                 5 |              0.04722 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2388 | 5-10%                   |                 2 |              0.1194  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2476 | <5%                     |                 2 |              0.1238  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2631 | 5-10%                   |                 2 |              0.13155 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2704 | 5-10%                   |                 2 |              0.1352  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.277  | <5%                     |                 2 |              0.1385  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2846 | 5-10%                   |                 2 |              0.1423  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2869 | <5%                     |                 2 |              0.14345 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | <5%                     |                 5 |              0.06008 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3147 | <5%                     |                 2 |              0.15735 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.3207 | 5-10%                   |                 2 |              0.16035 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3272 | <5%                     |                10 |              0.03272 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3317 | <5%                     |                 5 |              0.06634 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3343 | 15-20%                  |                 2 |              0.16715 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3466 | 5-10%                   |                 2 |              0.1733  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3505 | <5%                     |                 2 |              0.17525 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3521 | 15-20%                  |                 2 |              0.17605 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3575 | >20%                    |                 2 |              0.17875 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3668 | <5%                     |                 2 |              0.1834  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3711 | <5%                     |                 5 |              0.07422 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3763 | 10-15%                  |                 5 |              0.07526 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3776 | >20%                    |                 5 |              0.07552 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3786 | >20%                    |                 2 |              0.1893  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3798 | 15-20%                  |                 5 |              0.07596 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3803 | >20%                    |                 2 |              0.19015 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3891 | 5-10%                   |                 2 |              0.19455 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3987 | >20%                    |                 2 |              0.19935 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.414  | 5-10%                   |                 2 |              0.207   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4149 | 5-10%                   |                 2 |              0.20745 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4158 | 5-10%                   |                 2 |              0.2079  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4269 | 10-15%                  |                 2 |              0.21345 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4271 | 15-20%                  |                 5 |              0.08542 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4283 | >20%                    |                 2 |              0.21415 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.441  | 5-10%                   |                 5 |              0.0882  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4423 | 5-10%                   |                 5 |              0.08846 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4459 | <5%                     |                 5 |              0.08918 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4462 | >20%                    |                 2 |              0.2231  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.449  | 10-15%                  |                 5 |              0.0898  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4513 | 5-10%                   |                 5 |              0.09026 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | 5-10%                   |                10 |              0.04529 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4558 | 10-15%                  |                 5 |              0.09116 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4581 | >20%                    |                 5 |              0.09162 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4584 | 10-15%                  |                 5 |              0.09168 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4655 | <5%                     |                 2 |              0.23275 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4655 | <5%                     |                 2 |              0.23275 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4707 | 15-20%                  |                 5 |              0.09414 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4736 | >20%                    |                 2 |              0.2368  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.474  | 15-20%                  |                 5 |              0.0948  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4814 | 15-20%                  |                 5 |              0.09628 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4932 | <5%                     |                 2 |              0.2466  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5003 | >20%                    |                10 |              0.05003 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.505  | 5-10%                   |                 5 |              0.101   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.5051 | 5-10%                   |                 2 |              0.25255 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5069 | 5-10%                   |                 2 |              0.25345 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5155 | <5%                     |                 5 |              0.1031  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5161 | <5%                     |                10 |              0.05161 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5215 | 10-15%                  |                 2 |              0.26075 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5268 | <5%                     |                 2 |              0.2634  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5388 | <5%                     |                 5 |              0.10776 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5418 | 5-10%                   |                 5 |              0.10836 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5441 | 15-20%                  |                 5 |              0.10882 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5499 | 5-10%                   |                 5 |              0.10998 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5526 | >20%                    |                 5 |              0.11052 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5572 | >20%                    |                 5 |              0.11144 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5647 | 15-20%                  |                10 |              0.05647 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5649 | 10-15%                  |                 5 |              0.11298 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5672 | >20%                    |                 2 |              0.2836  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5679 | >20%                    |                10 |              0.05679 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.569  | 10-15%                  |                10 |              0.0569  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5788 | >20%                    |                 5 |              0.11576 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.581  | 15-20%                  |                 2 |              0.2905  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6142 | 5-10%                   |                10 |              0.06142 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6181 | 5-10%                   |                 5 |              0.12362 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6474 | >20%                    |                10 |              0.06474 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6654 | 5-10%                   |                10 |              0.06654 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.6722 | >20%                    |                10 |              0.06722 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.675  | <5%                     |                 5 |              0.135   |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6754 | >20%                    |                 2 |              0.3377  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6813 | >20%                    |                 5 |              0.13626 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6857 | <5%                     |                 5 |              0.13714 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6858 | >20%                    |                10 |              0.06858 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6912 | 15-20%                  |                 5 |              0.13824 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6914 | >20%                    |                 5 |              0.13828 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7073 | 5-10%                   |                 5 |              0.14146 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7089 | <5%                     |                 5 |              0.14178 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7139 | >20%                    |                10 |              0.07139 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7365 | <5%                     |                10 |              0.07365 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7366 | 5-10%                   |                10 |              0.07366 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7513 | 15-20%                  |                 5 |              0.15026 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7589 | 10-15%                  |                10 |              0.07589 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.761  | 15-20%                  |                10 |              0.0761  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7785 | <5%                     |                 5 |              0.1557  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7965 | 5-10%                   |                10 |              0.07965 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7982 | 5-10%                   |                 5 |              0.15964 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7989 | <5%                     |                 2 |              0.39945 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8019 | 15-20%                  |                10 |              0.08019 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8023 | <5%                     |                10 |              0.08023 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8046 | >20%                    |                10 |              0.08046 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8087 | 5-10%                   |                10 |              0.08087 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8303 | 10-15%                  |                10 |              0.08303 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8492 | >20%                    |                10 |              0.08492 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8493 | 10-15%                  |                10 |              0.08493 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8628 | >20%                    |                 5 |              0.17256 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8633 | 5-10%                   |                10 |              0.08633 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8654 | <5%                     |                10 |              0.08654 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9081 | 5-10%                   |                10 |              0.09081 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9785 | <5%                     |                10 |              0.09785 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9826 | 15-20%                  |                10 |              0.09826 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9917 | 5-10%                   |                10 |              0.09917 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9979 | <5%                     |                10 |              0.09979 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0024 | <5%                     |                10 |              0.10024 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0241 | 15-20%                  |                10 |              0.10241 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0303 | <5%                     |                10 |              0.10303 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0533 | >20%                    |                10 |              0.10533 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0533 | >20%                    |                10 |              0.10533 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0556 | <5%                     |                10 |              0.10556 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1387 | 10-15%                  |                10 |              0.11387 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1544 | 15-20%                  |                10 |              0.11544 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3562 | >20%                    |                10 |              0.13562 |