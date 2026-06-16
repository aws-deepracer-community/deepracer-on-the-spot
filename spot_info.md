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

Data correct as of 2026-06-16 04:50:07.716121, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1522 | >20%                    |                 2 |              0.0761  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1683 | >20%                    |                 2 |              0.08415 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1813 | 15-20%                  |                 2 |              0.09065 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1942 | >20%                    |                 2 |              0.0971  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2297 | >20%                    |                 2 |              0.11485 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2308 | >20%                    |                 2 |              0.1154  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2331 | >20%                    |                 5 |              0.04662 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2398 | >20%                    |                 2 |              0.1199  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.241  | >20%                    |                 2 |              0.1205  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2492 | >20%                    |                 2 |              0.1246  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2499 | 15-20%                  |                 2 |              0.12495 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2593 | >20%                    |                 2 |              0.12965 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2631 | >20%                    |                 2 |              0.13155 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2668 | >20%                    |                 5 |              0.05336 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2733 | 10-15%                  |                 2 |              0.13665 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2766 | 10-15%                  |                 2 |              0.1383  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2885 | 15-20%                  |                 2 |              0.14425 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2924 | 15-20%                  |                 5 |              0.05848 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2966 | >20%                    |                 2 |              0.1483  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3035 | >20%                    |                 5 |              0.0607  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3136 | 5-10%                   |                10 |              0.03136 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3209 | >20%                    |                10 |              0.03209 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3391 | 10-15%                  |                 2 |              0.16955 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3394 | <5%                     |                 2 |              0.1697  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3417 | >20%                    |                10 |              0.03417 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3447 | 15-20%                  |                 5 |              0.06894 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3468 | 5-10%                   |                10 |              0.03468 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3507 | >20%                    |                 2 |              0.17535 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3525 | >20%                    |                 2 |              0.17625 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.363  | >20%                    |                 2 |              0.1815  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3632 | >20%                    |                 5 |              0.07264 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3699 | 5-10%                   |                10 |              0.03699 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3709 | >20%                    |                 5 |              0.07418 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3713 | >20%                    |                 5 |              0.07426 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3717 | >20%                    |                 5 |              0.07434 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3781 | >20%                    |                 2 |              0.18905 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3909 | >20%                    |                 2 |              0.19545 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3918 | >20%                    |                10 |              0.03918 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3939 | >20%                    |                 5 |              0.07878 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.395  | >20%                    |                 5 |              0.079   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3957 | >20%                    |                 5 |              0.07914 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4129 | >20%                    |                 5 |              0.08258 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4154 | >20%                    |                 2 |              0.2077  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4178 | >20%                    |                 5 |              0.08356 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4234 | >20%                    |                10 |              0.04234 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4236 | >20%                    |                 5 |              0.08472 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4286 | <5%                     |                 2 |              0.2143  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4349 | >20%                    |                 2 |              0.21745 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4382 | >20%                    |                 5 |              0.08764 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4453 | >20%                    |                10 |              0.04453 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4506 | <5%                     |                 2 |              0.2253  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4592 | >20%                    |                 5 |              0.09184 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4611 | 10-15%                  |                 2 |              0.23055 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4613 | 15-20%                  |                 2 |              0.23065 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.469  | 15-20%                  |                 5 |              0.0938  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4754 | >20%                    |                 2 |              0.2377  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.483  | >20%                    |                 5 |              0.0966  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.4861 | 5-10%                   |                 2 |              0.24305 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4965 | 15-20%                  |                 2 |              0.24825 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4978 | >20%                    |                 2 |              0.2489  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5071 | 5-10%                   |                 2 |              0.25355 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5124 | >20%                    |                 5 |              0.10248 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5178 | 5-10%                   |                 5 |              0.10356 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5206 |                         |                 2 |              0.2603  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5232 | 15-20%                  |                 2 |              0.2616  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5264 | 10-15%                  |                 2 |              0.2632  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5392 | >20%                    |                10 |              0.05392 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5393 | >20%                    |                 2 |              0.26965 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5433 | >20%                    |                 5 |              0.10866 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5445 | >20%                    |                 5 |              0.1089  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5499 | <5%                     |                 5 |              0.10998 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5522 | 10-15%                  |                 5 |              0.11044 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5534 | >20%                    |                 2 |              0.2767  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5546 | <5%                     |                10 |              0.05546 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5668 | >20%                    |                 5 |              0.11336 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5732 | >20%                    |                 5 |              0.11464 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5737 | >20%                    |                 2 |              0.28685 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5741 | >20%                    |                 2 |              0.28705 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5748 | >20%                    |                10 |              0.05748 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5797 | >20%                    |                 5 |              0.11594 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.5848 |                         |                 5 |              0.11696 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.5856 | >20%                    |                 5 |              0.11712 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5864 | >20%                    |                 5 |              0.11728 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6122 | >20%                    |                 2 |              0.3061  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6174 | >20%                    |                 5 |              0.12348 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6246 | 10-15%                  |                10 |              0.06246 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6439 | 5-10%                   |                10 |              0.06439 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6492 | >20%                    |                10 |              0.06492 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6737 | >20%                    |                10 |              0.06737 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6739 | 15-20%                  |                10 |              0.06739 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6784 | >20%                    |                10 |              0.06784 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6834 | >20%                    |                 5 |              0.13668 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.696  | >20%                    |                 5 |              0.1392  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6979 | >20%                    |                 5 |              0.13958 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.703  | >20%                    |                 2 |              0.3515  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.704  | 15-20%                  |                10 |              0.0704  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7131 | >20%                    |                 2 |              0.35655 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7164 | >20%                    |                 5 |              0.14328 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7171 | >20%                    |                 5 |              0.14342 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7293 | 5-10%                   |                10 |              0.07293 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7316 | >20%                    |                10 |              0.07316 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7324 | >20%                    |                 5 |              0.14648 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7403 | >20%                    |                 2 |              0.37015 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7429 | >20%                    |                10 |              0.07429 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7517 | >20%                    |                 5 |              0.15034 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7578 | >20%                    |                 5 |              0.15156 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7836 | >20%                    |                10 |              0.07836 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7856 | 5-10%                   |                 5 |              0.15712 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7941 | >20%                    |                10 |              0.07941 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7952 | >20%                    |                10 |              0.07952 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8323 | 15-20%                  |                10 |              0.08323 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8387 |                         |                 2 |              0.41935 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8474 | >20%                    |                10 |              0.08474 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8485 | 15-20%                  |                10 |              0.08485 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8498 | >20%                    |                10 |              0.08498 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8544 | >20%                    |                 5 |              0.17088 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8551 | >20%                    |                 5 |              0.17102 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8554 | 15-20%                  |                10 |              0.08554 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8736 | >20%                    |                10 |              0.08736 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8928 | >20%                    |                10 |              0.08928 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9103 | >20%                    |                10 |              0.09103 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.92   | 5-10%                   |                 2 |              0.46    |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9255 | >20%                    |                10 |              0.09255 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9398 | >20%                    |                10 |              0.09398 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9466 | >20%                    |                 5 |              0.18932 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9539 | >20%                    |                 5 |              0.19078 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9594 | >20%                    |                 5 |              0.19188 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9648 | >20%                    |                10 |              0.09648 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.9865 |                         |                10 |              0.09865 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9992 | 10-15%                  |                 2 |              0.4996  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9994 | >20%                    |                 2 |              0.4997  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0007 | >20%                    |                10 |              0.10007 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0294 | >20%                    |                10 |              0.10294 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0667 | 10-15%                  |                 2 |              0.53335 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0708 | >20%                    |                 5 |              0.21416 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.077  |                         |                 5 |              0.2154  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0941 | 5-10%                   |                10 |              0.10941 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0987 | 15-20%                  |                10 |              0.10987 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.195  | >20%                    |                10 |              0.1195  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.2034 | >20%                    |                10 |              0.12034 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2383 | >20%                    |                10 |              0.12383 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.3041 | 5-10%                   |                 2 |              0.65205 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3645 | 15-20%                  |                 5 |              0.2729  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3869 | 10-15%                  |                10 |              0.13869 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4064 | >20%                    |                10 |              0.14064 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4271 | >20%                    |                 5 |              0.28542 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4365 | >20%                    |                10 |              0.14365 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4854 | >20%                    |                10 |              0.14854 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4855 | 15-20%                  |                10 |              0.14855 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5214 | 15-20%                  |                10 |              0.15214 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.6007 | >20%                    |                 5 |              0.32014 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.8344 |                         |                10 |              0.18344 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3198 | >20%                    |                10 |              0.23198 |