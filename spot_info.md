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

Data correct as of 2025-04-06 01:50:53.955112, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.118  | 15-20%                  |                 2 |              0.059   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1277 | 5-10%                   |                 5 |              0.02554 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.133  | 10-15%                  |                 2 |              0.0665  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | 10-15%                  |                 5 |              0.03178 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 5-10%                   |                 5 |              0.039   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2012 | <5%                     |                 2 |              0.1006  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2163 | >20%                    |                 2 |              0.10815 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2172 | 15-20%                  |                 2 |              0.1086  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2362 | 15-20%                  |                 2 |              0.1181  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 10-15%                  |                10 |              0.02395 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 15-20%                  |                10 |              0.02419 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2449 | >20%                    |                 2 |              0.12245 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2465 | >20%                    |                 2 |              0.12325 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2612 | 15-20%                  |                 2 |              0.1306  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2624 | >20%                    |                 2 |              0.1312  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2635 | 10-15%                  |                 2 |              0.13175 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.266  | 15-20%                  |                 5 |              0.0532  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2689 | 10-15%                  |                10 |              0.02689 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2766 | 5-10%                   |                 2 |              0.1383  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2771 | <5%                     |                 2 |              0.13855 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2779 | <5%                     |                 2 |              0.13895 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.28   | 5-10%                   |                 2 |              0.14    |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | <5%                     |                10 |              0.0294  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.298  | <5%                     |                 2 |              0.149   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3005 | 15-20%                  |                 2 |              0.15025 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3014 | 10-15%                  |                 2 |              0.1507  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3043 | >20%                    |                 2 |              0.15215 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3048 | 10-15%                  |                 5 |              0.06096 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3195 | 10-15%                  |                 2 |              0.15975 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3233 | 15-20%                  |                10 |              0.03233 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3346 | >20%                    |                 2 |              0.1673  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3519 | 10-15%                  |                 5 |              0.07038 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3579 | 10-15%                  |                 5 |              0.07158 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3583 | >20%                    |                 2 |              0.17915 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.368  | >20%                    |                 2 |              0.184   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3694 | <5%                     |                 2 |              0.1847  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3695 | >20%                    |                 5 |              0.0739  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3711 | >20%                    |                10 |              0.03711 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3712 | >20%                    |                 2 |              0.1856  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3779 | >20%                    |                 2 |              0.18895 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3829 | <5%                     |                 2 |              0.19145 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3873 | >20%                    |                 2 |              0.19365 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3882 | 5-10%                   |                 5 |              0.07764 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3893 | >20%                    |                 5 |              0.07786 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4013 | >20%                    |                 2 |              0.20065 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4023 | >20%                    |                10 |              0.04023 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4034 | 10-15%                  |                 2 |              0.2017  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.407  | >20%                    |                10 |              0.0407  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4075 | 10-15%                  |                10 |              0.04075 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4106 | 15-20%                  |                 2 |              0.2053  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4116 | >20%                    |                 5 |              0.08232 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.413  | >20%                    |                 2 |              0.2065  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4141 | 15-20%                  |                 2 |              0.20705 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4175 | <5%                     |                 2 |              0.20875 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4348 | >20%                    |                 2 |              0.2174  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4362 | 10-15%                  |                 5 |              0.08724 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4369 | 10-15%                  |                 5 |              0.08738 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4372 | >20%                    |                 2 |              0.2186  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4374 | <5%                     |                 2 |              0.2187  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4427 | 5-10%                   |                 5 |              0.08854 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4428 | >20%                    |                 5 |              0.08856 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.448  | >20%                    |                 5 |              0.0896  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4538 | >20%                    |                 2 |              0.2269  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4589 | >20%                    |                 5 |              0.09178 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4594 | >20%                    |                 2 |              0.2297  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.461  | >20%                    |                 5 |              0.0922  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4715 | >20%                    |                 5 |              0.0943  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4721 | >20%                    |                 5 |              0.09442 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4721 | <5%                     |                 5 |              0.09442 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4735 | >20%                    |                10 |              0.04735 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4751 | 10-15%                  |                 2 |              0.23755 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4755 | >20%                    |                 5 |              0.0951  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4772 | 5-10%                   |                 2 |              0.2386  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4781 | 5-10%                   |                 5 |              0.09562 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4821 | 5-10%                   |                10 |              0.04821 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4866 | >20%                    |                 5 |              0.09732 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4873 | 5-10%                   |                 5 |              0.09746 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4935 | >20%                    |                 2 |              0.24675 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4945 | >20%                    |                 5 |              0.0989  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4955 | >20%                    |                 5 |              0.0991  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5129 | <5%                     |                 2 |              0.25645 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5211 | >20%                    |                 5 |              0.10422 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5215 | 15-20%                  |                 5 |              0.1043  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5225 | >20%                    |                 2 |              0.26125 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5268 | >20%                    |                 5 |              0.10536 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5277 | <5%                     |                 5 |              0.10554 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5306 | 15-20%                  |                 2 |              0.2653  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5355 | <5%                     |                10 |              0.05355 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5364 | 5-10%                   |                 2 |              0.2682  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5424 | 10-15%                  |                 5 |              0.10848 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5471 | 5-10%                   |                 5 |              0.10942 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5487 | 15-20%                  |                 2 |              0.27435 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5519 | >20%                    |                 2 |              0.27595 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5533 | >20%                    |                 5 |              0.11066 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5706 | >20%                    |                 5 |              0.11412 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.576  | 5-10%                   |                 5 |              0.1152  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.5776 | >20%                    |                 2 |              0.2888  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5809 | 15-20%                  |                 5 |              0.11618 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5853 | >20%                    |                 2 |              0.29265 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.5859 | <5%                     |                 5 |              0.11718 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5892 | >20%                    |                 2 |              0.2946  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5924 | <5%                     |                 5 |              0.11848 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5974 | <5%                     |                10 |              0.05974 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6062 | <5%                     |                10 |              0.06062 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6076 | >20%                    |                10 |              0.06076 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6091 | >20%                    |                 5 |              0.12182 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6153 | >20%                    |                 2 |              0.30765 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6187 | 15-20%                  |                 5 |              0.12374 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6218 | 5-10%                   |                 5 |              0.12436 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6247 | >20%                    |                 5 |              0.12494 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6261 | >20%                    |                 5 |              0.12522 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6345 | 10-15%                  |                10 |              0.06345 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.636  | 10-15%                  |                 5 |              0.1272  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6436 | >20%                    |                10 |              0.06436 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6455 | 10-15%                  |                 5 |              0.1291  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6514 | <5%                     |                 5 |              0.13028 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6519 | 10-15%                  |                 5 |              0.13038 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.659  | >20%                    |                10 |              0.0659  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6628 | >20%                    |                 5 |              0.13256 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6634 | 10-15%                  |                10 |              0.06634 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6657 | >20%                    |                10 |              0.06657 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6668 | 10-15%                  |                 2 |              0.3334  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6832 | >20%                    |                10 |              0.06832 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6941 | >20%                    |                 5 |              0.13882 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7111 | >20%                    |                 5 |              0.14222 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7381 | >20%                    |                10 |              0.07381 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7395 | >20%                    |                 2 |              0.36975 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7523 | <5%                     |                10 |              0.07523 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7523 | >20%                    |                 5 |              0.15046 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7526 | <5%                     |                 2 |              0.3763  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7607 | >20%                    |                10 |              0.07607 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7616 | 15-20%                  |                 5 |              0.15232 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7761 | 5-10%                   |                10 |              0.07761 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7764 | <5%                     |                10 |              0.07764 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7796 | 10-15%                  |                10 |              0.07796 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7814 | 15-20%                  |                 5 |              0.15628 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7851 | >20%                    |                10 |              0.07851 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7868 | >20%                    |                 2 |              0.3934  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7869 | <5%                     |                10 |              0.07869 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7885 | <5%                     |                 5 |              0.1577  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7919 | >20%                    |                 2 |              0.39595 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7974 | 10-15%                  |                10 |              0.07974 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8023 | <5%                     |                10 |              0.08023 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8144 | 15-20%                  |                10 |              0.08144 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8165 | 5-10%                   |                10 |              0.08165 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8208 | 15-20%                  |                10 |              0.08208 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8335 | <5%                     |                10 |              0.08335 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8509 | 10-15%                  |                10 |              0.08509 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8537 | >20%                    |                10 |              0.08537 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8542 | >20%                    |                10 |              0.08542 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.859  | <5%                     |                10 |              0.0859  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8637 | 15-20%                  |                 5 |              0.17274 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8678 | >20%                    |                10 |              0.08678 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8927 | >20%                    |                10 |              0.08927 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8949 | <5%                     |                10 |              0.08949 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8986 | >20%                    |                 2 |              0.4493  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9478 | >20%                    |                 5 |              0.18956 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9621 | >20%                    |                 5 |              0.19242 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9764 | 15-20%                  |                10 |              0.09764 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.986  | 5-10%                   |                10 |              0.0986  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9878 | 10-15%                  |                10 |              0.09878 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0093 | >20%                    |                10 |              0.10093 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0197 | 10-15%                  |                 2 |              0.50985 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.048  | >20%                    |                10 |              0.1048  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0927 | <5%                     |                10 |              0.10927 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.166  | 15-20%                  |                10 |              0.1166  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1687 | <5%                     |                10 |              0.11687 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1717 | >20%                    |                10 |              0.11717 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1736 | 15-20%                  |                10 |              0.11736 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2071 | >20%                    |                 5 |              0.24142 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2372 | <5%                     |                 5 |              0.24744 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3176 | 15-20%                  |                10 |              0.13176 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3279 | >20%                    |                 2 |              0.66395 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3436 | >20%                    |                10 |              0.13436 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3728 | >20%                    |                 5 |              0.27456 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4671 | 5-10%                   |                 2 |              0.73355 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5993 | >20%                    |                10 |              0.15993 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6198 | >20%                    |                10 |              0.16198 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6785 | 15-20%                  |                10 |              0.16785 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8759 | <5%                     |                10 |              0.18759 |