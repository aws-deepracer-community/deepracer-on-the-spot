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

Data correct as of 2025-01-31 01:35:38.318876, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | >20%                    |                 5 |              0.039   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2127 | >20%                    |                 2 |              0.10635 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.214  | <5%                     |                 2 |              0.107   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2202 | 5-10%                   |                 2 |              0.1101  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.227  | 10-15%                  |                 2 |              0.1135  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2282 | 10-15%                  |                 2 |              0.1141  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.234  | 5-10%                   |                 2 |              0.117   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2475 | 10-15%                  |                 2 |              0.12375 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2525 | <5%                     |                 2 |              0.12625 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2547 | 5-10%                   |                 2 |              0.12735 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2606 | 10-15%                  |                 5 |              0.05212 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2956 | >20%                    |                 2 |              0.1478  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2995 | 5-10%                   |                 2 |              0.14975 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3021 | <5%                     |                 2 |              0.15105 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3036 | >20%                    |                 2 |              0.1518  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3137 | <5%                     |                 5 |              0.06274 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3198 | 15-20%                  |                10 |              0.03198 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.32   | 5-10%                   |                 5 |              0.064   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3202 | 10-15%                  |                 2 |              0.1601  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3239 | 5-10%                   |                 2 |              0.16195 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3274 | <5%                     |                 2 |              0.1637  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3354 | 5-10%                   |                 2 |              0.1677  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3388 | 10-15%                  |                 5 |              0.06776 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3403 | >20%                    |                 2 |              0.17015 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3451 | <5%                     |                 5 |              0.06902 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3491 | <5%                     |                 2 |              0.17455 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3563 | 5-10%                   |                 2 |              0.17815 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3632 | >20%                    |                 2 |              0.1816  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3706 | 15-20%                  |                 5 |              0.07412 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3801 | 5-10%                   |                 5 |              0.07602 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3836 | 5-10%                   |                 5 |              0.07672 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3886 | 5-10%                   |                 2 |              0.1943  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4017 | 5-10%                   |                 2 |              0.20085 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4075 | <5%                     |                 2 |              0.20375 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4091 | >20%                    |                 2 |              0.20455 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4116 | <5%                     |                 2 |              0.2058  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.416  | 10-15%                  |                 2 |              0.208   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4352 | 10-15%                  |                 5 |              0.08704 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4429 | 5-10%                   |                 2 |              0.22145 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4464 | <5%                     |                 5 |              0.08928 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4563 | 15-20%                  |                 5 |              0.09126 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4777 | 5-10%                   |                 2 |              0.23885 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4778 | >20%                    |                 5 |              0.09556 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4785 | <5%                     |                 5 |              0.0957  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4875 | 15-20%                  |                 5 |              0.0975  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4881 | 10-15%                  |                 2 |              0.24405 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4893 | <5%                     |                 5 |              0.09786 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4952 | <5%                     |                 2 |              0.2476  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4959 | >20%                    |                 5 |              0.09918 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5    | >20%                    |                 2 |              0.25    |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5012 | >20%                    |                 2 |              0.2506  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5016 | 15-20%                  |                 5 |              0.10032 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5076 | 10-15%                  |                 5 |              0.10152 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5096 | <5%                     |                 5 |              0.10192 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5157 | <5%                     |                 2 |              0.25785 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5202 | 5-10%                   |                 5 |              0.10404 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5205 | <5%                     |                 5 |              0.1041  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5206 | 15-20%                  |                 5 |              0.10412 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5266 | >20%                    |                 5 |              0.10532 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5329 | 10-15%                  |                 5 |              0.10658 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5364 | >20%                    |                 5 |              0.10728 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5378 | 5-10%                   |                 2 |              0.2689  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5423 | <5%                     |                 5 |              0.10846 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5424 | 10-15%                  |                 2 |              0.2712  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5455 | <5%                     |                 5 |              0.1091  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5479 | 15-20%                  |                 2 |              0.27395 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5519 | >20%                    |                 2 |              0.27595 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5602 | 5-10%                   |                 5 |              0.11204 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5641 | 15-20%                  |                 2 |              0.28205 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.577  | 5-10%                   |                 5 |              0.1154  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5789 | 5-10%                   |                 5 |              0.11578 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5909 | 5-10%                   |                 5 |              0.11818 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5934 | 5-10%                   |                 5 |              0.11868 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5951 | <5%                     |                10 |              0.05951 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6014 | 5-10%                   |                10 |              0.06014 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6065 | <5%                     |                10 |              0.06065 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6085 | >20%                    |                10 |              0.06085 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.613  | 5-10%                   |                10 |              0.0613  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6381 | 10-15%                  |                10 |              0.06381 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.6432 | 5-10%                   |                10 |              0.06432 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6477 | <5%                     |                10 |              0.06477 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6513 | 5-10%                   |                 5 |              0.13026 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6545 | >20%                    |                 2 |              0.32725 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6677 | 5-10%                   |                10 |              0.06677 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6827 | >20%                    |                10 |              0.06827 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6842 | <5%                     |                 5 |              0.13684 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6857 | 10-15%                  |                10 |              0.06857 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6914 | 5-10%                   |                 5 |              0.13828 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6948 | 10-15%                  |                10 |              0.06948 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6948 | 15-20%                  |                10 |              0.06948 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.696  | 5-10%                   |                 5 |              0.1392  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6962 | >20%                    |                 5 |              0.13924 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7332 | >20%                    |                 5 |              0.14664 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7362 | 5-10%                   |                10 |              0.07362 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7467 | <5%                     |                 2 |              0.37335 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7479 | 5-10%                   |                10 |              0.07479 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7523 | >20%                    |                 5 |              0.15046 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7546 | >20%                    |                10 |              0.07546 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7624 | 10-15%                  |                10 |              0.07624 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7669 | >20%                    |                 5 |              0.15338 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.779  | 5-10%                   |                10 |              0.0779  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7845 | 15-20%                  |                10 |              0.07845 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7881 | 5-10%                   |                10 |              0.07881 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8018 | 15-20%                  |                 2 |              0.4009  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8162 | 15-20%                  |                 2 |              0.4081  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8291 | <5%                     |                10 |              0.08291 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8368 | >20%                    |                10 |              0.08368 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.847  | >20%                    |                10 |              0.0847  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8492 | 15-20%                  |                10 |              0.08492 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8581 | 5-10%                   |                10 |              0.08581 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.8762 | >20%                    |                 5 |              0.17524 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8917 | <5%                     |                10 |              0.08917 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8964 | 5-10%                   |                10 |              0.08964 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9052 | >20%                    |                10 |              0.09052 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9097 | 15-20%                  |                10 |              0.09097 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9127 | <5%                     |                10 |              0.09127 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9147 | 5-10%                   |                10 |              0.09147 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.9261 | 10-15%                  |                10 |              0.09261 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9302 | <5%                     |                10 |              0.09302 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9344 | 5-10%                   |                 5 |              0.18688 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9538 | 5-10%                   |                10 |              0.09538 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9929 | 15-20%                  |                10 |              0.09929 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0068 | 5-10%                   |                 5 |              0.20136 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0154 | >20%                    |                10 |              0.10154 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0223 | <5%                     |                10 |              0.10223 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0766 | 10-15%                  |                 2 |              0.5383  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0801 | 5-10%                   |                10 |              0.10801 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0864 | 15-20%                  |                 5 |              0.21728 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.1433 | >20%                    |                10 |              0.11433 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1913 | 10-15%                  |                10 |              0.11913 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2178 | 5-10%                   |                10 |              0.12178 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.23   | 10-15%                  |                 2 |              0.615   |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2728 | 15-20%                  |                 5 |              0.25456 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3951 | 5-10%                   |                10 |              0.13951 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4246 | 5-10%                   |                10 |              0.14246 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0045 | 5-10%                   |                10 |              0.20045 |