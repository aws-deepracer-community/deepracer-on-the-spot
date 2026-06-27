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

Data correct as of 2026-06-27 03:52:06.561271, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1439 | >20%                    |                 2 |              0.07195 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1908 | 15-20%                  |                 2 |              0.0954  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2263 | >20%                    |                 2 |              0.11315 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2317 | 15-20%                  |                 5 |              0.04634 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2353 | >20%                    |                 2 |              0.11765 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.248  | >20%                    |                 2 |              0.124   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2528 | 10-15%                  |                 2 |              0.1264  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2569 | >20%                    |                 2 |              0.12845 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2577 | >20%                    |                 2 |              0.12885 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2609 | >20%                    |                 2 |              0.13045 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2635 | >20%                    |                 2 |              0.13175 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2725 | 15-20%                  |                 2 |              0.13625 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2727 | >20%                    |                 2 |              0.13635 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2773 | 15-20%                  |                 2 |              0.13865 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2986 | 15-20%                  |                 5 |              0.05972 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2999 | >20%                    |                 2 |              0.14995 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3086 | >20%                    |                 5 |              0.06172 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3113 | >20%                    |                 2 |              0.15565 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3196 | 5-10%                   |                10 |              0.03196 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3211 | >20%                    |                 5 |              0.06422 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3265 | >20%                    |                 5 |              0.0653  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3297 | >20%                    |                 2 |              0.16485 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3313 | >20%                    |                 5 |              0.06626 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3461 | >20%                    |                 5 |              0.06922 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3512 | <5%                     |                 2 |              0.1756  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3531 | >20%                    |                10 |              0.03531 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3573 | 10-15%                  |                 2 |              0.17865 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3619 | 5-10%                   |                10 |              0.03619 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3633 | >20%                    |                 5 |              0.07266 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3717 | 5-10%                   |                10 |              0.03717 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3717 | >20%                    |                10 |              0.03717 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3815 | 10-15%                  |                 2 |              0.19075 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3876 | >20%                    |                 2 |              0.1938  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3907 | >20%                    |                 2 |              0.19535 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3957 | >20%                    |                 5 |              0.07914 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4    | >20%                    |                 5 |              0.08    |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4066 | >20%                    |                 5 |              0.08132 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4085 | >20%                    |                 5 |              0.0817  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4101 | >20%                    |                 2 |              0.20505 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4128 | >20%                    |                10 |              0.04128 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4243 | >20%                    |                 2 |              0.21215 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4279 | 10-15%                  |                10 |              0.04279 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4369 | >20%                    |                 5 |              0.08738 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4397 | 10-15%                  |                 2 |              0.21985 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4419 | <5%                     |                 2 |              0.22095 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4457 | <5%                     |                 2 |              0.22285 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4482 | >20%                    |                 5 |              0.08964 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4564 | 15-20%                  |                 2 |              0.2282  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4571 | >20%                    |                 2 |              0.22855 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.458  | >20%                    |                 2 |              0.229   |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.465  | 15-20%                  |                 5 |              0.093   |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4719 | >20%                    |                 5 |              0.09438 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4734 | >20%                    |                 5 |              0.09468 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4751 | >20%                    |                10 |              0.04751 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.48   | >20%                    |                 2 |              0.24    |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4871 | >20%                    |                 5 |              0.09742 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4892 | 15-20%                  |                 2 |              0.2446  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5227 | >20%                    |                10 |              0.05227 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5282 | >20%                    |                 2 |              0.2641  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5335 | >20%                    |                 5 |              0.1067  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5359 | 5-10%                   |                 2 |              0.26795 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5379 | >20%                    |                 5 |              0.10758 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5413 | 5-10%                   |                 5 |              0.10826 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5449 | 15-20%                  |                 5 |              0.10898 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.5472 | >20%                    |                 5 |              0.10944 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5475 | >20%                    |                 2 |              0.27375 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5497 | 10-15%                  |                 5 |              0.10994 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5552 | >20%                    |                 2 |              0.2776  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5561 | >20%                    |                 5 |              0.11122 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5643 | >20%                    |                 5 |              0.11286 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.579  | 5-10%                   |                 2 |              0.2895  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5904 | >20%                    |                 5 |              0.11808 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6008 | >20%                    |                10 |              0.06008 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6019 | >20%                    |                 2 |              0.30095 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6073 | >20%                    |                 5 |              0.12146 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6076 | >20%                    |                10 |              0.06076 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6078 | >20%                    |                10 |              0.06078 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6156 | >20%                    |                10 |              0.06156 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.617  |                         |                 2 |              0.3085  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6195 | 15-20%                  |                 2 |              0.30975 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6231 | >20%                    |                 5 |              0.12462 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6252 | >20%                    |                10 |              0.06252 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6317 | <5%                     |                 5 |              0.12634 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6374 | >20%                    |                 5 |              0.12748 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6558 | >20%                    |                10 |              0.06558 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6665 | >20%                    |                 5 |              0.1333  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6703 | >20%                    |                 2 |              0.33515 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6845 | 5-10%                   |                 5 |              0.1369  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6968 | >20%                    |                 5 |              0.13936 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6971 | >20%                    |                 2 |              0.34855 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.6992 |                         |                 2 |              0.3496  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7001 | 15-20%                  |                10 |              0.07001 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7021 | 10-15%                  |                 2 |              0.35105 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7109 | >20%                    |                 5 |              0.14218 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7132 | 15-20%                  |                10 |              0.07132 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.714  | >20%                    |                 5 |              0.1428  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7161 | >20%                    |                10 |              0.07161 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7229 | >20%                    |                 2 |              0.36145 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.7316 |                         |                10 |              0.07316 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7341 | 5-10%                   |                10 |              0.07341 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7347 | >20%                    |                10 |              0.07347 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7351 | >20%                    |                 2 |              0.36755 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.7359 | >20%                    |                10 |              0.07359 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7511 | >20%                    |                 5 |              0.15022 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7647 | >20%                    |                 2 |              0.38235 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7839 | >20%                    |                 5 |              0.15678 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7841 | <5%                     |                10 |              0.07841 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7906 | >20%                    |                10 |              0.07906 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8112 | >20%                    |                 5 |              0.16224 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8285 | >20%                    |                10 |              0.08285 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.839  | >20%                    |                10 |              0.0839  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8403 | >20%                    |                 5 |              0.16806 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8511 | 15-20%                  |                10 |              0.08511 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8561 | >20%                    |                10 |              0.08561 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8655 | 10-15%                  |                 2 |              0.43275 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.867  | >20%                    |                10 |              0.0867  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.873  | 5-10%                   |                10 |              0.0873  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8856 | 15-20%                  |                10 |              0.08856 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.887  | >20%                    |                10 |              0.0887  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9029 | >20%                    |                10 |              0.09029 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9067 | 10-15%                  |                 2 |              0.45335 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9293 | 15-20%                  |                10 |              0.09293 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.936  | 5-10%                   |                10 |              0.0936  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9398 | >20%                    |                 5 |              0.18796 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9469 | >20%                    |                 5 |              0.18938 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9471 | 5-10%                   |                 2 |              0.47355 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9477 | >20%                    |                10 |              0.09477 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.951  | >20%                    |                 5 |              0.1902  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.953  | >20%                    |                10 |              0.0953  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9618 |                         |                 5 |              0.19236 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9773 | >20%                    |                10 |              0.09773 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9933 | >20%                    |                10 |              0.09933 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9944 | >20%                    |                10 |              0.09944 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9981 | >20%                    |                 5 |              0.19962 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0083 | >20%                    |                10 |              0.10083 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0677 | >20%                    |                 2 |              0.53385 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0732 | 15-20%                  |                10 |              0.10732 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0985 | >20%                    |                 5 |              0.2197  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1029 | >20%                    |                 5 |              0.22058 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1121 | >20%                    |                 5 |              0.22242 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1148 | >20%                    |                10 |              0.11148 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.163  |                         |                 5 |              0.2326  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1662 | >20%                    |                10 |              0.11662 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2041 |                         |                10 |              0.12041 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2716 | >20%                    |                 5 |              0.25432 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3432 | 15-20%                  |                10 |              0.13432 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4192 | >20%                    |                10 |              0.14192 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4391 | 15-20%                  |                 5 |              0.28782 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5558 | >20%                    |                 5 |              0.31116 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5907 | 15-20%                  |                10 |              0.15907 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.591  | 10-15%                  |                10 |              0.1591  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.7037 | 5-10%                   |                 2 |              0.85185 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.1647 | >20%                    |                10 |              0.21647 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.5055 | >20%                    |                10 |              0.25055 |