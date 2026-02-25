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

Data correct as of 2026-02-25 02:35:42.982704, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1339 | >20%                    |                 2 |              0.06695 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.157  | >20%                    |                 2 |              0.0785  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1696 | >20%                    |                 5 |              0.03392 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2024 | >20%                    |                 2 |              0.1012  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2134 | >20%                    |                 2 |              0.1067  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2346 | >20%                    |                 2 |              0.1173  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2516 | >20%                    |                 2 |              0.1258  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2541 | 15-20%                  |                 2 |              0.12705 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2549 | 10-15%                  |                 2 |              0.12745 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2643 | >20%                    |                 2 |              0.13215 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2672 | <5%                     |                 2 |              0.1336  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2779 | 10-15%                  |                 2 |              0.13895 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.278  | 5-10%                   |                10 |              0.0278  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2892 | >20%                    |                 2 |              0.1446  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.294  | 5-10%                   |                 2 |              0.147   |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2997 | <5%                     |                10 |              0.02997 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3028 | >20%                    |                 5 |              0.06056 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3044 | >20%                    |                 2 |              0.1522  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3055 | 5-10%                   |                 2 |              0.15275 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3064 | >20%                    |                 2 |              0.1532  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3095 | >20%                    |                 5 |              0.0619  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3096 | >20%                    |                 2 |              0.1548  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3102 | <5%                     |                 5 |              0.06204 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3121 | >20%                    |                 2 |              0.15605 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3212 | >20%                    |                 5 |              0.06424 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3224 | <5%                     |                10 |              0.03224 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3304 | >20%                    |                 2 |              0.1652  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.3491 | >20%                    |                 2 |              0.17455 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3497 | >20%                    |                 5 |              0.06994 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.353  | <5%                     |                 5 |              0.0706  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3563 | >20%                    |                 5 |              0.07126 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3584 | 5-10%                   |                 5 |              0.07168 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3615 | 5-10%                   |                10 |              0.03615 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3655 | 10-15%                  |                 2 |              0.18275 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3711 | >20%                    |                 5 |              0.07422 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.377  | 5-10%                   |                 2 |              0.1885  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3789 | >20%                    |                10 |              0.03789 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3826 | 15-20%                  |                 2 |              0.1913  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.383  | >20%                    |                 2 |              0.1915  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3838 | 15-20%                  |                 2 |              0.1919  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3891 | >20%                    |                 5 |              0.07782 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3917 | >20%                    |                 2 |              0.19585 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4033 | >20%                    |                10 |              0.04033 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4051 | 10-15%                  |                 5 |              0.08102 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.407  | >20%                    |                 5 |              0.0814  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4077 | >20%                    |                 2 |              0.20385 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4077 | >20%                    |                 5 |              0.08154 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4093 | >20%                    |                 5 |              0.08186 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4198 | 5-10%                   |                 2 |              0.2099  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4219 | 15-20%                  |                 2 |              0.21095 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4276 | >20%                    |                 2 |              0.2138  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4301 | >20%                    |                 2 |              0.21505 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4306 | <5%                     |                 2 |              0.2153  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4323 | 15-20%                  |                 5 |              0.08646 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4331 | >20%                    |                10 |              0.04331 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.434  | 5-10%                   |                 2 |              0.217   |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4381 | <5%                     |                 2 |              0.21905 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4386 | >20%                    |                 5 |              0.08772 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4399 | >20%                    |                 2 |              0.21995 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4415 | >20%                    |                 2 |              0.22075 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4445 | >20%                    |                 5 |              0.0889  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4483 | 5-10%                   |                 2 |              0.22415 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4495 | <5%                     |                 2 |              0.22475 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.456  | 15-20%                  |                 2 |              0.228   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4577 | 5-10%                   |                 2 |              0.22885 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4594 | >20%                    |                 5 |              0.09188 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4641 | <5%                     |                 5 |              0.09282 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4646 | >20%                    |                 2 |              0.2323  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4659 | 5-10%                   |                 5 |              0.09318 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4712 | >20%                    |                 2 |              0.2356  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4813 | >20%                    |                 2 |              0.24065 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4843 | <5%                     |                 5 |              0.09686 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.485  | >20%                    |                10 |              0.0485  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4902 | >20%                    |                 5 |              0.09804 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4903 | <5%                     |                10 |              0.04903 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5003 | >20%                    |                10 |              0.05003 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5065 | 15-20%                  |                10 |              0.05065 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5092 | 15-20%                  |                 2 |              0.2546  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5127 | 5-10%                   |                 5 |              0.10254 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5158 | 15-20%                  |                 5 |              0.10316 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5202 | >20%                    |                 2 |              0.2601  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5204 | <5%                     |                10 |              0.05204 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5216 | >20%                    |                10 |              0.05216 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5248 | >20%                    |                 2 |              0.2624  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5262 | >20%                    |                 5 |              0.10524 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5329 | >20%                    |                 5 |              0.10658 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5351 | >20%                    |                 5 |              0.10702 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5381 | <5%                     |                10 |              0.05381 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5388 | >20%                    |                 5 |              0.10776 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5389 | >20%                    |                 5 |              0.10778 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5425 | <5%                     |                 5 |              0.1085  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5524 | >20%                    |                10 |              0.05524 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5553 | 15-20%                  |                 5 |              0.11106 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5789 | 15-20%                  |                10 |              0.05789 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5811 | >20%                    |                10 |              0.05811 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5824 | 15-20%                  |                10 |              0.05824 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5952 | 5-10%                   |                 2 |              0.2976  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5987 | >20%                    |                10 |              0.05987 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6043 | 15-20%                  |                 2 |              0.30215 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6122 | <5%                     |                 5 |              0.12244 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6146 | 15-20%                  |                 5 |              0.12292 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6154 | >20%                    |                 5 |              0.12308 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6174 | >20%                    |                 2 |              0.3087  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6221 | >20%                    |                 5 |              0.12442 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6325 | 15-20%                  |                10 |              0.06325 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6356 | >20%                    |                 5 |              0.12712 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6421 | >20%                    |                 5 |              0.12842 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6441 | >20%                    |                10 |              0.06441 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6477 | >20%                    |                 2 |              0.32385 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6578 | 10-15%                  |                 5 |              0.13156 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.658  | >20%                    |                10 |              0.0658  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6642 | 5-10%                   |                 5 |              0.13284 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6661 | >20%                    |                 5 |              0.13322 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6746 | 5-10%                   |                 5 |              0.13492 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.675  | >20%                    |                 5 |              0.135   |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6764 | 10-15%                  |                10 |              0.06764 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6843 | >20%                    |                 5 |              0.13686 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6881 | >20%                    |                 5 |              0.13762 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6887 | 5-10%                   |                 5 |              0.13774 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.6938 |                         |                 2 |              0.3469  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6957 | 10-15%                  |                10 |              0.06957 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.699  | >20%                    |                 2 |              0.3495  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7055 | <5%                     |                10 |              0.07055 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7196 | 5-10%                   |                 2 |              0.3598  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7279 | >20%                    |                 5 |              0.14558 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7342 | >20%                    |                10 |              0.07342 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7636 | <5%                     |                10 |              0.07636 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7696 | >20%                    |                10 |              0.07696 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7772 | >20%                    |                 5 |              0.15544 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7937 | >20%                    |                10 |              0.07937 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7965 | >20%                    |                10 |              0.07965 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8057 | >20%                    |                 5 |              0.16114 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8137 | >20%                    |                 2 |              0.40685 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8237 | 15-20%                  |                10 |              0.08237 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8266 | 5-10%                   |                10 |              0.08266 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8268 | <5%                     |                10 |              0.08268 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8347 | <5%                     |                 5 |              0.16694 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8357 | <5%                     |                 5 |              0.16714 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8455 | >20%                    |                 5 |              0.1691  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8493 | >20%                    |                10 |              0.08493 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8565 | >20%                    |                 2 |              0.42825 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8572 | >20%                    |                10 |              0.08572 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8626 | >20%                    |                 2 |              0.4313  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8627 | >20%                    |                 5 |              0.17254 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8659 | >20%                    |                 5 |              0.17318 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8662 | <5%                     |                10 |              0.08662 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8753 | >20%                    |                 2 |              0.43765 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8883 | <5%                     |                10 |              0.08883 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9037 | 10-15%                  |                 2 |              0.45185 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9057 | 5-10%                   |                10 |              0.09057 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9068 | >20%                    |                10 |              0.09068 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9194 |                         |                 5 |              0.18388 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9341 | <5%                     |                10 |              0.09341 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.944  | <5%                     |                 2 |              0.472   |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9664 | >20%                    |                10 |              0.09664 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9779 | >20%                    |                10 |              0.09779 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9818 | >20%                    |                 5 |              0.19636 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0207 | >20%                    |                 2 |              0.51035 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0254 | 5-10%                   |                 5 |              0.20508 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0276 | >20%                    |                10 |              0.10276 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0288 | 10-15%                  |                 5 |              0.20576 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.039  | >20%                    |                10 |              0.1039  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0426 | >20%                    |                10 |              0.10426 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0428 | 10-15%                  |                10 |              0.10428 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0522 | >20%                    |                10 |              0.10522 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0735 | 5-10%                   |                10 |              0.10735 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0862 | >20%                    |                10 |              0.10862 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0987 | >20%                    |                 5 |              0.21974 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1089 | 15-20%                  |                10 |              0.11089 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1635 | <5%                     |                10 |              0.11635 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.182  | 15-20%                  |                10 |              0.1182  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.2143 | >20%                    |                10 |              0.12143 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2347 | >20%                    |                 5 |              0.24694 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2418 | >20%                    |                 2 |              0.6209  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2613 | >20%                    |                10 |              0.12613 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3484 | >20%                    |                10 |              0.13484 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.359  |                         |                10 |              0.1359  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4123 | 10-15%                  |                 5 |              0.28246 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4519 | >20%                    |                 2 |              0.72595 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.647  | >20%                    |                10 |              0.1647  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6558 | 15-20%                  |                10 |              0.16558 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7261 | >20%                    |                10 |              0.17261 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2663 | 10-15%                  |                10 |              0.22663 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.5003 | <5%                     |                 5 |              0.50006 |