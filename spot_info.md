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

Data correct as of 2026-09-25 04:13:27.330328, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0807 | >20%                    |                 2 |              0.04035 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1242 | 15-20%                  |                 2 |              0.0621  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1318 | >20%                    |                 2 |              0.0659  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1465 | >20%                    |                 5 |              0.0293  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1652 | 15-20%                  |                 5 |              0.03304 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.234  | >20%                    |                 2 |              0.117   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2414 | >20%                    |                 2 |              0.1207  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2421 | >20%                    |                 2 |              0.12105 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.2427 |                         |                 5 |              0.04854 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2536 | >20%                    |                 2 |              0.1268  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.2652 | >20%                    |                 2 |              0.1326  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.28   | >20%                    |                 2 |              0.14    |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2857 | >20%                    |                 2 |              0.14285 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3004 | >20%                    |                 2 |              0.1502  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3058 | 15-20%                  |                 2 |              0.1529  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3119 | 10-15%                  |                 2 |              0.15595 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3287 | >20%                    |                 2 |              0.16435 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3458 | >20%                    |                 5 |              0.06916 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.361  | >20%                    |                10 |              0.0361  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3622 | >20%                    |                 5 |              0.07244 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3699 | >20%                    |                 2 |              0.18495 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3711 | 15-20%                  |                 2 |              0.18555 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3836 | >20%                    |                 5 |              0.07672 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3907 | 10-15%                  |                 2 |              0.19535 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3911 | >20%                    |                 5 |              0.07822 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.392  | <5%                     |                 2 |              0.196   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3989 | >20%                    |                 2 |              0.19945 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.405  | >20%                    |                 2 |              0.2025  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4128 | >20%                    |                 5 |              0.08256 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4182 | <5%                     |                10 |              0.04182 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4216 | 5-10%                   |                10 |              0.04216 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4274 | >20%                    |                 5 |              0.08548 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4299 | >20%                    |                 5 |              0.08598 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4349 | >20%                    |                 2 |              0.21745 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.442  | >20%                    |                 2 |              0.221   |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4439 | >20%                    |                 5 |              0.08878 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4543 | 15-20%                  |                 2 |              0.22715 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4685 | >20%                    |                 5 |              0.0937  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4713 | >20%                    |                 2 |              0.23565 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4775 | 10-15%                  |                 2 |              0.23875 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4826 | 15-20%                  |                 2 |              0.2413  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4875 | >20%                    |                 5 |              0.0975  |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4899 |                         |                 2 |              0.24495 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4971 | >20%                    |                10 |              0.04971 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4978 | <5%                     |                 2 |              0.2489  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4992 | >20%                    |                 5 |              0.09984 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.503  | >20%                    |                 2 |              0.2515  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5231 | >20%                    |                 5 |              0.10462 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5246 | >20%                    |                 2 |              0.2623  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5281 | >20%                    |                 2 |              0.26405 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5396 | >20%                    |                 5 |              0.10792 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5437 | 5-10%                   |                10 |              0.05437 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5473 | >20%                    |                 2 |              0.27365 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5566 | >20%                    |                 5 |              0.11132 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5689 | >20%                    |                 5 |              0.11378 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5993 | >20%                    |                10 |              0.05993 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6062 | 15-20%                  |                10 |              0.06062 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6084 | 10-15%                  |                 5 |              0.12168 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6127 | >20%                    |                 2 |              0.30635 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6132 | >20%                    |                 5 |              0.12264 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6224 | >20%                    |                 5 |              0.12448 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6247 | >20%                    |                 2 |              0.31235 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6321 | >20%                    |                 5 |              0.12642 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6445 | >20%                    |                 5 |              0.1289  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6453 | 10-15%                  |                 2 |              0.32265 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6481 | 5-10%                   |                 5 |              0.12962 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6604 | >20%                    |                 5 |              0.13208 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6648 | >20%                    |                 5 |              0.13296 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6668 | >20%                    |                10 |              0.06668 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6686 | 15-20%                  |                10 |              0.06686 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6739 | >20%                    |                 5 |              0.13478 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6914 | <5%                     |                 2 |              0.3457  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6928 | 5-10%                   |                 2 |              0.3464  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6971 | >20%                    |                 2 |              0.34855 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6984 | 15-20%                  |                 2 |              0.3492  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7032 | >20%                    |                 5 |              0.14064 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7122 | >20%                    |                 5 |              0.14244 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7188 | >20%                    |                 2 |              0.3594  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7293 | >20%                    |                10 |              0.07293 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7369 | 15-20%                  |                 5 |              0.14738 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7371 | >20%                    |                10 |              0.07371 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7412 | >20%                    |                 5 |              0.14824 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7496 | 10-15%                  |                10 |              0.07496 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7515 | >20%                    |                 5 |              0.1503  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7598 | >20%                    |                10 |              0.07598 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7887 | >20%                    |                 5 |              0.15774 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8184 | 10-15%                  |                 2 |              0.4092  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8286 | >20%                    |                 2 |              0.4143  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8355 | 15-20%                  |                10 |              0.08355 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8454 | >20%                    |                10 |              0.08454 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8476 | 5-10%                   |                10 |              0.08476 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8495 | >20%                    |                 2 |              0.42475 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8521 | >20%                    |                 5 |              0.17042 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8526 | >20%                    |                10 |              0.08526 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8636 | 15-20%                  |                 5 |              0.17272 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8676 | >20%                    |                10 |              0.08676 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8773 | >20%                    |                10 |              0.08773 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.8814 | >20%                    |                 2 |              0.4407  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9126 | <5%                     |                 5 |              0.18252 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9174 | >20%                    |                 5 |              0.18348 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.921  | >20%                    |                 5 |              0.1842  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9268 | 15-20%                  |                10 |              0.09268 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9393 | >20%                    |                10 |              0.09393 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.94   | >20%                    |                10 |              0.094   |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.9479 |                         |                10 |              0.09479 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9569 |                         |                 2 |              0.47845 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9587 | >20%                    |                10 |              0.09587 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.9695 | >20%                    |                 5 |              0.1939  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9751 | >20%                    |                 5 |              0.19502 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.978  | >20%                    |                10 |              0.0978  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9966 | >20%                    |                10 |              0.09966 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9991 | >20%                    |                10 |              0.09991 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.019  | 15-20%                  |                10 |              0.1019  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0191 | 10-15%                  |                 2 |              0.50955 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0232 | >20%                    |                10 |              0.10232 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0286 | 15-20%                  |                10 |              0.10286 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0363 | >20%                    |                10 |              0.10363 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0541 | >20%                    |                10 |              0.10541 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.0796 | >20%                    |                 5 |              0.21592 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0865 | >20%                    |                10 |              0.10865 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0894 | >20%                    |                 5 |              0.21788 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1071 |                         |                 2 |              0.55355 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1169 | 5-10%                   |                10 |              0.11169 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1574 | 5-10%                   |                 2 |              0.5787  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1814 | >20%                    |                10 |              0.11814 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2072 | >20%                    |                10 |              0.12072 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2137 | >20%                    |                10 |              0.12137 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2264 |                         |                 5 |              0.24528 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2751 | 5-10%                   |                 2 |              0.63755 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3237 | 10-15%                  |                10 |              0.13237 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.3322 |                         |                 5 |              0.26644 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3396 | >20%                    |                10 |              0.13396 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3456 | >20%                    |                 2 |              0.6728  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3752 | >20%                    |                10 |              0.13752 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3831 | 15-20%                  |                10 |              0.13831 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.515  | >20%                    |                 5 |              0.303   |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5188 | 10-15%                  |                 2 |              0.7594  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5339 | >20%                    |                 2 |              0.76695 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5756 | 5-10%                   |                 5 |              0.31512 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6294 | >20%                    |                10 |              0.16294 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7357 |                         |                10 |              0.17357 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7472 | 15-20%                  |                10 |              0.17472 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7614 | >20%                    |                 5 |              0.35228 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8791 |                         |                10 |              0.18791 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.9131 | >20%                    |                10 |              0.19131 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.9439 | >20%                    |                 5 |              0.38878 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.1165 | 15-20%                  |                 5 |              0.4233  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2184 | 5-10%                   |                 2 |              1.1092  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2559 | 5-10%                   |                10 |              0.22559 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6036 | >20%                    |                10 |              0.26036 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.6972 | >20%                    |                10 |              0.26972 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0978 | >20%                    |                10 |              0.30978 |