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

Data correct as of 2025-01-17 01:27:11.294829, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1704 | <5%                     |                 2 |              0.0852  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.1999 | 10-15%                  |                 2 |              0.09995 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2281 | 5-10%                   |                 2 |              0.11405 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2305 | 15-20%                  |                 2 |              0.11525 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2356 | <5%                     |                 2 |              0.1178  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2387 | 5-10%                   |                 2 |              0.11935 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2501 | 5-10%                   |                 2 |              0.12505 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2517 | >20%                    |                 5 |              0.05034 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2622 | 5-10%                   |                 2 |              0.1311  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | <5%                     |                 5 |              0.0552  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2786 | 10-15%                  |                 2 |              0.1393  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2824 | <5%                     |                 2 |              0.1412  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2973 | <5%                     |                 2 |              0.14865 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3012 | >20%                    |                 2 |              0.1506  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.302  | <5%                     |                 5 |              0.0604  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3167 | 5-10%                   |                 2 |              0.15835 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3184 | 10-15%                  |                 2 |              0.1592  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3258 | >20%                    |                 2 |              0.1629  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3305 | 5-10%                   |                 2 |              0.16525 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3397 | <5%                     |                 2 |              0.16985 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3428 | 5-10%                   |                 5 |              0.06856 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3674 | >20%                    |                 2 |              0.1837  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3694 | <5%                     |                 2 |              0.1847  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3707 | <5%                     |                 2 |              0.18535 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3723 | <5%                     |                 2 |              0.18615 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3762 | 10-15%                  |                 5 |              0.07524 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3763 | 5-10%                   |                 5 |              0.07526 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3766 | <5%                     |                 5 |              0.07532 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3797 | 10-15%                  |                10 |              0.03797 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3923 | 5-10%                   |                 2 |              0.19615 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3944 | >20%                    |                 2 |              0.1972  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3948 | <5%                     |                 2 |              0.1974  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3984 | >20%                    |                 2 |              0.1992  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4034 | <5%                     |                 2 |              0.2017  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4054 | 5-10%                   |                 2 |              0.2027  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4206 | 5-10%                   |                 5 |              0.08412 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4236 | >20%                    |                 2 |              0.2118  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4272 | >20%                    |                 5 |              0.08544 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4287 | 5-10%                   |                 2 |              0.21435 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.431  | <5%                     |                 2 |              0.2155  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4373 | <5%                     |                 5 |              0.08746 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4448 | 10-15%                  |                 5 |              0.08896 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4503 | >20%                    |                 5 |              0.09006 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4545 | <5%                     |                 5 |              0.0909  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4565 | <5%                     |                 5 |              0.0913  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4568 | 10-15%                  |                 5 |              0.09136 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4571 | <5%                     |                 5 |              0.09142 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4631 | 15-20%                  |                 5 |              0.09262 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4642 | 10-15%                  |                 2 |              0.2321  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4656 | <5%                     |                 2 |              0.2328  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4701 | 10-15%                  |                 5 |              0.09402 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4718 | >20%                    |                10 |              0.04718 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4722 | 5-10%                   |                 5 |              0.09444 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4819 | 15-20%                  |                 2 |              0.24095 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4833 | <5%                     |                 2 |              0.24165 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4876 | <5%                     |                 5 |              0.09752 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.494  | <5%                     |                 2 |              0.247   |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4979 | 15-20%                  |                10 |              0.04979 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5022 | <5%                     |                 5 |              0.10044 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5073 | <5%                     |                 2 |              0.25365 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5091 | <5%                     |                 5 |              0.10182 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5147 | >20%                    |                 5 |              0.10294 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5166 | 5-10%                   |                 2 |              0.2583  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.52   | <5%                     |                 5 |              0.104   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5224 | 5-10%                   |                 5 |              0.10448 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.526  | >20%                    |                 5 |              0.1052  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5294 | >20%                    |                 2 |              0.2647  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5354 | >20%                    |                 5 |              0.10708 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5397 | 5-10%                   |                 5 |              0.10794 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5439 | >20%                    |                 5 |              0.10878 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5533 | <5%                     |                 5 |              0.11066 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.557  | 10-15%                  |                10 |              0.0557  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5626 | <5%                     |                 5 |              0.11252 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5715 | 5-10%                   |                 5 |              0.1143  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5751 | 5-10%                   |                 5 |              0.11502 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5754 | 15-20%                  |                 2 |              0.2877  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5821 | 15-20%                  |                 2 |              0.29105 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5856 | 5-10%                   |                 5 |              0.11712 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6076 | <5%                     |                 5 |              0.12152 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6282 | >20%                    |                 2 |              0.3141  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6351 | 5-10%                   |                10 |              0.06351 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6412 | 5-10%                   |                10 |              0.06412 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.656  | <5%                     |                 5 |              0.1312  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.676  | >20%                    |                10 |              0.0676  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6775 | >20%                    |                10 |              0.06775 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6818 | >20%                    |                10 |              0.06818 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6842 | >20%                    |                 5 |              0.13684 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6932 | <5%                     |                10 |              0.06932 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6985 | >20%                    |                10 |              0.06985 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7004 | 10-15%                  |                 5 |              0.14008 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7005 | >20%                    |                 5 |              0.1401  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7262 | 15-20%                  |                10 |              0.07262 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7279 | 5-10%                   |                 5 |              0.14558 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7285 | 15-20%                  |                 2 |              0.36425 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7288 | <5%                     |                 2 |              0.3644  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.736  | 10-15%                  |                10 |              0.0736  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7373 | 10-15%                  |                10 |              0.07373 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7375 | 5-10%                   |                 2 |              0.36875 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7383 | <5%                     |                10 |              0.07383 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7528 | 5-10%                   |                 5 |              0.15056 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7636 | >20%                    |                 5 |              0.15272 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7783 | 10-15%                  |                10 |              0.07783 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7862 | >20%                    |                10 |              0.07862 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.8021 | >20%                    |                 5 |              0.16042 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8044 | >20%                    |                 5 |              0.16088 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8063 | 15-20%                  |                10 |              0.08063 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8072 | 5-10%                   |                10 |              0.08072 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8115 | 5-10%                   |                10 |              0.08115 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8117 | 5-10%                   |                10 |              0.08117 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8288 | 15-20%                  |                10 |              0.08288 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8562 | 10-15%                  |                10 |              0.08562 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.86   | <5%                     |                10 |              0.086   |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8699 | 5-10%                   |                10 |              0.08699 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8777 | >20%                    |                10 |              0.08777 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8827 | 5-10%                   |                10 |              0.08827 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8921 | <5%                     |                10 |              0.08921 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9004 | <5%                     |                10 |              0.09004 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9163 | <5%                     |                10 |              0.09163 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9349 | <5%                     |                10 |              0.09349 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9588 | 10-15%                  |                10 |              0.09588 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9611 | 5-10%                   |                 5 |              0.19222 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9687 | <5%                     |                10 |              0.09687 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9771 | 5-10%                   |                 2 |              0.48855 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0111 | >20%                    |                10 |              0.10111 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0181 | <5%                     |                10 |              0.10181 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0252 | 5-10%                   |                10 |              0.10252 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.028  | <5%                     |                10 |              0.1028  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0329 | 10-15%                  |                 5 |              0.20658 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0954 | 15-20%                  |                10 |              0.10954 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1076 | 5-10%                   |                 5 |              0.22152 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1281 | 15-20%                  |                 2 |              0.56405 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1678 | 10-15%                  |                10 |              0.11678 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2486 | >20%                    |                10 |              0.12486 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2581 | 10-15%                  |                10 |              0.12581 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4481 | 5-10%                   |                10 |              0.14481 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4561 | 10-15%                  |                10 |              0.14561 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5119 | 5-10%                   |                10 |              0.15119 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5324 | 15-20%                  |                 5 |              0.30648 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0464 | 10-15%                  |                10 |              0.20464 |