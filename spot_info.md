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

Data correct as of 2025-02-18 01:37:37.061704, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.111  | >20%                    |                 2 |              0.0555  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1344 | <5%                     |                 5 |              0.02688 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.1878 | <5%                     |                 5 |              0.03756 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1912 | <5%                     |                 5 |              0.03824 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 15-20%                  |                 5 |              0.039   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2179 | 5-10%                   |                 2 |              0.10895 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2207 | <5%                     |                 2 |              0.11035 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2241 | >20%                    |                 2 |              0.11205 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2252 | 10-15%                  |                 2 |              0.1126  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2373 | 15-20%                  |                 2 |              0.11865 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.238  | 15-20%                  |                 2 |              0.119   |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 15-20%                  |                10 |              0.02395 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2445 | 15-20%                  |                 5 |              0.0489  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2466 | >20%                    |                 2 |              0.1233  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2578 | 5-10%                   |                 2 |              0.1289  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2736 | >20%                    |                 2 |              0.1368  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2747 | 10-15%                  |                 2 |              0.13735 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2762 | 5-10%                   |                10 |              0.02762 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.2772 | <5%                     |                10 |              0.02772 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2836 | <5%                     |                 2 |              0.1418  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2891 | 15-20%                  |                 2 |              0.14455 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2938 | 5-10%                   |                 2 |              0.1469  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.295  | <5%                     |                 2 |              0.1475  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.295  | <5%                     |                 2 |              0.1475  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3002 | 5-10%                   |                 2 |              0.1501  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3047 | <5%                     |                 2 |              0.15235 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3165 | 10-15%                  |                 2 |              0.15825 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3183 | <5%                     |                 2 |              0.15915 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3236 | 10-15%                  |                 2 |              0.1618  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3263 | 15-20%                  |                 5 |              0.06526 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3291 | >20%                    |                 2 |              0.16455 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3377 | >20%                    |                 5 |              0.06754 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3397 | >20%                    |                 2 |              0.16985 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3511 | >20%                    |                10 |              0.03511 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3564 | 10-15%                  |                 2 |              0.1782  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3585 | <5%                     |                 2 |              0.17925 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3587 | <5%                     |                 5 |              0.07174 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3626 | 5-10%                   |                10 |              0.03626 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3627 | 10-15%                  |                 5 |              0.07254 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3662 | 5-10%                   |                 2 |              0.1831  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3687 | 15-20%                  |                10 |              0.03687 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3775 | 5-10%                   |                 2 |              0.18875 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3799 | >20%                    |                 5 |              0.07598 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3846 | 15-20%                  |                 2 |              0.1923  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3866 | <5%                     |                10 |              0.03866 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3908 | >20%                    |                 2 |              0.1954  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3963 | 5-10%                   |                 5 |              0.07926 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4024 | 5-10%                   |                 2 |              0.2012  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4024 | >20%                    |                10 |              0.04024 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4031 | <5%                     |                 2 |              0.20155 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4113 | 10-15%                  |                 2 |              0.20565 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4157 | 5-10%                   |                 5 |              0.08314 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4184 | >20%                    |                 5 |              0.08368 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4249 | <5%                     |                 2 |              0.21245 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4255 | >20%                    |                 5 |              0.0851  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4448 | <5%                     |                 5 |              0.08896 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4455 | <5%                     |                 2 |              0.22275 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4503 | >20%                    |                 5 |              0.09006 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4571 | >20%                    |                 2 |              0.22855 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.472  | 5-10%                   |                 2 |              0.236   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4727 | 5-10%                   |                 5 |              0.09454 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4749 | 15-20%                  |                 5 |              0.09498 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4824 | 10-15%                  |                 5 |              0.09648 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4836 | <5%                     |                 5 |              0.09672 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4885 | >20%                    |                 2 |              0.24425 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4907 | 10-15%                  |                 5 |              0.09814 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5047 | >20%                    |                 5 |              0.10094 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5068 | >20%                    |                 5 |              0.10136 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5115 | >20%                    |                 2 |              0.25575 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5132 | >20%                    |                 2 |              0.2566  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5153 | 5-10%                   |                 2 |              0.25765 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5193 | 10-15%                  |                 5 |              0.10386 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5195 | <5%                     |                 5 |              0.1039  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5203 | 5-10%                   |                 5 |              0.10406 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.53   | >20%                    |                 2 |              0.265   |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5321 | >20%                    |                 5 |              0.10642 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5328 | >20%                    |                 2 |              0.2664  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5388 | <5%                     |                 2 |              0.2694  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5434 | 15-20%                  |                 2 |              0.2717  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5441 | >20%                    |                 2 |              0.27205 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5484 | 5-10%                   |                 5 |              0.10968 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5506 | >20%                    |                 5 |              0.11012 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5521 | >20%                    |                 2 |              0.27605 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5617 | >20%                    |                 2 |              0.28085 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.565  | 10-15%                  |                 5 |              0.113   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5699 | >20%                    |                 5 |              0.11398 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5729 | <5%                     |                 5 |              0.11458 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5761 | 10-15%                  |                 2 |              0.28805 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5777 | >20%                    |                 5 |              0.11554 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5835 | <5%                     |                 5 |              0.1167  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.588  | 10-15%                  |                 5 |              0.1176  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5921 | 10-15%                  |                 5 |              0.11842 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5936 | <5%                     |                10 |              0.05936 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5949 | 5-10%                   |                10 |              0.05949 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5951 | 5-10%                   |                10 |              0.05951 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6134 | 5-10%                   |                 5 |              0.12268 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6182 | <5%                     |                10 |              0.06182 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.628  | >20%                    |                 5 |              0.1256  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6331 | >20%                    |                10 |              0.06331 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6331 | 10-15%                  |                 5 |              0.12662 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6559 | >20%                    |                 2 |              0.32795 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6605 | >20%                    |                 2 |              0.33025 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6641 | 5-10%                   |                 5 |              0.13282 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.677  | >20%                    |                10 |              0.0677  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6852 | >20%                    |                 5 |              0.13704 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6865 | 10-15%                  |                 5 |              0.1373  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6928 | >20%                    |                 5 |              0.13856 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7103 | >20%                    |                10 |              0.07103 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7136 | 15-20%                  |                 5 |              0.14272 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7146 | >20%                    |                10 |              0.07146 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7238 | 5-10%                   |                10 |              0.07238 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7265 | >20%                    |                 5 |              0.1453  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7276 | >20%                    |                10 |              0.07276 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7536 | >20%                    |                 5 |              0.15072 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7624 | <5%                     |                 5 |              0.15248 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7646 | 15-20%                  |                10 |              0.07646 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7758 | >20%                    |                 5 |              0.15516 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7807 | >20%                    |                 5 |              0.15614 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.781  | 15-20%                  |                10 |              0.0781  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7921 | <5%                     |                 5 |              0.15842 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7957 | <5%                     |                10 |              0.07957 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8058 | >20%                    |                10 |              0.08058 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8085 | 5-10%                   |                10 |              0.08085 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8173 | >20%                    |                10 |              0.08173 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8189 | 5-10%                   |                 2 |              0.40945 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8206 | 10-15%                  |                10 |              0.08206 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8229 | 15-20%                  |                 2 |              0.41145 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8277 | <5%                     |                10 |              0.08277 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8318 | >20%                    |                10 |              0.08318 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8349 | >20%                    |                10 |              0.08349 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8438 | <5%                     |                10 |              0.08438 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8454 | 10-15%                  |                10 |              0.08454 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8454 | <5%                     |                10 |              0.08454 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.846  | 15-20%                  |                10 |              0.0846  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8506 | 10-15%                  |                10 |              0.08506 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8657 | 5-10%                   |                 5 |              0.17314 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8803 | 15-20%                  |                10 |              0.08803 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8847 | <5%                     |                10 |              0.08847 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.896  | 15-20%                  |                 5 |              0.1792  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8964 | >20%                    |                 2 |              0.4482  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8996 | >20%                    |                10 |              0.08996 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.91   | <5%                     |                10 |              0.091   |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9409 | <5%                     |                10 |              0.09409 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9416 | 15-20%                  |                 5 |              0.18832 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9534 | <5%                     |                10 |              0.09534 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9802 | 10-15%                  |                10 |              0.09802 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9837 | 10-15%                  |                10 |              0.09837 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.988  | >20%                    |                10 |              0.0988  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0012 | >20%                    |                10 |              0.10012 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.053  | <5%                     |                10 |              0.1053  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.054  | <5%                     |                10 |              0.1054  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0833 | 15-20%                  |                10 |              0.10833 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1329 | >20%                    |                 2 |              0.56645 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1417 | 15-20%                  |                10 |              0.11417 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1486 | >20%                    |                10 |              0.11486 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1609 | 5-10%                   |                10 |              0.11609 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1652 | >20%                    |                 2 |              0.5826  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1992 | >20%                    |                 5 |              0.23984 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1998 | 10-15%                  |                 2 |              0.5999  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2305 | >20%                    |                 5 |              0.2461  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2423 | 10-15%                  |                 5 |              0.24846 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3301 | >20%                    |                10 |              0.13301 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3623 | >20%                    |                10 |              0.13623 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.471  | >20%                    |                10 |              0.1471  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6986 | >20%                    |                10 |              0.16986 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7184 | >20%                    |                10 |              0.17184 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0088 | 5-10%                   |                10 |              0.20088 |