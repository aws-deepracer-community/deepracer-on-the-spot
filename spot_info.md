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

Data correct as of 2026-09-29 05:03:25.998324, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0878 | >20%                    |                 2 |              0.0439  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1426 | 15-20%                  |                 2 |              0.0713  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1574 | >20%                    |                 2 |              0.0787  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1609 | >20%                    |                 5 |              0.03218 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 15-20%                  |                 5 |              0.03708 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2156 | >20%                    |                 2 |              0.1078  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2236 | 15-20%                  |                 5 |              0.04472 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2357 | >20%                    |                 2 |              0.11785 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.252  | >20%                    |                 2 |              0.126   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2803 | >20%                    |                 2 |              0.14015 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2929 | >20%                    |                 2 |              0.14645 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.2943 | >20%                    |                 2 |              0.14715 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3009 | 15-20%                  |                 2 |              0.15045 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3073 | >20%                    |                 2 |              0.15365 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.326  | >20%                    |                 2 |              0.163   |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3446 | >20%                    |                10 |              0.03446 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3469 | >20%                    |                 5 |              0.06938 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3486 | >20%                    |                 5 |              0.06972 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3569 | >20%                    |                 2 |              0.17845 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3644 | <5%                     |                10 |              0.03644 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.369  | 10-15%                  |                 2 |              0.1845  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3736 | 15-20%                  |                 2 |              0.1868  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3829 | >20%                    |                10 |              0.03829 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3844 | >20%                    |                 5 |              0.07688 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3868 | >20%                    |                 2 |              0.1934  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3885 | 10-15%                  |                 2 |              0.19425 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3915 | >20%                    |                 2 |              0.19575 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3932 | >20%                    |                 2 |              0.1966  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3933 | <5%                     |                 2 |              0.19665 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3969 | >20%                    |                 5 |              0.07938 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.4    |                         |                 5 |              0.08    |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4005 | >20%                    |                 5 |              0.0801  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4007 | 5-10%                   |                10 |              0.04007 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4137 | >20%                    |                 5 |              0.08274 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.423  | >20%                    |                 5 |              0.0846  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4364 | >20%                    |                 2 |              0.2182  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4446 | 15-20%                  |                 2 |              0.2223  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4565 | >20%                    |                 5 |              0.0913  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4654 | >20%                    |                 2 |              0.2327  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4775 | >20%                    |                 2 |              0.23875 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4786 | 10-15%                  |                 2 |              0.2393  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4815 | >20%                    |                 5 |              0.0963  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4857 | >20%                    |                 5 |              0.09714 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4898 |                         |                 2 |              0.2449  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4971 | >20%                    |                 2 |              0.24855 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4996 | >20%                    |                 5 |              0.09992 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5008 | >20%                    |                 2 |              0.2504  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5029 | >20%                    |                 2 |              0.25145 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5136 | <5%                     |                 2 |              0.2568  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5206 | >20%                    |                 5 |              0.10412 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5309 | >20%                    |                 5 |              0.10618 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5364 | 15-20%                  |                 2 |              0.2682  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5472 | >20%                    |                 5 |              0.10944 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5522 | >20%                    |                 2 |              0.2761  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5738 | >20%                    |                 5 |              0.11476 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5787 | >20%                    |                 2 |              0.28935 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5899 | >20%                    |                 5 |              0.11798 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5917 | >20%                    |                10 |              0.05917 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5919 | >20%                    |                10 |              0.05919 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6022 | 10-15%                  |                 5 |              0.12044 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.607  | 5-10%                   |                10 |              0.0607  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6131 | >20%                    |                 5 |              0.12262 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6154 | >20%                    |                 2 |              0.3077  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6186 | 10-15%                  |                 2 |              0.3093  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.623  | >20%                    |                 5 |              0.1246  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6445 | >20%                    |                10 |              0.06445 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6598 | >20%                    |                 5 |              0.13196 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6611 | >20%                    |                 5 |              0.13222 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6696 | >20%                    |                 5 |              0.13392 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6798 | 5-10%                   |                 5 |              0.13596 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6877 | <5%                     |                 2 |              0.34385 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6923 | 5-10%                   |                 2 |              0.34615 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6945 | >20%                    |                 2 |              0.34725 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7084 | >20%                    |                 5 |              0.14168 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7144 | 15-20%                  |                 2 |              0.3572  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7218 | 15-20%                  |                10 |              0.07218 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7224 | >20%                    |                10 |              0.07224 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7299 | >20%                    |                 5 |              0.14598 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7347 | 15-20%                  |                 5 |              0.14694 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7353 | >20%                    |                 5 |              0.14706 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7459 | >20%                    |                 5 |              0.14918 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7486 | >20%                    |                 5 |              0.14972 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7529 | >20%                    |                 2 |              0.37645 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.754  | >20%                    |                10 |              0.0754  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7567 | >20%                    |                10 |              0.07567 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7595 | >20%                    |                 5 |              0.1519  |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.7611 |                         |                10 |              0.07611 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7742 | 15-20%                  |                10 |              0.07742 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.798  | >20%                    |                 2 |              0.399   |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8183 | 15-20%                  |                10 |              0.08183 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8314 | >20%                    |                10 |              0.08314 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8345 | 10-15%                  |                 2 |              0.41725 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8358 | >20%                    |                 5 |              0.16716 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8393 | >20%                    |                10 |              0.08393 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8399 | 5-10%                   |                10 |              0.08399 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8505 | >20%                    |                 2 |              0.42525 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8559 | >20%                    |                10 |              0.08559 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8622 | >20%                    |                10 |              0.08622 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8638 | 15-20%                  |                 5 |              0.17276 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8643 | >20%                    |                10 |              0.08643 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8692 | 10-15%                  |                10 |              0.08692 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8812 | >20%                    |                 5 |              0.17624 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8887 | >20%                    |                10 |              0.08887 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9062 | <5%                     |                 5 |              0.18124 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9141 | >20%                    |                 5 |              0.18282 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.916  | >20%                    |                 5 |              0.1832  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9447 | >20%                    |                 5 |              0.18894 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9593 | >20%                    |                10 |              0.09593 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9726 | >20%                    |                10 |              0.09726 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9938 | 15-20%                  |                10 |              0.09938 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0147 | >20%                    |                10 |              0.10147 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0171 | >20%                    |                10 |              0.10171 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.02   | 10-15%                  |                 2 |              0.51    |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0256 | >20%                    |                10 |              0.10256 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0263 | 15-20%                  |                10 |              0.10263 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.0275 | >20%                    |                 2 |              0.51375 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0396 | 15-20%                  |                10 |              0.10396 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0519 | >20%                    |                10 |              0.10519 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0574 | >20%                    |                 5 |              0.21148 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0635 | >20%                    |                10 |              0.10635 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0724 | >20%                    |                10 |              0.10724 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.0791 | >20%                    |                 5 |              0.21582 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.117  | 5-10%                   |                10 |              0.1117  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1415 | >20%                    |                10 |              0.11415 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1549 | 5-10%                   |                 2 |              0.57745 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2061 | >20%                    |                10 |              0.12061 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2072 | >20%                    |                10 |              0.12072 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.2093 |                         |                 2 |              0.60465 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.2665 |                         |                 2 |              0.63325 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2976 | 5-10%                   |                 2 |              0.6488  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3238 | 10-15%                  |                10 |              0.13238 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3345 | 10-15%                  |                 2 |              0.66725 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3388 | >20%                    |                10 |              0.13388 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3514 | >20%                    |                 2 |              0.6757  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.372  | 15-20%                  |                10 |              0.1372  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.395  | >20%                    |                10 |              0.1395  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.4285 |                         |                 5 |              0.2857  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5334 | >20%                    |                 2 |              0.7667  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.5349 |                         |                 5 |              0.30698 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.535  | 5-10%                   |                 5 |              0.307   |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5514 |                         |                10 |              0.15514 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.6041 | >20%                    |                 5 |              0.32082 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6246 | >20%                    |                10 |              0.16246 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7322 | 15-20%                  |                10 |              0.17322 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7442 | >20%                    |                 5 |              0.34884 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8651 | >20%                    |                10 |              0.18651 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.9005 |                         |                10 |              0.19005 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0918 | 15-20%                  |                 5 |              0.41836 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.212  | 5-10%                   |                 2 |              1.106   |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2363 | 5-10%                   |                10 |              0.22363 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.2536 | >20%                    |                 5 |              0.45072 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.2953 | >20%                    |                10 |              0.22953 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6127 | >20%                    |                10 |              0.26127 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.1275 | >20%                    |                10 |              0.31275 |