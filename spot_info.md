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

Data correct as of 2024-09-05 01:25:16.931785, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | <5%                     |                 2 |              0.044   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1733 | 15-20%                  |                 5 |              0.03466 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1965 | 10-15%                  |                 2 |              0.09825 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2259 | >20%                    |                 2 |              0.11295 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2415 | <5%                     |                 2 |              0.12075 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2517 | 10-15%                  |                 2 |              0.12585 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2546 | 5-10%                   |                 2 |              0.1273  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2577 | <5%                     |                10 |              0.02577 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2639 | <5%                     |                 2 |              0.13195 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2748 | <5%                     |                 2 |              0.1374  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2858 | <5%                     |                 2 |              0.1429  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.298  | 10-15%                  |                 2 |              0.149   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2996 | <5%                     |                 5 |              0.05992 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3009 | <5%                     |                 2 |              0.15045 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3083 | <5%                     |                 2 |              0.15415 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3147 | <5%                     |                 2 |              0.15735 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3236 | <5%                     |                 2 |              0.1618  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3365 | 15-20%                  |                 5 |              0.0673  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3467 | <5%                     |                 2 |              0.17335 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3512 | <5%                     |                 2 |              0.1756  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3543 | <5%                     |                 2 |              0.17715 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3691 | <5%                     |                 2 |              0.18455 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | <5%                     |                10 |              0.03698 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3744 | <5%                     |                 5 |              0.07488 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3784 | <5%                     |                 5 |              0.07568 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3805 | >20%                    |                10 |              0.03805 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3855 | 10-15%                  |                 2 |              0.19275 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | 5-10%                   |                10 |              0.04161 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4184 | >20%                    |                 2 |              0.2092  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4198 | >20%                    |                 5 |              0.08396 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4301 | >20%                    |                 2 |              0.21505 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4314 | 15-20%                  |                 5 |              0.08628 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4472 | 10-15%                  |                 5 |              0.08944 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4477 | 10-15%                  |                 2 |              0.22385 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4525 | 15-20%                  |                 5 |              0.0905  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4538 | 5-10%                   |                 2 |              0.2269  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.456  | <5%                     |                 5 |              0.0912  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4653 | <5%                     |                 2 |              0.23265 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4669 | 10-15%                  |                 5 |              0.09338 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.469  | >20%                    |                 2 |              0.2345  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4775 | >20%                    |                 5 |              0.0955  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4777 | >20%                    |                 5 |              0.09554 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4802 | <5%                     |                 5 |              0.09604 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4813 | <5%                     |                 5 |              0.09626 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4894 | 5-10%                   |                 5 |              0.09788 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4912 | <5%                     |                 5 |              0.09824 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4962 | >20%                    |                 2 |              0.2481  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.506  | >20%                    |                 2 |              0.253   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5061 | 5-10%                   |                 5 |              0.10122 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5068 | >20%                    |                 5 |              0.10136 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.5077 | <5%                     |                 2 |              0.25385 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.5091 | 10-15%                  |                 2 |              0.25455 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5101 | <5%                     |                 5 |              0.10202 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.511  | 10-15%                  |                 5 |              0.1022  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.5111 | <5%                     |                 2 |              0.25555 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.517  | <5%                     |                10 |              0.0517  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5338 | <5%                     |                 2 |              0.2669  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5642 | 5-10%                   |                 2 |              0.2821  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5776 | >20%                    |                 2 |              0.2888  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5816 | >20%                    |                 5 |              0.11632 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5895 | <5%                     |                 5 |              0.1179  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5919 | >20%                    |                 2 |              0.29595 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.594  | >20%                    |                 2 |              0.297   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5949 | 15-20%                  |                 5 |              0.11898 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5975 | <5%                     |                 5 |              0.1195  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.5975 | <5%                     |                10 |              0.05975 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6022 | 10-15%                  |                 2 |              0.3011  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6118 | >20%                    |                 5 |              0.12236 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6181 | >20%                    |                 5 |              0.12362 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6237 | <5%                     |                10 |              0.06237 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6385 | 10-15%                  |                 5 |              0.1277  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6454 | >20%                    |                 5 |              0.12908 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.6536 | <5%                     |                 5 |              0.13072 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.677  | <5%                     |                 5 |              0.1354  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6773 | <5%                     |                10 |              0.06773 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6911 | >20%                    |                10 |              0.06911 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7247 | >20%                    |                 2 |              0.36235 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7286 | <5%                     |                 5 |              0.14572 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7381 | <5%                     |                10 |              0.07381 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7516 | 10-15%                  |                10 |              0.07516 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7532 | 15-20%                  |                10 |              0.07532 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7567 | >20%                    |                10 |              0.07567 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7587 | 10-15%                  |                10 |              0.07587 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7588 | <5%                     |                 5 |              0.15176 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7759 | >20%                    |                 5 |              0.15518 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7843 | >20%                    |                 5 |              0.15686 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7942 | >20%                    |                10 |              0.07942 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8036 | 10-15%                  |                10 |              0.08036 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.806  | <5%                     |                10 |              0.0806  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8096 | 5-10%                   |                10 |              0.08096 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8238 | >20%                    |                10 |              0.08238 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.8327 | <5%                     |                10 |              0.08327 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.857  | <5%                     |                10 |              0.0857  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8688 | <5%                     |                10 |              0.08688 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8911 | >20%                    |                10 |              0.08911 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.897  | >20%                    |                 5 |              0.1794  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.92   | 10-15%                  |                10 |              0.092   |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9252 | <5%                     |                10 |              0.09252 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9349 | >20%                    |                10 |              0.09349 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9446 | >20%                    |                10 |              0.09446 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9603 | <5%                     |                10 |              0.09603 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.9886 | 5-10%                   |                10 |              0.09886 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.994  | 10-15%                  |                10 |              0.0994  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0007 | >20%                    |                10 |              0.10007 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      1.0007 | >20%                    |                 5 |              0.20014 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0408 | 10-15%                  |                10 |              0.10408 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0413 | >20%                    |                10 |              0.10413 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0784 | <5%                     |                10 |              0.10784 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1641 | >20%                    |                10 |              0.11641 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.191  | >20%                    |                10 |              0.1191  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1973 | >20%                    |                10 |              0.11973 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4445 | >20%                    |                10 |              0.14445 |