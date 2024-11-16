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

Data correct as of 2024-11-16 01:40:37.724255, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1504 | >20%                    |                 5 |              0.03008 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 5-10%                   |                 2 |              0.0831  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1819 | 10-15%                  |                 2 |              0.09095 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2147 | 15-20%                  |                 2 |              0.10735 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2184 | 5-10%                   |                 2 |              0.1092  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 10-15%                  |                 2 |              0.1121  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2412 | 5-10%                   |                 2 |              0.1206  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.2459 | >20%                    |                 5 |              0.04918 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2495 | <5%                     |                 2 |              0.12475 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2622 | 5-10%                   |                 2 |              0.1311  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2695 | 5-10%                   |                 2 |              0.13475 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2706 | 5-10%                   |                 2 |              0.1353  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.277  | <5%                     |                 2 |              0.1385  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2849 | <5%                     |                 2 |              0.14245 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | <5%                     |                 5 |              0.06008 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.3062 | 5-10%                   |                 2 |              0.1531  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3146 | <5%                     |                 2 |              0.1573  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3218 | <5%                     |                10 |              0.03218 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3263 | <5%                     |                 5 |              0.06526 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3318 | 15-20%                  |                 2 |              0.1659  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3457 | 5-10%                   |                 2 |              0.17285 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3515 | <5%                     |                 2 |              0.17575 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3533 | 15-20%                  |                 2 |              0.17665 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3579 | >20%                    |                 2 |              0.17895 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3607 | <5%                     |                 2 |              0.18035 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.373  | <5%                     |                 5 |              0.0746  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3747 | >20%                    |                 2 |              0.18735 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3763 | >20%                    |                 5 |              0.07526 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3818 | 15-20%                  |                 5 |              0.07636 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3868 | 5-10%                   |                 2 |              0.1934  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3901 | >20%                    |                 2 |              0.19505 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3988 | 10-15%                  |                 5 |              0.07976 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3993 | >20%                    |                 2 |              0.19965 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4127 | 5-10%                   |                 2 |              0.20635 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4149 | 5-10%                   |                 2 |              0.20745 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.416  | 5-10%                   |                 5 |              0.0832  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4204 | >20%                    |                 2 |              0.2102  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4242 | 5-10%                   |                 2 |              0.2121  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4314 | 10-15%                  |                 2 |              0.2157  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4344 | 5-10%                   |                 5 |              0.08688 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4412 | <5%                     |                 5 |              0.08824 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4432 | 15-20%                  |                 5 |              0.08864 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4454 | 10-15%                  |                 5 |              0.08908 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | 5-10%                   |                10 |              0.04529 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4534 | 10-15%                  |                 5 |              0.09068 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4542 | 5-10%                   |                 5 |              0.09084 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.457  | >20%                    |                 2 |              0.2285  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4603 | <5%                     |                 2 |              0.23015 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4631 | 10-15%                  |                 5 |              0.09262 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4677 | 15-20%                  |                 5 |              0.09354 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.468  | 15-20%                  |                 5 |              0.0936  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4704 | >20%                    |                 2 |              0.2352  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4806 | >20%                    |                 5 |              0.09612 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4812 | 15-20%                  |                 5 |              0.09624 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4861 | <5%                     |                 2 |              0.24305 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4923 | <5%                     |                 2 |              0.24615 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.503  | 5-10%                   |                 2 |              0.2515  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.503  | 5-10%                   |                 2 |              0.2515  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5039 | <5%                     |                 2 |              0.25195 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.505  | 5-10%                   |                 5 |              0.101   |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5115 | <5%                     |                 5 |              0.1023  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5127 | >20%                    |                10 |              0.05127 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5176 | 10-15%                  |                 2 |              0.2588  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5324 | <5%                     |                 5 |              0.10648 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5333 | <5%                     |                10 |              0.05333 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5378 | 5-10%                   |                 5 |              0.10756 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5464 | 15-20%                  |                 5 |              0.10928 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.556  | 5-10%                   |                 5 |              0.1112  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5597 | >20%                    |                 5 |              0.11194 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5612 | >20%                    |                 5 |              0.11224 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5661 | >20%                    |                 2 |              0.28305 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5663 | 15-20%                  |                10 |              0.05663 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5665 | 10-15%                  |                 5 |              0.1133  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.57   | 10-15%                  |                10 |              0.057   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5717 | >20%                    |                10 |              0.05717 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5779 | 15-20%                  |                 2 |              0.28895 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5837 | >20%                    |                 5 |              0.11674 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6044 | 5-10%                   |                10 |              0.06044 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6142 | 5-10%                   |                 5 |              0.12284 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.6461 | >20%                    |                10 |              0.06461 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6491 | <5%                     |                 5 |              0.12982 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6616 | 5-10%                   |                10 |              0.06616 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6626 | >20%                    |                10 |              0.06626 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6674 | >20%                    |                 5 |              0.13348 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6676 | >20%                    |                 5 |              0.13352 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6743 | >20%                    |                 2 |              0.33715 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6845 | <5%                     |                 5 |              0.1369  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6902 | <5%                     |                 5 |              0.13804 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.692  | >20%                    |                10 |              0.0692  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6982 | 15-20%                  |                 5 |              0.13964 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7014 | 5-10%                   |                 5 |              0.14028 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7135 | >20%                    |                10 |              0.07135 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7366 | 5-10%                   |                10 |              0.07366 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7405 | <5%                     |                10 |              0.07405 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7563 | 10-15%                  |                10 |              0.07563 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7576 | 15-20%                  |                 5 |              0.15152 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7678 | 15-20%                  |                10 |              0.07678 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7898 | <5%                     |                 5 |              0.15796 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7975 | 5-10%                   |                10 |              0.07975 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.8006 | 5-10%                   |                 5 |              0.16012 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8031 | <5%                     |                 2 |              0.40155 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8054 | >20%                    |                10 |              0.08054 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8073 | <5%                     |                10 |              0.08073 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8147 | 15-20%                  |                10 |              0.08147 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8285 | 10-15%                  |                10 |              0.08285 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8354 | >20%                    |                10 |              0.08354 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8474 | 5-10%                   |                10 |              0.08474 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8484 | 10-15%                  |                10 |              0.08484 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.856  | <5%                     |                10 |              0.0856  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8643 | 5-10%                   |                10 |              0.08643 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8719 | >20%                    |                 5 |              0.17438 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9081 | 5-10%                   |                10 |              0.09081 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9467 | 15-20%                  |                10 |              0.09467 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9741 | <5%                     |                10 |              0.09741 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9973 | <5%                     |                10 |              0.09973 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1      | 5-10%                   |                10 |              0.1     |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0005 | <5%                     |                10 |              0.10005 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0239 | 15-20%                  |                10 |              0.10239 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0533 | >20%                    |                10 |              0.10533 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0544 | <5%                     |                10 |              0.10544 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0573 | >20%                    |                10 |              0.10573 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0595 | <5%                     |                10 |              0.10595 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1401 | 15-20%                  |                10 |              0.11401 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1431 | 10-15%                  |                10 |              0.11431 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3458 | >20%                    |                10 |              0.13458 |