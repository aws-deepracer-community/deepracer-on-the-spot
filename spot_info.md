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

Data correct as of 2025-04-09 01:46:17.998033, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1217 | 15-20%                  |                 2 |              0.06085 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1277 | 5-10%                   |                 5 |              0.02554 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1294 | 10-15%                  |                 2 |              0.0647  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | 10-15%                  |                 5 |              0.03178 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1874 | >20%                    |                 2 |              0.0937  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 5-10%                   |                 5 |              0.039   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2024 | <5%                     |                 2 |              0.1012  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2268 | 15-20%                  |                 2 |              0.1134  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2296 | 15-20%                  |                 5 |              0.04592 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2373 | 15-20%                  |                 2 |              0.11865 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2392 | >20%                    |                 2 |              0.1196  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2394 | >20%                    |                 2 |              0.1197  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 10-15%                  |                10 |              0.02395 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 15-20%                  |                10 |              0.02419 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2633 | >20%                    |                 2 |              0.13165 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2669 | 15-20%                  |                 2 |              0.13345 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2726 | 10-15%                  |                 2 |              0.1363  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2744 | <5%                     |                 2 |              0.1372  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2772 | 5-10%                   |                 2 |              0.1386  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2772 | 5-10%                   |                 2 |              0.1386  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2813 | <5%                     |                 2 |              0.14065 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2914 | 10-15%                  |                10 |              0.02914 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | <5%                     |                10 |              0.0294  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2974 | >20%                    |                 2 |              0.1487  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2991 | <5%                     |                 2 |              0.14955 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3014 | 10-15%                  |                 2 |              0.1507  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3111 | 10-15%                  |                 5 |              0.06222 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3167 | 10-15%                  |                 2 |              0.15835 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3233 | 15-20%                  |                10 |              0.03233 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3242 | 15-20%                  |                 2 |              0.1621  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3305 | >20%                    |                 2 |              0.16525 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3481 | 10-15%                  |                 5 |              0.06962 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3501 | >20%                    |                 5 |              0.07002 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3537 | >20%                    |                10 |              0.03537 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3539 | >20%                    |                 5 |              0.07078 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3597 | >20%                    |                 2 |              0.17985 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3639 | >20%                    |                10 |              0.03639 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3657 | 5-10%                   |                 5 |              0.07314 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3701 | 10-15%                  |                 2 |              0.18505 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3735 | 10-15%                  |                 5 |              0.0747  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3751 | <5%                     |                 2 |              0.18755 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3756 | >20%                    |                 2 |              0.1878  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3763 | >20%                    |                 2 |              0.18815 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3813 | >20%                    |                 2 |              0.19065 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3823 | <5%                     |                 2 |              0.19115 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3859 | >20%                    |                 2 |              0.19295 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3899 | <5%                     |                 2 |              0.19495 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4002 | >20%                    |                 2 |              0.2001  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4042 | >20%                    |                 2 |              0.2021  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4077 | 15-20%                  |                 2 |              0.20385 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4101 | >20%                    |                10 |              0.04101 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4103 | 10-15%                  |                10 |              0.04103 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4118 | >20%                    |                 5 |              0.08236 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4121 | 15-20%                  |                 2 |              0.20605 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4154 | <5%                     |                 2 |              0.2077  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4176 | 10-15%                  |                 5 |              0.08352 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4303 | 5-10%                   |                10 |              0.04303 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4367 | >20%                    |                 5 |              0.08734 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.438  | 10-15%                  |                 5 |              0.0876  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4414 | >20%                    |                 2 |              0.2207  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4415 | >20%                    |                 2 |              0.22075 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4431 | 5-10%                   |                 5 |              0.08862 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4465 | >20%                    |                 5 |              0.0893  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4492 | >20%                    |                 5 |              0.08984 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4564 | 5-10%                   |                 2 |              0.2282  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4588 | >20%                    |                 2 |              0.2294  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4601 | <5%                     |                 2 |              0.23005 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4612 | >20%                    |                 5 |              0.09224 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4642 | >20%                    |                 5 |              0.09284 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4692 | >20%                    |                 5 |              0.09384 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4738 | <5%                     |                 5 |              0.09476 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4765 | >20%                    |                 2 |              0.23825 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4782 | 5-10%                   |                 5 |              0.09564 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4802 | >20%                    |                10 |              0.04802 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4886 | >20%                    |                 5 |              0.09772 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4891 | >20%                    |                 5 |              0.09782 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4933 | 10-15%                  |                 2 |              0.24665 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4935 | >20%                    |                 2 |              0.24675 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.494  | 5-10%                   |                 5 |              0.0988  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5041 | >20%                    |                 5 |              0.10082 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5041 | >20%                    |                 5 |              0.10082 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5052 | 10-15%                  |                 5 |              0.10104 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5113 | 15-20%                  |                 5 |              0.10226 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5194 | <5%                     |                 5 |              0.10388 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5287 | >20%                    |                 5 |              0.10574 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5326 | >20%                    |                 2 |              0.2663  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5355 | 15-20%                  |                 2 |              0.26775 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5406 | 5-10%                   |                 5 |              0.10812 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5446 | >20%                    |                 2 |              0.2723  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5462 | >20%                    |                 5 |              0.10924 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.567  | 15-20%                  |                 2 |              0.2835  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.569  | 5-10%                   |                 2 |              0.2845  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5739 | >20%                    |                 2 |              0.28695 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5775 | <5%                     |                10 |              0.05775 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.586  | 15-20%                  |                 5 |              0.1172  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5898 | 15-20%                  |                 5 |              0.11796 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.5902 | >20%                    |                 2 |              0.2951  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5908 | <5%                     |                 5 |              0.11816 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6012 | >20%                    |                10 |              0.06012 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6027 | <5%                     |                 5 |              0.12054 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.605  | >20%                    |                 5 |              0.121   |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6061 | >20%                    |                 2 |              0.30305 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6131 | 10-15%                  |                 5 |              0.12262 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6228 | >20%                    |                 5 |              0.12456 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6231 | 5-10%                   |                 5 |              0.12462 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6263 | >20%                    |                 2 |              0.31315 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.628  | <5%                     |                10 |              0.0628  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6305 | >20%                    |                 5 |              0.1261  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6371 | >20%                    |                 5 |              0.12742 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6395 | >20%                    |                 5 |              0.1279  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6401 | <5%                     |                10 |              0.06401 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6437 | 10-15%                  |                 5 |              0.12874 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6479 | 10-15%                  |                10 |              0.06479 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6541 | 10-15%                  |                 5 |              0.13082 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6567 | <5%                     |                 5 |              0.13134 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6569 | >20%                    |                10 |              0.06569 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.657  | >20%                    |                10 |              0.0657  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.6572 | >20%                    |                 5 |              0.13144 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.664  | >20%                    |                 5 |              0.1328  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6658 | 10-15%                  |                 2 |              0.3329  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6674 | 5-10%                   |                 5 |              0.13348 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6806 | >20%                    |                10 |              0.06806 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6827 | >20%                    |                10 |              0.06827 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6981 | 10-15%                  |                10 |              0.06981 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7107 | >20%                    |                 5 |              0.14214 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7212 | >20%                    |                 2 |              0.3606  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7252 | >20%                    |                10 |              0.07252 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.748  | <5%                     |                10 |              0.0748  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7581 | >20%                    |                10 |              0.07581 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7587 | 15-20%                  |                 5 |              0.15174 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7588 | 10-15%                  |                10 |              0.07588 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7606 | <5%                     |                10 |              0.07606 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7645 | >20%                    |                 5 |              0.1529  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7687 | 15-20%                  |                 5 |              0.15374 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7753 | 5-10%                   |                10 |              0.07753 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7841 | 5-10%                   |                10 |              0.07841 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7843 | <5%                     |                 5 |              0.15686 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7932 | <5%                     |                10 |              0.07932 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8093 | <5%                     |                 2 |              0.40465 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8112 | <5%                     |                10 |              0.08112 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8146 | >20%                    |                10 |              0.08146 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8167 | >20%                    |                10 |              0.08167 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8167 | 10-15%                  |                10 |              0.08167 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8253 | 15-20%                  |                10 |              0.08253 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8255 | >20%                    |                 2 |              0.41275 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8256 | 10-15%                  |                10 |              0.08256 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8284 | 15-20%                  |                10 |              0.08284 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8333 | >20%                    |                 2 |              0.41665 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8455 | <5%                     |                10 |              0.08455 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8504 | >20%                    |                10 |              0.08504 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8633 | >20%                    |                 2 |              0.43165 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8673 | <5%                     |                10 |              0.08673 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8745 | >20%                    |                10 |              0.08745 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8869 | 15-20%                  |                 5 |              0.17738 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8894 | >20%                    |                10 |              0.08894 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8915 | <5%                     |                10 |              0.08915 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9099 | >20%                    |                10 |              0.09099 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9485 | >20%                    |                 5 |              0.1897  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.95   | 10-15%                  |                10 |              0.095   |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9648 | 15-20%                  |                10 |              0.09648 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9779 | >20%                    |                 5 |              0.19558 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9787 | 5-10%                   |                10 |              0.09787 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0455 | >20%                    |                10 |              0.10455 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0838 | <5%                     |                10 |              0.10838 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0943 | 10-15%                  |                 2 |              0.54715 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1176 | <5%                     |                10 |              0.11176 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.148  | 15-20%                  |                10 |              0.1148  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1785 | 15-20%                  |                10 |              0.11785 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2089 | >20%                    |                10 |              0.12089 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.234  | <5%                     |                 5 |              0.2468  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2471 | >20%                    |                 5 |              0.24942 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3292 | >20%                    |                10 |              0.13292 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3364 | >20%                    |                 5 |              0.26728 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3408 | 15-20%                  |                10 |              0.13408 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3854 | 5-10%                   |                 2 |              0.6927  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4504 | >20%                    |                 2 |              0.7252  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6313 | >20%                    |                10 |              0.16313 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6439 | >20%                    |                10 |              0.16439 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8532 | 15-20%                  |                10 |              0.18532 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8663 | <5%                     |                10 |              0.18663 |