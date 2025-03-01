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

Data correct as of 2025-03-01 01:46:03.986498, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1051 | >20%                    |                 2 |              0.05255 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1335 | 10-15%                  |                 2 |              0.06675 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1442 | 5-10%                   |                 5 |              0.02884 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1843 | <5%                     |                 2 |              0.09215 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1909 | <5%                     |                 5 |              0.03818 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.1999 | 10-15%                  |                 5 |              0.03998 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2132 | 5-10%                   |                 2 |              0.1066  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2179 | 15-20%                  |                 5 |              0.04358 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2224 | >20%                    |                 5 |              0.04448 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2244 | >20%                    |                 5 |              0.04488 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2305 | <5%                     |                 2 |              0.11525 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.232  | >20%                    |                 2 |              0.116   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2347 | >20%                    |                 2 |              0.11735 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.236  | >20%                    |                 2 |              0.118   |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2371 | 5-10%                   |                10 |              0.02371 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 15-20%                  |                10 |              0.02395 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2404 | >20%                    |                 2 |              0.1202  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2419 | <5%                     |                 5 |              0.04838 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2421 | >20%                    |                 2 |              0.12105 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2633 | 5-10%                   |                 2 |              0.13165 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2653 | 15-20%                  |                 2 |              0.13265 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2702 | 5-10%                   |                 2 |              0.1351  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.2777 |                         |                 2 |              0.13885 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2792 | <5%                     |                 2 |              0.1396  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2841 | 10-15%                  |                10 |              0.02841 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2878 | 5-10%                   |                 2 |              0.1439  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.2879 | 5-10%                   |                 5 |              0.05758 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.292  | 10-15%                  |                 2 |              0.146   |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2958 | <5%                     |                 5 |              0.05916 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3034 | 15-20%                  |                 2 |              0.1517  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3071 | >20%                    |                 2 |              0.15355 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3091 | 15-20%                  |                 2 |              0.15455 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3104 | >20%                    |                 2 |              0.1552  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3137 | <5%                     |                 2 |              0.15685 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3173 | <5%                     |                 2 |              0.15865 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3233 | 10-15%                  |                 2 |              0.16165 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.33   | >20%                    |                10 |              0.033   |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3356 | 15-20%                  |                 5 |              0.06712 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.34   | >20%                    |                 2 |              0.17    |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.3404 |                         |                 5 |              0.06808 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3413 | <5%                     |                 2 |              0.17065 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3459 | <5%                     |                 5 |              0.06918 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3584 | 10-15%                  |                 5 |              0.07168 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3599 | 5-10%                   |                10 |              0.03599 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.363  | 15-20%                  |                 2 |              0.1815  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3675 | >20%                    |                 2 |              0.18375 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3751 | <5%                     |                 2 |              0.18755 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3759 | 5-10%                   |                 5 |              0.07518 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3823 | <5%                     |                 5 |              0.07646 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3881 | >20%                    |                 5 |              0.07762 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3979 | 10-15%                  |                10 |              0.03979 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3981 | 15-20%                  |                 2 |              0.19905 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3984 | <5%                     |                 2 |              0.1992  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4126 | 5-10%                   |                 2 |              0.2063  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4139 | 5-10%                   |                 2 |              0.20695 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4174 | >20%                    |                 2 |              0.2087  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4199 | 10-15%                  |                 2 |              0.20995 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.421  | >20%                    |                 2 |              0.2105  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4226 | <5%                     |                10 |              0.04226 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4257 | >20%                    |                 5 |              0.08514 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4274 | 5-10%                   |                 2 |              0.2137  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4277 | <5%                     |                10 |              0.04277 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4288 | >20%                    |                 5 |              0.08576 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4335 | 5-10%                   |                 2 |              0.21675 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.434  | <5%                     |                 2 |              0.217   |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4446 | 15-20%                  |                10 |              0.04446 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4464 | >20%                    |                 2 |              0.2232  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.45   | >20%                    |                 2 |              0.225   |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4604 | >20%                    |                 5 |              0.09208 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4608 | >20%                    |                 2 |              0.2304  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4652 | 10-15%                  |                 5 |              0.09304 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4679 | 5-10%                   |                 5 |              0.09358 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4688 | <5%                     |                 5 |              0.09376 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4732 | >20%                    |                 2 |              0.2366  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4797 | 15-20%                  |                 5 |              0.09594 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4972 | >20%                    |                 5 |              0.09944 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4977 | >20%                    |                 5 |              0.09954 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5    | <5%                     |                 5 |              0.1     |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5025 | >20%                    |                 2 |              0.25125 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5033 | >20%                    |                 2 |              0.25165 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.505  |                         |                10 |              0.0505  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5097 | >20%                    |                 5 |              0.10194 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5155 | 5-10%                   |                 5 |              0.1031  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5175 | <5%                     |                 5 |              0.1035  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5222 | >20%                    |                 2 |              0.2611  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5224 | >20%                    |                 5 |              0.10448 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5281 | 5-10%                   |                 5 |              0.10562 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5337 | <5%                     |                 2 |              0.26685 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5427 | 10-15%                  |                 5 |              0.10854 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5446 | 10-15%                  |                 5 |              0.10892 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5454 | 15-20%                  |                10 |              0.05454 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5466 | >20%                    |                 2 |              0.2733  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5489 | 10-15%                  |                 5 |              0.10978 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5503 | 15-20%                  |                 2 |              0.27515 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5625 | 5-10%                   |                 5 |              0.1125  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5682 | >20%                    |                 5 |              0.11364 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5707 | 5-10%                   |                 5 |              0.11414 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5738 | 5-10%                   |                10 |              0.05738 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5756 | >20%                    |                 2 |              0.2878  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5861 | >20%                    |                 2 |              0.29305 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5912 | 10-15%                  |                 5 |              0.11824 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6039 | 5-10%                   |                 2 |              0.30195 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6101 | 5-10%                   |                 5 |              0.12202 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6149 | <5%                     |                 5 |              0.12298 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6197 | >20%                    |                 5 |              0.12394 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6253 | 10-15%                  |                10 |              0.06253 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6262 | 15-20%                  |                 5 |              0.12524 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6415 | <5%                     |                10 |              0.06415 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6459 | >20%                    |                10 |              0.06459 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6616 | 10-15%                  |                 5 |              0.13232 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6755 | 5-10%                   |                 5 |              0.1351  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6774 | >20%                    |                 2 |              0.3387  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6865 | >20%                    |                 2 |              0.34325 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6894 | >20%                    |                10 |              0.06894 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7135 | >20%                    |                 5 |              0.1427  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7182 | >20%                    |                 5 |              0.14364 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7232 | >20%                    |                10 |              0.07232 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7251 | >20%                    |                 5 |              0.14502 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7251 | >20%                    |                 5 |              0.14502 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7312 | 5-10%                   |                 5 |              0.14624 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7429 | 5-10%                   |                10 |              0.07429 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7449 | <5%                     |                 5 |              0.14898 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7486 | 5-10%                   |                 5 |              0.14972 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7602 | >20%                    |                10 |              0.07602 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7656 | 15-20%                  |                 2 |              0.3828  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7661 | >20%                    |                10 |              0.07661 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7774 | 5-10%                   |                 2 |              0.3887  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7783 | 15-20%                  |                10 |              0.07783 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7844 | <5%                     |                10 |              0.07844 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7857 | >20%                    |                10 |              0.07857 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7889 | >20%                    |                 5 |              0.15778 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7915 | >20%                    |                10 |              0.07915 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7919 | >20%                    |                 5 |              0.15838 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7934 | <5%                     |                10 |              0.07934 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7959 | >20%                    |                 5 |              0.15918 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8023 | 10-15%                  |                10 |              0.08023 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8117 | >20%                    |                10 |              0.08117 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8356 | >20%                    |                10 |              0.08356 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.848  | 15-20%                  |                10 |              0.0848  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8527 | <5%                     |                10 |              0.08527 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8707 | 5-10%                   |                10 |              0.08707 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8715 | 5-10%                   |                10 |              0.08715 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8768 | <5%                     |                10 |              0.08768 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.884  | <5%                     |                10 |              0.0884  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8916 | >20%                    |                 5 |              0.17832 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9065 | 10-15%                  |                10 |              0.09065 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9276 | >20%                    |                10 |              0.09276 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9556 | 5-10%                   |                10 |              0.09556 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9573 | >20%                    |                10 |              0.09573 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.967  | >20%                    |                10 |              0.0967  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9728 | 10-15%                  |                10 |              0.09728 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0156 | 10-15%                  |                10 |              0.10156 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0252 | 15-20%                  |                10 |              0.10252 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0256 | 15-20%                  |                10 |              0.10256 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0263 | 5-10%                   |                10 |              0.10263 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.061  | >20%                    |                10 |              0.1061  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0697 | >20%                    |                10 |              0.10697 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.075  | <5%                     |                10 |              0.1075  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.0869 | >20%                    |                 2 |              0.54345 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.109  | 10-15%                  |                 2 |              0.5545  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.114  | 10-15%                  |                10 |              0.1114  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1795 | >20%                    |                10 |              0.11795 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2043 | 15-20%                  |                10 |              0.12043 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2067 | >20%                    |                 2 |              0.60335 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2512 | 5-10%                   |                 5 |              0.25024 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2793 | >20%                    |                 5 |              0.25586 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3055 | 10-15%                  |                 5 |              0.2611  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3239 | >20%                    |                10 |              0.13239 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3727 | >20%                    |                 5 |              0.27454 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3802 | 15-20%                  |                 5 |              0.27604 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4168 | >20%                    |                 2 |              0.7084  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4319 | >20%                    |                10 |              0.14319 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5625 | >20%                    |                10 |              0.15625 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7416 | >20%                    |                10 |              0.17416 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7849 | >20%                    |                10 |              0.17849 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0681 | 5-10%                   |                10 |              0.20681 |