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

Data correct as of 2026-05-05 03:25:34.512687, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1384 | >20%                    |                 2 |              0.0692  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1427 | 15-20%                  |                 2 |              0.07135 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1694 | >20%                    |                 2 |              0.0847  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2274 | 15-20%                  |                 5 |              0.04548 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2339 | >20%                    |                 2 |              0.11695 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2372 | >20%                    |                 2 |              0.1186  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2463 | 15-20%                  |                 2 |              0.12315 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2564 | >20%                    |                 2 |              0.1282  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2605 | >20%                    |                 2 |              0.13025 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2675 | 15-20%                  |                 5 |              0.0535  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2874 | >20%                    |                 2 |              0.1437  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.289  | >20%                    |                 5 |              0.0578  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.289  | >20%                    |                 2 |              0.1445  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.2918 | 10-15%                  |                 2 |              0.1459  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2947 | 15-20%                  |                 5 |              0.05894 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2947 | 15-20%                  |                 2 |              0.14735 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2989 | >20%                    |                 5 |              0.05978 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3044 | >20%                    |                 2 |              0.1522  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3174 | >20%                    |                 5 |              0.06348 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3221 | 10-15%                  |                 2 |              0.16105 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3285 | 10-15%                  |                 2 |              0.16425 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3289 | >20%                    |                 5 |              0.06578 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.331  | 10-15%                  |                 2 |              0.1655  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3413 | <5%                     |                 2 |              0.17065 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3452 | >20%                    |                10 |              0.03452 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3471 | 5-10%                   |                10 |              0.03471 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3485 | >20%                    |                 2 |              0.17425 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3496 | 5-10%                   |                10 |              0.03496 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3551 | >20%                    |                 5 |              0.07102 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3551 | >20%                    |                 2 |              0.17755 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3585 | >20%                    |                 5 |              0.0717  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3664 | >20%                    |                 5 |              0.07328 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3691 | >20%                    |                 2 |              0.18455 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3703 | >20%                    |                 5 |              0.07406 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3713 | >20%                    |                 5 |              0.07426 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3933 | >20%                    |                 2 |              0.19665 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3968 | >20%                    |                 2 |              0.1984  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4014 | >20%                    |                 5 |              0.08028 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.402  | >20%                    |                 5 |              0.0804  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4032 | >20%                    |                 5 |              0.08064 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4062 | >20%                    |                 2 |              0.2031  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4183 | >20%                    |                 5 |              0.08366 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4279 | >20%                    |                 5 |              0.08558 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4308 | 5-10%                   |                 2 |              0.2154  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.431  | >20%                    |                 5 |              0.0862  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4324 | <5%                     |                 2 |              0.2162  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.438  | >20%                    |                 2 |              0.219   |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4386 | >20%                    |                10 |              0.04386 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4451 | >20%                    |                 5 |              0.08902 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4521 | 15-20%                  |                 2 |              0.22605 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4581 | >20%                    |                10 |              0.04581 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4583 | >20%                    |                 2 |              0.22915 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4609 | <5%                     |                 2 |              0.23045 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4643 | <5%                     |                 5 |              0.09286 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4662 | 15-20%                  |                 2 |              0.2331  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4726 | >20%                    |                 2 |              0.2363  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4772 | >20%                    |                 5 |              0.09544 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4779 | >20%                    |                 5 |              0.09558 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4831 | >20%                    |                10 |              0.04831 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4861 | >20%                    |                 5 |              0.09722 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4863 | 10-15%                  |                 2 |              0.24315 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4894 | >20%                    |                 5 |              0.09788 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4904 | >20%                    |                 5 |              0.09808 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4926 | >20%                    |                10 |              0.04926 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4932 | >20%                    |                 2 |              0.2466  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5049 | >20%                    |                 2 |              0.25245 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5209 | 15-20%                  |                 5 |              0.10418 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5279 | 5-10%                   |                 5 |              0.10558 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5481 | 10-15%                  |                 5 |              0.10962 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5698 | 15-20%                  |                 2 |              0.2849  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5729 | >20%                    |                 5 |              0.11458 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5775 | 5-10%                   |                 5 |              0.1155  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.578  | >20%                    |                 2 |              0.289   |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5812 | >20%                    |                10 |              0.05812 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6084 | >20%                    |                 2 |              0.3042  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6132 | >20%                    |                 2 |              0.3066  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6284 | >20%                    |                 2 |              0.3142  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6284 | 5-10%                   |                 2 |              0.3142  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.633  | >20%                    |                10 |              0.0633  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6574 | >20%                    |                 5 |              0.13148 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6632 | >20%                    |                 5 |              0.13264 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6645 | 5-10%                   |                10 |              0.06645 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6661 | 15-20%                  |                10 |              0.06661 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6722 | >20%                    |                10 |              0.06722 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6731 | >20%                    |                10 |              0.06731 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6768 | >20%                    |                 2 |              0.3384  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6775 | >20%                    |                 5 |              0.1355  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6817 | >20%                    |                 5 |              0.13634 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6855 | >20%                    |                 5 |              0.1371  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6872 | >20%                    |                 2 |              0.3436  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6898 | 10-15%                  |                 2 |              0.3449  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6964 | >20%                    |                10 |              0.06964 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7004 | >20%                    |                10 |              0.07004 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.7122 | >20%                    |                10 |              0.07122 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7293 | >20%                    |                 5 |              0.14586 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7316 | >20%                    |                 2 |              0.3658  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7328 | 15-20%                  |                10 |              0.07328 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7355 | >20%                    |                 5 |              0.1471  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7428 | >20%                    |                 5 |              0.14856 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7439 | >20%                    |                 5 |              0.14878 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7526 | >20%                    |                10 |              0.07526 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7546 | >20%                    |                 5 |              0.15092 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7579 | 5-10%                   |                10 |              0.07579 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7644 | 15-20%                  |                10 |              0.07644 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8263 | >20%                    |                10 |              0.08263 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8313 | 5-10%                   |                10 |              0.08313 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8423 | >20%                    |                 5 |              0.16846 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8426 | >20%                    |                10 |              0.08426 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8462 | >20%                    |                10 |              0.08462 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8575 | >20%                    |                 5 |              0.1715  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8718 | >20%                    |                 2 |              0.4359  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8796 | >20%                    |                10 |              0.08796 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8866 | >20%                    |                 5 |              0.17732 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8915 |                         |                 2 |              0.44575 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9132 | >20%                    |                10 |              0.09132 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9268 | >20%                    |                10 |              0.09268 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9268 | >20%                    |                10 |              0.09268 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9301 | >20%                    |                10 |              0.09301 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9334 | >20%                    |                10 |              0.09334 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9383 | 15-20%                  |                10 |              0.09383 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9387 | >20%                    |                10 |              0.09387 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9489 | 10-15%                  |                10 |              0.09489 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9501 | >20%                    |                 5 |              0.19002 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9568 | >20%                    |                 5 |              0.19136 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9582 | 15-20%                  |                10 |              0.09582 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9892 |                         |                 2 |              0.4946  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0537 | 15-20%                  |                10 |              0.10537 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0583 | >20%                    |                10 |              0.10583 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0907 | >20%                    |                10 |              0.10907 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1113 | >20%                    |                 2 |              0.55565 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1288 | >20%                    |                10 |              0.11288 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1709 | 10-15%                  |                10 |              0.11709 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1825 | >20%                    |                10 |              0.11825 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2216 | >20%                    |                 5 |              0.24432 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2368 | 5-10%                   |                 2 |              0.6184  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.2511 | 5-10%                   |                 2 |              0.62555 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2662 |                         |                 5 |              0.25324 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2701 |                         |                 5 |              0.25402 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2915 | >20%                    |                 5 |              0.2583  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3148 | >20%                    |                 5 |              0.26296 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3195 | >20%                    |                 5 |              0.2639  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4197 | 15-20%                  |                 5 |              0.28394 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4686 | >20%                    |                10 |              0.14686 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5259 | >20%                    |                10 |              0.15259 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5283 | 15-20%                  |                10 |              0.15283 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5589 | 15-20%                  |                10 |              0.15589 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.6073 | >20%                    |                10 |              0.16073 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6077 | 10-15%                  |                 2 |              0.80385 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.6186 | >20%                    |                10 |              0.16186 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.7236 |                         |                10 |              0.17236 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.9708 |                         |                10 |              0.19708 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.131  | >20%                    |                10 |              0.2131  |