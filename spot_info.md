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

Data correct as of 2026-07-09 03:40:59.057590, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1478 | >20%                    |                 2 |              0.0739  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1717 | >20%                    |                 2 |              0.08585 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2211 | 15-20%                  |                 2 |              0.11055 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2402 | >20%                    |                 2 |              0.1201  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2441 | >20%                    |                 2 |              0.12205 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2455 | >20%                    |                 2 |              0.12275 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2504 | >20%                    |                 2 |              0.1252  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2586 | >20%                    |                 2 |              0.1293  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2625 | >20%                    |                 2 |              0.13125 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2638 | 15-20%                  |                 5 |              0.05276 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2687 | >20%                    |                 2 |              0.13435 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2704 | 5-10%                   |                10 |              0.02704 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2733 | 15-20%                  |                 2 |              0.13665 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2854 | >20%                    |                 2 |              0.1427  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2944 | 10-15%                  |                 2 |              0.1472  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3038 | 15-20%                  |                 2 |              0.1519  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.309  | 15-20%                  |                 5 |              0.0618  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3129 | >20%                    |                 5 |              0.06258 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3187 | >20%                    |                 2 |              0.15935 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3295 | >20%                    |                 5 |              0.0659  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3309 | >20%                    |                 5 |              0.06618 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3397 | >20%                    |                 2 |              0.16985 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3594 | 5-10%                   |                10 |              0.03594 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3595 | <5%                     |                 2 |              0.17975 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3613 | >20%                    |                 5 |              0.07226 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3631 | >20%                    |                 5 |              0.07262 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3701 | >20%                    |                 2 |              0.18505 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3724 | >20%                    |                 5 |              0.07448 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3726 | >20%                    |                10 |              0.03726 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3735 | >20%                    |                 5 |              0.0747  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3838 | 15-20%                  |                 5 |              0.07676 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3895 | 5-10%                   |                10 |              0.03895 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3915 | 10-15%                  |                 2 |              0.19575 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.394  | >20%                    |                10 |              0.0394  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4096 | >20%                    |                10 |              0.04096 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4105 | >20%                    |                 2 |              0.20525 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4111 | 10-15%                  |                 2 |              0.20555 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4244 | >20%                    |                 2 |              0.2122  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4256 | 10-15%                  |                 2 |              0.2128  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4258 | >20%                    |                 5 |              0.08516 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4314 | <5%                     |                 2 |              0.2157  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4445 | >20%                    |                 2 |              0.22225 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4454 | >20%                    |                 2 |              0.2227  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4479 | >20%                    |                 5 |              0.08958 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4496 | <5%                     |                 2 |              0.2248  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4522 | >20%                    |                10 |              0.04522 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4545 | >20%                    |                10 |              0.04545 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4547 | >20%                    |                 5 |              0.09094 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4642 | 15-20%                  |                 2 |              0.2321  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4714 | >20%                    |                 5 |              0.09428 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4733 | >20%                    |                 2 |              0.23665 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.48   | >20%                    |                 2 |              0.24    |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4851 | >20%                    |                 5 |              0.09702 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4975 | >20%                    |                10 |              0.04975 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5009 | 15-20%                  |                 2 |              0.25045 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5009 | >20%                    |                 2 |              0.25045 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5026 | >20%                    |                 5 |              0.10052 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5031 | >20%                    |                 5 |              0.10062 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5048 | >20%                    |                 5 |              0.10096 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5134 | >20%                    |                 5 |              0.10268 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5142 | >20%                    |                 5 |              0.10284 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5153 | >20%                    |                 5 |              0.10306 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5177 | 15-20%                  |                 2 |              0.25885 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5448 | 5-10%                   |                 2 |              0.2724  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5546 | >20%                    |                 5 |              0.11092 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5549 | 5-10%                   |                 5 |              0.11098 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.558  | >20%                    |                 5 |              0.1116  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5649 | 10-15%                  |                 5 |              0.11298 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.5667 |                         |                 2 |              0.28335 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5735 | >20%                    |                10 |              0.05735 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5818 | >20%                    |                 2 |              0.2909  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5849 | >20%                    |                 5 |              0.11698 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5969 | <5%                     |                 5 |              0.11938 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.598  | 15-20%                  |                 5 |              0.1196  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5993 | >20%                    |                 5 |              0.11986 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.602  | >20%                    |                 2 |              0.301   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6058 | >20%                    |                 5 |              0.12116 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6142 | >20%                    |                 2 |              0.3071  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6322 | >20%                    |                 5 |              0.12644 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6329 | >20%                    |                10 |              0.06329 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6397 | >20%                    |                 5 |              0.12794 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6489 | >20%                    |                10 |              0.06489 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.6568 |                         |                10 |              0.06568 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.665  | >20%                    |                10 |              0.0665  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.671  | >20%                    |                 5 |              0.1342  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6735 | >20%                    |                10 |              0.06735 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6773 | >20%                    |                10 |              0.06773 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6775 | >20%                    |                 2 |              0.33875 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6827 | >20%                    |                 2 |              0.34135 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.703  | >20%                    |                10 |              0.0703  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7096 | 10-15%                  |                10 |              0.07096 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7116 | >20%                    |                 5 |              0.14232 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7131 | >20%                    |                 2 |              0.35655 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.716  | >20%                    |                 2 |              0.358   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7179 | >20%                    |                10 |              0.07179 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7188 | >20%                    |                 5 |              0.14376 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7189 | 10-15%                  |                 2 |              0.35945 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7215 | >20%                    |                 5 |              0.1443  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7515 | >20%                    |                10 |              0.07515 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7603 | >20%                    |                 5 |              0.15206 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7777 | >20%                    |                10 |              0.07777 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.78   | >20%                    |                10 |              0.078   |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.7894 | >20%                    |                 5 |              0.15788 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7909 | >20%                    |                 2 |              0.39545 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.791  | 15-20%                  |                10 |              0.0791  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8067 | 5-10%                   |                10 |              0.08067 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8073 | 5-10%                   |                 2 |              0.40365 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8088 | >20%                    |                10 |              0.08088 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8132 | 5-10%                   |                10 |              0.08132 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8133 | <5%                     |                10 |              0.08133 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8164 |                         |                 2 |              0.4082  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8447 | 10-15%                  |                 2 |              0.42235 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8489 | 5-10%                   |                 5 |              0.16978 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8495 | >20%                    |                10 |              0.08495 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8501 | >20%                    |                 5 |              0.17002 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8547 | >20%                    |                10 |              0.08547 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8601 | 15-20%                  |                10 |              0.08601 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8609 |                         |                 5 |              0.17218 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8632 | >20%                    |                10 |              0.08632 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8652 | >20%                    |                 5 |              0.17304 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8657 | >20%                    |                10 |              0.08657 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8687 | 15-20%                  |                10 |              0.08687 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8935 | >20%                    |                10 |              0.08935 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9037 | 15-20%                  |                10 |              0.09037 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9108 | >20%                    |                10 |              0.09108 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9111 | 15-20%                  |                10 |              0.09111 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9357 | >20%                    |                 5 |              0.18714 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9486 | >20%                    |                 5 |              0.18972 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9842 | >20%                    |                 5 |              0.19684 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0279 | >20%                    |                10 |              0.10279 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0329 | 10-15%                  |                 2 |              0.51645 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0377 | 15-20%                  |                10 |              0.10377 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0421 | >20%                    |                 5 |              0.20842 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0497 | >20%                    |                10 |              0.10497 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0638 | >20%                    |                10 |              0.10638 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0779 | >20%                    |                 2 |              0.53895 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0886 | >20%                    |                 5 |              0.21772 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1014 | >20%                    |                 5 |              0.22028 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1114 | 5-10%                   |                10 |              0.11114 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2029 | >20%                    |                10 |              0.12029 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2152 |                         |                10 |              0.12152 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2209 |                         |                 5 |              0.24418 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.2393 | >20%                    |                10 |              0.12393 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3416 | 15-20%                  |                10 |              0.13416 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3596 | >20%                    |                 5 |              0.27192 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3643 | 15-20%                  |                10 |              0.13643 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.3653 | >20%                    |                10 |              0.13653 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4429 | >20%                    |                 5 |              0.28858 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4737 | 15-20%                  |                 5 |              0.29474 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4755 | >20%                    |                10 |              0.14755 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4793 | 10-15%                  |                10 |              0.14793 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7479 | >20%                    |                10 |              0.17479 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.7855 | 5-10%                   |                 2 |              0.89275 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.893  | 5-10%                   |                 2 |              0.9465  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3337 | >20%                    |                10 |              0.23337 |