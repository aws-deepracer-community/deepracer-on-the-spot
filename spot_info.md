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

Data correct as of 2025-10-06 01:45:47.500185, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1639 | >20%                    |                 5 |              0.03278 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1799 | >20%                    |                 2 |              0.08995 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1945 | 10-15%                  |                 5 |              0.0389  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2065 | >20%                    |                 2 |              0.10325 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2096 | 10-15%                  |                 2 |              0.1048  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2399 | >20%                    |                 2 |              0.11995 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.244  | 5-10%                   |                 2 |              0.122   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2459 | >20%                    |                 2 |              0.12295 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2531 | >20%                    |                 5 |              0.05062 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2637 | >20%                    |                 2 |              0.13185 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2692 | >20%                    |                 2 |              0.1346  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2894 | >20%                    |                 2 |              0.1447  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2902 | 10-15%                  |                 2 |              0.1451  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2921 | >20%                    |                 2 |              0.14605 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3026 | 5-10%                   |                 2 |              0.1513  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3032 | >20%                    |                 5 |              0.06064 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3143 | >20%                    |                10 |              0.03143 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3219 | 15-20%                  |                 2 |              0.16095 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3247 | 10-15%                  |                 2 |              0.16235 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3252 | 15-20%                  |                 2 |              0.1626  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3376 | >20%                    |                 2 |              0.1688  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3428 | >20%                    |                 2 |              0.1714  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3463 | >20%                    |                 2 |              0.17315 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3648 | >20%                    |                 5 |              0.07296 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3655 | >20%                    |                 2 |              0.18275 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.366  | 15-20%                  |                 2 |              0.183   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3673 | >20%                    |                 2 |              0.18365 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3708 | >20%                    |                 5 |              0.07416 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3825 | >20%                    |                 2 |              0.19125 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3833 | >20%                    |                 2 |              0.19165 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3835 | >20%                    |                10 |              0.03835 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3853 | >20%                    |                 2 |              0.19265 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3934 | >20%                    |                 5 |              0.07868 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4009 | >20%                    |                 5 |              0.08018 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4021 | >20%                    |                 2 |              0.20105 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4115 | >20%                    |                 5 |              0.0823  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.413  | >20%                    |                 5 |              0.0826  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4134 | 5-10%                   |                 2 |              0.2067  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4151 | 5-10%                   |                 2 |              0.20755 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4329 | 15-20%                  |                 2 |              0.21645 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4333 | >20%                    |                 2 |              0.21665 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4334 | >20%                    |                 5 |              0.08668 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4353 | >20%                    |                 2 |              0.21765 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4373 | 10-15%                  |                 5 |              0.08746 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4398 | >20%                    |                 2 |              0.2199  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4441 | >20%                    |                 2 |              0.22205 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4453 | <5%                     |                 2 |              0.22265 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4528 | >20%                    |                 5 |              0.09056 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4576 | 10-15%                  |                 2 |              0.2288  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4585 | >20%                    |                 5 |              0.0917  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4585 | 15-20%                  |                 5 |              0.0917  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4825 | >20%                    |                 2 |              0.24125 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4867 | 10-15%                  |                 2 |              0.24335 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4922 | >20%                    |                 2 |              0.2461  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4934 | >20%                    |                 5 |              0.09868 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4985 | >20%                    |                 2 |              0.24925 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5018 | >20%                    |                 5 |              0.10036 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.511  | >20%                    |                 2 |              0.2555  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5149 | >20%                    |                 2 |              0.25745 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5156 | 5-10%                   |                 5 |              0.10312 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5178 | >20%                    |                 5 |              0.10356 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5226 | >20%                    |                 5 |              0.10452 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.524  | >20%                    |                10 |              0.0524  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5287 | >20%                    |                 5 |              0.10574 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5326 | 5-10%                   |                 2 |              0.2663  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5439 | 10-15%                  |                 2 |              0.27195 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.546  | >20%                    |                 5 |              0.1092  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5506 | >20%                    |                 5 |              0.11012 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5535 | <5%                     |                10 |              0.05535 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5599 | >20%                    |                 2 |              0.27995 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5659 | >20%                    |                10 |              0.05659 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5672 | 15-20%                  |                 2 |              0.2836  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5678 | >20%                    |                 5 |              0.11356 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5702 | 15-20%                  |                10 |              0.05702 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5864 | >20%                    |                 5 |              0.11728 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5922 | >20%                    |                 5 |              0.11844 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.593  | >20%                    |                 5 |              0.1186  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5945 | >20%                    |                 2 |              0.29725 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.602  | >20%                    |                 2 |              0.301   |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6104 | >20%                    |                 5 |              0.12208 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.616  | >20%                    |                 2 |              0.308   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6171 | >20%                    |                 5 |              0.12342 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6202 | 10-15%                  |                 5 |              0.12404 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6222 | 10-15%                  |                 5 |              0.12444 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6247 | >20%                    |                 5 |              0.12494 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6297 | 15-20%                  |                 5 |              0.12594 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6452 | 15-20%                  |                 2 |              0.3226  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6525 | >20%                    |                 5 |              0.1305  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6566 | >20%                    |                 5 |              0.13132 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6693 | >20%                    |                10 |              0.06693 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6703 | >20%                    |                 5 |              0.13406 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6733 | >20%                    |                 5 |              0.13466 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6772 | >20%                    |                 5 |              0.13544 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6782 | >20%                    |                 5 |              0.13564 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6824 | >20%                    |                 5 |              0.13648 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6982 | >20%                    |                 2 |              0.3491  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7002 | 15-20%                  |                 5 |              0.14004 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7014 | 15-20%                  |                10 |              0.07014 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7022 | >20%                    |                 5 |              0.14044 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7034 | >20%                    |                 5 |              0.14068 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7086 | 5-10%                   |                10 |              0.07086 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7108 | 15-20%                  |                10 |              0.07108 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7112 | 15-20%                  |                10 |              0.07112 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7127 | >20%                    |                10 |              0.07127 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7284 | >20%                    |                 5 |              0.14568 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.735  | 15-20%                  |                 5 |              0.147   |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7362 | >20%                    |                 2 |              0.3681  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7422 | >20%                    |                10 |              0.07422 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7441 | 15-20%                  |                10 |              0.07441 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7468 | >20%                    |                10 |              0.07468 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.748  | 10-15%                  |                 2 |              0.374   |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.787  | >20%                    |                 5 |              0.1574  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7923 | >20%                    |                10 |              0.07923 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8072 | >20%                    |                 5 |              0.16144 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8104 | >20%                    |                10 |              0.08104 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8106 | >20%                    |                 5 |              0.16212 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8122 | 15-20%                  |                 5 |              0.16244 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8152 | 15-20%                  |                10 |              0.08152 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8223 | >20%                    |                10 |              0.08223 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8256 | <5%                     |                10 |              0.08256 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8317 | >20%                    |                10 |              0.08317 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8372 | >20%                    |                10 |              0.08372 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8439 | >20%                    |                 5 |              0.16878 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8592 | 10-15%                  |                 5 |              0.17184 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8653 | >20%                    |                10 |              0.08653 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8726 | >20%                    |                 5 |              0.17452 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8831 | 10-15%                  |                 2 |              0.44155 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8848 | 15-20%                  |                10 |              0.08848 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9075 | 10-15%                  |                10 |              0.09075 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9097 | 15-20%                  |                10 |              0.09097 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9102 | >20%                    |                10 |              0.09102 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9102 | <5%                     |                10 |              0.09102 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9132 | 10-15%                  |                10 |              0.09132 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9239 | 5-10%                   |                10 |              0.09239 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9248 | <5%                     |                10 |              0.09248 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9659 | >20%                    |                10 |              0.09659 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9807 | >20%                    |                 2 |              0.49035 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9896 | 15-20%                  |                10 |              0.09896 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9945 | 15-20%                  |                10 |              0.09945 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0006 | 5-10%                   |                10 |              0.10006 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0015 | >20%                    |                 2 |              0.50075 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0092 | 10-15%                  |                10 |              0.10092 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0375 | >20%                    |                 2 |              0.51875 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0393 | >20%                    |                 5 |              0.20786 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0528 | >20%                    |                10 |              0.10528 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0594 | >20%                    |                 5 |              0.21188 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0773 | >20%                    |                10 |              0.10773 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0845 | >20%                    |                10 |              0.10845 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0881 | 10-15%                  |                 2 |              0.54405 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0926 | >20%                    |                 5 |              0.21852 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1009 | >20%                    |                 5 |              0.22018 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1239 | 15-20%                  |                10 |              0.11239 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1258 | <5%                     |                10 |              0.11258 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.137  | 10-15%                  |                10 |              0.1137  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1392 | 5-10%                   |                10 |              0.11392 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1392 | 5-10%                   |                10 |              0.11392 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1393 | >20%                    |                 5 |              0.22786 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1517 | >20%                    |                10 |              0.11517 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2349 | 15-20%                  |                10 |              0.12349 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2556 | 5-10%                   |                 2 |              0.6278  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.278  | >20%                    |                10 |              0.1278  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3039 | >20%                    |                10 |              0.13039 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3149 | 10-15%                  |                10 |              0.13149 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3757 | 10-15%                  |                 5 |              0.27514 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5012 | >20%                    |                10 |              0.15012 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6029 | >20%                    |                10 |              0.16029 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6397 | >20%                    |                10 |              0.16397 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6503 | 10-15%                  |                 5 |              0.33006 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7005 | >20%                    |                10 |              0.17005 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0906 | 10-15%                  |                10 |              0.20906 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3017 | 15-20%                  |                10 |              0.23017 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      3.0028 | >20%                    |                10 |              0.30028 |