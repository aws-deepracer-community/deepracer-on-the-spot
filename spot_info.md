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

Data correct as of 2026-05-12 03:39:35.431398, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1355 | >20%                    |                 2 |              0.06775 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1425 | 15-20%                  |                 2 |              0.07125 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1813 | >20%                    |                 2 |              0.09065 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1981 | >20%                    |                 2 |              0.09905 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.205  | 15-20%                  |                 5 |              0.041   |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2313 | >20%                    |                 2 |              0.11565 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.235  | >20%                    |                 2 |              0.1175  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2381 | 15-20%                  |                 2 |              0.11905 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2424 | 15-20%                  |                 5 |              0.04848 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2456 | >20%                    |                 2 |              0.1228  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2523 | >20%                    |                 5 |              0.05046 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2773 | >20%                    |                 2 |              0.13865 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2792 | >20%                    |                 5 |              0.05584 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2792 | >20%                    |                 2 |              0.1396  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2794 | 15-20%                  |                 5 |              0.05588 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2826 | >20%                    |                 5 |              0.05652 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2844 | 15-20%                  |                 2 |              0.1422  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2855 | >20%                    |                 2 |              0.14275 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2934 | >20%                    |                 5 |              0.05868 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2965 | 5-10%                   |                10 |              0.02965 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.2988 | 10-15%                  |                 2 |              0.1494  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.305  | 5-10%                   |                10 |              0.0305  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3071 | >20%                    |                 2 |              0.15355 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3128 | 10-15%                  |                 2 |              0.1564  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3168 | >20%                    |                 2 |              0.1584  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3187 | >20%                    |                10 |              0.03187 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3232 | >20%                    |                 2 |              0.1616  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3239 | 10-15%                  |                 2 |              0.16195 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3359 | <5%                     |                 2 |              0.16795 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3498 | 10-15%                  |                 2 |              0.1749  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3597 | >20%                    |                 5 |              0.07194 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3634 | >20%                    |                 5 |              0.07268 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3689 | >20%                    |                 5 |              0.07378 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3705 | >20%                    |                 5 |              0.0741  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3712 | >20%                    |                 5 |              0.07424 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3732 | >20%                    |                 2 |              0.1866  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3736 | >20%                    |                 5 |              0.07472 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3869 | >20%                    |                 5 |              0.07738 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.413  | >20%                    |                 2 |              0.2065  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4165 | <5%                     |                 2 |              0.20825 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4166 | 5-10%                   |                 2 |              0.2083  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4246 | >20%                    |                 2 |              0.2123  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4257 | >20%                    |                 5 |              0.08514 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4343 | >20%                    |                 2 |              0.21715 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4387 | >20%                    |                 5 |              0.08774 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4399 | >20%                    |                 5 |              0.08798 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4477 | >20%                    |                 2 |              0.22385 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4484 | >20%                    |                10 |              0.04484 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4512 | >20%                    |                 2 |              0.2256  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4541 | 15-20%                  |                 2 |              0.22705 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4544 | <5%                     |                 2 |              0.2272  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4556 | >20%                    |                 5 |              0.09112 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4617 | >20%                    |                 5 |              0.09234 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4621 | >20%                    |                 5 |              0.09242 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4658 | 15-20%                  |                 2 |              0.2329  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4749 | >20%                    |                 5 |              0.09498 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4762 | >20%                    |                 2 |              0.2381  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4798 | >20%                    |                 5 |              0.09596 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4799 | >20%                    |                10 |              0.04799 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4904 | >20%                    |                 5 |              0.09808 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4929 | >20%                    |                 5 |              0.09858 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4971 | >20%                    |                 2 |              0.24855 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5004 | 10-15%                  |                 2 |              0.2502  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5047 | >20%                    |                10 |              0.05047 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5125 | 5-10%                   |                 5 |              0.1025  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5291 | 15-20%                  |                 5 |              0.10582 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5369 | 10-15%                  |                 5 |              0.10738 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5416 | <5%                     |                 5 |              0.10832 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5532 | >20%                    |                10 |              0.05532 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5541 | >20%                    |                10 |              0.05541 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5632 | >20%                    |                10 |              0.05632 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5632 | >20%                    |                 5 |              0.11264 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.566  | 5-10%                   |                10 |              0.0566  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.572  | >20%                    |                 2 |              0.286   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5856 | 15-20%                  |                 2 |              0.2928  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5952 | >20%                    |                 2 |              0.2976  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6157 | >20%                    |                 5 |              0.12314 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6227 | >20%                    |                 2 |              0.31135 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6266 | >20%                    |                10 |              0.06266 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6267 | >20%                    |                10 |              0.06267 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6288 | >20%                    |                 5 |              0.12576 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.64   | >20%                    |                 2 |              0.32    |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6512 | 5-10%                   |                 2 |              0.3256  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6546 | >20%                    |                10 |              0.06546 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6564 | >20%                    |                 5 |              0.13128 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6784 | 15-20%                  |                10 |              0.06784 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6802 | 5-10%                   |                10 |              0.06802 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6823 | >20%                    |                10 |              0.06823 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6876 | >20%                    |                 5 |              0.13752 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6887 | >20%                    |                 5 |              0.13774 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6937 | 10-15%                  |                 2 |              0.34685 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7015 | >20%                    |                 5 |              0.1403  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7103 | >20%                    |                 2 |              0.35515 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7109 | 15-20%                  |                10 |              0.07109 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7236 | >20%                    |                 5 |              0.14472 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7291 | >20%                    |                10 |              0.07291 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7297 | >20%                    |                 2 |              0.36485 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7312 | >20%                    |                 2 |              0.3656  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7452 | 5-10%                   |                 5 |              0.14904 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7465 | >20%                    |                 5 |              0.1493  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7557 | >20%                    |                 5 |              0.15114 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7729 |                         |                 2 |              0.38645 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7762 | >20%                    |                 2 |              0.3881  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7855 | >20%                    |                10 |              0.07855 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7945 | >20%                    |                 5 |              0.1589  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.7993 | >20%                    |                10 |              0.07993 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8098 | >20%                    |                 5 |              0.16196 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8113 | >20%                    |                10 |              0.08113 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8312 | >20%                    |                10 |              0.08312 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8611 |                         |                 2 |              0.43055 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8685 | >20%                    |                10 |              0.08685 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8711 | >20%                    |                 5 |              0.17422 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8865 | >20%                    |                10 |              0.08865 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8867 | 15-20%                  |                10 |              0.08867 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9105 | >20%                    |                10 |              0.09105 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9193 | >20%                    |                10 |              0.09193 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.922  | 10-15%                  |                10 |              0.0922  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9263 | >20%                    |                 5 |              0.18526 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9338 | >20%                    |                10 |              0.09338 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9341 | 15-20%                  |                10 |              0.09341 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9472 | >20%                    |                10 |              0.09472 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9615 | >20%                    |                10 |              0.09615 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9677 | >20%                    |                 5 |              0.19354 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9747 | >20%                    |                 5 |              0.19494 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9763 | 5-10%                   |                10 |              0.09763 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.981  |                         |                 5 |              0.1962  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9821 | 15-20%                  |                10 |              0.09821 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.004  | >20%                    |                 2 |              0.502   |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0098 | >20%                    |                10 |              0.10098 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0154 | >20%                    |                10 |              0.10154 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0273 | >20%                    |                10 |              0.10273 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0488 |                         |                 5 |              0.20976 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0608 | >20%                    |                 5 |              0.21216 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0691 | >20%                    |                10 |              0.10691 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1794 | 15-20%                  |                10 |              0.11794 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1849 | >20%                    |                 5 |              0.23698 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1888 | 5-10%                   |                 2 |              0.5944  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2043 | 10-15%                  |                10 |              0.12043 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2045 | 5-10%                   |                 2 |              0.60225 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.239  | >20%                    |                 5 |              0.2478  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3676 | >20%                    |                 5 |              0.27352 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3892 | >20%                    |                10 |              0.13892 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.403  | 15-20%                  |                 5 |              0.2806  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4944 | >20%                    |                10 |              0.14944 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.516  | >20%                    |                10 |              0.1516  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.524  | >20%                    |                10 |              0.1524  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5261 | 10-15%                  |                 2 |              0.76305 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5318 | 15-20%                  |                10 |              0.15318 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6139 | 15-20%                  |                10 |              0.16139 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6787 |                         |                10 |              0.16787 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.7793 |                         |                10 |              0.17793 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.112  | >20%                    |                10 |              0.2112  |