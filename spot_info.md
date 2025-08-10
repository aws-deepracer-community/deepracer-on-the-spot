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

Data correct as of 2025-08-10 02:11:47.891895, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0963 | 5-10%                   |                 2 |              0.04815 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1037 | >20%                    |                 2 |              0.05185 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1325 | 5-10%                   |                 2 |              0.06625 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.148  | <5%                     |                 5 |              0.0296  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1564 | <5%                     |                 5 |              0.03128 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2103 | >20%                    |                 2 |              0.10515 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2181 | 15-20%                  |                 2 |              0.10905 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | 15-20%                  |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2283 | >20%                    |                 2 |              0.11415 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.248  | 15-20%                  |                 2 |              0.124   |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2501 | >20%                    |                 2 |              0.12505 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2565 | >20%                    |                 2 |              0.12825 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2641 | 5-10%                   |                 2 |              0.13205 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2664 | >20%                    |                 2 |              0.1332  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2927 | >20%                    |                 2 |              0.14635 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3053 | 15-20%                  |                 2 |              0.15265 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3072 | >20%                    |                 2 |              0.1536  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3248 | 5-10%                   |                 2 |              0.1624  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3252 | <5%                     |                 2 |              0.1626  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3338 | 5-10%                   |                 2 |              0.1669  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3555 | >20%                    |                 5 |              0.0711  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3578 | >20%                    |                 2 |              0.1789  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3581 | >20%                    |                 2 |              0.17905 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3608 | 15-20%                  |                 2 |              0.1804  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3624 | <5%                     |                 2 |              0.1812  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3702 | 10-15%                  |                 2 |              0.1851  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3721 | 15-20%                  |                 2 |              0.18605 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3765 | >20%                    |                 2 |              0.18825 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3785 | >20%                    |                 5 |              0.0757  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3837 | >20%                    |                 2 |              0.19185 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4021 | <5%                     |                 2 |              0.20105 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4049 | >20%                    |                 5 |              0.08098 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4082 | >20%                    |                 5 |              0.08164 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4229 | 5-10%                   |                 5 |              0.08458 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4305 | >20%                    |                 5 |              0.0861  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4316 | <5%                     |                10 |              0.04316 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4324 | >20%                    |                 2 |              0.2162  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4371 | >20%                    |                 5 |              0.08742 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4433 | >20%                    |                 5 |              0.08866 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.451  | <5%                     |                 2 |              0.2255  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4512 | >20%                    |                 2 |              0.2256  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4512 | >20%                    |                10 |              0.04512 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4551 | >20%                    |                 5 |              0.09102 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4585 | >20%                    |                 5 |              0.0917  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4645 | 5-10%                   |                 2 |              0.23225 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4666 | >20%                    |                 2 |              0.2333  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4671 | >20%                    |                 2 |              0.23355 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4688 | >20%                    |                 2 |              0.2344  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4693 | >20%                    |                 5 |              0.09386 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4717 | 5-10%                   |                 2 |              0.23585 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4726 | 15-20%                  |                 5 |              0.09452 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4753 | >20%                    |                 2 |              0.23765 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4932 | 10-15%                  |                 2 |              0.2466  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.495  | >20%                    |                 2 |              0.2475  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4983 | >20%                    |                 2 |              0.24915 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5069 | >20%                    |                 5 |              0.10138 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5087 | 5-10%                   |                 5 |              0.10174 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5162 | >20%                    |                 2 |              0.2581  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5166 | >20%                    |                 2 |              0.2583  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5191 | 10-15%                  |                 5 |              0.10382 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5338 | >20%                    |                 2 |              0.2669  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5388 | >20%                    |                 5 |              0.10776 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5398 | 15-20%                  |                10 |              0.05398 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5435 | >20%                    |                 5 |              0.1087  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5529 | 10-15%                  |                 5 |              0.11058 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5555 | <5%                     |                 2 |              0.27775 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5557 | >20%                    |                 2 |              0.27785 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5579 | >20%                    |                 5 |              0.11158 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5608 | >20%                    |                 5 |              0.11216 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5618 | >20%                    |                 2 |              0.2809  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5649 | >20%                    |                 2 |              0.28245 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5682 | 15-20%                  |                 2 |              0.2841  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.574  | >20%                    |                 2 |              0.287   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5885 | 5-10%                   |                 2 |              0.29425 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5925 | 15-20%                  |                10 |              0.05925 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5955 | >20%                    |                 5 |              0.1191  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6069 | 10-15%                  |                 5 |              0.12138 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6085 | 5-10%                   |                 5 |              0.1217  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6089 | >20%                    |                 5 |              0.12178 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6119 | >20%                    |                 5 |              0.12238 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6174 | >20%                    |                 5 |              0.12348 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6279 | 10-15%                  |                 5 |              0.12558 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6292 | >20%                    |                 5 |              0.12584 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6324 | >20%                    |                 5 |              0.12648 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6472 | >20%                    |                 2 |              0.3236  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6504 | 5-10%                   |                 5 |              0.13008 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6511 | <5%                     |                10 |              0.06511 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6516 | >20%                    |                 2 |              0.3258  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6594 | <5%                     |                 5 |              0.13188 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6631 | <5%                     |                 5 |              0.13262 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6742 | >20%                    |                 5 |              0.13484 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6814 | 15-20%                  |                 2 |              0.3407  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6849 | >20%                    |                 5 |              0.13698 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6967 | >20%                    |                10 |              0.06967 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7034 | >20%                    |                 5 |              0.14068 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.707  | 10-15%                  |                 2 |              0.3535  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.712  | >20%                    |                10 |              0.0712  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7145 | 15-20%                  |                 5 |              0.1429  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.72   | >20%                    |                 2 |              0.36    |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7213 | >20%                    |                10 |              0.07213 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.724  | >20%                    |                10 |              0.0724  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7346 | >20%                    |                 5 |              0.14692 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7371 | <5%                     |                10 |              0.07371 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7397 | 5-10%                   |                 5 |              0.14794 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7412 | 15-20%                  |                 2 |              0.3706  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7414 | 15-20%                  |                10 |              0.07414 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7646 | >20%                    |                 5 |              0.15292 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7736 | >20%                    |                 5 |              0.15472 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7765 | 15-20%                  |                10 |              0.07765 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7769 | 15-20%                  |                10 |              0.07769 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.777  | >20%                    |                 5 |              0.1554  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7794 | >20%                    |                10 |              0.07794 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8017 | 15-20%                  |                10 |              0.08017 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8093 | >20%                    |                 2 |              0.40465 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8162 | >20%                    |                 5 |              0.16324 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8282 | >20%                    |                 5 |              0.16564 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8359 | >20%                    |                 5 |              0.16718 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8382 | >20%                    |                10 |              0.08382 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8401 | >20%                    |                10 |              0.08401 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8439 | >20%                    |                10 |              0.08439 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8616 | 5-10%                   |                10 |              0.08616 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8672 | >20%                    |                10 |              0.08672 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8807 | >20%                    |                 5 |              0.17614 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.896  | <5%                     |                10 |              0.0896  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8971 | <5%                     |                 5 |              0.17942 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9094 | 5-10%                   |                10 |              0.09094 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9112 | 5-10%                   |                10 |              0.09112 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9187 | 5-10%                   |                10 |              0.09187 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9201 | 5-10%                   |                10 |              0.09201 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9228 | 5-10%                   |                 5 |              0.18456 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9233 | 15-20%                  |                10 |              0.09233 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9351 | 15-20%                  |                10 |              0.09351 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.952  | 5-10%                   |                10 |              0.0952  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.98   | >20%                    |                 2 |              0.49    |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9841 | 15-20%                  |                10 |              0.09841 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9849 | >20%                    |                10 |              0.09849 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9994 | <5%                     |                10 |              0.09994 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0071 | 15-20%                  |                10 |              0.10071 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0077 | >20%                    |                10 |              0.10077 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0355 | <5%                     |                10 |              0.10355 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.038  | 15-20%                  |                10 |              0.1038  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.04   | 15-20%                  |                 5 |              0.208   |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0415 | 5-10%                   |                10 |              0.10415 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0523 | <5%                     |                10 |              0.10523 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0743 | 15-20%                  |                10 |              0.10743 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0952 | >20%                    |                10 |              0.10952 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0969 | 5-10%                   |                10 |              0.10969 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1079 | >20%                    |                10 |              0.11079 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1437 | >20%                    |                10 |              0.11437 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1439 | >20%                    |                10 |              0.11439 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1701 | >20%                    |                10 |              0.11701 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1833 | >20%                    |                10 |              0.11833 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1925 | >20%                    |                 2 |              0.59625 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1949 | >20%                    |                 5 |              0.23898 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1996 | <5%                     |                 2 |              0.5998  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2283 | >20%                    |                 5 |              0.24566 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2441 | >20%                    |                 5 |              0.24882 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2714 | >20%                    |                 2 |              0.6357  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.272  | >20%                    |                10 |              0.1272  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3186 | >20%                    |                 5 |              0.26372 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.324  | 5-10%                   |                10 |              0.1324  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3789 | >20%                    |                10 |              0.13789 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4546 | 15-20%                  |                 5 |              0.29092 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.4782 | 5-10%                   |                 2 |              0.7391  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5258 | >20%                    |                10 |              0.15258 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5268 | >20%                    |                10 |              0.15268 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5621 | <5%                     |                 5 |              0.31242 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5837 | >20%                    |                10 |              0.15837 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5915 | <5%                     |                10 |              0.15915 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7622 | 10-15%                  |                10 |              0.17622 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2058 | <5%                     |                10 |              0.22058 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2455 | 5-10%                   |                10 |              0.22455 |