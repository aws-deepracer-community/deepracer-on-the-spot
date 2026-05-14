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

Data correct as of 2026-05-14 03:49:05.197802, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1264 | >20%                    |                 2 |              0.0632  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1427 | 15-20%                  |                 2 |              0.07135 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1723 | >20%                    |                 2 |              0.08615 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2016 | 15-20%                  |                 5 |              0.04032 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2057 | >20%                    |                 2 |              0.10285 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2272 | >20%                    |                 2 |              0.1136  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2328 | >20%                    |                 2 |              0.1164  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2356 | >20%                    |                 2 |              0.1178  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2368 | 15-20%                  |                 2 |              0.1184  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2412 | 15-20%                  |                 5 |              0.04824 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2456 | >20%                    |                 5 |              0.04912 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2607 | >20%                    |                 2 |              0.13035 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2659 | 15-20%                  |                 5 |              0.05318 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.272  | >20%                    |                 5 |              0.0544  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2722 | >20%                    |                 2 |              0.1361  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2792 | 15-20%                  |                 2 |              0.1396  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2823 | >20%                    |                 2 |              0.14115 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2843 | >20%                    |                 5 |              0.05686 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.292  | >20%                    |                 5 |              0.0584  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2939 | 5-10%                   |                10 |              0.02939 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.2976 | 10-15%                  |                 2 |              0.1488  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2981 | 5-10%                   |                10 |              0.02981 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3045 | >20%                    |                 2 |              0.15225 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3076 | >20%                    |                 2 |              0.1538  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3095 | >20%                    |                10 |              0.03095 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.318  | 10-15%                  |                 2 |              0.159   |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3197 | 10-15%                  |                 2 |              0.15985 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3204 | >20%                    |                 2 |              0.1602  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3323 | <5%                     |                 2 |              0.16615 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3471 | >20%                    |                 5 |              0.06942 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3615 | >20%                    |                 5 |              0.0723  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3628 | >20%                    |                 2 |              0.1814  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.365  | >20%                    |                 5 |              0.073   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.375  | 10-15%                  |                 2 |              0.1875  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3825 | >20%                    |                 5 |              0.0765  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3826 | >20%                    |                 5 |              0.07652 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3872 | >20%                    |                 5 |              0.07744 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3901 | >20%                    |                 5 |              0.07802 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3932 | >20%                    |                 5 |              0.07864 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4052 | <5%                     |                 2 |              0.2026  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4095 | 5-10%                   |                 2 |              0.20475 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4165 | >20%                    |                 2 |              0.20825 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4239 | >20%                    |                 2 |              0.21195 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4306 | >20%                    |                 5 |              0.08612 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4319 | >20%                    |                 2 |              0.21595 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4366 | >20%                    |                 5 |              0.08732 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4391 | >20%                    |                 2 |              0.21955 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4437 | >20%                    |                 2 |              0.22185 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4458 | >20%                    |                10 |              0.04458 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4519 | <5%                     |                 2 |              0.22595 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4604 | 15-20%                  |                 2 |              0.2302  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4647 | >20%                    |                 5 |              0.09294 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4671 | 15-20%                  |                 2 |              0.23355 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4674 | >20%                    |                 5 |              0.09348 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4702 | >20%                    |                 5 |              0.09404 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4784 | >20%                    |                 2 |              0.2392  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4844 | >20%                    |                 5 |              0.09688 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4927 | >20%                    |                 2 |              0.24635 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4927 | >20%                    |                 5 |              0.09854 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5071 | 5-10%                   |                 5 |              0.10142 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.513  | 15-20%                  |                 5 |              0.1026  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5163 | >20%                    |                 5 |              0.10326 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5225 | >20%                    |                10 |              0.05225 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5227 | <5%                     |                 5 |              0.10454 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5234 | >20%                    |                 5 |              0.10468 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5242 | >20%                    |                10 |              0.05242 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5329 | 5-10%                   |                10 |              0.05329 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5352 | 10-15%                  |                 5 |              0.10704 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.551  | 10-15%                  |                 2 |              0.2755  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5525 | >20%                    |                 5 |              0.1105  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5584 | >20%                    |                10 |              0.05584 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5724 | >20%                    |                10 |              0.05724 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5734 | 15-20%                  |                 2 |              0.2867  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5741 | >20%                    |                 2 |              0.28705 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6048 | >20%                    |                10 |              0.06048 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6143 | >20%                    |                 2 |              0.30715 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6178 | >20%                    |                 2 |              0.3089  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6188 | >20%                    |                 5 |              0.12376 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6285 | >20%                    |                 2 |              0.31425 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6324 | >20%                    |                10 |              0.06324 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6355 | >20%                    |                 2 |              0.31775 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6448 | >20%                    |                10 |              0.06448 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6509 | >20%                    |                 5 |              0.13018 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6577 | 15-20%                  |                10 |              0.06577 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6679 | 15-20%                  |                10 |              0.06679 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6753 | 5-10%                   |                10 |              0.06753 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6835 | 5-10%                   |                 2 |              0.34175 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6928 | >20%                    |                10 |              0.06928 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.693  | >20%                    |                 2 |              0.3465  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6934 | >20%                    |                 5 |              0.13868 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6953 | 10-15%                  |                 2 |              0.34765 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6981 | >20%                    |                10 |              0.06981 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7014 | >20%                    |                 5 |              0.14028 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7087 | >20%                    |                 5 |              0.14174 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7096 | >20%                    |                 5 |              0.14192 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7111 | >20%                    |                 2 |              0.35555 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7186 | >20%                    |                 5 |              0.14372 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7326 | >20%                    |                 5 |              0.14652 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7421 | >20%                    |                10 |              0.07421 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7637 | >20%                    |                 5 |              0.15274 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7643 | >20%                    |                 2 |              0.38215 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7732 |                         |                 2 |              0.3866  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7816 | >20%                    |                10 |              0.07816 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7913 | >20%                    |                10 |              0.07913 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7994 | >20%                    |                 5 |              0.15988 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8015 | >20%                    |                 5 |              0.1603  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.8186 | >20%                    |                10 |              0.08186 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8203 | 5-10%                   |                 5 |              0.16406 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8391 | >20%                    |                10 |              0.08391 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8429 | >20%                    |                 5 |              0.16858 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8605 | >20%                    |                10 |              0.08605 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8696 | >20%                    |                10 |              0.08696 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8718 | >20%                    |                10 |              0.08718 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8748 |                         |                 5 |              0.17496 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8764 |                         |                 2 |              0.4382  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8765 | >20%                    |                10 |              0.08765 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8881 | 15-20%                  |                10 |              0.08881 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.893  | 10-15%                  |                10 |              0.0893  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8975 | >20%                    |                10 |              0.08975 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9248 | >20%                    |                 5 |              0.18496 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9257 | 15-20%                  |                10 |              0.09257 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9399 | >20%                    |                10 |              0.09399 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      0.9652 |                         |                 5 |              0.19304 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9714 | 15-20%                  |                10 |              0.09714 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9836 | >20%                    |                10 |              0.09836 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9869 | >20%                    |                10 |              0.09869 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9911 | >20%                    |                 5 |              0.19822 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9935 | >20%                    |                 2 |              0.49675 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0051 | >20%                    |                 5 |              0.20102 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0101 | >20%                    |                 5 |              0.20202 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0143 | >20%                    |                10 |              0.10143 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0443 | >20%                    |                10 |              0.10443 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.048  | >20%                    |                10 |              0.1048  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0606 | 5-10%                   |                10 |              0.10606 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0912 | >20%                    |                 5 |              0.21824 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1971 | 5-10%                   |                 2 |              0.59855 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2099 | 5-10%                   |                 2 |              0.60495 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.2145 | 15-20%                  |                10 |              0.12145 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2185 | 10-15%                  |                10 |              0.12185 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2257 | >20%                    |                 5 |              0.24514 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2768 | >20%                    |                10 |              0.12768 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3373 | 15-20%                  |                 5 |              0.26746 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3908 | >20%                    |                10 |              0.13908 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3914 | >20%                    |                10 |              0.13914 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.415  | >20%                    |                 5 |              0.283   |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4212 | 10-15%                  |                 2 |              0.7106  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5057 | 15-20%                  |                10 |              0.15057 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5149 | >20%                    |                10 |              0.15149 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5448 | 15-20%                  |                10 |              0.15448 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6521 |                         |                10 |              0.16521 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6949 |                         |                10 |              0.16949 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0599 | >20%                    |                10 |              0.20599 |