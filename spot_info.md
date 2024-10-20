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

Data correct as of 2024-10-20 01:44:20.709044, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1139 | 10-15%                  |                 2 |              0.05695 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1285 | <5%                     |                 2 |              0.06425 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1354 | <5%                     |                 2 |              0.0677  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1404 | <5%                     |                 2 |              0.0702  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1556 | 10-15%                  |                 2 |              0.0778  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1596 | 5-10%                   |                 5 |              0.03192 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.168  | <5%                     |                 2 |              0.084   |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1817 | <5%                     |                 2 |              0.09085 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1834 | <5%                     |                 5 |              0.03668 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1862 | <5%                     |                 5 |              0.03724 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1946 | 15-20%                  |                 2 |              0.0973  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2059 | >20%                    |                 2 |              0.10295 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2193 | >20%                    |                 2 |              0.10965 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2329 | <5%                     |                 2 |              0.11645 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2423 | 5-10%                   |                 2 |              0.12115 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.243  | <5%                     |                 5 |              0.0486  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2444 | <5%                     |                 2 |              0.1222  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2487 | 15-20%                  |                 2 |              0.12435 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2513 | >20%                    |                 5 |              0.05026 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2533 | <5%                     |                10 |              0.02533 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2638 | <5%                     |                 2 |              0.1319  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2655 | 15-20%                  |                 5 |              0.0531  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2691 | <5%                     |                 2 |              0.13455 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2778 | 10-15%                  |                 5 |              0.05556 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.282  | <5%                     |                10 |              0.0282  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2826 | 10-15%                  |                 2 |              0.1413  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2837 | 15-20%                  |                 2 |              0.14185 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.288  | <5%                     |                 2 |              0.144   |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2887 | <5%                     |                10 |              0.02887 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2958 | >20%                    |                 2 |              0.1479  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3111 | 15-20%                  |                 2 |              0.15555 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3162 | 5-10%                   |                 2 |              0.1581  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3243 | <5%                     |                 5 |              0.06486 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3244 | >20%                    |                 5 |              0.06488 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3251 | 10-15%                  |                 5 |              0.06502 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3303 | 10-15%                  |                 2 |              0.16515 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3303 | >20%                    |                 5 |              0.06606 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3344 | <5%                     |                 2 |              0.1672  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.341  | <5%                     |                 2 |              0.1705  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3451 | 15-20%                  |                 2 |              0.17255 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3482 | >20%                    |                 2 |              0.1741  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3679 | <5%                     |                 5 |              0.07358 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3695 | >20%                    |                10 |              0.03695 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3699 | <5%                     |                 5 |              0.07398 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3742 | <5%                     |                 5 |              0.07484 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3948 | >20%                    |                 2 |              0.1974  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4013 | 5-10%                   |                 2 |              0.20065 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4034 | <5%                     |                 5 |              0.08068 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4058 | <5%                     |                 5 |              0.08116 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4063 | >20%                    |                10 |              0.04063 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.407  | >20%                    |                 2 |              0.2035  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4125 | <5%                     |                 2 |              0.20625 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4169 | <5%                     |                10 |              0.04169 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4219 | 15-20%                  |                 2 |              0.21095 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4235 | 5-10%                   |                 2 |              0.21175 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4317 | 15-20%                  |                 5 |              0.08634 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4326 | >20%                    |                 2 |              0.2163  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4408 | 5-10%                   |                10 |              0.04408 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4476 | 15-20%                  |                 2 |              0.2238  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4479 | <5%                     |                 5 |              0.08958 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4493 | >20%                    |                 5 |              0.08986 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4499 | <5%                     |                 2 |              0.22495 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4524 | <5%                     |                10 |              0.04524 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4548 | <5%                     |                 5 |              0.09096 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4556 | 15-20%                  |                 5 |              0.09112 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4629 | >20%                    |                 2 |              0.23145 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4652 | >20%                    |                 5 |              0.09304 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4656 | <5%                     |                10 |              0.04656 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.47   | 5-10%                   |                 2 |              0.235   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4718 | 5-10%                   |                 5 |              0.09436 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4791 | 10-15%                  |                 5 |              0.09582 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4798 | 5-10%                   |                10 |              0.04798 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4838 | 5-10%                   |                 5 |              0.09676 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4843 | 15-20%                  |                 5 |              0.09686 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4914 | <5%                     |                 2 |              0.2457  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5001 | 10-15%                  |                10 |              0.05001 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5002 | >20%                    |                 2 |              0.2501  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.511  | 15-20%                  |                 2 |              0.2555  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5171 | 5-10%                   |                 5 |              0.10342 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5176 | 5-10%                   |                 5 |              0.10352 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5179 | 5-10%                   |                10 |              0.05179 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.52   | >20%                    |                 5 |              0.104   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5226 | >20%                    |                 5 |              0.10452 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5241 | <5%                     |                 5 |              0.10482 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5282 | <5%                     |                 5 |              0.10564 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.531  | <5%                     |                 5 |              0.1062  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.5376 | 15-20%                  |                 2 |              0.2688  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.5507 | <5%                     |                10 |              0.05507 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.575  | >20%                    |                 5 |              0.115   |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5796 | >20%                    |                 5 |              0.11592 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5819 | 5-10%                   |                 5 |              0.11638 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.582  | >20%                    |                 5 |              0.1164  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5846 | 15-20%                  |                 5 |              0.11692 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5886 | 15-20%                  |                10 |              0.05886 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5999 | >20%                    |                 2 |              0.29995 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6025 | >20%                    |                 5 |              0.1205  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.641  | <5%                     |                10 |              0.0641  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6536 | >20%                    |                10 |              0.06536 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6589 | 10-15%                  |                10 |              0.06589 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6715 | 5-10%                   |                10 |              0.06715 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6727 | >20%                    |                10 |              0.06727 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6846 | <5%                     |                10 |              0.06846 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6874 | 10-15%                  |                 5 |              0.13748 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6959 | <5%                     |                10 |              0.06959 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6988 | >20%                    |                 2 |              0.3494  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7036 | 5-10%                   |                 5 |              0.14072 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7086 | <5%                     |                10 |              0.07086 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7158 | 5-10%                   |                10 |              0.07158 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.7197 | 5-10%                   |                10 |              0.07197 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7242 | >20%                    |                10 |              0.07242 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7278 | 5-10%                   |                10 |              0.07278 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7281 | >20%                    |                10 |              0.07281 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7455 | >20%                    |                 5 |              0.1491  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.7611 | 5-10%                   |                10 |              0.07611 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7813 | 10-15%                  |                 5 |              0.15626 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7846 | 15-20%                  |                10 |              0.07846 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7956 | <5%                     |                10 |              0.07956 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8249 | >20%                    |                10 |              0.08249 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8695 | >20%                    |                10 |              0.08695 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.873  | 5-10%                   |                10 |              0.0873  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8813 | >20%                    |                10 |              0.08813 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8847 | <5%                     |                10 |              0.08847 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8939 | >20%                    |                 5 |              0.17878 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9092 | >20%                    |                10 |              0.09092 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9107 | >20%                    |                 2 |              0.45535 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9277 | >20%                    |                10 |              0.09277 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9562 | <5%                     |                 2 |              0.4781  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9619 | 15-20%                  |                 5 |              0.19238 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9625 | 10-15%                  |                10 |              0.09625 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9847 | 10-15%                  |                10 |              0.09847 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0088 | 5-10%                   |                10 |              0.10088 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0228 | 10-15%                  |                 5 |              0.20456 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0398 | >20%                    |                10 |              0.10398 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1505 | >20%                    |                10 |              0.11505 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1599 | >20%                    |                10 |              0.11599 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4351 | <5%                     |                10 |              0.14351 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4462 | >20%                    |                10 |              0.14462 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5396 | 5-10%                   |                10 |              0.15396 |