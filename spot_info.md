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

Data correct as of 2026-07-12 03:21:46.893843, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1461 | >20%                    |                 2 |              0.07305 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.16   | >20%                    |                 2 |              0.08    |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2271 | 15-20%                  |                 2 |              0.11355 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2483 | >20%                    |                 2 |              0.12415 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2541 | >20%                    |                 2 |              0.12705 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2543 | >20%                    |                 2 |              0.12715 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2548 | >20%                    |                 2 |              0.1274  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2583 | >20%                    |                 2 |              0.12915 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2626 | >20%                    |                 2 |              0.1313  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2688 | >20%                    |                 2 |              0.1344  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2713 | 15-20%                  |                 2 |              0.13565 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2732 | 5-10%                   |                10 |              0.02732 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2811 | 15-20%                  |                 5 |              0.05622 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2885 | >20%                    |                 5 |              0.0577  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2955 | 10-15%                  |                 2 |              0.14775 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3005 | >20%                    |                 2 |              0.15025 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3013 | >20%                    |                 2 |              0.15065 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3102 | 15-20%                  |                 2 |              0.1551  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3223 | >20%                    |                 5 |              0.06446 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3434 | >20%                    |                 2 |              0.1717  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3466 | 15-20%                  |                 5 |              0.06932 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.352  | 15-20%                  |                 5 |              0.0704  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3569 | >20%                    |                 5 |              0.07138 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3601 | <5%                     |                 2 |              0.18005 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3651 | >20%                    |                 5 |              0.07302 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3663 | >20%                    |                 5 |              0.07326 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3682 | >20%                    |                10 |              0.03682 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3683 | >20%                    |                 2 |              0.18415 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3752 | 5-10%                   |                10 |              0.03752 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3762 | >20%                    |                 5 |              0.07524 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3821 | >20%                    |                 5 |              0.07642 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3925 | 10-15%                  |                 2 |              0.19625 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3946 | 5-10%                   |                10 |              0.03946 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4144 | 10-15%                  |                 2 |              0.2072  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4205 | >20%                    |                 2 |              0.21025 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4269 | >20%                    |                 2 |              0.21345 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4317 | >20%                    |                 5 |              0.08634 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4321 | <5%                     |                 2 |              0.21605 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4338 | 10-15%                  |                 2 |              0.2169  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4379 | >20%                    |                10 |              0.04379 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4397 | >20%                    |                10 |              0.04397 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4404 | >20%                    |                 5 |              0.08808 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4416 | >20%                    |                 2 |              0.2208  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4418 | 15-20%                  |                 2 |              0.2209  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4502 | >20%                    |                10 |              0.04502 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4534 | >20%                    |                 2 |              0.2267  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4618 | <5%                     |                 2 |              0.2309  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4657 | >20%                    |                 5 |              0.09314 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.476  | >20%                    |                 5 |              0.0952  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4778 | >20%                    |                 2 |              0.2389  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5003 | >20%                    |                 5 |              0.10006 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5015 | >20%                    |                 5 |              0.1003  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5018 | >20%                    |                 5 |              0.10036 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5054 | 15-20%                  |                 2 |              0.2527  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5061 | >20%                    |                 5 |              0.10122 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5115 | >20%                    |                 5 |              0.1023  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5154 | 15-20%                  |                 2 |              0.2577  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5215 | >20%                    |                 2 |              0.26075 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5236 | >20%                    |                 2 |              0.2618  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5272 | >20%                    |                 5 |              0.10544 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5432 | >20%                    |                 5 |              0.10864 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5441 | >20%                    |                 2 |              0.27205 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.553  | >20%                    |                 5 |              0.1106  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.553  | 5-10%                   |                 2 |              0.2765  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5564 | >20%                    |                10 |              0.05564 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5643 | 5-10%                   |                 5 |              0.11286 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.5646 |                         |                 2 |              0.2823  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5733 | 10-15%                  |                 5 |              0.11466 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5739 | >20%                    |                 5 |              0.11478 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5751 | >20%                    |                10 |              0.05751 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5856 | >20%                    |                 5 |              0.11712 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5877 | 15-20%                  |                 5 |              0.11754 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5952 | >20%                    |                 2 |              0.2976  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6066 | >20%                    |                 5 |              0.12132 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6088 | >20%                    |                 5 |              0.12176 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6134 | <5%                     |                 5 |              0.12268 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6149 | >20%                    |                10 |              0.06149 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6166 | >20%                    |                 2 |              0.3083  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.644  | >20%                    |                10 |              0.0644  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6509 | >20%                    |                 5 |              0.13018 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.651  | >20%                    |                 5 |              0.1302  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6571 | >20%                    |                10 |              0.06571 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6626 | >20%                    |                10 |              0.06626 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6629 | >20%                    |                10 |              0.06629 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6705 | >20%                    |                 5 |              0.1341  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6721 | >20%                    |                10 |              0.06721 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6724 | 10-15%                  |                10 |              0.06724 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6851 | >20%                    |                10 |              0.06851 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.6858 |                         |                10 |              0.06858 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.7027 | >20%                    |                 2 |              0.35135 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.7063 | >20%                    |                 2 |              0.35315 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7088 | >20%                    |                 2 |              0.3544  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7095 | >20%                    |                10 |              0.07095 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7112 | >20%                    |                 5 |              0.14224 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7141 | >20%                    |                 2 |              0.35705 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7243 | 10-15%                  |                 2 |              0.36215 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7271 |                         |                 2 |              0.36355 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7315 | >20%                    |                 5 |              0.1463  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7516 | >20%                    |                10 |              0.07516 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7544 | 15-20%                  |                10 |              0.07544 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7813 | >20%                    |                 5 |              0.15626 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7877 | >20%                    |                10 |              0.07877 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7891 | >20%                    |                 5 |              0.15782 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7922 | >20%                    |                10 |              0.07922 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7976 | >20%                    |                 2 |              0.3988  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8068 | >20%                    |                10 |              0.08068 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8214 | 5-10%                   |                10 |              0.08214 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.828  | <5%                     |                10 |              0.0828  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8296 | 5-10%                   |                 2 |              0.4148  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8326 | >20%                    |                 5 |              0.16652 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.833  | 10-15%                  |                 2 |              0.4165  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8522 | 15-20%                  |                10 |              0.08522 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8574 | >20%                    |                10 |              0.08574 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8612 | >20%                    |                10 |              0.08612 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8614 | 5-10%                   |                10 |              0.08614 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8618 | >20%                    |                10 |              0.08618 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8671 | 15-20%                  |                10 |              0.08671 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8809 | >20%                    |                 5 |              0.17618 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8832 | >20%                    |                 5 |              0.17664 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9088 | 15-20%                  |                10 |              0.09088 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9115 | >20%                    |                10 |              0.09115 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9235 |                         |                 5 |              0.1847  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9288 | 5-10%                   |                 5 |              0.18576 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9529 | >20%                    |                10 |              0.09529 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9616 | >20%                    |                10 |              0.09616 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.969  | >20%                    |                 5 |              0.1938  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9719 | >20%                    |                 5 |              0.19438 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0072 | 15-20%                  |                10 |              0.10072 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0337 | >20%                    |                10 |              0.10337 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.036  | >20%                    |                 5 |              0.2072  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.0419 | >20%                    |                 5 |              0.20838 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0554 | 15-20%                  |                10 |              0.10554 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0682 | >20%                    |                 2 |              0.5341  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0835 | 10-15%                  |                 2 |              0.54175 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0864 | >20%                    |                10 |              0.10864 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.104  | >20%                    |                 5 |              0.2208  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1386 | 5-10%                   |                10 |              0.11386 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1474 | >20%                    |                10 |              0.11474 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2036 |                         |                10 |              0.12036 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2464 |                         |                 5 |              0.24928 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.256  | >20%                    |                10 |              0.1256  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.288  | >20%                    |                 5 |              0.2576  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.299  | >20%                    |                 5 |              0.2598  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3509 | 15-20%                  |                10 |              0.13509 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4043 | 15-20%                  |                10 |              0.14043 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4164 | >20%                    |                 5 |              0.28328 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4893 | >20%                    |                10 |              0.14893 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4922 | >20%                    |                10 |              0.14922 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4935 | 10-15%                  |                10 |              0.14935 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4965 | 15-20%                  |                 5 |              0.2993  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5254 | >20%                    |                10 |              0.15254 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9171 | 5-10%                   |                 2 |              0.95855 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.9881 | 5-10%                   |                 2 |              0.99405 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.243  | >20%                    |                10 |              0.2243  |