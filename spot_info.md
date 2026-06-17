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

Data correct as of 2026-06-17 04:40:01.405987, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1654 | >20%                    |                 2 |              0.0827  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1714 | >20%                    |                 2 |              0.0857  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1846 | 15-20%                  |                 2 |              0.0923  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1965 | >20%                    |                 2 |              0.09825 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2267 | >20%                    |                 5 |              0.04534 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2297 | >20%                    |                 2 |              0.11485 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2299 | >20%                    |                 2 |              0.11495 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2405 | >20%                    |                 2 |              0.12025 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2467 | >20%                    |                 2 |              0.12335 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2506 | >20%                    |                 2 |              0.1253  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2506 | 15-20%                  |                 2 |              0.1253  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.261  | >20%                    |                 2 |              0.1305  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2647 | >20%                    |                 2 |              0.13235 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2725 | 10-15%                  |                 2 |              0.13625 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2753 | >20%                    |                 5 |              0.05506 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2792 | 10-15%                  |                 2 |              0.1396  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2878 | 15-20%                  |                 2 |              0.1439  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2961 | >20%                    |                 5 |              0.05922 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2976 | 15-20%                  |                 5 |              0.05952 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2995 | >20%                    |                 2 |              0.14975 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.318  | 15-20%                  |                 5 |              0.0636  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3209 | >20%                    |                10 |              0.03209 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3251 | 5-10%                   |                10 |              0.03251 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3441 | <5%                     |                 2 |              0.17205 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3445 | >20%                    |                10 |              0.03445 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.349  | >20%                    |                 2 |              0.1745  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3566 | 10-15%                  |                 2 |              0.1783  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3568 | >20%                    |                 2 |              0.1784  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3629 | >20%                    |                 5 |              0.07258 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3637 | 5-10%                   |                10 |              0.03637 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3672 | 5-10%                   |                10 |              0.03672 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3729 | >20%                    |                 5 |              0.07458 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3785 | >20%                    |                 2 |              0.18925 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3799 | >20%                    |                 2 |              0.18995 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3918 | >20%                    |                10 |              0.03918 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3926 | >20%                    |                 2 |              0.1963  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3937 | >20%                    |                 5 |              0.07874 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3965 | >20%                    |                 5 |              0.0793  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3991 | >20%                    |                 5 |              0.07982 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4008 | >20%                    |                 5 |              0.08016 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4131 | >20%                    |                 5 |              0.08262 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4209 | >20%                    |                 2 |              0.21045 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4234 | >20%                    |                 5 |              0.08468 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4244 | >20%                    |                10 |              0.04244 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4274 | >20%                    |                10 |              0.04274 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4297 | <5%                     |                 2 |              0.21485 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4313 | >20%                    |                 5 |              0.08626 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4319 | >20%                    |                 5 |              0.08638 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4344 | >20%                    |                 5 |              0.08688 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4412 | >20%                    |                 2 |              0.2206  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4465 | <5%                     |                 2 |              0.22325 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4591 | >20%                    |                 5 |              0.09182 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4595 | 10-15%                  |                 2 |              0.22975 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.46   | 15-20%                  |                 2 |              0.23    |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4659 | 15-20%                  |                 5 |              0.09318 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4781 | >20%                    |                 2 |              0.23905 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4788 | >20%                    |                 5 |              0.09576 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.4927 | 5-10%                   |                 2 |              0.24635 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4937 | 15-20%                  |                 2 |              0.24685 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5182 | 5-10%                   |                 5 |              0.10364 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5208 | >20%                    |                 5 |              0.10416 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5263 | >20%                    |                 2 |              0.26315 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5267 | 5-10%                   |                 2 |              0.26335 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5391 | >20%                    |                 2 |              0.26955 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5453 | >20%                    |                 5 |              0.10906 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5466 |                         |                 2 |              0.2733  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5473 | 10-15%                  |                 2 |              0.27365 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5501 | 15-20%                  |                 2 |              0.27505 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5528 | >20%                    |                 5 |              0.11056 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5538 | <5%                     |                 5 |              0.11076 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5566 | >20%                    |                10 |              0.05566 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5602 | 10-15%                  |                 5 |              0.11204 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5627 | >20%                    |                 2 |              0.28135 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5641 | >20%                    |                 5 |              0.11282 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5672 | >20%                    |                10 |              0.05672 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.5698 | >20%                    |                 5 |              0.11396 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5737 | >20%                    |                 5 |              0.11474 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5741 | >20%                    |                 2 |              0.28705 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5811 | >20%                    |                 2 |              0.29055 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5816 | <5%                     |                10 |              0.05816 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5893 | >20%                    |                 2 |              0.29465 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5959 | >20%                    |                 5 |              0.11918 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5986 | 10-15%                  |                10 |              0.05986 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5995 | >20%                    |                 5 |              0.1199  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6124 | >20%                    |                10 |              0.06124 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6174 | >20%                    |                 5 |              0.12348 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6339 |                         |                 5 |              0.12678 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6398 | 5-10%                   |                10 |              0.06398 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6427 | >20%                    |                10 |              0.06427 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.679  | 15-20%                  |                10 |              0.0679  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6897 | >20%                    |                10 |              0.06897 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6983 | >20%                    |                 5 |              0.13966 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.699  | >20%                    |                 5 |              0.1398  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7044 | 15-20%                  |                10 |              0.07044 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7057 | >20%                    |                 5 |              0.14114 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7086 | >20%                    |                 2 |              0.3543  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7188 | >20%                    |                 5 |              0.14376 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7203 | >20%                    |                 5 |              0.14406 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7259 | >20%                    |                 2 |              0.36295 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.73   | 5-10%                   |                10 |              0.073   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7322 | >20%                    |                10 |              0.07322 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7426 | 5-10%                   |                 5 |              0.14852 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7429 | >20%                    |                 5 |              0.14858 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7429 | >20%                    |                10 |              0.07429 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7879 | >20%                    |                10 |              0.07879 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7889 | >20%                    |                10 |              0.07889 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.789  | >20%                    |                 5 |              0.1578  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7894 | >20%                    |                 2 |              0.3947  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7928 | >20%                    |                 5 |              0.15856 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8366 | 15-20%                  |                10 |              0.08366 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8396 | >20%                    |                10 |              0.08396 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8469 | 15-20%                  |                10 |              0.08469 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8475 |                         |                 2 |              0.42375 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8547 | >20%                    |                10 |              0.08547 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8709 | >20%                    |                 5 |              0.17418 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8713 | 15-20%                  |                10 |              0.08713 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8786 | >20%                    |                 5 |              0.17572 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8864 | >20%                    |                10 |              0.08864 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9055 | >20%                    |                10 |              0.09055 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9103 | >20%                    |                10 |              0.09103 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9118 | >20%                    |                10 |              0.09118 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9166 | >20%                    |                10 |              0.09166 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9315 | 5-10%                   |                 2 |              0.46575 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9373 | >20%                    |                 5 |              0.18746 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9461 | >20%                    |                10 |              0.09461 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9539 | >20%                    |                 5 |              0.19078 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.9561 |                         |                10 |              0.09561 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9914 | >20%                    |                10 |              0.09914 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9967 | >20%                    |                 5 |              0.19934 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9992 | 10-15%                  |                 2 |              0.4996  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0004 | >20%                    |                 2 |              0.5002  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0307 | >20%                    |                10 |              0.10307 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0476 | >20%                    |                10 |              0.10476 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0531 | 5-10%                   |                10 |              0.10531 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0566 |                         |                 5 |              0.21132 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0855 | >20%                    |                 5 |              0.2171  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0919 | 15-20%                  |                10 |              0.10919 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.1524 | 10-15%                  |                 2 |              0.5762  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1699 | >20%                    |                10 |              0.11699 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2003 | >20%                    |                10 |              0.12003 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.2183 | >20%                    |                10 |              0.12183 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.3259 | 5-10%                   |                 2 |              0.66295 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3736 | 15-20%                  |                 5 |              0.27472 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3885 | 10-15%                  |                10 |              0.13885 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4102 | >20%                    |                 5 |              0.28204 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.445  | >20%                    |                10 |              0.1445  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4827 | >20%                    |                10 |              0.14827 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5065 | 15-20%                  |                10 |              0.15065 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.569  | >20%                    |                10 |              0.1569  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5789 | >20%                    |                 5 |              0.31578 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6084 | 15-20%                  |                10 |              0.16084 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7978 |                         |                10 |              0.17978 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3645 | >20%                    |                10 |              0.23645 |