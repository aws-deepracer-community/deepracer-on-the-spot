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

Data correct as of 2024-09-22 01:41:49.888820, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0933 | <5%                     |                 2 |              0.04665 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1686 | 5-10%                   |                 2 |              0.0843  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2095 | 15-20%                  |                 2 |              0.10475 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2205 | <5%                     |                 2 |              0.11025 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2341 | 5-10%                   |                 2 |              0.11705 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2359 | 15-20%                  |                 2 |              0.11795 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2396 | <5%                     |                 2 |              0.1198  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2521 | 15-20%                  |                 5 |              0.05042 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2603 | <5%                     |                 2 |              0.13015 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.269  | >20%                    |                10 |              0.0269  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2748 | <5%                     |                 2 |              0.1374  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.2764 | <5%                     |                 5 |              0.05528 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2798 | 10-15%                  |                 2 |              0.1399  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2858 | <5%                     |                 2 |              0.1429  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2907 | <5%                     |                 2 |              0.14535 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.291  | 15-20%                  |                 5 |              0.0582  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3025 | <5%                     |                 2 |              0.15125 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3066 | >20%                    |                 5 |              0.06132 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3085 | 5-10%                   |                 2 |              0.15425 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3186 | <5%                     |                 2 |              0.1593  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.34   | <5%                     |                 5 |              0.068   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3516 | 5-10%                   |                 5 |              0.07032 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3559 | <5%                     |                 2 |              0.17795 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3629 | 10-15%                  |                 2 |              0.18145 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3654 | <5%                     |                 2 |              0.1827  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3746 | <5%                     |                 2 |              0.1873  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3753 | <5%                     |                 5 |              0.07506 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3784 | <5%                     |                 5 |              0.07568 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3822 | 15-20%                  |                10 |              0.03822 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3869 | >20%                    |                 2 |              0.19345 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3882 | <5%                     |                10 |              0.03882 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3935 | <5%                     |                 2 |              0.19675 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3968 | >20%                    |                 2 |              0.1984  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4005 | <5%                     |                10 |              0.04005 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.406  | >20%                    |                 2 |              0.203   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4067 | 5-10%                   |                 2 |              0.20335 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4107 | 15-20%                  |                 5 |              0.08214 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4154 | 5-10%                   |                 5 |              0.08308 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4229 | <5%                     |                 2 |              0.21145 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4399 | <5%                     |                 2 |              0.21995 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4409 | >20%                    |                 5 |              0.08818 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4447 | <5%                     |                 5 |              0.08894 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4465 | >20%                    |                 2 |              0.22325 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.4484 | >20%                    |                 5 |              0.08968 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4484 | 10-15%                  |                 2 |              0.2242  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.452  | 5-10%                   |                 5 |              0.0904  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4554 | <5%                     |                 5 |              0.09108 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4717 | <5%                     |                 5 |              0.09434 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4733 | 5-10%                   |                 5 |              0.09466 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4763 | 5-10%                   |                 5 |              0.09526 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4953 | 15-20%                  |                 5 |              0.09906 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5023 | 15-20%                  |                 2 |              0.25115 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5041 | >20%                    |                 2 |              0.25205 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5048 | 10-15%                  |                 5 |              0.10096 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5142 | <5%                     |                 5 |              0.10284 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5353 | <5%                     |                 5 |              0.10706 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.5392 | <5%                     |                10 |              0.05392 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5414 | 10-15%                  |                10 |              0.05414 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.549  | <5%                     |                 5 |              0.1098  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5515 | <5%                     |                 5 |              0.1103  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5667 | >20%                    |                 5 |              0.11334 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5772 | >20%                    |                 2 |              0.2886  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5796 | 15-20%                  |                 2 |              0.2898  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5919 | >20%                    |                 5 |              0.11838 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5957 | 5-10%                   |                 5 |              0.11914 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5962 | >20%                    |                 5 |              0.11924 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6025 | >20%                    |                 5 |              0.1205  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6178 | 5-10%                   |                10 |              0.06178 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6197 | >20%                    |                10 |              0.06197 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6203 | 15-20%                  |                 2 |              0.31015 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6225 | >20%                    |                10 |              0.06225 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6256 | >20%                    |                10 |              0.06256 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6317 | >20%                    |                 5 |              0.12634 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6562 | <5%                     |                10 |              0.06562 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6709 | 5-10%                   |                 5 |              0.13418 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6747 | <5%                     |                10 |              0.06747 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7015 | >20%                    |                 2 |              0.35075 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7475 | 15-20%                  |                10 |              0.07475 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7486 | >20%                    |                 5 |              0.14972 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7665 | <5%                     |                10 |              0.07665 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7772 | >20%                    |                 5 |              0.15544 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7785 | 10-15%                  |                10 |              0.07785 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7858 | >20%                    |                10 |              0.07858 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8003 | >20%                    |                10 |              0.08003 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8098 | 10-15%                  |                10 |              0.08098 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8137 | >20%                    |                10 |              0.08137 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8218 | 15-20%                  |                10 |              0.08218 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8675 | <5%                     |                 2 |              0.43375 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8797 | 5-10%                   |                 5 |              0.17594 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8837 | <5%                     |                10 |              0.08837 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8889 | >20%                    |                10 |              0.08889 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9094 | <5%                     |                10 |              0.09094 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.9318 | >20%                    |                 5 |              0.18636 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9334 | >20%                    |                 5 |              0.18668 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9381 | 5-10%                   |                10 |              0.09381 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9396 | 5-10%                   |                 2 |              0.4698  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9432 | >20%                    |                10 |              0.09432 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9587 | >20%                    |                10 |              0.09587 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9995 | 5-10%                   |                10 |              0.09995 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0273 | 10-15%                  |                10 |              0.10273 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0289 | <5%                     |                 2 |              0.51445 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0451 | >20%                    |                10 |              0.10451 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0898 | >20%                    |                10 |              0.10898 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.092  | >20%                    |                10 |              0.1092  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0933 | 10-15%                  |                 5 |              0.21866 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1548 | 5-10%                   |                10 |              0.11548 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2158 | 15-20%                  |                10 |              0.12158 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.229  | >20%                    |                10 |              0.1229  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4506 | >20%                    |                10 |              0.14506 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6714 | 5-10%                   |                10 |              0.16714 |