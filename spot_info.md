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

Data correct as of 2026-05-13 03:49:20.529642, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1289 | >20%                    |                 2 |              0.06445 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1427 | 15-20%                  |                 2 |              0.07135 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.175  | >20%                    |                 2 |              0.0875  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1994 | >20%                    |                 2 |              0.0997  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2041 | 15-20%                  |                 5 |              0.04082 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2274 | >20%                    |                 2 |              0.1137  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.235  | >20%                    |                 2 |              0.1175  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2357 | 15-20%                  |                 5 |              0.04714 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2392 | >20%                    |                 2 |              0.1196  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2397 | 15-20%                  |                 2 |              0.11985 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2569 | >20%                    |                 5 |              0.05138 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2702 | >20%                    |                 2 |              0.1351  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2714 | 15-20%                  |                 5 |              0.05428 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.274  | >20%                    |                 2 |              0.137   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2741 | >20%                    |                 5 |              0.05482 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2811 | 15-20%                  |                 2 |              0.14055 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2836 | >20%                    |                 2 |              0.1418  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2846 | >20%                    |                 5 |              0.05692 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2868 | >20%                    |                 5 |              0.05736 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.2951 | 10-15%                  |                 2 |              0.14755 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2994 | 5-10%                   |                10 |              0.02994 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.302  | 5-10%                   |                10 |              0.0302  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3062 | >20%                    |                 2 |              0.1531  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3107 | >20%                    |                 2 |              0.15535 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3137 | >20%                    |                10 |              0.03137 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3152 | 10-15%                  |                 2 |              0.1576  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.318  | 10-15%                  |                 2 |              0.159   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3218 | >20%                    |                 2 |              0.1609  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3337 | <5%                     |                 2 |              0.16685 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3506 | >20%                    |                 5 |              0.07012 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3588 | 10-15%                  |                 2 |              0.1794  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3622 | >20%                    |                 5 |              0.07244 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3646 | >20%                    |                 5 |              0.07292 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3701 | >20%                    |                 2 |              0.18505 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3719 | >20%                    |                 5 |              0.07438 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3803 | >20%                    |                 5 |              0.07606 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.382  | >20%                    |                 5 |              0.0764  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3829 | >20%                    |                 5 |              0.07658 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4099 | <5%                     |                 2 |              0.20495 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4129 | 5-10%                   |                 2 |              0.20645 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4133 | >20%                    |                 5 |              0.08266 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4295 | >20%                    |                 2 |              0.21475 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4301 | >20%                    |                 2 |              0.21505 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4304 | >20%                    |                 5 |              0.08608 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4304 | >20%                    |                 2 |              0.2152  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4319 | >20%                    |                 5 |              0.08638 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4353 | >20%                    |                 2 |              0.21765 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4449 | >20%                    |                 2 |              0.22245 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4518 | >20%                    |                10 |              0.04518 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4541 | <5%                     |                 2 |              0.22705 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4604 | 15-20%                  |                 2 |              0.2302  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4606 | >20%                    |                 5 |              0.09212 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4648 | 15-20%                  |                 2 |              0.2324  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.465  | >20%                    |                 5 |              0.093   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4717 | >20%                    |                 5 |              0.09434 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4771 | >20%                    |                 2 |              0.23855 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4806 | >20%                    |                 5 |              0.09612 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4827 | >20%                    |                 5 |              0.09654 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4901 | >20%                    |                 5 |              0.09802 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4927 | >20%                    |                 2 |              0.24635 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5065 | >20%                    |                10 |              0.05065 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5098 | 5-10%                   |                 5 |              0.10196 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5145 | 10-15%                  |                 2 |              0.25725 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5179 | >20%                    |                 5 |              0.10358 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5231 | 15-20%                  |                 5 |              0.10462 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5292 | <5%                     |                 5 |              0.10584 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5349 | 5-10%                   |                10 |              0.05349 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5357 | >20%                    |                10 |              0.05357 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5362 | 10-15%                  |                 5 |              0.10724 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5374 | >20%                    |                10 |              0.05374 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5537 | >20%                    |                10 |              0.05537 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5584 | >20%                    |                 5 |              0.11168 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5782 | 15-20%                  |                 2 |              0.2891  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5833 | >20%                    |                 2 |              0.29165 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5868 | >20%                    |                10 |              0.05868 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5945 | >20%                    |                10 |              0.05945 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6031 | >20%                    |                 2 |              0.30155 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.616  | >20%                    |                 2 |              0.308   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6187 | >20%                    |                10 |              0.06187 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6188 | >20%                    |                 5 |              0.12376 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6267 | >20%                    |                10 |              0.06267 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6417 | >20%                    |                 2 |              0.32085 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6468 | >20%                    |                 5 |              0.12936 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6554 | >20%                    |                 2 |              0.3277  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6664 | 5-10%                   |                 2 |              0.3332  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6722 | 5-10%                   |                10 |              0.06722 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6727 | 15-20%                  |                10 |              0.06727 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6829 | >20%                    |                 5 |              0.13658 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6833 | 15-20%                  |                10 |              0.06833 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6911 | >20%                    |                10 |              0.06911 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6956 | 10-15%                  |                 2 |              0.3478  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6966 | >20%                    |                 5 |              0.13932 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6971 | >20%                    |                 5 |              0.13942 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7003 | >20%                    |                 5 |              0.14006 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.719  | >20%                    |                 2 |              0.3595  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.728  | >20%                    |                 5 |              0.1456  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7301 | >20%                    |                10 |              0.07301 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7305 | >20%                    |                 2 |              0.36525 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7418 | >20%                    |                 5 |              0.14836 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.759  | 5-10%                   |                 5 |              0.1518  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7645 | >20%                    |                 5 |              0.1529  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.782  | >20%                    |                10 |              0.0782  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7824 |                         |                 2 |              0.3912  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7827 | >20%                    |                 2 |              0.39135 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7975 | >20%                    |                 5 |              0.1595  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8049 | >20%                    |                 5 |              0.16098 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8088 | >20%                    |                10 |              0.08088 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.8213 | >20%                    |                10 |              0.08213 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8312 | >20%                    |                10 |              0.08312 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8466 | >20%                    |                 5 |              0.16932 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8603 | >20%                    |                10 |              0.08603 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8751 | >20%                    |                10 |              0.08751 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8764 |                         |                 2 |              0.4382  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8766 | >20%                    |                10 |              0.08766 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8849 | >20%                    |                10 |              0.08849 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8867 | 15-20%                  |                10 |              0.08867 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.893  | 10-15%                  |                10 |              0.0893  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9052 | >20%                    |                10 |              0.09052 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9158 | >20%                    |                 5 |              0.18316 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9284 |                         |                 5 |              0.18568 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9315 | 15-20%                  |                10 |              0.09315 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9438 | >20%                    |                10 |              0.09438 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9518 | >20%                    |                10 |              0.09518 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9714 | 15-20%                  |                10 |              0.09714 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9763 | >20%                    |                 5 |              0.19526 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9935 | >20%                    |                 2 |              0.49675 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9976 | >20%                    |                 5 |              0.19952 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0005 |                         |                 5 |              0.2001  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0006 | >20%                    |                10 |              0.10006 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0082 | >20%                    |                10 |              0.10082 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0092 | >20%                    |                10 |              0.10092 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0155 | 5-10%                   |                10 |              0.10155 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0261 | >20%                    |                 5 |              0.20522 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0476 | >20%                    |                10 |              0.10476 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.154  | >20%                    |                 5 |              0.2308  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1806 | 5-10%                   |                 2 |              0.5903  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2035 | 5-10%                   |                 2 |              0.60175 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.2148 | 15-20%                  |                10 |              0.12148 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2236 | 10-15%                  |                10 |              0.12236 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2273 | >20%                    |                 5 |              0.24546 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2917 | >20%                    |                10 |              0.12917 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3625 | 15-20%                  |                 5 |              0.2725  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3884 | >20%                    |                 5 |              0.27768 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4444 | >20%                    |                10 |              0.14444 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4738 | 10-15%                  |                 2 |              0.7369  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.4773 | >20%                    |                10 |              0.14773 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5136 | >20%                    |                10 |              0.15136 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5417 | 15-20%                  |                10 |              0.15417 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5422 | 15-20%                  |                10 |              0.15422 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6787 |                         |                10 |              0.16787 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.7047 |                         |                10 |              0.17047 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0647 | >20%                    |                10 |              0.20647 |