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

Data correct as of 2025-05-28 01:54:13.690911, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1765 | >20%                    |                 2 |              0.08825 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1913 | >20%                    |                 2 |              0.09565 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 15-20%                  |                 5 |              0.039   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2034 | >20%                    |                 2 |              0.1017  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2227 | >20%                    |                 2 |              0.11135 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2317 | 5-10%                   |                 5 |              0.04634 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2325 | >20%                    |                 2 |              0.11625 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2387 | 5-10%                   |                 2 |              0.11935 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 10-15%                  |                10 |              0.02419 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2502 | <5%                     |                 2 |              0.1251  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2533 | >20%                    |                10 |              0.02533 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2552 | >20%                    |                 2 |              0.1276  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2576 | 15-20%                  |                 2 |              0.1288  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2592 | 10-15%                  |                 2 |              0.1296  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2643 | >20%                    |                 2 |              0.13215 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2661 | 10-15%                  |                 2 |              0.13305 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2684 | 15-20%                  |                 2 |              0.1342  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2733 | >20%                    |                 2 |              0.13665 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2805 | 15-20%                  |                 5 |              0.0561  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2845 | >20%                    |                 5 |              0.0569  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2897 | <5%                     |                 2 |              0.14485 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2938 | 15-20%                  |                 2 |              0.1469  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2939 | >20%                    |                 2 |              0.14695 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | <5%                     |                10 |              0.0294  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2969 | >20%                    |                10 |              0.02969 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3086 | 15-20%                  |                 2 |              0.1543  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3179 | 15-20%                  |                 2 |              0.15895 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3307 | >20%                    |                 2 |              0.16535 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3316 | 15-20%                  |                 2 |              0.1658  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3322 | >20%                    |                 5 |              0.06644 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3423 | >20%                    |                 2 |              0.17115 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3467 | >20%                    |                 5 |              0.06934 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3503 | >20%                    |                 2 |              0.17515 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3505 | >20%                    |                 5 |              0.0701  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3534 | >20%                    |                10 |              0.03534 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3542 | >20%                    |                10 |              0.03542 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3624 | 15-20%                  |                 2 |              0.1812  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3663 | 10-15%                  |                 5 |              0.07326 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3667 | 15-20%                  |                 2 |              0.18335 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3684 | >20%                    |                 2 |              0.1842  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3695 | 5-10%                   |                 2 |              0.18475 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3709 | >20%                    |                 5 |              0.07418 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3714 | >20%                    |                 5 |              0.07428 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3747 | 5-10%                   |                 2 |              0.18735 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3821 | >20%                    |                 2 |              0.19105 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3887 | <5%                     |                 2 |              0.19435 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4003 | >20%                    |                 2 |              0.20015 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4069 | >20%                    |                 2 |              0.20345 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4091 | <5%                     |                 5 |              0.08182 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4118 | 10-15%                  |                 5 |              0.08236 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4124 | 15-20%                  |                 2 |              0.2062  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4174 | 10-15%                  |                 2 |              0.2087  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4225 | >20%                    |                 2 |              0.21125 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4229 | <5%                     |                 2 |              0.21145 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.424  | >20%                    |                10 |              0.0424  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4249 | >20%                    |                 5 |              0.08498 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4337 | 15-20%                  |                 5 |              0.08674 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4398 | 5-10%                   |                 5 |              0.08796 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.44   | 15-20%                  |                 5 |              0.088   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4416 | >20%                    |                 5 |              0.08832 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4544 | >20%                    |                 2 |              0.2272  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4574 | >20%                    |                 2 |              0.2287  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4582 | 15-20%                  |                 5 |              0.09164 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4588 | 15-20%                  |                10 |              0.04588 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4592 | 15-20%                  |                 5 |              0.09184 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4595 | >20%                    |                 2 |              0.22975 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4639 | 10-15%                  |                 5 |              0.09278 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4669 | >20%                    |                 2 |              0.23345 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4766 | >20%                    |                 5 |              0.09532 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4783 | >20%                    |                 2 |              0.23915 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4867 | >20%                    |                 5 |              0.09734 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4882 | >20%                    |                 2 |              0.2441  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4902 | <5%                     |                 5 |              0.09804 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4934 | >20%                    |                 5 |              0.09868 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4934 | 15-20%                  |                 2 |              0.2467  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4963 | >20%                    |                 5 |              0.09926 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4969 | 10-15%                  |                 5 |              0.09938 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4974 | 15-20%                  |                10 |              0.04974 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4989 | <5%                     |                 5 |              0.09978 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5033 | <5%                     |                 5 |              0.10066 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.505  | >20%                    |                 5 |              0.101   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5051 | 5-10%                   |                 5 |              0.10102 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.518  | 15-20%                  |                 5 |              0.1036  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.521  | >20%                    |                 2 |              0.2605  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5235 | >20%                    |                 5 |              0.1047  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5251 | 15-20%                  |                10 |              0.05251 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5259 | >20%                    |                 2 |              0.26295 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5554 | >20%                    |                10 |              0.05554 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5581 | 10-15%                  |                10 |              0.05581 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5594 | >20%                    |                 5 |              0.11188 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5616 | 5-10%                   |                 5 |              0.11232 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5674 | >20%                    |                10 |              0.05674 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5711 | 10-15%                  |                 2 |              0.28555 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5727 | >20%                    |                 2 |              0.28635 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5762 | >20%                    |                 5 |              0.11524 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5809 | >20%                    |                 5 |              0.11618 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5911 | >20%                    |                 2 |              0.29555 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.595  | >20%                    |                 5 |              0.119   |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6003 | >20%                    |                10 |              0.06003 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6013 | >20%                    |                 5 |              0.12026 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6014 | 5-10%                   |                 2 |              0.3007  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6015 | >20%                    |                 5 |              0.1203  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6123 | 10-15%                  |                 5 |              0.12246 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6194 | 5-10%                   |                10 |              0.06194 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.632  | 5-10%                   |                 2 |              0.316   |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6454 | <5%                     |                10 |              0.06454 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6471 | >20%                    |                 5 |              0.12942 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6491 | >20%                    |                 2 |              0.32455 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6529 | <5%                     |                 5 |              0.13058 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6561 | 10-15%                  |                10 |              0.06561 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6573 | >20%                    |                 5 |              0.13146 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6615 | >20%                    |                 2 |              0.33075 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6686 | 10-15%                  |                 2 |              0.3343  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6701 | 15-20%                  |                 5 |              0.13402 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6786 | <5%                     |                10 |              0.06786 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6851 | >20%                    |                 2 |              0.34255 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6907 | 10-15%                  |                 5 |              0.13814 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7013 | >20%                    |                10 |              0.07013 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7162 | 10-15%                  |                10 |              0.07162 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.717  | <5%                     |                10 |              0.0717  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7403 | <5%                     |                 5 |              0.14806 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7416 | >20%                    |                10 |              0.07416 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.744  | >20%                    |                10 |              0.0744  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7447 | >20%                    |                 5 |              0.14894 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7481 | 10-15%                  |                 5 |              0.14962 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7519 | >20%                    |                10 |              0.07519 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.754  | >20%                    |                10 |              0.0754  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7618 | >20%                    |                10 |              0.07618 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7629 | >20%                    |                10 |              0.07629 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7761 | 10-15%                  |                10 |              0.07761 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7781 | >20%                    |                 5 |              0.15562 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7873 | >20%                    |                 5 |              0.15746 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8041 | 15-20%                  |                10 |              0.08041 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8155 | 10-15%                  |                 5 |              0.1631  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8251 | >20%                    |                10 |              0.08251 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8316 | >20%                    |                10 |              0.08316 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8388 | >20%                    |                10 |              0.08388 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8475 | 15-20%                  |                10 |              0.08475 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8498 | <5%                     |                10 |              0.08498 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8511 | 5-10%                   |                10 |              0.08511 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8935 | >20%                    |                10 |              0.08935 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8984 | >20%                    |                10 |              0.08984 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9173 | 5-10%                   |                 2 |              0.45865 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9196 | 10-15%                  |                 5 |              0.18392 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9222 | >20%                    |                10 |              0.09222 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9247 | >20%                    |                 2 |              0.46235 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9323 | >20%                    |                10 |              0.09323 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9444 | >20%                    |                10 |              0.09444 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9634 | >20%                    |                 5 |              0.19268 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9669 | >20%                    |                10 |              0.09669 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9805 | >20%                    |                 2 |              0.49025 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9904 | <5%                     |                10 |              0.09904 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9989 | >20%                    |                 2 |              0.49945 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9994 | >20%                    |                 5 |              0.19988 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0141 | >20%                    |                10 |              0.10141 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0176 | 10-15%                  |                 5 |              0.20352 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.062  | >20%                    |                 5 |              0.2124  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0631 | 15-20%                  |                10 |              0.10631 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0655 | 5-10%                   |                10 |              0.10655 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0727 | <5%                     |                10 |              0.10727 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0758 | 15-20%                  |                10 |              0.10758 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1061 | <5%                     |                 2 |              0.55305 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1742 | 15-20%                  |                10 |              0.11742 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.242  | 10-15%                  |                10 |              0.1242  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2544 | 5-10%                   |                10 |              0.12544 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2847 | >20%                    |                10 |              0.12847 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2864 | 15-20%                  |                10 |              0.12864 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2922 | >20%                    |                10 |              0.12922 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3401 | >20%                    |                10 |              0.13401 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3817 | 10-15%                  |                10 |              0.13817 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4033 | >20%                    |                 5 |              0.28066 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4118 | <5%                     |                 5 |              0.28236 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4606 | >20%                    |                 2 |              0.7303  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5486 | >20%                    |                10 |              0.15486 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0221 | <5%                     |                10 |              0.20221 |