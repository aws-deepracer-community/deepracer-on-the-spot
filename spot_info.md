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

Data correct as of 2024-11-23 01:39:00.532648, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1204 | >20%                    |                 5 |              0.02408 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1644 | 10-15%                  |                 2 |              0.0822  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.191  | >20%                    |                 5 |              0.0382  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.223  | 5-10%                   |                 2 |              0.1115  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 5-10%                   |                 2 |              0.1121  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2283 | 15-20%                  |                 2 |              0.11415 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2335 | 5-10%                   |                 2 |              0.11675 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2353 | <5%                     |                 2 |              0.11765 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2512 | <5%                     |                 2 |              0.1256  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2612 | 10-15%                  |                 2 |              0.1306  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2788 | <5%                     |                 2 |              0.1394  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 |                         |                 2 |              0.1402  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2886 | 5-10%                   |                 2 |              0.1443  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2947 | 5-10%                   |                 2 |              0.14735 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | <5%                     |                 5 |              0.06008 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3077 | 10-15%                  |                 2 |              0.15385 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3123 | 15-20%                  |                 5 |              0.06246 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.3252 |                         |                 2 |              0.1626  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3292 | <5%                     |                 2 |              0.1646  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3369 | 5-10%                   |                 2 |              0.16845 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3372 | 15-20%                  |                 2 |              0.1686  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3393 | <5%                     |                 5 |              0.06786 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3393 | <5%                     |                10 |              0.03393 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3416 | 15-20%                  |                 2 |              0.1708  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3445 | <5%                     |                 2 |              0.17225 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3536 | >20%                    |                 2 |              0.1768  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3577 | <5%                     |                 5 |              0.07154 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3647 | >20%                    |                 5 |              0.07294 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3709 | >20%                    |                 5 |              0.07418 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3735 | <5%                     |                 2 |              0.18675 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3757 |                         |                 5 |              0.07514 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3841 | <5%                     |                10 |              0.03841 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3896 | >20%                    |                 2 |              0.1948  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3931 | >20%                    |                 2 |              0.19655 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3936 | >20%                    |                 5 |              0.07872 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3984 | >20%                    |                 2 |              0.1992  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3992 | 5-10%                   |                 2 |              0.1996  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3995 | <5%                     |                 2 |              0.19975 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4033 | 15-20%                  |                 5 |              0.08066 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.4063 | 5-10%                   |                 2 |              0.20315 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4085 | <5%                     |                 2 |              0.20425 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4116 | 5-10%                   |                 2 |              0.2058  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4139 | 5-10%                   |                 2 |              0.20695 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.4298 | >20%                    |                10 |              0.04298 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4322 | >20%                    |                 2 |              0.2161  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      0.4357 |                         |                 5 |              0.08714 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4401 | >20%                    |                 2 |              0.22005 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4415 | 10-15%                  |                 2 |              0.22075 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4441 | 5-10%                   |                 5 |              0.08882 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4511 | 5-10%                   |                 5 |              0.09022 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | 5-10%                   |                10 |              0.04529 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.456  | <5%                     |                 2 |              0.228   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.456  | 10-15%                  |                 5 |              0.0912  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4572 | 15-20%                  |                 5 |              0.09144 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4581 | <5%                     |                 5 |              0.09162 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4662 | 15-20%                  |                 5 |              0.09324 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4703 | <5%                     |                 5 |              0.09406 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.477  | 15-20%                  |                 5 |              0.0954  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4806 | 5-10%                   |                 5 |              0.09612 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4931 | >20%                    |                10 |              0.04931 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4931 | 5-10%                   |                 2 |              0.24655 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.497  | <5%                     |                 2 |              0.2485  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5068 | <5%                     |                 5 |              0.10136 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5177 | 10-15%                  |                 2 |              0.25885 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5188 | 10-15%                  |                 2 |              0.2594  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5254 | 5-10%                   |                 2 |              0.2627  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5293 | >20%                    |                 5 |              0.10586 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5306 | <5%                     |                 5 |              0.10612 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5315 | <5%                     |                 5 |              0.1063  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5332 | >20%                    |                10 |              0.05332 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.547  | 10-15%                  |                 5 |              0.1094  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5501 | >20%                    |                 2 |              0.27505 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5504 | >20%                    |                 5 |              0.11008 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5549 | 5-10%                   |                 5 |              0.11098 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5563 | 10-15%                  |                 5 |              0.11126 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5586 | 10-15%                  |                 5 |              0.11172 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5612 | >20%                    |                10 |              0.05612 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5641 | >20%                    |                 5 |              0.11282 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 |                         |                10 |              0.05663 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.584  | 15-20%                  |                 2 |              0.292   |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.594  | 10-15%                  |                10 |              0.0594  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5953 | 10-15%                  |                10 |              0.05953 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6234 | >20%                    |                 5 |              0.12468 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6241 | <5%                     |                 5 |              0.12482 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6276 | 5-10%                   |                 5 |              0.12552 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6301 | >20%                    |                 5 |              0.12602 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6311 | 5-10%                   |                10 |              0.06311 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      0.6568 |                         |                10 |              0.06568 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6796 | <5%                     |                 5 |              0.13592 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6803 | >20%                    |                10 |              0.06803 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6846 | >20%                    |                 2 |              0.3423  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.686  | 15-20%                  |                 5 |              0.1372  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.689  | 5-10%                   |                10 |              0.0689  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6905 | 5-10%                   |                 5 |              0.1381  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.694  | <5%                     |                 5 |              0.1388  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7034 | >20%                    |                10 |              0.07034 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7078 | <5%                     |                 5 |              0.14156 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7216 | 10-15%                  |                10 |              0.07216 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7371 | <5%                     |                 5 |              0.14742 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7401 | 5-10%                   |                10 |              0.07401 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7447 | 15-20%                  |                 5 |              0.14894 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7527 | <5%                     |                 2 |              0.37635 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7664 | >20%                    |                10 |              0.07664 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7769 | <5%                     |                10 |              0.07769 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7792 | 5-10%                   |                 5 |              0.15584 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7826 | 5-10%                   |                10 |              0.07826 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8218 | 5-10%                   |                10 |              0.08218 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8222 | 5-10%                   |                10 |              0.08222 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8246 | 10-15%                  |                10 |              0.08246 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8265 | 15-20%                  |                10 |              0.08265 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.844  | >20%                    |                 5 |              0.1688  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8473 | 10-15%                  |                10 |              0.08473 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8578 | 5-10%                   |                10 |              0.08578 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8715 | >20%                    |                10 |              0.08715 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8807 | 15-20%                  |                10 |              0.08807 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8949 | >20%                    |                10 |              0.08949 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9083 | 5-10%                   |                10 |              0.09083 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9089 | 5-10%                   |                10 |              0.09089 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9155 | <5%                     |                10 |              0.09155 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9475 | <5%                     |                10 |              0.09475 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9949 | 5-10%                   |                10 |              0.09949 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0229 | 5-10%                   |                10 |              0.10229 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0254 | <5%                     |                10 |              0.10254 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0261 | >20%                    |                10 |              0.10261 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0415 | 15-20%                  |                10 |              0.10415 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0425 | <5%                     |                10 |              0.10425 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0437 | >20%                    |                10 |              0.10437 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1555 | 10-15%                  |                10 |              0.11555 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1622 | 15-20%                  |                10 |              0.11622 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3457 | >20%                    |                10 |              0.13457 |