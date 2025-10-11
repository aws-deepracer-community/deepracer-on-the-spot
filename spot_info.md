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

Data correct as of 2025-10-11 01:40:39.648065, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2101 | >20%                    |                 5 |              0.04202 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2131 | 10-15%                  |                 2 |              0.10655 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2254 | >20%                    |                 2 |              0.1127  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2438 | >20%                    |                 2 |              0.1219  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2452 | >20%                    |                 2 |              0.1226  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2504 | >20%                    |                 2 |              0.1252  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2549 | 5-10%                   |                 2 |              0.12745 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2604 | >20%                    |                 2 |              0.1302  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.282  | 5-10%                   |                 2 |              0.141   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2831 | 10-15%                  |                 2 |              0.14155 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.291  | >20%                    |                 2 |              0.1455  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2929 | 15-20%                  |                 2 |              0.14645 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3081 | >20%                    |                 2 |              0.15405 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3188 | >20%                    |                 5 |              0.06376 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3264 | >20%                    |                10 |              0.03264 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3287 | 15-20%                  |                 2 |              0.16435 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.331  | 10-15%                  |                 2 |              0.1655  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3383 | >20%                    |                 2 |              0.16915 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3415 | >20%                    |                 2 |              0.17075 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3442 | >20%                    |                 2 |              0.1721  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3503 | >20%                    |                 2 |              0.17515 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3686 | >20%                    |                 2 |              0.1843  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.378  | >20%                    |                 5 |              0.0756  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3794 | >20%                    |                 5 |              0.07588 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3816 | >20%                    |                 2 |              0.1908  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3839 | 15-20%                  |                 2 |              0.19195 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3869 | >20%                    |                 2 |              0.19345 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3889 | >20%                    |                 2 |              0.19445 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4    | >20%                    |                 2 |              0.2     |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4037 | >20%                    |                 5 |              0.08074 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4037 | >20%                    |                 5 |              0.08074 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4063 | 15-20%                  |                 2 |              0.20315 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4211 | 5-10%                   |                 2 |              0.21055 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4265 | >20%                    |                 2 |              0.21325 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4271 | 5-10%                   |                 5 |              0.08542 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4274 | 5-10%                   |                 2 |              0.2137  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.428  | >20%                    |                 5 |              0.0856  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4333 | >20%                    |                 2 |              0.21665 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4358 | >20%                    |                 5 |              0.08716 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4403 | >20%                    |                 2 |              0.22015 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4436 | >20%                    |                 5 |              0.08872 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4517 | >20%                    |                 2 |              0.22585 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4534 | >20%                    |                 2 |              0.2267  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4566 | >20%                    |                 5 |              0.09132 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4576 | >20%                    |                 5 |              0.09152 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4604 | 10-15%                  |                 5 |              0.09208 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4634 | 10-15%                  |                 2 |              0.2317  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4656 | <5%                     |                 2 |              0.2328  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4762 | 15-20%                  |                 5 |              0.09524 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4771 | >20%                    |                 2 |              0.23855 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4848 | >20%                    |                 2 |              0.2424  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4887 | >20%                    |                 2 |              0.24435 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4903 | >20%                    |                 5 |              0.09806 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4939 | 10-15%                  |                 2 |              0.24695 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.496  | >20%                    |                 5 |              0.0992  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5071 | >20%                    |                 2 |              0.25355 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5266 | >20%                    |                 5 |              0.10532 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5369 | >20%                    |                 5 |              0.10738 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5388 | >20%                    |                 5 |              0.10776 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5546 | >20%                    |                 5 |              0.11092 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5561 | 5-10%                   |                 2 |              0.27805 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5602 | >20%                    |                 2 |              0.2801  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5615 | >20%                    |                 5 |              0.1123  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5674 | >20%                    |                 5 |              0.11348 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.586  | >20%                    |                 2 |              0.293   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5878 | 10-15%                  |                 2 |              0.2939  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5883 | >20%                    |                 5 |              0.11766 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5884 | >20%                    |                 5 |              0.11768 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6001 | 15-20%                  |                 2 |              0.30005 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6041 | >20%                    |                 5 |              0.12082 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6047 | 15-20%                  |                10 |              0.06047 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6153 | >20%                    |                10 |              0.06153 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6209 | >20%                    |                10 |              0.06209 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.621  | 10-15%                  |                 5 |              0.1242  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6229 | >20%                    |                 2 |              0.31145 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6264 | >20%                    |                 5 |              0.12528 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6272 | >20%                    |                 5 |              0.12544 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6277 | >20%                    |                 5 |              0.12554 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6282 | >20%                    |                 5 |              0.12564 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6334 | 10-15%                  |                 5 |              0.12668 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6343 | >20%                    |                 5 |              0.12686 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6379 | >20%                    |                 2 |              0.31895 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6401 | >20%                    |                 5 |              0.12802 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6439 | 15-20%                  |                 2 |              0.32195 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6486 | 15-20%                  |                 5 |              0.12972 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6556 | 15-20%                  |                 5 |              0.13112 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6567 | <5%                     |                10 |              0.06567 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6699 | >20%                    |                 5 |              0.13398 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6784 | >20%                    |                 5 |              0.13568 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6824 | >20%                    |                 5 |              0.13648 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6875 | 15-20%                  |                10 |              0.06875 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6935 | 15-20%                  |                10 |              0.06935 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6965 | >20%                    |                 5 |              0.1393  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7007 | 15-20%                  |                 5 |              0.14014 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7016 | >20%                    |                 2 |              0.3508  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7093 | >20%                    |                10 |              0.07093 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7204 | >20%                    |                 5 |              0.14408 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7214 | >20%                    |                10 |              0.07214 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7222 | 15-20%                  |                10 |              0.07222 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7225 | >20%                    |                 5 |              0.1445  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.748  | >20%                    |                 5 |              0.1496  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7535 | >20%                    |                10 |              0.07535 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7675 | >20%                    |                10 |              0.07675 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7717 | 15-20%                  |                10 |              0.07717 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7765 | 5-10%                   |                10 |              0.07765 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7775 | >20%                    |                 5 |              0.1555  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7826 | >20%                    |                 2 |              0.3913  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7869 | 10-15%                  |                 2 |              0.39345 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7902 | >20%                    |                 5 |              0.15804 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7992 | >20%                    |                10 |              0.07992 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8035 | >20%                    |                10 |              0.08035 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8089 | 15-20%                  |                 5 |              0.16178 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8101 | >20%                    |                 5 |              0.16202 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8122 | <5%                     |                10 |              0.08122 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8165 | >20%                    |                10 |              0.08165 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8294 | 15-20%                  |                10 |              0.08294 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8309 | 10-15%                  |                 2 |              0.41545 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8392 | >20%                    |                 5 |              0.16784 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8463 | >20%                    |                10 |              0.08463 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8551 | >20%                    |                10 |              0.08551 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8621 | <5%                     |                10 |              0.08621 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8631 | 10-15%                  |                 5 |              0.17262 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8679 | 15-20%                  |                10 |              0.08679 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9001 | 15-20%                  |                10 |              0.09001 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9025 | >20%                    |                 5 |              0.1805  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9179 | 15-20%                  |                10 |              0.09179 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9283 | >20%                    |                 5 |              0.18566 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9284 | 10-15%                  |                10 |              0.09284 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9323 | <5%                     |                10 |              0.09323 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9398 | >20%                    |                 2 |              0.4699  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9445 | 5-10%                   |                10 |              0.09445 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9548 | 10-15%                  |                10 |              0.09548 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9698 | >20%                    |                10 |              0.09698 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9824 | >20%                    |                10 |              0.09824 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9906 | 5-10%                   |                10 |              0.09906 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9984 | 15-20%                  |                10 |              0.09984 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0123 | >20%                    |                 2 |              0.50615 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0141 | 10-15%                  |                10 |              0.10141 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.021  | >20%                    |                 2 |              0.5105  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0305 | >20%                    |                 5 |              0.2061  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0355 | >20%                    |                 5 |              0.2071  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0559 | >20%                    |                10 |              0.10559 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0604 | >20%                    |                10 |              0.10604 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0873 | >20%                    |                10 |              0.10873 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0875 | 15-20%                  |                10 |              0.10875 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0883 | <5%                     |                10 |              0.10883 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.103  | >20%                    |                10 |              0.1103  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1177 | 10-15%                  |                 2 |              0.55885 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1306 | >20%                    |                 5 |              0.22612 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1329 | 10-15%                  |                10 |              0.11329 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1453 | >20%                    |                10 |              0.11453 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1553 | >20%                    |                 5 |              0.23106 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.17   | 5-10%                   |                10 |              0.117   |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1727 | 5-10%                   |                10 |              0.11727 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.174  | 15-20%                  |                10 |              0.1174  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2233 | >20%                    |                10 |              0.12233 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2529 | 5-10%                   |                 2 |              0.62645 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2924 | 10-15%                  |                10 |              0.12924 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2953 | >20%                    |                10 |              0.12953 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4017 | 10-15%                  |                 5 |              0.28034 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4347 | >20%                    |                10 |              0.14347 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5756 | >20%                    |                10 |              0.15756 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6204 | 10-15%                  |                 5 |              0.32408 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.675  | >20%                    |                10 |              0.1675  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7135 | >20%                    |                10 |              0.17135 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0902 | 10-15%                  |                10 |              0.20902 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.271  | 15-20%                  |                10 |              0.2271  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.5834 | >20%                    |                10 |              0.25834 |