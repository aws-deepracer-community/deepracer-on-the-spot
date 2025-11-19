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

Data correct as of 2025-11-19 01:52:13.506066, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1513 | 15-20%                  |                 2 |              0.07565 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1581 | >20%                    |                 2 |              0.07905 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1804 | <5%                     |                 2 |              0.0902  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2077 | >20%                    |                 2 |              0.10385 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2086 | 10-15%                  |                 2 |              0.1043  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2221 | 15-20%                  |                 2 |              0.11105 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2225 | <5%                     |                 2 |              0.11125 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2229 | 5-10%                   |                 5 |              0.04458 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2334 | >20%                    |                 2 |              0.1167  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2371 | >20%                    |                 5 |              0.04742 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.242  | >20%                    |                 2 |              0.121   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2438 | >20%                    |                 2 |              0.1219  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2471 | >20%                    |                 2 |              0.12355 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2647 | >20%                    |                 2 |              0.13235 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2661 | <5%                     |                 2 |              0.13305 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2727 | >20%                    |                 2 |              0.13635 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2735 | >20%                    |                 2 |              0.13675 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2763 | 10-15%                  |                 5 |              0.05526 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.277  | >20%                    |                 5 |              0.0554  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2817 | 10-15%                  |                 2 |              0.14085 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2845 | 5-10%                   |                 2 |              0.14225 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2925 | >20%                    |                 5 |              0.0585  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.2974 | <5%                     |                 5 |              0.05948 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3149 | <5%                     |                10 |              0.03149 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3173 | <5%                     |                 2 |              0.15865 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3176 | >20%                    |                 5 |              0.06352 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3212 | 10-15%                  |                10 |              0.03212 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3446 | >20%                    |                10 |              0.03446 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3462 | >20%                    |                 5 |              0.06924 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3468 | >20%                    |                 2 |              0.1734  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3474 | 5-10%                   |                 2 |              0.1737  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3491 | >20%                    |                 2 |              0.17455 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3492 | 10-15%                  |                 2 |              0.1746  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3509 | >20%                    |                 2 |              0.17545 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3563 | 10-15%                  |                 2 |              0.17815 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3565 | >20%                    |                10 |              0.03565 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3609 | >20%                    |                10 |              0.03609 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3655 | <5%                     |                 2 |              0.18275 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3687 | >20%                    |                 2 |              0.18435 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3773 | 15-20%                  |                 5 |              0.07546 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3776 | 5-10%                   |                10 |              0.03776 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3786 | 15-20%                  |                 2 |              0.1893  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3863 | >20%                    |                 5 |              0.07726 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3928 | 15-20%                  |                 2 |              0.1964  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3932 | >20%                    |                 2 |              0.1966  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3974 | >20%                    |                 2 |              0.1987  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3979 | <5%                     |                10 |              0.03979 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4001 | >20%                    |                 5 |              0.08002 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4007 | 10-15%                  |                 5 |              0.08014 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4061 | >20%                    |                 2 |              0.20305 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4127 | >20%                    |                 2 |              0.20635 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4179 | >20%                    |                 5 |              0.08358 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4204 | >20%                    |                 5 |              0.08408 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4214 | 5-10%                   |                 2 |              0.2107  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4221 | 15-20%                  |                 2 |              0.21105 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4222 | >20%                    |                 5 |              0.08444 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4225 | 15-20%                  |                 5 |              0.0845  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4237 | <5%                     |                 2 |              0.21185 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4245 | >20%                    |                 5 |              0.0849  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4253 | 15-20%                  |                 5 |              0.08506 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4255 | >20%                    |                 2 |              0.21275 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4283 | 15-20%                  |                 5 |              0.08566 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4317 | >20%                    |                 2 |              0.21585 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4328 | 10-15%                  |                10 |              0.04328 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4347 | 15-20%                  |                10 |              0.04347 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4365 | >20%                    |                10 |              0.04365 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4365 | 10-15%                  |                 5 |              0.0873  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4394 | >20%                    |                 2 |              0.2197  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4413 | >20%                    |                 2 |              0.22065 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4503 | >20%                    |                 5 |              0.09006 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4542 | 10-15%                  |                10 |              0.04542 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4548 | 15-20%                  |                 5 |              0.09096 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.455  | >20%                    |                 2 |              0.2275  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4641 | >20%                    |                 5 |              0.09282 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4676 | >20%                    |                 2 |              0.2338  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4695 | >20%                    |                 2 |              0.23475 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4705 | >20%                    |                 5 |              0.0941  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4714 | >20%                    |                 2 |              0.2357  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4783 | >20%                    |                 2 |              0.23915 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4821 | 10-15%                  |                 2 |              0.24105 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4834 | >20%                    |                 5 |              0.09668 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4855 | >20%                    |                 5 |              0.0971  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4889 | >20%                    |                 5 |              0.09778 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4923 | >20%                    |                 5 |              0.09846 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5108 | >20%                    |                10 |              0.05108 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.511  | 10-15%                  |                 2 |              0.2555  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.514  | >20%                    |                10 |              0.0514  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5222 | 10-15%                  |                 2 |              0.2611  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5229 | 10-15%                  |                 5 |              0.10458 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5258 | 15-20%                  |                 5 |              0.10516 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5279 | >20%                    |                 5 |              0.10558 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5324 | >20%                    |                 2 |              0.2662  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5356 | 15-20%                  |                 5 |              0.10712 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5378 | 5-10%                   |                10 |              0.05378 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5383 | 10-15%                  |                 5 |              0.10766 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5546 | >20%                    |                 5 |              0.11092 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5598 | >20%                    |                 5 |              0.11196 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5681 | >20%                    |                 5 |              0.11362 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.575  | 15-20%                  |                 5 |              0.115   |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5785 | >20%                    |                 5 |              0.1157  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5898 | 10-15%                  |                 5 |              0.11796 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5899 | >20%                    |                 2 |              0.29495 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6033 | 5-10%                   |                 5 |              0.12066 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6131 | 10-15%                  |                 5 |              0.12262 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6134 | 10-15%                  |                 5 |              0.12268 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6196 | >20%                    |                 2 |              0.3098  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6209 | 10-15%                  |                10 |              0.06209 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6212 | >20%                    |                 2 |              0.3106  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6272 | >20%                    |                 2 |              0.3136  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6275 | >20%                    |                 2 |              0.31375 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6284 | >20%                    |                 5 |              0.12568 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6291 | 15-20%                  |                10 |              0.06291 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6416 | 10-15%                  |                 5 |              0.12832 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6522 | 10-15%                  |                 2 |              0.3261  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6587 | >20%                    |                10 |              0.06587 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6587 | 15-20%                  |                 5 |              0.13174 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6626 | 15-20%                  |                10 |              0.06626 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6706 | >20%                    |                 5 |              0.13412 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6716 | >20%                    |                 5 |              0.13432 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.673  | >20%                    |                 5 |              0.1346  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6872 | 5-10%                   |                 2 |              0.3436  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6995 | <5%                     |                10 |              0.06995 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7073 | 5-10%                   |                10 |              0.07073 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7097 | >20%                    |                10 |              0.07097 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7149 | <5%                     |                10 |              0.07149 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7155 | >20%                    |                10 |              0.07155 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7169 | >20%                    |                10 |              0.07169 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7321 | >20%                    |                10 |              0.07321 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7367 | >20%                    |                10 |              0.07367 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7397 | >20%                    |                 5 |              0.14794 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7505 | 15-20%                  |                10 |              0.07505 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7555 | >20%                    |                 5 |              0.1511  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7596 | >20%                    |                10 |              0.07596 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7605 | >20%                    |                10 |              0.07605 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7622 | >20%                    |                 5 |              0.15244 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7667 | >20%                    |                 5 |              0.15334 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7708 | 5-10%                   |                10 |              0.07708 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7762 | >20%                    |                10 |              0.07762 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.7778 | >20%                    |                10 |              0.07778 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7868 | <5%                     |                10 |              0.07868 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8028 | 15-20%                  |                 5 |              0.16056 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8047 | >20%                    |                 2 |              0.40235 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8143 | >20%                    |                10 |              0.08143 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.834  | >20%                    |                10 |              0.0834  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8362 | 10-15%                  |                10 |              0.08362 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8373 | >20%                    |                10 |              0.08373 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8542 | 10-15%                  |                10 |              0.08542 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8757 | >20%                    |                10 |              0.08757 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.876  | >20%                    |                 5 |              0.1752  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8799 | 15-20%                  |                10 |              0.08799 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8887 | 10-15%                  |                10 |              0.08887 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9019 | >20%                    |                 5 |              0.18038 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9263 | >20%                    |                10 |              0.09263 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.933  | >20%                    |                 2 |              0.4665  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9593 | 15-20%                  |                10 |              0.09593 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9719 | >20%                    |                 2 |              0.48595 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9846 | <5%                     |                10 |              0.09846 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9856 | 10-15%                  |                10 |              0.09856 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9862 | <5%                     |                 5 |              0.19724 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9871 | >20%                    |                10 |              0.09871 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.993  | >20%                    |                10 |              0.0993  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9967 | >20%                    |                10 |              0.09967 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.001  | >20%                    |                10 |              0.1001  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0309 | <5%                     |                 5 |              0.20618 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0471 | >20%                    |                 5 |              0.20942 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0493 | >20%                    |                10 |              0.10493 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0839 | >20%                    |                 5 |              0.21678 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1261 | >20%                    |                10 |              0.11261 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1391 | >20%                    |                10 |              0.11391 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1548 | 15-20%                  |                10 |              0.11548 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2788 | >20%                    |                 2 |              0.6394  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3191 | <5%                     |                 2 |              0.65955 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3506 | 10-15%                  |                10 |              0.13506 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3659 | >20%                    |                 5 |              0.27318 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3732 | 15-20%                  |                10 |              0.13732 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3956 | 5-10%                   |                 5 |              0.27912 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4124 | >20%                    |                10 |              0.14124 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4207 | >20%                    |                 2 |              0.71035 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5211 | >20%                    |                10 |              0.15211 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.5481 | >20%                    |                10 |              0.15481 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.032  | 15-20%                  |                10 |              0.2032  |