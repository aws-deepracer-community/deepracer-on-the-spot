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

Data correct as of 2026-04-12 03:18:24.068122, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1688 | >20%                    |                 2 |              0.0844  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1988 | 15-20%                  |                 2 |              0.0994  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2074 | >20%                    |                 2 |              0.1037  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2246 | >20%                    |                 2 |              0.1123  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2413 | >20%                    |                 2 |              0.12065 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2416 | >20%                    |                 2 |              0.1208  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2628 | >20%                    |                 2 |              0.1314  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.263  | 15-20%                  |                 5 |              0.0526  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2774 | 15-20%                  |                 2 |              0.1387  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2785 | 15-20%                  |                 5 |              0.0557  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2807 | 5-10%                   |                10 |              0.02807 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3048 | >20%                    |                10 |              0.03048 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3063 | >20%                    |                 2 |              0.15315 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3103 | >20%                    |                 5 |              0.06206 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3168 | 15-20%                  |                 5 |              0.06336 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.317  | >20%                    |                 5 |              0.0634  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3208 | >20%                    |                 2 |              0.1604  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3239 | 10-15%                  |                 2 |              0.16195 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3246 | 10-15%                  |                 2 |              0.1623  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3294 | 10-15%                  |                 2 |              0.1647  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3299 | >20%                    |                 5 |              0.06598 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3329 | 5-10%                   |                10 |              0.03329 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.335  | <5%                     |                 2 |              0.1675  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3367 | 15-20%                  |                 2 |              0.16835 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3552 | >20%                    |                 5 |              0.07104 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3582 | >20%                    |                 2 |              0.1791  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.364  | >20%                    |                10 |              0.0364  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3667 | <5%                     |                 2 |              0.18335 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3675 | >20%                    |                 2 |              0.18375 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.37   | 5-10%                   |                10 |              0.037   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.371  | 10-15%                  |                 2 |              0.1855  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3782 | >20%                    |                 2 |              0.1891  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.399  | >20%                    |                 5 |              0.0798  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4024 | >20%                    |                 5 |              0.08048 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.409  | >20%                    |                 5 |              0.0818  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4143 | >20%                    |                 2 |              0.20715 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4152 | <5%                     |                 2 |              0.2076  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4168 | >20%                    |                 2 |              0.2084  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4197 | 15-20%                  |                 2 |              0.20985 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4209 | >20%                    |                 5 |              0.08418 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4228 | 10-15%                  |                 2 |              0.2114  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4236 | >20%                    |                 5 |              0.08472 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4277 | >20%                    |                 2 |              0.21385 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4306 | >20%                    |                 5 |              0.08612 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4337 | >20%                    |                 2 |              0.21685 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4344 | >20%                    |                 5 |              0.08688 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4352 | >20%                    |                 2 |              0.2176  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4494 | >20%                    |                 5 |              0.08988 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4518 | >20%                    |                 5 |              0.09036 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4527 | 15-20%                  |                 2 |              0.22635 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4542 | >20%                    |                 5 |              0.09084 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4589 | 15-20%                  |                 2 |              0.22945 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4592 | >20%                    |                 5 |              0.09184 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4683 | >20%                    |                 2 |              0.23415 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4767 | >20%                    |                 2 |              0.23835 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4829 | >20%                    |                 2 |              0.24145 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4829 | >20%                    |                 2 |              0.24145 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4832 | >20%                    |                 5 |              0.09664 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4872 | >20%                    |                 5 |              0.09744 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.488  | >20%                    |                 5 |              0.0976  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.492  | >20%                    |                 5 |              0.0984  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.494  | <5%                     |                10 |              0.0494  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5223 | >20%                    |                 2 |              0.26115 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5283 | 5-10%                   |                 5 |              0.10566 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5322 | >20%                    |                10 |              0.05322 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5488 | >20%                    |                 2 |              0.2744  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5604 | 15-20%                  |                 5 |              0.11208 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5696 | >20%                    |                10 |              0.05696 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5709 | >20%                    |                 5 |              0.11418 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5721 | >20%                    |                 5 |              0.11442 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5763 | <5%                     |                 5 |              0.11526 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5785 | >20%                    |                10 |              0.05785 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5788 | 5-10%                   |                 2 |              0.2894  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5805 | 5-10%                   |                 5 |              0.1161  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5858 | 10-15%                  |                 5 |              0.11716 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5963 | >20%                    |                10 |              0.05963 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6064 | >20%                    |                 2 |              0.3032  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.608  | >20%                    |                10 |              0.0608  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.61   | 5-10%                   |                 2 |              0.305   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6128 | >20%                    |                 5 |              0.12256 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.614  | >20%                    |                 5 |              0.1228  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6287 | 10-15%                  |                 2 |              0.31435 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6299 | >20%                    |                 5 |              0.12598 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6396 | >20%                    |                10 |              0.06396 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6405 | >20%                    |                 5 |              0.1281  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6579 | >20%                    |                 2 |              0.32895 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6759 | >20%                    |                 5 |              0.13518 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6769 | 5-10%                   |                10 |              0.06769 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6774 | >20%                    |                10 |              0.06774 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6777 | >20%                    |                10 |              0.06777 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6871 | >20%                    |                 5 |              0.13742 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6976 | >20%                    |                10 |              0.06976 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.715  | >20%                    |                10 |              0.0715  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7245 | >20%                    |                 5 |              0.1449  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7266 | >20%                    |                 2 |              0.3633  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7384 | 15-20%                  |                10 |              0.07384 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.7429 | >20%                    |                 5 |              0.14858 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7453 | >20%                    |                 5 |              0.14906 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7512 | >20%                    |                 2 |              0.3756  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7543 | >20%                    |                10 |              0.07543 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7586 | >20%                    |                 5 |              0.15172 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7635 | >20%                    |                10 |              0.07635 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7662 | 15-20%                  |                10 |              0.07662 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7825 | >20%                    |                10 |              0.07825 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7899 | >20%                    |                 5 |              0.15798 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7905 | >20%                    |                 2 |              0.39525 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7905 | >20%                    |                 5 |              0.1581  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7913 | 5-10%                   |                10 |              0.07913 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8085 | >20%                    |                 5 |              0.1617  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8112 | >20%                    |                10 |              0.08112 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8139 | >20%                    |                10 |              0.08139 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8192 | >20%                    |                10 |              0.08192 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8268 | >20%                    |                10 |              0.08268 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8324 | 5-10%                   |                 2 |              0.4162  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8414 | >20%                    |                 5 |              0.16828 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8717 | >20%                    |                10 |              0.08717 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8841 | >20%                    |                 5 |              0.17682 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8848 | 15-20%                  |                10 |              0.08848 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.885  | 15-20%                  |                10 |              0.0885  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8907 | >20%                    |                10 |              0.08907 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8948 | >20%                    |                 5 |              0.17896 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.906  | >20%                    |                10 |              0.0906  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9225 | >20%                    |                10 |              0.09225 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9258 | 10-15%                  |                10 |              0.09258 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9286 | >20%                    |                 2 |              0.4643  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9322 | 15-20%                  |                10 |              0.09322 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9593 | >20%                    |                10 |              0.09593 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9658 | >20%                    |                10 |              0.09658 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9701 | >20%                    |                 5 |              0.19402 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9905 | 10-15%                  |                 2 |              0.49525 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9949 | 5-10%                   |                10 |              0.09949 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9977 | >20%                    |                10 |              0.09977 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0057 | >20%                    |                10 |              0.10057 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0644 | 15-20%                  |                10 |              0.10644 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1059 | >20%                    |                10 |              0.11059 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1247 | >20%                    |                10 |              0.11247 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1294 | >20%                    |                 5 |              0.22588 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1744 | >20%                    |                10 |              0.11744 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2042 | 10-15%                  |                10 |              0.12042 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2143 | >20%                    |                 5 |              0.24286 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2546 | 15-20%                  |                10 |              0.12546 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3533 | >20%                    |                 2 |              0.67665 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4551 | >20%                    |                 5 |              0.29102 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4665 | 15-20%                  |                10 |              0.14665 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.4856 |                         |                 5 |              0.29712 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.519  | >20%                    |                10 |              0.1519  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.5737 | 5-10%                   |                 2 |              0.78685 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5744 | 15-20%                  |                 5 |              0.31488 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.7236 |                         |                 2 |              0.8618  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9594 | >20%                    |                10 |              0.19594 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      2.0331 |                         |                10 |              0.20331 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.2053 | >20%                    |                10 |              0.32053 |