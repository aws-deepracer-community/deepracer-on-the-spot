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

Data correct as of 2025-02-13 01:37:56.419406, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1232 | >20%                    |                 2 |              0.0616  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1693 | <5%                     |                 5 |              0.03386 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 15-20%                  |                 5 |              0.039   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.1979 | 5-10%                   |                 2 |              0.09895 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2162 | 5-10%                   |                 2 |              0.1081  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2243 | >20%                    |                 2 |              0.11215 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2286 | <5%                     |                 2 |              0.1143  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.231  | <5%                     |                 5 |              0.0462  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2339 | 15-20%                  |                 2 |              0.11695 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2341 | >20%                    |                 2 |              0.11705 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2344 | 15-20%                  |                 2 |              0.1172  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 15-20%                  |                10 |              0.02395 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2452 | 5-10%                   |                 2 |              0.1226  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2618 | 10-15%                  |                 2 |              0.1309  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2679 | >20%                    |                 2 |              0.13395 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 15-20%                  |                 5 |              0.0552  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2792 | <5%                     |                 2 |              0.1396  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2876 | <5%                     |                 2 |              0.1438  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2879 | 15-20%                  |                 2 |              0.14395 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.29   | <5%                     |                 2 |              0.145   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.295  | <5%                     |                 2 |              0.1475  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2956 | 5-10%                   |                 2 |              0.1478  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2997 | <5%                     |                 2 |              0.14985 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3093 | 10-15%                  |                 2 |              0.15465 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3122 | 15-20%                  |                 5 |              0.06244 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3171 | 10-15%                  |                 2 |              0.15855 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3203 | <5%                     |                10 |              0.03203 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3324 | <5%                     |                 2 |              0.1662  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3393 | >20%                    |                 2 |              0.16965 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3403 | 15-20%                  |                 2 |              0.17015 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3429 | >20%                    |                 5 |              0.06858 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3436 | 15-20%                  |                 5 |              0.06872 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3437 | <5%                     |                10 |              0.03437 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3474 | 10-15%                  |                10 |              0.03474 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3632 | 10-15%                  |                 2 |              0.1816  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3651 | <5%                     |                 2 |              0.18255 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3679 | 10-15%                  |                 5 |              0.07358 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3705 | 15-20%                  |                 2 |              0.18525 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3722 | 5-10%                   |                 2 |              0.1861  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3762 | 5-10%                   |                 2 |              0.1881  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3782 | <5%                     |                 5 |              0.07564 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3889 | 5-10%                   |                 5 |              0.07778 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3958 | 5-10%                   |                 2 |              0.1979  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.396  | 5-10%                   |                 2 |              0.198   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.402  | 5-10%                   |                 2 |              0.201   |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4035 | 10-15%                  |                 2 |              0.20175 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4038 | >20%                    |                 5 |              0.08076 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4088 | >20%                    |                 2 |              0.2044  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4122 | 5-10%                   |                 5 |              0.08244 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.427  | <5%                     |                 5 |              0.0854  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4281 | <5%                     |                 2 |              0.21405 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4436 | >20%                    |                 5 |              0.08872 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4444 | >20%                    |                 5 |              0.08888 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4454 | >20%                    |                 5 |              0.08908 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4474 | <5%                     |                 2 |              0.2237  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.448  | >20%                    |                 5 |              0.0896  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4494 | 15-20%                  |                10 |              0.04494 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4508 | >20%                    |                10 |              0.04508 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4784 | <5%                     |                 5 |              0.09568 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4791 | 5-10%                   |                10 |              0.04791 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4867 | 5-10%                   |                 5 |              0.09734 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4881 | 5-10%                   |                 5 |              0.09762 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4906 | 10-15%                  |                 5 |              0.09812 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4911 | >20%                    |                 2 |              0.24555 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4936 | 5-10%                   |                 2 |              0.2468  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4942 | >20%                    |                 2 |              0.2471  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4972 | >20%                    |                 2 |              0.2486  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4983 | >20%                    |                 5 |              0.09966 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.499  | >20%                    |                 5 |              0.0998  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5015 | <5%                     |                 5 |              0.1003  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.511  | 15-20%                  |                 5 |              0.1022  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5114 | <5%                     |                 5 |              0.10228 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5196 | <5%                     |                 2 |              0.2598  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5206 | 15-20%                  |                 2 |              0.2603  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5221 | 10-15%                  |                 5 |              0.10442 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.526  | >20%                    |                 2 |              0.263   |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5298 | >20%                    |                 2 |              0.2649  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5342 | >20%                    |                 2 |              0.2671  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.5385 | >20%                    |                10 |              0.05385 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5391 | 10-15%                  |                 5 |              0.10782 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.549  | >20%                    |                 5 |              0.1098  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5503 | <5%                     |                 5 |              0.11006 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5526 | >20%                    |                 5 |              0.11052 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5553 | >20%                    |                 2 |              0.27765 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5617 | 5-10%                   |                 5 |              0.11234 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5646 | 15-20%                  |                 2 |              0.2823  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5682 | >20%                    |                 2 |              0.2841  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5702 | 10-15%                  |                 5 |              0.11404 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5702 | <5%                     |                 5 |              0.11404 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5789 | 5-10%                   |                10 |              0.05789 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5803 | >20%                    |                 2 |              0.29015 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5837 | 5-10%                   |                 5 |              0.11674 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6039 | 5-10%                   |                 5 |              0.12078 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6102 | 5-10%                   |                10 |              0.06102 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6124 | >20%                    |                10 |              0.06124 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6238 | 5-10%                   |                 5 |              0.12476 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6268 | >20%                    |                 2 |              0.3134  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6434 | <5%                     |                10 |              0.06434 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6462 | <5%                     |                10 |              0.06462 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6507 | >20%                    |                 5 |              0.13014 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6634 | 10-15%                  |                 5 |              0.13268 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6644 | 15-20%                  |                 5 |              0.13288 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6703 | >20%                    |                10 |              0.06703 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6715 | >20%                    |                 5 |              0.1343  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6785 | >20%                    |                 2 |              0.33925 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6786 | 15-20%                  |                 5 |              0.13572 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6847 | >20%                    |                 5 |              0.13694 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6863 | 5-10%                   |                 5 |              0.13726 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.691  | >20%                    |                10 |              0.0691  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6995 | >20%                    |                10 |              0.06995 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6999 | 15-20%                  |                 5 |              0.13998 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7373 | 5-10%                   |                10 |              0.07373 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.744  | >20%                    |                 5 |              0.1488  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.75   | >20%                    |                 5 |              0.15    |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7516 | <5%                     |                10 |              0.07516 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7516 | <5%                     |                 5 |              0.15032 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.754  | >20%                    |                10 |              0.0754  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7567 | >20%                    |                 5 |              0.15134 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7817 | >20%                    |                 5 |              0.15634 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7888 | >20%                    |                10 |              0.07888 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7994 | >20%                    |                10 |              0.07994 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8029 | 15-20%                  |                10 |              0.08029 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8055 | 10-15%                  |                10 |              0.08055 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8061 | 5-10%                   |                 2 |              0.40305 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8102 | 15-20%                  |                10 |              0.08102 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.8124 | <5%                     |                 5 |              0.16248 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8172 | <5%                     |                10 |              0.08172 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8199 | >20%                    |                10 |              0.08199 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8374 | 5-10%                   |                10 |              0.08374 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8444 | >20%                    |                 2 |              0.4222  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8474 | >20%                    |                10 |              0.08474 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.854  | <5%                     |                10 |              0.0854  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8546 | 10-15%                  |                10 |              0.08546 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8549 | <5%                     |                10 |              0.08549 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8586 | 10-15%                  |                10 |              0.08586 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8707 | >20%                    |                10 |              0.08707 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8752 | 15-20%                  |                10 |              0.08752 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8766 | <5%                     |                10 |              0.08766 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8799 | 15-20%                  |                10 |              0.08799 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8875 | 15-20%                  |                 5 |              0.1775  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8987 | >20%                    |                 2 |              0.44935 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8994 | 15-20%                  |                 5 |              0.17988 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9092 | <5%                     |                10 |              0.09092 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9128 | <5%                     |                10 |              0.09128 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9186 | <5%                     |                10 |              0.09186 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9519 | 10-15%                  |                10 |              0.09519 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9682 | 15-20%                  |                10 |              0.09682 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9706 | >20%                    |                10 |              0.09706 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0412 | >20%                    |                10 |              0.10412 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0592 | <5%                     |                10 |              0.10592 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0816 | >20%                    |                 2 |              0.5408  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0997 | 15-20%                  |                10 |              0.10997 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1102 | >20%                    |                 2 |              0.5551  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1388 | 15-20%                  |                10 |              0.11388 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1396 | 5-10%                   |                10 |              0.11396 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1533 | >20%                    |                 5 |              0.23066 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1962 | >20%                    |                10 |              0.11962 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2013 | 10-15%                  |                 2 |              0.60065 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2044 | >20%                    |                 5 |              0.24088 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2445 | 10-15%                  |                 5 |              0.2489  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2799 | >20%                    |                10 |              0.12799 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3212 | 15-20%                  |                10 |              0.13212 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3356 | 5-10%                   |                10 |              0.13356 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3653 | >20%                    |                10 |              0.13653 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4532 | >20%                    |                10 |              0.14532 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7054 | >20%                    |                10 |              0.17054 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0535 | 5-10%                   |                10 |              0.20535 |