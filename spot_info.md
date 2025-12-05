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

Data correct as of 2025-12-05 01:56:47.490337, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1308 | >20%                    |                 2 |              0.0654  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1452 | >20%                    |                 2 |              0.0726  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1779 | <5%                     |                 2 |              0.08895 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1934 | >20%                    |                 2 |              0.0967  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1938 | <5%                     |                 2 |              0.0969  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2067 | 10-15%                  |                 2 |              0.10335 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2243 | >20%                    |                 2 |              0.11215 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2292 | >20%                    |                 2 |              0.1146  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | >20%                    |                10 |              0.02308 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2328 | >20%                    |                 2 |              0.1164  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.245  | >20%                    |                 2 |              0.1225  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2456 | >20%                    |                 5 |              0.04912 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2487 | >20%                    |                 5 |              0.04974 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2584 | 10-15%                  |                 5 |              0.05168 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2615 | >20%                    |                 5 |              0.0523  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2708 | 15-20%                  |                 2 |              0.1354  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.276  | 10-15%                  |                 2 |              0.138   |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2789 | 5-10%                   |                 5 |              0.05578 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2793 | >20%                    |                 2 |              0.13965 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2837 | >20%                    |                 2 |              0.14185 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2893 | <5%                     |                 2 |              0.14465 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2899 | >20%                    |                 2 |              0.14495 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2994 | 5-10%                   |                 2 |              0.1497  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.302  | >20%                    |                 5 |              0.0604  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3042 | >20%                    |                 2 |              0.1521  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3097 | 5-10%                   |                 2 |              0.15485 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3216 | 10-15%                  |                10 |              0.03216 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3344 | 15-20%                  |                 2 |              0.1672  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3432 | 5-10%                   |                10 |              0.03432 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3443 | 10-15%                  |                 2 |              0.17215 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3461 | >20%                    |                 2 |              0.17305 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3511 | 15-20%                  |                 2 |              0.17555 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3575 | 10-15%                  |                10 |              0.03575 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3588 | <5%                     |                 5 |              0.07176 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.361  | >20%                    |                10 |              0.0361  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3678 | >20%                    |                 2 |              0.1839  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3709 | >20%                    |                 2 |              0.18545 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3731 | >20%                    |                 5 |              0.07462 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3754 | >20%                    |                 2 |              0.1877  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3755 | >20%                    |                 5 |              0.0751  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3764 | 15-20%                  |                 2 |              0.1882  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3816 | 15-20%                  |                 5 |              0.07632 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3833 | >20%                    |                 5 |              0.07666 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3893 | >20%                    |                 2 |              0.19465 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3895 | <5%                     |                 2 |              0.19475 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3908 | >20%                    |                 2 |              0.1954  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3948 | >20%                    |                 2 |              0.1974  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3972 | 10-15%                  |                10 |              0.03972 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3974 | >20%                    |                 2 |              0.1987  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4105 | 10-15%                  |                 5 |              0.0821  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4155 | >20%                    |                 2 |              0.20775 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4208 | 15-20%                  |                 5 |              0.08416 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4218 | 5-10%                   |                 2 |              0.2109  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4244 | >20%                    |                 5 |              0.08488 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4251 | <5%                     |                 2 |              0.21255 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4261 | >20%                    |                10 |              0.04261 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4317 | 15-20%                  |                 2 |              0.21585 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4325 | >20%                    |                10 |              0.04325 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4405 | 10-15%                  |                 5 |              0.0881  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4406 | >20%                    |                 2 |              0.2203  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4441 | >20%                    |                 2 |              0.22205 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4454 | >20%                    |                 2 |              0.2227  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4459 | >20%                    |                 5 |              0.08918 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4476 | <5%                     |                 2 |              0.2238  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4502 | 15-20%                  |                 5 |              0.09004 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.455  | >20%                    |                10 |              0.0455  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4583 | 15-20%                  |                10 |              0.04583 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4589 | >20%                    |                 2 |              0.22945 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4617 | >20%                    |                 5 |              0.09234 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4633 | >20%                    |                 5 |              0.09266 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4661 | >20%                    |                 5 |              0.09322 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4708 | 10-15%                  |                 2 |              0.2354  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4757 | >20%                    |                 5 |              0.09514 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4773 | 15-20%                  |                 5 |              0.09546 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4833 | 10-15%                  |                 2 |              0.24165 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4836 | >20%                    |                 5 |              0.09672 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4841 | <5%                     |                10 |              0.04841 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4901 | 10-15%                  |                 2 |              0.24505 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5006 | >20%                    |                 5 |              0.10012 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5044 | >20%                    |                 5 |              0.10088 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5067 | 10-15%                  |                 5 |              0.10134 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5068 | >20%                    |                 5 |              0.10136 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5136 | 10-15%                  |                 2 |              0.2568  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5202 | >20%                    |                 2 |              0.2601  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5204 | 15-20%                  |                 5 |              0.10408 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5272 | 15-20%                  |                10 |              0.05272 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5361 | 10-15%                  |                 5 |              0.10722 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5439 | >20%                    |                 5 |              0.10878 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5451 | 5-10%                   |                10 |              0.05451 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5464 | >20%                    |                 5 |              0.10928 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5527 | 15-20%                  |                 5 |              0.11054 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5531 | >20%                    |                 2 |              0.27655 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.555  | <5%                     |                10 |              0.0555  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5598 | >20%                    |                 5 |              0.11196 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5665 | 15-20%                  |                 5 |              0.1133  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5691 | >20%                    |                 5 |              0.11382 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5697 | 10-15%                  |                 5 |              0.11394 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5758 | <5%                     |                 5 |              0.11516 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5825 | >20%                    |                 5 |              0.1165  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5845 | 15-20%                  |                 5 |              0.1169  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.595  | 10-15%                  |                 5 |              0.119   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5966 | >20%                    |                 2 |              0.2983  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6011 | >20%                    |                10 |              0.06011 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6039 | 15-20%                  |                 5 |              0.12078 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6095 | >20%                    |                 2 |              0.30475 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6149 | >20%                    |                 2 |              0.30745 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6224 | >20%                    |                 5 |              0.12448 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.623  | 10-15%                  |                 5 |              0.1246  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6257 | >20%                    |                 2 |              0.31285 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6287 | 5-10%                   |                 2 |              0.31435 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6471 | >20%                    |                10 |              0.06471 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6594 | >20%                    |                10 |              0.06594 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6628 | >20%                    |                10 |              0.06628 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6648 | 5-10%                   |                10 |              0.06648 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6687 | 15-20%                  |                10 |              0.06687 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6747 | 10-15%                  |                 5 |              0.13494 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6836 | >20%                    |                 5 |              0.13672 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6858 | >20%                    |                 5 |              0.13716 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6998 | >20%                    |                 5 |              0.13996 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7023 | >20%                    |                 5 |              0.14046 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.703  | >20%                    |                10 |              0.0703  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7117 | 5-10%                   |                 5 |              0.14234 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7158 | >20%                    |                 5 |              0.14316 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7161 | >20%                    |                10 |              0.07161 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7225 | >20%                    |                10 |              0.07225 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7247 | >20%                    |                 2 |              0.36235 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.726  | >20%                    |                10 |              0.0726  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7296 | 15-20%                  |                10 |              0.07296 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7374 | >20%                    |                 2 |              0.3687  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7508 | 10-15%                  |                10 |              0.07508 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7538 | >20%                    |                 5 |              0.15076 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7576 | 10-15%                  |                10 |              0.07576 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.7604 | 15-20%                  |                10 |              0.07604 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7613 | >20%                    |                10 |              0.07613 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7625 | <5%                     |                10 |              0.07625 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7647 | >20%                    |                10 |              0.07647 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7712 | >20%                    |                10 |              0.07712 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7733 | >20%                    |                10 |              0.07733 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8209 | 15-20%                  |                 5 |              0.16418 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8297 | 10-15%                  |                10 |              0.08297 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8371 | 10-15%                  |                 2 |              0.41855 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8376 | >20%                    |                 5 |              0.16752 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8399 | >20%                    |                 2 |              0.41995 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8454 | >20%                    |                 2 |              0.4227  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8492 | >20%                    |                10 |              0.08492 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8503 | >20%                    |                10 |              0.08503 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.856  | >20%                    |                10 |              0.0856  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8784 | >20%                    |                 5 |              0.17568 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8893 | >20%                    |                 5 |              0.17786 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8903 | >20%                    |                10 |              0.08903 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8941 | 5-10%                   |                10 |              0.08941 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.897  | 10-15%                  |                10 |              0.0897  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9008 | 15-20%                  |                10 |              0.09008 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9103 | >20%                    |                 2 |              0.45515 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9194 | >20%                    |                10 |              0.09194 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9214 | >20%                    |                 5 |              0.18428 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9679 | >20%                    |                10 |              0.09679 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9875 | >20%                    |                10 |              0.09875 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9955 | >20%                    |                 2 |              0.49775 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9972 | >20%                    |                 5 |              0.19944 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0002 | <5%                     |                10 |              0.10002 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0081 | >20%                    |                10 |              0.10081 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0241 | >20%                    |                10 |              0.10241 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0332 | 15-20%                  |                10 |              0.10332 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.0339 | <5%                     |                 2 |              0.51695 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0378 | 10-15%                  |                10 |              0.10378 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1363 | 15-20%                  |                10 |              0.11363 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1572 | <5%                     |                 5 |              0.23144 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1913 | >20%                    |                10 |              0.11913 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2039 | >20%                    |                 5 |              0.24078 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2544 | >20%                    |                10 |              0.12544 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.305  | >20%                    |                10 |              0.1305  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3892 | >20%                    |                 2 |              0.6946  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4153 | >20%                    |                10 |              0.14153 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4177 | 10-15%                  |                10 |              0.14177 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4963 | >20%                    |                 2 |              0.74815 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4996 | >20%                    |                10 |              0.14996 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5632 | 5-10%                   |                 5 |              0.31264 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5848 | >20%                    |                 5 |              0.31696 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0349 | 15-20%                  |                10 |              0.20349 |