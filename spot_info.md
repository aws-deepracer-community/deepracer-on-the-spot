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

Data correct as of 2025-05-20 01:54:09.097281, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1649 | >20%                    |                 2 |              0.08245 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 15-20%                  |                 5 |              0.039   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2175 | >20%                    |                 2 |              0.10875 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.22   | <5%                     |                 5 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2233 | 10-15%                  |                 2 |              0.11165 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2292 | >20%                    |                 5 |              0.04584 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2333 | >20%                    |                 2 |              0.11665 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2387 | 5-10%                   |                 2 |              0.11935 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2388 | >20%                    |                 2 |              0.1194  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2409 | >20%                    |                 5 |              0.04818 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2477 | >20%                    |                 2 |              0.12385 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2484 | 15-20%                  |                 2 |              0.1242  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2538 | 10-15%                  |                10 |              0.02538 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2577 | >20%                    |                 2 |              0.12885 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2582 | <5%                     |                 2 |              0.1291  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2654 | 15-20%                  |                 2 |              0.1327  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.278  | >20%                    |                 2 |              0.139   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2813 | >20%                    |                 2 |              0.14065 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2826 | 5-10%                   |                 2 |              0.1413  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2844 | 15-20%                  |                 2 |              0.1422  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | 5-10%                   |                10 |              0.0294  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2941 | >20%                    |                 2 |              0.14705 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2959 | <5%                     |                 2 |              0.14795 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2988 | >20%                    |                 5 |              0.05976 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3079 | 10-15%                  |                 2 |              0.15395 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3085 | >20%                    |                10 |              0.03085 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3178 | 15-20%                  |                 2 |              0.1589  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3229 | >20%                    |                10 |              0.03229 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3239 | 15-20%                  |                 2 |              0.16195 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3279 | >20%                    |                 5 |              0.06558 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3289 | 5-10%                   |                 5 |              0.06578 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3297 | >20%                    |                10 |              0.03297 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3353 | >20%                    |                 2 |              0.16765 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3401 | >20%                    |                 2 |              0.17005 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3411 | >20%                    |                 2 |              0.17055 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3415 | 5-10%                   |                 5 |              0.0683  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | 15-20%                  |                10 |              0.03426 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3544 | >20%                    |                10 |              0.03544 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3553 | 15-20%                  |                 5 |              0.07106 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3575 | >20%                    |                 2 |              0.17875 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3612 | 5-10%                   |                 2 |              0.1806  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3636 | >20%                    |                 5 |              0.07272 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3647 | >20%                    |                 5 |              0.07294 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3734 | 10-15%                  |                 2 |              0.1867  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3813 | >20%                    |                 2 |              0.19065 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3833 | >20%                    |                 2 |              0.19165 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3864 | >20%                    |                 2 |              0.1932  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.388  | >20%                    |                10 |              0.0388  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3897 | 5-10%                   |                 2 |              0.19485 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.391  | >20%                    |                 2 |              0.1955  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3926 | >20%                    |                 5 |              0.07852 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3942 | 15-20%                  |                 5 |              0.07884 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3993 | <5%                     |                 2 |              0.19965 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4119 | 10-15%                  |                 2 |              0.20595 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4122 | <5%                     |                 5 |              0.08244 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.416  | 5-10%                   |                 5 |              0.0832  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4166 | <5%                     |                 5 |              0.08332 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4185 | 15-20%                  |                 2 |              0.20925 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4199 | >20%                    |                10 |              0.04199 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4234 | >20%                    |                10 |              0.04234 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4284 | 15-20%                  |                 5 |              0.08568 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4317 | <5%                     |                 2 |              0.21585 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4346 | 10-15%                  |                 5 |              0.08692 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4463 | 15-20%                  |                 5 |              0.08926 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4492 | >20%                    |                 2 |              0.2246  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4532 | >20%                    |                 5 |              0.09064 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4618 | >20%                    |                 2 |              0.2309  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4667 | >20%                    |                 5 |              0.09334 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4728 | >20%                    |                 2 |              0.2364  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4764 | >20%                    |                 5 |              0.09528 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4771 | >20%                    |                10 |              0.04771 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4774 | >20%                    |                 5 |              0.09548 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4777 | >20%                    |                 2 |              0.23885 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4797 | >20%                    |                 5 |              0.09594 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4843 | 15-20%                  |                 5 |              0.09686 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4871 | >20%                    |                 5 |              0.09742 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.492  | 10-15%                  |                 5 |              0.0984  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.496  | >20%                    |                 2 |              0.248   |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4994 | <5%                     |                 5 |              0.09988 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5042 | >20%                    |                 2 |              0.2521  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5043 | >20%                    |                 2 |              0.25215 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5072 | >20%                    |                 2 |              0.2536  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5091 | 15-20%                  |                 2 |              0.25455 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5116 | >20%                    |                 5 |              0.10232 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.513  | >20%                    |                10 |              0.0513  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5214 | 10-15%                  |                 5 |              0.10428 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5274 | >20%                    |                 5 |              0.10548 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5288 | >20%                    |                10 |              0.05288 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5331 | 15-20%                  |                 2 |              0.26655 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5514 | >20%                    |                 5 |              0.11028 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5582 | >20%                    |                 2 |              0.2791  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5641 | 5-10%                   |                 5 |              0.11282 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5656 | >20%                    |                 2 |              0.2828  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5662 | 10-15%                  |                 2 |              0.2831  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5669 | 5-10%                   |                 5 |              0.11338 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5683 | >20%                    |                 5 |              0.11366 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5715 | >20%                    |                 5 |              0.1143  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5758 | >20%                    |                 2 |              0.2879  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5803 | >20%                    |                 5 |              0.11606 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5854 | >20%                    |                 5 |              0.11708 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5945 | 5-10%                   |                 2 |              0.29725 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6004 | 5-10%                   |                10 |              0.06004 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6034 | 5-10%                   |                 2 |              0.3017  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6117 | <5%                     |                 5 |              0.12234 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6126 | 10-15%                  |                10 |              0.06126 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6147 | 10-15%                  |                10 |              0.06147 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6223 | >20%                    |                 5 |              0.12446 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6347 | >20%                    |                 2 |              0.31735 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6429 | 10-15%                  |                 5 |              0.12858 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6513 | >20%                    |                 5 |              0.13026 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6517 | 10-15%                  |                 5 |              0.13034 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6567 | 10-15%                  |                 5 |              0.13134 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6763 | >20%                    |                 5 |              0.13526 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6776 | >20%                    |                10 |              0.06776 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6797 | >20%                    |                10 |              0.06797 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6913 | >20%                    |                 2 |              0.34565 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6929 | >20%                    |                 2 |              0.34645 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7079 | <5%                     |                 5 |              0.14158 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7141 | >20%                    |                 5 |              0.14282 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7319 | 15-20%                  |                10 |              0.07319 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.742  | <5%                     |                10 |              0.0742  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7422 | 10-15%                  |                10 |              0.07422 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7445 | <5%                     |                 5 |              0.1489  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7447 | >20%                    |                 5 |              0.14894 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7498 | >20%                    |                10 |              0.07498 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7597 | <5%                     |                10 |              0.07597 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7785 | >20%                    |                 5 |              0.1557  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7831 | 5-10%                   |                10 |              0.07831 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7903 | 15-20%                  |                10 |              0.07903 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7971 | <5%                     |                10 |              0.07971 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8009 | >20%                    |                10 |              0.08009 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8029 | <5%                     |                 5 |              0.16058 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8126 | 10-15%                  |                 5 |              0.16252 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8128 | >20%                    |                10 |              0.08128 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8171 | >20%                    |                10 |              0.08171 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8181 | 15-20%                  |                10 |              0.08181 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8466 | 5-10%                   |                10 |              0.08466 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8472 | >20%                    |                10 |              0.08472 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8552 | 10-15%                  |                10 |              0.08552 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8583 | >20%                    |                10 |              0.08583 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8652 | 10-15%                  |                 2 |              0.4326  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8777 | >20%                    |                 2 |              0.43885 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8945 | >20%                    |                10 |              0.08945 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8961 | >20%                    |                 2 |              0.44805 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9067 | 15-20%                  |                 5 |              0.18134 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9247 | >20%                    |                10 |              0.09247 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9308 | >20%                    |                10 |              0.09308 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9353 | >20%                    |                10 |              0.09353 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9472 | >20%                    |                10 |              0.09472 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9595 | <5%                     |                10 |              0.09595 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9669 | >20%                    |                10 |              0.09669 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9829 | 15-20%                  |                 5 |              0.19658 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9934 | >20%                    |                10 |              0.09934 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0039 | 10-15%                  |                 5 |              0.20078 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.025  | 15-20%                  |                10 |              0.1025  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0251 | >20%                    |                 2 |              0.51255 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0403 | 10-15%                  |                10 |              0.10403 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0876 | >20%                    |                10 |              0.10876 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1103 | <5%                     |                10 |              0.11103 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1136 | >20%                    |                 5 |              0.22272 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1203 | 5-10%                   |                10 |              0.11203 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1292 | >20%                    |                 5 |              0.22584 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1548 | <5%                     |                 2 |              0.5774  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1768 | 5-10%                   |                10 |              0.11768 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2067 | 15-20%                  |                10 |              0.12067 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2093 | 15-20%                  |                10 |              0.12093 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2345 | 15-20%                  |                10 |              0.12345 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3418 | >20%                    |                 2 |              0.6709  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3459 | <5%                     |                 5 |              0.26918 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3523 | >20%                    |                10 |              0.13523 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3567 | >20%                    |                10 |              0.13567 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3742 | >20%                    |                 5 |              0.27484 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4192 | 10-15%                  |                10 |              0.14192 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4681 | >20%                    |                10 |              0.14681 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5416 | >20%                    |                10 |              0.15416 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0391 | <5%                     |                10 |              0.20391 |