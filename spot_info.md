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

Data correct as of 2026-10-20 04:11:07.671670, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0843 | >20%                    |                 2 |              0.04215 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1378 | 15-20%                  |                 2 |              0.0689  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1382 | >20%                    |                 2 |              0.0691  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1408 | 15-20%                  |                 5 |              0.02816 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1746 | >20%                    |                 5 |              0.03492 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1893 | 10-15%                  |                 2 |              0.09465 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2007 | >20%                    |                 2 |              0.10035 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2482 | >20%                    |                 2 |              0.1241  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.2504 | >20%                    |                 2 |              0.1252  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2666 | >20%                    |                 2 |              0.1333  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2779 | >20%                    |                 5 |              0.05558 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2813 | >20%                    |                 2 |              0.14065 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2831 | >20%                    |                 5 |              0.05662 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3017 | >20%                    |                 2 |              0.15085 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3061 | >20%                    |                 2 |              0.15305 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3108 | >20%                    |                 2 |              0.1554  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3191 | 15-20%                  |                 2 |              0.15955 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3287 | >20%                    |                 2 |              0.16435 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3337 | >20%                    |                10 |              0.03337 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3587 | >20%                    |                10 |              0.03587 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3601 | >20%                    |                 2 |              0.18005 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3645 | >20%                    |                 5 |              0.0729  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3655 | 10-15%                  |                 2 |              0.18275 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3674 | 15-20%                  |                 2 |              0.1837  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3725 | 15-20%                  |                 2 |              0.18625 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3732 | >20%                    |                 5 |              0.07464 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3899 | >20%                    |                 5 |              0.07798 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3907 | >20%                    |                 5 |              0.07814 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3934 | <5%                     |                 2 |              0.1967  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4182 | >20%                    |                 2 |              0.2091  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4193 | >20%                    |                10 |              0.04193 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4203 | >20%                    |                 5 |              0.08406 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.422  | >20%                    |                 5 |              0.0844  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4285 | >20%                    |                 2 |              0.21425 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.433  | >20%                    |                 2 |              0.2165  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4375 | >20%                    |                 5 |              0.0875  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4526 | >20%                    |                 2 |              0.2263  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4612 | >20%                    |                 5 |              0.09224 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4698 | >20%                    |                 5 |              0.09396 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4731 | <5%                     |                10 |              0.04731 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4743 | >20%                    |                 5 |              0.09486 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4791 | 10-15%                  |                 2 |              0.23955 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4813 | 5-10%                   |                10 |              0.04813 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.491  | >20%                    |                 2 |              0.2455  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4957 | >20%                    |                 5 |              0.09914 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.496  | 5-10%                   |                10 |              0.0496  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5014 | >20%                    |                 5 |              0.10028 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5026 | >20%                    |                 2 |              0.2513  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5069 | >20%                    |                 2 |              0.25345 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.5201 |                         |                10 |              0.05201 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.5202 |                         |                 2 |              0.2601  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5242 | 15-20%                  |                 2 |              0.2621  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5478 | >20%                    |                 2 |              0.2739  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5653 | >20%                    |                 2 |              0.28265 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5786 | >20%                    |                 5 |              0.11572 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.579  | >20%                    |                 5 |              0.1158  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5851 | >20%                    |                10 |              0.05851 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.586  | 10-15%                  |                 5 |              0.1172  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5864 | >20%                    |                 5 |              0.11728 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5963 | >20%                    |                10 |              0.05963 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5972 | >20%                    |                 2 |              0.2986  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6109 | >20%                    |                 2 |              0.30545 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6166 | 10-15%                  |                 2 |              0.3083  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6197 | >20%                    |                 5 |              0.12394 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6419 | <5%                     |                 2 |              0.32095 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6451 | >20%                    |                10 |              0.06451 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6464 | >20%                    |                 5 |              0.12928 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6623 | >20%                    |                 5 |              0.13246 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.665  | 5-10%                   |                 2 |              0.3325  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.676  | >20%                    |                 5 |              0.1352  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6782 | <5%                     |                 2 |              0.3391  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6886 | >20%                    |                 2 |              0.3443  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7037 | >20%                    |                 5 |              0.14074 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7141 | 15-20%                  |                 2 |              0.35705 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7158 | >20%                    |                 5 |              0.14316 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7339 | 15-20%                  |                 5 |              0.14678 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7451 | >20%                    |                 5 |              0.14902 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7453 | >20%                    |                 5 |              0.14906 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7525 | >20%                    |                 5 |              0.1505  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7578 | >20%                    |                10 |              0.07578 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7596 | >20%                    |                 5 |              0.15192 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7626 | >20%                    |                10 |              0.07626 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.765  | 15-20%                  |                10 |              0.0765  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7766 | >20%                    |                10 |              0.07766 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7958 | 15-20%                  |                10 |              0.07958 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7968 | 15-20%                  |                10 |              0.07968 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8052 | 10-15%                  |                10 |              0.08052 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8221 | 5-10%                   |                10 |              0.08221 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8273 | >20%                    |                 5 |              0.16546 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8441 | >20%                    |                 5 |              0.16882 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8444 | >20%                    |                 2 |              0.4222  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8519 | 15-20%                  |                 5 |              0.17038 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8521 | 10-15%                  |                 2 |              0.42605 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8672 | 10-15%                  |                 2 |              0.4336  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8691 | >20%                    |                 5 |              0.17382 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.88   | >20%                    |                10 |              0.088   |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.882  | >20%                    |                10 |              0.0882  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8974 | >20%                    |                10 |              0.08974 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9    | >20%                    |                 5 |              0.18    |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9017 | >20%                    |                10 |              0.09017 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9111 | <5%                     |                 5 |              0.18222 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.919  | 5-10%                   |                 5 |              0.1838  |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.9496 |                         |                 5 |              0.18992 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9531 | >20%                    |                10 |              0.09531 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9578 | >20%                    |                10 |              0.09578 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9587 | >20%                    |                 5 |              0.19174 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9601 | >20%                    |                10 |              0.09601 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9874 | >20%                    |                10 |              0.09874 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9893 | 15-20%                  |                10 |              0.09893 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0034 | 15-20%                  |                10 |              0.10034 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0049 | >20%                    |                 2 |              0.50245 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0165 | >20%                    |                 5 |              0.2033  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.028  | >20%                    |                10 |              0.1028  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0323 | >20%                    |                10 |              0.10323 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0895 | >20%                    |                10 |              0.10895 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0993 | 15-20%                  |                10 |              0.10993 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1059 | >20%                    |                 5 |              0.22118 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.1137 | >20%                    |                10 |              0.11137 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1178 | 5-10%                   |                10 |              0.11178 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1943 | >20%                    |                10 |              0.11943 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.2016 | >20%                    |                 5 |              0.24032 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2057 | >20%                    |                10 |              0.12057 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.3299 | >20%                    |                 5 |              0.26598 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3457 | >20%                    |                 2 |              0.67285 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3606 | 15-20%                  |                10 |              0.13606 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3712 | >20%                    |                10 |              0.13712 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.372  | 10-15%                  |                10 |              0.1372  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3925 | >20%                    |                 2 |              0.69625 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.4104 |                         |                 5 |              0.28208 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4468 | >20%                    |                10 |              0.14468 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4573 | 5-10%                   |                 2 |              0.72865 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4798 | >20%                    |                10 |              0.14798 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4896 | 5-10%                   |                 5 |              0.29792 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4898 | 10-15%                  |                 2 |              0.7449  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      1.507  | >20%                    |                 2 |              0.7535  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.5229 |                         |                 2 |              0.76145 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5368 | >20%                    |                10 |              0.15368 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.5456 |                         |                 2 |              0.7728  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5516 | >20%                    |                 5 |              0.31032 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.576  | >20%                    |                10 |              0.1576  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5944 | >20%                    |                 2 |              0.7972  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.6088 | 5-10%                   |                 2 |              0.8044  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6356 | >20%                    |                10 |              0.16356 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6788 |                         |                10 |              0.16788 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7304 | >20%                    |                 5 |              0.34608 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.7893 | >20%                    |                10 |              0.17893 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7983 | 15-20%                  |                10 |              0.17983 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.9738 |                         |                 5 |              0.39476 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.092  | 15-20%                  |                 5 |              0.4184  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2131 | 5-10%                   |                10 |              0.22131 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2141 | 5-10%                   |                 2 |              1.10705 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.2569 | >20%                    |                 5 |              0.45138 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.2773 |                         |                10 |              0.22773 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5745 | >20%                    |                10 |              0.25745 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0669 | >20%                    |                10 |              0.30669 |