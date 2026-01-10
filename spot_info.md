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

Data correct as of 2026-01-10 02:00:15.552974, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.117  | >20%                    |                 2 |              0.0585  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1483 | >20%                    |                 2 |              0.07415 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1562 | >20%                    |                 5 |              0.03124 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.168  | >20%                    |                 2 |              0.084   |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1748 | <5%                     |                 2 |              0.0874  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2151 | <5%                     |                 5 |              0.04302 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2218 | >20%                    |                 2 |              0.1109  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2321 | >20%                    |                 2 |              0.11605 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2382 | >20%                    |                 2 |              0.1191  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2424 | >20%                    |                 2 |              0.1212  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2476 | >20%                    |                 5 |              0.04952 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2521 | >20%                    |                 2 |              0.12605 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2693 | >20%                    |                 2 |              0.13465 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2693 | >20%                    |                 2 |              0.13465 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2837 | >20%                    |                10 |              0.02837 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2842 | >20%                    |                 2 |              0.1421  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.287  | 15-20%                  |                 5 |              0.0574  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2898 | 5-10%                   |                10 |              0.02898 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2906 | >20%                    |                 5 |              0.05812 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2926 | 15-20%                  |                 2 |              0.1463  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.294  | >20%                    |                 2 |              0.147   |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2977 | >20%                    |                 5 |              0.05954 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.304  | >20%                    |                 2 |              0.152   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3161 | >20%                    |                 5 |              0.06322 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3257 | >20%                    |                 5 |              0.06514 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3274 | >20%                    |                 2 |              0.1637  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3302 | 5-10%                   |                 5 |              0.06604 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3328 | >20%                    |                 2 |              0.1664  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3416 | <5%                     |                 5 |              0.06832 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.344  | >20%                    |                 2 |              0.172   |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3528 | 5-10%                   |                10 |              0.03528 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3559 | >20%                    |                 5 |              0.07118 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3585 | 5-10%                   |                 2 |              0.17925 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.366  | >20%                    |                 5 |              0.0732  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3671 | >20%                    |                 5 |              0.07342 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.37   | 5-10%                   |                 2 |              0.185   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3723 | 10-15%                  |                 2 |              0.18615 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3723 | >20%                    |                10 |              0.03723 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3729 | >20%                    |                 2 |              0.18645 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3731 | >20%                    |                 2 |              0.18655 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3742 | >20%                    |                 5 |              0.07484 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3795 | >20%                    |                 5 |              0.0759  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3799 | >20%                    |                 2 |              0.18995 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3805 | >20%                    |                 5 |              0.0761  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3829 | >20%                    |                 2 |              0.19145 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3876 | >20%                    |                 5 |              0.07752 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3945 | >20%                    |                 2 |              0.19725 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4001 | 15-20%                  |                10 |              0.04001 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.401  | >20%                    |                 2 |              0.2005  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4011 | >20%                    |                 2 |              0.20055 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4021 | 10-15%                  |                 2 |              0.20105 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4034 | <5%                     |                10 |              0.04034 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.404  | >20%                    |                10 |              0.0404  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4053 | >20%                    |                 5 |              0.08106 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4054 | >20%                    |                 2 |              0.2027  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4135 | >20%                    |                10 |              0.04135 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4144 | >20%                    |                10 |              0.04144 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4196 | >20%                    |                 2 |              0.2098  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4282 | >20%                    |                10 |              0.04282 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4284 | >20%                    |                 5 |              0.08568 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4314 | <5%                     |                 2 |              0.2157  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4314 | >20%                    |                 5 |              0.08628 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4404 | 10-15%                  |                 2 |              0.2202  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4424 | >20%                    |                 2 |              0.2212  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4427 | >20%                    |                 5 |              0.08854 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.445  | 15-20%                  |                10 |              0.0445  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4475 | >20%                    |                 2 |              0.22375 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.454  | >20%                    |                 5 |              0.0908  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4541 | >20%                    |                 2 |              0.22705 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4541 | <5%                     |                 2 |              0.22705 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4548 | >20%                    |                 5 |              0.09096 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4645 | <5%                     |                10 |              0.04645 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4655 | >20%                    |                 5 |              0.0931  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4686 | 15-20%                  |                 2 |              0.2343  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4689 | >20%                    |                 2 |              0.23445 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.475  | >20%                    |                 5 |              0.095   |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4771 | 15-20%                  |                 5 |              0.09542 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4826 | <5%                     |                 5 |              0.09652 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.484  | >20%                    |                 5 |              0.0968  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4977 | 15-20%                  |                 2 |              0.24885 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5003 | >20%                    |                 2 |              0.25015 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5007 | >20%                    |                 2 |              0.25035 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.513  | <5%                     |                 2 |              0.2565  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.521  | >20%                    |                 5 |              0.1042  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.524  | 10-15%                  |                 5 |              0.1048  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5333 | >20%                    |                 2 |              0.26665 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5374 | >20%                    |                 2 |              0.2687  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.541  | 5-10%                   |                 5 |              0.1082  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5437 | 15-20%                  |                 5 |              0.10874 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5659 | >20%                    |                 5 |              0.11318 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5707 | 15-20%                  |                 5 |              0.11414 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5715 | 15-20%                  |                 5 |              0.1143  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5718 | >20%                    |                 5 |              0.11436 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5725 | >20%                    |                 5 |              0.1145  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5747 | 15-20%                  |                10 |              0.05747 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5891 | >20%                    |                 5 |              0.11782 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5901 | >20%                    |                 2 |              0.29505 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6011 | >20%                    |                10 |              0.06011 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.6034 | >20%                    |                 2 |              0.3017  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6076 | >20%                    |                 2 |              0.3038  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6132 | >20%                    |                10 |              0.06132 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6308 | 5-10%                   |                 5 |              0.12616 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.631  | 10-15%                  |                 5 |              0.1262  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6344 | 10-15%                  |                 2 |              0.3172  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6348 | 5-10%                   |                 5 |              0.12696 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6546 | >20%                    |                 2 |              0.3273  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6552 | >20%                    |                10 |              0.06552 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6556 | >20%                    |                 5 |              0.13112 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6587 | 15-20%                  |                 5 |              0.13174 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.6619 | 10-15%                  |                 5 |              0.13238 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6623 | >20%                    |                 5 |              0.13246 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6677 | >20%                    |                 5 |              0.13354 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6687 | 15-20%                  |                10 |              0.06687 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6764 | 15-20%                  |                10 |              0.06764 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6882 | >20%                    |                10 |              0.06882 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6907 | <5%                     |                 2 |              0.34535 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.691  | >20%                    |                 2 |              0.3455  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7175 | <5%                     |                 5 |              0.1435  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7215 | >20%                    |                10 |              0.07215 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7265 | 15-20%                  |                 2 |              0.36325 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7301 | >20%                    |                10 |              0.07301 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.734  | <5%                     |                10 |              0.0734  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7374 | 5-10%                   |                10 |              0.07374 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7403 | 15-20%                  |                10 |              0.07403 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.758  | >20%                    |                 5 |              0.1516  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.7695 | >20%                    |                 2 |              0.38475 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7697 | >20%                    |                 5 |              0.15394 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7704 | >20%                    |                10 |              0.07704 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7715 | >20%                    |                10 |              0.07715 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7796 | <5%                     |                10 |              0.07796 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.787  | 15-20%                  |                10 |              0.0787  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7879 | >20%                    |                 2 |              0.39395 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7954 |                         |                 2 |              0.3977  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8017 | >20%                    |                 2 |              0.40085 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8062 | >20%                    |                10 |              0.08062 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8094 | >20%                    |                10 |              0.08094 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8148 | 15-20%                  |                10 |              0.08148 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8193 | >20%                    |                 5 |              0.16386 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8255 | <5%                     |                10 |              0.08255 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8364 | 15-20%                  |                 5 |              0.16728 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8607 | 10-15%                  |                 5 |              0.17214 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8653 | >20%                    |                10 |              0.08653 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8677 | 10-15%                  |                 5 |              0.17354 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8701 | 15-20%                  |                10 |              0.08701 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8725 | >20%                    |                10 |              0.08725 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.878  | >20%                    |                10 |              0.0878  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8926 | >20%                    |                10 |              0.08926 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8988 | >20%                    |                 2 |              0.4494  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9126 | >20%                    |                10 |              0.09126 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9249 | >20%                    |                 5 |              0.18498 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9822 | >20%                    |                10 |              0.09822 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9868 | >20%                    |                10 |              0.09868 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0038 | 10-15%                  |                10 |              0.10038 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0283 | >20%                    |                 5 |              0.20566 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0369 | >20%                    |                 2 |              0.51845 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0823 | 15-20%                  |                10 |              0.10823 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0836 | >20%                    |                10 |              0.10836 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0853 | 15-20%                  |                10 |              0.10853 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0873 | >20%                    |                 5 |              0.21746 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0897 | >20%                    |                10 |              0.10897 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.096  | >20%                    |                 2 |              0.548   |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1102 | 10-15%                  |                10 |              0.11102 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1214 | >20%                    |                 2 |              0.5607  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1541 | >20%                    |                10 |              0.11541 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1734 | >20%                    |                 5 |              0.23468 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.2053 | <5%                     |                10 |              0.12053 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2062 | >20%                    |                10 |              0.12062 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2419 | >20%                    |                10 |              0.12419 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.2546 |                         |                 5 |              0.25092 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.2637 | >20%                    |                 5 |              0.25274 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2769 | >20%                    |                10 |              0.12769 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2795 | 15-20%                  |                10 |              0.12795 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2832 | >20%                    |                 5 |              0.25664 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3023 | >20%                    |                10 |              0.13023 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3279 | >20%                    |                 5 |              0.26558 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4244 | 10-15%                  |                 5 |              0.28488 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4647 | >20%                    |                 2 |              0.73235 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5562 | >20%                    |                10 |              0.15562 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5954 |                         |                10 |              0.15954 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6029 | >20%                    |                10 |              0.16029 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.6176 | 10-15%                  |                10 |              0.16176 |