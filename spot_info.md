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

Data correct as of 2024-09-01 01:43:58.031226, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | <5%                     |                 2 |              0.044   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1505 | >20%                    |                 5 |              0.0301  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1802 | 10-15%                  |                 2 |              0.0901  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2321 | >20%                    |                 2 |              0.11605 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2451 | <5%                     |                 2 |              0.12255 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2526 | 10-15%                  |                 2 |              0.1263  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2528 | 5-10%                   |                 2 |              0.1264  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.2648 | <5%                     |                 2 |              0.1324  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2681 | <5%                     |                 2 |              0.13405 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2707 | <5%                     |                 2 |              0.13535 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2708 | <5%                     |                 5 |              0.05416 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2823 | >20%                    |                10 |              0.02823 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2922 | <5%                     |                 2 |              0.1461  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.31   | <5%                     |                 2 |              0.155   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3137 | 10-15%                  |                 2 |              0.15685 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3196 | <5%                     |                 2 |              0.1598  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3227 | <5%                     |                 2 |              0.16135 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.329  | >20%                    |                 5 |              0.0658  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3449 | <5%                     |                 2 |              0.17245 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3489 | <5%                     |                 2 |              0.17445 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3599 | <5%                     |                 2 |              0.17995 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | <5%                     |                10 |              0.03698 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3725 | <5%                     |                 2 |              0.18625 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3744 | <5%                     |                 5 |              0.07488 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3803 | <5%                     |                 5 |              0.07606 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3934 | 10-15%                  |                 2 |              0.1967  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4014 | <5%                     |                 2 |              0.2007  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | 5-10%                   |                10 |              0.04161 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4191 | >20%                    |                 2 |              0.20955 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.4204 | <5%                     |                 2 |              0.2102  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4254 | 5-10%                   |                 2 |              0.2127  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4281 | 15-20%                  |                 5 |              0.08562 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4321 | >20%                    |                 2 |              0.21605 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4344 | >20%                    |                 2 |              0.2172  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.4363 | <5%                     |                 2 |              0.21815 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4446 | 10-15%                  |                 2 |              0.2223  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4513 | 5-10%                   |                 5 |              0.09026 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4595 | <5%                     |                 5 |              0.0919  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4613 | 10-15%                  |                 2 |              0.23065 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4632 | <5%                     |                 5 |              0.09264 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.469  | 10-15%                  |                 2 |              0.2345  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4692 | >20%                    |                 5 |              0.09384 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4722 | >20%                    |                 2 |              0.2361  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4734 | >20%                    |                 5 |              0.09468 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.479  | 5-10%                   |                 5 |              0.0958  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4793 | 15-20%                  |                 5 |              0.09586 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.48   | >20%                    |                10 |              0.048   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.484  | 5-10%                   |                 5 |              0.0968  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4876 | >20%                    |                 5 |              0.09752 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4882 | <5%                     |                 5 |              0.09764 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4953 | 5-10%                   |                 5 |              0.09906 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4959 | >20%                    |                 2 |              0.24795 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4972 | <5%                     |                 5 |              0.09944 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5204 | <5%                     |                 5 |              0.10408 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5283 | 10-15%                  |                 5 |              0.10566 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.5533 | <5%                     |                 2 |              0.27665 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5562 | <5%                     |                 5 |              0.11124 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5794 | >20%                    |                 2 |              0.2897  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5842 | >20%                    |                 5 |              0.11684 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5874 | >20%                    |                 2 |              0.2937  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5882 | 10-15%                  |                 2 |              0.2941  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.5888 | <5%                     |                 5 |              0.11776 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5958 | <5%                     |                 5 |              0.11916 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5959 | 15-20%                  |                 5 |              0.11918 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5977 | <5%                     |                10 |              0.05977 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6008 | <5%                     |                 5 |              0.12016 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.6012 | >20%                    |                 2 |              0.3006  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6065 | <5%                     |                 5 |              0.1213  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6082 | >20%                    |                 5 |              0.12164 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6159 | >20%                    |                 5 |              0.12318 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6201 | <5%                     |                10 |              0.06201 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6416 | >20%                    |                 5 |              0.12832 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6611 | 10-15%                  |                 5 |              0.13222 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6713 | >20%                    |                 5 |              0.13426 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6739 | <5%                     |                10 |              0.06739 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.6879 | <5%                     |                10 |              0.06879 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.6927 | <5%                     |                 5 |              0.13854 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6998 | >20%                    |                10 |              0.06998 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7206 | >20%                    |                 2 |              0.3603  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7477 | <5%                     |                10 |              0.07477 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7633 | >20%                    |                10 |              0.07633 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.766  | 10-15%                  |                10 |              0.0766  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7717 | 10-15%                  |                10 |              0.07717 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7736 | >20%                    |                 5 |              0.15472 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7822 | 15-20%                  |                10 |              0.07822 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7877 | >20%                    |                 5 |              0.15754 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7925 | 5-10%                   |                10 |              0.07925 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.795  | <5%                     |                10 |              0.0795  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8084 | <5%                     |                10 |              0.08084 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8193 | 10-15%                  |                10 |              0.08193 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.829  | >20%                    |                10 |              0.0829  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8308 | >20%                    |                10 |              0.08308 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8406 | 10-15%                  |                10 |              0.08406 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.8406 | <5%                     |                10 |              0.08406 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.845  | <5%                     |                10 |              0.0845  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8748 | <5%                     |                10 |              0.08748 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8854 | <5%                     |                10 |              0.08854 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8973 | >20%                    |                 5 |              0.17946 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9221 | >20%                    |                10 |              0.09221 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9419 | >20%                    |                10 |              0.09419 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9463 | <5%                     |                10 |              0.09463 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9719 | <5%                     |                10 |              0.09719 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9797 | >20%                    |                10 |              0.09797 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9881 | 5-10%                   |                10 |              0.09881 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0068 | >20%                    |                10 |              0.10068 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      1.0072 | >20%                    |                 5 |              0.20144 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.039  | 5-10%                   |                10 |              0.1039  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0679 | >20%                    |                10 |              0.10679 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1781 | >20%                    |                10 |              0.11781 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1838 | >20%                    |                10 |              0.11838 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2048 | >20%                    |                10 |              0.12048 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4469 | >20%                    |                10 |              0.14469 |