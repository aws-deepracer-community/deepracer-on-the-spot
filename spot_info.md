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

Data correct as of 2026-09-16 04:06:49.912001, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1225 | >20%                    |                 2 |              0.06125 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1738 | 15-20%                  |                 2 |              0.0869  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2078 | >20%                    |                 5 |              0.04156 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2277 | >20%                    |                 2 |              0.11385 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2307 | >20%                    |                 2 |              0.11535 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2436 | >20%                    |                 2 |              0.1218  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2515 | 15-20%                  |                 5 |              0.0503  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2574 | >20%                    |                 2 |              0.1287  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2579 | >20%                    |                 2 |              0.12895 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2846 | >20%                    |                 2 |              0.1423  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.29   | 15-20%                  |                 2 |              0.145   |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.305  | >20%                    |                 2 |              0.1525  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3062 | >20%                    |                 2 |              0.1531  |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.3227 |                         |                 5 |              0.06454 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.346  | >20%                    |                 2 |              0.173   |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.357  | 10-15%                  |                 2 |              0.1785  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3654 | >20%                    |                 5 |              0.07308 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3693 | 15-20%                  |                 2 |              0.18465 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3696 | >20%                    |                 2 |              0.1848  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3737 | 10-15%                  |                 2 |              0.18685 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3768 | >20%                    |                 5 |              0.07536 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3842 | >20%                    |                 5 |              0.07684 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3862 | <5%                     |                 2 |              0.1931  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3914 | >20%                    |                 5 |              0.07828 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3929 | >20%                    |                 2 |              0.19645 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3983 | >20%                    |                 5 |              0.07966 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4054 | >20%                    |                 5 |              0.08108 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.406  | >20%                    |                10 |              0.0406  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4173 | >20%                    |                 2 |              0.20865 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4257 | 15-20%                  |                 2 |              0.21285 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4322 | >20%                    |                 2 |              0.2161  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4329 | >20%                    |                 2 |              0.21645 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4365 | >20%                    |                 2 |              0.21825 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4543 | >20%                    |                10 |              0.04543 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4786 | 10-15%                  |                10 |              0.04786 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4795 | 10-15%                  |                 2 |              0.23975 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4807 | >20%                    |                 5 |              0.09614 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4835 | 15-20%                  |                 2 |              0.24175 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4838 |                         |                 2 |              0.2419  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4916 | >20%                    |                 5 |              0.09832 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4945 | >20%                    |                 5 |              0.0989  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4959 | >20%                    |                 5 |              0.09918 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5006 | >20%                    |                 5 |              0.10012 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5032 | 5-10%                   |                10 |              0.05032 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.504  | >20%                    |                 2 |              0.252   |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5102 | <5%                     |                 2 |              0.2551  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5111 | >20%                    |                 5 |              0.10222 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5243 | >20%                    |                10 |              0.05243 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5257 | >20%                    |                 5 |              0.10514 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5435 | >20%                    |                 5 |              0.1087  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5446 | >20%                    |                 2 |              0.2723  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5497 | >20%                    |                 5 |              0.10994 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5521 | >20%                    |                 5 |              0.11042 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5721 | >20%                    |                 5 |              0.11442 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5807 | >20%                    |                 2 |              0.29035 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5898 | >20%                    |                 2 |              0.2949  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5934 | 10-15%                  |                 5 |              0.11868 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5968 | 5-10%                   |                10 |              0.05968 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6163 | >20%                    |                 5 |              0.12326 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6223 | >20%                    |                10 |              0.06223 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6297 | 15-20%                  |                10 |              0.06297 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.633  | 5-10%                   |                 5 |              0.1266  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6353 | >20%                    |                 5 |              0.12706 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6358 | 10-15%                  |                 2 |              0.3179  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6372 | <5%                     |                10 |              0.06372 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6386 | >20%                    |                 5 |              0.12772 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.6471 | >20%                    |                 2 |              0.32355 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6499 | >20%                    |                 2 |              0.32495 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6628 | >20%                    |                 5 |              0.13256 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6666 | >20%                    |                10 |              0.06666 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.667  | 15-20%                  |                10 |              0.0667  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6777 | <5%                     |                 2 |              0.33885 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6847 | 5-10%                   |                 2 |              0.34235 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6939 | >20%                    |                 2 |              0.34695 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7082 | >20%                    |                10 |              0.07082 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7091 | >20%                    |                 5 |              0.14182 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.713  | >20%                    |                 5 |              0.1426  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7206 | >20%                    |                 5 |              0.14412 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7244 | >20%                    |                10 |              0.07244 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7337 | 15-20%                  |                 5 |              0.14674 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.75   | >20%                    |                 5 |              0.15    |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7543 | >20%                    |                10 |              0.07543 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7603 | >20%                    |                 2 |              0.38015 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7873 | >20%                    |                 5 |              0.15746 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8166 | >20%                    |                10 |              0.08166 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8197 | 15-20%                  |                 2 |              0.40985 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8375 | 15-20%                  |                10 |              0.08375 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8443 | >20%                    |                 5 |              0.16886 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8452 | 10-15%                  |                 2 |              0.4226  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8462 | 15-20%                  |                 5 |              0.16924 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8485 | >20%                    |                10 |              0.08485 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8486 | >20%                    |                 2 |              0.4243  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.885  | 5-10%                   |                10 |              0.0885  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8878 | >20%                    |                10 |              0.08878 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9046 | >20%                    |                 5 |              0.18092 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.906  | <5%                     |                 5 |              0.1812  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.911  | 10-15%                  |                 2 |              0.4555  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.9311 | >20%                    |                 2 |              0.46555 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9399 | >20%                    |                 2 |              0.46995 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9454 |                         |                 2 |              0.4727  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9613 | >20%                    |                10 |              0.09613 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9733 | 15-20%                  |                10 |              0.09733 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9852 | >20%                    |                 5 |              0.19704 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9882 | >20%                    |                10 |              0.09882 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9894 | >20%                    |                10 |              0.09894 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.01   | >20%                    |                 5 |              0.202   |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0281 | >20%                    |                10 |              0.10281 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.0298 | >20%                    |                 5 |              0.20596 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0305 | >20%                    |                10 |              0.10305 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0333 | 15-20%                  |                10 |              0.10333 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.0706 |                         |                10 |              0.10706 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0719 | >20%                    |                10 |              0.10719 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0829 | >20%                    |                 5 |              0.21658 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1038 | >20%                    |                 5 |              0.22076 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1104 | >20%                    |                 5 |              0.22208 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1159 | 5-10%                   |                10 |              0.11159 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1212 | >20%                    |                10 |              0.11212 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1252 | >20%                    |                10 |              0.11252 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1328 | >20%                    |                10 |              0.11328 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.144  | >20%                    |                10 |              0.1144  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1658 | 5-10%                   |                 2 |              0.5829  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1842 |                         |                 2 |              0.5921  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1962 |                         |                 5 |              0.23924 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2022 | 10-15%                  |                 2 |              0.6011  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2084 | >20%                    |                10 |              0.12084 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2111 | >20%                    |                10 |              0.12111 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2527 |                         |                 5 |              0.25054 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2534 | >20%                    |                10 |              0.12534 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2898 | 15-20%                  |                10 |              0.12898 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3297 | >20%                    |                10 |              0.13297 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3338 | >20%                    |                10 |              0.13338 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.363  | >20%                    |                 2 |              0.6815  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3713 | >20%                    |                10 |              0.13713 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3782 | >20%                    |                 5 |              0.27564 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.382  | 10-15%                  |                10 |              0.1382  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3956 | 15-20%                  |                10 |              0.13956 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.441  | >20%                    |                 5 |              0.2882  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5411 | >20%                    |                 2 |              0.77055 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5471 | 5-10%                   |                 5 |              0.30942 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.5634 | 5-10%                   |                 2 |              0.7817  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6475 | >20%                    |                10 |              0.16475 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7865 | >20%                    |                 5 |              0.3573  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.832  |                         |                10 |              0.1832  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8764 |                         |                10 |              0.18764 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.8936 | 15-20%                  |                10 |              0.18936 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0571 | 5-10%                   |                 2 |              1.02855 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.1153 | 15-20%                  |                 5 |              0.42306 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2278 | 5-10%                   |                10 |              0.22278 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.6068 | >20%                    |                10 |              0.26068 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6323 | >20%                    |                10 |              0.26323 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0075 | >20%                    |                10 |              0.30075 |