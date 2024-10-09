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

Data correct as of 2024-10-09 01:36:28.956674, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1087 | <5%                     |                 2 |              0.05435 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.137  | <5%                     |                 2 |              0.0685  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1853 | 15-20%                  |                 2 |              0.09265 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2064 | >20%                    |                 5 |              0.04128 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2065 | 10-15%                  |                 2 |              0.10325 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2072 | 15-20%                  |                 2 |              0.1036  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2111 | >20%                    |                 2 |              0.10555 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2138 | <5%                     |                 2 |              0.1069  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.217  | 10-15%                  |                 2 |              0.1085  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2276 | <5%                     |                 2 |              0.1138  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2338 | >20%                    |                 2 |              0.1169  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2414 | <5%                     |                 2 |              0.1207  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.2523 | <5%                     |                 2 |              0.12615 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2648 | <5%                     |                 2 |              0.1324  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.27   | 15-20%                  |                 5 |              0.054   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | >20%                    |                 5 |              0.0552  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2765 | <5%                     |                 2 |              0.13825 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2767 | 5-10%                   |                 5 |              0.05534 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2782 | 5-10%                   |                 2 |              0.1391  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2852 | <5%                     |                 2 |              0.1426  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2859 | 15-20%                  |                 2 |              0.14295 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2871 | <5%                     |                 2 |              0.14355 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2879 | 5-10%                   |                 5 |              0.05758 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2888 | >20%                    |                 5 |              0.05776 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2985 | 15-20%                  |                10 |              0.02985 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.302  | <5%                     |                10 |              0.0302  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3092 | >20%                    |                 5 |              0.06184 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3202 | 15-20%                  |                 2 |              0.1601  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.3213 | 5-10%                   |                 5 |              0.06426 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3218 | >20%                    |                 5 |              0.06436 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3241 | 15-20%                  |                 2 |              0.16205 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3358 | >20%                    |                 2 |              0.1679  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3415 | <5%                     |                 2 |              0.17075 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3438 | >20%                    |                 5 |              0.06876 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3546 | 5-10%                   |                 5 |              0.07092 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3552 | <5%                     |                 2 |              0.1776  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3617 | <5%                     |                 5 |              0.07234 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3805 | >20%                    |                 5 |              0.0761  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.389  | 5-10%                   |                 2 |              0.1945  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3918 | <5%                     |                 5 |              0.07836 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3926 | >20%                    |                10 |              0.03926 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3943 | >20%                    |                 2 |              0.19715 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.405  | 5-10%                   |                10 |              0.0405  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4144 | 5-10%                   |                 2 |              0.2072  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.4149 | 5-10%                   |                 5 |              0.08298 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4159 | >20%                    |                 2 |              0.20795 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4206 | <5%                     |                 2 |              0.2103  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4248 | <5%                     |                 5 |              0.08496 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4275 | <5%                     |                 2 |              0.21375 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4278 | 5-10%                   |                10 |              0.04278 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4342 | 5-10%                   |                10 |              0.04342 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4355 | 10-15%                  |                 5 |              0.0871  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4382 | 15-20%                  |                 5 |              0.08764 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4431 | >20%                    |                 2 |              0.22155 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4432 | 5-10%                   |                 2 |              0.2216  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4539 | 15-20%                  |                10 |              0.04539 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4541 | 5-10%                   |                10 |              0.04541 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4578 | 15-20%                  |                 2 |              0.2289  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4582 | 10-15%                  |                 5 |              0.09164 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.4608 | >20%                    |                10 |              0.04608 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.465  | >20%                    |                 2 |              0.2325  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4665 | >20%                    |                 2 |              0.23325 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4674 | <5%                     |                 5 |              0.09348 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.47   | <5%                     |                 5 |              0.094   |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4907 | <5%                     |                 5 |              0.09814 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4928 | >20%                    |                 2 |              0.2464  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4961 | 10-15%                  |                 5 |              0.09922 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4982 | 15-20%                  |                 5 |              0.09964 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5022 | <5%                     |                 5 |              0.10044 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5066 | >20%                    |                 2 |              0.2533  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5117 | <5%                     |                 5 |              0.10234 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5134 | <5%                     |                 5 |              0.10268 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5214 | <5%                     |                 5 |              0.10428 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.5217 | <5%                     |                10 |              0.05217 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5501 | >20%                    |                 5 |              0.11002 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.594  | 15-20%                  |                 5 |              0.1188  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.596  | >20%                    |                 5 |              0.1192  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5997 | >20%                    |                 2 |              0.29985 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6037 | >20%                    |                 5 |              0.12074 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6135 | >20%                    |                 5 |              0.1227  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6306 | 15-20%                  |                 5 |              0.12612 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6433 | >20%                    |                 5 |              0.12866 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6472 | 5-10%                   |                 5 |              0.12944 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6523 | <5%                     |                10 |              0.06523 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6556 | >20%                    |                10 |              0.06556 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6581 | <5%                     |                10 |              0.06581 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.6726 | 15-20%                  |                10 |              0.06726 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6876 | >20%                    |                 2 |              0.3438  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6936 | >20%                    |                10 |              0.06936 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6964 | <5%                     |                10 |              0.06964 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7029 | 5-10%                   |                10 |              0.07029 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7222 | 15-20%                  |                10 |              0.07222 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7461 | >20%                    |                 5 |              0.14922 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7655 | >20%                    |                10 |              0.07655 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7723 | 15-20%                  |                10 |              0.07723 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7757 | 10-15%                  |                10 |              0.07757 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7835 | 15-20%                  |                10 |              0.07835 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7854 | 5-10%                   |                10 |              0.07854 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7859 | 10-15%                  |                 5 |              0.15718 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.794  | >20%                    |                 2 |              0.397   |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7998 | 5-10%                   |                10 |              0.07998 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8393 | >20%                    |                10 |              0.08393 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.8404 | <5%                     |                10 |              0.08404 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8697 | <5%                     |                10 |              0.08697 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8787 | >20%                    |                 5 |              0.17574 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.896  | >20%                    |                10 |              0.0896  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9005 | <5%                     |                 2 |              0.45025 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9064 | >20%                    |                10 |              0.09064 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9096 | 10-15%                  |                10 |              0.09096 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.924  | <5%                     |                10 |              0.0924  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9623 | 5-10%                   |                10 |              0.09623 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9727 | 10-15%                  |                 2 |              0.48635 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9932 | 10-15%                  |                 5 |              0.19864 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0141 | <5%                     |                10 |              0.10141 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0156 | >20%                    |                10 |              0.10156 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0302 | >20%                    |                10 |              0.10302 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1062 | >20%                    |                10 |              0.11062 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1128 | >20%                    |                 5 |              0.22256 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1728 | >20%                    |                10 |              0.11728 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.5091 | >20%                    |                10 |              0.15091 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5341 | 5-10%                   |                10 |              0.15341 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5774 | 5-10%                   |                10 |              0.15774 |