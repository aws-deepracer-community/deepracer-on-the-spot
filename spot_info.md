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

Data correct as of 2024-11-26 01:43:04.558055, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1204 | >20%                    |                 5 |              0.02408 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1676 | 10-15%                  |                 2 |              0.0838  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.176  | >20%                    |                 5 |              0.0352  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 5-10%                   |                 2 |              0.1121  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2252 | >20%                    |                 2 |              0.1126  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2266 | 5-10%                   |                 2 |              0.1133  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2277 | 15-20%                  |                 2 |              0.11385 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2292 | 5-10%                   |                 2 |              0.1146  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2373 | <5%                     |                 2 |              0.11865 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.247  | <5%                     |                 2 |              0.1235  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2576 | 15-20%                  |                 5 |              0.05152 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.263  | 10-15%                  |                 2 |              0.1315  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2706 | 5-10%                   |                 2 |              0.1353  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2792 | <5%                     |                 2 |              0.1396  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 |                         |                 2 |              0.1402  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2992 | 10-15%                  |                 2 |              0.1496  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | <5%                     |                 5 |              0.06008 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3057 | 5-10%                   |                 2 |              0.15285 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3219 | >20%                    |                 5 |              0.06438 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3232 | <5%                     |                 2 |              0.1616  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3275 | 5-10%                   |                 2 |              0.16375 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3375 | 15-20%                  |                 2 |              0.16875 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3401 | <5%                     |                 5 |              0.06802 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3403 | <5%                     |                 2 |              0.17015 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3425 | >20%                    |                 2 |              0.17125 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3447 | >20%                    |                 2 |              0.17235 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3468 | <5%                     |                10 |              0.03468 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3507 | 15-20%                  |                 2 |              0.17535 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3515 | >20%                    |                 5 |              0.0703  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3553 | <5%                     |                 5 |              0.07106 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3626 | >20%                    |                 5 |              0.07252 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3665 | <5%                     |                 2 |              0.18325 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3685 | <5%                     |                10 |              0.03685 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.3724 |                         |                 2 |              0.1862  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3745 | <5%                     |                 2 |              0.18725 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3757 |                         |                 5 |              0.07514 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3777 | >20%                    |                 2 |              0.18885 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3863 | >20%                    |                 2 |              0.19315 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3964 | 5-10%                   |                 2 |              0.1982  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4005 | 5-10%                   |                 2 |              0.20025 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.4062 | >20%                    |                10 |              0.04062 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4094 | 15-20%                  |                 5 |              0.08188 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4118 | >20%                    |                10 |              0.04118 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4132 | <5%                     |                 2 |              0.2066  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4145 | 5-10%                   |                 2 |              0.20725 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4284 | 5-10%                   |                 5 |              0.08568 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4458 | <5%                     |                 2 |              0.2229  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4475 | 10-15%                  |                 2 |              0.22375 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4488 | >20%                    |                 2 |              0.2244  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4491 | >20%                    |                 2 |              0.22455 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4528 | 15-20%                  |                 5 |              0.09056 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | 5-10%                   |                10 |              0.04529 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4534 | 10-15%                  |                 5 |              0.09068 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.4598 | 5-10%                   |                 2 |              0.2299  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4653 | 5-10%                   |                 5 |              0.09306 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.468  | 15-20%                  |                 5 |              0.0936  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4686 | <5%                     |                 5 |              0.09372 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4747 | <5%                     |                 5 |              0.09494 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4767 | 15-20%                  |                 5 |              0.09534 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.479  | 5-10%                   |                 2 |              0.2395  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      0.4799 |                         |                 5 |              0.09598 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4877 | <5%                     |                 2 |              0.24385 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4893 | 5-10%                   |                 5 |              0.09786 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5102 | 5-10%                   |                 2 |              0.2551  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5141 | 10-15%                  |                 2 |              0.25705 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5157 | 10-15%                  |                 2 |              0.25785 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5175 | <5%                     |                 5 |              0.1035  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5224 | >20%                    |                 5 |              0.10448 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5305 | <5%                     |                 5 |              0.1061  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5342 | >20%                    |                10 |              0.05342 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5354 | <5%                     |                 5 |              0.10708 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5436 | >20%                    |                 2 |              0.2718  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5453 | >20%                    |                 5 |              0.10906 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.551  | 10-15%                  |                 5 |              0.1102  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5559 | >20%                    |                 5 |              0.11118 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5577 | 10-15%                  |                 5 |              0.11154 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5577 | 5-10%                   |                 5 |              0.11154 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5592 | 10-15%                  |                 5 |              0.11184 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5611 | >20%                    |                 5 |              0.11222 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5662 | 10-15%                  |                10 |              0.05662 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 |                         |                10 |              0.05663 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5782 | 15-20%                  |                 2 |              0.2891  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5886 | >20%                    |                10 |              0.05886 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.589  | >20%                    |                 5 |              0.1178  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5934 | 10-15%                  |                10 |              0.05934 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6236 | 5-10%                   |                10 |              0.06236 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.625  | 5-10%                   |                 5 |              0.125   |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6744 | <5%                     |                 5 |              0.13488 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6751 | 5-10%                   |                10 |              0.06751 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6801 | >20%                    |                10 |              0.06801 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6805 | >20%                    |                10 |              0.06805 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6857 | >20%                    |                 2 |              0.34285 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7009 | 15-20%                  |                 5 |              0.14018 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.704  | <5%                     |                 5 |              0.1408  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7074 | 5-10%                   |                 5 |              0.14148 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7233 | 10-15%                  |                10 |              0.07233 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      0.7247 |                         |                10 |              0.07247 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.725  | <5%                     |                 5 |              0.145   |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7272 | <5%                     |                 5 |              0.14544 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7397 | <5%                     |                 2 |              0.36985 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7466 | 5-10%                   |                10 |              0.07466 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7493 | 15-20%                  |                 5 |              0.14986 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7678 | >20%                    |                10 |              0.07678 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7818 | <5%                     |                10 |              0.07818 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7835 | <5%                     |                 5 |              0.1567  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7854 | 5-10%                   |                10 |              0.07854 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7881 | 5-10%                   |                10 |              0.07881 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7915 | 5-10%                   |                 5 |              0.1583  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8258 | 10-15%                  |                10 |              0.08258 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8266 | 5-10%                   |                10 |              0.08266 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.827  | 15-20%                  |                10 |              0.0827  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8413 | 5-10%                   |                10 |              0.08413 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8506 | 10-15%                  |                10 |              0.08506 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8521 | 15-20%                  |                10 |              0.08521 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8674 | >20%                    |                 5 |              0.17348 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8749 | >20%                    |                10 |              0.08749 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8807 | <5%                     |                10 |              0.08807 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9168 | 5-10%                   |                10 |              0.09168 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9262 | 5-10%                   |                10 |              0.09262 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9704 | <5%                     |                10 |              0.09704 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9862 | 5-10%                   |                10 |              0.09862 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9951 | >20%                    |                10 |              0.09951 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0297 | >20%                    |                10 |              0.10297 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0303 | 15-20%                  |                10 |              0.10303 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0339 | <5%                     |                10 |              0.10339 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0402 | 5-10%                   |                10 |              0.10402 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0413 | >20%                    |                10 |              0.10413 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0535 | <5%                     |                10 |              0.10535 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.163  | 15-20%                  |                10 |              0.1163  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1665 | 10-15%                  |                10 |              0.11665 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3446 | >20%                    |                10 |              0.13446 |