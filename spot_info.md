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

Data correct as of 2026-07-13 03:25:16.244167, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1315 | >20%                    |                 2 |              0.06575 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1429 | >20%                    |                 2 |              0.07145 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.164  | >20%                    |                 2 |              0.082   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2303 | 15-20%                  |                 2 |              0.11515 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.249  | >20%                    |                 2 |              0.1245  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2513 | >20%                    |                 2 |              0.12565 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2525 | >20%                    |                 2 |              0.12625 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2562 | >20%                    |                 2 |              0.1281  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2591 | >20%                    |                 2 |              0.12955 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2612 | >20%                    |                 2 |              0.1306  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2712 | 15-20%                  |                 2 |              0.1356  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2712 | >20%                    |                 2 |              0.1356  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2878 | 15-20%                  |                 5 |              0.05756 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2885 | >20%                    |                 5 |              0.0577  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.293  | 10-15%                  |                 2 |              0.1465  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3016 | >20%                    |                 2 |              0.1508  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3025 | >20%                    |                 2 |              0.15125 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3052 | 5-10%                   |                10 |              0.03052 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3123 | 15-20%                  |                 2 |              0.15615 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.323  | >20%                    |                 5 |              0.0646  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3468 | >20%                    |                 2 |              0.1734  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3504 | >20%                    |                 5 |              0.07008 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.352  | 15-20%                  |                 5 |              0.0704  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3526 | >20%                    |                 5 |              0.07052 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3566 | 15-20%                  |                 5 |              0.07132 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3599 | <5%                     |                 2 |              0.17995 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3654 | >20%                    |                10 |              0.03654 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3716 | >20%                    |                 2 |              0.1858  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3746 | 5-10%                   |                10 |              0.03746 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3747 | >20%                    |                 5 |              0.07494 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3795 | >20%                    |                 5 |              0.0759  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3811 | >20%                    |                 5 |              0.07622 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3922 | 5-10%                   |                10 |              0.03922 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3924 | 10-15%                  |                 2 |              0.1962  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4167 | 10-15%                  |                 2 |              0.20835 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4236 | >20%                    |                 2 |              0.2118  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.424  | >20%                    |                 2 |              0.212   |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4252 | >20%                    |                 2 |              0.2126  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4294 | >20%                    |                10 |              0.04294 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4322 | >20%                    |                 5 |              0.08644 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.435  | 15-20%                  |                 2 |              0.2175  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4353 | 10-15%                  |                 2 |              0.21765 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4379 | >20%                    |                10 |              0.04379 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4398 | <5%                     |                 2 |              0.2199  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4426 | >20%                    |                 5 |              0.08852 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4509 | >20%                    |                10 |              0.04509 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4538 | >20%                    |                 2 |              0.2269  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4657 | >20%                    |                 5 |              0.09314 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.472  | <5%                     |                 2 |              0.236   |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4722 | >20%                    |                 5 |              0.09444 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4747 | >20%                    |                 5 |              0.09494 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4755 | >20%                    |                 2 |              0.23775 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4991 | >20%                    |                 5 |              0.09982 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4993 | >20%                    |                 5 |              0.09986 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5086 | >20%                    |                 5 |              0.10172 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5096 | 15-20%                  |                 2 |              0.2548  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5132 | >20%                    |                 5 |              0.10264 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5175 | 15-20%                  |                 2 |              0.25875 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5227 | >20%                    |                 2 |              0.26135 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5265 | >20%                    |                 2 |              0.26325 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5319 | >20%                    |                 5 |              0.10638 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5439 | >20%                    |                 5 |              0.10878 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5441 | >20%                    |                 2 |              0.27205 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5543 | >20%                    |                 5 |              0.11086 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5568 | 5-10%                   |                 2 |              0.2784  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5593 | >20%                    |                10 |              0.05593 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.5619 |                         |                 2 |              0.28095 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5694 | 5-10%                   |                 5 |              0.11388 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5761 | 10-15%                  |                 5 |              0.11522 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.578  | >20%                    |                10 |              0.0578  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5853 | >20%                    |                 5 |              0.11706 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5877 | 15-20%                  |                 5 |              0.11754 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5926 | >20%                    |                 5 |              0.11852 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5936 | >20%                    |                 5 |              0.11872 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5951 | >20%                    |                10 |              0.05951 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.596  | >20%                    |                 2 |              0.298   |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6088 | >20%                    |                10 |              0.06088 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6104 | >20%                    |                 5 |              0.12208 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.618  | <5%                     |                 5 |              0.1236  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6205 | >20%                    |                 2 |              0.31025 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.628  | >20%                    |                10 |              0.0628  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6555 | >20%                    |                 5 |              0.1311  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6573 | >20%                    |                10 |              0.06573 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6607 | 10-15%                  |                10 |              0.06607 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6627 | >20%                    |                10 |              0.06627 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6664 | >20%                    |                10 |              0.06664 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6793 | >20%                    |                 5 |              0.13586 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6845 | >20%                    |                 5 |              0.1369  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6846 | >20%                    |                10 |              0.06846 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.7004 | >20%                    |                 2 |              0.3502  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7068 | >20%                    |                 2 |              0.3534  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.7088 | >20%                    |                 2 |              0.3544  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.71   | >20%                    |                 5 |              0.142   |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7173 | >20%                    |                10 |              0.07173 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7215 | >20%                    |                 2 |              0.36075 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.7234 |                         |                10 |              0.07234 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7288 |                         |                 2 |              0.3644  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7319 | 10-15%                  |                 2 |              0.36595 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7342 | >20%                    |                 5 |              0.14684 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.745  | >20%                    |                10 |              0.0745  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.75   | 15-20%                  |                10 |              0.075   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7796 | >20%                    |                 5 |              0.15592 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7863 | >20%                    |                 5 |              0.15726 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7877 | >20%                    |                10 |              0.07877 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.797  | >20%                    |                10 |              0.0797  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8055 | >20%                    |                 2 |              0.40275 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8159 | >20%                    |                10 |              0.08159 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.822  | 5-10%                   |                10 |              0.0822  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.826  | >20%                    |                10 |              0.0826  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8317 | <5%                     |                10 |              0.08317 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8454 | 5-10%                   |                 2 |              0.4227  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.85   | 10-15%                  |                 2 |              0.425   |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8501 | 15-20%                  |                10 |              0.08501 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8634 | >20%                    |                10 |              0.08634 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8682 | 15-20%                  |                10 |              0.08682 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8774 | 5-10%                   |                10 |              0.08774 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8818 | >20%                    |                 5 |              0.17636 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8844 | >20%                    |                10 |              0.08844 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8927 | >20%                    |                 5 |              0.17854 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.919  | 15-20%                  |                10 |              0.0919  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9387 | >20%                    |                 5 |              0.18774 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9491 | >20%                    |                10 |              0.09491 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9556 |                         |                 5 |              0.19112 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9609 | 5-10%                   |                 5 |              0.19218 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.969  | >20%                    |                 5 |              0.1938  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9712 | >20%                    |                 5 |              0.19424 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9814 | >20%                    |                10 |              0.09814 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9997 | >20%                    |                10 |              0.09997 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.0163 | >20%                    |                 5 |              0.20326 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0183 | >20%                    |                10 |              0.10183 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0346 | 15-20%                  |                10 |              0.10346 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0365 | >20%                    |                 5 |              0.2073  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.058  | 15-20%                  |                10 |              0.1058  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0734 | >20%                    |                 5 |              0.21468 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.078  | >20%                    |                 2 |              0.539   |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.079  | 10-15%                  |                 2 |              0.5395  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0961 | >20%                    |                10 |              0.10961 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1056 | >20%                    |                10 |              0.11056 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1386 | 5-10%                   |                10 |              0.11386 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2465 |                         |                 5 |              0.2493  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.25   |                         |                10 |              0.125   |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2566 | >20%                    |                10 |              0.12566 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.299  | >20%                    |                 5 |              0.2598  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3257 | 15-20%                  |                10 |              0.13257 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.3339 | >20%                    |                 5 |              0.26678 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4211 | 15-20%                  |                10 |              0.14211 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4331 | >20%                    |                10 |              0.14331 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4537 | >20%                    |                10 |              0.14537 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4737 | >20%                    |                 5 |              0.29474 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5007 | >20%                    |                10 |              0.15007 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5037 | 15-20%                  |                 5 |              0.30074 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5069 | 10-15%                  |                10 |              0.15069 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9313 | 5-10%                   |                 2 |              0.96565 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      2.0304 | 5-10%                   |                 2 |              1.0152  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2298 | >20%                    |                10 |              0.22298 |