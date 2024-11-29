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

Data correct as of 2024-11-29 01:44:18.294773, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1208 | >20%                    |                 5 |              0.02416 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1797 | 10-15%                  |                 2 |              0.08985 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.1816 | >20%                    |                 5 |              0.03632 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2184 | 5-10%                   |                 2 |              0.1092  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2248 | 15-20%                  |                 2 |              0.1124  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2257 | 5-10%                   |                 2 |              0.11285 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2277 | 5-10%                   |                 2 |              0.11385 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2386 | <5%                     |                 2 |              0.1193  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2483 | <5%                     |                 2 |              0.12415 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2488 | >20%                    |                 2 |              0.1244  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2696 | 15-20%                  |                 5 |              0.05392 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2714 | 10-15%                  |                 2 |              0.1357  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.278  | 5-10%                   |                 2 |              0.139   |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 |                         |                 2 |              0.1402  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.281  | <5%                     |                 2 |              0.1405  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | <5%                     |                 5 |              0.06008 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3024 | 10-15%                  |                 2 |              0.1512  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3041 | >20%                    |                 5 |              0.06082 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3108 | 5-10%                   |                 2 |              0.1554  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.323  | >20%                    |                 2 |              0.1615  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3247 | <5%                     |                 2 |              0.16235 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.326  | <5%                     |                10 |              0.0326  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3271 | 5-10%                   |                 2 |              0.16355 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3359 | >20%                    |                 2 |              0.16795 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3377 | <5%                     |                 2 |              0.16885 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.338  | <5%                     |                 5 |              0.0676  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3495 | 15-20%                  |                 2 |              0.17475 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.352  | <5%                     |                 2 |              0.176   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3546 | >20%                    |                 5 |              0.07092 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3618 | 15-20%                  |                 2 |              0.1809  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.362  | <5%                     |                 5 |              0.0724  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.371  | <5%                     |                10 |              0.0371  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3746 | >20%                    |                 2 |              0.1873  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3757 |                         |                 5 |              0.07514 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3775 | <5%                     |                 2 |              0.18875 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3791 | >20%                    |                 2 |              0.18955 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.3991 | >20%                    |                10 |              0.03991 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3993 | 5-10%                   |                 2 |              0.19965 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4014 | 5-10%                   |                 2 |              0.2007  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4045 | <5%                     |                 2 |              0.20225 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4063 | >20%                    |                10 |              0.04063 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4147 | 5-10%                   |                 2 |              0.20735 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4183 | 15-20%                  |                 5 |              0.08366 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4221 | 5-10%                   |                 5 |              0.08442 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.4227 |                         |                 2 |              0.21135 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4446 | 10-15%                  |                 2 |              0.2223  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4492 | <5%                     |                 2 |              0.2246  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4518 | >20%                    |                 2 |              0.2259  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4523 | 15-20%                  |                 5 |              0.09046 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4554 | 10-15%                  |                 5 |              0.09108 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4593 | 5-10%                   |                10 |              0.04593 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.46   | 15-20%                  |                 5 |              0.092   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.465  | >20%                    |                 2 |              0.2325  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4694 | <5%                     |                 5 |              0.09388 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4703 | <5%                     |                 5 |              0.09406 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4806 | <5%                     |                 2 |              0.2403  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4832 | 5-10%                   |                 5 |              0.09664 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4837 | 5-10%                   |                 2 |              0.24185 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.486  | 15-20%                  |                 5 |              0.0972  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5019 | 5-10%                   |                 2 |              0.25095 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5104 | 5-10%                   |                 5 |              0.10208 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5211 | >20%                    |                 5 |              0.10422 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5224 | 10-15%                  |                 2 |              0.2612  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5227 | 10-15%                  |                 2 |              0.26135 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      0.5243 |                         |                 5 |              0.10486 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5274 | >20%                    |                10 |              0.05274 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5344 | 5-10%                   |                 2 |              0.2672  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.535  | >20%                    |                 2 |              0.2675  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5354 | <5%                     |                 5 |              0.10708 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5371 | >20%                    |                 5 |              0.10742 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5379 | <5%                     |                 5 |              0.10758 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.539  | <5%                     |                 5 |              0.1078  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5462 | 10-15%                  |                 5 |              0.10924 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5521 | >20%                    |                 5 |              0.11042 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5538 | >20%                    |                 5 |              0.11076 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5546 | 5-10%                   |                 5 |              0.11092 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5569 | 10-15%                  |                 5 |              0.11138 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5651 | 10-15%                  |                10 |              0.05651 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 |                         |                10 |              0.05663 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5667 | 10-15%                  |                 5 |              0.11334 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5717 | 15-20%                  |                 2 |              0.28585 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5799 | >20%                    |                 5 |              0.11598 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5965 | 10-15%                  |                10 |              0.05965 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6032 | >20%                    |                10 |              0.06032 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6226 | 5-10%                   |                10 |              0.06226 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6371 | 5-10%                   |                 5 |              0.12742 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6713 | 5-10%                   |                10 |              0.06713 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6733 | >20%                    |                10 |              0.06733 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6737 | <5%                     |                 5 |              0.13474 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6757 | >20%                    |                10 |              0.06757 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.678  | >20%                    |                 2 |              0.339   |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7085 | <5%                     |                 5 |              0.1417  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7111 | 15-20%                  |                 5 |              0.14222 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7153 | 5-10%                   |                10 |              0.07153 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7167 | 10-15%                  |                10 |              0.07167 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7274 | 5-10%                   |                 5 |              0.14548 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7335 | <5%                     |                 5 |              0.1467  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7409 | 15-20%                  |                 5 |              0.14818 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7464 | <5%                     |                 2 |              0.3732  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7542 | 5-10%                   |                10 |              0.07542 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7558 | >20%                    |                10 |              0.07558 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7602 | <5%                     |                 5 |              0.15204 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7717 | 15-20%                  |                10 |              0.07717 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7747 | 5-10%                   |                10 |              0.07747 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7802 | <5%                     |                10 |              0.07802 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.791  | 5-10%                   |                 5 |              0.1582  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8222 | 5-10%                   |                10 |              0.08222 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8322 | 5-10%                   |                10 |              0.08322 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8341 | 10-15%                  |                10 |              0.08341 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      0.835  |                         |                10 |              0.0835  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8416 | <5%                     |                 5 |              0.16832 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8462 | >20%                    |                 5 |              0.16924 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8598 | <5%                     |                10 |              0.08598 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8651 | 10-15%                  |                10 |              0.08651 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8855 | 15-20%                  |                10 |              0.08855 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8866 | >20%                    |                10 |              0.08866 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9314 | 5-10%                   |                10 |              0.09314 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.935  | <5%                     |                10 |              0.0935  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9461 | 5-10%                   |                10 |              0.09461 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9965 | 5-10%                   |                10 |              0.09965 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0103 | >20%                    |                10 |              0.10103 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0235 | <5%                     |                10 |              0.10235 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0405 | >20%                    |                10 |              0.10405 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0407 | 5-10%                   |                10 |              0.10407 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0481 | 15-20%                  |                10 |              0.10481 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0768 | <5%                     |                10 |              0.10768 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1556 | 10-15%                  |                10 |              0.11556 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1759 | 15-20%                  |                10 |              0.11759 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2307 | >20%                    |                10 |              0.12307 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3622 | >20%                    |                10 |              0.13622 |