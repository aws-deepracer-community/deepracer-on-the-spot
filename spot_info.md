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

Data correct as of 2024-11-30 01:41:26.595370, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1271 | >20%                    |                 5 |              0.02542 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1887 | 10-15%                  |                 2 |              0.09435 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.1929 | >20%                    |                 5 |              0.03858 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2208 | 5-10%                   |                 2 |              0.1104  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2244 | 5-10%                   |                 2 |              0.1122  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2274 | 15-20%                  |                 2 |              0.1137  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2313 | 5-10%                   |                 2 |              0.11565 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.241  | <5%                     |                 2 |              0.1205  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2447 | <5%                     |                 2 |              0.12235 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2651 | 15-20%                  |                 5 |              0.05302 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2666 | >20%                    |                 2 |              0.1333  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2739 | 10-15%                  |                 2 |              0.13695 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 |                         |                 2 |              0.1402  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2816 | 5-10%                   |                 2 |              0.1408  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.283  | <5%                     |                 2 |              0.1415  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2949 | >20%                    |                 5 |              0.05898 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3021 | 10-15%                  |                 2 |              0.15105 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3104 | <5%                     |                 5 |              0.06208 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3145 | <5%                     |                10 |              0.03145 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3175 | 5-10%                   |                 2 |              0.15875 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3249 | <5%                     |                 2 |              0.16245 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3269 | 5-10%                   |                 2 |              0.16345 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3279 | >20%                    |                 2 |              0.16395 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3282 | <5%                     |                 2 |              0.1641  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3382 | >20%                    |                 2 |              0.1691  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3392 | <5%                     |                 5 |              0.06784 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3478 | >20%                    |                 5 |              0.06956 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3536 | <5%                     |                 5 |              0.07072 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3582 | <5%                     |                 2 |              0.1791  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3602 | 15-20%                  |                 2 |              0.1801  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3704 | <5%                     |                10 |              0.03704 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3741 | >20%                    |                 2 |              0.18705 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3757 |                         |                 5 |              0.07514 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3784 | <5%                     |                 2 |              0.1892  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3823 | >20%                    |                 2 |              0.19115 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3835 | 15-20%                  |                 2 |              0.19175 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3955 | 15-20%                  |                 5 |              0.0791  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4022 | 5-10%                   |                 2 |              0.2011  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4043 | >20%                    |                10 |              0.04043 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4047 | <5%                     |                 2 |              0.20235 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4058 | 5-10%                   |                 2 |              0.2029  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.4117 | >20%                    |                10 |              0.04117 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4122 | 5-10%                   |                 2 |              0.2061  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4237 | 5-10%                   |                 5 |              0.08474 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.4428 |                         |                 2 |              0.2214  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4442 | 10-15%                  |                 2 |              0.2221  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4536 | <5%                     |                 2 |              0.2268  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4549 | >20%                    |                 2 |              0.22745 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4553 | 10-15%                  |                 5 |              0.09106 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.459  | 15-20%                  |                 5 |              0.0918  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4632 | >20%                    |                 2 |              0.2316  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4632 | 15-20%                  |                 5 |              0.09264 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4694 | <5%                     |                 5 |              0.09388 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4734 | 5-10%                   |                10 |              0.04734 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4743 | <5%                     |                 5 |              0.09486 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4795 | 5-10%                   |                 2 |              0.23975 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4806 | <5%                     |                 2 |              0.2403  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4863 | 5-10%                   |                 5 |              0.09726 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4899 | 15-20%                  |                 5 |              0.09798 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5019 | 5-10%                   |                 2 |              0.25095 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5142 | 5-10%                   |                 5 |              0.10284 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5168 | 10-15%                  |                 2 |              0.2584  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5178 | 10-15%                  |                 2 |              0.2589  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5191 | >20%                    |                 5 |              0.10382 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5352 | >20%                    |                 5 |              0.10704 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5382 | <5%                     |                 5 |              0.10764 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5399 | <5%                     |                 5 |              0.10798 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5405 | >20%                    |                 2 |              0.27025 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5428 | >20%                    |                10 |              0.05428 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5438 | <5%                     |                 5 |              0.10876 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5448 | >20%                    |                 5 |              0.10896 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      0.545  |                         |                 5 |              0.109   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5462 | 10-15%                  |                 5 |              0.10924 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5575 | 5-10%                   |                 5 |              0.1115  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5579 | 5-10%                   |                 2 |              0.27895 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5582 | 10-15%                  |                 5 |              0.11164 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5588 | >20%                    |                 5 |              0.11176 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 |                         |                10 |              0.05663 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5714 | >20%                    |                 5 |              0.11428 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5729 | 15-20%                  |                 2 |              0.28645 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5746 | 10-15%                  |                 5 |              0.11492 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5752 | 10-15%                  |                10 |              0.05752 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6004 | 10-15%                  |                10 |              0.06004 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6171 | >20%                    |                10 |              0.06171 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6238 | 5-10%                   |                10 |              0.06238 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6439 | 5-10%                   |                 5 |              0.12878 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6511 | 5-10%                   |                10 |              0.06511 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6723 | <5%                     |                 5 |              0.13446 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.673  | >20%                    |                 2 |              0.3365  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6745 | >20%                    |                10 |              0.06745 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6865 | >20%                    |                10 |              0.06865 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7127 | 10-15%                  |                10 |              0.07127 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7168 | 15-20%                  |                 5 |              0.14336 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7251 | 15-20%                  |                 5 |              0.14502 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7254 | <5%                     |                 5 |              0.14508 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7289 | <5%                     |                 5 |              0.14578 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7297 | 5-10%                   |                 5 |              0.14594 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.734  | <5%                     |                 5 |              0.1468  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7401 | 5-10%                   |                10 |              0.07401 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7421 | 15-20%                  |                10 |              0.07421 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7504 | 5-10%                   |                10 |              0.07504 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7571 | >20%                    |                10 |              0.07571 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.772  | 5-10%                   |                10 |              0.0772  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.773  | <5%                     |                 2 |              0.3865  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7802 | <5%                     |                10 |              0.07802 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7874 | 5-10%                   |                 5 |              0.15748 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8221 | 5-10%                   |                10 |              0.08221 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8254 | 10-15%                  |                10 |              0.08254 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8382 | 5-10%                   |                10 |              0.08382 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8464 | >20%                    |                 5 |              0.16928 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8606 | 10-15%                  |                10 |              0.08606 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      0.8797 |                         |                10 |              0.08797 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8864 | >20%                    |                10 |              0.08864 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8909 | 15-20%                  |                10 |              0.08909 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9012 | <5%                     |                10 |              0.09012 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9043 | <5%                     |                 5 |              0.18086 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9277 | <5%                     |                10 |              0.09277 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9317 | 5-10%                   |                10 |              0.09317 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9544 | 5-10%                   |                10 |              0.09544 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9905 | 5-10%                   |                10 |              0.09905 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0074 | >20%                    |                10 |              0.10074 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.033  | <5%                     |                10 |              0.1033  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0406 | 5-10%                   |                10 |              0.10406 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0435 | >20%                    |                10 |              0.10435 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0445 | 15-20%                  |                10 |              0.10445 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0767 | <5%                     |                10 |              0.10767 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.15   | 10-15%                  |                10 |              0.115   |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1759 | 15-20%                  |                10 |              0.11759 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3129 | >20%                    |                10 |              0.13129 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3939 | >20%                    |                10 |              0.13939 |