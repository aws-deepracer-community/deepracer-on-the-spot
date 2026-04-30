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

Data correct as of 2026-04-30 03:36:40.098015, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1595 | 15-20%                  |                 2 |              0.07975 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1695 | >20%                    |                 2 |              0.08475 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1707 | >20%                    |                 2 |              0.08535 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2224 | 15-20%                  |                 5 |              0.04448 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2324 | >20%                    |                 2 |              0.1162  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2409 | >20%                    |                 2 |              0.12045 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2535 | 15-20%                  |                 2 |              0.12675 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2576 | >20%                    |                 2 |              0.1288  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2824 | >20%                    |                 2 |              0.1412  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2843 | 15-20%                  |                 5 |              0.05686 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2861 | >20%                    |                 5 |              0.05722 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2933 | >20%                    |                 2 |              0.14665 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2936 | 10-15%                  |                 2 |              0.1468  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2937 | 15-20%                  |                 5 |              0.05874 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2978 | 15-20%                  |                 2 |              0.1489  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.307  | 10-15%                  |                 2 |              0.1535  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3084 | >20%                    |                 2 |              0.1542  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3177 | >20%                    |                 2 |              0.15885 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3212 | >20%                    |                 5 |              0.06424 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3249 | 10-15%                  |                 2 |              0.16245 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3263 | >20%                    |                10 |              0.03263 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3292 | >20%                    |                 5 |              0.06584 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3369 | <5%                     |                 2 |              0.16845 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3519 | >20%                    |                 5 |              0.07038 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3593 | >20%                    |                 2 |              0.17965 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3613 | >20%                    |                 2 |              0.18065 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3667 | >20%                    |                 5 |              0.07334 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3674 | >20%                    |                 5 |              0.07348 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3685 | >20%                    |                 5 |              0.0737  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.37   | 5-10%                   |                10 |              0.037   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3704 | >20%                    |                 2 |              0.1852  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3903 | 10-15%                  |                 2 |              0.19515 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3913 | >20%                    |                 5 |              0.07826 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3945 | >20%                    |                 5 |              0.0789  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3952 | >20%                    |                 2 |              0.1976  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3958 | >20%                    |                 5 |              0.07916 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3967 | >20%                    |                 5 |              0.07934 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4021 | >20%                    |                10 |              0.04021 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4056 | 5-10%                   |                10 |              0.04056 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4059 | >20%                    |                 5 |              0.08118 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.411  | >20%                    |                 2 |              0.2055  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4176 | <5%                     |                 2 |              0.2088  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4255 | >20%                    |                 2 |              0.21275 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4261 | >20%                    |                 5 |              0.08522 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4346 | >20%                    |                 2 |              0.2173  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4371 | >20%                    |                 5 |              0.08742 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4411 | 5-10%                   |                 2 |              0.22055 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4412 | >20%                    |                 5 |              0.08824 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4427 | >20%                    |                10 |              0.04427 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4473 | <5%                     |                 2 |              0.22365 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4558 | >20%                    |                 5 |              0.09116 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4597 | >20%                    |                 5 |              0.09194 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4609 | 15-20%                  |                 2 |              0.23045 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4616 | >20%                    |                 2 |              0.2308  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4641 | >20%                    |                 2 |              0.23205 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4713 | >20%                    |                 5 |              0.09426 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4718 | >20%                    |                 5 |              0.09436 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4772 | 10-15%                  |                 2 |              0.2386  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4812 | >20%                    |                 5 |              0.09624 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4844 | >20%                    |                 5 |              0.09688 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4892 | 15-20%                  |                 2 |              0.2446  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4977 | >20%                    |                10 |              0.04977 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4988 | >20%                    |                 2 |              0.2494  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5186 | <5%                     |                 5 |              0.10372 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5272 | >20%                    |                 2 |              0.2636  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5308 | 5-10%                   |                 5 |              0.10616 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5335 | 15-20%                  |                 5 |              0.1067  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5488 | 5-10%                   |                 5 |              0.10976 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.554  | 10-15%                  |                 5 |              0.1108  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5685 | >20%                    |                 2 |              0.28425 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5694 | >20%                    |                 2 |              0.2847  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5723 | >20%                    |                10 |              0.05723 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5856 | >20%                    |                 2 |              0.2928  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5885 | >20%                    |                 5 |              0.1177  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.6008 | 15-20%                  |                 2 |              0.3004  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6213 | >20%                    |                10 |              0.06213 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6225 | 5-10%                   |                 2 |              0.31125 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6331 | >20%                    |                 2 |              0.31655 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6403 | >20%                    |                 5 |              0.12806 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6443 | >20%                    |                10 |              0.06443 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6467 | >20%                    |                10 |              0.06467 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.653  | >20%                    |                 2 |              0.3265  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6648 | 10-15%                  |                 2 |              0.3324  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6702 | >20%                    |                 5 |              0.13404 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.6728 | >20%                    |                10 |              0.06728 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6729 | 5-10%                   |                10 |              0.06729 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6752 | >20%                    |                 5 |              0.13504 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6793 | >20%                    |                 5 |              0.13586 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6921 | >20%                    |                10 |              0.06921 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6954 | >20%                    |                10 |              0.06954 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6961 | >20%                    |                 2 |              0.34805 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6964 | >20%                    |                10 |              0.06964 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7011 | >20%                    |                 5 |              0.14022 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7065 | >20%                    |                 2 |              0.35325 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7254 | >20%                    |                10 |              0.07254 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7267 | >20%                    |                 5 |              0.14534 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7295 | >20%                    |                10 |              0.07295 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7337 | >20%                    |                 5 |              0.14674 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7363 | >20%                    |                 5 |              0.14726 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7396 | >20%                    |                 5 |              0.14792 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7425 | 15-20%                  |                10 |              0.07425 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7456 | >20%                    |                 5 |              0.14912 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7537 | 15-20%                  |                10 |              0.07537 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7686 | >20%                    |                 5 |              0.15372 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.787  | 5-10%                   |                10 |              0.0787  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7966 | 15-20%                  |                10 |              0.07966 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7975 | >20%                    |                 5 |              0.1595  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8086 | >20%                    |                10 |              0.08086 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.813  | >20%                    |                10 |              0.0813  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8227 | >20%                    |                 2 |              0.41135 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8566 | >20%                    |                10 |              0.08566 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8883 |                         |                 2 |              0.44415 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8905 | 10-15%                  |                10 |              0.08905 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.893  | >20%                    |                10 |              0.0893  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8933 | >20%                    |                 5 |              0.17866 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9027 | >20%                    |                10 |              0.09027 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9165 | >20%                    |                 5 |              0.1833  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9244 | >20%                    |                10 |              0.09244 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9359 | 5-10%                   |                10 |              0.09359 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.936  | >20%                    |                10 |              0.0936  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9393 | >20%                    |                 5 |              0.18786 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9453 | >20%                    |                10 |              0.09453 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9525 | 15-20%                  |                10 |              0.09525 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9703 | 15-20%                  |                10 |              0.09703 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9786 | >20%                    |                10 |              0.09786 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0372 | 15-20%                  |                10 |              0.10372 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0769 | >20%                    |                10 |              0.10769 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1112 | 10-15%                  |                10 |              0.11112 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1193 | >20%                    |                 5 |              0.22386 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1655 | >20%                    |                10 |              0.11655 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1742 |                         |                 5 |              0.23484 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.176  | >20%                    |                 2 |              0.588   |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1849 |                         |                 2 |              0.59245 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.201  | >20%                    |                10 |              0.1201  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2658 | >20%                    |                 5 |              0.25316 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2803 | >20%                    |                10 |              0.12803 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2861 | 5-10%                   |                 2 |              0.64305 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3263 | >20%                    |                10 |              0.13263 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3356 | 10-15%                  |                 2 |              0.6678  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.339  | >20%                    |                10 |              0.1339  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.344  | 5-10%                   |                 2 |              0.672   |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3556 | 15-20%                  |                10 |              0.13556 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4677 | >20%                    |                 5 |              0.29354 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4842 | 15-20%                  |                 5 |              0.29684 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.507  | 15-20%                  |                10 |              0.1507  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5308 | >20%                    |                10 |              0.15308 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.5534 | >20%                    |                 5 |              0.31068 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.566  | >20%                    |                10 |              0.1566  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.5692 |                         |                 5 |              0.31384 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6622 |                         |                10 |              0.16622 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.3319 |                         |                10 |              0.23319 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4021 | >20%                    |                10 |              0.24021 |