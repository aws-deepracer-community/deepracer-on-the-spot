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

Data correct as of 2024-10-31 01:44:38.719922, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1472 | 10-15%                  |                 2 |              0.0736  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 10-15%                  |                 2 |              0.0831  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1934 | <5%                     |                 2 |              0.0967  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1954 | >20%                    |                 2 |              0.0977  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1978 | 15-20%                  |                 2 |              0.0989  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1986 | 15-20%                  |                 2 |              0.0993  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2041 | 5-10%                   |                 2 |              0.10205 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2128 | 5-10%                   |                 2 |              0.1064  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2203 | 15-20%                  |                 2 |              0.11015 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2252 | <5%                     |                 2 |              0.1126  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2254 | <5%                     |                 2 |              0.1127  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2317 | >20%                    |                 2 |              0.11585 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2344 | 5-10%                   |                 2 |              0.1172  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2345 | 5-10%                   |                 5 |              0.0469  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2504 | <5%                     |                 2 |              0.1252  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2559 | 10-15%                  |                 2 |              0.12795 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2576 | 15-20%                  |                 5 |              0.05152 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2605 | 5-10%                   |                 5 |              0.0521  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2693 | <5%                     |                 2 |              0.13465 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2721 | >20%                    |                 5 |              0.05442 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2743 | 10-15%                  |                 2 |              0.13715 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2773 | <5%                     |                 2 |              0.13865 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.278  | >20%                    |                 2 |              0.139   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2854 | 10-15%                  |                 2 |              0.1427  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2863 | 10-15%                  |                 5 |              0.05726 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2954 | <5%                     |                 5 |              0.05908 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2971 | <5%                     |                 2 |              0.14855 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3012 | 5-10%                   |                 5 |              0.06024 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3026 | <5%                     |                 5 |              0.06052 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3059 | 15-20%                  |                 5 |              0.06118 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3074 | >20%                    |                 5 |              0.06148 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3161 | >20%                    |                 5 |              0.06322 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3246 | 15-20%                  |                 2 |              0.1623  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3365 | <5%                     |                 2 |              0.16825 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3426 | <5%                     |                10 |              0.03426 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3468 | 15-20%                  |                10 |              0.03468 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3488 | 5-10%                   |                 5 |              0.06976 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3493 | <5%                     |                 2 |              0.17465 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.369  | >20%                    |                 2 |              0.1845  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3769 | 5-10%                   |                 2 |              0.18845 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3807 | <5%                     |                 5 |              0.07614 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3819 | >20%                    |                 2 |              0.19095 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3862 | >20%                    |                 2 |              0.1931  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3935 | 5-10%                   |                 5 |              0.0787  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3961 | 5-10%                   |                 2 |              0.19805 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.397  | <5%                     |                 5 |              0.0794  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3978 | 10-15%                  |                10 |              0.03978 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4077 | 10-15%                  |                 2 |              0.20385 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.411  | 15-20%                  |                 2 |              0.2055  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4126 | >20%                    |                 5 |              0.08252 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4139 | <5%                     |                 5 |              0.08278 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4149 | >20%                    |                 2 |              0.20745 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4267 | 15-20%                  |                 2 |              0.21335 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.435  | 15-20%                  |                 5 |              0.087   |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.435  | 10-15%                  |                10 |              0.0435  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4459 | 5-10%                   |                 5 |              0.08918 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4472 | <5%                     |                10 |              0.04472 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4517 | <5%                     |                10 |              0.04517 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4555 | 15-20%                  |                 5 |              0.0911  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4643 | 15-20%                  |                 2 |              0.23215 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4704 | 10-15%                  |                 5 |              0.09408 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4774 | 5-10%                   |                 5 |              0.09548 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4779 | <5%                     |                 2 |              0.23895 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4846 | 5-10%                   |                 5 |              0.09692 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4861 | 10-15%                  |                10 |              0.04861 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4865 | <5%                     |                 5 |              0.0973  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4892 | 10-15%                  |                 2 |              0.2446  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4903 | >20%                    |                 5 |              0.09806 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.492  | 15-20%                  |                 2 |              0.246   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4965 | 5-10%                   |                 2 |              0.24825 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5054 | 15-20%                  |                 2 |              0.2527  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.5121 | <5%                     |                10 |              0.05121 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5166 | >20%                    |                 5 |              0.10332 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5186 | <5%                     |                 5 |              0.10372 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5237 | 5-10%                   |                 5 |              0.10474 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5255 | >20%                    |                 5 |              0.1051  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.5291 | <5%                     |                10 |              0.05291 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5297 | <5%                     |                10 |              0.05297 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5301 | <5%                     |                 5 |              0.10602 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5321 | 15-20%                  |                 2 |              0.26605 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5345 | 5-10%                   |                 5 |              0.1069  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5473 | 10-15%                  |                 5 |              0.10946 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5478 | 15-20%                  |                 2 |              0.2739  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5537 | 10-15%                  |                 5 |              0.11074 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5654 | 10-15%                  |                10 |              0.05654 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5674 | 5-10%                   |                 5 |              0.11348 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5705 | 5-10%                   |                10 |              0.05705 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5711 | 15-20%                  |                 5 |              0.11422 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5736 | >20%                    |                 5 |              0.11472 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5742 | 5-10%                   |                 5 |              0.11484 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.579  | 5-10%                   |                 5 |              0.1158  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5973 | >20%                    |                 2 |              0.29865 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5975 | >20%                    |                 2 |              0.29875 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.598  | >20%                    |                10 |              0.0598  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6028 | <5%                     |                10 |              0.06028 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6139 | >20%                    |                10 |              0.06139 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6491 | 5-10%                   |                10 |              0.06491 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.653  | 5-10%                   |                10 |              0.0653  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6545 | >20%                    |                 5 |              0.1309  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6607 | >20%                    |                 2 |              0.33035 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6643 | 15-20%                  |                 5 |              0.13286 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6786 | >20%                    |                10 |              0.06786 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6913 | 5-10%                   |                10 |              0.06913 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6987 | 10-15%                  |                10 |              0.06987 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7002 | 10-15%                  |                 5 |              0.14004 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7014 | 5-10%                   |                10 |              0.07014 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7265 | >20%                    |                10 |              0.07265 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7365 | >20%                    |                10 |              0.07365 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7455 | >20%                    |                 5 |              0.1491  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7554 | 15-20%                  |                10 |              0.07554 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7777 | 5-10%                   |                 5 |              0.15554 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7787 | <5%                     |                10 |              0.07787 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8027 | >20%                    |                10 |              0.08027 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8235 | 5-10%                   |                10 |              0.08235 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8461 | >20%                    |                10 |              0.08461 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8472 | 10-15%                  |                 5 |              0.16944 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8519 | >20%                    |                10 |              0.08519 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8588 | 5-10%                   |                10 |              0.08588 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8595 | <5%                     |                 2 |              0.42975 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8606 | 10-15%                  |                 2 |              0.4303  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8624 | >20%                    |                10 |              0.08624 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8891 | >20%                    |                 5 |              0.17782 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8895 | <5%                     |                10 |              0.08895 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9261 | 15-20%                  |                10 |              0.09261 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9877 | 10-15%                  |                10 |              0.09877 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9886 | 10-15%                  |                 5 |              0.19772 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0134 | 10-15%                  |                10 |              0.10134 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0228 | <5%                     |                10 |              0.10228 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0237 | >20%                    |                10 |              0.10237 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0243 | 5-10%                   |                10 |              0.10243 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0405 | >20%                    |                10 |              0.10405 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1292 | >20%                    |                10 |              0.11292 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1485 | <5%                     |                10 |              0.11485 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1817 | 15-20%                  |                10 |              0.11817 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4049 | >20%                    |                10 |              0.14049 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4983 | 5-10%                   |                10 |              0.14983 |