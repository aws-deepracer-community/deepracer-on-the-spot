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

Data correct as of 2025-11-09 01:55:42.645533, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1219 | 5-10%                   |                 2 |              0.06095 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1812 | >20%                    |                 5 |              0.03624 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1846 | >20%                    |                 5 |              0.03692 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1939 | >20%                    |                 2 |              0.09695 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2176 | >20%                    |                 2 |              0.1088  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2259 | 5-10%                   |                 2 |              0.11295 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2447 | 10-15%                  |                 2 |              0.12235 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2467 | >20%                    |                 2 |              0.12335 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2487 | >20%                    |                 2 |              0.12435 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2506 | >20%                    |                 2 |              0.1253  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2595 | >20%                    |                 2 |              0.12975 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2642 | 5-10%                   |                 2 |              0.1321  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2662 | 10-15%                  |                 2 |              0.1331  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2684 | >20%                    |                 2 |              0.1342  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2837 | >20%                    |                 2 |              0.14185 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.286  | >20%                    |                 2 |              0.143   |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2914 | >20%                    |                 2 |              0.1457  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2947 | >20%                    |                 2 |              0.14735 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3108 | >20%                    |                 2 |              0.1554  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.318  | 15-20%                  |                 2 |              0.159   |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.319  | >20%                    |                 5 |              0.0638  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3253 | >20%                    |                 2 |              0.16265 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.331  | >20%                    |                 2 |              0.1655  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3355 | >20%                    |                 5 |              0.0671  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3389 | >20%                    |                 5 |              0.06778 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.35   | >20%                    |                 2 |              0.175   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3514 | 10-15%                  |                 2 |              0.1757  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3562 | >20%                    |                 5 |              0.07124 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3602 | >20%                    |                 2 |              0.1801  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.361  | <5%                     |                 2 |              0.1805  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3611 | 10-15%                  |                 2 |              0.18055 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3696 | 15-20%                  |                 2 |              0.1848  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3723 | <5%                     |                10 |              0.03723 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3727 | 5-10%                   |                 2 |              0.18635 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3769 | >20%                    |                 5 |              0.07538 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3783 | >20%                    |                 5 |              0.07566 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3827 | 5-10%                   |                 2 |              0.19135 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3852 | 15-20%                  |                 5 |              0.07704 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3863 | >20%                    |                 5 |              0.07726 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3885 | >20%                    |                 2 |              0.19425 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3968 | >20%                    |                 2 |              0.1984  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3992 | 15-20%                  |                 2 |              0.1996  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4085 | 10-15%                  |                 2 |              0.20425 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4088 | 15-20%                  |                 2 |              0.2044  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4142 | 5-10%                   |                 5 |              0.08284 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4201 | >20%                    |                 2 |              0.21005 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4208 | >20%                    |                 5 |              0.08416 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4211 | >20%                    |                 5 |              0.08422 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4227 | >20%                    |                 2 |              0.21135 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.423  | >20%                    |                 5 |              0.0846  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4248 | >20%                    |                 2 |              0.2124  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4248 | >20%                    |                 5 |              0.08496 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4266 | >20%                    |                 2 |              0.2133  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4335 | >20%                    |                 5 |              0.0867  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4406 | >20%                    |                 5 |              0.08812 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4449 | >20%                    |                 5 |              0.08898 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4452 | >20%                    |                 2 |              0.2226  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4521 | >20%                    |                 5 |              0.09042 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4553 | >20%                    |                 2 |              0.22765 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4566 | >20%                    |                 5 |              0.09132 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4567 | >20%                    |                 2 |              0.22835 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4579 | >20%                    |                 2 |              0.22895 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4593 | >20%                    |                 5 |              0.09186 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.461  | >20%                    |                10 |              0.0461  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4647 | >20%                    |                 5 |              0.09294 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4659 | >20%                    |                 2 |              0.23295 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4747 | >20%                    |                 5 |              0.09494 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4762 | 10-15%                  |                 2 |              0.2381  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4762 | >20%                    |                 2 |              0.2381  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4863 | 5-10%                   |                 2 |              0.24315 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4928 | >20%                    |                 5 |              0.09856 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.496  | 15-20%                  |                10 |              0.0496  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5012 | >20%                    |                 5 |              0.10024 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5032 | >20%                    |                 5 |              0.10064 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5074 | >20%                    |                 5 |              0.10148 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5095 | >20%                    |                 2 |              0.25475 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5103 | >20%                    |                 2 |              0.25515 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5111 | >20%                    |                10 |              0.05111 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5176 | >20%                    |                 5 |              0.10352 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5264 | >20%                    |                10 |              0.05264 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5274 | 10-15%                  |                 5 |              0.10548 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5356 | >20%                    |                 5 |              0.10712 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.538  | >20%                    |                 5 |              0.1076  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5474 | >20%                    |                 5 |              0.10948 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5518 | 15-20%                  |                 5 |              0.11036 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5541 | >20%                    |                 5 |              0.11082 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5649 | >20%                    |                10 |              0.05649 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5695 | >20%                    |                 5 |              0.1139  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5722 | 10-15%                  |                 5 |              0.11444 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5774 | 10-15%                  |                 5 |              0.11548 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5808 | <5%                     |                10 |              0.05808 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5809 | 15-20%                  |                10 |              0.05809 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5871 | 15-20%                  |                10 |              0.05871 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5977 | 15-20%                  |                 2 |              0.29885 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5978 | 10-15%                  |                10 |              0.05978 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5994 | >20%                    |                 5 |              0.11988 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6091 | >20%                    |                 2 |              0.30455 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6161 | >20%                    |                 5 |              0.12322 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6254 | >20%                    |                 5 |              0.12508 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6279 | 15-20%                  |                10 |              0.06279 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6348 | >20%                    |                10 |              0.06348 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6447 | >20%                    |                 5 |              0.12894 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6469 | >20%                    |                 2 |              0.32345 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6479 | >20%                    |                 2 |              0.32395 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6491 | 10-15%                  |                 2 |              0.32455 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6541 | >20%                    |                 5 |              0.13082 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6649 | >20%                    |                10 |              0.06649 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.665  | 10-15%                  |                 2 |              0.3325  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6665 | 15-20%                  |                 2 |              0.33325 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6669 | <5%                     |                10 |              0.06669 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6803 | >20%                    |                10 |              0.06803 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.684  | 15-20%                  |                 5 |              0.1368  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6856 | 15-20%                  |                 5 |              0.13712 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6856 | 15-20%                  |                10 |              0.06856 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6862 | >20%                    |                10 |              0.06862 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6977 | >20%                    |                 5 |              0.13954 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6996 | >20%                    |                 5 |              0.13992 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7048 | >20%                    |                10 |              0.07048 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7054 | >20%                    |                10 |              0.07054 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7105 | >20%                    |                10 |              0.07105 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7183 | >20%                    |                 5 |              0.14366 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7241 | >20%                    |                 5 |              0.14482 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7243 | >20%                    |                 5 |              0.14486 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7247 | 15-20%                  |                 5 |              0.14494 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7329 | 5-10%                   |                10 |              0.07329 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7347 | <5%                     |                10 |              0.07347 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7379 | >20%                    |                 5 |              0.14758 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7494 | >20%                    |                10 |              0.07494 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7558 | 15-20%                  |                10 |              0.07558 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7573 | >20%                    |                 5 |              0.15146 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7616 | 10-15%                  |                 5 |              0.15232 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7683 | >20%                    |                 2 |              0.38415 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7702 | 10-15%                  |                10 |              0.07702 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7708 | 15-20%                  |                10 |              0.07708 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7752 | >20%                    |                10 |              0.07752 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7772 | 10-15%                  |                10 |              0.07772 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7885 | 15-20%                  |                10 |              0.07885 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7919 | 15-20%                  |                10 |              0.07919 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7991 | >20%                    |                10 |              0.07991 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8    | 10-15%                  |                 2 |              0.4     |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8026 | >20%                    |                10 |              0.08026 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.824  | 5-10%                   |                10 |              0.0824  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8295 | >20%                    |                10 |              0.08295 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8362 | 5-10%                   |                10 |              0.08362 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8655 | >20%                    |                10 |              0.08655 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8673 | 5-10%                   |                10 |              0.08673 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8786 | 10-15%                  |                10 |              0.08786 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8967 | <5%                     |                10 |              0.08967 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9053 | 10-15%                  |                 5 |              0.18106 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9069 | >20%                    |                 2 |              0.45345 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9156 | >20%                    |                 2 |              0.4578  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9216 | >20%                    |                 5 |              0.18432 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.929  | >20%                    |                 5 |              0.1858  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9362 | >20%                    |                10 |              0.09362 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9405 | >20%                    |                10 |              0.09405 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9999 | 5-10%                   |                10 |              0.09999 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0313 | >20%                    |                10 |              0.10313 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.044  | 15-20%                  |                10 |              0.1044  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0563 | >20%                    |                10 |              0.10563 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0616 | >20%                    |                 5 |              0.21232 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0934 | >20%                    |                 5 |              0.21868 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0937 | >20%                    |                10 |              0.10937 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0953 | 15-20%                  |                10 |              0.10953 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.127  | >20%                    |                 5 |              0.2254  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1308 | 15-20%                  |                10 |              0.11308 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1445 | >20%                    |                10 |              0.11445 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1604 | >20%                    |                 2 |              0.5802  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.182  | 10-15%                  |                10 |              0.1182  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2028 | >20%                    |                 5 |              0.24056 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2391 | >20%                    |                10 |              0.12391 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2645 | 10-15%                  |                10 |              0.12645 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2995 | >20%                    |                10 |              0.12995 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3881 | >20%                    |                10 |              0.13881 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4296 | >20%                    |                10 |              0.14296 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4511 | 5-10%                   |                 2 |              0.72555 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4867 | 10-15%                  |                 5 |              0.29734 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5015 | >20%                    |                10 |              0.15015 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2924 | 15-20%                  |                10 |              0.22924 |