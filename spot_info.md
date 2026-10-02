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

Data correct as of 2026-10-02 04:52:57.880792, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1043 | >20%                    |                 2 |              0.05215 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1521 | >20%                    |                 2 |              0.07605 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1589 | 15-20%                  |                 2 |              0.07945 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1879 | >20%                    |                 5 |              0.03758 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1989 | >20%                    |                 2 |              0.09945 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.211  | 15-20%                  |                 5 |              0.0422  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2276 | 15-20%                  |                 5 |              0.04552 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2371 | >20%                    |                 2 |              0.11855 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2605 | >20%                    |                 2 |              0.13025 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2841 | >20%                    |                 2 |              0.14205 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2895 | >20%                    |                 2 |              0.14475 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2957 | 15-20%                  |                 2 |              0.14785 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3035 | >20%                    |                 2 |              0.15175 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3046 | >20%                    |                 5 |              0.06092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3253 | >20%                    |                 2 |              0.16265 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3288 | <5%                     |                10 |              0.03288 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3342 | >20%                    |                 5 |              0.06684 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.338  | >20%                    |                 2 |              0.169   |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.352  | 10-15%                  |                 2 |              0.176   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3664 | >20%                    |                 2 |              0.1832  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3737 | 15-20%                  |                 2 |              0.18685 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3768 | 10-15%                  |                 2 |              0.1884  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3769 | >20%                    |                 5 |              0.07538 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3807 | >20%                    |                 2 |              0.19035 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3813 | >20%                    |                 2 |              0.19065 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3885 | 5-10%                   |                10 |              0.03885 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3926 | <5%                     |                 2 |              0.1963  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3952 | >20%                    |                 2 |              0.1976  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4002 | >20%                    |                 5 |              0.08004 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4066 | >20%                    |                10 |              0.04066 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4076 | >20%                    |                 2 |              0.2038  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4098 | >20%                    |                 5 |              0.08196 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4194 | >20%                    |                 5 |              0.08388 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4292 | >20%                    |                 5 |              0.08584 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4379 | >20%                    |                 2 |              0.21895 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4379 | >20%                    |                10 |              0.04379 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4384 | 15-20%                  |                 2 |              0.2192  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4615 | >20%                    |                 5 |              0.0923  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4647 | >20%                    |                 5 |              0.09294 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4769 | 10-15%                  |                 2 |              0.23845 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.477  | >20%                    |                 5 |              0.0954  |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4786 |                         |                 2 |              0.2393  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4801 | >20%                    |                 2 |              0.24005 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4853 | >20%                    |                 5 |              0.09706 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4949 | >20%                    |                 5 |              0.09898 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.497  | >20%                    |                 2 |              0.2485  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5066 | >20%                    |                 5 |              0.10132 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5085 | <5%                     |                 2 |              0.25425 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5117 | >20%                    |                 2 |              0.25585 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5215 | >20%                    |                 2 |              0.26075 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.547  | 15-20%                  |                 2 |              0.2735  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5511 | >20%                    |                 5 |              0.11022 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.5523 |                         |                 5 |              0.11046 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5534 | >20%                    |                 2 |              0.2767  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5743 | >20%                    |                 5 |              0.11486 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5784 | >20%                    |                 2 |              0.2892  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5905 | >20%                    |                 5 |              0.1181  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5911 | 10-15%                  |                 5 |              0.11822 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5917 | >20%                    |                10 |              0.05917 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5917 | 5-10%                   |                10 |              0.05917 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5963 | >20%                    |                10 |              0.05963 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6059 | >20%                    |                 2 |              0.30295 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6093 | >20%                    |                 5 |              0.12186 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6151 | 10-15%                  |                 2 |              0.30755 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6212 | >20%                    |                 5 |              0.12424 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6433 | >20%                    |                10 |              0.06433 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6507 | >20%                    |                10 |              0.06507 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6534 | >20%                    |                 5 |              0.13068 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6598 | >20%                    |                 5 |              0.13196 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6688 | >20%                    |                 2 |              0.3344  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6707 | >20%                    |                 2 |              0.33535 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6846 | 5-10%                   |                 2 |              0.3423  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6848 | <5%                     |                 2 |              0.3424  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6875 | 5-10%                   |                 5 |              0.1375  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6975 | >20%                    |                 5 |              0.1395  |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.708  |                         |                10 |              0.0708  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7205 | >20%                    |                 5 |              0.1441  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7286 | 15-20%                  |                10 |              0.07286 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7342 | >20%                    |                 5 |              0.14684 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7346 | 15-20%                  |                 5 |              0.14692 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.74   | >20%                    |                 5 |              0.148   |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.745  | >20%                    |                 5 |              0.149   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.747  | >20%                    |                10 |              0.0747  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7515 | 15-20%                  |                 2 |              0.37575 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7593 | >20%                    |                 5 |              0.15186 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7667 | 15-20%                  |                10 |              0.07667 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.771  | >20%                    |                10 |              0.0771  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.805  | 15-20%                  |                10 |              0.0805  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8128 | >20%                    |                10 |              0.08128 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8145 | >20%                    |                 5 |              0.1629  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8323 | >20%                    |                 5 |              0.16646 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8358 | 5-10%                   |                10 |              0.08358 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8481 | >20%                    |                10 |              0.08481 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8496 | >20%                    |                 2 |              0.4248  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8562 | >20%                    |                 5 |              0.17124 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8599 | 15-20%                  |                 5 |              0.17198 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8649 | 10-15%                  |                 2 |              0.43245 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8676 | >20%                    |                10 |              0.08676 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8753 | >20%                    |                 2 |              0.43765 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8756 | 10-15%                  |                10 |              0.08756 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9016 | >20%                    |                10 |              0.09016 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9067 | <5%                     |                 5 |              0.18134 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9158 | >20%                    |                 5 |              0.18316 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9305 | 15-20%                  |                10 |              0.09305 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9333 | >20%                    |                 5 |              0.18666 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9378 | >20%                    |                10 |              0.09378 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9455 | >20%                    |                 5 |              0.1891  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9465 | >20%                    |                10 |              0.09465 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9609 | >20%                    |                10 |              0.09609 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9637 | >20%                    |                10 |              0.09637 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9804 | >20%                    |                10 |              0.09804 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9996 | 10-15%                  |                 2 |              0.4998  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0018 | 15-20%                  |                10 |              0.10018 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0073 | 15-20%                  |                10 |              0.10073 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.0209 | >20%                    |                 2 |              0.51045 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0214 | >20%                    |                 5 |              0.20428 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.033  | >20%                    |                10 |              0.1033  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0338 | >20%                    |                10 |              0.10338 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0372 | >20%                    |                10 |              0.10372 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0538 | >20%                    |                10 |              0.10538 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0564 | >20%                    |                10 |              0.10564 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0738 | >20%                    |                10 |              0.10738 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1159 | >20%                    |                 5 |              0.22318 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1175 | 5-10%                   |                10 |              0.11175 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.1405 |                         |                 2 |              0.57025 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1553 | 5-10%                   |                 2 |              0.57765 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2056 | >20%                    |                10 |              0.12056 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2172 | >20%                    |                10 |              0.12172 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2881 | 5-10%                   |                 2 |              0.64405 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3337 | >20%                    |                 2 |              0.66685 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3403 | >20%                    |                10 |              0.13403 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3681 | 15-20%                  |                10 |              0.13681 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3991 | 10-15%                  |                10 |              0.13991 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4147 | >20%                    |                10 |              0.14147 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4242 | 10-15%                  |                 2 |              0.7121  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.4741 |                         |                 2 |              0.73705 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5347 |                         |                10 |              0.15347 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5356 | >20%                    |                 2 |              0.7678  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5373 | 5-10%                   |                 5 |              0.30746 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5838 | >20%                    |                 5 |              0.31676 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.6072 |                         |                 5 |              0.32144 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6106 | 15-20%                  |                10 |              0.16106 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6219 | >20%                    |                10 |              0.16219 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.7056 |                         |                 5 |              0.34112 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.735  | >20%                    |                 5 |              0.347   |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8748 | >20%                    |                10 |              0.18748 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.9406 |                         |                10 |              0.19406 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9624 | >20%                    |                10 |              0.19624 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0872 | 15-20%                  |                 5 |              0.41744 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.1472 | >20%                    |                 5 |              0.42944 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2109 | 5-10%                   |                 2 |              1.10545 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2493 | 5-10%                   |                10 |              0.22493 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5893 | >20%                    |                10 |              0.25893 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.1612 | >20%                    |                10 |              0.31612 |