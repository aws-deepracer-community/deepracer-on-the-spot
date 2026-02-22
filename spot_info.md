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

Data correct as of 2026-02-22 02:37:38.729967, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1408 | >20%                    |                 2 |              0.0704  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1597 | >20%                    |                 2 |              0.07985 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1835 | >20%                    |                 5 |              0.0367  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2131 | >20%                    |                 2 |              0.10655 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2172 | >20%                    |                 2 |              0.1086  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2482 | 15-20%                  |                 2 |              0.1241  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2525 | >20%                    |                 2 |              0.12625 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2537 | 10-15%                  |                 2 |              0.12685 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2549 | >20%                    |                 2 |              0.12745 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2625 | >20%                    |                 5 |              0.0525  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2686 | 5-10%                   |                10 |              0.02686 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2698 | >20%                    |                 2 |              0.1349  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2877 | 5-10%                   |                 2 |              0.14385 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2952 | 5-10%                   |                 2 |              0.1476  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2964 | 10-15%                  |                 2 |              0.1482  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2966 | <5%                     |                 2 |              0.1483  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2998 | >20%                    |                 2 |              0.1499  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.305  | >20%                    |                 2 |              0.1525  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3055 | >20%                    |                 2 |              0.15275 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3092 | <5%                     |                 5 |              0.06184 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3108 | >20%                    |                 2 |              0.1554  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3309 | >20%                    |                 2 |              0.16545 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3313 | >20%                    |                 5 |              0.06626 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3318 | >20%                    |                 5 |              0.06636 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.338  | >20%                    |                 2 |              0.169   |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3385 | 5-10%                   |                 5 |              0.0677  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3556 | <5%                     |                 5 |              0.07112 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3563 | >20%                    |                 5 |              0.07126 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3571 | >20%                    |                10 |              0.03571 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.358  | >20%                    |                 2 |              0.179   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3616 | >20%                    |                 5 |              0.07232 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3623 | >20%                    |                 5 |              0.07246 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3674 | >20%                    |                 5 |              0.07348 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3731 | <5%                     |                10 |              0.03731 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3764 | 5-10%                   |                 2 |              0.1882  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3829 | >20%                    |                 2 |              0.19145 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3839 | >20%                    |                 5 |              0.07678 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3865 | 10-15%                  |                 2 |              0.19325 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3875 | 5-10%                   |                10 |              0.03875 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3887 | 15-20%                  |                 2 |              0.19435 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3892 | >20%                    |                10 |              0.03892 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3948 | 10-15%                  |                 5 |              0.07896 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4036 | >20%                    |                 2 |              0.2018  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4077 | 15-20%                  |                 2 |              0.20385 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4108 | >20%                    |                 2 |              0.2054  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4193 | >20%                    |                 2 |              0.20965 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4196 | >20%                    |                 5 |              0.08392 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4197 | 5-10%                   |                 2 |              0.20985 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4228 | >20%                    |                10 |              0.04228 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4247 | >20%                    |                 2 |              0.21235 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4249 | <5%                     |                 2 |              0.21245 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4269 | >20%                    |                 5 |              0.08538 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4292 | 5-10%                   |                 2 |              0.2146  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4307 | <5%                     |                 5 |              0.08614 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4321 | >20%                    |                 2 |              0.21605 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4338 | >20%                    |                 5 |              0.08676 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4348 | 15-20%                  |                 5 |              0.08696 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.435  | 15-20%                  |                 2 |              0.2175  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.436  | <5%                     |                 2 |              0.218   |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4385 | >20%                    |                10 |              0.04385 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4406 | <5%                     |                 2 |              0.2203  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4475 | 5-10%                   |                 2 |              0.22375 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4524 | >20%                    |                 5 |              0.09048 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4546 | 15-20%                  |                 2 |              0.2273  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4563 | 5-10%                   |                 5 |              0.09126 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4593 | >20%                    |                 2 |              0.22965 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4612 | >20%                    |                 2 |              0.2306  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4677 | 5-10%                   |                 2 |              0.23385 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4696 | >20%                    |                 2 |              0.2348  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4738 | >20%                    |                 5 |              0.09476 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4761 | <5%                     |                10 |              0.04761 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4865 | <5%                     |                 5 |              0.0973  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4962 | >20%                    |                 5 |              0.09924 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.501  | >20%                    |                 2 |              0.2505  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5082 | 15-20%                  |                 2 |              0.2541  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5145 | 15-20%                  |                 5 |              0.1029  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5199 | >20%                    |                 5 |              0.10398 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5213 | >20%                    |                 5 |              0.10426 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5231 | >20%                    |                 2 |              0.26155 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5258 | >20%                    |                 5 |              0.10516 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5274 | >20%                    |                 2 |              0.2637  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5358 | >20%                    |                10 |              0.05358 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5404 | <5%                     |                 5 |              0.10808 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5408 | >20%                    |                10 |              0.05408 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5455 | 15-20%                  |                 5 |              0.1091  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.547  | >20%                    |                 5 |              0.1094  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5502 | >20%                    |                 5 |              0.11004 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5572 | <5%                     |                10 |              0.05572 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5584 | >20%                    |                10 |              0.05584 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5661 | <5%                     |                10 |              0.05661 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5721 | 15-20%                  |                10 |              0.05721 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5777 | >20%                    |                 5 |              0.11554 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5941 | >20%                    |                10 |              0.05941 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5947 | 5-10%                   |                 2 |              0.29735 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5979 | 15-20%                  |                10 |              0.05979 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6012 | >20%                    |                10 |              0.06012 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6015 | >20%                    |                 2 |              0.30075 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6045 | 15-20%                  |                 2 |              0.30225 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6132 | 5-10%                   |                 5 |              0.12264 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6158 | >20%                    |                 5 |              0.12316 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6252 | >20%                    |                 5 |              0.12504 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6273 | 15-20%                  |                10 |              0.06273 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6307 | >20%                    |                 5 |              0.12614 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6369 | 5-10%                   |                 5 |              0.12738 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6405 | 10-15%                  |                 5 |              0.1281  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6405 | >20%                    |                 2 |              0.32025 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.641  | >20%                    |                10 |              0.0641  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6419 | >20%                    |                10 |              0.06419 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.646  | >20%                    |                 5 |              0.1292  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6466 | >20%                    |                 5 |              0.12932 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6741 | 15-20%                  |                10 |              0.06741 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6768 | 5-10%                   |                 5 |              0.13536 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6887 | <5%                     |                10 |              0.06887 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6924 | 5-10%                   |                 2 |              0.3462  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6929 | 10-15%                  |                10 |              0.06929 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.699  | >20%                    |                 5 |              0.1398  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7038 | 5-10%                   |                 5 |              0.14076 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7055 | 15-20%                  |                 5 |              0.1411  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7089 | <5%                     |                 5 |              0.14178 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7126 | >20%                    |                 2 |              0.3563  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7143 | >20%                    |                 5 |              0.14286 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.725  | >20%                    |                10 |              0.0725  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7251 | >20%                    |                 5 |              0.14502 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.739  | >20%                    |                10 |              0.0739  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7511 | 10-15%                  |                10 |              0.07511 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7514 | >20%                    |                 5 |              0.15028 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7593 |                         |                 2 |              0.37965 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7594 | >20%                    |                10 |              0.07594 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7697 | <5%                     |                10 |              0.07697 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7791 | >20%                    |                 2 |              0.38955 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7921 | >20%                    |                 5 |              0.15842 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8024 | 5-10%                   |                10 |              0.08024 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.803  | <5%                     |                 2 |              0.4015  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8099 | >20%                    |                10 |              0.08099 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8147 | 15-20%                  |                10 |              0.08147 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8177 | >20%                    |                 2 |              0.40885 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8274 | >20%                    |                 2 |              0.4137  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.83   | <5%                     |                10 |              0.083   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8381 | <5%                     |                 5 |              0.16762 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8471 | >20%                    |                10 |              0.08471 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8487 | >20%                    |                 5 |              0.16974 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8511 | >20%                    |                 2 |              0.42555 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8515 | <5%                     |                10 |              0.08515 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8519 | >20%                    |                10 |              0.08519 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.856  | >20%                    |                10 |              0.0856  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8562 | <5%                     |                 5 |              0.17124 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8612 | 10-15%                  |                 2 |              0.4306  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8733 | <5%                     |                10 |              0.08733 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8766 | >20%                    |                 5 |              0.17532 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.879  | 5-10%                   |                10 |              0.0879  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8914 | >20%                    |                 5 |              0.17828 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9205 | >20%                    |                10 |              0.09205 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9408 | <5%                     |                10 |              0.09408 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9676 | >20%                    |                10 |              0.09676 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9697 | >20%                    |                10 |              0.09697 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9828 | >20%                    |                10 |              0.09828 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9836 | >20%                    |                10 |              0.09836 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9857 | >20%                    |                 5 |              0.19714 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9936 | >20%                    |                 2 |              0.4968  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0199 | 5-10%                   |                 5 |              0.20398 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.023  | 15-20%                  |                10 |              0.1023  |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0333 |                         |                 5 |              0.20666 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0627 | >20%                    |                 5 |              0.21254 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0654 | 5-10%                   |                10 |              0.10654 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0814 | >20%                    |                10 |              0.10814 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0964 | >20%                    |                10 |              0.10964 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0985 | 10-15%                  |                 5 |              0.2197  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1026 | 15-20%                  |                10 |              0.11026 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1277 | >20%                    |                 5 |              0.22554 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1447 | 10-15%                  |                10 |              0.11447 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1868 | >20%                    |                10 |              0.11868 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.194  | >20%                    |                 2 |              0.597   |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1957 | >20%                    |                10 |              0.11957 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1987 | <5%                     |                10 |              0.11987 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3928 | 10-15%                  |                 5 |              0.27856 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4467 | >20%                    |                 2 |              0.72335 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4791 | >20%                    |                10 |              0.14791 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4807 | >20%                    |                10 |              0.14807 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5178 |                         |                10 |              0.15178 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.569  | >20%                    |                10 |              0.1569  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7015 | 15-20%                  |                10 |              0.17015 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2205 | 10-15%                  |                10 |              0.22205 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.5003 | <5%                     |                 5 |              0.50006 |