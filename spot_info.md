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

Data correct as of 2026-06-26 04:05:56.618197, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1505 | >20%                    |                 2 |              0.07525 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1887 | 15-20%                  |                 2 |              0.09435 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2317 | 15-20%                  |                 5 |              0.04634 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2327 | >20%                    |                 2 |              0.11635 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2358 | >20%                    |                 2 |              0.1179  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2458 | 10-15%                  |                 2 |              0.1229  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2481 | >20%                    |                 2 |              0.12405 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2577 | >20%                    |                 2 |              0.12885 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2602 | >20%                    |                 2 |              0.1301  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2604 | >20%                    |                 2 |              0.1302  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2686 | >20%                    |                 2 |              0.1343  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.269  | >20%                    |                 2 |              0.1345  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2708 | 15-20%                  |                 2 |              0.1354  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2723 | >20%                    |                 2 |              0.13615 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2811 | 15-20%                  |                 2 |              0.14055 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2999 | 15-20%                  |                 5 |              0.05998 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3041 | >20%                    |                 5 |              0.06082 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3074 | >20%                    |                 5 |              0.06148 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.308  | >20%                    |                 5 |              0.0616  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.308  | >20%                    |                 2 |              0.154   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3293 | >20%                    |                 2 |              0.16465 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3322 | >20%                    |                 5 |              0.06644 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3373 | 5-10%                   |                10 |              0.03373 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3422 | >20%                    |                 5 |              0.06844 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3496 | 10-15%                  |                 2 |              0.1748  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3499 | >20%                    |                10 |              0.03499 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3511 | <5%                     |                 2 |              0.17555 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3604 | 5-10%                   |                10 |              0.03604 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3619 | 5-10%                   |                10 |              0.03619 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3627 | >20%                    |                 5 |              0.07254 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3672 | >20%                    |                10 |              0.03672 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3755 | 10-15%                  |                 2 |              0.18775 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3891 | >20%                    |                 2 |              0.19455 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3908 | >20%                    |                 2 |              0.1954  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4007 | >20%                    |                 5 |              0.08014 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4053 | >20%                    |                 5 |              0.08106 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4075 | >20%                    |                 5 |              0.0815  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4088 | >20%                    |                 2 |              0.2044  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4122 | >20%                    |                10 |              0.04122 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4159 | 10-15%                  |                10 |              0.04159 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4255 | >20%                    |                 5 |              0.0851  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4264 | >20%                    |                 2 |              0.2132  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4389 | >20%                    |                 5 |              0.08778 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4418 | 10-15%                  |                 2 |              0.2209  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4427 | <5%                     |                 2 |              0.22135 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4431 | 15-20%                  |                 5 |              0.08862 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4465 | >20%                    |                 5 |              0.0893  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4467 | >20%                    |                 2 |              0.22335 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4516 | <5%                     |                 2 |              0.2258  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4581 | >20%                    |                10 |              0.04581 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4677 | >20%                    |                 5 |              0.09354 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.469  | >20%                    |                 2 |              0.2345  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4707 | 15-20%                  |                 2 |              0.23535 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4799 | >20%                    |                 2 |              0.23995 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4813 | 15-20%                  |                 2 |              0.24065 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4817 | >20%                    |                 5 |              0.09634 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4836 | >20%                    |                 5 |              0.09672 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5131 | >20%                    |                10 |              0.05131 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5238 | >20%                    |                 2 |              0.2619  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5332 | >20%                    |                 5 |              0.10664 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5352 | 15-20%                  |                 5 |              0.10704 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5362 | 5-10%                   |                 2 |              0.2681  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5402 | 5-10%                   |                 5 |              0.10804 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.5453 | >20%                    |                 5 |              0.10906 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5495 | 10-15%                  |                 5 |              0.1099  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5571 | >20%                    |                 5 |              0.11142 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5571 | >20%                    |                 5 |              0.11142 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5646 | >20%                    |                 5 |              0.11292 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5709 | >20%                    |                 2 |              0.28545 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5725 | >20%                    |                10 |              0.05725 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5728 | >20%                    |                 5 |              0.11456 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5748 | 5-10%                   |                 2 |              0.2874  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5758 | >20%                    |                 2 |              0.2879  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5917 | >20%                    |                 2 |              0.29585 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6055 | >20%                    |                 5 |              0.1211  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.607  | >20%                    |                10 |              0.0607  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6153 | 15-20%                  |                 2 |              0.30765 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6178 | >20%                    |                10 |              0.06178 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6194 | >20%                    |                10 |              0.06194 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6228 | >20%                    |                10 |              0.06228 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.624  | >20%                    |                 5 |              0.1248  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6392 | >20%                    |                 5 |              0.12784 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6477 |                         |                 2 |              0.32385 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6496 | <5%                     |                 5 |              0.12992 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6516 | >20%                    |                10 |              0.06516 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6729 | >20%                    |                 2 |              0.33645 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6851 | 10-15%                  |                 2 |              0.34255 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6852 | >20%                    |                 5 |              0.13704 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.689  | 5-10%                   |                 5 |              0.1378  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6965 | >20%                    |                 5 |              0.1393  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6971 | >20%                    |                 2 |              0.34855 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.7    |                         |                 2 |              0.35    |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7036 | 15-20%                  |                10 |              0.07036 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7054 | 15-20%                  |                10 |              0.07054 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7137 | >20%                    |                 5 |              0.14274 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7182 | >20%                    |                10 |              0.07182 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7237 | >20%                    |                 2 |              0.36185 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7288 | >20%                    |                 2 |              0.3644  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7303 | 5-10%                   |                10 |              0.07303 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7362 | >20%                    |                 5 |              0.14724 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7379 | >20%                    |                 2 |              0.36895 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7458 | >20%                    |                10 |              0.07458 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7469 | >20%                    |                 5 |              0.14938 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.7713 | >20%                    |                10 |              0.07713 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7759 | <5%                     |                10 |              0.07759 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7782 | >20%                    |                 5 |              0.15564 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.779  |                         |                10 |              0.0779  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7988 | >20%                    |                 5 |              0.15976 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8227 | >20%                    |                10 |              0.08227 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8293 | >20%                    |                10 |              0.08293 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.85   | 15-20%                  |                10 |              0.085   |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8559 | >20%                    |                10 |              0.08559 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8661 | >20%                    |                 5 |              0.17322 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8703 | 10-15%                  |                 2 |              0.43515 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8815 | 15-20%                  |                10 |              0.08815 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8853 | >20%                    |                10 |              0.08853 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.887  | >20%                    |                10 |              0.0887  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8961 | 5-10%                   |                10 |              0.08961 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.91   | >20%                    |                10 |              0.091   |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9184 | >20%                    |                 5 |              0.18368 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.931  | 5-10%                   |                10 |              0.0931  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9357 | 5-10%                   |                 2 |              0.46785 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9385 | 10-15%                  |                 2 |              0.46925 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9444 | >20%                    |                10 |              0.09444 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9476 | >20%                    |                10 |              0.09476 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9482 | >20%                    |                 5 |              0.18964 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9528 | 15-20%                  |                10 |              0.09528 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9602 | >20%                    |                 5 |              0.19204 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9763 |                         |                 5 |              0.19526 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9842 | >20%                    |                10 |              0.09842 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9934 | >20%                    |                10 |              0.09934 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9937 | >20%                    |                10 |              0.09937 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0025 | >20%                    |                 5 |              0.2005  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0095 | >20%                    |                10 |              0.10095 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0104 | >20%                    |                10 |              0.10104 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.056  | >20%                    |                 2 |              0.528   |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0783 | 15-20%                  |                10 |              0.10783 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1096 | >20%                    |                 5 |              0.22192 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1121 | >20%                    |                 5 |              0.22242 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1246 | >20%                    |                 5 |              0.22492 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1456 | >20%                    |                10 |              0.11456 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1507 |                         |                 5 |              0.23014 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1847 | >20%                    |                10 |              0.11847 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2639 |                         |                10 |              0.12639 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2766 | >20%                    |                 5 |              0.25532 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.35   | 15-20%                  |                10 |              0.135   |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4251 | >20%                    |                10 |              0.14251 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4546 | 15-20%                  |                 5 |              0.29092 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5466 | >20%                    |                 5 |              0.30932 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5894 | 10-15%                  |                10 |              0.15894 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6734 | 15-20%                  |                10 |              0.16734 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.6862 | 5-10%                   |                 2 |              0.8431  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.1727 | >20%                    |                10 |              0.21727 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4965 | >20%                    |                10 |              0.24965 |