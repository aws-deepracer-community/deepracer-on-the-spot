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

Data correct as of 2026-08-23 01:38:54.099183, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1482 | >20%                    |                 2 |              0.0741  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1595 | >20%                    |                 2 |              0.07975 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2004 | 15-20%                  |                 2 |              0.1002  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2056 | >20%                    |                 2 |              0.1028  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2102 | >20%                    |                 2 |              0.1051  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2227 | >20%                    |                 2 |              0.11135 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2261 | >20%                    |                 2 |              0.11305 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2373 | 15-20%                  |                 2 |              0.11865 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2386 | 15-20%                  |                 2 |              0.1193  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2389 | 10-15%                  |                 2 |              0.11945 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2566 | 10-15%                  |                 2 |              0.1283  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2708 | >20%                    |                 2 |              0.1354  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2822 | >20%                    |                 2 |              0.1411  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2863 | >20%                    |                 2 |              0.14315 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2944 | >20%                    |                 5 |              0.05888 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3069 | >20%                    |                 2 |              0.15345 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3115 | >20%                    |                 2 |              0.15575 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3212 | 15-20%                  |                 5 |              0.06424 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3227 | >20%                    |                 2 |              0.16135 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3235 | >20%                    |                 5 |              0.0647  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3406 | >20%                    |                10 |              0.03406 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3477 | 5-10%                   |                10 |              0.03477 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3563 | >20%                    |                 5 |              0.07126 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3627 | >20%                    |                 5 |              0.07254 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3705 | 10-15%                  |                 2 |              0.18525 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3724 | >20%                    |                10 |              0.03724 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3775 | <5%                     |                 2 |              0.18875 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.385  | <5%                     |                 2 |              0.1925  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3866 | >20%                    |                 5 |              0.07732 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3866 | >20%                    |                 5 |              0.07732 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3914 | >20%                    |                10 |              0.03914 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3978 | >20%                    |                10 |              0.03978 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3979 | 5-10%                   |                10 |              0.03979 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4041 | >20%                    |                 2 |              0.20205 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4059 | >20%                    |                 5 |              0.08118 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.408  | >20%                    |                 5 |              0.0816  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4085 | 15-20%                  |                 2 |              0.20425 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4118 | 15-20%                  |                 2 |              0.2059  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4156 | >20%                    |                 2 |              0.2078  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4247 | 15-20%                  |                 5 |              0.08494 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4312 | >20%                    |                 2 |              0.2156  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4315 | >20%                    |                 2 |              0.21575 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4381 | 10-15%                  |                 2 |              0.21905 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4438 | >20%                    |                 2 |              0.2219  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4491 | >20%                    |                 5 |              0.08982 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4513 | >20%                    |                 5 |              0.09026 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4556 | >20%                    |                 2 |              0.2278  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4568 | >20%                    |                 5 |              0.09136 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4656 | >20%                    |                 5 |              0.09312 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4739 | >20%                    |                 5 |              0.09478 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4786 | >20%                    |                 5 |              0.09572 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4873 | >20%                    |                10 |              0.04873 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4913 | >20%                    |                 2 |              0.24565 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4945 | >20%                    |                 5 |              0.0989  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.499  | 15-20%                  |                 5 |              0.0998  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5075 | >20%                    |                 5 |              0.1015  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5094 | >20%                    |                 2 |              0.2547  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5136 | >20%                    |                 2 |              0.2568  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5218 | >20%                    |                 5 |              0.10436 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5307 | >20%                    |                10 |              0.05307 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5381 | <5%                     |                 2 |              0.26905 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5456 | >20%                    |                10 |              0.05456 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5461 | <5%                     |                 5 |              0.10922 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5475 | 5-10%                   |                 2 |              0.27375 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5509 | >20%                    |                 5 |              0.11018 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.56   | >20%                    |                 5 |              0.112   |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5649 | >20%                    |                 2 |              0.28245 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5825 | >20%                    |                 5 |              0.1165  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5912 | >20%                    |                 5 |              0.11824 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.5938 |                         |                 2 |              0.2969  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5944 | >20%                    |                 2 |              0.2972  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5975 | 10-15%                  |                10 |              0.05975 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5979 | 10-15%                  |                 5 |              0.11958 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5998 | 15-20%                  |                10 |              0.05998 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6102 | >20%                    |                 5 |              0.12204 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.613  | >20%                    |                 2 |              0.3065  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6168 | >20%                    |                 5 |              0.12336 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6263 | >20%                    |                 2 |              0.31315 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6469 | >20%                    |                 2 |              0.32345 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6493 | 5-10%                   |                 5 |              0.12986 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6555 | >20%                    |                 5 |              0.1311  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.663  | 15-20%                  |                10 |              0.0663  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.663  | >20%                    |                 2 |              0.3315  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6689 | >20%                    |                10 |              0.06689 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6725 | 5-10%                   |                10 |              0.06725 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6939 | >20%                    |                 2 |              0.34695 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6955 | >20%                    |                 5 |              0.1391  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6981 | >20%                    |                10 |              0.06981 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7118 | >20%                    |                10 |              0.07118 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.7234 |                         |                 5 |              0.14468 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.729  | >20%                    |                 5 |              0.1458  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7456 | 5-10%                   |                10 |              0.07456 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.746  | >20%                    |                10 |              0.0746  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.747  | >20%                    |                10 |              0.0747  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7538 | >20%                    |                10 |              0.07538 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7686 | >20%                    |                 5 |              0.15372 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7917 | >20%                    |                10 |              0.07917 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8007 | >20%                    |                10 |              0.08007 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.81   | 15-20%                  |                10 |              0.081   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8112 | >20%                    |                 5 |              0.16224 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8117 | 5-10%                   |                10 |              0.08117 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8202 | <5%                     |                10 |              0.08202 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8336 | 10-15%                  |                 2 |              0.4168  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8365 | 15-20%                  |                 2 |              0.41825 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.837  | 15-20%                  |                10 |              0.0837  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8481 | >20%                    |                 5 |              0.16962 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8489 | >20%                    |                 5 |              0.16978 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8503 | >20%                    |                10 |              0.08503 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.852  | >20%                    |                10 |              0.0852  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8547 | >20%                    |                10 |              0.08547 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8599 | >20%                    |                10 |              0.08599 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8656 | >20%                    |                10 |              0.08656 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8848 | >20%                    |                10 |              0.08848 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8869 | >20%                    |                 5 |              0.17738 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8997 | >20%                    |                 5 |              0.17994 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9016 | 10-15%                  |                 2 |              0.4508  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9049 | >20%                    |                 2 |              0.45245 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9168 |                         |                10 |              0.09168 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.923  |                         |                 2 |              0.4615  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.9304 | >20%                    |                 5 |              0.18608 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9979 | >20%                    |                 5 |              0.19958 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9986 | >20%                    |                10 |              0.09986 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.002  | >20%                    |                 5 |              0.2004  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0032 | >20%                    |                10 |              0.10032 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0188 | >20%                    |                10 |              0.10188 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0204 | >20%                    |                10 |              0.10204 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0352 | 15-20%                  |                10 |              0.10352 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.0395 | >20%                    |                 5 |              0.2079  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0416 | >20%                    |                 5 |              0.20832 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0467 | >20%                    |                10 |              0.10467 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0511 | 15-20%                  |                10 |              0.10511 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0579 | >20%                    |                 5 |              0.21158 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0601 | >20%                    |                10 |              0.10601 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0763 | >20%                    |                 5 |              0.21526 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0982 | 5-10%                   |                 2 |              0.5491  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.108  | >20%                    |                10 |              0.1108  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1171 | 5-10%                   |                 5 |              0.22342 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1341 | 10-15%                  |                 2 |              0.56705 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1884 | >20%                    |                 2 |              0.5942  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2176 | 5-10%                   |                10 |              0.12176 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2425 |                         |                 5 |              0.2485  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.2482 |                         |                 2 |              0.6241  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2578 | 15-20%                  |                10 |              0.12578 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2864 | >20%                    |                 5 |              0.25728 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2975 |                         |                 5 |              0.2595  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4196 | 10-15%                  |                10 |              0.14196 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4457 | >20%                    |                10 |              0.14457 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.4875 |                         |                10 |              0.14875 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.4945 | >20%                    |                10 |              0.14945 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5479 | 15-20%                  |                 5 |              0.30958 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5893 | >20%                    |                10 |              0.15893 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7161 | 15-20%                  |                10 |              0.17161 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8371 |                         |                10 |              0.18371 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.9236 | 5-10%                   |                 2 |              0.9618  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9564 | 5-10%                   |                 2 |              0.9782  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      2.2542 | >20%                    |                10 |              0.22542 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.3049 | >20%                    |                 5 |              0.46098 |