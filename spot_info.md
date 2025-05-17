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

Data correct as of 2025-05-17 01:49:55.724504, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1701 | >20%                    |                 2 |              0.08505 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 5-10%                   |                 5 |              0.039   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2076 | <5%                     |                 2 |              0.1038  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2123 | >20%                    |                 5 |              0.04246 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2139 | 5-10%                   |                 5 |              0.04278 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2149 | <5%                     |                 5 |              0.04298 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2174 | >20%                    |                 2 |              0.1087  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.226  | 15-20%                  |                 2 |              0.113   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2282 | <5%                     |                 2 |              0.1141  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2553 | >20%                    |                 2 |              0.12765 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2597 | >20%                    |                 5 |              0.05194 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2598 | >20%                    |                 2 |              0.1299  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2631 | <5%                     |                 2 |              0.13155 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2638 | 15-20%                  |                 2 |              0.1319  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2648 | >20%                    |                 2 |              0.1324  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2687 | 5-10%                   |                 2 |              0.13435 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2705 | 15-20%                  |                10 |              0.02705 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2745 | 5-10%                   |                 2 |              0.13725 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2807 | 15-20%                  |                 5 |              0.05614 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2847 | >20%                    |                 2 |              0.14235 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2862 | 10-15%                  |                10 |              0.02862 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2893 | 5-10%                   |                 2 |              0.14465 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2907 | >20%                    |                 2 |              0.14535 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.2949 | 15-20%                  |                10 |              0.02949 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.299  | <5%                     |                 2 |              0.1495  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3014 | >20%                    |                 2 |              0.1507  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3137 | 10-15%                  |                 2 |              0.15685 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3203 | 5-10%                   |                 2 |              0.16015 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.322  | >20%                    |                 2 |              0.161   |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3258 | >20%                    |                 2 |              0.1629  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3263 | <5%                     |                 5 |              0.06526 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3356 | >20%                    |                10 |              0.03356 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3396 | >20%                    |                 2 |              0.1698  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3407 | 15-20%                  |                10 |              0.03407 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3429 | >20%                    |                 5 |              0.06858 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3487 | >20%                    |                 2 |              0.17435 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3527 | 15-20%                  |                 5 |              0.07054 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3531 | 10-15%                  |                10 |              0.03531 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3576 | 5-10%                   |                 2 |              0.1788  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3594 | <5%                     |                 2 |              0.1797  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3644 | >20%                    |                 2 |              0.1822  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3659 | 10-15%                  |                 2 |              0.18295 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3683 | >20%                    |                 2 |              0.18415 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3722 | >20%                    |                10 |              0.03722 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3727 | >20%                    |                 5 |              0.07454 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3752 | >20%                    |                 5 |              0.07504 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3762 | >20%                    |                 5 |              0.07524 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3846 | >20%                    |                 2 |              0.1923  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3867 | <5%                     |                10 |              0.03867 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3884 | >20%                    |                10 |              0.03884 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3887 | 5-10%                   |                 5 |              0.07774 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3909 | >20%                    |                 2 |              0.19545 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3922 | <5%                     |                10 |              0.03922 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3981 | 5-10%                   |                 5 |              0.07962 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4002 | >20%                    |                 2 |              0.2001  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4004 | 15-20%                  |                 5 |              0.08008 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4011 | 10-15%                  |                 2 |              0.20055 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4049 | 5-10%                   |                 2 |              0.20245 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4211 | <5%                     |                 5 |              0.08422 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4307 | 10-15%                  |                 2 |              0.21535 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4335 | 15-20%                  |                 2 |              0.21675 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4377 | >20%                    |                 5 |              0.08754 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4381 | <5%                     |                 2 |              0.21905 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4471 | 5-10%                   |                 5 |              0.08942 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4641 | 10-15%                  |                 5 |              0.09282 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4656 | 10-15%                  |                10 |              0.04656 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4662 | >20%                    |                 5 |              0.09324 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4668 | >20%                    |                 2 |              0.2334  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.468  | >20%                    |                 5 |              0.0936  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4683 | >20%                    |                 2 |              0.23415 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4734 | >20%                    |                 5 |              0.09468 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4783 | >20%                    |                 2 |              0.23915 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4817 | >20%                    |                 5 |              0.09634 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4824 | >20%                    |                 5 |              0.09648 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4885 | >20%                    |                 5 |              0.0977  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4888 | >20%                    |                 2 |              0.2444  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.49   | >20%                    |                 5 |              0.098   |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4913 | 15-20%                  |                 5 |              0.09826 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4922 | >20%                    |                10 |              0.04922 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4932 | >20%                    |                 2 |              0.2466  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4933 | >20%                    |                 2 |              0.24665 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4935 | 5-10%                   |                 5 |              0.0987  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5082 | >20%                    |                 2 |              0.2541  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5102 | 10-15%                  |                 2 |              0.2551  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5144 | >20%                    |                 2 |              0.2572  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5165 | <5%                     |                 5 |              0.1033  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.517  | 10-15%                  |                 5 |              0.1034  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5215 | >20%                    |                 5 |              0.1043  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5252 | <5%                     |                 5 |              0.10504 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5295 | >20%                    |                 2 |              0.26475 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5313 | >20%                    |                 5 |              0.10626 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.538  | >20%                    |                10 |              0.0538  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5508 | >20%                    |                 2 |              0.2754  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5669 | 5-10%                   |                 5 |              0.11338 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5688 | >20%                    |                 5 |              0.11376 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5693 | 10-15%                  |                 5 |              0.11386 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5745 | >20%                    |                 2 |              0.28725 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5782 | >20%                    |                 5 |              0.11564 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5912 | 10-15%                  |                 5 |              0.11824 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5968 | >20%                    |                 2 |              0.2984  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5969 | <5%                     |                 5 |              0.11938 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6078 | 10-15%                  |                 2 |              0.3039  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6097 | >20%                    |                 5 |              0.12194 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.631  | >20%                    |                 5 |              0.1262  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6322 | 10-15%                  |                10 |              0.06322 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6329 | >20%                    |                 2 |              0.31645 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6331 | 10-15%                  |                 5 |              0.12662 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6415 | 15-20%                  |                10 |              0.06415 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6567 | >20%                    |                10 |              0.06567 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6582 | >20%                    |                 2 |              0.3291  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6601 | >20%                    |                10 |              0.06601 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6612 | <5%                     |                 5 |              0.13224 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6696 | 15-20%                  |                 5 |              0.13392 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6717 | 5-10%                   |                10 |              0.06717 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6777 | >20%                    |                 5 |              0.13554 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6884 | >20%                    |                 5 |              0.13768 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.692  | >20%                    |                 2 |              0.346   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6989 | >20%                    |                10 |              0.06989 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7217 | <5%                     |                 5 |              0.14434 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7245 | >20%                    |                 2 |              0.36225 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7356 | <5%                     |                 5 |              0.14712 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7401 | >20%                    |                 5 |              0.14802 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7482 | >20%                    |                10 |              0.07482 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7483 | <5%                     |                10 |              0.07483 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7484 | >20%                    |                 5 |              0.14968 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7488 | 5-10%                   |                10 |              0.07488 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7579 | 10-15%                  |                10 |              0.07579 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7867 | 10-15%                  |                10 |              0.07867 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7965 | >20%                    |                 5 |              0.1593  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8023 | >20%                    |                 5 |              0.16046 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8024 | 10-15%                  |                10 |              0.08024 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8034 | 15-20%                  |                10 |              0.08034 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8085 | <5%                     |                 5 |              0.1617  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8096 | >20%                    |                10 |              0.08096 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8122 | 5-10%                   |                10 |              0.08122 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8136 | 15-20%                  |                10 |              0.08136 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.817  | 15-20%                  |                10 |              0.0817  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8202 | >20%                    |                10 |              0.08202 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.832  | 10-15%                  |                10 |              0.0832  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8435 | 15-20%                  |                10 |              0.08435 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8577 | 15-20%                  |                 2 |              0.42885 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8668 | >20%                    |                 2 |              0.4334  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8694 | <5%                     |                10 |              0.08694 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8895 | >20%                    |                 2 |              0.44475 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8973 | >20%                    |                 5 |              0.17946 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9126 | 10-15%                  |                10 |              0.09126 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9155 | 15-20%                  |                10 |              0.09155 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9383 | 15-20%                  |                10 |              0.09383 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9409 | <5%                     |                10 |              0.09409 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9534 | >20%                    |                10 |              0.09534 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9659 | >20%                    |                10 |              0.09659 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9773 | >20%                    |                10 |              0.09773 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9892 | 10-15%                  |                 5 |              0.19784 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.018  | >20%                    |                10 |              0.1018  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0273 | >20%                    |                 2 |              0.51365 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0365 | >20%                    |                10 |              0.10365 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0404 | <5%                     |                10 |              0.10404 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0495 | >20%                    |                10 |              0.10495 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0609 | >20%                    |                 5 |              0.21218 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0699 | 10-15%                  |                10 |              0.10699 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0936 | >20%                    |                 5 |              0.21872 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1205 | >20%                    |                 5 |              0.2241  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1246 | <5%                     |                10 |              0.11246 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1497 | 10-15%                  |                 2 |              0.57485 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2168 | >20%                    |                10 |              0.12168 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2261 | >20%                    |                10 |              0.12261 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2416 | >20%                    |                 2 |              0.6208  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2618 | >20%                    |                10 |              0.12618 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2784 | >20%                    |                 5 |              0.25568 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3441 | <5%                     |                 5 |              0.26882 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3683 | 15-20%                  |                10 |              0.13683 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3728 | 15-20%                  |                10 |              0.13728 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.395  | >20%                    |                10 |              0.1395  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.395  | 5-10%                   |                10 |              0.1395  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4197 | 15-20%                  |                10 |              0.14197 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7489 | >20%                    |                10 |              0.17489 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0503 | <5%                     |                10 |              0.20503 |