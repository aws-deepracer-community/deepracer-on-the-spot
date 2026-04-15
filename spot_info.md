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

Data correct as of 2026-04-15 02:54:44.171137, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1795 | >20%                    |                 2 |              0.08975 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1923 | 15-20%                  |                 2 |              0.09615 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2054 | >20%                    |                 2 |              0.1027  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2291 | 15-20%                  |                 5 |              0.04582 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2305 | >20%                    |                 2 |              0.11525 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2377 | >20%                    |                 2 |              0.11885 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2462 | >20%                    |                 2 |              0.1231  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2589 | >20%                    |                 2 |              0.12945 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2703 | 5-10%                   |                10 |              0.02703 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2814 | 15-20%                  |                 2 |              0.1407  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.287  | 15-20%                  |                 5 |              0.0574  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.301  | 10-15%                  |                 2 |              0.1505  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.308  | >20%                    |                 2 |              0.154   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3144 | >20%                    |                 5 |              0.06288 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3154 | >20%                    |                 2 |              0.1577  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3207 | 15-20%                  |                 5 |              0.06414 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.323  | >20%                    |                 5 |              0.0646  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3295 | 15-20%                  |                 2 |              0.16475 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.33   | >20%                    |                10 |              0.033   |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3306 | 5-10%                   |                10 |              0.03306 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.335  | <5%                     |                 2 |              0.1675  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.336  | 10-15%                  |                 2 |              0.168   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3361 | >20%                    |                 5 |              0.06722 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.341  | 10-15%                  |                 2 |              0.1705  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3512 | 10-15%                  |                 2 |              0.1756  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3532 | >20%                    |                10 |              0.03532 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3612 | >20%                    |                 2 |              0.1806  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3615 | >20%                    |                 5 |              0.0723  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3618 | 5-10%                   |                10 |              0.03618 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3698 | >20%                    |                 5 |              0.07396 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3716 | >20%                    |                 2 |              0.1858  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3776 | >20%                    |                 2 |              0.1888  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3915 | >20%                    |                 2 |              0.19575 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3992 | >20%                    |                 5 |              0.07984 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4049 | >20%                    |                 5 |              0.08098 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4111 | <5%                     |                 2 |              0.20555 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4114 | >20%                    |                 2 |              0.2057  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4158 | >20%                    |                 5 |              0.08316 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4189 | >20%                    |                 2 |              0.20945 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4281 | <5%                     |                10 |              0.04281 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4288 | >20%                    |                 2 |              0.2144  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4293 | 15-20%                  |                 2 |              0.21465 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4309 | >20%                    |                 5 |              0.08618 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4335 | <5%                     |                 2 |              0.21675 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4348 | >20%                    |                 2 |              0.2174  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4355 | >20%                    |                 5 |              0.0871  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4415 | >20%                    |                 2 |              0.22075 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4422 | >20%                    |                 5 |              0.08844 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.445  | 10-15%                  |                 2 |              0.2225  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4492 | 15-20%                  |                 2 |              0.2246  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4529 | >20%                    |                 5 |              0.09058 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4547 | 15-20%                  |                 2 |              0.22735 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.458  | >20%                    |                 5 |              0.0916  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4592 | >20%                    |                 2 |              0.2296  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4634 | >20%                    |                 5 |              0.09268 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4727 | >20%                    |                 2 |              0.23635 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.479  | >20%                    |                 5 |              0.0958  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4817 | >20%                    |                 5 |              0.09634 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4835 | >20%                    |                 5 |              0.0967  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4944 | >20%                    |                10 |              0.04944 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5022 | >20%                    |                 2 |              0.2511  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5057 | >20%                    |                 2 |              0.25285 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5083 | >20%                    |                 5 |              0.10166 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5272 | >20%                    |                 5 |              0.10544 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5273 | 5-10%                   |                 5 |              0.10546 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5291 | >20%                    |                 2 |              0.26455 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.54   | >20%                    |                 5 |              0.108   |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5426 | >20%                    |                10 |              0.05426 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5427 | 15-20%                  |                 5 |              0.10854 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5462 | >20%                    |                 5 |              0.10924 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5599 | >20%                    |                10 |              0.05599 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5641 | <5%                     |                 5 |              0.11282 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5654 | 5-10%                   |                 5 |              0.11308 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5665 | 5-10%                   |                 2 |              0.28325 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5683 | >20%                    |                 5 |              0.11366 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5685 | 5-10%                   |                 2 |              0.28425 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5725 | >20%                    |                 5 |              0.1145  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5823 | 10-15%                  |                 5 |              0.11646 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5854 | >20%                    |                 2 |              0.2927  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5941 | >20%                    |                10 |              0.05941 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5994 | >20%                    |                10 |              0.05994 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6166 | >20%                    |                 5 |              0.12332 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6166 | >20%                    |                10 |              0.06166 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6219 | >20%                    |                 2 |              0.31095 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6259 | >20%                    |                 5 |              0.12518 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6288 | 10-15%                  |                 2 |              0.3144  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6357 | >20%                    |                 5 |              0.12714 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.648  | >20%                    |                10 |              0.0648  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6613 | >20%                    |                 2 |              0.33065 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6641 | >20%                    |                10 |              0.06641 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6665 | >20%                    |                 5 |              0.1333  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6886 | >20%                    |                 2 |              0.3443  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6967 | >20%                    |                10 |              0.06967 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7177 | >20%                    |                10 |              0.07177 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.718  | >20%                    |                 5 |              0.1436  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.7426 | >20%                    |                 5 |              0.14852 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7442 | >20%                    |                10 |              0.07442 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7454 | >20%                    |                10 |              0.07454 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7525 | >20%                    |                 5 |              0.1505  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7572 | 5-10%                   |                10 |              0.07572 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7736 | >20%                    |                10 |              0.07736 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7856 | >20%                    |                 5 |              0.15712 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7878 | 15-20%                  |                10 |              0.07878 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7902 | >20%                    |                10 |              0.07902 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7937 | >20%                    |                10 |              0.07937 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.795  | >20%                    |                 2 |              0.3975  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7958 | >20%                    |                10 |              0.07958 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8016 | >20%                    |                 5 |              0.16032 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8067 | 5-10%                   |                10 |              0.08067 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8139 | >20%                    |                 5 |              0.16278 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8159 | >20%                    |                 2 |              0.40795 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8284 | >20%                    |                10 |              0.08284 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8345 | >20%                    |                 5 |              0.1669  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8526 | 15-20%                  |                10 |              0.08526 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8528 | 5-10%                   |                 2 |              0.4264  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8565 | >20%                    |                 5 |              0.1713  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8771 | 15-20%                  |                10 |              0.08771 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8805 | 15-20%                  |                10 |              0.08805 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8873 | >20%                    |                10 |              0.08873 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9013 | >20%                    |                 5 |              0.18026 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.903  | >20%                    |                10 |              0.0903  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9237 | >20%                    |                10 |              0.09237 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9243 | >20%                    |                10 |              0.09243 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9282 | >20%                    |                10 |              0.09282 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.939  | >20%                    |                10 |              0.0939  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9569 | 15-20%                  |                10 |              0.09569 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9666 | >20%                    |                10 |              0.09666 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9687 | 10-15%                  |                10 |              0.09687 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9931 | >20%                    |                 5 |              0.19862 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.998  | 5-10%                   |                10 |              0.0998  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0416 | >20%                    |                 5 |              0.20832 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0501 | 10-15%                  |                 2 |              0.52505 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.071  | 15-20%                  |                10 |              0.1071  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1128 | 10-15%                  |                10 |              0.11128 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1148 | >20%                    |                10 |              0.11148 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1276 | >20%                    |                10 |              0.11276 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1279 | >20%                    |                10 |              0.11279 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.248  | >20%                    |                 5 |              0.2496  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2814 | >20%                    |                 2 |              0.6407  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3025 | >20%                    |                 5 |              0.2605  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3073 | >20%                    |                 5 |              0.26146 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.326  | >20%                    |                10 |              0.1326  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3419 |                         |                 5 |              0.26838 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3449 | 15-20%                  |                10 |              0.13449 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.464  | 15-20%                  |                10 |              0.1464  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5652 | >20%                    |                10 |              0.15652 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.5816 |                         |                 2 |              0.7908  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6026 | 15-20%                  |                 5 |              0.32052 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7142 | >20%                    |                10 |              0.17142 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.7188 | 5-10%                   |                 2 |              0.8594  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.7932 |                         |                10 |              0.17932 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.2716 | >20%                    |                10 |              0.32716 |