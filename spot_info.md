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

Data correct as of 2025-05-21 01:53:40.606334, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1649 | >20%                    |                 2 |              0.08245 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 15-20%                  |                 5 |              0.039   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2089 | <5%                     |                 5 |              0.04178 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2175 | >20%                    |                 2 |              0.10875 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2299 | >20%                    |                 2 |              0.11495 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2299 | 10-15%                  |                 2 |              0.11495 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.234  | >20%                    |                 2 |              0.117   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2373 | >20%                    |                 5 |              0.04746 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2399 | >20%                    |                 2 |              0.11995 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2438 | 10-15%                  |                10 |              0.02438 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.248  | 5-10%                   |                 2 |              0.124   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2492 | 15-20%                  |                 2 |              0.1246  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2566 | >20%                    |                 2 |              0.1283  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2584 | <5%                     |                 2 |              0.1292  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2641 | 15-20%                  |                 2 |              0.13205 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2709 | 10-15%                  |                 2 |              0.13545 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2748 | >20%                    |                 2 |              0.1374  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2831 | >20%                    |                 2 |              0.14155 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2865 | 15-20%                  |                 2 |              0.14325 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | 5-10%                   |                10 |              0.0294  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2959 | <5%                     |                 2 |              0.14795 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2961 | >20%                    |                 2 |              0.14805 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3002 | >20%                    |                10 |              0.03002 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3065 | 15-20%                  |                 5 |              0.0613  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3108 | 10-15%                  |                 2 |              0.1554  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3109 | 10-15%                  |                 2 |              0.15545 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3154 | >20%                    |                10 |              0.03154 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3158 | 15-20%                  |                 2 |              0.1579  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3195 | >20%                    |                10 |              0.03195 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3226 | >20%                    |                 5 |              0.06452 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3263 | 10-15%                  |                 5 |              0.06526 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3343 | >20%                    |                 2 |              0.16715 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.337  | >20%                    |                 2 |              0.1685  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3408 | >20%                    |                 2 |              0.1704  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | 15-20%                  |                10 |              0.03426 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3439 | 5-10%                   |                 5 |              0.06878 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.346  | >20%                    |                10 |              0.0346  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3553 | 15-20%                  |                 5 |              0.07106 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3573 | >20%                    |                 2 |              0.17865 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3607 | 5-10%                   |                 2 |              0.18035 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3628 | >20%                    |                 5 |              0.07256 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.369  | 15-20%                  |                 5 |              0.0738  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3701 | >20%                    |                 5 |              0.07402 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3751 | 10-15%                  |                 2 |              0.18755 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3796 | >20%                    |                 2 |              0.1898  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3826 | 5-10%                   |                 2 |              0.1913  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3862 | >20%                    |                 2 |              0.1931  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3871 | >20%                    |                10 |              0.03871 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3889 | >20%                    |                 2 |              0.19445 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3969 | <5%                     |                 2 |              0.19845 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3975 | >20%                    |                 5 |              0.0795  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4053 | 10-15%                  |                 2 |              0.20265 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4066 | >20%                    |                 2 |              0.2033  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4077 | 15-20%                  |                 2 |              0.20385 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4167 | <5%                     |                 5 |              0.08334 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4184 | 5-10%                   |                 5 |              0.08368 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4194 | <5%                     |                 5 |              0.08388 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4308 | 10-15%                  |                 5 |              0.08616 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4315 | >20%                    |                10 |              0.04315 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4338 | <5%                     |                 2 |              0.2169  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4354 | 15-20%                  |                10 |              0.04354 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.439  | 15-20%                  |                 5 |              0.0878  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.445  | >20%                    |                 2 |              0.2225  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4499 | >20%                    |                 5 |              0.08998 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4509 | 15-20%                  |                 5 |              0.09018 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4639 | >20%                    |                 2 |              0.23195 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4665 | >20%                    |                 2 |              0.23325 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4702 | >20%                    |                 2 |              0.2351  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4727 | >20%                    |                 5 |              0.09454 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4735 | >20%                    |                 5 |              0.0947  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.481  | >20%                    |                 5 |              0.0962  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.481  | 10-15%                  |                 5 |              0.0962  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4812 | >20%                    |                 5 |              0.09624 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4843 | >20%                    |                 5 |              0.09686 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4846 | 15-20%                  |                 5 |              0.09692 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4861 | 15-20%                  |                10 |              0.04861 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4874 | >20%                    |                 2 |              0.2437  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4889 | >20%                    |                 2 |              0.24445 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4947 | <5%                     |                 5 |              0.09894 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4978 | >20%                    |                10 |              0.04978 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5042 | >20%                    |                 2 |              0.2521  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5064 | 15-20%                  |                 2 |              0.2532  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.508  | 15-20%                  |                 5 |              0.1016  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5107 | >20%                    |                 2 |              0.25535 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5185 | 10-15%                  |                 5 |              0.1037  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.524  | >20%                    |                10 |              0.0524  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5273 | >20%                    |                 5 |              0.10546 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5418 | >20%                    |                 5 |              0.10836 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5426 | 15-20%                  |                 2 |              0.2713  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5528 | 5-10%                   |                 5 |              0.11056 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.558  | >20%                    |                 2 |              0.279   |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5622 | >20%                    |                 2 |              0.2811  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5629 | >20%                    |                 5 |              0.11258 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5669 | 5-10%                   |                 5 |              0.11338 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5683 | >20%                    |                 5 |              0.11366 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5696 | >20%                    |                 5 |              0.11392 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5715 | >20%                    |                 2 |              0.28575 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5806 | 10-15%                  |                 2 |              0.2903  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5815 | >20%                    |                 5 |              0.1163  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5945 | 5-10%                   |                 2 |              0.29725 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5945 | <5%                     |                 5 |              0.1189  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6003 | 5-10%                   |                10 |              0.06003 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6045 | 10-15%                  |                10 |              0.06045 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6073 | 10-15%                  |                10 |              0.06073 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6084 | 5-10%                   |                 2 |              0.3042  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6125 | >20%                    |                 5 |              0.1225  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6181 | 10-15%                  |                 5 |              0.12362 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6276 | >20%                    |                 2 |              0.3138  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6577 | >20%                    |                 5 |              0.13154 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6653 | 10-15%                  |                 5 |              0.13306 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6715 | 10-15%                  |                 5 |              0.1343  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6773 | >20%                    |                 5 |              0.13546 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6794 | >20%                    |                10 |              0.06794 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6797 | >20%                    |                10 |              0.06797 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6826 | >20%                    |                 2 |              0.3413  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6837 | >20%                    |                 2 |              0.34185 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7003 | <5%                     |                 5 |              0.14006 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.715  | 15-20%                  |                10 |              0.0715  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7151 | >20%                    |                 5 |              0.14302 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7307 | <5%                     |                 5 |              0.14614 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7337 | <5%                     |                10 |              0.07337 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7401 | <5%                     |                10 |              0.07401 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7447 | >20%                    |                 5 |              0.14894 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7492 | 10-15%                  |                10 |              0.07492 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7501 | >20%                    |                10 |              0.07501 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7696 | 10-15%                  |                10 |              0.07696 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7733 | <5%                     |                10 |              0.07733 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7824 | >20%                    |                 5 |              0.15648 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7941 | 5-10%                   |                10 |              0.07941 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8017 | >20%                    |                10 |              0.08017 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8019 | <5%                     |                 5 |              0.16038 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8045 | >20%                    |                10 |              0.08045 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8113 | 10-15%                  |                 5 |              0.16226 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8128 | >20%                    |                10 |              0.08128 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8144 | 15-20%                  |                10 |              0.08144 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.846  | 10-15%                  |                10 |              0.0846  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8467 | >20%                    |                10 |              0.08467 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8568 | >20%                    |                10 |              0.08568 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8594 | <5%                     |                10 |              0.08594 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8672 | 5-10%                   |                 2 |              0.4336  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8969 | >20%                    |                10 |              0.08969 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9047 | >20%                    |                10 |              0.09047 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9058 | >20%                    |                 2 |              0.4529  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9129 | 15-20%                  |                 5 |              0.18258 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9176 | >20%                    |                 2 |              0.4588  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9282 | >20%                    |                10 |              0.09282 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9283 | >20%                    |                10 |              0.09283 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9472 | >20%                    |                10 |              0.09472 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9563 | >20%                    |                10 |              0.09563 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9691 | >20%                    |                10 |              0.09691 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9895 | <5%                     |                10 |              0.09895 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9914 | 15-20%                  |                 5 |              0.19828 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0058 | 10-15%                  |                 5 |              0.20116 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0242 | >20%                    |                 2 |              0.5121  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0328 | 15-20%                  |                10 |              0.10328 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0453 | 15-20%                  |                10 |              0.10453 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0878 | >20%                    |                10 |              0.10878 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0903 | >20%                    |                 5 |              0.21806 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1006 | <5%                     |                10 |              0.11006 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1239 | 5-10%                   |                10 |              0.11239 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1264 | 5-10%                   |                10 |              0.11264 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.136  | <5%                     |                 2 |              0.568   |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1459 | >20%                    |                 5 |              0.22918 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2115 | 15-20%                  |                10 |              0.12115 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2139 | 15-20%                  |                10 |              0.12139 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2358 | 15-20%                  |                10 |              0.12358 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3256 | >20%                    |                10 |              0.13256 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3523 | >20%                    |                10 |              0.13523 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3524 | <5%                     |                 5 |              0.27048 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3649 | >20%                    |                 2 |              0.68245 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3922 | >20%                    |                 5 |              0.27844 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4304 | 10-15%                  |                10 |              0.14304 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4739 | >20%                    |                10 |              0.14739 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4817 | >20%                    |                10 |              0.14817 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0443 | <5%                     |                10 |              0.20443 |