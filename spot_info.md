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

Data correct as of 2026-05-18 04:04:59.658217, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1056 | >20%                    |                 2 |              0.0528  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1466 | 15-20%                  |                 2 |              0.0733  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1575 | >20%                    |                 2 |              0.07875 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2016 | 15-20%                  |                 5 |              0.04032 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2201 | >20%                    |                 2 |              0.11005 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2239 | >20%                    |                 2 |              0.11195 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2289 | 15-20%                  |                 2 |              0.11445 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2309 | >20%                    |                 2 |              0.11545 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.24   | 15-20%                  |                 5 |              0.048   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2451 | >20%                    |                 2 |              0.12255 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2477 | >20%                    |                 2 |              0.12385 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2531 | >20%                    |                 5 |              0.05062 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2626 | 5-10%                   |                10 |              0.02626 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2678 | 15-20%                  |                 5 |              0.05356 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2699 | >20%                    |                 5 |              0.05398 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2735 | >20%                    |                 2 |              0.13675 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2819 | >20%                    |                 2 |              0.14095 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2835 | >20%                    |                 5 |              0.0567  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2874 | 15-20%                  |                 2 |              0.1437  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3073 | 10-15%                  |                 2 |              0.15365 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3083 | >20%                    |                 5 |              0.06166 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3088 | >20%                    |                 2 |              0.1544  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3156 | 10-15%                  |                 2 |              0.1578  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3164 | 10-15%                  |                 2 |              0.1582  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3168 | >20%                    |                10 |              0.03168 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3179 | >20%                    |                 2 |              0.15895 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3197 | >20%                    |                 2 |              0.15985 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3261 | >20%                    |                 5 |              0.06522 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3309 | >20%                    |                 2 |              0.16545 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3325 | <5%                     |                 2 |              0.16625 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.351  | >20%                    |                 5 |              0.0702  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3542 | 5-10%                   |                10 |              0.03542 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3608 | >20%                    |                 5 |              0.07216 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3675 | >20%                    |                 5 |              0.0735  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3676 | >20%                    |                 5 |              0.07352 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3692 | >20%                    |                 2 |              0.1846  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.376  | >20%                    |                 5 |              0.0752  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3769 | 10-15%                  |                 2 |              0.18845 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.395  | >20%                    |                 5 |              0.079   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3979 | >20%                    |                 5 |              0.07958 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4021 | <5%                     |                 2 |              0.20105 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.415  | 5-10%                   |                 2 |              0.2075  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4219 | >20%                    |                 2 |              0.21095 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4223 | >20%                    |                 2 |              0.21115 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4235 | >20%                    |                 5 |              0.0847  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4319 | >20%                    |                10 |              0.04319 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4393 | >20%                    |                 2 |              0.21965 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4413 | >20%                    |                 5 |              0.08826 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4449 | <5%                     |                 5 |              0.08898 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4489 | >20%                    |                 5 |              0.08978 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4542 | 15-20%                  |                 2 |              0.2271  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4556 | <5%                     |                 2 |              0.2278  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4591 | >20%                    |                 5 |              0.09182 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4595 | >20%                    |                10 |              0.04595 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4637 | >20%                    |                 5 |              0.09274 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4692 | >20%                    |                 2 |              0.2346  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4709 | >20%                    |                 5 |              0.09418 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4715 | >20%                    |                 2 |              0.23575 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4734 | 15-20%                  |                 2 |              0.2367  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4783 | >20%                    |                 5 |              0.09566 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4966 | >20%                    |                 5 |              0.09932 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.502  | 5-10%                   |                10 |              0.0502  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5043 | 5-10%                   |                 5 |              0.10086 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5054 | 15-20%                  |                 5 |              0.10108 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5067 | >20%                    |                10 |              0.05067 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5078 | >20%                    |                 5 |              0.10156 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5202 | >20%                    |                 2 |              0.2601  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5241 | >20%                    |                10 |              0.05241 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5351 | 10-15%                  |                 5 |              0.10702 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5374 | >20%                    |                 2 |              0.2687  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.547  | >20%                    |                10 |              0.0547  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5474 | 15-20%                  |                 2 |              0.2737  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5505 | >20%                    |                10 |              0.05505 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5657 | >20%                    |                 5 |              0.11314 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.567  | 10-15%                  |                 2 |              0.2835  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6053 | >20%                    |                 5 |              0.12106 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6129 | >20%                    |                 2 |              0.30645 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6215 | >20%                    |                 5 |              0.1243  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6279 | >20%                    |                 2 |              0.31395 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6288 | >20%                    |                 2 |              0.3144  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6353 | >20%                    |                 2 |              0.31765 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6423 | >20%                    |                 2 |              0.32115 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6502 | >20%                    |                 5 |              0.13004 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6636 | 5-10%                   |                10 |              0.06636 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6684 | >20%                    |                10 |              0.06684 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6706 | 15-20%                  |                10 |              0.06706 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6731 | >20%                    |                10 |              0.06731 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.6783 | >20%                    |                10 |              0.06783 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6788 | >20%                    |                10 |              0.06788 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.685  | >20%                    |                 2 |              0.3425  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6894 | >20%                    |                10 |              0.06894 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6922 | 5-10%                   |                 2 |              0.3461  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6986 | 10-15%                  |                 2 |              0.3493  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7045 | >20%                    |                 5 |              0.1409  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.72   | >20%                    |                 5 |              0.144   |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7219 | >20%                    |                 5 |              0.14438 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7236 | >20%                    |                 5 |              0.14472 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7324 | >20%                    |                 5 |              0.14648 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7366 | >20%                    |                 5 |              0.14732 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7416 |                         |                 2 |              0.3708  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7549 |                         |                 5 |              0.15098 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7684 | >20%                    |                 2 |              0.3842  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7692 | >20%                    |                10 |              0.07692 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7828 | >20%                    |                 5 |              0.15656 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7976 | 15-20%                  |                10 |              0.07976 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7998 | 15-20%                  |                10 |              0.07998 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8016 | >20%                    |                 5 |              0.16032 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8046 | >20%                    |                 5 |              0.16092 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8266 | >20%                    |                10 |              0.08266 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      0.8296 |                         |                 5 |              0.16592 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8549 | 10-15%                  |                10 |              0.08549 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8623 | >20%                    |                10 |              0.08623 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8835 | >20%                    |                 5 |              0.1767  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8962 |                         |                 2 |              0.4481  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9006 | 15-20%                  |                10 |              0.09006 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9082 | >20%                    |                10 |              0.09082 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.926  | >20%                    |                10 |              0.0926  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9328 | 15-20%                  |                10 |              0.09328 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9424 | >20%                    |                10 |              0.09424 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9523 | >20%                    |                 5 |              0.19046 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9543 | >20%                    |                 5 |              0.19086 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9595 | >20%                    |                10 |              0.09595 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9641 | >20%                    |                10 |              0.09641 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9784 | >20%                    |                10 |              0.09784 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9825 | >20%                    |                10 |              0.09825 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9953 | 5-10%                   |                 5 |              0.19906 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0028 | >20%                    |                10 |              0.10028 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0106 | >20%                    |                 5 |              0.20212 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0263 | >20%                    |                10 |              0.10263 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      1.0331 | >20%                    |                 5 |              0.20662 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0365 | >20%                    |                 2 |              0.51825 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0431 | >20%                    |                10 |              0.10431 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0532 | >20%                    |                10 |              0.10532 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1258 | 5-10%                   |                10 |              0.11258 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1286 | 5-10%                   |                 2 |              0.5643  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.154  | >20%                    |                10 |              0.1154  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1732 | 15-20%                  |                10 |              0.11732 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2013 | >20%                    |                10 |              0.12013 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2067 | 10-15%                  |                10 |              0.12067 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2103 | 5-10%                   |                 2 |              0.60515 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2185 | >20%                    |                 5 |              0.2437  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2267 | >20%                    |                10 |              0.12267 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2273 | >20%                    |                10 |              0.12273 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2922 | 15-20%                  |                 5 |              0.25844 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3662 |                         |                10 |              0.13662 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.3674 |                         |                10 |              0.13674 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4144 | >20%                    |                 5 |              0.28288 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4182 | 15-20%                  |                10 |              0.14182 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.452  | 10-15%                  |                 2 |              0.726   |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4913 | >20%                    |                10 |              0.14913 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5693 | 15-20%                  |                10 |              0.15693 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0994 | >20%                    |                10 |              0.20994 |