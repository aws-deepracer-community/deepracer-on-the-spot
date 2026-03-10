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

Data correct as of 2026-03-10 02:27:51.931895, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1136 | 10-15%                  |                 2 |              0.0568  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1193 | >20%                    |                 2 |              0.05965 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1409 | 15-20%                  |                 5 |              0.02818 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1649 | >20%                    |                 2 |              0.08245 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.1907 | <5%                     |                 2 |              0.09535 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2185 | 15-20%                  |                10 |              0.02185 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2241 | 10-15%                  |                 2 |              0.11205 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2438 | >20%                    |                 2 |              0.1219  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2442 | >20%                    |                 2 |              0.1221  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2479 | >20%                    |                 2 |              0.12395 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2517 | >20%                    |                 5 |              0.05034 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2577 | 5-10%                   |                10 |              0.02577 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2642 | >20%                    |                 2 |              0.1321  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.267  | 15-20%                  |                 2 |              0.1335  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2754 | >20%                    |                 2 |              0.1377  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2837 | >20%                    |                 5 |              0.05674 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2985 | 10-15%                  |                 2 |              0.14925 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2996 | 15-20%                  |                 2 |              0.1498  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3016 | >20%                    |                 2 |              0.1508  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3026 | >20%                    |                 2 |              0.1513  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3066 | <5%                     |                 2 |              0.1533  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.307  | >20%                    |                 2 |              0.1535  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3077 | >20%                    |                 2 |              0.15385 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3078 | >20%                    |                 2 |              0.1539  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3092 | 5-10%                   |                 2 |              0.1546  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3227 | >20%                    |                 5 |              0.06454 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3268 | 5-10%                   |                10 |              0.03268 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3322 | >20%                    |                 5 |              0.06644 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3332 | <5%                     |                 5 |              0.06664 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3342 | <5%                     |                 5 |              0.06684 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3345 | >20%                    |                 5 |              0.0669  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3498 | >20%                    |                 5 |              0.06996 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3561 | >20%                    |                 5 |              0.07122 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3563 | 5-10%                   |                 2 |              0.17815 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3566 | 10-15%                  |                 2 |              0.1783  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3584 | >20%                    |                 5 |              0.07168 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3587 | <5%                     |                 2 |              0.17935 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3614 | 15-20%                  |                 2 |              0.1807  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3615 | 5-10%                   |                 5 |              0.0723  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3645 | <5%                     |                 5 |              0.0729  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3645 | >20%                    |                10 |              0.03645 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3738 | 5-10%                   |                 2 |              0.1869  |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3769 | <5%                     |                10 |              0.03769 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3806 | >20%                    |                 2 |              0.1903  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.3906 | 5-10%                   |                 5 |              0.07812 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3924 | >20%                    |                 5 |              0.07848 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3929 | >20%                    |                10 |              0.03929 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3956 | >20%                    |                 2 |              0.1978  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4007 | 5-10%                   |                 2 |              0.20035 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4024 | <5%                     |                 5 |              0.08048 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4028 | 5-10%                   |                 2 |              0.2014  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4037 | 15-20%                  |                 5 |              0.08074 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4079 | >20%                    |                 2 |              0.20395 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.4085 | 15-20%                  |                 5 |              0.0817  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4116 | >20%                    |                 2 |              0.2058  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4135 | <5%                     |                 2 |              0.20675 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.4139 | >20%                    |                10 |              0.04139 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.418  | >20%                    |                 2 |              0.209   |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4212 | >20%                    |                10 |              0.04212 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4217 | 5-10%                   |                 5 |              0.08434 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4232 | 15-20%                  |                 2 |              0.2116  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4307 | >20%                    |                 5 |              0.08614 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4325 | 10-15%                  |                 5 |              0.0865  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4327 | >20%                    |                 2 |              0.21635 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4374 | >20%                    |                 2 |              0.2187  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4407 | 15-20%                  |                10 |              0.04407 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4418 | <5%                     |                10 |              0.04418 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4438 | 15-20%                  |                 5 |              0.08876 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4442 | 15-20%                  |                 2 |              0.2221  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4448 | 15-20%                  |                 2 |              0.2224  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4608 | >20%                    |                 5 |              0.09216 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4638 | 5-10%                   |                 2 |              0.2319  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4648 | >20%                    |                 2 |              0.2324  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.465  | >20%                    |                 5 |              0.093   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4752 | 5-10%                   |                 2 |              0.2376  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4752 | >20%                    |                 5 |              0.09504 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4845 | >20%                    |                 5 |              0.0969  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4855 | >20%                    |                10 |              0.04855 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4945 | >20%                    |                 5 |              0.0989  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.495  | >20%                    |                10 |              0.0495  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4987 | <5%                     |                10 |              0.04987 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5113 | <5%                     |                 5 |              0.10226 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5119 | >20%                    |                 2 |              0.25595 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5167 | 15-20%                  |                 5 |              0.10334 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5261 | >20%                    |                 5 |              0.10522 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5264 | 15-20%                  |                10 |              0.05264 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5297 | >20%                    |                 2 |              0.26485 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5324 | <5%                     |                 5 |              0.10648 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5359 | >20%                    |                 2 |              0.26795 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5371 | >20%                    |                 5 |              0.10742 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5482 | 5-10%                   |                 5 |              0.10964 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5483 | >20%                    |                 5 |              0.10966 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5486 |                         |                 2 |              0.2743  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5521 | 15-20%                  |                10 |              0.05521 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5545 | >20%                    |                 2 |              0.27725 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5559 | <5%                     |                10 |              0.05559 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5579 | 15-20%                  |                10 |              0.05579 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5579 | >20%                    |                 2 |              0.27895 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5674 | >20%                    |                10 |              0.05674 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5761 | >20%                    |                 5 |              0.11522 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5777 | 5-10%                   |                 2 |              0.28885 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.579  | >20%                    |                 5 |              0.1158  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6014 | >20%                    |                 2 |              0.3007  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6039 | 5-10%                   |                 5 |              0.12078 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6044 | <5%                     |                10 |              0.06044 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6064 | >20%                    |                 2 |              0.3032  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6096 | >20%                    |                 5 |              0.12192 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6145 | >20%                    |                10 |              0.06145 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6151 | >20%                    |                 5 |              0.12302 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6179 | 5-10%                   |                 2 |              0.30895 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6296 | >20%                    |                10 |              0.06296 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.634  | >20%                    |                 5 |              0.1268  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6344 | >20%                    |                10 |              0.06344 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6354 | 15-20%                  |                 2 |              0.3177  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6368 | >20%                    |                10 |              0.06368 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6393 | 5-10%                   |                 5 |              0.12786 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.64   | >20%                    |                10 |              0.064   |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6441 | >20%                    |                 5 |              0.12882 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6556 | >20%                    |                 5 |              0.13112 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6568 | <5%                     |                10 |              0.06568 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6637 | >20%                    |                 5 |              0.13274 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6649 | >20%                    |                 2 |              0.33245 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6854 | >20%                    |                10 |              0.06854 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6862 | 10-15%                  |                 5 |              0.13724 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.69   | >20%                    |                10 |              0.069   |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6946 |                         |                 5 |              0.13892 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6995 | <5%                     |                10 |              0.06995 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7118 | 15-20%                  |                10 |              0.07118 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7159 | >20%                    |                 5 |              0.14318 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7252 | >20%                    |                 5 |              0.14504 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7374 | 10-15%                  |                10 |              0.07374 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7454 | >20%                    |                10 |              0.07454 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7502 | >20%                    |                 5 |              0.15004 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7657 | >20%                    |                10 |              0.07657 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7709 | >20%                    |                 5 |              0.15418 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7816 | <5%                     |                10 |              0.07816 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7879 | <5%                     |                 5 |              0.15758 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7934 | <5%                     |                10 |              0.07934 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8027 | >20%                    |                10 |              0.08027 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8183 | >20%                    |                 5 |              0.16366 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8269 | >20%                    |                 5 |              0.16538 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8449 | >20%                    |                10 |              0.08449 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8449 | >20%                    |                10 |              0.08449 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8452 | >20%                    |                 2 |              0.4226  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.846  | <5%                     |                 5 |              0.1692  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8496 | >20%                    |                10 |              0.08496 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8549 | >20%                    |                 5 |              0.17098 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.857  | >20%                    |                10 |              0.0857  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8671 | 5-10%                   |                10 |              0.08671 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.868  | 5-10%                   |                10 |              0.0868  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8915 | >20%                    |                 5 |              0.1783  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9018 | >20%                    |                 5 |              0.18036 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9052 | 10-15%                  |                 2 |              0.4526  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9089 | >20%                    |                 2 |              0.45445 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9117 | <5%                     |                10 |              0.09117 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9466 | 10-15%                  |                10 |              0.09466 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9524 | >20%                    |                10 |              0.09524 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9686 | >20%                    |                10 |              0.09686 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9733 | >20%                    |                10 |              0.09733 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9835 | >20%                    |                 2 |              0.49175 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9835 | 15-20%                  |                10 |              0.09835 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9931 | >20%                    |                10 |              0.09931 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9981 | 5-10%                   |                 5 |              0.19962 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9997 | 5-10%                   |                10 |              0.09997 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0217 | >20%                    |                 2 |              0.51085 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0288 | >20%                    |                10 |              0.10288 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.057  |                         |                10 |              0.1057  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0823 | 15-20%                  |                10 |              0.10823 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1134 | >20%                    |                10 |              0.11134 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.195  | <5%                     |                10 |              0.1195  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2053 | 10-15%                  |                10 |              0.12053 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2143 | 10-15%                  |                 5 |              0.24286 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2525 | >20%                    |                 2 |              0.62625 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.261  | >20%                    |                10 |              0.1261  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3855 | 15-20%                  |                10 |              0.13855 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4018 | 10-15%                  |                 5 |              0.28036 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4539 | >20%                    |                 5 |              0.29078 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4587 | >20%                    |                 2 |              0.72935 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5869 | >20%                    |                10 |              0.15869 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6161 | >20%                    |                 2 |              0.80805 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6729 | >20%                    |                10 |              0.16729 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.7549 | <5%                     |                 5 |              0.35098 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2263 | 10-15%                  |                10 |              0.22263 |