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

Data correct as of 2025-08-18 02:05:39.693503, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1008 | 5-10%                   |                 2 |              0.0504  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1629 | >20%                    |                 5 |              0.03258 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1875 | >20%                    |                 2 |              0.09375 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1983 | 10-15%                  |                 5 |              0.03966 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1998 | 10-15%                  |                 2 |              0.0999  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2065 | >20%                    |                 2 |              0.10325 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.246  | >20%                    |                 2 |              0.123   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2536 | >20%                    |                 2 |              0.1268  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2603 | >20%                    |                 2 |              0.13015 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2747 | >20%                    |                 2 |              0.13735 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2931 | >20%                    |                 2 |              0.14655 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3086 | >20%                    |                 2 |              0.1543  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3092 | 10-15%                  |                 2 |              0.1546  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3115 | 10-15%                  |                 2 |              0.15575 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.313  | 10-15%                  |                 2 |              0.1565  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3172 | 5-10%                   |                 2 |              0.1586  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3473 | >20%                    |                 2 |              0.17365 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3476 | >20%                    |                 2 |              0.1738  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3493 | >20%                    |                 2 |              0.17465 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3503 | >20%                    |                 2 |              0.17515 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3534 | >20%                    |                 5 |              0.07068 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3557 | >20%                    |                 2 |              0.17785 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3694 | >20%                    |                 5 |              0.07388 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3725 | >20%                    |                 2 |              0.18625 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3751 | >20%                    |                 2 |              0.18755 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3823 | >20%                    |                 2 |              0.19115 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3824 | >20%                    |                 2 |              0.1912  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3923 | >20%                    |                 5 |              0.07846 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4071 | >20%                    |                 5 |              0.08142 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4183 | >20%                    |                 5 |              0.08366 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4209 | >20%                    |                 5 |              0.08418 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4221 | >20%                    |                 5 |              0.08442 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.424  | 10-15%                  |                 2 |              0.212   |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4282 | >20%                    |                 5 |              0.08564 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4345 | >20%                    |                 2 |              0.21725 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4452 | >20%                    |                 5 |              0.08904 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4517 | >20%                    |                 5 |              0.09034 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4536 | 10-15%                  |                 2 |              0.2268  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4648 | 10-15%                  |                 2 |              0.2324  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4669 | >20%                    |                 2 |              0.23345 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4734 | >20%                    |                 2 |              0.2367  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4734 | 5-10%                   |                 2 |              0.2367  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.48   | 15-20%                  |                 2 |              0.24    |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4811 | >20%                    |                 2 |              0.24055 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4817 | <5%                     |                 2 |              0.24085 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4818 | >20%                    |                 2 |              0.2409  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4834 | >20%                    |                 2 |              0.2417  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4882 | >20%                    |                 5 |              0.09764 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.49   | 5-10%                   |                 5 |              0.098   |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4949 | >20%                    |                 5 |              0.09898 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4965 | 15-20%                  |                 2 |              0.24825 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4981 | 15-20%                  |                 5 |              0.09962 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5013 | >20%                    |                 2 |              0.25065 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5096 | >20%                    |                 5 |              0.10192 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5127 | >20%                    |                 2 |              0.25635 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5227 | >20%                    |                 2 |              0.26135 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5233 | >20%                    |                 5 |              0.10466 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.532  | >20%                    |                 5 |              0.1064  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5348 | >20%                    |                 2 |              0.2674  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5404 | >20%                    |                 2 |              0.2702  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5448 | 15-20%                  |                 5 |              0.10896 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5461 | 15-20%                  |                 5 |              0.10922 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5482 | 10-15%                  |                10 |              0.05482 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5551 | >20%                    |                 2 |              0.27755 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5565 | >20%                    |                 2 |              0.27825 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5756 | >20%                    |                 5 |              0.11512 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5773 | >20%                    |                 5 |              0.11546 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5929 | >20%                    |                 5 |              0.11858 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5939 | 10-15%                  |                 2 |              0.29695 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5985 | 10-15%                  |                 2 |              0.29925 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6002 | >20%                    |                 5 |              0.12004 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6032 | >20%                    |                 5 |              0.12064 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6094 | 15-20%                  |                 5 |              0.12188 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6101 | >20%                    |                10 |              0.06101 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6168 | >20%                    |                 2 |              0.3084  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6207 | 10-15%                  |                 5 |              0.12414 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6231 | 10-15%                  |                 5 |              0.12462 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6243 | >20%                    |                 2 |              0.31215 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.625  | 15-20%                  |                 5 |              0.125   |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6275 | >20%                    |                 5 |              0.1255  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6343 | 15-20%                  |                 5 |              0.12686 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6385 | 15-20%                  |                 2 |              0.31925 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6432 | 15-20%                  |                 5 |              0.12864 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6451 | >20%                    |                 5 |              0.12902 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6579 | >20%                    |                 5 |              0.13158 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6627 | >20%                    |                 5 |              0.13254 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6736 | 10-15%                  |                10 |              0.06736 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.675  | 15-20%                  |                 5 |              0.135   |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6757 | 15-20%                  |                 5 |              0.13514 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6902 | 15-20%                  |                 2 |              0.3451  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6958 | <5%                     |                 2 |              0.3479  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6973 | >20%                    |                 5 |              0.13946 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6979 | 15-20%                  |                10 |              0.06979 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7028 | 10-15%                  |                10 |              0.07028 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.705  | 5-10%                   |                10 |              0.0705  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7065 | 15-20%                  |                 5 |              0.1413  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7135 | >20%                    |                10 |              0.07135 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7221 | >20%                    |                10 |              0.07221 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7236 | >20%                    |                 5 |              0.14472 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7379 | >20%                    |                10 |              0.07379 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.74   | >20%                    |                10 |              0.074   |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7493 | 5-10%                   |                 2 |              0.37465 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7659 | >20%                    |                10 |              0.07659 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7682 | >20%                    |                 5 |              0.15364 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.77   | >20%                    |                10 |              0.077   |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7759 | >20%                    |                10 |              0.07759 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7871 | 5-10%                   |                 5 |              0.15742 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8091 | 15-20%                  |                 5 |              0.16182 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8234 | >20%                    |                 5 |              0.16468 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8239 | >20%                    |                 5 |              0.16478 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8275 | >20%                    |                 5 |              0.1655  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8425 | >20%                    |                10 |              0.08425 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8492 | >20%                    |                10 |              0.08492 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8622 | >20%                    |                10 |              0.08622 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8712 | >20%                    |                 5 |              0.17424 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8781 | <5%                     |                10 |              0.08781 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8817 | <5%                     |                10 |              0.08817 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8832 | 5-10%                   |                10 |              0.08832 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9044 | >20%                    |                 2 |              0.4522  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9051 | 5-10%                   |                10 |              0.09051 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9122 | 5-10%                   |                10 |              0.09122 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9318 | 5-10%                   |                10 |              0.09318 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9361 | 5-10%                   |                10 |              0.09361 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9411 | 10-15%                  |                10 |              0.09411 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9422 | >20%                    |                 2 |              0.4711  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9427 | 10-15%                  |                10 |              0.09427 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9434 | >20%                    |                10 |              0.09434 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9547 | 10-15%                  |                10 |              0.09547 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9711 | >20%                    |                10 |              0.09711 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.972  | <5%                     |                10 |              0.0972  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9911 | 15-20%                  |                10 |              0.09911 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9919 | >20%                    |                 5 |              0.19838 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0093 | 10-15%                  |                10 |              0.10093 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.01   | 15-20%                  |                10 |              0.101   |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0217 | 15-20%                  |                10 |              0.10217 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.026  | >20%                    |                10 |              0.1026  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0694 | >20%                    |                10 |              0.10694 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0992 | <5%                     |                10 |              0.10992 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1042 | >20%                    |                10 |              0.11042 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1173 | >20%                    |                10 |              0.11173 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1198 | >20%                    |                 2 |              0.5599  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1244 | >20%                    |                10 |              0.11244 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1254 | >20%                    |                 5 |              0.22508 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.13   | >20%                    |                10 |              0.113   |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1506 | >20%                    |                10 |              0.11506 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1549 | <5%                     |                 2 |              0.57745 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1756 | >20%                    |                10 |              0.11756 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1775 | >20%                    |                 2 |              0.58875 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2094 | 15-20%                  |                10 |              0.12094 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2239 | >20%                    |                 5 |              0.24478 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2456 | 5-10%                   |                 5 |              0.24912 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2461 | 10-15%                  |                10 |              0.12461 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2664 | >20%                    |                 5 |              0.25328 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3482 | >20%                    |                10 |              0.13482 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3746 | >20%                    |                 5 |              0.27492 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3806 | 15-20%                  |                 2 |              0.6903  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3807 | >20%                    |                10 |              0.13807 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.47   | >20%                    |                10 |              0.147   |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4742 | 15-20%                  |                 5 |              0.29484 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4891 | 5-10%                   |                 5 |              0.29782 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5137 | >20%                    |                10 |              0.15137 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5314 | >20%                    |                10 |              0.15314 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.557  | >20%                    |                10 |              0.1557  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.715  | >20%                    |                10 |              0.1715  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1189 | 10-15%                  |                10 |              0.21189 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2424 | 10-15%                  |                10 |              0.22424 |