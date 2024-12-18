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

Data correct as of 2024-12-18 01:42:32.049125, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1978 | 15-20%                  |                 2 |              0.0989  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.1995 | >20%                    |                 2 |              0.09975 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2143 | 15-20%                  |                 2 |              0.10715 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2157 | 15-20%                  |                 2 |              0.10785 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2354 | 5-10%                   |                 2 |              0.1177  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2357 | 15-20%                  |                 2 |              0.11785 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2394 | >20%                    |                 2 |              0.1197  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2496 | 15-20%                  |                 5 |              0.04992 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2535 | 5-10%                   |                 2 |              0.12675 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2548 | >20%                    |                 5 |              0.05096 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2623 | 5-10%                   |                 5 |              0.05246 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2641 | 15-20%                  |                10 |              0.02641 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2795 | <5%                     |                 2 |              0.13975 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2806 | 10-15%                  |                 2 |              0.1403  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2856 | <5%                     |                 2 |              0.1428  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.286  | 5-10%                   |                 2 |              0.143   |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2891 | 5-10%                   |                 2 |              0.14455 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3051 | <5%                     |                 2 |              0.15255 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3084 | <5%                     |                 5 |              0.06168 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3094 | <5%                     |                 2 |              0.1547  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3113 | >20%                    |                 2 |              0.15565 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3118 | 10-15%                  |                 2 |              0.1559  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.3299 | <5%                     |                 2 |              0.16495 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3359 | <5%                     |                 5 |              0.06718 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3375 | 10-15%                  |                 5 |              0.0675  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3396 | <5%                     |                 2 |              0.1698  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.345  | >20%                    |                 2 |              0.1725  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3519 | >20%                    |                 5 |              0.07038 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3523 | 10-15%                  |                 2 |              0.17615 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3524 | >20%                    |                 2 |              0.1762  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3527 | 10-15%                  |                 2 |              0.17635 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3638 | 5-10%                   |                 2 |              0.1819  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3676 | <5%                     |                 5 |              0.07352 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3746 | 15-20%                  |                 2 |              0.1873  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.376  | 5-10%                   |                10 |              0.0376  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3796 | >20%                    |                 2 |              0.1898  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.384  | >20%                    |                 5 |              0.0768  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3864 | 10-15%                  |                10 |              0.03864 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3875 | <5%                     |                 5 |              0.0775  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3973 | 5-10%                   |                 2 |              0.19865 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4011 | >20%                    |                10 |              0.04011 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4056 | >20%                    |                 2 |              0.2028  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.4077 | <5%                     |                 5 |              0.08154 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4088 | >20%                    |                 5 |              0.08176 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4125 | 5-10%                   |                 2 |              0.20625 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4182 | 5-10%                   |                 5 |              0.08364 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4221 | 5-10%                   |                 5 |              0.08442 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.423  | 15-20%                  |                 2 |              0.2115  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4235 | 5-10%                   |                 2 |              0.21175 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4304 | <5%                     |                 2 |              0.2152  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4305 | 5-10%                   |                 5 |              0.0861  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4323 | 15-20%                  |                10 |              0.04323 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4326 | 5-10%                   |                 5 |              0.08652 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4446 | 5-10%                   |                 2 |              0.2223  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4465 | >20%                    |                 5 |              0.0893  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4558 | <5%                     |                 5 |              0.09116 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4583 | >20%                    |                 5 |              0.09166 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4586 | 5-10%                   |                 5 |              0.09172 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4595 | 5-10%                   |                 2 |              0.22975 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4629 | 10-15%                  |                 2 |              0.23145 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.466  | >20%                    |                10 |              0.0466  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4669 | >20%                    |                 2 |              0.23345 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4706 | <5%                     |                 5 |              0.09412 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4707 | <5%                     |                 2 |              0.23535 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4736 | 10-15%                  |                 2 |              0.2368  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4764 | 15-20%                  |                 2 |              0.2382  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4807 | 10-15%                  |                 2 |              0.24035 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4814 | 10-15%                  |                 5 |              0.09628 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4818 | >20%                    |                 5 |              0.09636 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4834 | >20%                    |                 5 |              0.09668 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4938 | >20%                    |                 5 |              0.09876 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4985 | <5%                     |                 5 |              0.0997  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.499  | >20%                    |                 5 |              0.0998  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5022 | <5%                     |                 5 |              0.10044 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5027 | >20%                    |                 5 |              0.10054 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.5117 | 10-15%                  |                 2 |              0.25585 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5131 | 5-10%                   |                10 |              0.05131 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5172 | <5%                     |                 5 |              0.10344 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5343 | 5-10%                   |                 5 |              0.10686 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.543  | 10-15%                  |                 5 |              0.1086  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5445 | >20%                    |                 5 |              0.1089  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5578 | 15-20%                  |                 5 |              0.11156 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5604 | >20%                    |                10 |              0.05604 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5658 | >20%                    |                10 |              0.05658 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5668 | >20%                    |                 2 |              0.2834  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5801 | <5%                     |                 5 |              0.11602 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.6038 | 5-10%                   |                 5 |              0.12076 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6122 | >20%                    |                10 |              0.06122 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6271 | 5-10%                   |                10 |              0.06271 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.6322 | <5%                     |                10 |              0.06322 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6332 | <5%                     |                10 |              0.06332 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6414 | 10-15%                  |                10 |              0.06414 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.649  | 15-20%                  |                 5 |              0.1298  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6559 | 5-10%                   |                10 |              0.06559 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6588 | 5-10%                   |                10 |              0.06588 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6637 | 5-10%                   |                 5 |              0.13274 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.6768 | 5-10%                   |                 2 |              0.3384  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6876 | 15-20%                  |                 5 |              0.13752 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6888 | >20%                    |                10 |              0.06888 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6906 | <5%                     |                 5 |              0.13812 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6991 | 10-15%                  |                10 |              0.06991 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7017 | >20%                    |                 2 |              0.35085 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7213 | <5%                     |                 2 |              0.36065 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7221 | >20%                    |                 5 |              0.14442 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7431 | >20%                    |                 5 |              0.14862 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7546 | >20%                    |                 5 |              0.15092 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.7604 | >20%                    |                10 |              0.07604 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7625 | >20%                    |                10 |              0.07625 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7763 | 15-20%                  |                10 |              0.07763 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7818 | 5-10%                   |                10 |              0.07818 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7985 | 5-10%                   |                10 |              0.07985 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8071 | 15-20%                  |                10 |              0.08071 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8143 | <5%                     |                10 |              0.08143 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.823  | 5-10%                   |                10 |              0.0823  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8291 | 10-15%                  |                10 |              0.08291 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8371 | 10-15%                  |                10 |              0.08371 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8434 | <5%                     |                 5 |              0.16868 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8483 | 5-10%                   |                 2 |              0.42415 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8497 | <5%                     |                10 |              0.08497 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8518 | 10-15%                  |                10 |              0.08518 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8665 | <5%                     |                10 |              0.08665 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9072 | 5-10%                   |                10 |              0.09072 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9232 | >20%                    |                10 |              0.09232 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9287 | 5-10%                   |                 5 |              0.18574 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9422 | 15-20%                  |                10 |              0.09422 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9615 | >20%                    |                10 |              0.09615 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.9624 | <5%                     |                10 |              0.09624 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9769 | <5%                     |                10 |              0.09769 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9773 | 5-10%                   |                10 |              0.09773 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9945 | 5-10%                   |                10 |              0.09945 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.071  | >20%                    |                10 |              0.1071  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0923 | <5%                     |                10 |              0.10923 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1724 | >20%                    |                10 |              0.11724 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2119 | >20%                    |                10 |              0.12119 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3776 | 5-10%                   |                10 |              0.13776 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.419  | 5-10%                   |                 5 |              0.2838  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8921 | 10-15%                  |                10 |              0.18921 |