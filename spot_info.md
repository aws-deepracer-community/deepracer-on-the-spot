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

Data correct as of 2026-07-06 03:58:15.773442, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1235 | >20%                    |                 2 |              0.06175 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1923 | >20%                    |                 2 |              0.09615 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2092 | 15-20%                  |                 2 |              0.1046  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2306 | >20%                    |                 2 |              0.1153  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2455 | >20%                    |                 2 |              0.12275 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.248  | >20%                    |                 2 |              0.124   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2564 | >20%                    |                 2 |              0.1282  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2592 | >20%                    |                 2 |              0.1296  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2663 | >20%                    |                 2 |              0.13315 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2672 | 10-15%                  |                 2 |              0.1336  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2675 | >20%                    |                 2 |              0.13375 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2743 | 15-20%                  |                 2 |              0.13715 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2745 | 15-20%                  |                 5 |              0.0549  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2836 | >20%                    |                 2 |              0.1418  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2899 | 15-20%                  |                 5 |              0.05798 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2908 | 15-20%                  |                 2 |              0.1454  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2908 | 5-10%                   |                10 |              0.02908 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3323 | >20%                    |                 5 |              0.06646 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3325 | >20%                    |                 2 |              0.16625 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3422 | >20%                    |                 2 |              0.1711  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3424 | >20%                    |                 5 |              0.06848 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.344  | >20%                    |                 5 |              0.0688  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3547 | >20%                    |                 5 |              0.07094 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3548 | <5%                     |                 2 |              0.1774  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3614 | 5-10%                   |                10 |              0.03614 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3629 | 5-10%                   |                10 |              0.03629 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3656 | >20%                    |                10 |              0.03656 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3665 | >20%                    |                 5 |              0.0733  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3735 | >20%                    |                 5 |              0.0747  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3802 | >20%                    |                 5 |              0.07604 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.385  | >20%                    |                 2 |              0.1925  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3965 | 10-15%                  |                 2 |              0.19825 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4044 | >20%                    |                10 |              0.04044 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4081 | 10-15%                  |                 2 |              0.20405 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4141 | >20%                    |                 2 |              0.20705 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4146 | >20%                    |                 2 |              0.2073  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4166 | >20%                    |                 5 |              0.08332 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.418  | >20%                    |                 2 |              0.209   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4219 | >20%                    |                10 |              0.04219 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4219 | 10-15%                  |                 2 |              0.21095 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4356 | <5%                     |                 2 |              0.2178  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4367 | >20%                    |                 5 |              0.08734 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4405 | >20%                    |                10 |              0.04405 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4408 | 15-20%                  |                 5 |              0.08816 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.445  | <5%                     |                 2 |              0.2225  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.447  | >20%                    |                10 |              0.0447  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4501 | >20%                    |                 5 |              0.09002 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4556 | >20%                    |                 2 |              0.2278  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.464  | 15-20%                  |                 2 |              0.232   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4735 | >20%                    |                 2 |              0.23675 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4749 | >20%                    |                 2 |              0.23745 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4753 | >20%                    |                 5 |              0.09506 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.479  | >20%                    |                 2 |              0.2395  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4797 | >20%                    |                 5 |              0.09594 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4836 | >20%                    |                 2 |              0.2418  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4902 | >20%                    |                10 |              0.04902 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4943 | >20%                    |                 5 |              0.09886 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5007 | >20%                    |                 5 |              0.10014 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5013 | >20%                    |                 5 |              0.10026 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5024 | >20%                    |                 5 |              0.10048 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5078 | 15-20%                  |                 2 |              0.2539  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5258 | >20%                    |                10 |              0.05258 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5267 | >20%                    |                 5 |              0.10534 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5276 | 15-20%                  |                 2 |              0.2638  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.529  | 5-10%                   |                 2 |              0.2645  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5356 | >20%                    |                 5 |              0.10712 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5483 | 5-10%                   |                 5 |              0.10966 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5493 | >20%                    |                 5 |              0.10986 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5569 | 10-15%                  |                 5 |              0.11138 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5679 | 15-20%                  |                 5 |              0.11358 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5741 | >20%                    |                 2 |              0.28705 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5925 | >20%                    |                 5 |              0.1185  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5986 | <5%                     |                 5 |              0.11972 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6123 | >20%                    |                10 |              0.06123 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6172 | >20%                    |                10 |              0.06172 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6256 | >20%                    |                 5 |              0.12512 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6269 | >20%                    |                 5 |              0.12538 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.631  | >20%                    |                 5 |              0.1262  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.6345 |                         |                 2 |              0.31725 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.644  | >20%                    |                 2 |              0.322   |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6499 | >20%                    |                 5 |              0.12998 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.652  | >20%                    |                10 |              0.0652  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6529 | >20%                    |                 5 |              0.13058 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6536 | >20%                    |                10 |              0.06536 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.6568 |                         |                10 |              0.06568 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6649 | 10-15%                  |                10 |              0.06649 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6751 | >20%                    |                 2 |              0.33755 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6848 | >20%                    |                 2 |              0.3424  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6854 | >20%                    |                 5 |              0.13708 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6993 | >20%                    |                 5 |              0.13986 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6998 | >20%                    |                10 |              0.06998 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7016 |                         |                 2 |              0.3508  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7037 | >20%                    |                 2 |              0.35185 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7079 | >20%                    |                 2 |              0.35395 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7164 | 5-10%                   |                 2 |              0.3582  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7227 | 10-15%                  |                 2 |              0.36135 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7258 | >20%                    |                10 |              0.07258 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7345 | >20%                    |                 5 |              0.1469  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7346 | >20%                    |                10 |              0.07346 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7363 | 5-10%                   |                 5 |              0.14726 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7471 | <5%                     |                10 |              0.07471 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7514 | >20%                    |                 5 |              0.15028 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7755 | >20%                    |                 5 |              0.1551  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7757 | 15-20%                  |                10 |              0.07757 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7789 | 5-10%                   |                10 |              0.07789 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7789 | >20%                    |                10 |              0.07789 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7938 | 15-20%                  |                10 |              0.07938 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7988 | >20%                    |                 2 |              0.3994  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8246 | >20%                    |                 5 |              0.16492 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8253 | >20%                    |                10 |              0.08253 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8257 | >20%                    |                10 |              0.08257 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8398 | 5-10%                   |                10 |              0.08398 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8441 | >20%                    |                10 |              0.08441 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.861  | >20%                    |                10 |              0.0861  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8615 | 15-20%                  |                10 |              0.08615 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8729 | >20%                    |                10 |              0.08729 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8742 | >20%                    |                 5 |              0.17484 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8837 | 15-20%                  |                10 |              0.08837 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8842 | >20%                    |                10 |              0.08842 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8932 | 15-20%                  |                10 |              0.08932 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8945 | 10-15%                  |                 2 |              0.44725 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9045 | 10-15%                  |                 2 |              0.45225 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9079 | >20%                    |                 5 |              0.18158 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9109 |                         |                 5 |              0.18218 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9141 | >20%                    |                10 |              0.09141 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.919  | >20%                    |                10 |              0.0919  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9337 | >20%                    |                 5 |              0.18674 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9421 | >20%                    |                10 |              0.09421 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9548 | >20%                    |                 5 |              0.19096 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9699 | >20%                    |                10 |              0.09699 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0097 | >20%                    |                 5 |              0.20194 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0216 | >20%                    |                 5 |              0.20432 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0255 | >20%                    |                10 |              0.10255 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0296 | >20%                    |                10 |              0.10296 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0302 | >20%                    |                10 |              0.10302 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0414 | 15-20%                  |                10 |              0.10414 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0656 | >20%                    |                 2 |              0.5328  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0857 | >20%                    |                 5 |              0.21714 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.104  | 5-10%                   |                10 |              0.1104  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1341 | >20%                    |                 5 |              0.22682 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1701 | >20%                    |                10 |              0.11701 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1717 | >20%                    |                10 |              0.11717 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1929 |                         |                10 |              0.11929 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2104 |                         |                 5 |              0.24208 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3188 | 15-20%                  |                10 |              0.13188 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4246 | >20%                    |                10 |              0.14246 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.445  | 15-20%                  |                 5 |              0.289   |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4501 | >20%                    |                 5 |              0.29002 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.4513 | 5-10%                   |                 2 |              0.72565 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4841 | 15-20%                  |                10 |              0.14841 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5876 | >20%                    |                 5 |              0.31752 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.6862 | 10-15%                  |                10 |              0.16862 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.7762 | 5-10%                   |                 2 |              0.8881  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9457 | >20%                    |                10 |              0.19457 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.354  | >20%                    |                10 |              0.2354  |