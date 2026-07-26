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

Data correct as of 2026-07-26 03:23:24.979444, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1354 | >20%                    |                 2 |              0.0677  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1586 | >20%                    |                 2 |              0.0793  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2047 | 15-20%                  |                 2 |              0.10235 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.219  | >20%                    |                 2 |              0.1095  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2278 | >20%                    |                 2 |              0.1139  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2438 | >20%                    |                 2 |              0.1219  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2476 | 15-20%                  |                 5 |              0.04952 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2509 | >20%                    |                 2 |              0.12545 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2618 | 5-10%                   |                10 |              0.02618 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2647 | >20%                    |                 2 |              0.13235 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2703 | >20%                    |                 2 |              0.13515 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.273  | >20%                    |                 2 |              0.1365  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2845 | 10-15%                  |                 2 |              0.14225 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2895 | >20%                    |                 2 |              0.14475 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2922 | 15-20%                  |                 2 |              0.1461  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2968 | >20%                    |                 2 |              0.1484  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2975 | 15-20%                  |                 2 |              0.14875 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3253 | 15-20%                  |                 5 |              0.06506 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3276 | >20%                    |                 5 |              0.06552 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3322 | >20%                    |                 2 |              0.1661  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3353 | >20%                    |                 5 |              0.06706 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.345  | >20%                    |                10 |              0.0345  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3592 | >20%                    |                10 |              0.03592 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3619 | >20%                    |                 2 |              0.18095 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3668 | >20%                    |                 5 |              0.07336 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3686 | <5%                     |                 2 |              0.1843  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3704 | 5-10%                   |                10 |              0.03704 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3715 | >20%                    |                 5 |              0.0743  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.382  | 10-15%                  |                 2 |              0.191   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3895 | >20%                    |                 5 |              0.0779  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3975 | >20%                    |                 5 |              0.0795  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3994 | >20%                    |                 2 |              0.1997  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.401  | 5-10%                   |                10 |              0.0401  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4019 | 15-20%                  |                 2 |              0.20095 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4065 | >20%                    |                 2 |              0.20325 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4129 | >20%                    |                10 |              0.04129 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4201 | 10-15%                  |                 2 |              0.21005 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4258 | 10-15%                  |                 2 |              0.2129  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4325 | >20%                    |                 5 |              0.0865  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4469 | >20%                    |                 5 |              0.08938 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4474 | 10-15%                  |                10 |              0.04474 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4489 | >20%                    |                10 |              0.04489 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4519 | >20%                    |                 2 |              0.22595 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4522 | >20%                    |                 5 |              0.09044 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4531 | >20%                    |                 2 |              0.22655 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4555 | >20%                    |                 2 |              0.22775 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4723 | >20%                    |                 2 |              0.23615 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.473  | <5%                     |                 2 |              0.2365  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4766 | >20%                    |                 5 |              0.09532 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.481  | >20%                    |                 5 |              0.0962  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4858 | >20%                    |                 5 |              0.09716 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4871 | >20%                    |                 2 |              0.24355 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4879 | 15-20%                  |                 5 |              0.09758 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4971 | >20%                    |                 5 |              0.09942 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4995 | >20%                    |                10 |              0.04995 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5029 | <5%                     |                 2 |              0.25145 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5195 | >20%                    |                 5 |              0.1039  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5203 | >20%                    |                 2 |              0.26015 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5227 | >20%                    |                10 |              0.05227 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5323 | >20%                    |                 5 |              0.10646 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5352 | 15-20%                  |                 2 |              0.2676  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5431 | >20%                    |                 5 |              0.10862 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.556  | >20%                    |                 2 |              0.278   |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5577 | >20%                    |                 5 |              0.11154 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.559  | 10-15%                  |                 5 |              0.1118  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5676 | >20%                    |                 5 |              0.11352 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.575  | 5-10%                   |                 2 |              0.2875  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5891 | >20%                    |                 5 |              0.11782 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5909 | >20%                    |                 5 |              0.11818 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6148 | >20%                    |                 5 |              0.12296 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6305 | 15-20%                  |                 5 |              0.1261  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6379 | >20%                    |                 5 |              0.12758 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6477 | 5-10%                   |                 5 |              0.12954 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6533 | >20%                    |                 2 |              0.32665 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6538 | >20%                    |                 5 |              0.13076 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6555 | >20%                    |                10 |              0.06555 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6562 | >20%                    |                 2 |              0.3281  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6594 | >20%                    |                 5 |              0.13188 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6631 | >20%                    |                 5 |              0.13262 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6691 | >20%                    |                10 |              0.06691 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6836 | >20%                    |                 2 |              0.3418  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6939 | >20%                    |                10 |              0.06939 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7073 | <5%                     |                 5 |              0.14146 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7092 | >20%                    |                10 |              0.07092 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7138 | >20%                    |                 5 |              0.14276 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.724  | >20%                    |                10 |              0.0724  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7277 | 15-20%                  |                10 |              0.07277 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7326 |                         |                 2 |              0.3663  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.734  | >20%                    |                10 |              0.0734  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7588 | >20%                    |                 5 |              0.15176 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7747 | >20%                    |                10 |              0.07747 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7818 | 5-10%                   |                10 |              0.07818 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7865 | >20%                    |                 5 |              0.1573  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.7867 |                         |                 2 |              0.39335 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7867 | >20%                    |                 5 |              0.15734 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7918 | >20%                    |                10 |              0.07918 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.804  |                         |                 5 |              0.1608  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8062 | <5%                     |                10 |              0.08062 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8092 | >20%                    |                 2 |              0.4046  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8216 | >20%                    |                10 |              0.08216 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8325 | >20%                    |                 5 |              0.1665  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8531 | 10-15%                  |                 2 |              0.42655 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.857  | >20%                    |                 2 |              0.4285  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8692 | >20%                    |                 5 |              0.17384 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8718 | >20%                    |                 2 |              0.4359  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8733 | 10-15%                  |                 2 |              0.43665 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8797 | 15-20%                  |                10 |              0.08797 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8832 | 15-20%                  |                10 |              0.08832 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8861 | 15-20%                  |                 2 |              0.44305 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8909 | 15-20%                  |                10 |              0.08909 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8979 | 5-10%                   |                 2 |              0.44895 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9223 | >20%                    |                 5 |              0.18446 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9361 | 5-10%                   |                10 |              0.09361 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9407 | >20%                    |                 5 |              0.18814 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9419 | >20%                    |                10 |              0.09419 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.942  | >20%                    |                10 |              0.0942  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9498 | >20%                    |                10 |              0.09498 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9629 | >20%                    |                10 |              0.09629 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9635 | >20%                    |                10 |              0.09635 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9725 | >20%                    |                10 |              0.09725 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9902 | 15-20%                  |                10 |              0.09902 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.995  | >20%                    |                 2 |              0.4975  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9952 | >20%                    |                 5 |              0.19904 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0038 | >20%                    |                 5 |              0.20076 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0082 | >20%                    |                 5 |              0.20164 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0157 | >20%                    |                10 |              0.10157 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0712 | 5-10%                   |                 5 |              0.21424 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0789 | >20%                    |                10 |              0.10789 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1106 | >20%                    |                 2 |              0.5553  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1267 |                         |                10 |              0.11267 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1479 | >20%                    |                 5 |              0.22958 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1506 | >20%                    |                10 |              0.11506 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.186  | 10-15%                  |                 2 |              0.593   |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1876 | >20%                    |                10 |              0.11876 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2272 | 5-10%                   |                 2 |              0.6136  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.2418 | 15-20%                  |                10 |              0.12418 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2575 | >20%                    |                10 |              0.12575 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2646 | >20%                    |                10 |              0.12646 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3113 | 15-20%                  |                10 |              0.13113 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3515 |                         |                 5 |              0.2703  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.427  | >20%                    |                10 |              0.1427  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4325 | >20%                    |                 5 |              0.2865  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.5135 | >20%                    |                 5 |              0.3027  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5182 | 5-10%                   |                10 |              0.15182 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5623 | 10-15%                  |                10 |              0.15623 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5767 | 15-20%                  |                 5 |              0.31534 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5828 | 15-20%                  |                10 |              0.15828 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6489 |                         |                10 |              0.16489 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6699 | >20%                    |                10 |              0.16699 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7643 | >20%                    |                10 |              0.17643 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8463 | >20%                    |                10 |              0.18463 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.1727 | 5-10%                   |                 2 |              1.08635 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.2597 | >20%                    |                 5 |              0.45194 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.8435 | >20%                    |                 5 |              0.5687  |