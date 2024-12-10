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

Data correct as of 2024-12-10 01:47:56.720030, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1605 | 10-15%                  |                 2 |              0.08025 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2025 | <5%                     |                 2 |              0.10125 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2097 | 15-20%                  |                 2 |              0.10485 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2166 | 15-20%                  |                 5 |              0.04332 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2172 | >20%                    |                 2 |              0.1086  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2226 | 5-10%                   |                 5 |              0.04452 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2242 | >20%                    |                 5 |              0.04484 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2275 | 10-15%                  |                 2 |              0.11375 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.229  | 15-20%                  |                 2 |              0.1145  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2323 | <5%                     |                 2 |              0.11615 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2455 | <5%                     |                 2 |              0.12275 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2524 | >20%                    |                 2 |              0.1262  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2578 | 10-15%                  |                10 |              0.02578 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.277  | >20%                    |                 5 |              0.0554  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 | <5%                     |                 2 |              0.1402  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.281  | <5%                     |                 2 |              0.1405  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2857 | <5%                     |                 2 |              0.14285 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2965 | >20%                    |                 2 |              0.14825 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3072 | <5%                     |                 5 |              0.06144 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3099 | <5%                     |                10 |              0.03099 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3142 | 5-10%                   |                 2 |              0.1571  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3188 | <5%                     |                 2 |              0.1594  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3206 | >20%                    |                 5 |              0.06412 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3319 | <5%                     |                 2 |              0.16595 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.339  | 10-15%                  |                 2 |              0.1695  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3402 | <5%                     |                 5 |              0.06804 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3432 | >20%                    |                 2 |              0.1716  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3453 | >20%                    |                 5 |              0.06906 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3502 | <5%                     |                 5 |              0.07004 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3502 | <5%                     |                 2 |              0.1751  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3553 | >20%                    |                 2 |              0.17765 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3577 | >20%                    |                 2 |              0.17885 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3599 | >20%                    |                 2 |              0.17995 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3611 | >20%                    |                 2 |              0.18055 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3618 | >20%                    |                10 |              0.03618 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.3641 | 5-10%                   |                 2 |              0.18205 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3741 | 15-20%                  |                 5 |              0.07482 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3757 | 5-10%                   |                 5 |              0.07514 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3757 | >20%                    |                 2 |              0.18785 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3781 | 5-10%                   |                 2 |              0.18905 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3937 | <5%                     |                 2 |              0.19685 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4005 | 5-10%                   |                 2 |              0.20025 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4024 | 5-10%                   |                 2 |              0.2012  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4097 | 5-10%                   |                10 |              0.04097 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4108 | 5-10%                   |                 2 |              0.2054  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4122 | 5-10%                   |                 2 |              0.2061  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.424  | 5-10%                   |                 5 |              0.0848  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4243 | >20%                    |                 2 |              0.21215 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.4336 | 5-10%                   |                 5 |              0.08672 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4342 | 10-15%                  |                 5 |              0.08684 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4358 | 15-20%                  |                 2 |              0.2179  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4366 | 10-15%                  |                 5 |              0.08732 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4397 | <5%                     |                 5 |              0.08794 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4542 | 10-15%                  |                 2 |              0.2271  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4547 | >20%                    |                 2 |              0.22735 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4588 | <5%                     |                 2 |              0.2294  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4667 | 5-10%                   |                10 |              0.04667 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4669 | 5-10%                   |                 5 |              0.09338 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4674 | 15-20%                  |                 5 |              0.09348 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4704 | >20%                    |                 5 |              0.09408 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4762 | 5-10%                   |                 2 |              0.2381  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4769 | <5%                     |                 5 |              0.09538 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4836 | 10-15%                  |                 2 |              0.2418  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4907 | >20%                    |                 5 |              0.09814 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4922 | >20%                    |                 2 |              0.2461  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.497  | >20%                    |                 5 |              0.0994  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.5025 | 10-15%                  |                 2 |              0.25125 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5083 | 15-20%                  |                10 |              0.05083 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5098 | 10-15%                  |                 5 |              0.10196 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5114 | 10-15%                  |                 2 |              0.2557  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5144 | <5%                     |                 5 |              0.10288 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5156 | <5%                     |                 5 |              0.10312 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5157 | 5-10%                   |                 5 |              0.10314 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5189 | 10-15%                  |                10 |              0.05189 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5246 | >20%                    |                 5 |              0.10492 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5258 | 10-15%                  |                 5 |              0.10516 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5305 | 10-15%                  |                 5 |              0.1061  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5332 | >20%                    |                 5 |              0.10664 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5353 | >20%                    |                 5 |              0.10706 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5461 | >20%                    |                 2 |              0.27305 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5474 | >20%                    |                10 |              0.05474 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5498 | 10-15%                  |                 5 |              0.10996 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5562 | 10-15%                  |                 5 |              0.11124 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 | <5%                     |                10 |              0.05663 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5672 | <5%                     |                 5 |              0.11344 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.5832 | 5-10%                   |                 2 |              0.2916  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5968 | 15-20%                  |                10 |              0.05968 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6164 | 5-10%                   |                 5 |              0.12328 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6244 | 15-20%                  |                 5 |              0.12488 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6291 | 5-10%                   |                10 |              0.06291 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6345 | >20%                    |                10 |              0.06345 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.653  | 5-10%                   |                10 |              0.0653  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6596 | 10-15%                  |                10 |              0.06596 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6637 | >20%                    |                 2 |              0.33185 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6683 | <5%                     |                 5 |              0.13366 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6706 | 10-15%                  |                 5 |              0.13412 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6761 | >20%                    |                10 |              0.06761 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6831 | >20%                    |                10 |              0.06831 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6836 | <5%                     |                 5 |              0.13672 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.7043 | <5%                     |                10 |              0.07043 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7124 | >20%                    |                10 |              0.07124 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7154 | >20%                    |                 5 |              0.14308 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7335 | >20%                    |                 5 |              0.1467  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7365 | <5%                     |                 2 |              0.36825 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7427 | >20%                    |                 5 |              0.14854 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7644 | <5%                     |                 5 |              0.15288 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7648 | >20%                    |                 5 |              0.15296 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7684 | >20%                    |                10 |              0.07684 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.774  | <5%                     |                10 |              0.0774  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7927 | <5%                     |                10 |              0.07927 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8077 | 15-20%                  |                10 |              0.08077 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8084 | 10-15%                  |                10 |              0.08084 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8117 | <5%                     |                 2 |              0.40585 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8422 | 10-15%                  |                10 |              0.08422 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8581 | 5-10%                   |                10 |              0.08581 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8593 | 10-15%                  |                10 |              0.08593 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8925 | 5-10%                   |                10 |              0.08925 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8959 | 10-15%                  |                10 |              0.08959 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      0.8971 | <5%                     |                 5 |              0.17942 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9016 | 15-20%                  |                10 |              0.09016 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9103 | 10-15%                  |                10 |              0.09103 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9277 | 5-10%                   |                10 |              0.09277 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9311 | <5%                     |                10 |              0.09311 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.937  | <5%                     |                 5 |              0.1874  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9385 | >20%                    |                10 |              0.09385 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9454 | 5-10%                   |                10 |              0.09454 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9552 | <5%                     |                10 |              0.09552 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9686 | 5-10%                   |                10 |              0.09686 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0159 | 5-10%                   |                10 |              0.10159 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0327 | >20%                    |                10 |              0.10327 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0389 | >20%                    |                10 |              0.10389 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.096  | <5%                     |                10 |              0.1096  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1581 | >20%                    |                10 |              0.11581 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2361 | >20%                    |                10 |              0.12361 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2385 | <5%                     |                10 |              0.12385 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.4562 | 5-10%                   |                10 |              0.14562 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4601 | 5-10%                   |                10 |              0.14601 |