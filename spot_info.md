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

Data correct as of 2025-02-23 01:43:51.602227, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1264 | >20%                    |                 2 |              0.0632  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1286 | 10-15%                  |                 2 |              0.0643  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1425 | 5-10%                   |                 5 |              0.0285  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1714 | <5%                     |                 2 |              0.0857  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1908 | <5%                     |                 5 |              0.03816 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.1953 | 10-15%                  |                 5 |              0.03906 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2073 | 15-20%                  |                 5 |              0.04146 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2102 | >20%                    |                 2 |              0.1051  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2137 | 5-10%                   |                 2 |              0.10685 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2155 | >20%                    |                 2 |              0.10775 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2186 | <5%                     |                 5 |              0.04372 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2212 | >20%                    |                 5 |              0.04424 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2232 | <5%                     |                 2 |              0.1116  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2361 | >20%                    |                 2 |              0.11805 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.2378 |                         |                 2 |              0.1189  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2379 | >20%                    |                 2 |              0.11895 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2401 | >20%                    |                 2 |              0.12005 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.241  | >20%                    |                 2 |              0.1205  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2414 | 5-10%                   |                10 |              0.02414 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2425 | <5%                     |                 5 |              0.0485  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2564 | 15-20%                  |                10 |              0.02564 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2724 | 5-10%                   |                 2 |              0.1362  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2784 | 5-10%                   |                 2 |              0.1392  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2817 | <5%                     |                 2 |              0.14085 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.283  | 5-10%                   |                 5 |              0.0566  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2841 | >20%                    |                 5 |              0.05682 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2843 | >20%                    |                 2 |              0.14215 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2888 | 15-20%                  |                 2 |              0.1444  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2901 | 10-15%                  |                10 |              0.02901 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2943 | 5-10%                   |                 2 |              0.14715 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3003 | 10-15%                  |                 2 |              0.15015 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3079 | <5%                     |                 2 |              0.15395 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3119 | 15-20%                  |                 2 |              0.15595 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3145 | <5%                     |                 2 |              0.15725 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3159 | <5%                     |                 2 |              0.15795 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3238 | 15-20%                  |                 5 |              0.06476 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3239 | >20%                    |                 2 |              0.16195 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.324  | >20%                    |                10 |              0.0324  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.327  |                         |                 5 |              0.0654  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3273 | 10-15%                  |                 2 |              0.16365 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3315 | <5%                     |                10 |              0.03315 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3372 | >20%                    |                 2 |              0.1686  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3421 | 5-10%                   |                10 |              0.03421 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3437 | 15-20%                  |                 2 |              0.17185 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3461 | >20%                    |                10 |              0.03461 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3505 | 15-20%                  |                10 |              0.03505 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3525 | 15-20%                  |                10 |              0.03525 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3582 | 15-20%                  |                 2 |              0.1791  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.36   | 10-15%                  |                 5 |              0.072   |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3662 | <5%                     |                 5 |              0.07324 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3715 | <5%                     |                 2 |              0.18575 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3723 | 10-15%                  |                10 |              0.03723 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3834 | 5-10%                   |                 5 |              0.07668 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3906 | 5-10%                   |                 2 |              0.1953  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.395  | 5-10%                   |                 2 |              0.1975  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4025 | >20%                    |                 5 |              0.0805  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4035 | >20%                    |                 5 |              0.0807  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4052 | 5-10%                   |                 2 |              0.2026  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4073 | <5%                     |                 2 |              0.20365 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4077 | <5%                     |                 5 |              0.08154 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4137 | 15-20%                  |                 2 |              0.20685 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4147 | 5-10%                   |                 2 |              0.20735 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4183 | 10-15%                  |                 2 |              0.20915 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4255 | >20%                    |                 5 |              0.0851  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4359 | <5%                     |                 2 |              0.21795 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.439  | >20%                    |                 2 |              0.2195  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4434 | >20%                    |                 2 |              0.2217  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.449  | <5%                     |                 5 |              0.0898  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4534 | >20%                    |                 5 |              0.09068 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.472  | 5-10%                   |                 5 |              0.0944  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4737 | 10-15%                  |                 5 |              0.09474 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4761 | 15-20%                  |                 5 |              0.09522 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4844 | <5%                     |                10 |              0.04844 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4887 | 5-10%                   |                 5 |              0.09774 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4922 | >20%                    |                 2 |              0.2461  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.4927 |                         |                10 |              0.04927 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4985 | <5%                     |                 5 |              0.0997  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5018 | >20%                    |                 5 |              0.10036 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5018 | >20%                    |                 2 |              0.2509  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5025 | >20%                    |                 2 |              0.25125 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5063 | >20%                    |                 5 |              0.10126 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5114 | >20%                    |                 2 |              0.2557  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5139 | >20%                    |                 2 |              0.25695 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5147 | >20%                    |                 2 |              0.25735 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5159 | 10-15%                  |                 5 |              0.10318 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5232 | <5%                     |                 2 |              0.2616  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5243 | 10-15%                  |                 5 |              0.10486 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.53   | >20%                    |                 5 |              0.106   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5404 | >20%                    |                 5 |              0.10808 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5441 | 15-20%                  |                 2 |              0.27205 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5445 | <5%                     |                 5 |              0.1089  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5463 | >20%                    |                 5 |              0.10926 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5494 | >20%                    |                 2 |              0.2747  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5504 | 5-10%                   |                 5 |              0.11008 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5541 | >20%                    |                 2 |              0.27705 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5584 | 5-10%                   |                 5 |              0.11168 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5635 | >20%                    |                 2 |              0.28175 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5684 | 5-10%                   |                 5 |              0.11368 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5691 | 5-10%                   |                 2 |              0.28455 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.57   | >20%                    |                 5 |              0.114   |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5712 | >20%                    |                 2 |              0.2856  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5792 | 5-10%                   |                10 |              0.05792 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5873 | 15-20%                  |                 5 |              0.11746 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5893 | <5%                     |                 5 |              0.11786 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6061 | 5-10%                   |                 5 |              0.12122 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6068 | 10-15%                  |                 5 |              0.12136 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6106 | >20%                    |                 5 |              0.12212 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6126 | 10-15%                  |                 5 |              0.12252 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6233 | 10-15%                  |                10 |              0.06233 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6314 | 15-20%                  |                10 |              0.06314 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6457 | >20%                    |                10 |              0.06457 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6472 | >20%                    |                 5 |              0.12944 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.656  | <5%                     |                10 |              0.0656  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6634 | >20%                    |                 2 |              0.3317  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6758 | >20%                    |                10 |              0.06758 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6778 | 5-10%                   |                 5 |              0.13556 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6788 | 10-15%                  |                 5 |              0.13576 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6991 | 5-10%                   |                 5 |              0.13982 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7038 | >20%                    |                 2 |              0.3519  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7103 | >20%                    |                 5 |              0.14206 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7272 | 5-10%                   |                10 |              0.07272 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7288 | >20%                    |                10 |              0.07288 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.733  | >20%                    |                 5 |              0.1466  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7475 | 5-10%                   |                 5 |              0.1495  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7524 | >20%                    |                10 |              0.07524 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7628 | <5%                     |                10 |              0.07628 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.764  | >20%                    |                 5 |              0.1528  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7752 | <5%                     |                 5 |              0.15504 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.777  | >20%                    |                10 |              0.0777  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7777 | 15-20%                  |                10 |              0.07777 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7804 | >20%                    |                 5 |              0.15608 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7828 | >20%                    |                 5 |              0.15656 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7988 | >20%                    |                10 |              0.07988 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.801  | 5-10%                   |                10 |              0.0801  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8011 | 15-20%                  |                 2 |              0.40055 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8021 | 10-15%                  |                10 |              0.08021 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8107 | 5-10%                   |                 2 |              0.40535 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.819  | 15-20%                  |                10 |              0.0819  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8211 | <5%                     |                10 |              0.08211 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.849  | >20%                    |                10 |              0.0849  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.852  | >20%                    |                10 |              0.0852  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8558 | <5%                     |                10 |              0.08558 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8767 | <5%                     |                10 |              0.08767 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8796 | <5%                     |                10 |              0.08796 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8865 | 5-10%                   |                10 |              0.08865 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.8875 | 5-10%                   |                10 |              0.08875 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8892 | 10-15%                  |                10 |              0.08892 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8902 | >20%                    |                 2 |              0.4451  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9031 | >20%                    |                10 |              0.09031 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.915  | >20%                    |                10 |              0.0915  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9181 | 10-15%                  |                10 |              0.09181 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9335 | >20%                    |                 5 |              0.1867  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9602 | >20%                    |                10 |              0.09602 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9622 | 5-10%                   |                10 |              0.09622 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9748 | 10-15%                  |                10 |              0.09748 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.009  | 15-20%                  |                10 |              0.1009  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0114 | >20%                    |                10 |              0.10114 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0148 | >20%                    |                10 |              0.10148 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0373 | 15-20%                  |                10 |              0.10373 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0483 | 15-20%                  |                 5 |              0.20966 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0548 | <5%                     |                10 |              0.10548 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0688 | 5-10%                   |                 5 |              0.21376 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0979 | >20%                    |                10 |              0.10979 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1346 | 10-15%                  |                10 |              0.11346 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1372 | 10-15%                  |                 2 |              0.5686  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.166  | 15-20%                  |                10 |              0.1166  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1661 | >20%                    |                10 |              0.11661 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1957 | >20%                    |                 2 |              0.59785 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2317 | >20%                    |                 2 |              0.61585 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.242  | >20%                    |                 5 |              0.2484  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2847 | 10-15%                  |                 5 |              0.25694 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2985 | >20%                    |                 5 |              0.2597  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3736 | >20%                    |                10 |              0.13736 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3968 | >20%                    |                10 |              0.13968 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5939 | >20%                    |                10 |              0.15939 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7042 | >20%                    |                10 |              0.17042 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7201 | >20%                    |                10 |              0.17201 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0561 | 5-10%                   |                10 |              0.20561 |