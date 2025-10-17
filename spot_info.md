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

Data correct as of 2025-10-17 01:45:48.844306, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0886 | 5-10%                   |                 2 |              0.0443  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1271 | 10-15%                  |                 2 |              0.06355 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1339 | >20%                    |                 2 |              0.06695 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.172  | >20%                    |                 5 |              0.0344  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2217 | >20%                    |                 2 |              0.11085 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2265 | 10-15%                  |                 2 |              0.11325 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2304 | >20%                    |                 5 |              0.04608 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2429 | >20%                    |                 2 |              0.12145 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2449 | >20%                    |                 2 |              0.12245 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2469 | >20%                    |                 2 |              0.12345 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2611 | 5-10%                   |                 2 |              0.13055 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2619 | 5-10%                   |                10 |              0.02619 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.263  | >20%                    |                 2 |              0.1315  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.264  | 5-10%                   |                 2 |              0.132   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2653 | >20%                    |                 2 |              0.13265 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2729 | 10-15%                  |                 2 |              0.13645 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2908 | >20%                    |                 2 |              0.1454  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.304  | >20%                    |                 2 |              0.152   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3093 | >20%                    |                 5 |              0.06186 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3251 | 15-20%                  |                 2 |              0.16255 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3301 | >20%                    |                 2 |              0.16505 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3363 | 10-15%                  |                 2 |              0.16815 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3403 | 15-20%                  |                 2 |              0.17015 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3417 | >20%                    |                 2 |              0.17085 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3443 | >20%                    |                 5 |              0.06886 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3546 | >20%                    |                 2 |              0.1773  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.36   | >20%                    |                 2 |              0.18    |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.366  | 15-20%                  |                 2 |              0.183   |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3813 | >20%                    |                 2 |              0.19065 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3813 | 5-10%                   |                10 |              0.03813 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3845 | >20%                    |                 5 |              0.0769  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3854 | >20%                    |                 2 |              0.1927  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3876 | >20%                    |                 2 |              0.1938  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3972 | 10-15%                  |                10 |              0.03972 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3977 | >20%                    |                 5 |              0.07954 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4004 | >20%                    |                 2 |              0.2002  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4019 | >20%                    |                 2 |              0.20095 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4019 | >20%                    |                10 |              0.04019 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.403  | >20%                    |                 5 |              0.0806  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4104 | >20%                    |                 2 |              0.2052  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4122 | >20%                    |                 5 |              0.08244 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4129 | 5-10%                   |                 2 |              0.20645 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4149 | 5-10%                   |                 5 |              0.08298 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4242 | >20%                    |                 2 |              0.2121  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4263 | >20%                    |                 2 |              0.21315 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4265 | 15-20%                  |                 2 |              0.21325 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4322 | >20%                    |                 5 |              0.08644 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4323 | 5-10%                   |                 2 |              0.21615 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4406 | >20%                    |                10 |              0.04406 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4426 | >20%                    |                 2 |              0.2213  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4428 | >20%                    |                 5 |              0.08856 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4467 | <5%                     |                 2 |              0.22335 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4598 | >20%                    |                 2 |              0.2299  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4618 | >20%                    |                 5 |              0.09236 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4625 | >20%                    |                 5 |              0.0925  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4648 | >20%                    |                 2 |              0.2324  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4687 | >20%                    |                 5 |              0.09374 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.469  | 10-15%                  |                 2 |              0.2345  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4692 | >20%                    |                 5 |              0.09384 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4776 | 15-20%                  |                 5 |              0.09552 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4877 | >20%                    |                 2 |              0.24385 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4921 | >20%                    |                 2 |              0.24605 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4982 | >20%                    |                 2 |              0.2491  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5035 | >20%                    |                 5 |              0.1007  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5058 | 10-15%                  |                 5 |              0.10116 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5143 | >20%                    |                 5 |              0.10286 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5182 | >20%                    |                 2 |              0.2591  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5366 | >20%                    |                 5 |              0.10732 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5418 | >20%                    |                 5 |              0.10836 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5446 | >20%                    |                 5 |              0.10892 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5483 | >20%                    |                 5 |              0.10966 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5587 | 5-10%                   |                 2 |              0.27935 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5717 | >20%                    |                 2 |              0.28585 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5719 | >20%                    |                 5 |              0.11438 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5814 | >20%                    |                 5 |              0.11628 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5853 | <5%                     |                10 |              0.05853 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5861 | >20%                    |                 5 |              0.11722 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5914 | 10-15%                  |                 2 |              0.2957  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5975 | >20%                    |                 5 |              0.1195  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6009 | >20%                    |                 5 |              0.12018 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6029 | 15-20%                  |                 2 |              0.30145 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6133 | >20%                    |                 5 |              0.12266 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6196 | >20%                    |                 5 |              0.12392 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6238 | >20%                    |                 5 |              0.12476 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6258 | >20%                    |                 5 |              0.12516 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6317 | >20%                    |                 5 |              0.12634 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6365 | 10-15%                  |                 5 |              0.1273  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6373 | 10-15%                  |                 5 |              0.12746 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6382 | >20%                    |                10 |              0.06382 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.642  | >20%                    |                 2 |              0.321   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6425 | 15-20%                  |                 5 |              0.1285  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6477 | 15-20%                  |                10 |              0.06477 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.648  | >20%                    |                 5 |              0.1296  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6544 | 15-20%                  |                10 |              0.06544 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6548 | 15-20%                  |                 2 |              0.3274  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.655  | 15-20%                  |                 5 |              0.131   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6584 | >20%                    |                 2 |              0.3292  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6636 | >20%                    |                 5 |              0.13272 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6727 | >20%                    |                 5 |              0.13454 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6894 | >20%                    |                 2 |              0.3447  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6938 | >20%                    |                10 |              0.06938 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7002 | >20%                    |                10 |              0.07002 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7112 | <5%                     |                10 |              0.07112 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7143 | 15-20%                  |                10 |              0.07143 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7178 | 15-20%                  |                 5 |              0.14356 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7192 | >20%                    |                10 |              0.07192 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7197 | >20%                    |                 5 |              0.14394 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.722  | 15-20%                  |                10 |              0.0722  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7261 | >20%                    |                 5 |              0.14522 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7323 | >20%                    |                 5 |              0.14646 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7378 | >20%                    |                10 |              0.07378 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7383 | >20%                    |                 5 |              0.14766 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7387 | 15-20%                  |                10 |              0.07387 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7589 | >20%                    |                10 |              0.07589 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7617 | >20%                    |                 5 |              0.15234 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.795  | >20%                    |                 2 |              0.3975  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.795  | >20%                    |                10 |              0.0795  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8034 | 15-20%                  |                10 |              0.08034 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8051 | 5-10%                   |                10 |              0.08051 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8104 | >20%                    |                 5 |              0.16208 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8135 | >20%                    |                10 |              0.08135 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8141 | 10-15%                  |                 2 |              0.40705 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8205 | >20%                    |                10 |              0.08205 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8233 | 10-15%                  |                 2 |              0.41165 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.824  | >20%                    |                 5 |              0.1648  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8248 | 15-20%                  |                 5 |              0.16496 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8285 | 15-20%                  |                10 |              0.08285 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8553 | 10-15%                  |                 5 |              0.17106 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8557 | >20%                    |                10 |              0.08557 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.867  | >20%                    |                 5 |              0.1734  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8707 | >20%                    |                10 |              0.08707 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8726 | 15-20%                  |                10 |              0.08726 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8941 | >20%                    |                 5 |              0.17882 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8953 | <5%                     |                10 |              0.08953 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9019 | <5%                     |                10 |              0.09019 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9083 | >20%                    |                10 |              0.09083 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9206 | >20%                    |                 2 |              0.4603  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.926  | 10-15%                  |                10 |              0.0926  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9262 | 15-20%                  |                10 |              0.09262 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9425 | >20%                    |                10 |              0.09425 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9471 | 10-15%                  |                10 |              0.09471 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9688 | 15-20%                  |                10 |              0.09688 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9738 | >20%                    |                 2 |              0.4869  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.975  | 5-10%                   |                10 |              0.0975  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0003 | 15-20%                  |                10 |              0.10003 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0145 | >20%                    |                 2 |              0.50725 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0373 | 10-15%                  |                10 |              0.10373 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0397 | >20%                    |                 5 |              0.20794 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0763 | >20%                    |                10 |              0.10763 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0891 | >20%                    |                10 |              0.10891 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0908 | 15-20%                  |                10 |              0.10908 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0973 | 10-15%                  |                 2 |              0.54865 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1011 | >20%                    |                10 |              0.11011 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1069 | >20%                    |                10 |              0.11069 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1253 | >20%                    |                 5 |              0.22506 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1268 | <5%                     |                10 |              0.11268 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1308 | >20%                    |                10 |              0.11308 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1313 | >20%                    |                 5 |              0.22626 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1409 | 10-15%                  |                10 |              0.11409 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1541 | >20%                    |                10 |              0.11541 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1727 | 5-10%                   |                10 |              0.11727 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1727 | >20%                    |                10 |              0.11727 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1779 | >20%                    |                 5 |              0.23558 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1878 | 5-10%                   |                10 |              0.11878 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2728 | 10-15%                  |                10 |              0.12728 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2831 | 5-10%                   |                 2 |              0.64155 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3169 | >20%                    |                10 |              0.13169 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.399  | 10-15%                  |                 5 |              0.2798  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6222 | >20%                    |                10 |              0.16222 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6373 | >20%                    |                10 |              0.16373 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6651 | 10-15%                  |                 5 |              0.33302 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7115 | >20%                    |                10 |              0.17115 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.0728 | >20%                    |                10 |              0.20728 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1779 | 10-15%                  |                10 |              0.21779 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3775 | 15-20%                  |                10 |              0.23775 |