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

Data correct as of 2025-05-15 01:50:11.208159, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1635 | >20%                    |                 5 |              0.0327  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1695 | >20%                    |                 2 |              0.08475 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 5-10%                   |                 5 |              0.039   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2018 | <5%                     |                 2 |              0.1009  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2161 | <5%                     |                 5 |              0.04322 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2162 | >20%                    |                 5 |              0.04324 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2164 | >20%                    |                 2 |              0.1082  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2267 | 15-20%                  |                 2 |              0.11335 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2294 | <5%                     |                 2 |              0.1147  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2347 | 5-10%                   |                 5 |              0.04694 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2578 | >20%                    |                 2 |              0.1289  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2603 | <5%                     |                 2 |              0.13015 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2641 | 15-20%                  |                 2 |              0.13205 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.267  | >20%                    |                 2 |              0.1335  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2698 | 5-10%                   |                 2 |              0.1349  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2711 | 15-20%                  |                 5 |              0.05422 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2718 | >20%                    |                 2 |              0.1359  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2756 | >20%                    |                 2 |              0.1378  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2803 | 15-20%                  |                10 |              0.02803 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2816 | >20%                    |                 5 |              0.05632 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.283  | 10-15%                  |                10 |              0.0283  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2871 | 5-10%                   |                 2 |              0.14355 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2908 | 5-10%                   |                 2 |              0.1454  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2914 | 10-15%                  |                 2 |              0.1457  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2955 | <5%                     |                 2 |              0.14775 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.2987 | 15-20%                  |                10 |              0.02987 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.299  | >20%                    |                 2 |              0.1495  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3075 | >20%                    |                 2 |              0.15375 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3179 | >20%                    |                 2 |              0.15895 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3199 | 5-10%                   |                 2 |              0.15995 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3269 | >20%                    |                 2 |              0.16345 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3308 | 5-10%                   |                 2 |              0.1654  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3338 | >20%                    |                10 |              0.03338 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3397 | <5%                     |                 5 |              0.06794 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3405 | >20%                    |                 2 |              0.17025 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3442 | >20%                    |                 5 |              0.06884 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3454 | 15-20%                  |                 5 |              0.06908 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3597 | >20%                    |                 2 |              0.17985 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3606 | 10-15%                  |                 2 |              0.1803  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.363  | <5%                     |                 2 |              0.1815  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3681 | >20%                    |                 2 |              0.18405 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3687 | >20%                    |                 2 |              0.18435 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3689 | >20%                    |                 5 |              0.07378 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3712 | >20%                    |                10 |              0.03712 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3724 | 15-20%                  |                10 |              0.03724 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3751 | 10-15%                  |                10 |              0.03751 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3785 | >20%                    |                 5 |              0.0757  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3807 | >20%                    |                 2 |              0.19035 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3839 | >20%                    |                 5 |              0.07678 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3844 | >20%                    |                10 |              0.03844 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3853 | 5-10%                   |                 5 |              0.07706 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3858 | <5%                     |                10 |              0.03858 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3882 | >20%                    |                 2 |              0.1941  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3967 | 5-10%                   |                 5 |              0.07934 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.403  | 5-10%                   |                 2 |              0.2015  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4064 | 10-15%                  |                 2 |              0.2032  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4065 | >20%                    |                 2 |              0.20325 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4084 | 15-20%                  |                 5 |              0.08168 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4268 | <5%                     |                 5 |              0.08536 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4279 | 15-20%                  |                 2 |              0.21395 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4327 | 10-15%                  |                 2 |              0.21635 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.436  | <5%                     |                10 |              0.0436  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4473 | >20%                    |                 5 |              0.08946 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4474 | >20%                    |                 2 |              0.2237  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4513 | >20%                    |                 5 |              0.09026 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4517 | <5%                     |                 2 |              0.22585 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4585 | 5-10%                   |                 5 |              0.0917  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4594 | >20%                    |                 2 |              0.2297  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4617 | >20%                    |                 5 |              0.09234 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4623 | 10-15%                  |                 5 |              0.09246 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4628 | 10-15%                  |                10 |              0.04628 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4708 | >20%                    |                 2 |              0.2354  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4736 | >20%                    |                 2 |              0.2368  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4797 | >20%                    |                 5 |              0.09594 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.483  | >20%                    |                 5 |              0.0966  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4895 | >20%                    |                 5 |              0.0979  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4904 | >20%                    |                10 |              0.04904 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4933 | >20%                    |                 5 |              0.09866 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5    | 5-10%                   |                 5 |              0.1     |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5066 | >20%                    |                 2 |              0.2533  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5073 | 15-20%                  |                 5 |              0.10146 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5089 | >20%                    |                 2 |              0.25445 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5114 | >20%                    |                 2 |              0.2557  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5114 | <5%                     |                 5 |              0.10228 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5114 | >20%                    |                 5 |              0.10228 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5132 | >20%                    |                 2 |              0.2566  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5136 | >20%                    |                 2 |              0.2568  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5139 | 10-15%                  |                 2 |              0.25695 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5201 | >20%                    |                 5 |              0.10402 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5227 | 10-15%                  |                 5 |              0.10454 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5254 | <5%                     |                 5 |              0.10508 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5422 | >20%                    |                 5 |              0.10844 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.551  | >20%                    |                10 |              0.0551  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5567 | 10-15%                  |                 5 |              0.11134 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5667 | 5-10%                   |                 5 |              0.11334 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5746 | 10-15%                  |                 5 |              0.11492 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5751 | >20%                    |                 5 |              0.11502 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5797 | >20%                    |                 5 |              0.11594 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5891 | >20%                    |                 2 |              0.29455 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5937 | >20%                    |                 2 |              0.29685 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5969 | >20%                    |                 5 |              0.11938 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5977 | <5%                     |                 5 |              0.11954 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6065 | >20%                    |                 2 |              0.30325 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6105 | 10-15%                  |                 2 |              0.30525 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6122 | 10-15%                  |                10 |              0.06122 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6285 | 10-15%                  |                 5 |              0.1257  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6377 | >20%                    |                 5 |              0.12754 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.646  | 15-20%                  |                10 |              0.0646  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6619 | <5%                     |                 5 |              0.13238 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6669 | 15-20%                  |                 5 |              0.13338 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6675 | 5-10%                   |                10 |              0.06675 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6713 | >20%                    |                 5 |              0.13426 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6874 | >20%                    |                 2 |              0.3437  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6896 | >20%                    |                10 |              0.06896 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6913 | >20%                    |                 5 |              0.13826 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6935 | >20%                    |                 2 |              0.34675 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7001 | >20%                    |                10 |              0.07001 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7063 | >20%                    |                 2 |              0.35315 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7127 | >20%                    |                10 |              0.07127 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7175 | <5%                     |                 5 |              0.1435  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7264 | >20%                    |                 5 |              0.14528 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7309 | >20%                    |                 2 |              0.36545 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7369 | 5-10%                   |                10 |              0.07369 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7432 | >20%                    |                 5 |              0.14864 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7475 | <5%                     |                10 |              0.07475 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7589 | >20%                    |                10 |              0.07589 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7613 | <5%                     |                 5 |              0.15226 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7665 | 10-15%                  |                10 |              0.07665 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7918 | >20%                    |                10 |              0.07918 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7993 | >20%                    |                 5 |              0.15986 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.801  | 15-20%                  |                10 |              0.0801  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8031 | >20%                    |                 5 |              0.16062 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8032 | 10-15%                  |                10 |              0.08032 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8115 | 5-10%                   |                10 |              0.08115 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8121 | 10-15%                  |                10 |              0.08121 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8124 | <5%                     |                 5 |              0.16248 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8157 | 15-20%                  |                10 |              0.08157 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.822  | 15-20%                  |                10 |              0.0822  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8242 | 15-20%                  |                10 |              0.08242 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8329 | 10-15%                  |                10 |              0.08329 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.833  | >20%                    |                10 |              0.0833  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8535 | <5%                     |                10 |              0.08535 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8673 | >20%                    |                 2 |              0.43365 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8905 | 15-20%                  |                 2 |              0.44525 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8978 | >20%                    |                 2 |              0.4489  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9081 | 15-20%                  |                10 |              0.09081 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9109 | >20%                    |                 5 |              0.18218 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9122 | 10-15%                  |                10 |              0.09122 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9222 | 15-20%                  |                10 |              0.09222 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9292 | <5%                     |                10 |              0.09292 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9563 | >20%                    |                10 |              0.09563 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9615 | >20%                    |                10 |              0.09615 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9774 | >20%                    |                10 |              0.09774 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9823 | 10-15%                  |                 5 |              0.19646 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9923 | >20%                    |                 2 |              0.49615 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0083 | >20%                    |                10 |              0.10083 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0226 | 10-15%                  |                10 |              0.10226 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0275 | <5%                     |                10 |              0.10275 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0402 | >20%                    |                10 |              0.10402 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0444 | >20%                    |                10 |              0.10444 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0482 | >20%                    |                 5 |              0.20964 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0706 | >20%                    |                 5 |              0.21412 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1265 | <5%                     |                10 |              0.11265 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1369 | >20%                    |                 5 |              0.22738 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1709 | 10-15%                  |                 2 |              0.58545 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1983 | >20%                    |                10 |              0.11983 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2252 | >20%                    |                 5 |              0.24504 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2371 | >20%                    |                 2 |              0.61855 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2407 | >20%                    |                10 |              0.12407 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2732 | >20%                    |                10 |              0.12732 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3154 | <5%                     |                 5 |              0.26308 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3612 | 15-20%                  |                10 |              0.13612 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3771 | 5-10%                   |                10 |              0.13771 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3878 | 15-20%                  |                10 |              0.13878 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4117 | >20%                    |                10 |              0.14117 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4407 | 15-20%                  |                10 |              0.14407 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7506 | >20%                    |                10 |              0.17506 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0591 | <5%                     |                10 |              0.20591 |