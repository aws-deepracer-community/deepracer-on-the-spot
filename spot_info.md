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

Data correct as of 2025-11-26 01:54:00.443867, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1352 | >20%                    |                 2 |              0.0676  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1467 | >20%                    |                 2 |              0.07335 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.1604 | 15-20%                  |                 2 |              0.0802  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1786 | <5%                     |                 2 |              0.0893  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1963 | <5%                     |                 2 |              0.09815 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2018 | 10-15%                  |                 2 |              0.1009  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2147 | >20%                    |                 2 |              0.10735 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2238 | >20%                    |                 2 |              0.1119  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2287 | 15-20%                  |                 2 |              0.11435 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2312 | >20%                    |                 2 |              0.1156  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2408 | >20%                    |                 2 |              0.1204  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2584 | >20%                    |                 2 |              0.1292  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2589 | 5-10%                   |                 5 |              0.05178 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2605 | >20%                    |                 2 |              0.13025 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2607 | 10-15%                  |                 5 |              0.05214 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2622 | >20%                    |                10 |              0.02622 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2704 | >20%                    |                 5 |              0.05408 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2713 | <5%                     |                 2 |              0.13565 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2744 | >20%                    |                 2 |              0.1372  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2765 | >20%                    |                 5 |              0.0553  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2821 | >20%                    |                 2 |              0.14105 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2857 | 5-10%                   |                 2 |              0.14285 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2901 | 10-15%                  |                 2 |              0.14505 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3151 | <5%                     |                 5 |              0.06302 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3161 | >20%                    |                 5 |              0.06322 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3195 | >20%                    |                 5 |              0.0639  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3295 | 10-15%                  |                10 |              0.03295 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3343 | <5%                     |                 2 |              0.16715 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3349 | >20%                    |                 5 |              0.06698 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3353 | 10-15%                  |                10 |              0.03353 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.346  | >20%                    |                10 |              0.0346  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3468 | 5-10%                   |                 2 |              0.1734  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3498 | >20%                    |                 2 |              0.1749  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3534 | 10-15%                  |                 2 |              0.1767  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3539 | >20%                    |                 2 |              0.17695 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3559 | 5-10%                   |                10 |              0.03559 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3603 | 10-15%                  |                 2 |              0.18015 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3654 | >20%                    |                 2 |              0.1827  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3655 | >20%                    |                 5 |              0.0731  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3677 | 15-20%                  |                 5 |              0.07354 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3682 | >20%                    |                 2 |              0.1841  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3813 | >20%                    |                10 |              0.03813 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3871 | <5%                     |                 2 |              0.19355 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.39   | >20%                    |                 2 |              0.195   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3928 | 15-20%                  |                 2 |              0.1964  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.393  | >20%                    |                 5 |              0.0786  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3939 | >20%                    |                 5 |              0.07878 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.3953 | >20%                    |                 2 |              0.19765 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3963 | 15-20%                  |                 2 |              0.19815 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3976 | 10-15%                  |                 5 |              0.07952 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3993 | 15-20%                  |                 5 |              0.07986 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4023 | >20%                    |                 2 |              0.20115 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4037 | 10-15%                  |                10 |              0.04037 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4056 | >20%                    |                 5 |              0.08112 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4059 | >20%                    |                 2 |              0.20295 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4107 | >20%                    |                 2 |              0.20535 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4223 | >20%                    |                 5 |              0.08446 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4233 | >20%                    |                 2 |              0.21165 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4257 | 15-20%                  |                 2 |              0.21285 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4291 | 15-20%                  |                 5 |              0.08582 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4338 | >20%                    |                 2 |              0.2169  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.439  | 5-10%                   |                 2 |              0.2195  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4411 | >20%                    |                 2 |              0.22055 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4503 | >20%                    |                 5 |              0.09006 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4506 | >20%                    |                 2 |              0.2253  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4521 | >20%                    |                 5 |              0.09042 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4576 | 10-15%                  |                 5 |              0.09152 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4647 | <5%                     |                 2 |              0.23235 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4676 | >20%                    |                 2 |              0.2338  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4743 | >20%                    |                10 |              0.04743 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4744 | >20%                    |                10 |              0.04744 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4747 | 15-20%                  |                 5 |              0.09494 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4806 | 10-15%                  |                 2 |              0.2403  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4822 | 15-20%                  |                10 |              0.04822 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4838 | >20%                    |                 5 |              0.09676 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4844 | >20%                    |                 2 |              0.2422  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4845 | >20%                    |                 2 |              0.24225 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4851 | 15-20%                  |                 5 |              0.09702 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4863 | >20%                    |                 5 |              0.09726 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4868 | 10-15%                  |                 2 |              0.2434  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4959 | 10-15%                  |                 5 |              0.09918 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4991 | 10-15%                  |                 5 |              0.09982 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5066 | >20%                    |                 5 |              0.10132 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5105 | 10-15%                  |                 2 |              0.25525 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5129 | >20%                    |                 5 |              0.10258 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5264 | >20%                    |                 5 |              0.10528 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5271 | >20%                    |                 5 |              0.10542 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5471 | >20%                    |                 5 |              0.10942 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5502 | 15-20%                  |                 5 |              0.11004 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5691 | >20%                    |                 5 |              0.11382 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5729 | 5-10%                   |                10 |              0.05729 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5749 | >20%                    |                 5 |              0.11498 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5784 | 15-20%                  |                 5 |              0.11568 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5897 | >20%                    |                 2 |              0.29485 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.593  | <5%                     |                10 |              0.0593  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5943 | >20%                    |                 2 |              0.29715 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5951 | 10-15%                  |                 5 |              0.11902 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6005 | >20%                    |                10 |              0.06005 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6005 | 10-15%                  |                 5 |              0.1201  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6017 | 15-20%                  |                 5 |              0.12034 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6023 | >20%                    |                 2 |              0.30115 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6054 | 10-15%                  |                 5 |              0.12108 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6064 | 15-20%                  |                 5 |              0.12128 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6067 | >20%                    |                 2 |              0.30335 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6168 | >20%                    |                 5 |              0.12336 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.618  | >20%                    |                 2 |              0.309   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6207 | 15-20%                  |                10 |              0.06207 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.621  | <5%                     |                10 |              0.0621  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6293 | 5-10%                   |                 5 |              0.12586 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6381 | >20%                    |                 5 |              0.12762 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6392 | 10-15%                  |                 5 |              0.12784 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6421 | >20%                    |                 5 |              0.12842 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.658  | >20%                    |                 2 |              0.329   |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6585 | >20%                    |                 5 |              0.1317  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6638 | >20%                    |                 5 |              0.13276 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6717 | 5-10%                   |                 2 |              0.33585 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6718 | >20%                    |                10 |              0.06718 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6736 | >20%                    |                10 |              0.06736 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6736 | 5-10%                   |                10 |              0.06736 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6857 | 15-20%                  |                10 |              0.06857 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6924 | >20%                    |                 5 |              0.13848 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7265 | >20%                    |                10 |              0.07265 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7329 | >20%                    |                10 |              0.07329 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.735  | >20%                    |                 5 |              0.147   |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7363 | >20%                    |                10 |              0.07363 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7468 | 10-15%                  |                 2 |              0.3734  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7494 | 15-20%                  |                10 |              0.07494 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7509 | <5%                     |                10 |              0.07509 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7543 | >20%                    |                 2 |              0.37715 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7631 | 10-15%                  |                10 |              0.07631 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7667 | >20%                    |                10 |              0.07667 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7739 | >20%                    |                10 |              0.07739 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7742 | >20%                    |                10 |              0.07742 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7756 | >20%                    |                10 |              0.07756 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7795 | >20%                    |                10 |              0.07795 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7863 | 10-15%                  |                10 |              0.07863 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8054 | >20%                    |                 5 |              0.16108 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8292 | >20%                    |                 5 |              0.16584 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8295 | >20%                    |                10 |              0.08295 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8333 | >20%                    |                10 |              0.08333 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8366 | 15-20%                  |                 5 |              0.16732 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8512 | >20%                    |                10 |              0.08512 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.853  | >20%                    |                 5 |              0.1706  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8569 | 5-10%                   |                10 |              0.08569 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8592 | <5%                     |                 5 |              0.17184 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8648 | 10-15%                  |                10 |              0.08648 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8718 | >20%                    |                 5 |              0.17436 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8839 | >20%                    |                 5 |              0.17678 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8963 | 10-15%                  |                10 |              0.08963 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9066 | 15-20%                  |                10 |              0.09066 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9229 | >20%                    |                 2 |              0.46145 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9274 | 10-15%                  |                10 |              0.09274 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9395 | >20%                    |                10 |              0.09395 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9429 | >20%                    |                 2 |              0.47145 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.944  | >20%                    |                10 |              0.0944  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9505 | >20%                    |                10 |              0.09505 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.97   | >20%                    |                10 |              0.097   |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9731 | >20%                    |                 5 |              0.19462 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.982  | <5%                     |                10 |              0.0982  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9835 | >20%                    |                 2 |              0.49175 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0246 | >20%                    |                10 |              0.10246 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.03   | >20%                    |                10 |              0.103   |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0304 | 15-20%                  |                10 |              0.10304 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0319 | >20%                    |                10 |              0.10319 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.067  | >20%                    |                10 |              0.1067  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0688 | <5%                     |                 5 |              0.21376 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0906 | 15-20%                  |                10 |              0.10906 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1447 | 15-20%                  |                10 |              0.11447 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.166  | >20%                    |                 5 |              0.2332  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.1689 | <5%                     |                 2 |              0.58445 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.175  | >20%                    |                10 |              0.1175  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2252 | >20%                    |                10 |              0.12252 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2698 | >20%                    |                 2 |              0.6349  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3032 | >20%                    |                 5 |              0.26064 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3595 | 10-15%                  |                10 |              0.13595 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3777 | >20%                    |                 2 |              0.68885 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3811 | >20%                    |                10 |              0.13811 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4852 | 5-10%                   |                 5 |              0.29704 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6456 | >20%                    |                10 |              0.16456 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9914 | 15-20%                  |                10 |              0.19914 |