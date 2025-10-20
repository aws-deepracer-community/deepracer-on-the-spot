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

Data correct as of 2025-10-20 01:55:14.479718, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0996 | 5-10%                   |                 2 |              0.0498  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1283 | >20%                    |                 2 |              0.06415 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1366 | 10-15%                  |                 2 |              0.0683  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.149  | >20%                    |                 5 |              0.0298  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1806 | >20%                    |                 2 |              0.0903  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1929 | >20%                    |                 5 |              0.03858 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2034 | 10-15%                  |                 5 |              0.04068 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2281 | >20%                    |                 5 |              0.04562 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2369 | >20%                    |                 2 |              0.11845 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.238  | >20%                    |                 2 |              0.119   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2383 | 10-15%                  |                 2 |              0.11915 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2436 | >20%                    |                 2 |              0.1218  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.257  | 5-10%                   |                 2 |              0.1285  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2593 | >20%                    |                 2 |              0.12965 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2615 | >20%                    |                 2 |              0.13075 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2644 | >20%                    |                 2 |              0.1322  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2703 | 5-10%                   |                 2 |              0.13515 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.275  | 10-15%                  |                 2 |              0.1375  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2864 | 5-10%                   |                10 |              0.02864 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2874 | >20%                    |                 2 |              0.1437  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3043 | >20%                    |                 2 |              0.15215 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3046 | >20%                    |                 5 |              0.06092 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3081 | 15-20%                  |                 2 |              0.15405 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3279 | >20%                    |                 2 |              0.16395 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3422 | >20%                    |                 2 |              0.1711  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.345  | 10-15%                  |                 2 |              0.1725  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3507 | 5-10%                   |                10 |              0.03507 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3509 | >20%                    |                 2 |              0.17545 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3523 | 15-20%                  |                 2 |              0.17615 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3536 | >20%                    |                 5 |              0.07072 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3546 | >20%                    |                 2 |              0.1773  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3652 | >20%                    |                10 |              0.03652 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3754 | 15-20%                  |                 2 |              0.1877  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3771 | >20%                    |                 2 |              0.18855 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3774 | 10-15%                  |                10 |              0.03774 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3817 | >20%                    |                 5 |              0.07634 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3824 | >20%                    |                 2 |              0.1912  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3906 | >20%                    |                 2 |              0.1953  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.399  | >20%                    |                 5 |              0.0798  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4041 | >20%                    |                 2 |              0.20205 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4113 | >20%                    |                 2 |              0.20565 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4115 | 5-10%                   |                 2 |              0.20575 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.414  | >20%                    |                 2 |              0.207   |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4143 | 15-20%                  |                 2 |              0.20715 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4216 | >20%                    |                 2 |              0.2108  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4237 | 5-10%                   |                 5 |              0.08474 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4262 | >20%                    |                10 |              0.04262 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4264 | <5%                     |                 2 |              0.2132  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4287 | >20%                    |                10 |              0.04287 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.429  | >20%                    |                 5 |              0.0858  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4292 | >20%                    |                 5 |              0.08584 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4311 | >20%                    |                 5 |              0.08622 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4379 | 5-10%                   |                 2 |              0.21895 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4381 | >20%                    |                 2 |              0.21905 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.44   | >20%                    |                 5 |              0.088   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4502 | >20%                    |                 5 |              0.09004 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4548 | >20%                    |                 5 |              0.09096 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4559 | >20%                    |                 2 |              0.22795 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4646 | >20%                    |                 2 |              0.2323  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4667 | >20%                    |                 5 |              0.09334 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4687 | >20%                    |                 5 |              0.09374 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4721 | >20%                    |                 2 |              0.23605 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4752 | 10-15%                  |                 2 |              0.2376  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4809 | 15-20%                  |                 5 |              0.09618 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4812 | >20%                    |                 2 |              0.2406  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4853 | >20%                    |                 2 |              0.24265 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4964 | >20%                    |                 2 |              0.2482  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5012 | >20%                    |                 5 |              0.10024 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5061 | <5%                     |                10 |              0.05061 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5067 | >20%                    |                 2 |              0.25335 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.517  | >20%                    |                 5 |              0.1034  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5221 | 10-15%                  |                 5 |              0.10442 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5238 | >20%                    |                 5 |              0.10476 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5485 | >20%                    |                 5 |              0.1097  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5487 | >20%                    |                 2 |              0.27435 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5549 | >20%                    |                 5 |              0.11098 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5625 | >20%                    |                 5 |              0.1125  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5634 | 5-10%                   |                 2 |              0.2817  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5656 | 15-20%                  |                10 |              0.05656 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5714 | >20%                    |                 5 |              0.11428 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5769 | >20%                    |                 5 |              0.11538 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5798 | 10-15%                  |                 2 |              0.2899  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.58   | >20%                    |                 5 |              0.116   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.594  | >20%                    |                 5 |              0.1188  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5955 | >20%                    |                 5 |              0.1191  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5984 | 15-20%                  |                 2 |              0.2992  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.603  | >20%                    |                 5 |              0.1206  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.605  | 15-20%                  |                 5 |              0.121   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6187 | 10-15%                  |                 5 |              0.12374 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6207 | >20%                    |                 5 |              0.12414 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6217 | >20%                    |                 2 |              0.31085 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6223 | >20%                    |                 5 |              0.12446 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.632  | >20%                    |                 5 |              0.1264  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6375 | >20%                    |                 5 |              0.1275  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6382 | 10-15%                  |                 5 |              0.12764 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6428 | >20%                    |                 2 |              0.3214  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6475 | >20%                    |                10 |              0.06475 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6482 | 15-20%                  |                 5 |              0.12964 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6493 | 15-20%                  |                 2 |              0.32465 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6533 | >20%                    |                 5 |              0.13066 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6542 | 15-20%                  |                10 |              0.06542 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6601 | >20%                    |                 5 |              0.13202 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6757 | >20%                    |                 5 |              0.13514 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6802 | >20%                    |                 5 |              0.13604 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6858 | >20%                    |                 2 |              0.3429  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6861 | >20%                    |                10 |              0.06861 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6973 | >20%                    |                 5 |              0.13946 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7016 | >20%                    |                10 |              0.07016 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7057 | 15-20%                  |                10 |              0.07057 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7118 | <5%                     |                10 |              0.07118 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7185 | 15-20%                  |                10 |              0.07185 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7204 | 15-20%                  |                 5 |              0.14408 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.724  | >20%                    |                10 |              0.0724  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7263 | >20%                    |                 5 |              0.14526 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7264 | >20%                    |                 5 |              0.14528 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7329 | >20%                    |                 5 |              0.14658 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7529 | >20%                    |                10 |              0.07529 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7704 | >20%                    |                10 |              0.07704 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.773  | >20%                    |                 2 |              0.3865  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7898 | >20%                    |                10 |              0.07898 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.792  | 15-20%                  |                10 |              0.0792  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7967 | 10-15%                  |                 2 |              0.39835 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8055 | >20%                    |                10 |              0.08055 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8133 | 15-20%                  |                10 |              0.08133 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8136 | >20%                    |                10 |              0.08136 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8143 | >20%                    |                 5 |              0.16286 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8227 | 15-20%                  |                 5 |              0.16454 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8231 | >20%                    |                 5 |              0.16462 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8269 | 15-20%                  |                10 |              0.08269 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8305 | 5-10%                   |                10 |              0.08305 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8351 | >20%                    |                10 |              0.08351 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8483 | 10-15%                  |                 2 |              0.42415 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8486 | >20%                    |                10 |              0.08486 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8645 | 15-20%                  |                10 |              0.08645 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8702 | 10-15%                  |                 5 |              0.17404 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.871  | >20%                    |                 5 |              0.1742  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8777 | <5%                     |                10 |              0.08777 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8885 | >20%                    |                10 |              0.08885 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8921 | >20%                    |                 5 |              0.17842 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8969 | 15-20%                  |                10 |              0.08969 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9167 | >20%                    |                10 |              0.09167 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9266 | <5%                     |                10 |              0.09266 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9283 | 15-20%                  |                10 |              0.09283 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9296 | >20%                    |                 2 |              0.4648  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9439 | >20%                    |                 2 |              0.47195 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.948  | 10-15%                  |                10 |              0.0948  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9615 | 10-15%                  |                10 |              0.09615 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9939 | >20%                    |                 2 |              0.49695 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9981 | 15-20%                  |                10 |              0.09981 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      1.0014 | 5-10%                   |                10 |              0.10014 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0252 | >20%                    |                 5 |              0.20504 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0574 | 10-15%                  |                10 |              0.10574 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0661 | >20%                    |                10 |              0.10661 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0789 | >20%                    |                10 |              0.10789 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0841 | >20%                    |                10 |              0.10841 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0854 | 15-20%                  |                10 |              0.10854 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.087  | >20%                    |                10 |              0.1087  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1058 | >20%                    |                 5 |              0.22116 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1111 | >20%                    |                 5 |              0.22222 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1172 | >20%                    |                10 |              0.11172 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1233 | >20%                    |                10 |              0.11233 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1427 | 10-15%                  |                 2 |              0.57135 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1523 | 10-15%                  |                10 |              0.11523 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1528 | 5-10%                   |                10 |              0.11528 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1551 | >20%                    |                10 |              0.11551 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1605 | <5%                     |                10 |              0.11605 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1992 | >20%                    |                 5 |              0.23984 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2022 | 5-10%                   |                10 |              0.12022 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.288  | 10-15%                  |                10 |              0.1288  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2949 | 5-10%                   |                 2 |              0.64745 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3112 | >20%                    |                10 |              0.13112 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4011 | 10-15%                  |                 5 |              0.28022 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.623  | >20%                    |                10 |              0.1623  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6285 | >20%                    |                10 |              0.16285 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6355 | 10-15%                  |                 5 |              0.3271  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.744  | >20%                    |                10 |              0.1744  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.8816 | >20%                    |                10 |              0.18816 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2258 | 10-15%                  |                10 |              0.22258 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.401  | 15-20%                  |                10 |              0.2401  |