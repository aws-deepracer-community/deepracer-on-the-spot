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

Data correct as of 2025-04-10 01:46:27.187165, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1227 | 10-15%                  |                 2 |              0.06135 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1242 | 15-20%                  |                 2 |              0.0621  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1277 | 5-10%                   |                 5 |              0.02554 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1612 | 10-15%                  |                 5 |              0.03224 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1817 | >20%                    |                 2 |              0.09085 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.1987 | 5-10%                   |                 5 |              0.03974 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2025 | <5%                     |                 2 |              0.10125 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2154 | 15-20%                  |                 5 |              0.04308 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.228  | 15-20%                  |                 2 |              0.114   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2288 | >20%                    |                 2 |              0.1144  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2394 | >20%                    |                 2 |              0.1197  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2401 | 15-20%                  |                 2 |              0.12005 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2447 | 10-15%                  |                10 |              0.02447 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2459 | 15-20%                  |                10 |              0.02459 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.264  | >20%                    |                 2 |              0.132   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2689 | 15-20%                  |                 2 |              0.13445 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2745 | <5%                     |                 2 |              0.13725 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2753 | 10-15%                  |                 2 |              0.13765 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.276  | 5-10%                   |                 2 |              0.138   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2793 | 5-10%                   |                 2 |              0.13965 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2825 | <5%                     |                 2 |              0.14125 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2964 | >20%                    |                 2 |              0.1482  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.2981 | <5%                     |                10 |              0.02981 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.299  | 10-15%                  |                 2 |              0.1495  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3009 | <5%                     |                 2 |              0.15045 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3012 | 10-15%                  |                10 |              0.03012 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3031 | 10-15%                  |                 5 |              0.06062 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3129 | 15-20%                  |                 2 |              0.15645 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3159 | 10-15%                  |                 2 |              0.15795 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3207 | 15-20%                  |                10 |              0.03207 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3305 | >20%                    |                 2 |              0.16525 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3347 | 10-15%                  |                 5 |              0.06694 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3464 | >20%                    |                 5 |              0.06928 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3508 | >20%                    |                10 |              0.03508 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3518 | >20%                    |                 5 |              0.07036 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3537 | 5-10%                   |                 5 |              0.07074 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3554 | >20%                    |                 2 |              0.1777  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3555 | 10-15%                  |                 2 |              0.17775 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3656 | >20%                    |                10 |              0.03656 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3666 | >20%                    |                 2 |              0.1833  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3802 | <5%                     |                 2 |              0.1901  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.382  | >20%                    |                 2 |              0.191   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3838 | <5%                     |                 2 |              0.1919  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3849 | >20%                    |                 2 |              0.19245 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3855 | >20%                    |                 2 |              0.19275 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3862 | 10-15%                  |                 5 |              0.07724 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3899 | <5%                     |                 2 |              0.19495 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3962 | >20%                    |                 2 |              0.1981  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4019 | >20%                    |                 5 |              0.08038 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4086 | 15-20%                  |                 2 |              0.2043  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4088 | >20%                    |                10 |              0.04088 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4091 | >20%                    |                 2 |              0.20455 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4113 | <5%                     |                 2 |              0.20565 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4146 | 15-20%                  |                 2 |              0.2073  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4196 | 10-15%                  |                 5 |              0.08392 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4213 | 10-15%                  |                10 |              0.04213 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4252 | >20%                    |                 5 |              0.08504 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4379 | 10-15%                  |                 5 |              0.08758 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4405 | >20%                    |                 2 |              0.22025 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4412 | >20%                    |                 2 |              0.2206  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.443  | >20%                    |                 5 |              0.0886  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4432 | >20%                    |                 5 |              0.08864 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4449 | 5-10%                   |                10 |              0.04449 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4458 | 5-10%                   |                 5 |              0.08916 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4502 | <5%                     |                 2 |              0.2251  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.457  | >20%                    |                 5 |              0.0914  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4579 | 5-10%                   |                 2 |              0.22895 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.463  | >20%                    |                 2 |              0.2315  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4632 | >20%                    |                 5 |              0.09264 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4699 | >20%                    |                 5 |              0.09398 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4734 | <5%                     |                 5 |              0.09468 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.48   | 10-15%                  |                 2 |              0.24    |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4814 | 5-10%                   |                 5 |              0.09628 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4842 | >20%                    |                 2 |              0.2421  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4882 | >20%                    |                10 |              0.04882 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4883 | >20%                    |                 5 |              0.09766 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4916 | >20%                    |                 5 |              0.09832 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4967 | >20%                    |                 2 |              0.24835 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4998 | >20%                    |                 5 |              0.09996 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4998 | 10-15%                  |                 5 |              0.09996 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5037 | 5-10%                   |                 5 |              0.10074 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5093 | <5%                     |                 5 |              0.10186 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5102 | 15-20%                  |                 5 |              0.10204 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5247 | >20%                    |                 5 |              0.10494 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5295 | 15-20%                  |                 2 |              0.26475 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5311 | >20%                    |                 5 |              0.10622 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5321 | >20%                    |                 2 |              0.26605 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5438 | 5-10%                   |                 5 |              0.10876 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5474 | >20%                    |                 2 |              0.2737  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5506 | >20%                    |                 5 |              0.11012 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5586 | <5%                     |                10 |              0.05586 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5639 | 15-20%                  |                 2 |              0.28195 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5739 | >20%                    |                 2 |              0.28695 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5864 | 5-10%                   |                 2 |              0.2932  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5874 | 15-20%                  |                 5 |              0.11748 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5924 | <5%                     |                 5 |              0.11848 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5987 | 10-15%                  |                 5 |              0.11974 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5989 | >20%                    |                 5 |              0.11978 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6045 | >20%                    |                 2 |              0.30225 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6052 | >20%                    |                10 |              0.06052 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6052 | 15-20%                  |                 5 |              0.12104 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6068 | >20%                    |                 2 |              0.3034  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6118 | <5%                     |                 5 |              0.12236 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6281 | >20%                    |                 5 |              0.12562 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6303 | 5-10%                   |                 5 |              0.12606 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6396 | >20%                    |                 5 |              0.12792 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6397 | 10-15%                  |                10 |              0.06397 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6415 | >20%                    |                 5 |              0.1283  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6428 | >20%                    |                 2 |              0.3214  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6446 | >20%                    |                 5 |              0.12892 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.649  | >20%                    |                10 |              0.0649  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6502 | 10-15%                  |                 5 |              0.13004 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.658  | <5%                     |                 5 |              0.1316  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.66   | >20%                    |                10 |              0.066   |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6607 | >20%                    |                 5 |              0.13214 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6658 | 10-15%                  |                 2 |              0.3329  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6668 | <5%                     |                10 |              0.06668 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6695 | 10-15%                  |                 5 |              0.1339  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6763 | <5%                     |                10 |              0.06763 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6815 | 5-10%                   |                 5 |              0.1363  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6875 | >20%                    |                10 |              0.06875 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6965 | >20%                    |                10 |              0.06965 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.705  | >20%                    |                 5 |              0.141   |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7091 | >20%                    |                 5 |              0.14182 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.713  | >20%                    |                 2 |              0.3565  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7134 | >20%                    |                10 |              0.07134 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7313 | 10-15%                  |                10 |              0.07313 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7435 | <5%                     |                10 |              0.07435 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7532 | 15-20%                  |                 5 |              0.15064 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7556 | >20%                    |                10 |              0.07556 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7588 | 10-15%                  |                10 |              0.07588 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7668 | <5%                     |                10 |              0.07668 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7701 | >20%                    |                 5 |              0.15402 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7744 | 5-10%                   |                10 |              0.07744 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7809 | 5-10%                   |                10 |              0.07809 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7833 | <5%                     |                 5 |              0.15666 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7907 | 15-20%                  |                 5 |              0.15814 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.804  | <5%                     |                10 |              0.0804  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.81   | <5%                     |                10 |              0.081   |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8124 | >20%                    |                10 |              0.08124 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8141 | >20%                    |                 2 |              0.40705 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8229 | 10-15%                  |                10 |              0.08229 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8238 | >20%                    |                 2 |              0.4119  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8277 | 10-15%                  |                10 |              0.08277 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8306 | 15-20%                  |                10 |              0.08306 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8348 | >20%                    |                10 |              0.08348 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8374 | 15-20%                  |                10 |              0.08374 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8504 | >20%                    |                10 |              0.08504 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.855  | <5%                     |                 2 |              0.4275  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8555 | >20%                    |                 2 |              0.42775 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8665 | <5%                     |                10 |              0.08665 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8727 | <5%                     |                10 |              0.08727 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8784 | >20%                    |                10 |              0.08784 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8834 | >20%                    |                10 |              0.08834 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.886  | <5%                     |                10 |              0.0886  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8952 | 15-20%                  |                 5 |              0.17904 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8991 | >20%                    |                10 |              0.08991 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9499 | 15-20%                  |                10 |              0.09499 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9509 | 10-15%                  |                10 |              0.09509 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9583 | >20%                    |                 5 |              0.19166 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9859 | 5-10%                   |                10 |              0.09859 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0045 | >20%                    |                 5 |              0.2009  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0468 | >20%                    |                10 |              0.10468 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0879 | <5%                     |                10 |              0.10879 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1076 | 10-15%                  |                 2 |              0.5538  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1157 | <5%                     |                10 |              0.11157 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.148  | 15-20%                  |                10 |              0.1148  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1843 | 15-20%                  |                10 |              0.11843 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2019 | >20%                    |                10 |              0.12019 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2403 | <5%                     |                 5 |              0.24806 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2611 | >20%                    |                 5 |              0.25222 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3114 | >20%                    |                 5 |              0.26228 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3124 | 15-20%                  |                10 |              0.13124 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3292 | >20%                    |                10 |              0.13292 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3596 | 5-10%                   |                 2 |              0.6798  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4556 | >20%                    |                 2 |              0.7278  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6477 | >20%                    |                10 |              0.16477 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6807 | >20%                    |                10 |              0.16807 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8458 | <5%                     |                10 |              0.18458 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8466 | 15-20%                  |                10 |              0.18466 |