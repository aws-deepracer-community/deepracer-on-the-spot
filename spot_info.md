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

Data correct as of 2024-09-13 01:26:13.555430, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | <5%                     |                 2 |              0.044   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1287 | 5-10%                   |                 2 |              0.06435 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2105 | >20%                    |                 5 |              0.0421  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2106 | >20%                    |                 5 |              0.04212 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2243 | 10-15%                  |                 2 |              0.11215 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2291 | 15-20%                  |                 2 |              0.11455 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2368 | <5%                     |                 2 |              0.1184  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2503 | 10-15%                  |                 2 |              0.12515 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2534 | 5-10%                   |                 2 |              0.1267  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2588 | >20%                    |                10 |              0.02588 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2609 | <5%                     |                 2 |              0.13045 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.279  | <5%                     |                 2 |              0.1395  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2794 | <5%                     |                 2 |              0.1397  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2952 | 10-15%                  |                 2 |              0.1476  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.31   | <5%                     |                 2 |              0.155   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3151 | <5%                     |                 2 |              0.15755 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3156 | <5%                     |                 5 |              0.06312 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3205 | <5%                     |                10 |              0.03205 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3266 | <5%                     |                 2 |              0.1633  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3511 | <5%                     |                 5 |              0.07022 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.356  | 15-20%                  |                 5 |              0.0712  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3575 | <5%                     |                 2 |              0.17875 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3673 | 5-10%                   |                 2 |              0.18365 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3693 | 5-10%                   |                 5 |              0.07386 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3698 | <5%                     |                 2 |              0.1849  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3717 | >20%                    |                 5 |              0.07434 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3745 | <5%                     |                 2 |              0.18725 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3746 | <5%                     |                 2 |              0.1873  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3763 | <5%                     |                10 |              0.03763 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3878 | <5%                     |                 5 |              0.07756 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3903 | 10-15%                  |                 2 |              0.19515 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3941 | 15-20%                  |                10 |              0.03941 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4077 | >20%                    |                 2 |              0.20385 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.414  | >20%                    |                 2 |              0.207   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4205 | >20%                    |                10 |              0.04205 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4206 | 15-20%                  |                 5 |              0.08412 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.424  | 5-10%                   |                 2 |              0.212   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4275 | 5-10%                   |                 2 |              0.21375 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.4475 | <5%                     |                 2 |              0.22375 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4504 | 15-20%                  |                 5 |              0.09008 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.459  | 10-15%                  |                 5 |              0.0918  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4686 | <5%                     |                 5 |              0.09372 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4695 | >20%                    |                 2 |              0.23475 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4696 | <5%                     |                 5 |              0.09392 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.471  | <5%                     |                 5 |              0.0942  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4711 | 5-10%                   |                 5 |              0.09422 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4739 | 10-15%                  |                 2 |              0.23695 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4803 | >20%                    |                 2 |              0.24015 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4844 | <5%                     |                 2 |              0.2422  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4855 | 10-15%                  |                 5 |              0.0971  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4893 | <5%                     |                10 |              0.04893 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4966 | 5-10%                   |                 5 |              0.09932 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4975 | >20%                    |                 2 |              0.24875 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5094 | <5%                     |                 5 |              0.10188 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5186 | <5%                     |                 5 |              0.10372 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5187 | >20%                    |                 5 |              0.10374 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5231 | >20%                    |                 2 |              0.26155 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5377 | <5%                     |                 5 |              0.10754 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5399 | <5%                     |                 5 |              0.10798 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5434 | >20%                    |                 5 |              0.10868 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5562 | >20%                    |                 5 |              0.11124 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5833 | 15-20%                  |                 2 |              0.29165 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5893 | >20%                    |                 5 |              0.11786 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.59   | <5%                     |                 5 |              0.118   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5928 | <5%                     |                 5 |              0.11856 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5973 | >20%                    |                 5 |              0.11946 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5998 | 5-10%                   |                 5 |              0.11996 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.6012 | >20%                    |                 2 |              0.3006  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6014 | 15-20%                  |                 5 |              0.12028 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6137 | >20%                    |                 5 |              0.12274 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6252 | 15-20%                  |                 2 |              0.3126  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6397 | 5-10%                   |                10 |              0.06397 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.6434 | <5%                     |                10 |              0.06434 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6706 | 10-15%                  |                10 |              0.06706 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.672  | 5-10%                   |                 2 |              0.336   |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7001 | <5%                     |                10 |              0.07001 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7026 | <5%                     |                10 |              0.07026 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7043 | >20%                    |                 2 |              0.35215 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7061 | >20%                    |                10 |              0.07061 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.727  | <5%                     |                 2 |              0.3635  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7308 | 15-20%                  |                10 |              0.07308 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7604 | >20%                    |                 5 |              0.15208 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7835 | 5-10%                   |                10 |              0.07835 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7954 | 15-20%                  |                10 |              0.07954 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8034 | >20%                    |                10 |              0.08034 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.8073 | >20%                    |                 5 |              0.16146 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8087 | >20%                    |                10 |              0.08087 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8128 | <5%                     |                 2 |              0.4064  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8144 | <5%                     |                 5 |              0.16288 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8185 | <5%                     |                10 |              0.08185 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8298 | >20%                    |                10 |              0.08298 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8322 | <5%                     |                 5 |              0.16644 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8365 | 10-15%                  |                10 |              0.08365 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8679 | >20%                    |                10 |              0.08679 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8687 | >20%                    |                10 |              0.08687 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8903 | <5%                     |                10 |              0.08903 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9116 | >20%                    |                 5 |              0.18232 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9316 | >20%                    |                10 |              0.09316 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9342 | >20%                    |                10 |              0.09342 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9356 | <5%                     |                10 |              0.09356 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.9382 | >20%                    |                 5 |              0.18764 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9494 | >20%                    |                10 |              0.09494 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9951 | <5%                     |                10 |              0.09951 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0271 | >20%                    |                10 |              0.10271 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0296 | 5-10%                   |                10 |              0.10296 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0455 | 10-15%                  |                10 |              0.10455 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0692 | 5-10%                   |                 5 |              0.21384 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1102 | 10-15%                  |                10 |              0.11102 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1465 | >20%                    |                10 |              0.11465 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1597 | >20%                    |                10 |              0.11597 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2196 | >20%                    |                10 |              0.12196 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3076 | <5%                     |                10 |              0.13076 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4363 | >20%                    |                10 |              0.14363 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4576 | 5-10%                   |                10 |              0.14576 |