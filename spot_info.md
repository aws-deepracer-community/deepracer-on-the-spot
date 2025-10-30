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

Data correct as of 2025-10-30 01:54:11.906760, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0973 | 5-10%                   |                 2 |              0.04865 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1417 | >20%                    |                 5 |              0.02834 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1894 | >20%                    |                 2 |              0.0947  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1923 | 10-15%                  |                 5 |              0.03846 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2164 | 10-15%                  |                 2 |              0.1082  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.248  | >20%                    |                 2 |              0.124   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2524 | 10-15%                  |                 2 |              0.1262  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.261  | >20%                    |                 2 |              0.1305  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.263  | >20%                    |                 2 |              0.1315  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2652 | 5-10%                   |                 2 |              0.1326  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2658 | >20%                    |                 2 |              0.1329  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2699 | >20%                    |                 2 |              0.13495 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2711 | 10-15%                  |                 2 |              0.13555 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.28   | 5-10%                   |                 2 |              0.14    |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2813 | >20%                    |                 2 |              0.14065 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2843 | 15-20%                  |                 2 |              0.14215 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3033 | >20%                    |                 2 |              0.15165 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3253 | >20%                    |                 2 |              0.16265 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3256 | 15-20%                  |                 2 |              0.1628  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3261 | >20%                    |                 5 |              0.06522 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3374 | >20%                    |                 2 |              0.1687  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3414 | >20%                    |                 2 |              0.1707  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3474 | >20%                    |                 2 |              0.1737  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3537 | >20%                    |                 5 |              0.07074 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3688 | >20%                    |                10 |              0.03688 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3722 | <5%                     |                10 |              0.03722 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.378  | >20%                    |                 5 |              0.0756  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3796 | 15-20%                  |                 2 |              0.1898  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3826 | 10-15%                  |                 2 |              0.1913  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3845 | >20%                    |                 2 |              0.19225 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3898 | >20%                    |                 2 |              0.1949  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3946 | >20%                    |                 2 |              0.1973  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3955 | >20%                    |                 2 |              0.19775 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4    | >20%                    |                 2 |              0.2     |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4124 | >20%                    |                 2 |              0.2062  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4219 | 15-20%                  |                 2 |              0.21095 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4232 | 5-10%                   |                 2 |              0.2116  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4261 | 5-10%                   |                 5 |              0.08522 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4307 | >20%                    |                 5 |              0.08614 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4319 | >20%                    |                 2 |              0.21595 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.435  | <5%                     |                 2 |              0.2175  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4356 | >20%                    |                 2 |              0.2178  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4435 | >20%                    |                 2 |              0.22175 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4452 | 5-10%                   |                 2 |              0.2226  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4453 | >20%                    |                 5 |              0.08906 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4487 | >20%                    |                 5 |              0.08974 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4502 | >20%                    |                 2 |              0.2251  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4511 | >20%                    |                 5 |              0.09022 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4587 | >20%                    |                 5 |              0.09174 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4632 | >20%                    |                 5 |              0.09264 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4642 | >20%                    |                 5 |              0.09284 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4678 | >20%                    |                 5 |              0.09356 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4691 | >20%                    |                 2 |              0.23455 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4808 | 10-15%                  |                 2 |              0.2404  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4811 | >20%                    |                10 |              0.04811 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4812 | >20%                    |                 5 |              0.09624 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4823 | >20%                    |                 2 |              0.24115 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4832 | 10-15%                  |                 2 |              0.2416  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4865 | >20%                    |                 5 |              0.0973  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4871 | >20%                    |                 2 |              0.24355 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4874 | >20%                    |                 2 |              0.2437  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4899 | 15-20%                  |                 5 |              0.09798 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4979 | >20%                    |                 5 |              0.09958 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4982 | 5-10%                   |                10 |              0.04982 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5084 | >20%                    |                 5 |              0.10168 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5162 | >20%                    |                 2 |              0.2581  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5173 | 15-20%                  |                10 |              0.05173 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.535  | 5-10%                   |                 2 |              0.2675  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.535  | 15-20%                  |                 5 |              0.107   |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5385 | >20%                    |                 2 |              0.26925 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5419 | >20%                    |                 5 |              0.10838 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5439 | >20%                    |                 5 |              0.10878 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5457 | >20%                    |                 2 |              0.27285 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5643 | >20%                    |                 5 |              0.11286 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5721 | >20%                    |                 5 |              0.11442 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5768 | 15-20%                  |                 2 |              0.2884  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5785 | >20%                    |                 5 |              0.1157  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5843 | >20%                    |                 5 |              0.11686 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6017 | >20%                    |                 5 |              0.12034 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6072 | >20%                    |                 5 |              0.12144 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6095 | 10-15%                  |                 5 |              0.1219  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.618  | >20%                    |                 5 |              0.1236  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6225 | >20%                    |                 5 |              0.1245  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6359 | 10-15%                  |                 5 |              0.12718 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6393 | >20%                    |                 5 |              0.12786 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6433 | 15-20%                  |                 2 |              0.32165 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6486 | >20%                    |                 5 |              0.12972 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6488 | 15-20%                  |                 5 |              0.12976 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.65   | >20%                    |                 5 |              0.13    |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6553 | 10-15%                  |                 5 |              0.13106 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.66   | >20%                    |                 5 |              0.132   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6655 | >20%                    |                10 |              0.06655 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6679 | >20%                    |                 2 |              0.33395 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6788 | >20%                    |                 2 |              0.3394  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.682  | >20%                    |                 5 |              0.1364  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6853 | 15-20%                  |                10 |              0.06853 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6901 | 10-15%                  |                 2 |              0.34505 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6923 | >20%                    |                 5 |              0.13846 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6944 | >20%                    |                 5 |              0.13888 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6975 | >20%                    |                10 |              0.06975 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7072 | >20%                    |                 5 |              0.14144 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7088 | 15-20%                  |                10 |              0.07088 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.711  | 15-20%                  |                10 |              0.0711  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7129 | >20%                    |                10 |              0.07129 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7147 | >20%                    |                 5 |              0.14294 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7232 | <5%                     |                10 |              0.07232 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7296 | 15-20%                  |                 5 |              0.14592 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7318 | >20%                    |                 2 |              0.3659  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7388 | >20%                    |                10 |              0.07388 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7403 | >20%                    |                 5 |              0.14806 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7416 | >20%                    |                10 |              0.07416 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7457 | >20%                    |                10 |              0.07457 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7514 | >20%                    |                 5 |              0.15028 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7572 | >20%                    |                10 |              0.07572 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7602 | >20%                    |                10 |              0.07602 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7737 | 15-20%                  |                10 |              0.07737 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7863 | 15-20%                  |                10 |              0.07863 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7899 | >20%                    |                 5 |              0.15798 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8053 | 15-20%                  |                 5 |              0.16106 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8097 | 10-15%                  |                 5 |              0.16194 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8268 | <5%                     |                10 |              0.08268 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8275 | 15-20%                  |                10 |              0.08275 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.831  | >20%                    |                10 |              0.0831  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8316 | 15-20%                  |                10 |              0.08316 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8366 | >20%                    |                 5 |              0.16732 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8472 | 10-15%                  |                 2 |              0.4236  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8639 | <5%                     |                10 |              0.08639 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8646 | >20%                    |                10 |              0.08646 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8675 | >20%                    |                10 |              0.08675 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.869  | >20%                    |                 5 |              0.1738  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8725 | >20%                    |                10 |              0.08725 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8742 | >20%                    |                10 |              0.08742 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8832 | 5-10%                   |                10 |              0.08832 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8901 | >20%                    |                 5 |              0.17802 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8938 | >20%                    |                10 |              0.08938 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9167 | >20%                    |                 2 |              0.45835 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9213 | 15-20%                  |                10 |              0.09213 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9455 | 10-15%                  |                10 |              0.09455 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9458 | 15-20%                  |                10 |              0.09458 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9477 | 10-15%                  |                10 |              0.09477 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9506 | 10-15%                  |                10 |              0.09506 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9551 | >20%                    |                 2 |              0.47755 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.005  | >20%                    |                 2 |              0.5025  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0264 | >20%                    |                10 |              0.10264 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.043  | >20%                    |                10 |              0.1043  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      1.0433 | 5-10%                   |                10 |              0.10433 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0526 | 10-15%                  |                 2 |              0.5263  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0603 | >20%                    |                10 |              0.10603 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0716 | >20%                    |                 5 |              0.21432 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0804 | >20%                    |                10 |              0.10804 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0928 | >20%                    |                 5 |              0.21856 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.106  | 15-20%                  |                10 |              0.1106  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1116 | 15-20%                  |                10 |              0.11116 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1217 | 5-10%                   |                10 |              0.11217 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1257 | >20%                    |                10 |              0.11257 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1456 | 5-10%                   |                10 |              0.11456 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1501 | <5%                     |                10 |              0.11501 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1687 | 10-15%                  |                10 |              0.11687 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.19   | >20%                    |                 5 |              0.238   |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2187 | >20%                    |                 5 |              0.24374 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2361 | 10-15%                  |                10 |              0.12361 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3435 | 5-10%                   |                 2 |              0.67175 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3607 | >20%                    |                10 |              0.13607 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3746 | 10-15%                  |                 5 |              0.27492 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.484  | >20%                    |                10 |              0.1484  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5445 | >20%                    |                10 |              0.15445 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6069 | >20%                    |                10 |              0.16069 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6716 | 10-15%                  |                 5 |              0.33432 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.677  | >20%                    |                10 |              0.1677  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7482 | >20%                    |                10 |              0.17482 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0757 | 10-15%                  |                10 |              0.20757 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.416  | 15-20%                  |                10 |              0.2416  |