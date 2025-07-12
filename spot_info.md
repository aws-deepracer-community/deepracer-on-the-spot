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

Data correct as of 2025-07-12 02:03:12.131345, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1475 | >20%                    |                 2 |              0.07375 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1491 | >20%                    |                 5 |              0.02982 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1531 | <5%                     |                 2 |              0.07655 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1691 | 5-10%                   |                 2 |              0.08455 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1712 | 10-15%                  |                 5 |              0.03424 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1716 | >20%                    |                 5 |              0.03432 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1952 | >20%                    |                 2 |              0.0976  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2074 | >20%                    |                 5 |              0.04148 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2108 | >20%                    |                10 |              0.02108 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2148 | >20%                    |                 2 |              0.1074  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2313 | >20%                    |                 5 |              0.04626 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2344 | 15-20%                  |                 2 |              0.1172  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2362 | 10-15%                  |                 5 |              0.04724 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2448 | 5-10%                   |                 2 |              0.1224  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2461 | >20%                    |                 2 |              0.12305 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2463 | >20%                    |                 2 |              0.12315 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2498 | >20%                    |                10 |              0.02498 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2525 | >20%                    |                 2 |              0.12625 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2573 | 15-20%                  |                 2 |              0.12865 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2635 | >20%                    |                 2 |              0.13175 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2682 | 5-10%                   |                10 |              0.02682 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.274  | >20%                    |                 2 |              0.137   |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2815 | <5%                     |                10 |              0.02815 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.288  | >20%                    |                 2 |              0.144   |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3019 | >20%                    |                10 |              0.03019 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3036 | <5%                     |                 2 |              0.1518  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.306  | >20%                    |                 5 |              0.0612  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3115 | >20%                    |                10 |              0.03115 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3116 | 5-10%                   |                 2 |              0.1558  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3139 | 15-20%                  |                 2 |              0.15695 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3144 | 10-15%                  |                 2 |              0.1572  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3199 | >20%                    |                 2 |              0.15995 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3284 | <5%                     |                 2 |              0.1642  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3455 | 15-20%                  |                 5 |              0.0691  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3455 | >20%                    |                 2 |              0.17275 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3525 | >20%                    |                 2 |              0.17625 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3545 | 10-15%                  |                 5 |              0.0709  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3684 | >20%                    |                 2 |              0.1842  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3719 | >20%                    |                 2 |              0.18595 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3737 | >20%                    |                 2 |              0.18685 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3794 | >20%                    |                 5 |              0.07588 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3828 | 5-10%                   |                 2 |              0.1914  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3859 | >20%                    |                 2 |              0.19295 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3892 | >20%                    |                 5 |              0.07784 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3894 | >20%                    |                 5 |              0.07788 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4006 | >20%                    |                 2 |              0.2003  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4008 | >20%                    |                 2 |              0.2004  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4031 | >20%                    |                 2 |              0.20155 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4051 | 5-10%                   |                 2 |              0.20255 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4176 | <5%                     |                 5 |              0.08352 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4299 | 15-20%                  |                 5 |              0.08598 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4319 | >20%                    |                 2 |              0.21595 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4374 | <5%                     |                 2 |              0.2187  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4453 | >20%                    |                 5 |              0.08906 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4477 | 10-15%                  |                 2 |              0.22385 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4499 | >20%                    |                 5 |              0.08998 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4556 | >20%                    |                 5 |              0.09112 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4647 | >20%                    |                 5 |              0.09294 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4662 | >20%                    |                 5 |              0.09324 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4663 | >20%                    |                 2 |              0.23315 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4708 | 5-10%                   |                 2 |              0.2354  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4766 | >20%                    |                 2 |              0.2383  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4781 | >20%                    |                 2 |              0.23905 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4836 | >20%                    |                 2 |              0.2418  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4844 | >20%                    |                 5 |              0.09688 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4882 | >20%                    |                 2 |              0.2441  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4886 | <5%                     |                 2 |              0.2443  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4888 | >20%                    |                 2 |              0.2444  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4943 | <5%                     |                 5 |              0.09886 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4964 | 15-20%                  |                 5 |              0.09928 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5014 | >20%                    |                 2 |              0.2507  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.506  | >20%                    |                10 |              0.0506  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5078 | 15-20%                  |                 2 |              0.2539  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5087 | 10-15%                  |                 5 |              0.10174 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5198 | >20%                    |                 5 |              0.10396 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.52   | >20%                    |                 2 |              0.26    |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5212 | 15-20%                  |                 5 |              0.10424 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5221 | >20%                    |                 5 |              0.10442 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5295 | >20%                    |                10 |              0.05295 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5317 | <5%                     |                 5 |              0.10634 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5432 | >20%                    |                 5 |              0.10864 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5443 | >20%                    |                 2 |              0.27215 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5488 | >20%                    |                 5 |              0.10976 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5489 | >20%                    |                 5 |              0.10978 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5492 | >20%                    |                 5 |              0.10984 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.563  | >20%                    |                 2 |              0.2815  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5688 | <5%                     |                 5 |              0.11376 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.5723 | >20%                    |                10 |              0.05723 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5741 | 15-20%                  |                10 |              0.05741 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5768 | >20%                    |                10 |              0.05768 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5838 | >20%                    |                 2 |              0.2919  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5881 | >20%                    |                 2 |              0.29405 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5884 | >20%                    |                 2 |              0.2942  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5896 | >20%                    |                 5 |              0.11792 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5909 | 5-10%                   |                 2 |              0.29545 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5918 | >20%                    |                10 |              0.05918 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5979 | 15-20%                  |                10 |              0.05979 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6    | 10-15%                  |                 5 |              0.12    |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6071 | >20%                    |                10 |              0.06071 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6118 | >20%                    |                 2 |              0.3059  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6144 | >20%                    |                 5 |              0.12288 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6192 | 10-15%                  |                 5 |              0.12384 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6205 | >20%                    |                 5 |              0.1241  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6231 | >20%                    |                 5 |              0.12462 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6286 | >20%                    |                 2 |              0.3143  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6403 | 10-15%                  |                 2 |              0.32015 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6496 | >20%                    |                 5 |              0.12992 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6638 | 15-20%                  |                 5 |              0.13276 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6669 | 5-10%                   |                 5 |              0.13338 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6716 | >20%                    |                 5 |              0.13432 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6772 | >20%                    |                 5 |              0.13544 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6829 | 5-10%                   |                 5 |              0.13658 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6831 | >20%                    |                 5 |              0.13662 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6857 | >20%                    |                10 |              0.06857 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.688  | >20%                    |                 5 |              0.1376  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7002 | <5%                     |                 5 |              0.14004 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7127 | 10-15%                  |                10 |              0.07127 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7175 | >20%                    |                 5 |              0.1435  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7375 | <5%                     |                10 |              0.07375 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7543 | >20%                    |                 2 |              0.37715 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7592 | >20%                    |                10 |              0.07592 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7664 | >20%                    |                10 |              0.07664 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7725 | >20%                    |                 5 |              0.1545  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7755 | 10-15%                  |                10 |              0.07755 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7776 | 10-15%                  |                10 |              0.07776 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7822 | 15-20%                  |                10 |              0.07822 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7829 | >20%                    |                 5 |              0.15658 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7836 | 5-10%                   |                10 |              0.07836 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7975 | >20%                    |                10 |              0.07975 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8018 | 5-10%                   |                10 |              0.08018 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8077 | 10-15%                  |                 5 |              0.16154 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8101 | >20%                    |                 5 |              0.16202 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8138 | >20%                    |                 5 |              0.16276 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8213 | <5%                     |                 5 |              0.16426 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.83   | <5%                     |                10 |              0.083   |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8461 | 5-10%                   |                10 |              0.08461 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8614 | >20%                    |                10 |              0.08614 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8739 | 5-10%                   |                10 |              0.08739 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8744 | <5%                     |                10 |              0.08744 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.879  | >20%                    |                10 |              0.0879  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8896 | 10-15%                  |                10 |              0.08896 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9024 | >20%                    |                10 |              0.09024 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9027 | 15-20%                  |                10 |              0.09027 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9094 | >20%                    |                10 |              0.09094 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9244 | >20%                    |                 5 |              0.18488 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9314 | >20%                    |                10 |              0.09314 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.939  | 15-20%                  |                10 |              0.0939  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9466 | 5-10%                   |                10 |              0.09466 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9478 | 15-20%                  |                10 |              0.09478 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9592 | >20%                    |                10 |              0.09592 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9643 | >20%                    |                10 |              0.09643 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9653 | >20%                    |                10 |              0.09653 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9995 | >20%                    |                 5 |              0.1999  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0032 | >20%                    |                10 |              0.10032 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0184 | >20%                    |                10 |              0.10184 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0455 | <5%                     |                10 |              0.10455 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0465 | >20%                    |                 2 |              0.52325 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0502 | >20%                    |                10 |              0.10502 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0609 | <5%                     |                10 |              0.10609 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.064  | <5%                     |                10 |              0.1064  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.086  | 15-20%                  |                10 |              0.1086  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.091  | >20%                    |                 2 |              0.5455  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1066 | <5%                     |                 2 |              0.5533  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1473 | >20%                    |                10 |              0.11473 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1543 | >20%                    |                10 |              0.11543 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2398 | >20%                    |                10 |              0.12398 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2415 | <5%                     |                 5 |              0.2483  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2644 | >20%                    |                 5 |              0.25288 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2678 | <5%                     |                10 |              0.12678 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2805 | >20%                    |                 2 |              0.64025 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2854 | >20%                    |                 5 |              0.25708 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2862 | >20%                    |                 2 |              0.6431  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3299 | 15-20%                  |                10 |              0.13299 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3821 | 10-15%                  |                10 |              0.13821 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4396 | <5%                     |                 5 |              0.28792 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4405 | >20%                    |                 5 |              0.2881  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4619 | >20%                    |                10 |              0.14619 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6172 | 15-20%                  |                10 |              0.16172 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8503 | <5%                     |                10 |              0.18503 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.9006 | >20%                    |                10 |              0.19006 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.9471 | <5%                     |                 2 |              0.97355 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9919 | 5-10%                   |                10 |              0.19919 |