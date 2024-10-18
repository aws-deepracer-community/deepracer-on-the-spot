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

Data correct as of 2024-10-18 01:38:02.304625, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1048 |                         |                 2 |              0.0524  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1229 |                         |                 2 |              0.06145 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1273 | <5%                     |                 2 |              0.06365 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1291 |                         |                 2 |              0.06455 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1473 |                         |                 5 |              0.02946 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1482 | 10-15%                  |                 2 |              0.0741  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 |                         |                 2 |              0.0831  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1684 |                         |                 5 |              0.03368 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.178  |                         |                 5 |              0.0356  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1805 | <5%                     |                 2 |              0.09025 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1861 | 15-20%                  |                 2 |              0.09305 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2056 | >20%                    |                 2 |              0.1028  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2176 |                         |                10 |              0.02176 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2248 | >20%                    |                 2 |              0.1124  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2322 |                         |                 5 |              0.04644 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2339 | <5%                     |                 2 |              0.11695 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2377 | <5%                     |                 2 |              0.11885 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2382 | >20%                    |                 5 |              0.04764 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2487 | >20%                    |                 5 |              0.04974 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2527 | 15-20%                  |                 2 |              0.12635 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.255  |                         |                10 |              0.0255  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2602 | <5%                     |                 2 |              0.1301  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2618 | >20%                    |                 5 |              0.05236 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2663 | <5%                     |                 2 |              0.13315 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2684 |                         |                10 |              0.02684 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2711 | <5%                     |                 2 |              0.13555 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2712 | <5%                     |                 2 |              0.1356  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2869 | <5%                     |                 2 |              0.14345 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2889 | 5-10%                   |                 2 |              0.14445 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.293  | 15-20%                  |                 2 |              0.1465  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3054 | 10-15%                  |                 2 |              0.1527  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3067 | >20%                    |                 5 |              0.06134 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3083 | 15-20%                  |                 2 |              0.15415 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3094 | 10-15%                  |                 2 |              0.1547  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3098 | 15-20%                  |                 2 |              0.1549  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3258 | 5-10%                   |                 5 |              0.06516 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.333  | <5%                     |                 5 |              0.0666  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3371 | <5%                     |                 2 |              0.16855 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3426 | <5%                     |                 2 |              0.1713  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3458 | >20%                    |                 5 |              0.06916 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3462 | >20%                    |                 2 |              0.1731  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3474 | >20%                    |                 5 |              0.06948 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3549 |                         |                10 |              0.03549 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.365  | 5-10%                   |                 5 |              0.073   |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3735 | 15-20%                  |                10 |              0.03735 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3869 | <5%                     |                10 |              0.03869 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3881 | <5%                     |                 5 |              0.07762 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3938 | >20%                    |                 2 |              0.1969  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.402  | <5%                     |                 5 |              0.0804  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4033 | <5%                     |                 5 |              0.08066 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4046 | 5-10%                   |                 2 |              0.2023  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.407  | <5%                     |                 2 |              0.2035  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4109 | <5%                     |                 2 |              0.20545 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4129 | >20%                    |                 2 |              0.20645 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4207 | 5-10%                   |                 5 |              0.08414 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.425  | 5-10%                   |                10 |              0.0425  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4272 | 5-10%                   |                 2 |              0.2136  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4288 | 15-20%                  |                 5 |              0.08576 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4333 | 15-20%                  |                 5 |              0.08666 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4342 | 15-20%                  |                 2 |              0.2171  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4483 | >20%                    |                 5 |              0.08966 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4488 | 10-15%                  |                 5 |              0.08976 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.451  | >20%                    |                 2 |              0.2255  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4519 | <5%                     |                 5 |              0.09038 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4584 | >20%                    |                 2 |              0.2292  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4591 | >20%                    |                 2 |              0.22955 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4595 | 5-10%                   |                10 |              0.04595 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4602 | <5%                     |                 5 |              0.09204 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4632 | 15-20%                  |                 5 |              0.09264 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4698 | >20%                    |                 5 |              0.09396 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4709 | 5-10%                   |                 2 |              0.23545 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4722 | >20%                    |                10 |              0.04722 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.4736 | 5-10%                   |                 5 |              0.09472 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4807 | 10-15%                  |                 5 |              0.09614 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4832 | >20%                    |                 2 |              0.2416  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4853 | 10-15%                  |                 5 |              0.09706 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4968 | <5%                     |                 2 |              0.2484  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.503  | >20%                    |                 2 |              0.2515  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5113 | 5-10%                   |                10 |              0.05113 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5144 | <5%                     |                 5 |              0.10288 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.5149 | <5%                     |                10 |              0.05149 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5212 | >20%                    |                 5 |              0.10424 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5233 | <5%                     |                 5 |              0.10466 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5237 | <5%                     |                 5 |              0.10474 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.524  | <5%                     |                 5 |              0.1048  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.525  | >20%                    |                10 |              0.0525  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.5536 | >20%                    |                 2 |              0.2768  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5676 | 5-10%                   |                10 |              0.05676 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5801 | >20%                    |                 5 |              0.11602 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5808 | >20%                    |                 5 |              0.11616 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5852 | 15-20%                  |                 5 |              0.11704 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.589  | >20%                    |                 5 |              0.1178  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5912 | 15-20%                  |                 5 |              0.11824 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5972 | 15-20%                  |                10 |              0.05972 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6001 | >20%                    |                 2 |              0.30005 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6077 | 5-10%                   |                 5 |              0.12154 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6372 | 15-20%                  |                10 |              0.06372 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6435 | 5-10%                   |                10 |              0.06435 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6496 | >20%                    |                10 |              0.06496 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.652  | >20%                    |                 5 |              0.1304  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.652  | <5%                     |                10 |              0.0652  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6597 | >20%                    |                10 |              0.06597 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6636 | <5%                     |                10 |              0.06636 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6897 | 5-10%                   |                10 |              0.06897 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.69   | <5%                     |                10 |              0.069   |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6942 | >20%                    |                 2 |              0.3471  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7002 | <5%                     |                10 |              0.07002 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.7078 | 15-20%                  |                10 |              0.07078 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7092 | 5-10%                   |                 5 |              0.14184 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7319 | >20%                    |                10 |              0.07319 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7377 | >20%                    |                 5 |              0.14754 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7566 | 10-15%                  |                10 |              0.07566 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.758  | >20%                    |                10 |              0.0758  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7623 | 5-10%                   |                10 |              0.07623 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7785 | 15-20%                  |                10 |              0.07785 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7881 | 10-15%                  |                 5 |              0.15762 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7975 | 5-10%                   |                10 |              0.07975 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8313 | >20%                    |                10 |              0.08313 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8518 | 15-20%                  |                10 |              0.08518 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8743 | <5%                     |                10 |              0.08743 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8791 | 10-15%                  |                10 |              0.08791 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8812 | >20%                    |                 5 |              0.17624 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9055 | >20%                    |                10 |              0.09055 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9096 | 10-15%                  |                 2 |              0.4548  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9204 | <5%                     |                 2 |              0.4602  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.922  | >20%                    |                10 |              0.0922  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9248 | >20%                    |                10 |              0.09248 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9533 | <5%                     |                10 |              0.09533 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.971  | 5-10%                   |                10 |              0.0971  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.989  | >20%                    |                 5 |              0.1978  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0221 | >20%                    |                10 |              0.10221 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0256 | <5%                     |                10 |              0.10256 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0303 | 10-15%                  |                 5 |              0.20606 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1234 | >20%                    |                10 |              0.11234 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1829 | >20%                    |                10 |              0.11829 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4692 | 5-10%                   |                10 |              0.14692 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4836 | >20%                    |                10 |              0.14836 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5565 | 5-10%                   |                10 |              0.15565 |