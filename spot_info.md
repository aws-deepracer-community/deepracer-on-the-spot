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

Data correct as of 2025-03-21 01:44:57.710976, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1191 | 10-15%                  |                 2 |              0.05955 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1398 | 5-10%                   |                 5 |              0.02796 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1759 | >20%                    |                 5 |              0.03518 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1899 | 10-15%                  |                 2 |              0.09495 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2013 | >20%                    |                 2 |              0.10065 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2099 | 5-10%                   |                 2 |              0.10495 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2162 | 5-10%                   |                 5 |              0.04324 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2244 | 15-20%                  |                 2 |              0.1122  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.227  | >20%                    |                 2 |              0.1135  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2348 | 15-20%                  |                 2 |              0.1174  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.244  | >20%                    |                 2 |              0.122   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2464 | >20%                    |                 2 |              0.1232  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2468 | 5-10%                   |                 2 |              0.1234  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2573 | 5-10%                   |                 2 |              0.12865 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2624 | 5-10%                   |                10 |              0.02624 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2682 | 5-10%                   |                 2 |              0.1341  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2762 | <5%                     |                 2 |              0.1381  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2839 | <5%                     |                 2 |              0.14195 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2888 | <5%                     |                 2 |              0.1444  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2963 | 15-20%                  |                 5 |              0.05926 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2969 | 10-15%                  |                 2 |              0.14845 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2977 | 5-10%                   |                 2 |              0.14885 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2981 | >20%                    |                 2 |              0.14905 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3063 | >20%                    |                 5 |              0.06126 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3082 | >20%                    |                 2 |              0.1541  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.309  | 5-10%                   |                 2 |              0.1545  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3128 | >20%                    |                 2 |              0.1564  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3148 | 10-15%                  |                10 |              0.03148 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3245 | >20%                    |                 2 |              0.16225 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3303 | 10-15%                  |                 2 |              0.16515 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3335 | >20%                    |                 5 |              0.0667  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | 5-10%                   |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3544 | >20%                    |                 2 |              0.1772  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3583 | >20%                    |                 2 |              0.17915 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3604 | 5-10%                   |                10 |              0.03604 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3608 | >20%                    |                 2 |              0.1804  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3624 | 10-15%                  |                 5 |              0.07248 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3631 | 10-15%                  |                 5 |              0.07262 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3635 | >20%                    |                 2 |              0.18175 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3657 | >20%                    |                 5 |              0.07314 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3682 | >20%                    |                 2 |              0.1841  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.3694 |                         |                 5 |              0.07388 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3695 | >20%                    |                 2 |              0.18475 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.3727 |                         |                 2 |              0.18635 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3728 | >20%                    |                 5 |              0.07456 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3745 | 10-15%                  |                 5 |              0.0749  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3777 | 10-15%                  |                10 |              0.03777 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3834 | 15-20%                  |                10 |              0.03834 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3873 | <5%                     |                 2 |              0.19365 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3907 | 5-10%                   |                 2 |              0.19535 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.404  | <5%                     |                 2 |              0.202   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4054 | >20%                    |                 2 |              0.2027  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4055 | >20%                    |                 2 |              0.20275 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4078 | 15-20%                  |                 2 |              0.2039  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4085 | >20%                    |                 5 |              0.0817  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.4105 | >20%                    |                 5 |              0.0821  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4105 | 5-10%                   |                 2 |              0.20525 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4136 | 5-10%                   |                10 |              0.04136 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4151 | 5-10%                   |                 2 |              0.20755 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4176 | 5-10%                   |                 2 |              0.2088  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4202 | >20%                    |                10 |              0.04202 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4203 | >20%                    |                 5 |              0.08406 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4208 | >20%                    |                10 |              0.04208 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4263 | <5%                     |                 2 |              0.21315 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4275 | 5-10%                   |                 5 |              0.0855  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4287 | 5-10%                   |                 5 |              0.08574 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4301 | 5-10%                   |                 5 |              0.08602 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4314 | >20%                    |                 2 |              0.2157  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4345 | <5%                     |                 5 |              0.0869  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4369 | <5%                     |                 5 |              0.08738 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4419 | 5-10%                   |                 5 |              0.08838 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4431 | >20%                    |                10 |              0.04431 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4485 | >20%                    |                 2 |              0.22425 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4516 | <5%                     |                 5 |              0.09032 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4519 | 5-10%                   |                 2 |              0.22595 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4639 | 5-10%                   |                 5 |              0.09278 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4682 | >20%                    |                 5 |              0.09364 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4719 | 10-15%                  |                 2 |              0.23595 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4724 | 10-15%                  |                 5 |              0.09448 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.476  | <5%                     |                 5 |              0.0952  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4788 | >20%                    |                 5 |              0.09576 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4793 | >20%                    |                 5 |              0.09586 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4952 | >20%                    |                 2 |              0.2476  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5009 | >20%                    |                 5 |              0.10018 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5016 | >20%                    |                 2 |              0.2508  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5036 | <5%                     |                10 |              0.05036 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5098 | 10-15%                  |                10 |              0.05098 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5153 | 5-10%                   |                 5 |              0.10306 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5243 | >20%                    |                 2 |              0.26215 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.5285 | 5-10%                   |                 5 |              0.1057  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5288 | >20%                    |                 2 |              0.2644  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.536  | 10-15%                  |                 5 |              0.1072  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5372 | >20%                    |                 5 |              0.10744 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5379 | 15-20%                  |                 2 |              0.26895 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.538  | >20%                    |                 5 |              0.1076  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.541  | <5%                     |                 5 |              0.1082  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5414 | 15-20%                  |                 2 |              0.2707  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5434 | >20%                    |                 5 |              0.10868 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5509 | 5-10%                   |                 5 |              0.11018 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.551  | 15-20%                  |                 5 |              0.1102  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5573 | >20%                    |                 2 |              0.27865 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5607 | <5%                     |                10 |              0.05607 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5643 | >20%                    |                 5 |              0.11286 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5671 | 5-10%                   |                 5 |              0.11342 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5681 | 10-15%                  |                 5 |              0.11362 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5737 | 15-20%                  |                 5 |              0.11474 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.5775 | >20%                    |                 2 |              0.28875 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5884 | >20%                    |                 2 |              0.2942  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5902 | <5%                     |                 5 |              0.11804 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5952 | >20%                    |                 5 |              0.11904 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.598  | >20%                    |                 5 |              0.1196  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6002 | <5%                     |                 2 |              0.3001  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6265 | >20%                    |                 5 |              0.1253  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6323 | >20%                    |                10 |              0.06323 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6357 | >20%                    |                10 |              0.06357 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6708 | 10-15%                  |                 5 |              0.13416 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6857 | >20%                    |                 5 |              0.13714 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6872 | >20%                    |                 2 |              0.3436  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6993 | >20%                    |                 5 |              0.13986 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.6996 | 5-10%                   |                 2 |              0.3498  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7028 | >20%                    |                10 |              0.07028 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7164 |                         |                10 |              0.07164 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7173 | >20%                    |                10 |              0.07173 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7228 | <5%                     |                10 |              0.07228 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7255 | >20%                    |                10 |              0.07255 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7264 | <5%                     |                 5 |              0.14528 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7284 | >20%                    |                10 |              0.07284 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7316 | 5-10%                   |                10 |              0.07316 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7341 | >20%                    |                10 |              0.07341 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7357 | 5-10%                   |                 5 |              0.14714 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.737  | 5-10%                   |                10 |              0.0737  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7426 | 15-20%                  |                 5 |              0.14852 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7568 | <5%                     |                10 |              0.07568 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7626 | 5-10%                   |                10 |              0.07626 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7688 | >20%                    |                 5 |              0.15376 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7703 | >20%                    |                 5 |              0.15406 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7703 | >20%                    |                10 |              0.07703 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7721 | <5%                     |                10 |              0.07721 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7877 | >20%                    |                 2 |              0.39385 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8134 | <5%                     |                10 |              0.08134 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.8202 | >20%                    |                 5 |              0.16404 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8345 | >20%                    |                10 |              0.08345 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8499 | >20%                    |                10 |              0.08499 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8517 | 15-20%                  |                10 |              0.08517 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8564 | >20%                    |                 2 |              0.4282  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8596 | 5-10%                   |                10 |              0.08596 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8617 | 15-20%                  |                 5 |              0.17234 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8626 | >20%                    |                10 |              0.08626 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.87   | <5%                     |                10 |              0.087   |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.87   | 15-20%                  |                10 |              0.087   |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8739 | 5-10%                   |                10 |              0.08739 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8784 | >20%                    |                10 |              0.08784 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8794 | <5%                     |                10 |              0.08794 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8868 | >20%                    |                10 |              0.08868 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9022 | >20%                    |                10 |              0.09022 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9136 | >20%                    |                10 |              0.09136 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.924  | >20%                    |                 2 |              0.462   |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9907 | 10-15%                  |                10 |              0.09907 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0195 | 5-10%                   |                10 |              0.10195 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0302 | >20%                    |                 5 |              0.20604 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0474 | >20%                    |                10 |              0.10474 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.061  | 5-10%                   |                10 |              0.1061  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0842 | >20%                    |                10 |              0.10842 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.118  | <5%                     |                10 |              0.1118  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1193 | 15-20%                  |                10 |              0.11193 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1275 | 5-10%                   |                10 |              0.11275 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1654 | 15-20%                  |                10 |              0.11654 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1913 | >20%                    |                10 |              0.11913 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2162 | >20%                    |                 5 |              0.24324 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2338 | >20%                    |                10 |              0.12338 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2408 | >20%                    |                10 |              0.12408 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2904 | 5-10%                   |                 5 |              0.25808 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3435 | >20%                    |                 5 |              0.2687  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.347  | 5-10%                   |                 2 |              0.6735  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3648 | >20%                    |                 2 |              0.6824  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4791 | >20%                    |                10 |              0.14791 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5035 | >20%                    |                10 |              0.15035 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.515  | 10-15%                  |                 5 |              0.303   |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7202 | >20%                    |                10 |              0.17202 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1392 | 5-10%                   |                10 |              0.21392 |