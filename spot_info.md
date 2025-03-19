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

Data correct as of 2025-03-19 01:44:00.518429, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.118  | 10-15%                  |                 2 |              0.059   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1462 | 5-10%                   |                 5 |              0.02924 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1833 | >20%                    |                 5 |              0.03666 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1884 | >20%                    |                 2 |              0.0942  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2032 | 15-20%                  |                 2 |              0.1016  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2033 | 10-15%                  |                 2 |              0.10165 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2106 | 5-10%                   |                 2 |              0.1053  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2237 | 5-10%                   |                 5 |              0.04474 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2289 | >20%                    |                 2 |              0.11445 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2368 | 5-10%                   |                 2 |              0.1184  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2385 | 15-20%                  |                 2 |              0.11925 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2482 | 5-10%                   |                 2 |              0.1241  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.249  | >20%                    |                 2 |              0.1245  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2502 | >20%                    |                 2 |              0.1251  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2694 | 5-10%                   |                 2 |              0.1347  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2728 | 5-10%                   |                10 |              0.02728 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2741 | <5%                     |                 2 |              0.13705 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2805 | 15-20%                  |                 5 |              0.0561  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2864 | <5%                     |                 2 |              0.1432  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2904 | <5%                     |                 2 |              0.1452  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2941 | 10-15%                  |                 2 |              0.14705 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2973 | >20%                    |                 2 |              0.14865 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2976 | >20%                    |                 5 |              0.05952 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3027 | 5-10%                   |                 2 |              0.15135 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3037 | 5-10%                   |                 2 |              0.15185 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3107 | >20%                    |                 2 |              0.15535 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3122 | >20%                    |                 5 |              0.06244 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3163 | >20%                    |                 2 |              0.15815 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3211 | 10-15%                  |                 2 |              0.16055 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3243 | >20%                    |                 2 |              0.16215 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3258 | 10-15%                  |                10 |              0.03258 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3258 | 10-15%                  |                 5 |              0.06516 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | 5-10%                   |                10 |              0.03351 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.3429 |                         |                 2 |              0.17145 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3431 | 10-15%                  |                 5 |              0.06862 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3513 | >20%                    |                 2 |              0.17565 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3525 | >20%                    |                 2 |              0.17625 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3615 | >20%                    |                 2 |              0.18075 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3629 | >20%                    |                 2 |              0.18145 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3629 | >20%                    |                 5 |              0.07258 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3685 | >20%                    |                 5 |              0.0737  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.369  | 10-15%                  |                 5 |              0.0738  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.3694 |                         |                 5 |              0.07388 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3728 | >20%                    |                 2 |              0.1864  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3751 | 15-20%                  |                10 |              0.03751 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3815 | 5-10%                   |                10 |              0.03815 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3822 | >20%                    |                 5 |              0.07644 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3871 | >20%                    |                 2 |              0.19355 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3885 | 5-10%                   |                 2 |              0.19425 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3905 | <5%                     |                 2 |              0.19525 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3913 | >20%                    |                 5 |              0.07826 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3957 | >20%                    |                10 |              0.03957 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3988 | 5-10%                   |                 5 |              0.07976 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4005 | 10-15%                  |                10 |              0.04005 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4035 | >20%                    |                 2 |              0.20175 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.405  | <5%                     |                 2 |              0.2025  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4114 | 5-10%                   |                 2 |              0.2057  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.412  | 5-10%                   |                 2 |              0.206   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4134 | >20%                    |                 2 |              0.2067  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4136 | 5-10%                   |                 2 |              0.2068  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.416  | 5-10%                   |                10 |              0.0416  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4166 | 5-10%                   |                 5 |              0.08332 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4166 | 15-20%                  |                 2 |              0.2083  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4185 | <5%                     |                 2 |              0.20925 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.421  | >20%                    |                10 |              0.0421  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4294 | >20%                    |                 5 |              0.08588 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4309 | <5%                     |                 5 |              0.08618 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4338 | <5%                     |                 5 |              0.08676 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4344 | >20%                    |                 2 |              0.2172  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4352 | >20%                    |                10 |              0.04352 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4373 | 5-10%                   |                 5 |              0.08746 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4452 | 5-10%                   |                 5 |              0.08904 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4578 | 5-10%                   |                 2 |              0.2289  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4622 | <5%                     |                 5 |              0.09244 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4653 | >20%                    |                 5 |              0.09306 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4654 | <5%                     |                 5 |              0.09308 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4691 | 10-15%                  |                 2 |              0.23455 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4733 | >20%                    |                 2 |              0.23665 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4763 | 5-10%                   |                 5 |              0.09526 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4818 | 10-15%                  |                 5 |              0.09636 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4819 | >20%                    |                 5 |              0.09638 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4837 | 10-15%                  |                10 |              0.04837 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4843 | >20%                    |                 5 |              0.09686 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4876 | >20%                    |                 5 |              0.09752 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4942 | >20%                    |                 2 |              0.2471  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4968 | <5%                     |                10 |              0.04968 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.498  | >20%                    |                 2 |              0.249   |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.5118 | 5-10%                   |                 5 |              0.10236 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5121 | 5-10%                   |                 5 |              0.10242 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5222 | <5%                     |                 5 |              0.10444 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5305 | >20%                    |                 2 |              0.26525 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.534  | 15-20%                  |                 2 |              0.267   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5352 | 15-20%                  |                 2 |              0.2676  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.536  | 5-10%                   |                 5 |              0.1072  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5375 | >20%                    |                 2 |              0.26875 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5377 | >20%                    |                 5 |              0.10754 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5412 | >20%                    |                 5 |              0.10824 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5425 | >20%                    |                 5 |              0.1085  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5477 | 15-20%                  |                 5 |              0.10954 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5477 | <5%                     |                10 |              0.05477 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5492 | >20%                    |                 5 |              0.10984 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5542 | 10-15%                  |                 5 |              0.11084 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5575 | >20%                    |                 2 |              0.27875 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5614 | 15-20%                  |                 5 |              0.11228 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5715 | 5-10%                   |                 5 |              0.1143  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5835 | <5%                     |                 2 |              0.29175 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5925 | >20%                    |                 2 |              0.29625 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.5925 | >20%                    |                 2 |              0.29625 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.594  | <5%                     |                 5 |              0.1188  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5993 | 10-15%                  |                 5 |              0.11986 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6306 | >20%                    |                 5 |              0.12612 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.634  | >20%                    |                 5 |              0.1268  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6354 | >20%                    |                10 |              0.06354 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6364 | >20%                    |                10 |              0.06364 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6498 | >20%                    |                 5 |              0.12996 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6648 | 10-15%                  |                 5 |              0.13296 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6865 | >20%                    |                 5 |              0.1373  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6942 | >20%                    |                 5 |              0.13884 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7016 |                         |                10 |              0.07016 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7022 | >20%                    |                 2 |              0.3511  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7032 | 5-10%                   |                 2 |              0.3516  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7091 | >20%                    |                10 |              0.07091 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7105 | >20%                    |                10 |              0.07105 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7139 | >20%                    |                10 |              0.07139 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7182 | >20%                    |                10 |              0.07182 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7333 | <5%                     |                 5 |              0.14666 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7352 | 5-10%                   |                10 |              0.07352 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7369 | >20%                    |                10 |              0.07369 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7391 | 5-10%                   |                 5 |              0.14782 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7514 | 15-20%                  |                 5 |              0.15028 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.757  | <5%                     |                10 |              0.0757  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7577 | 5-10%                   |                10 |              0.07577 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7602 | <5%                     |                10 |              0.07602 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7645 | <5%                     |                10 |              0.07645 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7671 | >20%                    |                10 |              0.07671 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7753 | >20%                    |                 5 |              0.15506 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7787 | >20%                    |                 5 |              0.15574 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7838 | >20%                    |                 2 |              0.3919  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8128 | <5%                     |                10 |              0.08128 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8153 | >20%                    |                10 |              0.08153 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.82   | 5-10%                   |                10 |              0.082   |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.8469 | >20%                    |                 5 |              0.16938 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.849  | 5-10%                   |                10 |              0.0849  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8526 | >20%                    |                10 |              0.08526 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8534 | <5%                     |                10 |              0.08534 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8549 | >20%                    |                10 |              0.08549 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8555 | 5-10%                   |                10 |              0.08555 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8558 | >20%                    |                10 |              0.08558 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8585 | >20%                    |                10 |              0.08585 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8615 | >20%                    |                 2 |              0.43075 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8638 | <5%                     |                10 |              0.08638 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8672 | 15-20%                  |                 5 |              0.17344 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8707 | 15-20%                  |                10 |              0.08707 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8708 | 15-20%                  |                10 |              0.08708 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9072 | >20%                    |                10 |              0.09072 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9132 | >20%                    |                 2 |              0.4566  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9803 | 10-15%                  |                10 |              0.09803 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9837 | >20%                    |                10 |              0.09837 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.002  | 5-10%                   |                10 |              0.1002  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0579 | >20%                    |                 5 |              0.21158 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0648 | >20%                    |                10 |              0.10648 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0657 | 5-10%                   |                10 |              0.10657 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0758 | 5-10%                   |                10 |              0.10758 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0994 | >20%                    |                10 |              0.10994 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1084 | <5%                     |                10 |              0.11084 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1415 | 15-20%                  |                10 |              0.11415 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1662 | >20%                    |                10 |              0.11662 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1669 | 15-20%                  |                10 |              0.11669 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2243 | >20%                    |                10 |              0.12243 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2932 | >20%                    |                10 |              0.12932 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2957 | 5-10%                   |                 5 |              0.25914 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.297  | 5-10%                   |                 2 |              0.6485  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3115 | >20%                    |                 5 |              0.2623  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3803 | >20%                    |                 5 |              0.27606 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4645 | >20%                    |                 2 |              0.73225 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.504  | >20%                    |                10 |              0.1504  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5066 | >20%                    |                10 |              0.15066 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.5076 | 10-15%                  |                 5 |              0.30152 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7333 | >20%                    |                10 |              0.17333 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1134 | 5-10%                   |                10 |              0.21134 |