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

Data correct as of 2025-10-12 01:48:14.406616, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2033 | >20%                    |                 5 |              0.04066 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2147 | 10-15%                  |                 2 |              0.10735 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2275 | >20%                    |                 5 |              0.0455  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2289 | >20%                    |                 2 |              0.11445 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2429 | >20%                    |                 2 |              0.12145 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2452 | >20%                    |                 2 |              0.1226  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2495 | >20%                    |                 2 |              0.12475 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2583 | 5-10%                   |                 2 |              0.12915 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2604 | >20%                    |                 2 |              0.1302  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2734 | 5-10%                   |                 2 |              0.1367  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2767 | 10-15%                  |                 2 |              0.13835 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2908 | >20%                    |                 2 |              0.1454  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2968 | 15-20%                  |                 2 |              0.1484  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3062 | >20%                    |                 2 |              0.1531  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.323  | >20%                    |                 5 |              0.0646  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3264 | 10-15%                  |                 2 |              0.1632  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.331  | >20%                    |                10 |              0.0331  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3353 | 15-20%                  |                 2 |              0.16765 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3379 | >20%                    |                 2 |              0.16895 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3424 | >20%                    |                 2 |              0.1712  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3432 | >20%                    |                 2 |              0.1716  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3558 | >20%                    |                 2 |              0.1779  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3701 | >20%                    |                 2 |              0.18505 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3755 | 15-20%                  |                 2 |              0.18775 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3769 | >20%                    |                 5 |              0.07538 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3809 | >20%                    |                 5 |              0.07618 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.381  | 15-20%                  |                 2 |              0.1905  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.386  | >20%                    |                 2 |              0.193   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3869 | >20%                    |                 2 |              0.19345 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3889 | >20%                    |                 2 |              0.19445 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3947 | >20%                    |                 2 |              0.19735 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4022 | >20%                    |                 5 |              0.08044 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4038 | >20%                    |                 5 |              0.08076 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4173 | 5-10%                   |                 2 |              0.20865 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4191 | >20%                    |                 2 |              0.20955 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4201 | 5-10%                   |                 5 |              0.08402 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4274 | 5-10%                   |                 2 |              0.2137  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4311 | >20%                    |                 2 |              0.21555 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4316 | >20%                    |                 5 |              0.08632 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.434  | >20%                    |                 2 |              0.217   |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4384 | >20%                    |                 5 |              0.08768 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.446  | >20%                    |                 5 |              0.0892  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4505 | >20%                    |                 2 |              0.22525 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4526 | >20%                    |                 5 |              0.09052 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4543 | >20%                    |                 2 |              0.22715 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4573 | >20%                    |                 5 |              0.09146 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4606 | 10-15%                  |                 2 |              0.2303  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4612 | 10-15%                  |                 5 |              0.09224 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4651 | <5%                     |                 2 |              0.23255 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4672 | 15-20%                  |                 5 |              0.09344 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4753 | >20%                    |                 2 |              0.23765 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4847 | >20%                    |                 2 |              0.24235 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4887 | >20%                    |                 2 |              0.24435 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4897 | >20%                    |                 5 |              0.09794 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4948 | 10-15%                  |                 2 |              0.2474  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.496  | >20%                    |                 5 |              0.0992  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5172 | >20%                    |                 2 |              0.2586  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5266 | >20%                    |                 5 |              0.10532 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5318 | >20%                    |                 5 |              0.10636 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5488 | >20%                    |                 5 |              0.10976 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5582 | >20%                    |                 5 |              0.11164 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5597 | 5-10%                   |                 2 |              0.27985 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5603 | >20%                    |                 5 |              0.11206 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5637 | >20%                    |                 2 |              0.28185 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5841 | >20%                    |                 5 |              0.11682 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5846 | >20%                    |                 5 |              0.11692 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5848 | >20%                    |                 2 |              0.2924  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.589  | 10-15%                  |                 2 |              0.2945  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5934 | >20%                    |                 5 |              0.11868 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6003 | 15-20%                  |                 2 |              0.30015 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6042 | >20%                    |                 5 |              0.12084 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6063 | >20%                    |                 5 |              0.12126 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6173 | >20%                    |                 5 |              0.12346 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6246 | >20%                    |                 5 |              0.12492 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6254 | >20%                    |                 5 |              0.12508 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6281 | >20%                    |                 5 |              0.12562 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6283 | 10-15%                  |                 5 |              0.12566 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6304 | >20%                    |                 2 |              0.3152  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6322 | >20%                    |                10 |              0.06322 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6334 | 10-15%                  |                 5 |              0.12668 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6384 | >20%                    |                 2 |              0.3192  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6389 | >20%                    |                 5 |              0.12778 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6419 | >20%                    |                10 |              0.06419 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6423 | 15-20%                  |                10 |              0.06423 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6465 | 15-20%                  |                 2 |              0.32325 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6486 | 15-20%                  |                 5 |              0.12972 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6566 | 15-20%                  |                 5 |              0.13132 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6611 | <5%                     |                10 |              0.06611 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6718 | 15-20%                  |                10 |              0.06718 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6747 | >20%                    |                 5 |              0.13494 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6748 | >20%                    |                 5 |              0.13496 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6799 | >20%                    |                 5 |              0.13598 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6833 | 15-20%                  |                10 |              0.06833 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.692  | >20%                    |                10 |              0.0692  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.695  | >20%                    |                 5 |              0.139   |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6981 | 15-20%                  |                 5 |              0.13962 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7019 | >20%                    |                 2 |              0.35095 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7187 | >20%                    |                 5 |              0.14374 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7221 | 15-20%                  |                10 |              0.07221 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7251 | >20%                    |                 5 |              0.14502 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7263 | >20%                    |                10 |              0.07263 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7454 | >20%                    |                 5 |              0.14908 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7473 | >20%                    |                10 |              0.07473 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7493 | >20%                    |                 5 |              0.14986 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7546 | <5%                     |                10 |              0.07546 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.762  | >20%                    |                10 |              0.0762  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7717 | 15-20%                  |                10 |              0.07717 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7884 | >20%                    |                 5 |              0.15768 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7907 | 5-10%                   |                10 |              0.07907 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7909 | 10-15%                  |                 2 |              0.39545 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7962 | >20%                    |                 2 |              0.3981  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.797  | >20%                    |                10 |              0.0797  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8026 | >20%                    |                10 |              0.08026 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8068 | >20%                    |                 5 |              0.16136 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8207 | >20%                    |                10 |              0.08207 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8209 | 15-20%                  |                 5 |              0.16418 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8223 | >20%                    |                10 |              0.08223 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8254 | 10-15%                  |                 2 |              0.4127  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8301 | 15-20%                  |                10 |              0.08301 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8336 | 15-20%                  |                10 |              0.08336 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8351 | >20%                    |                 5 |              0.16702 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.842  | >20%                    |                10 |              0.0842  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8516 | 10-15%                  |                 5 |              0.17032 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8635 | <5%                     |                10 |              0.08635 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8796 | 15-20%                  |                10 |              0.08796 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8802 | >20%                    |                 5 |              0.17604 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8958 | >20%                    |                 5 |              0.17916 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9176 | 15-20%                  |                10 |              0.09176 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9245 | 10-15%                  |                10 |              0.09245 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9365 | <5%                     |                10 |              0.09365 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9384 | >20%                    |                 2 |              0.4692  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9571 | >20%                    |                10 |              0.09571 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9603 | 5-10%                   |                10 |              0.09603 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9703 | 10-15%                  |                10 |              0.09703 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9884 | >20%                    |                10 |              0.09884 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9928 | 5-10%                   |                10 |              0.09928 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9958 | 15-20%                  |                10 |              0.09958 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.017  | 10-15%                  |                10 |              0.1017  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.017  | >20%                    |                 2 |              0.5085  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0232 | >20%                    |                 2 |              0.5116  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0305 | >20%                    |                 5 |              0.2061  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0402 | >20%                    |                 5 |              0.20804 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.046  | >20%                    |                10 |              0.1046  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0731 | >20%                    |                10 |              0.10731 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0875 | 15-20%                  |                10 |              0.10875 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0891 | <5%                     |                10 |              0.10891 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0955 | >20%                    |                10 |              0.10955 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.103  | >20%                    |                10 |              0.1103  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.122  | 15-20%                  |                10 |              0.1122  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.123  | 10-15%                  |                 2 |              0.5615  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.127  | >20%                    |                 5 |              0.2254  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1344 | >20%                    |                10 |              0.11344 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1362 | 10-15%                  |                10 |              0.11362 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1532 | >20%                    |                 5 |              0.23064 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.177  | 5-10%                   |                10 |              0.1177  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1802 | 5-10%                   |                10 |              0.11802 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2234 | >20%                    |                10 |              0.12234 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2385 | 5-10%                   |                 2 |              0.61925 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2773 | >20%                    |                10 |              0.12773 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2899 | 10-15%                  |                10 |              0.12899 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3912 | 10-15%                  |                 5 |              0.27824 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.419  | >20%                    |                10 |              0.1419  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.568  | >20%                    |                10 |              0.1568  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6204 | 10-15%                  |                 5 |              0.32408 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6605 | >20%                    |                10 |              0.16605 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7109 | >20%                    |                10 |              0.17109 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0976 | 10-15%                  |                10 |              0.20976 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2877 | 15-20%                  |                10 |              0.22877 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.5268 | >20%                    |                10 |              0.25268 |