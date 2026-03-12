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

Data correct as of 2026-03-12 02:33:19.566338, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.108  | >20%                    |                 2 |              0.054   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1297 | 10-15%                  |                 2 |              0.06485 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1537 | 15-20%                  |                 5 |              0.03074 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1658 | >20%                    |                 2 |              0.0829  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.1866 | <5%                     |                 2 |              0.0933  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2223 | 10-15%                  |                 2 |              0.11115 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2317 | 15-20%                  |                10 |              0.02317 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2353 | >20%                    |                 5 |              0.04706 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.242  | >20%                    |                 2 |              0.121   |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2492 | >20%                    |                 2 |              0.1246  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2521 | >20%                    |                 2 |              0.12605 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2608 | 5-10%                   |                10 |              0.02608 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2637 | >20%                    |                 2 |              0.13185 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2663 | 15-20%                  |                 2 |              0.13315 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.2708 | <5%                     |                 2 |              0.1354  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2795 | >20%                    |                 2 |              0.13975 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2883 | 15-20%                  |                 2 |              0.14415 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2888 | 10-15%                  |                 2 |              0.1444  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2989 | >20%                    |                 2 |              0.14945 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3005 | >20%                    |                 2 |              0.15025 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3054 | >20%                    |                 2 |              0.1527  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3055 | >20%                    |                 2 |              0.15275 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3065 | >20%                    |                 2 |              0.15325 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3112 | 5-10%                   |                 2 |              0.1556  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3176 | >20%                    |                 5 |              0.06352 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3195 | 5-10%                   |                 5 |              0.0639  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3219 | >20%                    |                 5 |              0.06438 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3227 | >20%                    |                 5 |              0.06454 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3246 | 5-10%                   |                10 |              0.03246 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3318 | <5%                     |                 5 |              0.06636 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.342  | <5%                     |                 5 |              0.0684  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3512 | >20%                    |                 5 |              0.07024 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3542 | <5%                     |                 2 |              0.1771  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3547 | 5-10%                   |                 2 |              0.17735 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3569 | 10-15%                  |                 2 |              0.17845 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3605 | >20%                    |                 5 |              0.0721  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3612 | >20%                    |                10 |              0.03612 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3655 | >20%                    |                 5 |              0.0731  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3664 | <5%                     |                 5 |              0.07328 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3691 | >20%                    |                 5 |              0.07382 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3711 | >20%                    |                10 |              0.03711 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.3723 | 5-10%                   |                 5 |              0.07446 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3729 | 5-10%                   |                 2 |              0.18645 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3739 | 15-20%                  |                 2 |              0.18695 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3769 | <5%                     |                10 |              0.03769 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3809 | >20%                    |                 2 |              0.19045 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.3826 | >20%                    |                10 |              0.03826 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.393  | >20%                    |                 5 |              0.0786  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3953 | >20%                    |                 2 |              0.19765 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3968 | 5-10%                   |                 2 |              0.1984  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3976 | 15-20%                  |                 5 |              0.07952 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3989 | <5%                     |                 5 |              0.07978 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.4025 | 15-20%                  |                 5 |              0.0805  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.408  | 5-10%                   |                 2 |              0.204   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4117 | >20%                    |                 2 |              0.20585 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4168 | >20%                    |                 2 |              0.2084  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4203 | 15-20%                  |                10 |              0.04203 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4208 | 15-20%                  |                 2 |              0.2104  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4227 | >20%                    |                 2 |              0.21135 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.424  | 5-10%                   |                 5 |              0.0848  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4262 | >20%                    |                 5 |              0.08524 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.429  | 10-15%                  |                 5 |              0.0858  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4341 | >20%                    |                10 |              0.04341 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4341 | <5%                     |                 2 |              0.21705 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4403 | 15-20%                  |                 2 |              0.22015 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4431 | >20%                    |                 2 |              0.22155 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4445 | >20%                    |                 2 |              0.22225 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4448 | 15-20%                  |                 2 |              0.2224  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.446  | <5%                     |                10 |              0.0446  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.45   | 15-20%                  |                 5 |              0.09    |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4607 | >20%                    |                 5 |              0.09214 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.461  | >20%                    |                 5 |              0.0922  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4658 | >20%                    |                10 |              0.04658 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4711 | >20%                    |                 5 |              0.09422 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4739 | 5-10%                   |                 2 |              0.23695 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4777 | >20%                    |                 5 |              0.09554 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4805 | >20%                    |                 5 |              0.0961  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4831 | 5-10%                   |                 2 |              0.24155 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4855 | >20%                    |                10 |              0.04855 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4879 | >20%                    |                 2 |              0.24395 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4913 | <5%                     |                10 |              0.04913 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5114 | >20%                    |                 2 |              0.2557  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5145 | 15-20%                  |                 5 |              0.1029  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5165 | >20%                    |                 2 |              0.25825 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5224 | 5-10%                   |                 5 |              0.10448 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5243 | <5%                     |                10 |              0.05243 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5247 | <5%                     |                 5 |              0.10494 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5261 | >20%                    |                 5 |              0.10522 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.534  | >20%                    |                 5 |              0.1068  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5386 | >20%                    |                 2 |              0.2693  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5452 | >20%                    |                 2 |              0.2726  |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5486 |                         |                 2 |              0.2743  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5537 | 15-20%                  |                10 |              0.05537 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5565 | >20%                    |                10 |              0.05565 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5579 | >20%                    |                 2 |              0.27895 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5619 | >20%                    |                 5 |              0.11238 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5631 | >20%                    |                 5 |              0.11262 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5645 | <5%                     |                 5 |              0.1129  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5718 | 15-20%                  |                10 |              0.05718 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5751 | >20%                    |                 5 |              0.11502 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5852 | >20%                    |                 5 |              0.11704 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5859 | >20%                    |                10 |              0.05859 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5891 | 5-10%                   |                 2 |              0.29455 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5936 | 15-20%                  |                10 |              0.05936 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5955 | >20%                    |                 5 |              0.1191  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5969 | <5%                     |                10 |              0.05969 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5981 | 5-10%                   |                 5 |              0.11962 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5995 | >20%                    |                 2 |              0.29975 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6044 | >20%                    |                10 |              0.06044 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6073 | >20%                    |                 5 |              0.12146 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6085 | <5%                     |                10 |              0.06085 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.613  | >20%                    |                10 |              0.0613  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6161 | 5-10%                   |                 2 |              0.30805 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6283 | 15-20%                  |                 2 |              0.31415 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6286 | >20%                    |                 5 |              0.12572 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6289 | >20%                    |                10 |              0.06289 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6375 | >20%                    |                 2 |              0.31875 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6456 | 5-10%                   |                 5 |              0.12912 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6583 | >20%                    |                 5 |              0.13166 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6618 | >20%                    |                 2 |              0.3309  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6712 | >20%                    |                 5 |              0.13424 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6713 | 15-20%                  |                10 |              0.06713 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.673  | >20%                    |                10 |              0.0673  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6786 | >20%                    |                10 |              0.06786 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6838 | >20%                    |                10 |              0.06838 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6844 | 10-15%                  |                 5 |              0.13688 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6946 |                         |                 5 |              0.13892 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6995 | <5%                     |                10 |              0.06995 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7131 | >20%                    |                 5 |              0.14262 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7309 | >20%                    |                 5 |              0.14618 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7342 | >20%                    |                 5 |              0.14684 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7426 | >20%                    |                 5 |              0.14852 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7504 | >20%                    |                10 |              0.07504 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7543 | 10-15%                  |                10 |              0.07543 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7706 | >20%                    |                10 |              0.07706 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7905 | <5%                     |                10 |              0.07905 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7917 | <5%                     |                 5 |              0.15834 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8086 | 5-10%                   |                10 |              0.08086 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8139 | <5%                     |                10 |              0.08139 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8184 | >20%                    |                 5 |              0.16368 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8199 | >20%                    |                 5 |              0.16398 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8212 | >20%                    |                 5 |              0.16424 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8224 | >20%                    |                10 |              0.08224 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8232 | 10-15%                  |                10 |              0.08232 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8406 | >20%                    |                 2 |              0.4203  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8428 | >20%                    |                10 |              0.08428 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.846  | <5%                     |                 5 |              0.1692  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8679 | >20%                    |                10 |              0.08679 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8682 | >20%                    |                10 |              0.08682 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8864 | >20%                    |                 5 |              0.17728 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8905 | <5%                     |                10 |              0.08905 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8965 | 5-10%                   |                10 |              0.08965 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9116 | >20%                    |                10 |              0.09116 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9122 | >20%                    |                 5 |              0.18244 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9252 | >20%                    |                 2 |              0.4626  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9297 | >20%                    |                10 |              0.09297 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9499 | 10-15%                  |                 2 |              0.47495 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9587 | >20%                    |                10 |              0.09587 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9652 | >20%                    |                10 |              0.09652 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9652 | >20%                    |                10 |              0.09652 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9666 | 15-20%                  |                10 |              0.09666 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.978  | >20%                    |                 2 |              0.489   |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9806 | >20%                    |                 2 |              0.4903  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9877 | 5-10%                   |                 5 |              0.19754 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0041 | 5-10%                   |                10 |              0.10041 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0244 | >20%                    |                10 |              0.10244 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.057  |                         |                10 |              0.1057  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0599 | 15-20%                  |                10 |              0.10599 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0948 | >20%                    |                10 |              0.10948 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1614 | <5%                     |                10 |              0.11614 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2227 | 10-15%                  |                 5 |              0.24454 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2486 | >20%                    |                 2 |              0.6243  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2521 | 10-15%                  |                10 |              0.12521 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2568 | >20%                    |                10 |              0.12568 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4083 | 15-20%                  |                10 |              0.14083 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4311 | 10-15%                  |                 5 |              0.28622 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4404 | >20%                    |                 2 |              0.7202  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4645 | >20%                    |                 5 |              0.2929  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5721 | >20%                    |                10 |              0.15721 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6099 | >20%                    |                10 |              0.16099 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.6498 | <5%                     |                 5 |              0.32996 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.759  | >20%                    |                 2 |              0.8795  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.265  | 10-15%                  |                10 |              0.2265  |