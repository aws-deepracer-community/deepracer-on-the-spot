# Spot Prices and Interruption Frequency

## This page provides: -

Region - the region of the instance (note - some regions would require you to bake your own AMI using the image builder script)

vCPU - number of vCPUs

RAM (GB) - amount of memory 

GPU RAM (GB) - amount of GPU memory

SpotPrice - hourly price of the spot instance

InterruptionFrequency - the likelihood of your instance experiencing interruption based on the [last month of data](https://aws.amazon.com/ec2/spot/instance-advisor/)

NumberOfWorkers - the number of robomaker workers the instance can support

PricePerWorkerHour - SpotPrice divided by the number of workers the InstanceType can support

Data correct as of 2024-09-02 01:26:25.287881, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | <5%                     |                 2 |              0.044   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1524 | 15-20%                  |                 5 |              0.03048 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1718 | 10-15%                  |                 2 |              0.0859  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2292 | >20%                    |                 2 |              0.1146  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2433 | <5%                     |                 2 |              0.12165 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.25   | 10-15%                  |                 2 |              0.125   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2558 | 5-10%                   |                 2 |              0.1279  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2643 | <5%                     |                 2 |              0.13215 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2712 | <5%                     |                 2 |              0.1356  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.2828 | <5%                     |                 2 |              0.1414  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2867 | >20%                    |                10 |              0.02867 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2893 | <5%                     |                 5 |              0.05786 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2948 | <5%                     |                 2 |              0.1474  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3103 | <5%                     |                 2 |              0.15515 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3151 | 10-15%                  |                 2 |              0.15755 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3198 | <5%                     |                 2 |              0.1599  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3229 | <5%                     |                 2 |              0.16145 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3344 | >20%                    |                 5 |              0.06688 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3471 | <5%                     |                 2 |              0.17355 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3517 | <5%                     |                 2 |              0.17585 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3582 | <5%                     |                 2 |              0.1791  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | <5%                     |                10 |              0.03698 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3744 | <5%                     |                 5 |              0.07488 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3751 | <5%                     |                 2 |              0.18755 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.38   | <5%                     |                 5 |              0.076   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3884 | 10-15%                  |                 2 |              0.1942  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | 5-10%                   |                10 |              0.04161 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.42   | >20%                    |                 2 |              0.21    |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.423  | <5%                     |                 2 |              0.2115  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4297 | 15-20%                  |                 5 |              0.08594 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4303 | >20%                    |                 2 |              0.21515 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4309 | 5-10%                   |                 2 |              0.21545 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4379 | >20%                    |                10 |              0.04379 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4402 | >20%                    |                 2 |              0.2201  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.4435 | <5%                     |                 2 |              0.22175 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4469 | 5-10%                   |                 5 |              0.08938 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4469 | 10-15%                  |                 2 |              0.22345 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.4508 | <5%                     |                 2 |              0.2254  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4578 | 5-10%                   |                 2 |              0.2289  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4616 | <5%                     |                 5 |              0.09232 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4698 | <5%                     |                 5 |              0.09396 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4712 | >20%                    |                 2 |              0.2356  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.472  | >20%                    |                 5 |              0.0944  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4729 | 5-10%                   |                 5 |              0.09458 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4733 | >20%                    |                 5 |              0.09466 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4795 | 15-20%                  |                 5 |              0.0959  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4836 | <5%                     |                 5 |              0.09672 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4845 | >20%                    |                 5 |              0.0969  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4896 | 5-10%                   |                 5 |              0.09792 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.4918 | 5-10%                   |                 2 |              0.2459  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4932 | 5-10%                   |                 5 |              0.09864 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4986 | <5%                     |                 5 |              0.09972 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.499  | >20%                    |                 2 |              0.2495  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5174 | <5%                     |                 5 |              0.10348 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.52   | 10-15%                  |                 5 |              0.104   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.5324 | <5%                     |                 2 |              0.2662  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5546 | >20%                    |                 5 |              0.11092 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5795 | >20%                    |                 2 |              0.28975 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5854 | >20%                    |                 2 |              0.2927  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5882 | 10-15%                  |                 2 |              0.2941  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5917 | <5%                     |                 5 |              0.11834 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.593  | <5%                     |                10 |              0.0593  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5945 | <5%                     |                 5 |              0.1189  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5963 | 15-20%                  |                 5 |              0.11926 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5967 | <5%                     |                 5 |              0.11934 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5994 | >20%                    |                 2 |              0.2997  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6082 | >20%                    |                 5 |              0.12164 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6142 | >20%                    |                 5 |              0.12284 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6204 | <5%                     |                10 |              0.06204 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6249 | >20%                    |                 5 |              0.12498 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6292 | <5%                     |                 5 |              0.12584 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.6339 | <5%                     |                 5 |              0.12678 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.6601 | <5%                     |                10 |              0.06601 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6615 | 10-15%                  |                 5 |              0.1323  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6647 | >20%                    |                 5 |              0.13294 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.6779 | <5%                     |                 5 |              0.13558 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6782 | <5%                     |                10 |              0.06782 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6856 | >20%                    |                10 |              0.06856 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7206 | >20%                    |                 2 |              0.3603  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7394 | <5%                     |                10 |              0.07394 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7396 | >20%                    |                10 |              0.07396 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7622 | 10-15%                  |                10 |              0.07622 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7651 | 10-15%                  |                10 |              0.07651 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7774 | 15-20%                  |                10 |              0.07774 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7789 | >20%                    |                 5 |              0.15578 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7814 | >20%                    |                 5 |              0.15628 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7925 | 5-10%                   |                10 |              0.07925 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8004 | <5%                     |                10 |              0.08004 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8215 | 10-15%                  |                10 |              0.08215 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.829  | >20%                    |                10 |              0.0829  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8308 | >20%                    |                10 |              0.08308 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.8413 | <5%                     |                10 |              0.08413 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.8471 | 5-10%                   |                10 |              0.08471 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8496 | 10-15%                  |                10 |              0.08496 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8523 | <5%                     |                10 |              0.08523 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8695 | <5%                     |                10 |              0.08695 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9018 | >20%                    |                 5 |              0.18036 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9253 | <5%                     |                10 |              0.09253 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9321 | >20%                    |                10 |              0.09321 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9323 | >20%                    |                10 |              0.09323 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9551 | <5%                     |                10 |              0.09551 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9577 | <5%                     |                10 |              0.09577 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9694 | >20%                    |                10 |              0.09694 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9754 | 5-10%                   |                10 |              0.09754 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      1.0068 | >20%                    |                 5 |              0.20136 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0201 | >20%                    |                10 |              0.10201 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0422 | 5-10%                   |                10 |              0.10422 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0581 | >20%                    |                10 |              0.10581 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1613 | >20%                    |                10 |              0.11613 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1962 | >20%                    |                10 |              0.11962 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2075 | >20%                    |                10 |              0.12075 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4469 | >20%                    |                10 |              0.14469 |