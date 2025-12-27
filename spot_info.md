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

Data correct as of 2025-12-27 01:57:49.735099, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0977 | >20%                    |                 2 |              0.04885 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1369 | >20%                    |                 2 |              0.06845 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1491 | >20%                    |                 2 |              0.07455 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1654 | >20%                    |                 2 |              0.0827  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1817 | <5%                     |                 2 |              0.09085 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1865 | >20%                    |                 5 |              0.0373  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2203 | 5-10%                   |                 2 |              0.11015 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2318 | >20%                    |                 2 |              0.1159  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2334 | >20%                    |                 2 |              0.1167  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2574 | >20%                    |                 2 |              0.1287  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2603 | >20%                    |                 2 |              0.13015 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2676 | >20%                    |                 2 |              0.1338  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2681 | >20%                    |                 2 |              0.13405 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2681 | <5%                     |                 2 |              0.13405 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2742 | 5-10%                   |                10 |              0.02742 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2799 | >20%                    |                 2 |              0.13995 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2827 | >20%                    |                 2 |              0.14135 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2865 | >20%                    |                 5 |              0.0573  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2865 | 5-10%                   |                 5 |              0.0573  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2879 | 15-20%                  |                 2 |              0.14395 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3018 | >20%                    |                10 |              0.03018 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3043 | >20%                    |                 2 |              0.15215 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3076 | >20%                    |                 2 |              0.1538  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3127 | >20%                    |                 2 |              0.15635 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3331 | >20%                    |                 2 |              0.16655 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3338 | >20%                    |                 5 |              0.06676 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3351 | 15-20%                  |                 5 |              0.06702 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3369 | 5-10%                   |                10 |              0.03369 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3405 | <5%                     |                 5 |              0.0681  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3414 | >20%                    |                 5 |              0.06828 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3482 | >20%                    |                 5 |              0.06964 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3499 | >20%                    |                 5 |              0.06998 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3563 | <5%                     |                 5 |              0.07126 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3568 | >20%                    |                 2 |              0.1784  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3594 | >20%                    |                 5 |              0.07188 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3601 | >20%                    |                 5 |              0.07202 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3628 | 5-10%                   |                 2 |              0.1814  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3656 | 10-15%                  |                 2 |              0.1828  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.366  | >20%                    |                 5 |              0.0732  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.366  | >20%                    |                 2 |              0.183   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3745 | >20%                    |                 2 |              0.18725 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3772 | >20%                    |                 2 |              0.1886  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3798 | 10-15%                  |                 2 |              0.1899  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3856 | >20%                    |                 2 |              0.1928  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3861 | >20%                    |                10 |              0.03861 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.39   | >20%                    |                 5 |              0.078   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3901 | >20%                    |                 2 |              0.19505 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3905 | >20%                    |                 2 |              0.19525 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.396  | 15-20%                  |                10 |              0.0396  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3961 | >20%                    |                 5 |              0.07922 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3968 | >20%                    |                10 |              0.03968 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4011 | <5%                     |                10 |              0.04011 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4107 | >20%                    |                 5 |              0.08214 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4188 | >20%                    |                 5 |              0.08376 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4196 | >20%                    |                 5 |              0.08392 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4207 | <5%                     |                 2 |              0.21035 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4223 | 10-15%                  |                 2 |              0.21115 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4236 | <5%                     |                10 |              0.04236 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4241 | >20%                    |                 2 |              0.21205 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4306 | >20%                    |                 2 |              0.2153  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4407 | >20%                    |                10 |              0.04407 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4421 | <5%                     |                 2 |              0.22105 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.443  | >20%                    |                 2 |              0.2215  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4479 | >20%                    |                 5 |              0.08958 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4511 | >20%                    |                10 |              0.04511 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.452  | >20%                    |                 5 |              0.0904  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.455  | >20%                    |                10 |              0.0455  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4577 | >20%                    |                 5 |              0.09154 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.465  | >20%                    |                 5 |              0.093   |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.465  | >20%                    |                 2 |              0.2325  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4762 | >20%                    |                 2 |              0.2381  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4882 | >20%                    |                 2 |              0.2441  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4936 | 15-20%                  |                 5 |              0.09872 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5006 | 15-20%                  |                 2 |              0.2503  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5045 | >20%                    |                 5 |              0.1009  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5086 | >20%                    |                 5 |              0.10172 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5088 | 15-20%                  |                 2 |              0.2544  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5096 | >20%                    |                 2 |              0.2548  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5114 | >20%                    |                 2 |              0.2557  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5142 | >20%                    |                 2 |              0.2571  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5148 | 15-20%                  |                 5 |              0.10296 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5211 | <5%                     |                 5 |              0.10422 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5327 | >20%                    |                 2 |              0.26635 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5342 | 10-15%                  |                 5 |              0.10684 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5359 | 10-15%                  |                 5 |              0.10718 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5369 | >20%                    |                 5 |              0.10738 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5424 | 15-20%                  |                10 |              0.05424 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5453 | >20%                    |                 5 |              0.10906 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5508 | >20%                    |                 5 |              0.11016 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5555 | 15-20%                  |                 5 |              0.1111  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5562 | 5-10%                   |                 5 |              0.11124 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5601 | >20%                    |                 5 |              0.11202 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5705 | >20%                    |                 2 |              0.28525 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5753 | >20%                    |                 5 |              0.11506 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5853 | >20%                    |                10 |              0.05853 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5897 | >20%                    |                 5 |              0.11794 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5924 | 15-20%                  |                 5 |              0.11848 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6003 | <5%                     |                 5 |              0.12006 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6028 | 5-10%                   |                 5 |              0.12056 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6036 | >20%                    |                10 |              0.06036 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.609  | 10-15%                  |                 2 |              0.3045  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6266 | >20%                    |                 2 |              0.3133  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6314 | >20%                    |                 2 |              0.3157  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6323 | 15-20%                  |                 5 |              0.12646 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6333 | 10-15%                  |                 5 |              0.12666 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6387 | 15-20%                  |                10 |              0.06387 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6494 | >20%                    |                 5 |              0.12988 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6553 | 5-10%                   |                 5 |              0.13106 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6566 | >20%                    |                 2 |              0.3283  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6635 | >20%                    |                 2 |              0.33175 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6711 | >20%                    |                10 |              0.06711 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6722 | 10-15%                  |                 5 |              0.13444 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6755 | >20%                    |                 5 |              0.1351  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7146 | >20%                    |                 2 |              0.3573  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7159 | >20%                    |                10 |              0.07159 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7183 | 15-20%                  |                10 |              0.07183 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.722  | >20%                    |                 5 |              0.1444  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7363 | >20%                    |                10 |              0.07363 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7393 | 15-20%                  |                 2 |              0.36965 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.741  | 15-20%                  |                10 |              0.0741  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7495 | 5-10%                   |                10 |              0.07495 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7521 | >20%                    |                10 |              0.07521 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.7583 | >20%                    |                 5 |              0.15166 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7585 | >20%                    |                10 |              0.07585 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7617 | 15-20%                  |                10 |              0.07617 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7631 | >20%                    |                10 |              0.07631 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7766 | <5%                     |                10 |              0.07766 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7793 | >20%                    |                10 |              0.07793 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7807 | >20%                    |                10 |              0.07807 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7836 | >20%                    |                10 |              0.07836 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7896 | 15-20%                  |                 5 |              0.15792 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7986 | >20%                    |                 5 |              0.15972 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8025 | 15-20%                  |                10 |              0.08025 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8035 | <5%                     |                10 |              0.08035 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8062 | >20%                    |                 2 |              0.4031  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8196 | 15-20%                  |                10 |              0.08196 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8249 | >20%                    |                 5 |              0.16498 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8322 | <5%                     |                 2 |              0.4161  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.835  | 15-20%                  |                10 |              0.0835  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8357 | <5%                     |                10 |              0.08357 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8427 | >20%                    |                 5 |              0.16854 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8508 | >20%                    |                 2 |              0.4254  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8691 | >20%                    |                10 |              0.08691 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8935 | >20%                    |                10 |              0.08935 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8986 | >20%                    |                10 |              0.08986 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9299 | 15-20%                  |                10 |              0.09299 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9447 | >20%                    |                 2 |              0.47235 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9459 | >20%                    |                 2 |              0.47295 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9473 | >20%                    |                10 |              0.09473 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9496 | >20%                    |                 5 |              0.18992 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9514 | >20%                    |                10 |              0.09514 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9651 | >20%                    |                10 |              0.09651 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9667 | 15-20%                  |                10 |              0.09667 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9756 | >20%                    |                10 |              0.09756 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9887 | 10-15%                  |                 5 |              0.19774 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9957 | >20%                    |                 5 |              0.19914 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0013 | 10-15%                  |                10 |              0.10013 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0044 | >20%                    |                10 |              0.10044 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.014  | >20%                    |                 2 |              0.507   |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0233 | >20%                    |                 5 |              0.20466 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0457 | >20%                    |                 5 |              0.20914 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0916 | >20%                    |                 2 |              0.5458  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1379 | >20%                    |                10 |              0.11379 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1385 | >20%                    |                10 |              0.11385 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1419 | >20%                    |                 5 |              0.22838 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1479 | <5%                     |                10 |              0.11479 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1613 | >20%                    |                10 |              0.11613 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.1815 | 10-15%                  |                10 |              0.11815 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2347 | >20%                    |                 5 |              0.24694 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2466 | >20%                    |                10 |              0.12466 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3043 | >20%                    |                10 |              0.13043 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3354 | >20%                    |                10 |              0.13354 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3757 | >20%                    |                 2 |              0.68785 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4164 | 10-15%                  |                 5 |              0.28328 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4565 | >20%                    |                10 |              0.14565 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4833 | >20%                    |                 2 |              0.74165 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5088 | >20%                    |                 5 |              0.30176 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.605  | >20%                    |                10 |              0.1605  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6172 | 15-20%                  |                10 |              0.16172 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9701 | 10-15%                  |                10 |              0.19701 |