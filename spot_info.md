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

Data correct as of 2024-09-26 01:36:24.083995, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0932 | <5%                     |                 2 |              0.0466  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1085 |                         |                 2 |              0.05425 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1222 |                         |                 2 |              0.0611  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1241 |                         |                 2 |              0.06205 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1404 | 5-10%                   |                 2 |              0.0702  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.1418 |                         |                 2 |              0.0709  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.1469 |                         |                 5 |              0.02938 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.1655 |                         |                 5 |              0.0331  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.168  |                         |                 5 |              0.0336  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.1919 |                         |                 5 |              0.03838 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1971 | 15-20%                  |                 2 |              0.09855 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2011 | <5%                     |                 2 |              0.10055 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.2237 |                         |                10 |              0.02237 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2276 | 5-10%                   |                 2 |              0.1138  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2332 | <5%                     |                 2 |              0.1166  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2388 | 15-20%                  |                 2 |              0.1194  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2406 | 15-20%                  |                 5 |              0.04812 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2427 | <5%                     |                 2 |              0.12135 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.2519 |                         |                10 |              0.02519 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2549 | 15-20%                  |                 5 |              0.05098 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2557 |                         |                10 |              0.02557 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2642 | <5%                     |                 2 |              0.1321  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2736 | >20%                    |                10 |              0.02736 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2757 | <5%                     |                 2 |              0.13785 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | <5%                     |                 5 |              0.0552  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2826 | <5%                     |                 5 |              0.05652 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2842 | 10-15%                  |                 2 |              0.1421  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2873 | <5%                     |                 2 |              0.14365 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2886 | <5%                     |                 2 |              0.1443  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.2921 |                         |                10 |              0.02921 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2962 | >20%                    |                 5 |              0.05924 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3017 | <5%                     |                 2 |              0.15085 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3025 | 5-10%                   |                 2 |              0.15125 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3473 | 15-20%                  |                10 |              0.03473 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.349  | <5%                     |                 2 |              0.1745  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3504 | <5%                     |                 5 |              0.07008 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3522 | <5%                     |                10 |              0.03522 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3523 | 10-15%                  |                 2 |              0.17615 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3538 | <5%                     |                 2 |              0.1769  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3636 | 5-10%                   |                 5 |              0.07272 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3692 | <5%                     |                 2 |              0.1846  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | <5%                     |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3807 | <5%                     |                 5 |              0.07614 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3896 | <5%                     |                 2 |              0.1948  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3972 | >20%                    |                 2 |              0.1986  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3983 | 5-10%                   |                 5 |              0.07966 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4055 | >20%                    |                 2 |              0.20275 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4108 | 5-10%                   |                 2 |              0.2054  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4171 | <5%                     |                 2 |              0.20855 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4177 | >20%                    |                 2 |              0.20885 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4258 | >20%                    |                 5 |              0.08516 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4301 | 15-20%                  |                 5 |              0.08602 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4399 | <5%                     |                 2 |              0.21995 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4418 | <5%                     |                 5 |              0.08836 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4428 | 10-15%                  |                 2 |              0.2214  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4438 | <5%                     |                 5 |              0.08876 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4458 | >20%                    |                 2 |              0.2229  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4508 | 5-10%                   |                 5 |              0.09016 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4682 | <5%                     |                 5 |              0.09364 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4748 | 5-10%                   |                 5 |              0.09496 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4824 | <5%                     |                 5 |              0.09648 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4857 | 15-20%                  |                 2 |              0.24285 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4862 | 15-20%                  |                 5 |              0.09724 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4864 | >20%                    |                 2 |              0.2432  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4891 | 10-15%                  |                10 |              0.04891 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4908 | 5-10%                   |                 5 |              0.09816 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.496  | >20%                    |                 5 |              0.0992  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5093 | 10-15%                  |                 5 |              0.10186 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5347 | <5%                     |                 5 |              0.10694 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5384 | <5%                     |                 5 |              0.10768 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5419 | <5%                     |                 5 |              0.10838 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5426 | 15-20%                  |                 2 |              0.2713  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5514 | >20%                    |                 5 |              0.11028 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5515 | >20%                    |                10 |              0.05515 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5601 | >20%                    |                 2 |              0.28005 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5612 | 5-10%                   |                 5 |              0.11224 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5839 | 5-10%                   |                 5 |              0.11678 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5852 | >20%                    |                10 |              0.05852 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5954 | >20%                    |                 5 |              0.11908 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.611  | 15-20%                  |                 2 |              0.3055  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6142 | >20%                    |                 5 |              0.12284 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6237 | >20%                    |                10 |              0.06237 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6255 | >20%                    |                 5 |              0.1251  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.6415 | <5%                     |                10 |              0.06415 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6465 | 5-10%                   |                10 |              0.06465 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6709 | >20%                    |                 5 |              0.13418 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6852 | <5%                     |                10 |              0.06852 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6961 | <5%                     |                10 |              0.06961 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7301 | >20%                    |                 2 |              0.36505 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7348 | >20%                    |                 5 |              0.14696 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7625 | 15-20%                  |                10 |              0.07625 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7708 | >20%                    |                 5 |              0.15416 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7713 | 10-15%                  |                10 |              0.07713 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7726 | <5%                     |                10 |              0.07726 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.781  | >20%                    |                10 |              0.0781  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7859 | 15-20%                  |                10 |              0.07859 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.787  | 10-15%                  |                10 |              0.0787  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8065 | >20%                    |                10 |              0.08065 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8159 | >20%                    |                10 |              0.08159 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8253 | 5-10%                   |                 2 |              0.41265 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8504 | >20%                    |                10 |              0.08504 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8514 | <5%                     |                 2 |              0.4257  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.8685 | >20%                    |                 5 |              0.1737  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8732 | >20%                    |                10 |              0.08732 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.874  | <5%                     |                10 |              0.0874  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8992 | >20%                    |                10 |              0.08992 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9036 | 5-10%                   |                10 |              0.09036 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9086 | 5-10%                   |                10 |              0.09086 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9127 | >20%                    |                 5 |              0.18254 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9189 | 5-10%                   |                 5 |              0.18378 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9193 | <5%                     |                10 |              0.09193 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0129 | 5-10%                   |                10 |              0.10129 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0292 | 10-15%                  |                10 |              0.10292 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.033  | >20%                    |                10 |              0.1033  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0688 | <5%                     |                 2 |              0.5344  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0946 | >20%                    |                10 |              0.10946 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1189 | 10-15%                  |                 5 |              0.22378 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1323 | >20%                    |                10 |              0.11323 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2133 | >20%                    |                10 |              0.12133 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2829 | 15-20%                  |                10 |              0.12829 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4663 | >20%                    |                10 |              0.14663 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.8564 | 5-10%                   |                10 |              0.18564 |