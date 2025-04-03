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

Data correct as of 2025-04-03 01:45:23.471845, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.124  | 15-20%                  |                 2 |              0.062   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1277 | 5-10%                   |                 5 |              0.02554 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.14   | 10-15%                  |                 2 |              0.07    |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | 10-15%                  |                 5 |              0.03178 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 5-10%                   |                 5 |              0.039   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.201  | <5%                     |                 2 |              0.1005  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2176 | >20%                    |                 2 |              0.1088  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2194 | 15-20%                  |                 2 |              0.1097  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2331 | 15-20%                  |                 2 |              0.11655 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 10-15%                  |                10 |              0.02395 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 15-20%                  |                10 |              0.02419 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2451 | >20%                    |                 2 |              0.12255 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2472 | 15-20%                  |                 2 |              0.1236  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2495 | >20%                    |                 2 |              0.12475 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2663 | 10-15%                  |                 2 |              0.13315 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2712 | >20%                    |                 2 |              0.1356  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2749 | 5-10%                   |                 2 |              0.13745 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2805 | <5%                     |                 2 |              0.14025 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2859 | <5%                     |                 2 |              0.14295 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2896 | 5-10%                   |                 2 |              0.1448  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | <5%                     |                10 |              0.0294  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2946 | 15-20%                  |                 2 |              0.1473  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.295  | 10-15%                  |                10 |              0.0295  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2962 | <5%                     |                 2 |              0.1481  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2995 | 10-15%                  |                 2 |              0.14975 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3074 | 10-15%                  |                 2 |              0.1537  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3124 | >20%                    |                 2 |              0.1562  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3164 | 15-20%                  |                 5 |              0.06328 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3186 | 10-15%                  |                 5 |              0.06372 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3319 | 10-15%                  |                 5 |              0.06638 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3344 | 15-20%                  |                10 |              0.03344 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3459 | >20%                    |                 2 |              0.17295 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3464 | 10-15%                  |                 5 |              0.06928 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.351  | 5-10%                   |                 5 |              0.0702  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3519 | >20%                    |                 2 |              0.17595 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.352  | >20%                    |                 5 |              0.0704  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3616 | >20%                    |                 2 |              0.1808  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3697 | >20%                    |                 2 |              0.18485 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3707 | >20%                    |                 2 |              0.18535 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3732 | <5%                     |                 2 |              0.1866  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.375  | <5%                     |                 2 |              0.1875  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3765 | >20%                    |                10 |              0.03765 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3851 | >20%                    |                 2 |              0.19255 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3862 | >20%                    |                10 |              0.03862 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3879 | >20%                    |                 5 |              0.07758 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3979 | 10-15%                  |                 2 |              0.19895 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3987 | >20%                    |                 5 |              0.07974 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4015 | >20%                    |                 2 |              0.20075 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4016 | 15-20%                  |                 2 |              0.2008  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4023 | >20%                    |                 5 |              0.08046 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4059 | >20%                    |                 2 |              0.20295 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4114 | 15-20%                  |                 2 |              0.2057  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4152 | 10-15%                  |                10 |              0.04152 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4172 | >20%                    |                 2 |              0.2086  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4205 | >20%                    |                 2 |              0.21025 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4227 | <5%                     |                 2 |              0.21135 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4316 | 5-10%                   |                 5 |              0.08632 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4335 | >20%                    |                 2 |              0.21675 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4433 | >20%                    |                 5 |              0.08866 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4458 | 10-15%                  |                 5 |              0.08916 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4461 | <5%                     |                 2 |              0.22305 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4517 | 10-15%                  |                 5 |              0.09034 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4532 | <5%                     |                 2 |              0.2266  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4558 | >20%                    |                 2 |              0.2279  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4587 | 10-15%                  |                 2 |              0.22935 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4654 | >20%                    |                 5 |              0.09308 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4669 | >20%                    |                 5 |              0.09338 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4699 | <5%                     |                 5 |              0.09398 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4716 | <5%                     |                10 |              0.04716 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4719 | 5-10%                   |                 5 |              0.09438 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4721 | >20%                    |                 5 |              0.09442 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4732 | >20%                    |                 5 |              0.09464 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4787 | 5-10%                   |                 5 |              0.09574 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4802 | >20%                    |                10 |              0.04802 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.482  | 5-10%                   |                 2 |              0.241   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4874 | >20%                    |                 5 |              0.09748 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4884 | >20%                    |                 5 |              0.09768 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4942 | >20%                    |                10 |              0.04942 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4947 | >20%                    |                 5 |              0.09894 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5018 | >20%                    |                 5 |              0.10036 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5029 | >20%                    |                 5 |              0.10058 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.504  | >20%                    |                 2 |              0.252   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5044 | >20%                    |                 2 |              0.2522  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5074 | >20%                    |                 5 |              0.10148 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5114 | 5-10%                   |                 2 |              0.2557  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5117 | >20%                    |                 5 |              0.10234 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5197 | 15-20%                  |                 5 |              0.10394 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5328 | 5-10%                   |                 5 |              0.10656 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5418 | 10-15%                  |                 5 |              0.10836 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5435 | >20%                    |                 2 |              0.27175 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5475 | 15-20%                  |                 2 |              0.27375 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5481 | 15-20%                  |                 2 |              0.27405 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5493 | 5-10%                   |                 5 |              0.10986 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5499 | <5%                     |                 5 |              0.10998 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.5522 | >20%                    |                 2 |              0.2761  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5536 | 5-10%                   |                10 |              0.05536 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5633 | 5-10%                   |                 5 |              0.11266 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5692 | 15-20%                  |                 5 |              0.11384 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5705 | >20%                    |                 5 |              0.1141  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.572  | >20%                    |                 2 |              0.286   |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5855 | 15-20%                  |                 5 |              0.1171  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5902 | >20%                    |                 2 |              0.2951  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5904 | >20%                    |                 5 |              0.11808 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5916 | >20%                    |                 5 |              0.11832 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5922 | <5%                     |                 5 |              0.11844 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5928 | >20%                    |                 2 |              0.2964  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.5975 | <5%                     |                 5 |              0.1195  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6028 | <5%                     |                10 |              0.06028 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6028 | <5%                     |                10 |              0.06028 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6117 | >20%                    |                 5 |              0.12234 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6245 | >20%                    |                10 |              0.06245 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6252 | 10-15%                  |                10 |              0.06252 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6257 | 10-15%                  |                 5 |              0.12514 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6342 | >20%                    |                10 |              0.06342 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6426 | >20%                    |                 5 |              0.12852 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6476 | >20%                    |                10 |              0.06476 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6572 | <5%                     |                 5 |              0.13144 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6579 | 10-15%                  |                 5 |              0.13158 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6651 | >20%                    |                10 |              0.06651 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.674  | >20%                    |                10 |              0.0674  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6741 | >20%                    |                 2 |              0.33705 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6757 | 10-15%                  |                 2 |              0.33785 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6817 | 10-15%                  |                 5 |              0.13634 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6979 | >20%                    |                 5 |              0.13958 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7031 | >20%                    |                 5 |              0.14062 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.7242 | 10-15%                  |                10 |              0.07242 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7302 | <5%                     |                10 |              0.07302 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7309 | >20%                    |                10 |              0.07309 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7461 | <5%                     |                 2 |              0.37305 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7532 | >20%                    |                 2 |              0.3766  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7609 | >20%                    |                10 |              0.07609 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7658 | 15-20%                  |                 5 |              0.15316 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7737 | >20%                    |                10 |              0.07737 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.778  | <5%                     |                 5 |              0.1556  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7793 | >20%                    |                 5 |              0.15586 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7796 | >20%                    |                 2 |              0.3898  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7815 | 15-20%                  |                 5 |              0.1563  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7841 | <5%                     |                10 |              0.07841 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7846 | <5%                     |                10 |              0.07846 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7925 | 10-15%                  |                10 |              0.07925 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7935 | 5-10%                   |                10 |              0.07935 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8234 | 10-15%                  |                10 |              0.08234 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8256 | <5%                     |                10 |              0.08256 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8305 | 5-10%                   |                10 |              0.08305 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8411 | <5%                     |                10 |              0.08411 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8418 | >20%                    |                10 |              0.08418 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8435 | <5%                     |                10 |              0.08435 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8476 | 15-20%                  |                10 |              0.08476 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8487 | >20%                    |                10 |              0.08487 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8569 | >20%                    |                10 |              0.08569 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.863  | 15-20%                  |                10 |              0.0863  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8631 | >20%                    |                10 |              0.08631 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8677 | 10-15%                  |                10 |              0.08677 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8718 | 15-20%                  |                 5 |              0.17436 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8888 | <5%                     |                10 |              0.08888 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.932  | >20%                    |                 2 |              0.466   |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9522 | 10-15%                  |                 2 |              0.4761  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9557 | >20%                    |                 5 |              0.19114 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9736 | 5-10%                   |                10 |              0.09736 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.982  | 15-20%                  |                10 |              0.0982  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9827 | >20%                    |                10 |              0.09827 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9954 | 10-15%                  |                10 |              0.09954 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0005 | >20%                    |                 5 |              0.2001  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0692 | >20%                    |                10 |              0.10692 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1039 | <5%                     |                10 |              0.11039 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1362 | 15-20%                  |                10 |              0.11362 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1698 | 15-20%                  |                10 |              0.11698 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.171  | >20%                    |                 5 |              0.2342  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1716 | >20%                    |                10 |              0.11716 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1949 | <5%                     |                10 |              0.11949 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.209  | <5%                     |                 5 |              0.2418  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2454 | >20%                    |                 2 |              0.6227  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2876 | 15-20%                  |                10 |              0.12876 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3788 | >20%                    |                10 |              0.13788 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.381  | >20%                    |                 5 |              0.2762  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3819 | 5-10%                   |                 2 |              0.69095 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5951 | >20%                    |                10 |              0.15951 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6306 | 15-20%                  |                10 |              0.16306 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6514 | >20%                    |                10 |              0.16514 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8992 | <5%                     |                10 |              0.18992 |