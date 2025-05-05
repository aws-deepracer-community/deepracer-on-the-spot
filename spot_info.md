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

Data correct as of 2025-05-05 01:54:41.921885, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1243 | >20%                    |                 2 |              0.06215 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2006 | >20%                    |                 5 |              0.04012 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2083 | 15-20%                  |                 5 |              0.04166 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2161 | >20%                    |                 5 |              0.04322 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2205 | <5%                     |                 2 |              0.11025 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2219 | >20%                    |                 2 |              0.11095 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.228  | 15-20%                  |                 2 |              0.114   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2288 | 5-10%                   |                 5 |              0.04576 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2383 | <5%                     |                 5 |              0.04766 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2405 | 15-20%                  |                 2 |              0.12025 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2588 | 5-10%                   |                 2 |              0.1294  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2598 | >20%                    |                 2 |              0.1299  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.265  | 5-10%                   |                 2 |              0.1325  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2739 | <5%                     |                 2 |              0.13695 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.283  | 10-15%                  |                10 |              0.0283  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.287  | >20%                    |                 2 |              0.1435  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2884 | >20%                    |                 2 |              0.1442  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2947 | <5%                     |                 2 |              0.14735 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2978 | 10-15%                  |                 2 |              0.1489  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2984 | 5-10%                   |                 5 |              0.05968 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.301  | 5-10%                   |                 2 |              0.1505  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3074 | 10-15%                  |                10 |              0.03074 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3084 | 5-10%                   |                 2 |              0.1542  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3097 | 15-20%                  |                10 |              0.03097 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.311  | <5%                     |                 2 |              0.1555  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3147 | 5-10%                   |                 2 |              0.15735 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3152 | >20%                    |                 2 |              0.1576  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3155 | >20%                    |                 2 |              0.15775 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3166 | 15-20%                  |                10 |              0.03166 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3201 | >20%                    |                10 |              0.03201 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3204 | 15-20%                  |                10 |              0.03204 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3212 | <5%                     |                 5 |              0.06424 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3219 | >20%                    |                 2 |              0.16095 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3296 | >20%                    |                 2 |              0.1648  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3312 | >20%                    |                10 |              0.03312 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3364 | >20%                    |                 2 |              0.1682  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3482 | <5%                     |                 5 |              0.06964 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3484 | >20%                    |                 5 |              0.06968 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3524 | 5-10%                   |                 5 |              0.07048 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3548 | >20%                    |                 2 |              0.1774  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3608 | >20%                    |                 5 |              0.07216 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.368  | <5%                     |                 2 |              0.184   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3693 | >20%                    |                 2 |              0.18465 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3696 | >20%                    |                 2 |              0.1848  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3735 | >20%                    |                10 |              0.03735 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3879 | >20%                    |                 5 |              0.07758 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3905 | >20%                    |                 2 |              0.19525 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3911 | 10-15%                  |                10 |              0.03911 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3945 | 10-15%                  |                 2 |              0.19725 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3997 | 15-20%                  |                 5 |              0.07994 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4006 | 10-15%                  |                10 |              0.04006 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4084 | 5-10%                   |                 5 |              0.08168 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4103 | >20%                    |                 2 |              0.20515 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4118 | >20%                    |                10 |              0.04118 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4153 | 5-10%                   |                 2 |              0.20765 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4154 | 10-15%                  |                 2 |              0.2077  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4163 | >20%                    |                 2 |              0.20815 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4175 | >20%                    |                 2 |              0.20875 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4179 | >20%                    |                 5 |              0.08358 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4181 | 10-15%                  |                 2 |              0.20905 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4343 | 15-20%                  |                 5 |              0.08686 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4451 | <5%                     |                 5 |              0.08902 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4455 | >20%                    |                 5 |              0.0891  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4524 | >20%                    |                 5 |              0.09048 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4543 | 15-20%                  |                 2 |              0.22715 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4586 | >20%                    |                 5 |              0.09172 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.459  | >20%                    |                 2 |              0.2295  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4596 | 10-15%                  |                 5 |              0.09192 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4603 | >20%                    |                 5 |              0.09206 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4664 | >20%                    |                 5 |              0.09328 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4683 | <5%                     |                 2 |              0.23415 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4744 | 5-10%                   |                 5 |              0.09488 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4802 | >20%                    |                 2 |              0.2401  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4863 | >20%                    |                 5 |              0.09726 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4877 | >20%                    |                 2 |              0.24385 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4897 | >20%                    |                 5 |              0.09794 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4899 | >20%                    |                 2 |              0.24495 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4948 | <5%                     |                 5 |              0.09896 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4985 | 15-20%                  |                 5 |              0.0997  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5013 | 5-10%                   |                 5 |              0.10026 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5035 | 10-15%                  |                 5 |              0.1007  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.507  | >20%                    |                 5 |              0.1014  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5095 | >20%                    |                 5 |              0.1019  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5228 | >20%                    |                 5 |              0.10456 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5241 | >20%                    |                 2 |              0.26205 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5242 | >20%                    |                 2 |              0.2621  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5317 | >20%                    |                 2 |              0.26585 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5353 | 10-15%                  |                 2 |              0.26765 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5384 | >20%                    |                 2 |              0.2692  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5655 | 5-10%                   |                 5 |              0.1131  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5697 | 10-15%                  |                10 |              0.05697 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5711 | >20%                    |                 5 |              0.11422 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5721 | 10-15%                  |                 5 |              0.11442 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.574  | <5%                     |                10 |              0.0574  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5767 | >20%                    |                 5 |              0.11534 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5804 | 10-15%                  |                 2 |              0.2902  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5857 | >20%                    |                 2 |              0.29285 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5917 | <5%                     |                 5 |              0.11834 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5965 | >20%                    |                 2 |              0.29825 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5978 | >20%                    |                 5 |              0.11956 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6313 | >20%                    |                 2 |              0.31565 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6359 | >20%                    |                 5 |              0.12718 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6437 | >20%                    |                 5 |              0.12874 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6443 | 10-15%                  |                 5 |              0.12886 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6526 | 5-10%                   |                10 |              0.06526 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6573 | 15-20%                  |                10 |              0.06573 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6607 | 15-20%                  |                 5 |              0.13214 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6631 | >20%                    |                 2 |              0.33155 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6747 | >20%                    |                10 |              0.06747 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6848 | <5%                     |                10 |              0.06848 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6927 | >20%                    |                 2 |              0.34635 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6938 | >20%                    |                 2 |              0.3469  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6941 | >20%                    |                 5 |              0.13882 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7204 | >20%                    |                 5 |              0.14408 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.723  | <5%                     |                 5 |              0.1446  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7323 | >20%                    |                10 |              0.07323 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7333 | 5-10%                   |                10 |              0.07333 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7341 | >20%                    |                10 |              0.07341 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7347 | >20%                    |                 5 |              0.14694 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7406 | <5%                     |                 5 |              0.14812 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7454 | >20%                    |                10 |              0.07454 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7538 | >20%                    |                 5 |              0.15076 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7714 | 15-20%                  |                10 |              0.07714 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7735 | <5%                     |                 5 |              0.1547  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7739 | >20%                    |                 5 |              0.15478 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7793 | 10-15%                  |                10 |              0.07793 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7793 | >20%                    |                 5 |              0.15586 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7803 | >20%                    |                10 |              0.07803 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7987 | 15-20%                  |                10 |              0.07987 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8005 | <5%                     |                10 |              0.08005 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.806  | 15-20%                  |                10 |              0.0806  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8216 | 15-20%                  |                10 |              0.08216 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8297 | 10-15%                  |                10 |              0.08297 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8464 | 10-15%                  |                10 |              0.08464 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8501 | >20%                    |                 2 |              0.42505 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8521 | 10-15%                  |                10 |              0.08521 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8575 | 5-10%                   |                10 |              0.08575 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8589 | >20%                    |                10 |              0.08589 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.862  | >20%                    |                10 |              0.0862  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8622 | >20%                    |                 5 |              0.17244 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8672 | >20%                    |                 2 |              0.4336  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8692 | 10-15%                  |                10 |              0.08692 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.875  | 10-15%                  |                 5 |              0.175   |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.892  | <5%                     |                10 |              0.0892  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9029 | >20%                    |                10 |              0.09029 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9052 | >20%                    |                 2 |              0.4526  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9063 | 10-15%                  |                10 |              0.09063 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9068 | 15-20%                  |                10 |              0.09068 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9172 | >20%                    |                10 |              0.09172 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9188 | <5%                     |                10 |              0.09188 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9287 | 15-20%                  |                10 |              0.09287 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9671 | >20%                    |                10 |              0.09671 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9734 | >20%                    |                 2 |              0.4867  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0406 | >20%                    |                10 |              0.10406 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0456 | <5%                     |                10 |              0.10456 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0544 | >20%                    |                10 |              0.10544 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0618 | <5%                     |                 5 |              0.21236 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0631 | >20%                    |                 5 |              0.21262 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0735 | >20%                    |                 2 |              0.53675 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0745 | >20%                    |                10 |              0.10745 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.119  | <5%                     |                10 |              0.1119  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1218 | 15-20%                  |                 2 |              0.5609  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1659 | 10-15%                  |                 5 |              0.23318 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1804 | >20%                    |                10 |              0.11804 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1843 | 10-15%                  |                 2 |              0.59215 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2097 | >20%                    |                10 |              0.12097 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2711 | <5%                     |                 5 |              0.25422 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2974 | >20%                    |                 5 |              0.25948 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3067 | >20%                    |                10 |              0.13067 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3733 | >20%                    |                 5 |              0.27466 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.396  | >20%                    |                 2 |              0.698   |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4012 | 15-20%                  |                10 |              0.14012 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4299 | >20%                    |                 5 |              0.28598 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4397 | 15-20%                  |                10 |              0.14397 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5504 | >20%                    |                10 |              0.15504 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5537 | 15-20%                  |                10 |              0.15537 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7135 | 5-10%                   |                10 |              0.17135 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8291 | >20%                    |                10 |              0.18291 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9491 | <5%                     |                10 |              0.19491 |