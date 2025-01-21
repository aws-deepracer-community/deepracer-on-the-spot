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

Data correct as of 2025-01-21 01:27:34.154926, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.1963 | 10-15%                  |                 2 |              0.09815 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2166 | >20%                    |                 5 |              0.04332 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2196 | 5-10%                   |                 2 |              0.1098  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2328 | <5%                     |                 2 |              0.1164  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2378 | 15-20%                  |                 2 |              0.1189  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2393 | 5-10%                   |                 2 |              0.11965 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2471 | 5-10%                   |                 2 |              0.12355 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2603 | 5-10%                   |                 2 |              0.13015 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2752 | <5%                     |                 5 |              0.05504 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | <5%                     |                 5 |              0.0552  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2811 | <5%                     |                 2 |              0.14055 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2817 | 10-15%                  |                 2 |              0.14085 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.2982 | >20%                    |                 2 |              0.1491  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3014 | <5%                     |                 2 |              0.1507  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.32   | 5-10%                   |                 2 |              0.16    |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3235 | 10-15%                  |                 2 |              0.16175 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3299 | >20%                    |                 2 |              0.16495 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3443 | 5-10%                   |                 5 |              0.06886 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3459 | <5%                     |                 2 |              0.17295 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3599 | >20%                    |                 2 |              0.17995 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3654 | <5%                     |                 2 |              0.1827  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3657 | 5-10%                   |                 2 |              0.18285 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3671 | <5%                     |                 2 |              0.18355 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3717 | <5%                     |                 5 |              0.07434 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3774 | 5-10%                   |                 5 |              0.07548 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.384  | <5%                     |                 2 |              0.192   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3876 | 10-15%                  |                 5 |              0.07752 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.389  | <5%                     |                 2 |              0.1945  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3893 | >20%                    |                 2 |              0.19465 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3924 | 5-10%                   |                 2 |              0.1962  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3977 | 5-10%                   |                 2 |              0.19885 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4034 | <5%                     |                 2 |              0.2017  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4052 | >20%                    |                 2 |              0.2026  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4125 | 5-10%                   |                 2 |              0.20625 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4144 | 10-15%                  |                 2 |              0.2072  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4195 | <5%                     |                 2 |              0.20975 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4201 | >20%                    |                 5 |              0.08402 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4216 | 5-10%                   |                 5 |              0.08432 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.425  | >20%                    |                 2 |              0.2125  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4302 | >20%                    |                 5 |              0.08604 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.445  | 10-15%                  |                 5 |              0.089   |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4462 | 15-20%                  |                 5 |              0.08924 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4478 | <5%                     |                 5 |              0.08956 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4505 | 10-15%                  |                 5 |              0.0901  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4514 | <5%                     |                 5 |              0.09028 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4544 | 10-15%                  |                10 |              0.04544 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4562 | <5%                     |                 5 |              0.09124 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4727 | 10-15%                  |                10 |              0.04727 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4741 | >20%                    |                 5 |              0.09482 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4742 | <5%                     |                 2 |              0.2371  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4776 | 10-15%                  |                 5 |              0.09552 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4865 | <5%                     |                 5 |              0.0973  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4895 | 5-10%                   |                 5 |              0.0979  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4901 | 15-20%                  |                 2 |              0.24505 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4945 | <5%                     |                 2 |              0.24725 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5002 | <5%                     |                 2 |              0.2501  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.503  | <5%                     |                 2 |              0.2515  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5059 | <5%                     |                 5 |              0.10118 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5118 | <5%                     |                 5 |              0.10236 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5138 | >20%                    |                 2 |              0.2569  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5141 | 5-10%                   |                 2 |              0.25705 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5151 | <5%                     |                 5 |              0.10302 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5159 | <5%                     |                 5 |              0.10318 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5292 | 5-10%                   |                 5 |              0.10584 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5315 | >20%                    |                 5 |              0.1063  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5445 | 5-10%                   |                 5 |              0.1089  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5461 | >20%                    |                 5 |              0.10922 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5523 | >20%                    |                10 |              0.05523 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5531 | <5%                     |                 5 |              0.11062 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5533 | 5-10%                   |                 5 |              0.11066 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5535 | 5-10%                   |                 5 |              0.1107  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5644 | <5%                     |                 5 |              0.11288 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5724 | 15-20%                  |                 2 |              0.2862  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5791 | 15-20%                  |                 2 |              0.28955 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5855 | 5-10%                   |                 5 |              0.1171  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5871 | <5%                     |                 5 |              0.11742 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5944 | 15-20%                  |                10 |              0.05944 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6082 | >20%                    |                 5 |              0.12164 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6214 | >20%                    |                 2 |              0.3107  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6375 | 5-10%                   |                10 |              0.06375 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6436 | 5-10%                   |                10 |              0.06436 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6663 | <5%                     |                10 |              0.06663 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6712 | <5%                     |                 5 |              0.13424 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.672  | >20%                    |                 5 |              0.1344  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6737 | >20%                    |                10 |              0.06737 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6813 | >20%                    |                10 |              0.06813 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6841 | 10-15%                  |                 5 |              0.13682 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.685  | >20%                    |                10 |              0.0685  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6882 | >20%                    |                10 |              0.06882 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6934 | >20%                    |                 5 |              0.13868 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7208 | <5%                     |                 2 |              0.3604  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7309 | 15-20%                  |                10 |              0.07309 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7392 | 5-10%                   |                 5 |              0.14784 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7407 | <5%                     |                10 |              0.07407 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.745  | 10-15%                  |                10 |              0.0745  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7491 | 5-10%                   |                 5 |              0.14982 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7544 | 15-20%                  |                 2 |              0.3772  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7586 | >20%                    |                 5 |              0.15172 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7631 | 5-10%                   |                 2 |              0.38155 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7656 | 10-15%                  |                10 |              0.07656 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7712 | 10-15%                  |                10 |              0.07712 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7812 | >20%                    |                 5 |              0.15624 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7826 | 5-10%                   |                10 |              0.07826 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7881 | 5-10%                   |                10 |              0.07881 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7967 | 5-10%                   |                10 |              0.07967 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7978 | >20%                    |                 5 |              0.15956 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8028 | 15-20%                  |                10 |              0.08028 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8032 | >20%                    |                10 |              0.08032 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8262 | 10-15%                  |                10 |              0.08262 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8269 | 15-20%                  |                10 |              0.08269 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8463 | <5%                     |                10 |              0.08463 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8603 | 5-10%                   |                10 |              0.08603 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.871  | >20%                    |                10 |              0.0871  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8839 | <5%                     |                10 |              0.08839 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.903  | 5-10%                   |                10 |              0.0903  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9169 | <5%                     |                10 |              0.09169 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9174 | 5-10%                   |                 5 |              0.18348 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9304 | <5%                     |                10 |              0.09304 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9504 | <5%                     |                10 |              0.09504 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9593 | <5%                     |                10 |              0.09593 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9635 | 10-15%                  |                10 |              0.09635 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9918 | <5%                     |                10 |              0.09918 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9925 | >20%                    |                10 |              0.09925 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.032  | 5-10%                   |                10 |              0.1032  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0613 | <5%                     |                10 |              0.10613 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0713 | 10-15%                  |                 5 |              0.21426 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0933 | 15-20%                  |                10 |              0.10933 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0956 | 5-10%                   |                 5 |              0.21912 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1252 | 15-20%                  |                 2 |              0.5626  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1336 | 5-10%                   |                 2 |              0.5668  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1608 | 10-15%                  |                10 |              0.11608 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.192  | 10-15%                  |                10 |              0.1192  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2345 | >20%                    |                10 |              0.12345 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4345 | 5-10%                   |                10 |              0.14345 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4794 | 15-20%                  |                 5 |              0.29588 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4796 | 5-10%                   |                10 |              0.14796 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4819 | 10-15%                  |                10 |              0.14819 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0701 | 10-15%                  |                10 |              0.20701 |