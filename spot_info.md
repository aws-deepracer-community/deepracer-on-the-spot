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

Data correct as of 2026-04-02 02:43:07.474668, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2042 | >20%                    |                 2 |              0.1021  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2069 | 15-20%                  |                 2 |              0.10345 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2216 | >20%                    |                 2 |              0.1108  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2242 | >20%                    |                 2 |              0.1121  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2471 | >20%                    |                 2 |              0.12355 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2497 | >20%                    |                 2 |              0.12485 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2552 | 15-20%                  |                 5 |              0.05104 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2582 | 10-15%                  |                 2 |              0.1291  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2641 | >20%                    |                 2 |              0.13205 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2739 | 15-20%                  |                 2 |              0.13695 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2835 | 5-10%                   |                10 |              0.02835 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2907 | 15-20%                  |                 5 |              0.05814 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3011 | 5-10%                   |                10 |              0.03011 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3067 | <5%                     |                 2 |              0.15335 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3092 | >20%                    |                10 |              0.03092 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3117 | >20%                    |                 2 |              0.15585 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3128 | 10-15%                  |                 2 |              0.1564  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3133 | >20%                    |                 5 |              0.06266 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3242 | 10-15%                  |                 2 |              0.1621  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3266 | >20%                    |                10 |              0.03266 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3298 | >20%                    |                 5 |              0.06596 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3303 | >20%                    |                 2 |              0.16515 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.332  | 15-20%                  |                 5 |              0.0664  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3398 | >20%                    |                 5 |              0.06796 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3444 | <5%                     |                 2 |              0.1722  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3478 | >20%                    |                 2 |              0.1739  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3488 | >20%                    |                 5 |              0.06976 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3653 | 15-20%                  |                 2 |              0.18265 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3702 | 5-10%                   |                10 |              0.03702 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3809 | >20%                    |                 2 |              0.19045 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3814 | >20%                    |                 5 |              0.07628 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.388  | 10-15%                  |                 2 |              0.194   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3902 | >20%                    |                 5 |              0.07804 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3907 | >20%                    |                 5 |              0.07814 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.392  | >20%                    |                 5 |              0.0784  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3942 | >20%                    |                 2 |              0.1971  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4085 | <5%                     |                 5 |              0.0817  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4127 | <5%                     |                 2 |              0.20635 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4158 | >20%                    |                 2 |              0.2079  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4217 | >20%                    |                 2 |              0.21085 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4223 | 10-15%                  |                 2 |              0.21115 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4243 | 15-20%                  |                 2 |              0.21215 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4282 | >20%                    |                 2 |              0.2141  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4408 | >20%                    |                 5 |              0.08816 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4427 | >20%                    |                 5 |              0.08854 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4438 | >20%                    |                 5 |              0.08876 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4467 | >20%                    |                 2 |              0.22335 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4478 | >20%                    |                10 |              0.04478 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4479 | >20%                    |                 5 |              0.08958 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4537 | >20%                    |                 2 |              0.22685 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4628 | >20%                    |                 5 |              0.09256 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4637 | >20%                    |                 2 |              0.23185 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4673 | >20%                    |                 2 |              0.23365 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4718 | 15-20%                  |                 2 |              0.2359  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4724 | >20%                    |                 5 |              0.09448 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4774 | >20%                    |                 5 |              0.09548 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4851 | >20%                    |                 5 |              0.09702 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4876 | >20%                    |                 5 |              0.09752 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4945 | >20%                    |                 2 |              0.24725 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5059 | 15-20%                  |                10 |              0.05059 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5085 | >20%                    |                 5 |              0.1017  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5115 | >20%                    |                 2 |              0.25575 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5122 | >20%                    |                 2 |              0.2561  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5132 | 15-20%                  |                 2 |              0.2566  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5159 | >20%                    |                 5 |              0.10318 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5159 | >20%                    |                 5 |              0.10318 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5287 | 15-20%                  |                 5 |              0.10574 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5398 | 5-10%                   |                 5 |              0.10796 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5484 | >20%                    |                 5 |              0.10968 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5551 | >20%                    |                 5 |              0.11102 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5589 | >20%                    |                 5 |              0.11178 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5627 | 5-10%                   |                 2 |              0.28135 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5715 | >20%                    |                 2 |              0.28575 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.582  | 10-15%                  |                 5 |              0.1164  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5908 | >20%                    |                10 |              0.05908 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.591  | 15-20%                  |                10 |              0.0591  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5938 | >20%                    |                10 |              0.05938 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5955 | 5-10%                   |                10 |              0.05955 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6022 | >20%                    |                10 |              0.06022 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6066 | <5%                     |                10 |              0.06066 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6107 | 15-20%                  |                10 |              0.06107 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.615  | >20%                    |                10 |              0.0615  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6198 | 5-10%                   |                 5 |              0.12396 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6232 | >20%                    |                 5 |              0.12464 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6315 | >20%                    |                 5 |              0.1263  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6346 | 10-15%                  |                 2 |              0.3173  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6379 | >20%                    |                10 |              0.06379 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.645  | >20%                    |                10 |              0.0645  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6511 | >20%                    |                10 |              0.06511 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6536 | >20%                    |                 2 |              0.3268  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6601 | >20%                    |                 5 |              0.13202 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.67   | >20%                    |                 5 |              0.134   |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6861 | >20%                    |                 2 |              0.34305 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7095 | >20%                    |                 5 |              0.1419  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.7123 | >20%                    |                 5 |              0.14246 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7154 | >20%                    |                10 |              0.07154 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7191 | 5-10%                   |                 2 |              0.35955 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7319 | >20%                    |                 5 |              0.14638 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7502 | >20%                    |                10 |              0.07502 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7548 | >20%                    |                10 |              0.07548 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7587 | >20%                    |                 5 |              0.15174 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7639 | >20%                    |                10 |              0.07639 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7659 | >20%                    |                 2 |              0.38295 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7713 | >20%                    |                 5 |              0.15426 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7931 | >20%                    |                 5 |              0.15862 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7942 | >20%                    |                10 |              0.07942 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8036 | >20%                    |                10 |              0.08036 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8041 | >20%                    |                10 |              0.08041 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8211 | >20%                    |                 5 |              0.16422 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.824  | >20%                    |                 5 |              0.1648  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8269 | >20%                    |                10 |              0.08269 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8306 | >20%                    |                10 |              0.08306 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8335 | >20%                    |                10 |              0.08335 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8357 | >20%                    |                10 |              0.08357 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8394 | 5-10%                   |                 2 |              0.4197  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8539 | >20%                    |                 2 |              0.42695 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8551 | >20%                    |                 5 |              0.17102 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8733 | >20%                    |                 2 |              0.43665 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8761 | >20%                    |                10 |              0.08761 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.878  | 5-10%                   |                10 |              0.0878  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8853 | >20%                    |                10 |              0.08853 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8865 | 15-20%                  |                10 |              0.08865 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9024 | >20%                    |                 2 |              0.4512  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9173 | >20%                    |                10 |              0.09173 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9277 | >20%                    |                10 |              0.09277 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.93   | >20%                    |                10 |              0.093   |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.9325 | >20%                    |                 5 |              0.1865  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9459 | >20%                    |                10 |              0.09459 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9656 | 10-15%                  |                 2 |              0.4828  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9715 | 15-20%                  |                10 |              0.09715 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9783 | 10-15%                  |                10 |              0.09783 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.986  | >20%                    |                 5 |              0.1972  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.048  | 5-10%                   |                10 |              0.1048  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0571 | 15-20%                  |                10 |              0.10571 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0601 | >20%                    |                10 |              0.10601 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0749 | >20%                    |                10 |              0.10749 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0763 | >20%                    |                10 |              0.10763 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0926 | >20%                    |                 5 |              0.21852 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1258 | 10-15%                  |                10 |              0.11258 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.158  | >20%                    |                 5 |              0.2316  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2898 | 15-20%                  |                10 |              0.12898 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3297 | 15-20%                  |                10 |              0.13297 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3731 | 5-10%                   |                 2 |              0.68655 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3864 | >20%                    |                 2 |              0.6932  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3992 | >20%                    |                10 |              0.13992 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4467 | 15-20%                  |                 5 |              0.28934 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4552 | >20%                    |                 5 |              0.29104 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.5827 |                         |                 2 |              0.79135 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      2.0484 |                         |                 5 |              0.40968 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.053  | >20%                    |                10 |              0.2053  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.7018 | >20%                    |                10 |              0.27018 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      2.9045 |                         |                10 |              0.29045 |