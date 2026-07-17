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

Data correct as of 2026-07-17 02:55:46.428580, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1341 | >20%                    |                 2 |              0.06705 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1553 | >20%                    |                 2 |              0.07765 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1802 | >20%                    |                 2 |              0.0901  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2354 | 15-20%                  |                 2 |              0.1177  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2417 | >20%                    |                 2 |              0.12085 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.248  | >20%                    |                 2 |              0.124   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2551 | >20%                    |                 2 |              0.12755 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2564 | >20%                    |                 2 |              0.1282  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2582 | >20%                    |                 2 |              0.1291  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.265  | >20%                    |                 2 |              0.1325  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2704 | 15-20%                  |                 2 |              0.1352  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.272  | 5-10%                   |                10 |              0.0272  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2789 | >20%                    |                 2 |              0.13945 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2996 | 10-15%                  |                 2 |              0.1498  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3105 | 15-20%                  |                 2 |              0.15525 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3224 | >20%                    |                 2 |              0.1612  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3235 | >20%                    |                 5 |              0.0647  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3299 | 15-20%                  |                 5 |              0.06598 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3305 | >20%                    |                 2 |              0.16525 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3364 | 15-20%                  |                 5 |              0.06728 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3493 | >20%                    |                 5 |              0.06986 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3521 | >20%                    |                 5 |              0.07042 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3572 | >20%                    |                10 |              0.03572 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3575 | >20%                    |                 2 |              0.17875 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3598 | 5-10%                   |                10 |              0.03598 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3606 | <5%                     |                 2 |              0.1803  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3669 | >20%                    |                 5 |              0.07338 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3844 | >20%                    |                10 |              0.03844 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3859 | >20%                    |                 2 |              0.19295 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3869 | >20%                    |                 5 |              0.07738 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3914 | >20%                    |                 5 |              0.07828 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3953 | >20%                    |                 5 |              0.07906 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3989 | 10-15%                  |                 2 |              0.19945 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4022 | 15-20%                  |                 5 |              0.08044 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4067 | 5-10%                   |                10 |              0.04067 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4164 | >20%                    |                 5 |              0.08328 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4167 | >20%                    |                10 |              0.04167 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4196 | 10-15%                  |                 2 |              0.2098  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4222 | >20%                    |                 2 |              0.2111  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4315 | 15-20%                  |                 2 |              0.21575 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4334 | >20%                    |                 5 |              0.08668 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4364 | >20%                    |                10 |              0.04364 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4377 | >20%                    |                 5 |              0.08754 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4441 | >20%                    |                 2 |              0.22205 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4509 | >20%                    |                 2 |              0.22545 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4555 | <5%                     |                 2 |              0.22775 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4575 | >20%                    |                 2 |              0.22875 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4681 | >20%                    |                 2 |              0.23405 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4783 | 10-15%                  |                 2 |              0.23915 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4791 | >20%                    |                 5 |              0.09582 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4811 | >20%                    |                 2 |              0.24055 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.482  | >20%                    |                 5 |              0.0964  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4947 | <5%                     |                 2 |              0.24735 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5085 | >20%                    |                 5 |              0.1017  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5175 | >20%                    |                 5 |              0.1035  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5176 | >20%                    |                 2 |              0.2588  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5252 | >20%                    |                 5 |              0.10504 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5256 | >20%                    |                10 |              0.05256 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5313 | >20%                    |                10 |              0.05313 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5334 | 15-20%                  |                 2 |              0.2667  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.5406 |                         |                 2 |              0.2703  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5455 | >20%                    |                 5 |              0.1091  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5519 | >20%                    |                10 |              0.05519 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5605 | >20%                    |                 5 |              0.1121  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5673 | 5-10%                   |                 2 |              0.28365 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5729 | >20%                    |                10 |              0.05729 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5749 | >20%                    |                 5 |              0.11498 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5796 | 10-15%                  |                 5 |              0.11592 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5811 | 15-20%                  |                 2 |              0.29055 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.582  | >20%                    |                 5 |              0.1164  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5839 | >20%                    |                 5 |              0.11678 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5921 | >20%                    |                 2 |              0.29605 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6008 | 5-10%                   |                 5 |              0.12016 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6025 | >20%                    |                 2 |              0.30125 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6036 | >20%                    |                 5 |              0.12072 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6226 | >20%                    |                 5 |              0.12452 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6399 | >20%                    |                 5 |              0.12798 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6465 | 10-15%                  |                10 |              0.06465 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.65   | >20%                    |                10 |              0.065   |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6512 | 15-20%                  |                 5 |              0.13024 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6514 | >20%                    |                10 |              0.06514 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6542 | <5%                     |                 5 |              0.13084 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6551 | >20%                    |                10 |              0.06551 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6598 | >20%                    |                 2 |              0.3299  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.678  | >20%                    |                 5 |              0.1356  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6808 |                         |                 2 |              0.3404  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6825 | >20%                    |                 2 |              0.34125 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6872 | >20%                    |                10 |              0.06872 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.689  | >20%                    |                 5 |              0.1378  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6957 | >20%                    |                 2 |              0.34785 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7091 | >20%                    |                10 |              0.07091 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7161 | >20%                    |                 5 |              0.14322 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7191 | >20%                    |                 2 |              0.35955 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7415 | 15-20%                  |                10 |              0.07415 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7451 | >20%                    |                 5 |              0.14902 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7463 | >20%                    |                10 |              0.07463 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7466 | >20%                    |                 5 |              0.14932 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7467 | >20%                    |                10 |              0.07467 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7784 | 10-15%                  |                 2 |              0.3892  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7901 | >20%                    |                10 |              0.07901 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8    | 5-10%                   |                10 |              0.08    |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8208 | >20%                    |                10 |              0.08208 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8227 | <5%                     |                10 |              0.08227 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.832  | >20%                    |                 5 |              0.1664  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8338 | >20%                    |                 5 |              0.16676 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8364 | >20%                    |                10 |              0.08364 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.845  | >20%                    |                10 |              0.0845  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8605 | 15-20%                  |                10 |              0.08605 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8619 | >20%                    |                 5 |              0.17238 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8633 | >20%                    |                 2 |              0.43165 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8689 | 15-20%                  |                10 |              0.08689 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8744 | 10-15%                  |                 2 |              0.4372  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8847 | 5-10%                   |                 2 |              0.44235 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8873 | 15-20%                  |                10 |              0.08873 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8938 | >20%                    |                10 |              0.08938 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9071 | >20%                    |                 2 |              0.45355 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9278 |                         |                 5 |              0.18556 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9395 | 5-10%                   |                10 |              0.09395 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9441 | >20%                    |                10 |              0.09441 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9474 | >20%                    |                 5 |              0.18948 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9661 | >20%                    |                 5 |              0.19322 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9734 | >20%                    |                 5 |              0.19468 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.9814 |                         |                10 |              0.09814 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9844 | >20%                    |                10 |              0.09844 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.989  | >20%                    |                 5 |              0.1978  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0123 | 15-20%                  |                10 |              0.10123 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0476 | >20%                    |                 5 |              0.20952 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0501 | >20%                    |                 5 |              0.21002 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0538 | 5-10%                   |                 5 |              0.21076 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0542 | 10-15%                  |                 2 |              0.5271  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0863 | >20%                    |                 2 |              0.54315 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0952 | >20%                    |                10 |              0.10952 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0954 | >20%                    |                10 |              0.10954 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0995 | >20%                    |                 5 |              0.2199  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1028 | >20%                    |                10 |              0.11028 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1094 | >20%                    |                10 |              0.11094 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1097 | 15-20%                  |                10 |              0.11097 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1217 |                         |                10 |              0.11217 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2263 | >20%                    |                10 |              0.12263 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2329 |                         |                 5 |              0.24658 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2405 | >20%                    |                10 |              0.12405 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2597 | 5-10%                   |                10 |              0.12597 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2653 | >20%                    |                10 |              0.12653 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2889 | 15-20%                  |                10 |              0.12889 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2974 | >20%                    |                 5 |              0.25948 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4153 | >20%                    |                10 |              0.14153 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4357 | 15-20%                  |                10 |              0.14357 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5357 | >20%                    |                10 |              0.15357 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5674 | 15-20%                  |                 5 |              0.31348 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.605  | 10-15%                  |                10 |              0.1605  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.6305 | >20%                    |                 5 |              0.3261  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.7902 | >20%                    |                 5 |              0.35804 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.9227 | 5-10%                   |                 2 |              0.96135 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0353 | 5-10%                   |                 2 |              1.01765 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1122 | >20%                    |                10 |              0.21122 |