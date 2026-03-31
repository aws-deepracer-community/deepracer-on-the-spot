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

Data correct as of 2026-03-31 02:46:59.007023, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2053 | 15-20%                  |                 2 |              0.10265 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2157 | >20%                    |                 2 |              0.10785 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2208 | >20%                    |                 2 |              0.1104  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2258 | >20%                    |                 2 |              0.1129  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2458 | >20%                    |                 2 |              0.1229  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2497 | 10-15%                  |                 2 |              0.12485 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2542 | >20%                    |                 2 |              0.1271  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.263  | 5-10%                   |                10 |              0.0263  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2658 | >20%                    |                 2 |              0.1329  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2749 | 15-20%                  |                 2 |              0.13745 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2774 | 15-20%                  |                 5 |              0.05548 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2784 | 15-20%                  |                 5 |              0.05568 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3028 | 5-10%                   |                10 |              0.03028 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3036 | >20%                    |                 5 |              0.06072 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.307  | >20%                    |                10 |              0.0307  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3078 | >20%                    |                 2 |              0.1539  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3204 | >20%                    |                 5 |              0.06408 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3216 | >20%                    |                 2 |              0.1608  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3219 | <5%                     |                 2 |              0.16095 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3244 | 10-15%                  |                 2 |              0.1622  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3275 | >20%                    |                 5 |              0.0655  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3293 | >20%                    |                10 |              0.03293 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3297 | 15-20%                  |                 5 |              0.06594 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3329 | 10-15%                  |                 2 |              0.16645 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.336  | >20%                    |                 5 |              0.0672  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3384 | >20%                    |                 2 |              0.1692  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3472 | <5%                     |                 2 |              0.1736  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3578 | <5%                     |                 5 |              0.07156 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3652 | 15-20%                  |                 2 |              0.1826  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3732 | >20%                    |                 2 |              0.1866  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3807 | >20%                    |                 5 |              0.07614 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3814 | 5-10%                   |                10 |              0.03814 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3833 | >20%                    |                 5 |              0.07666 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3852 | >20%                    |                 5 |              0.07704 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3875 | >20%                    |                 2 |              0.19375 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3882 | >20%                    |                 5 |              0.07764 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4054 | >20%                    |                10 |              0.04054 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4141 | 10-15%                  |                 2 |              0.20705 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4142 | <5%                     |                 2 |              0.2071  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4213 | 15-20%                  |                 2 |              0.21065 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4219 | >20%                    |                 2 |              0.21095 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4226 | 10-15%                  |                 2 |              0.2113  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.424  | >20%                    |                 2 |              0.212   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4245 | >20%                    |                 2 |              0.21225 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4246 | >20%                    |                 5 |              0.08492 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4462 | >20%                    |                 5 |              0.08924 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4491 | >20%                    |                 2 |              0.22455 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.451  | >20%                    |                 5 |              0.0902  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4553 | >20%                    |                 2 |              0.22765 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4578 | >20%                    |                 2 |              0.2289  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4605 | 15-20%                  |                10 |              0.04605 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4633 | >20%                    |                 5 |              0.09266 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4653 | >20%                    |                 2 |              0.23265 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4723 | 15-20%                  |                 2 |              0.23615 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4755 | >20%                    |                 5 |              0.0951  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4766 | >20%                    |                 5 |              0.09532 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4792 | >20%                    |                 5 |              0.09584 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4792 | >20%                    |                 5 |              0.09584 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4868 | >20%                    |                 5 |              0.09736 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.494  | >20%                    |                 2 |              0.247   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5059 | >20%                    |                 5 |              0.10118 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5104 | >20%                    |                 5 |              0.10208 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5112 | >20%                    |                 5 |              0.10224 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5133 | 15-20%                  |                 2 |              0.25665 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5138 | >20%                    |                 2 |              0.2569  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5245 | 15-20%                  |                 5 |              0.1049  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5279 | 5-10%                   |                 2 |              0.26395 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.538  | 5-10%                   |                 5 |              0.1076  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5412 | >20%                    |                 5 |              0.10824 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5418 | >20%                    |                 2 |              0.2709  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5464 | 15-20%                  |                10 |              0.05464 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5468 | 15-20%                  |                10 |              0.05468 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5584 | >20%                    |                 5 |              0.11168 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5662 | >20%                    |                 5 |              0.11324 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5697 | >20%                    |                 2 |              0.28485 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5763 | >20%                    |                10 |              0.05763 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5789 | 10-15%                  |                 5 |              0.11578 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5876 | <5%                     |                10 |              0.05876 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.589  | >20%                    |                10 |              0.0589  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.602  | >20%                    |                10 |              0.0602  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6182 | >20%                    |                10 |              0.06182 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6239 | >20%                    |                 5 |              0.12478 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6294 | >20%                    |                10 |              0.06294 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6313 | 10-15%                  |                 2 |              0.31565 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6324 | >20%                    |                 5 |              0.12648 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.635  | 5-10%                   |                10 |              0.0635  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6473 | 5-10%                   |                 5 |              0.12946 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6545 | >20%                    |                 5 |              0.1309  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6618 | >20%                    |                10 |              0.06618 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.665  | >20%                    |                10 |              0.0665  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6748 | >20%                    |                10 |              0.06748 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6853 | >20%                    |                 2 |              0.34265 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6918 | >20%                    |                 5 |              0.13836 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6932 | >20%                    |                 5 |              0.13864 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6976 | >20%                    |                 5 |              0.13952 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.699  | >20%                    |                 2 |              0.3495  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7031 | >20%                    |                10 |              0.07031 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7112 | >20%                    |                10 |              0.07112 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7357 | >20%                    |                 5 |              0.14714 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7466 | 5-10%                   |                 2 |              0.3733  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7565 | >20%                    |                10 |              0.07565 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7588 | >20%                    |                 5 |              0.15176 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7594 | >20%                    |                10 |              0.07594 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7599 | >20%                    |                10 |              0.07599 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.77   | >20%                    |                 2 |              0.385   |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7778 | >20%                    |                 5 |              0.15556 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7798 | >20%                    |                 5 |              0.15596 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.782  | >20%                    |                 5 |              0.1564  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8053 | >20%                    |                10 |              0.08053 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8127 | >20%                    |                10 |              0.08127 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8184 | 5-10%                   |                 2 |              0.4092  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8267 | >20%                    |                 5 |              0.16534 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8332 | >20%                    |                10 |              0.08332 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8363 | >20%                    |                 2 |              0.41815 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8476 | >20%                    |                 5 |              0.16952 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8523 | >20%                    |                10 |              0.08523 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8584 | >20%                    |                10 |              0.08584 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8649 | >20%                    |                 2 |              0.43245 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8687 | 5-10%                   |                10 |              0.08687 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8775 | >20%                    |                10 |              0.08775 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8888 | 15-20%                  |                10 |              0.08888 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.891  | >20%                    |                10 |              0.0891  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9024 | >20%                    |                10 |              0.09024 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9182 | >20%                    |                 2 |              0.4591  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.923  | >20%                    |                10 |              0.0923  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9336 | >20%                    |                10 |              0.09336 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9613 | 10-15%                  |                 2 |              0.48065 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9618 | 15-20%                  |                10 |              0.09618 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9777 | 10-15%                  |                10 |              0.09777 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.9925 | >20%                    |                 5 |              0.1985  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.993  | >20%                    |                10 |              0.0993  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0333 | 15-20%                  |                10 |              0.10333 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0359 | >20%                    |                 5 |              0.20718 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.043  | >20%                    |                10 |              0.1043  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0663 | >20%                    |                10 |              0.10663 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0709 | 5-10%                   |                10 |              0.10709 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1069 | >20%                    |                10 |              0.11069 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1199 | >20%                    |                 5 |              0.22398 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1457 | 10-15%                  |                10 |              0.11457 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1646 | >20%                    |                 5 |              0.23292 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2753 | 15-20%                  |                10 |              0.12753 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3322 | 15-20%                  |                10 |              0.13322 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3655 | 5-10%                   |                 2 |              0.68275 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4001 | >20%                    |                 2 |              0.70005 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4243 | 15-20%                  |                 5 |              0.28486 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4267 | >20%                    |                10 |              0.14267 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4729 | >20%                    |                 5 |              0.29458 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.5188 |                         |                 2 |              0.7594  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.0239 | >20%                    |                10 |              0.20239 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      2.0351 |                         |                 5 |              0.40702 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.6587 | >20%                    |                10 |              0.26587 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      3.0677 |                         |                10 |              0.30677 |