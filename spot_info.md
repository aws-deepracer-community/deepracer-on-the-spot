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

Data correct as of 2026-03-26 02:45:44.216554, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1097 | >20%                    |                 2 |              0.05485 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1241 | >20%                    |                 2 |              0.06205 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1367 | <5%                     |                 2 |              0.06835 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1597 | 10-15%                  |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1988 | >20%                    |                 2 |              0.0994  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1992 | 15-20%                  |                 2 |              0.0996  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2194 | 10-15%                  |                 5 |              0.04388 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2241 | 15-20%                  |                 2 |              0.11205 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2289 | >20%                    |                 2 |              0.11445 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2426 | >20%                    |                 2 |              0.1213  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.243  | 10-15%                  |                10 |              0.0243  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2441 | >20%                    |                 2 |              0.12205 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2544 | >20%                    |                 2 |              0.1272  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2582 | >20%                    |                 2 |              0.1291  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2584 | 5-10%                   |                10 |              0.02584 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2608 | 10-15%                  |                 2 |              0.1304  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2671 | 15-20%                  |                 5 |              0.05342 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.269  | >20%                    |                 2 |              0.1345  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2793 | 15-20%                  |                 2 |              0.13965 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | >20%                    |                10 |              0.02887 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2913 | >20%                    |                10 |              0.02913 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.294  | 5-10%                   |                 2 |              0.147   |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.2985 | 10-15%                  |                 2 |              0.14925 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.307  | >20%                    |                 2 |              0.1535  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3106 | >20%                    |                 5 |              0.06212 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3112 | 10-15%                  |                 2 |              0.1556  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3113 | >20%                    |                10 |              0.03113 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3126 | >20%                    |                 2 |              0.1563  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3145 | >20%                    |                 5 |              0.0629  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3152 | >20%                    |                 5 |              0.06304 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.32   | 5-10%                   |                10 |              0.032   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.322  | <5%                     |                 5 |              0.0644  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3339 | >20%                    |                10 |              0.03339 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3344 | <5%                     |                 2 |              0.1672  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3376 | >20%                    |                 5 |              0.06752 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.342  | >20%                    |                 2 |              0.171   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3424 | >20%                    |                 5 |              0.06848 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3445 | 15-20%                  |                 5 |              0.0689  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3463 | <5%                     |                 2 |              0.17315 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3515 | 10-15%                  |                 2 |              0.17575 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3526 | 15-20%                  |                 5 |              0.07052 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3526 | <5%                     |                 2 |              0.1763  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3532 | >20%                    |                10 |              0.03532 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3675 | 15-20%                  |                 2 |              0.18375 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3681 | >20%                    |                 2 |              0.18405 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3704 | >20%                    |                 5 |              0.07408 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3739 | >20%                    |                 2 |              0.18695 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.3752 | 10-15%                  |                 5 |              0.07504 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3799 | <5%                     |                 5 |              0.07598 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3954 | 15-20%                  |                10 |              0.03954 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3955 | <5%                     |                10 |              0.03955 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3957 | >20%                    |                 5 |              0.07914 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4029 | >20%                    |                 2 |              0.20145 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4074 | >20%                    |                 5 |              0.08148 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4075 | 10-15%                  |                 2 |              0.20375 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4103 | 10-15%                  |                 2 |              0.20515 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4104 | >20%                    |                 5 |              0.08208 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4141 | 15-20%                  |                 2 |              0.20705 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4202 | >20%                    |                 2 |              0.2101  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4222 | <5%                     |                 5 |              0.08444 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4231 | 15-20%                  |                10 |              0.04231 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.4235 | >20%                    |                 2 |              0.21175 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4237 | >20%                    |                 2 |              0.21185 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4255 | >20%                    |                 5 |              0.0851  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4258 | <5%                     |                 2 |              0.2129  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4271 | >20%                    |                 5 |              0.08542 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4388 | <5%                     |                10 |              0.04388 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4428 | >20%                    |                 2 |              0.2214  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.4435 | <5%                     |                10 |              0.04435 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4459 | >20%                    |                 2 |              0.22295 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.446  | 5-10%                   |                10 |              0.0446  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4462 | >20%                    |                 2 |              0.2231  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4476 | 15-20%                  |                 2 |              0.2238  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4489 | >20%                    |                10 |              0.04489 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4506 | >20%                    |                 5 |              0.09012 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.454  | >20%                    |                 5 |              0.0908  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4601 | >20%                    |                 5 |              0.09202 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4615 | >20%                    |                 2 |              0.23075 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4643 | >20%                    |                 5 |              0.09286 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.4738 | >20%                    |                 5 |              0.09476 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4801 | >20%                    |                 5 |              0.09602 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4811 | >20%                    |                 5 |              0.09622 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4875 | <5%                     |                10 |              0.04875 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4878 | >20%                    |                 2 |              0.2439  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4895 | >20%                    |                 5 |              0.0979  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4927 | >20%                    |                 5 |              0.09854 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4981 | >20%                    |                 5 |              0.09962 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5027 | >20%                    |                 5 |              0.10054 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5029 | >20%                    |                 2 |              0.25145 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5037 | >20%                    |                 5 |              0.10074 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5116 | >20%                    |                 5 |              0.10232 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5215 | 15-20%                  |                 2 |              0.26075 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5233 | 15-20%                  |                 5 |              0.10466 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5498 | 5-10%                   |                 5 |              0.10996 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5516 | >20%                    |                 2 |              0.2758  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5551 | >20%                    |                10 |              0.05551 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5555 | >20%                    |                10 |              0.05555 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5601 | 15-20%                  |                10 |              0.05601 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5627 | >20%                    |                 5 |              0.11254 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5668 | >20%                    |                10 |              0.05668 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.568  | >20%                    |                 5 |              0.1136  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5692 | >20%                    |                 2 |              0.2846  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5692 | >20%                    |                 2 |              0.2846  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5783 | >20%                    |                10 |              0.05783 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5845 | 5-10%                   |                 2 |              0.29225 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5867 | 10-15%                  |                10 |              0.05867 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.588  | <5%                     |                10 |              0.0588  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5899 | 10-15%                  |                 5 |              0.11798 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5945 | >20%                    |                 5 |              0.1189  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5967 | >20%                    |                10 |              0.05967 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5996 | >20%                    |                 5 |              0.11992 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6047 | >20%                    |                10 |              0.06047 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6123 | >20%                    |                 2 |              0.30615 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6194 | >20%                    |                 5 |              0.12388 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6312 | 10-15%                  |                 2 |              0.3156  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.637  | >20%                    |                 5 |              0.1274  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6462 | >20%                    |                 5 |              0.12924 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.648  | >20%                    |                 5 |              0.1296  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6591 | >20%                    |                10 |              0.06591 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6606 | 5-10%                   |                10 |              0.06606 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6686 | >20%                    |                 2 |              0.3343  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6735 | 5-10%                   |                 5 |              0.1347  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6754 | >20%                    |                10 |              0.06754 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6796 | >20%                    |                10 |              0.06796 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6848 | >20%                    |                 5 |              0.13696 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6911 | >20%                    |                10 |              0.06911 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6976 | >20%                    |                 2 |              0.3488  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7112 | >20%                    |                10 |              0.07112 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7207 | >20%                    |                 5 |              0.14414 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.7219 | <5%                     |                 2 |              0.36095 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7287 | 5-10%                   |                 2 |              0.36435 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.73   | >20%                    |                10 |              0.073   |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7306 | >20%                    |                 5 |              0.14612 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7378 | >20%                    |                10 |              0.07378 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.744  | >20%                    |                 5 |              0.1488  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7594 | >20%                    |                 5 |              0.15188 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7679 | >20%                    |                10 |              0.07679 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7698 | >20%                    |                10 |              0.07698 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7842 | >20%                    |                 5 |              0.15684 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7843 | >20%                    |                 5 |              0.15686 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8061 | >20%                    |                10 |              0.08061 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8125 | 5-10%                   |                 2 |              0.40625 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.833  | >20%                    |                 2 |              0.4165  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8371 | >20%                    |                 5 |              0.16742 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8379 | >20%                    |                10 |              0.08379 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8465 | >20%                    |                10 |              0.08465 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8484 | 5-10%                   |                10 |              0.08484 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.851  | >20%                    |                10 |              0.0851  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8521 | >20%                    |                 5 |              0.17042 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8563 | >20%                    |                 2 |              0.42815 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8816 | >20%                    |                10 |              0.08816 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8996 | >20%                    |                10 |              0.08996 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9065 | <5%                     |                 5 |              0.1813  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9185 | 15-20%                  |                10 |              0.09185 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9281 | >20%                    |                 2 |              0.46405 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9361 | >20%                    |                10 |              0.09361 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.943  | >20%                    |                10 |              0.0943  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9544 | 10-15%                  |                10 |              0.09544 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9597 | 15-20%                  |                10 |              0.09597 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9668 | >20%                    |                 2 |              0.4834  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9681 | >20%                    |                10 |              0.09681 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9856 | >20%                    |                10 |              0.09856 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0046 | 15-20%                  |                10 |              0.10046 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.023  | 5-10%                   |                10 |              0.1023  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.052  | >20%                    |                 5 |              0.2104  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      1.0598 | >20%                    |                 5 |              0.21196 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0611 | >20%                    |                10 |              0.10611 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0616 | >20%                    |                10 |              0.10616 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0821 | >20%                    |                10 |              0.10821 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.084  | 10-15%                  |                 2 |              0.542   |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1674 | >20%                    |                 5 |              0.23348 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1846 | 10-15%                  |                10 |              0.11846 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1882 | >20%                    |                 5 |              0.23764 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1986 | >20%                    |                10 |              0.11986 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.2012 | <5%                     |                 2 |              0.6006  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2439 | >20%                    |                 5 |              0.24878 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3089 | 5-10%                   |                 2 |              0.65445 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.3127 | <5%                     |                 5 |              0.26254 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.32   | 15-20%                  |                10 |              0.132   |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3454 | >20%                    |                 2 |              0.6727  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3757 | >20%                    |                10 |              0.13757 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4404 | 15-20%                  |                 5 |              0.28808 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4457 | 15-20%                  |                10 |              0.14457 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9264 | >20%                    |                10 |              0.19264 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.4266 | <5%                     |                10 |              0.24266 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.6125 | >20%                    |                10 |              0.26125 |