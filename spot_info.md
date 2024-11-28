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

Data correct as of 2024-11-28 01:44:15.064133, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1204 | >20%                    |                 5 |              0.02408 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1742 | 10-15%                  |                 2 |              0.0871  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.1816 | >20%                    |                 5 |              0.03632 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.22   | 5-10%                   |                 2 |              0.11    |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2267 | 15-20%                  |                 2 |              0.11335 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.227  | 5-10%                   |                 2 |              0.1135  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2275 | 5-10%                   |                 2 |              0.11375 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2402 | <5%                     |                 2 |              0.1201  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2444 | >20%                    |                 2 |              0.1222  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2496 | <5%                     |                 2 |              0.1248  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2579 | 15-20%                  |                 5 |              0.05158 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2687 | 10-15%                  |                 2 |              0.13435 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2736 | 5-10%                   |                 2 |              0.1368  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 |                         |                 2 |              0.1402  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2806 | <5%                     |                 2 |              0.1403  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.2822 | >20%                    |                 5 |              0.05644 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2962 | 10-15%                  |                 2 |              0.1481  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | <5%                     |                 5 |              0.06008 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3103 | 5-10%                   |                 2 |              0.15515 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.321  | >20%                    |                 5 |              0.0642  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3236 | <5%                     |                 2 |              0.1618  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.324  | >20%                    |                 2 |              0.162   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3271 | 5-10%                   |                 2 |              0.16355 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3332 | <5%                     |                10 |              0.03332 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3349 | >20%                    |                 2 |              0.16745 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3358 | <5%                     |                 5 |              0.06716 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.34   | 15-20%                  |                 2 |              0.17    |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3467 | <5%                     |                 2 |              0.17335 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3498 | <5%                     |                 2 |              0.1749  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3548 | >20%                    |                 5 |              0.07096 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3598 | 15-20%                  |                 2 |              0.1799  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3601 | <5%                     |                 5 |              0.07202 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3718 | <5%                     |                10 |              0.03718 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3735 | >20%                    |                 2 |              0.18675 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3757 |                         |                 5 |              0.07514 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3787 | <5%                     |                 2 |              0.18935 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3811 | >20%                    |                 2 |              0.19055 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3929 | >20%                    |                10 |              0.03929 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4006 | 5-10%                   |                 2 |              0.2003  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4014 | 5-10%                   |                 2 |              0.2007  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.402  |                         |                 2 |              0.201   |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.4036 | >20%                    |                10 |              0.04036 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4045 | <5%                     |                 2 |              0.20225 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4087 | 5-10%                   |                 2 |              0.20435 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4213 | 5-10%                   |                 5 |              0.08426 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4361 | 15-20%                  |                 5 |              0.08722 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4468 | 10-15%                  |                 2 |              0.2234  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4494 | 15-20%                  |                 5 |              0.08988 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4499 | <5%                     |                 2 |              0.22495 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.452  | >20%                    |                 2 |              0.226   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4525 | 10-15%                  |                 5 |              0.0905  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4561 | 5-10%                   |                10 |              0.04561 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.46   | 15-20%                  |                 5 |              0.092   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4621 | >20%                    |                 2 |              0.23105 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4659 | <5%                     |                 5 |              0.09318 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4732 | <5%                     |                 5 |              0.09464 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4816 | 15-20%                  |                 5 |              0.09632 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4832 | 5-10%                   |                 5 |              0.09664 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4844 | 5-10%                   |                 2 |              0.2422  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.489  | <5%                     |                 2 |              0.2445  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5032 | 5-10%                   |                 5 |              0.10064 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5081 | 5-10%                   |                 2 |              0.25405 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5119 | 10-15%                  |                 2 |              0.25595 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      0.5139 |                         |                 5 |              0.10278 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.516  | 5-10%                   |                 2 |              0.258   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5181 | >20%                    |                 5 |              0.10362 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5202 | 10-15%                  |                 2 |              0.2601  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5253 | <5%                     |                 5 |              0.10506 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5274 | >20%                    |                10 |              0.05274 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5275 | <5%                     |                 5 |              0.1055  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5326 | >20%                    |                 2 |              0.2663  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.534  | <5%                     |                 5 |              0.1068  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5413 | >20%                    |                 5 |              0.10826 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5511 | >20%                    |                 5 |              0.11022 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5514 | 5-10%                   |                 5 |              0.11028 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5527 | >20%                    |                 5 |              0.11054 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.553  | 10-15%                  |                 5 |              0.1106  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5537 | 10-15%                  |                10 |              0.05537 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5569 | 10-15%                  |                 5 |              0.11138 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5637 | 10-15%                  |                 5 |              0.11274 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 |                         |                10 |              0.05663 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5715 | 15-20%                  |                 2 |              0.28575 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5766 | >20%                    |                 5 |              0.11532 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.592  | 10-15%                  |                10 |              0.0592  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6    | >20%                    |                10 |              0.06    |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6254 | 5-10%                   |                10 |              0.06254 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6362 | 5-10%                   |                 5 |              0.12724 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.667  | 5-10%                   |                10 |              0.0667  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6699 | >20%                    |                10 |              0.06699 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6728 | <5%                     |                 5 |              0.13456 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6735 | >20%                    |                10 |              0.06735 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6829 | >20%                    |                 2 |              0.34145 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7043 | <5%                     |                 5 |              0.14086 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7118 | 15-20%                  |                 5 |              0.14236 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7137 | 10-15%                  |                10 |              0.07137 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7166 | 5-10%                   |                 5 |              0.14332 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7238 | 5-10%                   |                10 |              0.07238 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7309 | <5%                     |                 5 |              0.14618 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7349 | 15-20%                  |                 5 |              0.14698 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.736  | <5%                     |                 2 |              0.368   |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7589 | >20%                    |                10 |              0.07589 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7602 | <5%                     |                 5 |              0.15204 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7645 | 5-10%                   |                10 |              0.07645 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7721 | <5%                     |                10 |              0.07721 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7822 | 5-10%                   |                10 |              0.07822 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      0.7883 |                         |                10 |              0.07883 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.797  | 5-10%                   |                 5 |              0.1594  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8005 | <5%                     |                 5 |              0.1601  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.81   | 15-20%                  |                10 |              0.081   |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8222 | 5-10%                   |                10 |              0.08222 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8307 | 5-10%                   |                10 |              0.08307 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8347 | 10-15%                  |                10 |              0.08347 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8574 | >20%                    |                 5 |              0.17148 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8598 | <5%                     |                10 |              0.08598 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8633 | 10-15%                  |                10 |              0.08633 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8716 | 15-20%                  |                10 |              0.08716 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.89   | >20%                    |                10 |              0.089   |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.933  | 5-10%                   |                10 |              0.0933  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9475 | <5%                     |                10 |              0.09475 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9508 | 5-10%                   |                10 |              0.09508 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9922 | 5-10%                   |                10 |              0.09922 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.007  | >20%                    |                10 |              0.1007  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0235 | <5%                     |                10 |              0.10235 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0347 | 15-20%                  |                10 |              0.10347 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0403 | >20%                    |                10 |              0.10403 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0497 | 5-10%                   |                10 |              0.10497 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.064  | <5%                     |                10 |              0.1064  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1346 | >20%                    |                10 |              0.11346 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1739 | 10-15%                  |                10 |              0.11739 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1757 | 15-20%                  |                10 |              0.11757 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3507 | >20%                    |                10 |              0.13507 |