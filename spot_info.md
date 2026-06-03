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

Data correct as of 2026-06-03 04:42:06.492892, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1383 | >20%                    |                 2 |              0.06915 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1545 | 15-20%                  |                 2 |              0.07725 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1682 | >20%                    |                 2 |              0.0841  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.1996 | 10-15%                  |                 2 |              0.0998  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2055 | >20%                    |                 2 |              0.10275 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2088 | 15-20%                  |                 2 |              0.1044  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2102 | >20%                    |                 2 |              0.1051  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2145 | >20%                    |                 2 |              0.10725 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2253 | 15-20%                  |                 5 |              0.04506 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2259 | 15-20%                  |                 5 |              0.04518 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2347 | >20%                    |                 5 |              0.04694 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2356 | >20%                    |                 2 |              0.1178  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2421 | >20%                    |                 2 |              0.12105 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2496 | >20%                    |                 2 |              0.1248  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2544 | >20%                    |                 2 |              0.1272  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2664 | >20%                    |                10 |              0.02664 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2754 | >20%                    |                 5 |              0.05508 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2826 | >20%                    |                 5 |              0.05652 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2855 | >20%                    |                 2 |              0.14275 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2896 | >20%                    |                 5 |              0.05792 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2911 | 5-10%                   |                10 |              0.02911 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2956 | >20%                    |                 2 |              0.1478  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2972 | 15-20%                  |                 2 |              0.1486  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2979 | >20%                    |                 5 |              0.05958 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3143 | 15-20%                  |                 5 |              0.06286 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3164 | >20%                    |                10 |              0.03164 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3315 | <5%                     |                 2 |              0.16575 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3333 | 10-15%                  |                 2 |              0.16665 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3334 | >20%                    |                 5 |              0.06668 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.335  | >20%                    |                 2 |              0.1675  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3373 | >20%                    |                 2 |              0.16865 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3487 | >20%                    |                 5 |              0.06974 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3487 | 5-10%                   |                10 |              0.03487 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3491 | >20%                    |                 5 |              0.06982 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.353  | 10-15%                  |                 2 |              0.1765  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3607 | >20%                    |                 2 |              0.18035 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3772 | >20%                    |                 5 |              0.07544 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3858 | >20%                    |                 2 |              0.1929  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3876 | >20%                    |                 5 |              0.07752 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3906 | >20%                    |                 5 |              0.07812 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3928 | >20%                    |                10 |              0.03928 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3972 | >20%                    |                 5 |              0.07944 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3984 | >20%                    |                 5 |              0.07968 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3993 | >20%                    |                 5 |              0.07986 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4042 | 10-15%                  |                 2 |              0.2021  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4153 | >20%                    |                 5 |              0.08306 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4206 | >20%                    |                 2 |              0.2103  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4226 | <5%                     |                 2 |              0.2113  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4315 | >20%                    |                 2 |              0.21575 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4354 | >20%                    |                10 |              0.04354 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4384 | >20%                    |                 2 |              0.2192  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4426 | 15-20%                  |                 2 |              0.2213  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4633 | >20%                    |                 5 |              0.09266 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4655 | <5%                     |                 2 |              0.23275 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4673 | 5-10%                   |                 2 |              0.23365 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4677 | >20%                    |                 2 |              0.23385 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4699 | 15-20%                  |                 5 |              0.09398 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4751 | >20%                    |                 5 |              0.09502 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.49   | >20%                    |                 5 |              0.098   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4908 | 10-15%                  |                 2 |              0.2454  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4932 | >20%                    |                 5 |              0.09864 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4944 | 15-20%                  |                 2 |              0.2472  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4971 | 15-20%                  |                 2 |              0.24855 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4984 | >20%                    |                 2 |              0.2492  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.4995 | >20%                    |                10 |              0.04995 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5044 | >20%                    |                 5 |              0.10088 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5054 | 5-10%                   |                 5 |              0.10108 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5184 |                         |                 2 |              0.2592  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5233 | >20%                    |                 5 |              0.10466 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5253 | >20%                    |                 2 |              0.26265 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5418 | >20%                    |                 2 |              0.2709  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5428 | 10-15%                  |                 5 |              0.10856 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5598 | >20%                    |                 2 |              0.2799  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5694 | 5-10%                   |                 2 |              0.2847  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5701 | <5%                     |                 5 |              0.11402 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5791 | >20%                    |                10 |              0.05791 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5806 | >20%                    |                 2 |              0.2903  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5845 | >20%                    |                 2 |              0.29225 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6055 | 5-10%                   |                10 |              0.06055 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6134 | >20%                    |                 5 |              0.12268 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6139 | >20%                    |                 5 |              0.12278 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6299 | 15-20%                  |                10 |              0.06299 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6322 | 15-20%                  |                10 |              0.06322 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6412 | >20%                    |                10 |              0.06412 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6417 | 10-15%                  |                10 |              0.06417 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6528 | >20%                    |                10 |              0.06528 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6656 | >20%                    |                 5 |              0.13312 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.668  | >20%                    |                10 |              0.0668  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6687 | >20%                    |                 5 |              0.13374 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6695 | >20%                    |                 5 |              0.1339  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6708 | >20%                    |                 5 |              0.13416 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6792 | 15-20%                  |                10 |              0.06792 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6814 | >20%                    |                 5 |              0.13628 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6885 | 5-10%                   |                10 |              0.06885 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6921 | >20%                    |                 5 |              0.13842 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7046 | >20%                    |                10 |              0.07046 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7142 | >20%                    |                 2 |              0.3571  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7242 | 15-20%                  |                10 |              0.07242 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7382 | >20%                    |                 2 |              0.3691  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7505 | >20%                    |                 5 |              0.1501  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.7538 |                         |                10 |              0.07538 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7652 | >20%                    |                 5 |              0.15304 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7752 | >20%                    |                 5 |              0.15504 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7762 | >20%                    |                 2 |              0.3881  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7845 | >20%                    |                10 |              0.07845 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7931 | >20%                    |                10 |              0.07931 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.796  | >20%                    |                10 |              0.0796  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8049 |                         |                 5 |              0.16098 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8121 | >20%                    |                10 |              0.08121 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8255 | >20%                    |                 5 |              0.1651  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8365 | >20%                    |                10 |              0.08365 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8471 | >20%                    |                 5 |              0.16942 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8476 | >20%                    |                10 |              0.08476 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8557 | >20%                    |                10 |              0.08557 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8571 | 10-15%                  |                 2 |              0.42855 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.861  | 15-20%                  |                10 |              0.0861  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.884  |                         |                 2 |              0.442   |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.891  | >20%                    |                10 |              0.0891  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8967 | >20%                    |                10 |              0.08967 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9127 | >20%                    |                 5 |              0.18254 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9127 | >20%                    |                10 |              0.09127 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9136 | 5-10%                   |                 2 |              0.4568  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9445 | >20%                    |                10 |              0.09445 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9484 | >20%                    |                10 |              0.09484 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9522 | >20%                    |                 5 |              0.19044 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9583 | >20%                    |                10 |              0.09583 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.967  | 5-10%                   |                10 |              0.0967  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9809 | >20%                    |                 5 |              0.19618 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9991 | >20%                    |                 5 |              0.19982 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9991 | >20%                    |                10 |              0.09991 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0063 | >20%                    |                10 |              0.10063 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0139 | >20%                    |                 2 |              0.50695 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0321 | >20%                    |                10 |              0.10321 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0354 | 5-10%                   |                 5 |              0.20708 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0429 | >20%                    |                10 |              0.10429 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0699 | >20%                    |                10 |              0.10699 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0721 |                         |                 5 |              0.21442 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0944 | >20%                    |                 5 |              0.21888 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1445 | 15-20%                  |                10 |              0.11445 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1521 | 15-20%                  |                10 |              0.11521 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1637 | >20%                    |                10 |              0.11637 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1729 | 5-10%                   |                 2 |              0.58645 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2844 |                         |                10 |              0.12844 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3043 | >20%                    |                10 |              0.13043 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3105 | 10-15%                  |                 2 |              0.65525 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3175 | 15-20%                  |                 5 |              0.2635  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3821 | >20%                    |                10 |              0.13821 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4274 | 10-15%                  |                10 |              0.14274 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4653 | >20%                    |                 5 |              0.29306 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5931 | >20%                    |                 5 |              0.31862 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5972 | 15-20%                  |                10 |              0.15972 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0058 | >20%                    |                10 |              0.20058 |