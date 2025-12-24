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

Data correct as of 2025-12-24 01:58:32.901605, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1018 | >20%                    |                 2 |              0.0509  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1381 | >20%                    |                 2 |              0.06905 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1522 | >20%                    |                 2 |              0.0761  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1681 | >20%                    |                 2 |              0.08405 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1888 | <5%                     |                 2 |              0.0944  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1939 | 5-10%                   |                 2 |              0.09695 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1943 | >20%                    |                 5 |              0.03886 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2341 | >20%                    |                 2 |              0.11705 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2369 | >20%                    |                 2 |              0.11845 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2519 | >20%                    |                 5 |              0.05038 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2542 | >20%                    |                 2 |              0.1271  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2549 | >20%                    |                 2 |              0.12745 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2629 | >20%                    |                 2 |              0.13145 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2638 | 5-10%                   |                10 |              0.02638 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.266  | >20%                    |                 2 |              0.133   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2783 | >20%                    |                 2 |              0.13915 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2788 | >20%                    |                 2 |              0.1394  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2876 | <5%                     |                 2 |              0.1438  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2895 | 5-10%                   |                 5 |              0.0579  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2922 | 15-20%                  |                 2 |              0.1461  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2934 | >20%                    |                 2 |              0.1467  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3078 | >20%                    |                 2 |              0.1539  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3119 | >20%                    |                10 |              0.03119 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3143 | >20%                    |                 2 |              0.15715 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3166 | 15-20%                  |                 5 |              0.06332 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.326  | 5-10%                   |                10 |              0.0326  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3274 | >20%                    |                 5 |              0.06548 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3441 | >20%                    |                 2 |              0.17205 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3451 | >20%                    |                 2 |              0.17255 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3472 | >20%                    |                 5 |              0.06944 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3497 | >20%                    |                 2 |              0.17485 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3507 | >20%                    |                 5 |              0.07014 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3556 | >20%                    |                 5 |              0.07112 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.358  | <5%                     |                 5 |              0.0716  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.359  | >20%                    |                 5 |              0.0718  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3608 | 15-20%                  |                10 |              0.03608 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3615 | 5-10%                   |                 2 |              0.18075 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3676 | 10-15%                  |                 2 |              0.1838  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3693 | >20%                    |                 5 |              0.07386 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3701 | >20%                    |                 2 |              0.18505 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3717 | 10-15%                  |                 2 |              0.18585 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3755 | >20%                    |                 5 |              0.0751  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3756 | >20%                    |                10 |              0.03756 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3776 | >20%                    |                 5 |              0.07552 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3847 | <5%                     |                10 |              0.03847 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3869 | >20%                    |                10 |              0.03869 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3878 | >20%                    |                 2 |              0.1939  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3878 | >20%                    |                10 |              0.03878 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3899 | >20%                    |                 2 |              0.19495 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3927 | >20%                    |                 2 |              0.19635 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3927 | >20%                    |                 2 |              0.19635 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.393  | >20%                    |                 5 |              0.0786  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3935 | >20%                    |                 5 |              0.0787  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3954 | <5%                     |                 5 |              0.07908 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3955 | >20%                    |                 5 |              0.0791  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4148 | 10-15%                  |                 2 |              0.2074  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4184 | >20%                    |                 5 |              0.08368 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4244 | <5%                     |                 2 |              0.2122  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4307 | >20%                    |                 5 |              0.08614 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4317 | >20%                    |                 5 |              0.08634 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.437  | >20%                    |                 2 |              0.2185  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4382 | >20%                    |                 2 |              0.2191  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4387 | <5%                     |                 2 |              0.21935 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4406 | <5%                     |                10 |              0.04406 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4451 | >20%                    |                 2 |              0.22255 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4505 | >20%                    |                10 |              0.04505 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.466  | >20%                    |                 5 |              0.0932  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4664 | >20%                    |                 2 |              0.2332  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4729 | >20%                    |                 2 |              0.23645 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.476  | >20%                    |                 5 |              0.0952  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4795 | 15-20%                  |                 5 |              0.0959  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4838 | 15-20%                  |                 5 |              0.09676 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4848 | >20%                    |                 5 |              0.09696 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4897 | 15-20%                  |                 2 |              0.24485 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.491  | >20%                    |                10 |              0.0491  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4934 | >20%                    |                 2 |              0.2467  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.494  | >20%                    |                 5 |              0.0988  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4981 | >20%                    |                 2 |              0.24905 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5032 | >20%                    |                 2 |              0.2516  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5033 | 10-15%                  |                 5 |              0.10066 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5077 | 10-15%                  |                 5 |              0.10154 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.517  | >20%                    |                 2 |              0.2585  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5184 | 15-20%                  |                10 |              0.05184 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5271 | >20%                    |                 2 |              0.26355 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5282 | 5-10%                   |                 5 |              0.10564 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5288 | 15-20%                  |                 2 |              0.2644  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5291 | >20%                    |                10 |              0.05291 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.531  | <5%                     |                 5 |              0.1062  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5461 | >20%                    |                 5 |              0.10922 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5588 | 15-20%                  |                 5 |              0.11176 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.56   | >20%                    |                 5 |              0.112   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5623 | >20%                    |                 5 |              0.11246 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5644 | >20%                    |                 5 |              0.11288 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5676 | >20%                    |                 2 |              0.2838  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5709 | 15-20%                  |                 5 |              0.11418 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5769 | >20%                    |                 2 |              0.28845 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5874 | 5-10%                   |                 5 |              0.11748 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5917 | >20%                    |                 5 |              0.11834 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5987 | <5%                     |                 5 |              0.11974 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.599  | >20%                    |                 5 |              0.1198  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6086 | >20%                    |                10 |              0.06086 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6157 | 15-20%                  |                 5 |              0.12314 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6249 | 5-10%                   |                 5 |              0.12498 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6301 | >20%                    |                 2 |              0.31505 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6301 | 10-15%                  |                 2 |              0.31505 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6386 | 10-15%                  |                 5 |              0.12772 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6412 | >20%                    |                 2 |              0.3206  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6428 | 15-20%                  |                10 |              0.06428 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6471 | 10-15%                  |                 5 |              0.12942 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6472 | >20%                    |                 5 |              0.12944 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6598 | >20%                    |                 2 |              0.3299  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6775 | >20%                    |                 5 |              0.1355  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6958 | >20%                    |                10 |              0.06958 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7092 | >20%                    |                10 |              0.07092 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7163 | >20%                    |                10 |              0.07163 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7181 | >20%                    |                 2 |              0.35905 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.7392 | >20%                    |                 5 |              0.14784 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7479 | >20%                    |                10 |              0.07479 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7505 | 15-20%                  |                 2 |              0.37525 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.7545 | >20%                    |                 5 |              0.1509  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7565 | >20%                    |                10 |              0.07565 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7579 | >20%                    |                10 |              0.07579 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7585 | 5-10%                   |                10 |              0.07585 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7585 | <5%                     |                10 |              0.07585 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.763  | >20%                    |                10 |              0.0763  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.767  | >20%                    |                 2 |              0.3835  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.772  | 15-20%                  |                10 |              0.0772  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7751 | >20%                    |                10 |              0.07751 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7808 | 15-20%                  |                 5 |              0.15616 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7914 | 15-20%                  |                10 |              0.07914 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7925 | >20%                    |                10 |              0.07925 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.795  | >20%                    |                 5 |              0.159   |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.802  | 15-20%                  |                10 |              0.0802  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8054 | 15-20%                  |                10 |              0.08054 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8126 | >20%                    |                 5 |              0.16252 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8174 | 15-20%                  |                10 |              0.08174 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8174 | >20%                    |                10 |              0.08174 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8193 | <5%                     |                10 |              0.08193 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8213 | 15-20%                  |                10 |              0.08213 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8218 | 15-20%                  |                10 |              0.08218 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.843  | >20%                    |                10 |              0.0843  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8461 | <5%                     |                10 |              0.08461 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8595 | <5%                     |                 2 |              0.42975 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8637 | >20%                    |                 5 |              0.17274 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8839 | >20%                    |                 2 |              0.44195 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8962 | >20%                    |                10 |              0.08962 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9023 | >20%                    |                 5 |              0.18046 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9349 | >20%                    |                10 |              0.09349 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9483 | >20%                    |                 5 |              0.18966 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9654 | >20%                    |                 2 |              0.4827  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9682 | >20%                    |                10 |              0.09682 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9689 | 15-20%                  |                10 |              0.09689 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9825 | >20%                    |                 2 |              0.49125 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9833 | >20%                    |                 5 |              0.19666 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9914 | >20%                    |                10 |              0.09914 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9961 | >20%                    |                10 |              0.09961 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9981 | >20%                    |                 2 |              0.49905 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0119 | 10-15%                  |                10 |              0.10119 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0174 | 10-15%                  |                 5 |              0.20348 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0265 | >20%                    |                 5 |              0.2053  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0277 | >20%                    |                10 |              0.10277 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0363 | >20%                    |                10 |              0.10363 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0665 | >20%                    |                 5 |              0.2133  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0899 | >20%                    |                 2 |              0.54495 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1072 | >20%                    |                10 |              0.11072 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.1245 | 10-15%                  |                10 |              0.11245 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1402 | >20%                    |                10 |              0.11402 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1781 | <5%                     |                10 |              0.11781 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1895 | >20%                    |                10 |              0.11895 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2047 | >20%                    |                10 |              0.12047 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3024 | >20%                    |                10 |              0.13024 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3811 | >20%                    |                 2 |              0.69055 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4212 | 10-15%                  |                 5 |              0.28424 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4352 | >20%                    |                 5 |              0.28704 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4559 | >20%                    |                10 |              0.14559 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4615 | >20%                    |                 2 |              0.73075 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4816 | >20%                    |                 5 |              0.29632 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5755 | >20%                    |                10 |              0.15755 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6433 | 15-20%                  |                10 |              0.16433 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0188 | 10-15%                  |                10 |              0.20188 |