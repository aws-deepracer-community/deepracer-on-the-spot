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

Data correct as of 2026-09-02 03:45:23.278802, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1394 | >20%                    |                 2 |              0.0697  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1887 | 15-20%                  |                 2 |              0.09435 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1894 | 15-20%                  |                 2 |              0.0947  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1913 | >20%                    |                 2 |              0.09565 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2144 | >20%                    |                 2 |              0.1072  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2165 | >20%                    |                 2 |              0.10825 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2172 | >20%                    |                 2 |              0.1086  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2266 | 10-15%                  |                 2 |              0.1133  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2385 | >20%                    |                 5 |              0.0477  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2405 | >20%                    |                 2 |              0.12025 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2477 | 5-10%                   |                10 |              0.02477 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2582 | >20%                    |                 2 |              0.1291  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2692 | 15-20%                  |                 5 |              0.05384 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2726 | 15-20%                  |                 2 |              0.1363  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2729 | >20%                    |                 2 |              0.13645 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2745 | 5-10%                   |                10 |              0.02745 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2865 | 15-20%                  |                 5 |              0.0573  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2868 | 10-15%                  |                 2 |              0.1434  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.296  | >20%                    |                 2 |              0.148   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2962 | >20%                    |                 5 |              0.05924 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3013 | <5%                     |                 2 |              0.15065 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3255 | >20%                    |                 2 |              0.16275 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3257 | >20%                    |                 2 |              0.16285 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3315 | >20%                    |                 5 |              0.0663  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3392 | >20%                    |                 2 |              0.1696  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3469 | >20%                    |                10 |              0.03469 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3593 | >20%                    |                 5 |              0.07186 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3603 | >20%                    |                 5 |              0.07206 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.361  | 10-15%                  |                 2 |              0.1805  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3623 | >20%                    |                 5 |              0.07246 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3626 | >20%                    |                 5 |              0.07252 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3693 | >20%                    |                10 |              0.03693 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3767 | >20%                    |                 2 |              0.18835 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3775 | <5%                     |                 2 |              0.18875 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3826 | >20%                    |                 5 |              0.07652 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3983 | >20%                    |                 5 |              0.07966 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4062 | 15-20%                  |                 2 |              0.2031  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4108 | >20%                    |                 2 |              0.2054  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4113 | <5%                     |                 5 |              0.08226 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4117 | >20%                    |                 2 |              0.20585 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4135 | 10-15%                  |                 2 |              0.20675 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4179 | >20%                    |                 5 |              0.08358 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4268 | >20%                    |                 2 |              0.2134  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4318 | >20%                    |                10 |              0.04318 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.438  | >20%                    |                 2 |              0.219   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4454 | >20%                    |                 2 |              0.2227  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4467 | >20%                    |                10 |              0.04467 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4482 | >20%                    |                10 |              0.04482 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.4583 |                         |                 5 |              0.09166 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4641 | >20%                    |                 5 |              0.09282 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4686 | >20%                    |                 5 |              0.09372 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.474  | 15-20%                  |                 2 |              0.237   |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4795 | 15-20%                  |                 5 |              0.0959  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4836 | >20%                    |                 5 |              0.09672 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4887 | <5%                     |                 2 |              0.24435 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4959 | >20%                    |                 5 |              0.09918 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4972 | 10-15%                  |                10 |              0.04972 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.5009 |                         |                 2 |              0.25045 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5051 | >20%                    |                 5 |              0.10102 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5182 | >20%                    |                10 |              0.05182 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5183 | 15-20%                  |                10 |              0.05183 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5285 | >20%                    |                 5 |              0.1057  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5321 | >20%                    |                 5 |              0.10642 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5343 | 5-10%                   |                 2 |              0.26715 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5352 | >20%                    |                 5 |              0.10704 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5418 | >20%                    |                10 |              0.05418 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5433 | >20%                    |                 5 |              0.10866 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5508 | >20%                    |                 5 |              0.11016 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5514 | >20%                    |                 5 |              0.11028 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5541 | >20%                    |                 2 |              0.27705 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5557 | >20%                    |                10 |              0.05557 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5635 | >20%                    |                 2 |              0.28175 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5776 | >20%                    |                10 |              0.05776 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5868 | >20%                    |                 2 |              0.2934  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.587  | >20%                    |                 5 |              0.1174  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6048 | 10-15%                  |                 5 |              0.12096 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6147 | 5-10%                   |                10 |              0.06147 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6148 | >20%                    |                 5 |              0.12296 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6231 | >20%                    |                 5 |              0.12462 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.629  | 5-10%                   |                 5 |              0.1258  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6348 | >20%                    |                10 |              0.06348 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6418 | >20%                    |                 2 |              0.3209  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6453 | >20%                    |                 2 |              0.32265 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6517 | 15-20%                  |                10 |              0.06517 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6542 | >20%                    |                 5 |              0.13084 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6567 | 5-10%                   |                10 |              0.06567 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6695 | >20%                    |                10 |              0.06695 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6831 | >20%                    |                 5 |              0.13662 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6871 | >20%                    |                 2 |              0.34355 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6878 | 15-20%                  |                10 |              0.06878 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.709  | >20%                    |                10 |              0.0709  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7116 | >20%                    |                 5 |              0.14232 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7382 | >20%                    |                 2 |              0.3691  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7575 | >20%                    |                 5 |              0.1515  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.771  | >20%                    |                10 |              0.0771  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.778  | >20%                    |                 2 |              0.389   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7876 | 15-20%                  |                 2 |              0.3938  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.796  | >20%                    |                10 |              0.0796  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8131 | >20%                    |                10 |              0.08131 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8154 | 5-10%                   |                 2 |              0.4077  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8194 | <5%                     |                10 |              0.08194 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8206 | 10-15%                  |                 2 |              0.4103  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8207 | >20%                    |                10 |              0.08207 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8238 | >20%                    |                10 |              0.08238 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8267 | 15-20%                  |                10 |              0.08267 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8316 | >20%                    |                 5 |              0.16632 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8624 | >20%                    |                 5 |              0.17248 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8667 | >20%                    |                 5 |              0.17334 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8676 | 5-10%                   |                10 |              0.08676 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.8717 | >20%                    |                 2 |              0.43585 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9154 |                         |                 2 |              0.4577  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9186 | >20%                    |                10 |              0.09186 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9391 | 10-15%                  |                 2 |              0.46955 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9414 | >20%                    |                 2 |              0.4707  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9577 | 5-10%                   |                 5 |              0.19154 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9732 | >20%                    |                10 |              0.09732 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9923 | 10-15%                  |                 2 |              0.49615 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0053 | >20%                    |                10 |              0.10053 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0153 | 15-20%                  |                10 |              0.10153 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.02   | >20%                    |                10 |              0.102   |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0347 | >20%                    |                10 |              0.10347 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0373 | >20%                    |                10 |              0.10373 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0426 | >20%                    |                10 |              0.10426 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0463 | >20%                    |                 5 |              0.20926 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0785 | 5-10%                   |                10 |              0.10785 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0837 | >20%                    |                10 |              0.10837 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.1198 | >20%                    |                 5 |              0.22396 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.127  | 15-20%                  |                10 |              0.1127  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1357 |                         |                 2 |              0.56785 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1404 | >20%                    |                10 |              0.11404 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1526 | >20%                    |                 5 |              0.23052 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1528 | >20%                    |                 5 |              0.23056 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1623 |                         |                10 |              0.11623 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1863 |                         |                 5 |              0.23726 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2056 |                         |                 5 |              0.24112 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2216 | >20%                    |                 2 |              0.6108  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2415 | >20%                    |                 5 |              0.2483  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.2616 | >20%                    |                 5 |              0.25232 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2744 | >20%                    |                10 |              0.12744 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3083 | >20%                    |                 5 |              0.26166 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3375 | 10-15%                  |                10 |              0.13375 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3605 | 15-20%                  |                10 |              0.13605 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.4173 | >20%                    |                 5 |              0.28346 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.5478 | >20%                    |                10 |              0.15478 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5947 | 15-20%                  |                 5 |              0.31894 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5988 | >20%                    |                10 |              0.15988 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6139 |                         |                10 |              0.16139 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.6145 |                         |                10 |              0.16145 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6546 | 15-20%                  |                10 |              0.16546 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.6685 | >20%                    |                10 |              0.16685 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.932  | 5-10%                   |                 2 |              0.966   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.9508 | >20%                    |                10 |              0.19508 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9808 | 5-10%                   |                 2 |              0.9904  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.1248 | >20%                    |                 5 |              0.42496 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.2057 | >20%                    |                10 |              0.22057 |