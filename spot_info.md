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

Data correct as of 2025-01-07 01:38:38.469613, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1396 | 10-15%                  |                 2 |              0.0698  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | <5%                     |                 2 |              0.103   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2169 | 10-15%                  |                 2 |              0.10845 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.223  | 5-10%                   |                 2 |              0.1115  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2323 | 15-20%                  |                 2 |              0.11615 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.234  | 5-10%                   |                 2 |              0.117   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.241  | <5%                     |                 2 |              0.1205  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2478 | 15-20%                  |                 2 |              0.1239  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2514 | 10-15%                  |                 2 |              0.1257  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2549 | 5-10%                   |                 2 |              0.12745 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2661 | 10-15%                  |                 2 |              0.13305 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2694 | <5%                     |                 2 |              0.1347  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2803 | <5%                     |                 5 |              0.05606 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2829 | >20%                    |                 2 |              0.14145 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2898 | <5%                     |                 2 |              0.1449  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2947 | <5%                     |                 5 |              0.05894 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2952 | <5%                     |                 2 |              0.1476  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3043 | 5-10%                   |                 2 |              0.15215 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3093 | 5-10%                   |                 2 |              0.15465 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3117 | >20%                    |                 5 |              0.06234 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3217 | >20%                    |                10 |              0.03217 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3266 | 5-10%                   |                 2 |              0.1633  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3333 | 5-10%                   |                 5 |              0.06666 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3373 | >20%                    |                10 |              0.03373 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3429 | <5%                     |                 5 |              0.06858 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3456 | <5%                     |                 2 |              0.1728  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.349  | 15-20%                  |                 5 |              0.0698  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.355  | 10-15%                  |                 5 |              0.071   |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3609 | <5%                     |                 2 |              0.18045 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3641 | 5-10%                   |                 2 |              0.18205 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3717 | >20%                    |                 2 |              0.18585 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.372  | <5%                     |                 2 |              0.186   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.376  | <5%                     |                 5 |              0.0752  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.376  | >20%                    |                 2 |              0.188   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3937 | 5-10%                   |                 2 |              0.19685 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3943 | >20%                    |                 2 |              0.19715 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3985 | 10-15%                  |                 5 |              0.0797  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4019 | <5%                     |                 2 |              0.20095 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4024 | <5%                     |                 2 |              0.2012  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.403  | 5-10%                   |                 2 |              0.2015  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4075 | <5%                     |                 5 |              0.0815  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4105 | >20%                    |                 2 |              0.20525 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.423  | 10-15%                  |                 2 |              0.2115  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4258 | 5-10%                   |                 5 |              0.08516 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4305 | 5-10%                   |                 2 |              0.21525 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4305 | 5-10%                   |                 2 |              0.21525 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4362 | <5%                     |                 2 |              0.2181  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4477 | 15-20%                  |                10 |              0.04477 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4544 | 10-15%                  |                10 |              0.04544 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4666 | <5%                     |                 5 |              0.09332 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4671 | <5%                     |                 2 |              0.23355 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4694 | 5-10%                   |                 5 |              0.09388 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4701 | 10-15%                  |                 5 |              0.09402 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4719 | >20%                    |                 5 |              0.09438 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4743 | 10-15%                  |                 5 |              0.09486 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4811 | 5-10%                   |                 2 |              0.24055 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4839 | <5%                     |                 5 |              0.09678 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4883 | <5%                     |                 5 |              0.09766 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.489  | >20%                    |                 5 |              0.0978  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4906 | 15-20%                  |                 5 |              0.09812 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4964 | 15-20%                  |                 2 |              0.2482  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4978 | <5%                     |                 2 |              0.2489  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5022 | 5-10%                   |                10 |              0.05022 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5032 | <5%                     |                 5 |              0.10064 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.508  | <5%                     |                 2 |              0.254   |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5138 | <5%                     |                 5 |              0.10276 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5178 | 15-20%                  |                 2 |              0.2589  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5191 | >20%                    |                 5 |              0.10382 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5271 | <5%                     |                 5 |              0.10542 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5295 | >20%                    |                 5 |              0.1059  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5412 | >20%                    |                 5 |              0.10824 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5421 | 5-10%                   |                 5 |              0.10842 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5433 | 10-15%                  |                 5 |              0.10866 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.55   | 5-10%                   |                 5 |              0.11    |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5579 | 5-10%                   |                 5 |              0.11158 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5625 | <5%                     |                 5 |              0.1125  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5718 | 15-20%                  |                 2 |              0.2859  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5791 | 10-15%                  |                10 |              0.05791 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5807 | <5%                     |                 5 |              0.11614 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.581  | >20%                    |                 5 |              0.1162  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5832 | 10-15%                  |                 5 |              0.11664 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5844 | 5-10%                   |                 5 |              0.11688 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5906 | 15-20%                  |                 2 |              0.2953  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6281 | 5-10%                   |                10 |              0.06281 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6615 | >20%                    |                10 |              0.06615 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6694 | <5%                     |                 5 |              0.13388 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6763 | >20%                    |                 5 |              0.13526 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.677  | >20%                    |                 2 |              0.3385  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.686  | 15-20%                  |                10 |              0.0686  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6943 | 5-10%                   |                10 |              0.06943 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7011 | 15-20%                  |                 2 |              0.35055 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7108 | 15-20%                  |                 5 |              0.14216 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7195 | 15-20%                  |                 5 |              0.1439  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7275 | <5%                     |                 5 |              0.1455  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7313 | >20%                    |                10 |              0.07313 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7333 | 10-15%                  |                10 |              0.07333 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7367 | 5-10%                   |                 2 |              0.36835 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7423 | <5%                     |                10 |              0.07423 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7575 | <5%                     |                10 |              0.07575 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7587 | >20%                    |                10 |              0.07587 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7628 | >20%                    |                 5 |              0.15256 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8022 | >20%                    |                10 |              0.08022 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8084 | >20%                    |                 5 |              0.16168 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8127 | 5-10%                   |                10 |              0.08127 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8205 | 10-15%                  |                10 |              0.08205 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.8232 | >20%                    |                 5 |              0.16464 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8237 | <5%                     |                10 |              0.08237 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8263 | 15-20%                  |                10 |              0.08263 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8384 | <5%                     |                10 |              0.08384 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8416 | <5%                     |                 2 |              0.4208  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8512 | >20%                    |                10 |              0.08512 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.856  | >20%                    |                10 |              0.0856  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.856  | 5-10%                   |                10 |              0.0856  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8562 | <5%                     |                10 |              0.08562 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8699 | <5%                     |                10 |              0.08699 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8714 | 15-20%                  |                10 |              0.08714 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8788 | 5-10%                   |                10 |              0.08788 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9012 | <5%                     |                10 |              0.09012 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9175 | 5-10%                   |                10 |              0.09175 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9276 | 10-15%                  |                10 |              0.09276 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9287 | <5%                     |                10 |              0.09287 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9494 | <5%                     |                 2 |              0.4747  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9551 | 5-10%                   |                10 |              0.09551 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.967  | 10-15%                  |                 5 |              0.1934  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9789 | 15-20%                  |                 5 |              0.19578 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9963 | >20%                    |                10 |              0.09963 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0047 | 5-10%                   |                 5 |              0.20094 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0071 | <5%                     |                10 |              0.10071 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0178 | <5%                     |                10 |              0.10178 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0287 | 5-10%                   |                 5 |              0.20574 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0302 | 15-20%                  |                 2 |              0.5151  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.032  | 5-10%                   |                10 |              0.1032  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0529 | <5%                     |                10 |              0.10529 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1171 | >20%                    |                10 |              0.11171 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1542 | 10-15%                  |                10 |              0.11542 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3748 | >20%                    |                10 |              0.13748 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3815 | 5-10%                   |                10 |              0.13815 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4799 | <5%                     |                10 |              0.14799 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.496  | 15-20%                  |                 5 |              0.2992  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5004 | 10-15%                  |                10 |              0.15004 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5898 | 5-10%                   |                10 |              0.15898 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.171  | 15-20%                  |                10 |              0.2171  |