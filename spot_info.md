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

Data correct as of 2026-01-06 02:03:11.863030, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1416 | >20%                    |                 2 |              0.0708  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1477 | >20%                    |                 2 |              0.07385 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1651 | >20%                    |                 5 |              0.03302 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1704 | >20%                    |                 2 |              0.0852  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1766 | <5%                     |                 2 |              0.0883  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2252 | >20%                    |                 2 |              0.1126  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2301 | >20%                    |                 2 |              0.11505 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2516 | >20%                    |                 2 |              0.1258  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2519 | >20%                    |                 2 |              0.12595 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2588 | >20%                    |                 2 |              0.1294  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.26   | <5%                     |                 5 |              0.052   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2625 | >20%                    |                 5 |              0.0525  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2641 | >20%                    |                 2 |              0.13205 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.272  | >20%                    |                 2 |              0.136   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2814 | >20%                    |                 2 |              0.1407  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2886 | >20%                    |                10 |              0.02886 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.289  | 5-10%                   |                10 |              0.0289  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2904 | 15-20%                  |                 2 |              0.1452  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2997 | >20%                    |                 2 |              0.14985 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3047 | >20%                    |                10 |              0.03047 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3058 | >20%                    |                 2 |              0.1529  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3118 | >20%                    |                 5 |              0.06236 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3156 | >20%                    |                 2 |              0.1578  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3165 | >20%                    |                 5 |              0.0633  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3232 | 15-20%                  |                 5 |              0.06464 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3245 | >20%                    |                 2 |              0.16225 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3326 | >20%                    |                 5 |              0.06652 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3344 | >20%                    |                 2 |              0.1672  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3455 | 5-10%                   |                 5 |              0.0691  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3487 | <5%                     |                 5 |              0.06974 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.36   | 5-10%                   |                10 |              0.036   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3637 | >20%                    |                 2 |              0.18185 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.364  | 5-10%                   |                 2 |              0.182   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3642 | >20%                    |                 5 |              0.07284 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.366  | >20%                    |                 5 |              0.0732  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3679 | 5-10%                   |                 2 |              0.18395 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3681 | <5%                     |                10 |              0.03681 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3685 | >20%                    |                 5 |              0.0737  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3712 | >20%                    |                 2 |              0.1856  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3717 | 10-15%                  |                 2 |              0.18585 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3734 | >20%                    |                 5 |              0.07468 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.375  | >20%                    |                 5 |              0.075   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3773 | >20%                    |                 2 |              0.18865 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3781 | >20%                    |                 2 |              0.18905 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3857 | >20%                    |                 2 |              0.19285 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3873 | >20%                    |                 2 |              0.19365 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.388  | 10-15%                  |                 2 |              0.194   |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.388  | >20%                    |                 5 |              0.0776  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3898 | >20%                    |                 5 |              0.07796 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3929 | >20%                    |                10 |              0.03929 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3935 | >20%                    |                 2 |              0.19675 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4005 | >20%                    |                 2 |              0.20025 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4015 | >20%                    |                 5 |              0.0803  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4042 | >20%                    |                 5 |              0.08084 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4062 | >20%                    |                10 |              0.04062 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4226 | >20%                    |                 2 |              0.2113  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4231 | 15-20%                  |                10 |              0.04231 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4272 | >20%                    |                 5 |              0.08544 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4278 | <5%                     |                 2 |              0.2139  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4296 | <5%                     |                 2 |              0.2148  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.432  | 10-15%                  |                 2 |              0.216   |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4388 | >20%                    |                 2 |              0.2194  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4457 | >20%                    |                10 |              0.04457 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4497 | >20%                    |                 5 |              0.08994 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4585 | >20%                    |                 5 |              0.0917  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4615 | >20%                    |                 5 |              0.0923  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4617 | <5%                     |                 2 |              0.23085 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4638 | >20%                    |                 2 |              0.2319  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4649 | >20%                    |                 5 |              0.09298 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4654 | <5%                     |                 5 |              0.09308 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4658 | >20%                    |                 5 |              0.09316 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4672 | >20%                    |                 2 |              0.2336  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4689 | >20%                    |                 2 |              0.23445 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4695 | >20%                    |                10 |              0.04695 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4828 | >20%                    |                 5 |              0.09656 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4859 | 15-20%                  |                 2 |              0.24295 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4865 | <5%                     |                10 |              0.04865 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4892 | >20%                    |                 2 |              0.2446  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4938 | 15-20%                  |                 2 |              0.2469  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5012 | 15-20%                  |                 5 |              0.10024 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.507  | >20%                    |                 2 |              0.2535  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5092 | 15-20%                  |                10 |              0.05092 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5118 | >20%                    |                 5 |              0.10236 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5254 | 10-15%                  |                 5 |              0.10508 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.53   | >20%                    |                 5 |              0.106   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5372 | >20%                    |                 2 |              0.2686  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5519 | 5-10%                   |                 5 |              0.11038 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5561 | 15-20%                  |                 5 |              0.11122 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5591 | 15-20%                  |                 5 |              0.11182 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.568  | >20%                    |                 5 |              0.1136  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.577  | 15-20%                  |                 5 |              0.1154  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5783 | >20%                    |                 5 |              0.11566 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5846 | >20%                    |                 5 |              0.11692 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6059 | 15-20%                  |                10 |              0.06059 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6115 | >20%                    |                10 |              0.06115 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.6185 | >20%                    |                 2 |              0.30925 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.62   | >20%                    |                10 |              0.062   |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6206 | >20%                    |                 2 |              0.3103  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6231 | 10-15%                  |                 5 |              0.12462 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6253 | 10-15%                  |                 2 |              0.31265 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6332 | >20%                    |                 2 |              0.3166  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6383 | 5-10%                   |                 5 |              0.12766 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6463 | >20%                    |                 2 |              0.32315 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6545 | 15-20%                  |                 5 |              0.1309  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6599 | >20%                    |                 5 |              0.13198 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6602 | 5-10%                   |                 5 |              0.13204 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6613 | >20%                    |                 5 |              0.13226 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6615 | >20%                    |                 2 |              0.33075 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6621 | >20%                    |                 5 |              0.13242 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6647 | 15-20%                  |                10 |              0.06647 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6773 | >20%                    |                 5 |              0.13546 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6824 | <5%                     |                 5 |              0.13648 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6922 | >20%                    |                 2 |              0.3461  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6929 | >20%                    |                10 |              0.06929 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.6966 | 10-15%                  |                 5 |              0.13932 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.705  | >20%                    |                10 |              0.0705  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7101 | 5-10%                   |                10 |              0.07101 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7179 | >20%                    |                10 |              0.07179 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7245 | <5%                     |                 2 |              0.36225 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7376 | 15-20%                  |                 2 |              0.3688  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7423 | >20%                    |                 5 |              0.14846 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7427 | <5%                     |                10 |              0.07427 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7551 | >20%                    |                10 |              0.07551 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7555 | 15-20%                  |                10 |              0.07555 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7562 | 15-20%                  |                10 |              0.07562 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7659 | >20%                    |                10 |              0.07659 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7742 | >20%                    |                 5 |              0.15484 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7792 | >20%                    |                10 |              0.07792 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.789  | >20%                    |                 2 |              0.3945  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7959 | >20%                    |                 2 |              0.39795 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7997 | 15-20%                  |                10 |              0.07997 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8061 | 15-20%                  |                10 |              0.08061 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8123 | >20%                    |                10 |              0.08123 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8186 | <5%                     |                10 |              0.08186 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8255 |                         |                 2 |              0.41275 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8309 | >20%                    |                 2 |              0.41545 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8377 | >20%                    |                10 |              0.08377 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8387 | >20%                    |                10 |              0.08387 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8423 | 15-20%                  |                 5 |              0.16846 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8441 | 15-20%                  |                10 |              0.08441 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8463 | >20%                    |                 2 |              0.42315 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8508 | >20%                    |                 5 |              0.17016 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8549 | <5%                     |                10 |              0.08549 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.859  | 10-15%                  |                 5 |              0.1718  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8718 | >20%                    |                10 |              0.08718 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8781 | 10-15%                  |                 5 |              0.17562 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8862 | >20%                    |                10 |              0.08862 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.896  | >20%                    |                10 |              0.0896  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8982 | >20%                    |                10 |              0.08982 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8982 | >20%                    |                10 |              0.08982 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9112 | >20%                    |                10 |              0.09112 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9256 | >20%                    |                 5 |              0.18512 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9966 | >20%                    |                10 |              0.09966 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0033 | >20%                    |                 2 |              0.50165 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0109 | 15-20%                  |                10 |              0.10109 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0684 | 10-15%                  |                10 |              0.10684 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0721 | >20%                    |                 5 |              0.21442 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0729 | >20%                    |                 5 |              0.21458 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0781 | 15-20%                  |                10 |              0.10781 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1061 |                         |                 5 |              0.22122 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1131 | >20%                    |                10 |              0.11131 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.1268 | 10-15%                  |                10 |              0.11268 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1325 | <5%                     |                10 |              0.11325 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.14   | >20%                    |                 2 |              0.57    |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1456 | >20%                    |                10 |              0.11456 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1819 | >20%                    |                 5 |              0.23638 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.218  | 15-20%                  |                10 |              0.1218  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2242 | >20%                    |                 2 |              0.6121  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2756 | >20%                    |                10 |              0.12756 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2908 | >20%                    |                10 |              0.12908 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3014 | >20%                    |                 5 |              0.26028 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.309  | >20%                    |                 5 |              0.2618  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.3362 | >20%                    |                10 |              0.13362 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3708 | >20%                    |                10 |              0.13708 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.3749 | >20%                    |                 5 |              0.27498 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4235 | 10-15%                  |                 5 |              0.2847  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4435 | >20%                    |                 2 |              0.72175 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.536  | >20%                    |                10 |              0.1536  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6128 | >20%                    |                10 |              0.16128 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.6673 |                         |                10 |              0.16673 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.7081 | 10-15%                  |                10 |              0.17081 |