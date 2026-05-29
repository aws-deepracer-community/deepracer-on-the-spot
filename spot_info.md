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

Data correct as of 2026-05-29 04:03:17.457203, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1321 | >20%                    |                 2 |              0.06605 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1351 | 15-20%                  |                 2 |              0.06755 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | >20%                    |                 2 |              0.0831  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.196  | 15-20%                  |                 2 |              0.098   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2124 | >20%                    |                 2 |              0.1062  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2165 | 15-20%                  |                 5 |              0.0433  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2172 | >20%                    |                 2 |              0.1086  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2267 | >20%                    |                 2 |              0.11335 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2273 | 15-20%                  |                 5 |              0.04546 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2381 | 10-15%                  |                 2 |              0.11905 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2431 | >20%                    |                 2 |              0.12155 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.245  | >20%                    |                 2 |              0.1225  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2547 | >20%                    |                 2 |              0.12735 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.265  | >20%                    |                 2 |              0.1325  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2738 | >20%                    |                 5 |              0.05476 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2815 | >20%                    |                 5 |              0.0563  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2875 | >20%                    |                 5 |              0.0575  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2882 | >20%                    |                 5 |              0.05764 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2954 | >20%                    |                 2 |              0.1477  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2958 | 15-20%                  |                 5 |              0.05916 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2968 | >20%                    |                 5 |              0.05936 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2992 | >20%                    |                 2 |              0.1496  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2993 | >20%                    |                 2 |              0.14965 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3012 | 5-10%                   |                10 |              0.03012 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3017 | 5-10%                   |                10 |              0.03017 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3097 | >20%                    |                 2 |              0.15485 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3136 | 15-20%                  |                 2 |              0.1568  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3154 | >20%                    |                 5 |              0.06308 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3214 | >20%                    |                10 |              0.03214 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3226 | >20%                    |                 5 |              0.06452 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3261 | >20%                    |                10 |              0.03261 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3334 | <5%                     |                 2 |              0.1667  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3565 | >20%                    |                 2 |              0.17825 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3567 | >20%                    |                 5 |              0.07134 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3569 | >20%                    |                 5 |              0.07138 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3573 | 10-15%                  |                 2 |              0.17865 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3574 | 10-15%                  |                 2 |              0.1787  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3598 | >20%                    |                10 |              0.03598 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3644 | 10-15%                  |                 2 |              0.1822  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.383  | >20%                    |                 5 |              0.0766  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.3864 | >20%                    |                10 |              0.03864 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3911 | >20%                    |                 5 |              0.07822 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4022 | >20%                    |                 2 |              0.2011  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4038 | >20%                    |                 5 |              0.08076 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4115 | >20%                    |                 5 |              0.0823  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4117 | >20%                    |                 5 |              0.08234 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4192 | <5%                     |                 2 |              0.2096  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4304 | >20%                    |                 5 |              0.08608 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4323 | >20%                    |                 5 |              0.08646 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4378 | >20%                    |                 2 |              0.2189  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4418 | >20%                    |                 2 |              0.2209  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4426 | >20%                    |                 2 |              0.2213  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4462 | 5-10%                   |                 2 |              0.2231  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4486 | >20%                    |                 2 |              0.2243  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4572 | 15-20%                  |                 2 |              0.2286  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4622 | <5%                     |                 2 |              0.2311  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4683 | 10-15%                  |                 2 |              0.23415 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4784 | >20%                    |                 5 |              0.09568 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4809 | >20%                    |                 2 |              0.24045 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.488  | 15-20%                  |                 2 |              0.244   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4882 | 15-20%                  |                 2 |              0.2441  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4909 | >20%                    |                 5 |              0.09818 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5008 | 5-10%                   |                 5 |              0.10016 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5035 | 15-20%                  |                 5 |              0.1007  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5116 | >20%                    |                10 |              0.05116 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5195 | >20%                    |                 5 |              0.1039  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5244 | >20%                    |                 5 |              0.10488 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5315 | >20%                    |                 2 |              0.26575 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.536  | >20%                    |                 2 |              0.268   |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5418 | 5-10%                   |                10 |              0.05418 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5465 | 10-15%                  |                 5 |              0.1093  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5518 | <5%                     |                 5 |              0.11036 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5539 | >20%                    |                 2 |              0.27695 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5584 | >20%                    |                10 |              0.05584 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5676 | >20%                    |                 5 |              0.11352 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5723 | >20%                    |                10 |              0.05723 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5825 | >20%                    |                 5 |              0.1165  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5831 | >20%                    |                 5 |              0.11662 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.587  | >20%                    |                10 |              0.0587  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5893 | >20%                    |                 2 |              0.29465 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5915 |                         |                 2 |              0.29575 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6058 | >20%                    |                 2 |              0.3029  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6221 | 5-10%                   |                 2 |              0.31105 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6223 | >20%                    |                 5 |              0.12446 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6268 | 5-10%                   |                10 |              0.06268 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6378 | 15-20%                  |                10 |              0.06378 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6426 | >20%                    |                 2 |              0.3213  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.644  | >20%                    |                 5 |              0.1288  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6729 | >20%                    |                 5 |              0.13458 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6824 | >20%                    |                 5 |              0.13648 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6878 | >20%                    |                 5 |              0.13756 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6978 | >20%                    |                 5 |              0.13956 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6993 | >20%                    |                10 |              0.06993 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.713  | 15-20%                  |                10 |              0.0713  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.727  | >20%                    |                 2 |              0.3635  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7337 | >20%                    |                 5 |              0.14674 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7434 | >20%                    |                 5 |              0.14868 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7475 | >20%                    |                 2 |              0.37375 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.753  | >20%                    |                 5 |              0.1506  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7638 | 10-15%                  |                10 |              0.07638 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7827 | 15-20%                  |                10 |              0.07827 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7974 | 15-20%                  |                10 |              0.07974 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7979 | >20%                    |                 5 |              0.15958 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8017 | >20%                    |                10 |              0.08017 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8182 | >20%                    |                 5 |              0.16364 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8182 | >20%                    |                 5 |              0.16364 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8221 | >20%                    |                10 |              0.08221 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8246 | >20%                    |                10 |              0.08246 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8267 | 10-15%                  |                 2 |              0.41335 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8534 |                         |                 2 |              0.4267  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8657 | >20%                    |                10 |              0.08657 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8718 | >20%                    |                10 |              0.08718 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8778 | 15-20%                  |                10 |              0.08778 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8802 | >20%                    |                10 |              0.08802 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.8884 | >20%                    |                10 |              0.08884 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8908 | >20%                    |                10 |              0.08908 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8948 |                         |                 5 |              0.17896 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.9029 |                         |                10 |              0.09029 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9257 | >20%                    |                10 |              0.09257 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9268 | >20%                    |                10 |              0.09268 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9473 | >20%                    |                10 |              0.09473 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9483 | >20%                    |                 5 |              0.18966 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9488 | >20%                    |                10 |              0.09488 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9567 | >20%                    |                 5 |              0.19134 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9679 |                         |                10 |              0.09679 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9749 | >20%                    |                10 |              0.09749 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9883 | >20%                    |                 5 |              0.19766 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9937 | >20%                    |                 2 |              0.49685 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0087 | >20%                    |                10 |              0.10087 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0118 | 5-10%                   |                 2 |              0.5059  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.012  | >20%                    |                10 |              0.1012  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0142 | >20%                    |                 5 |              0.20284 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0526 | >20%                    |                10 |              0.10526 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0789 | >20%                    |                10 |              0.10789 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.087  | >20%                    |                10 |              0.1087  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0925 |                         |                 5 |              0.2185  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0964 | >20%                    |                10 |              0.10964 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.104  | 5-10%                   |                 2 |              0.552   |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1105 | 5-10%                   |                10 |              0.11105 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1285 | 5-10%                   |                 5 |              0.2257  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1836 | 15-20%                  |                10 |              0.11836 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.2188 | 15-20%                  |                10 |              0.12188 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2633 | >20%                    |                10 |              0.12633 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2921 | 15-20%                  |                 5 |              0.25842 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2935 | 10-15%                  |                10 |              0.12935 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2946 | >20%                    |                10 |              0.12946 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4203 | >20%                    |                 5 |              0.28406 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4223 | >20%                    |                10 |              0.14223 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.424  | >20%                    |                 5 |              0.2848  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4899 | 10-15%                  |                 2 |              0.74495 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6504 | 15-20%                  |                10 |              0.16504 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1358 | >20%                    |                10 |              0.21358 |