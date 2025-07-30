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

Data correct as of 2025-07-30 02:07:10.512859, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1182 | 5-10%                   |                 2 |              0.0591  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.127  | >20%                    |                 2 |              0.0635  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1448 | 5-10%                   |                 2 |              0.0724  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1801 | <5%                     |                 5 |              0.03602 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1831 | >20%                    |                 2 |              0.09155 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2234 | <5%                     |                 5 |              0.04468 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2374 | 15-20%                  |                 2 |              0.1187  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2376 | >20%                    |                 2 |              0.1188  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2432 | >20%                    |                 2 |              0.1216  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2449 | 15-20%                  |                 2 |              0.12245 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2538 | >20%                    |                 2 |              0.1269  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2647 | >20%                    |                 2 |              0.13235 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.268  | >20%                    |                 2 |              0.134   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2696 | 15-20%                  |                 5 |              0.05392 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2696 | >20%                    |                 2 |              0.1348  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2708 | 5-10%                   |                 2 |              0.1354  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2766 | >20%                    |                 5 |              0.05532 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.296  | <5%                     |                10 |              0.0296  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3057 | 5-10%                   |                 5 |              0.06114 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3076 | <5%                     |                 2 |              0.1538  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3207 | 15-20%                  |                 2 |              0.16035 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.321  | 5-10%                   |                 2 |              0.1605  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3286 | >20%                    |                 5 |              0.06572 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3365 | >20%                    |                 5 |              0.0673  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3375 | >20%                    |                 2 |              0.16875 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3401 | <5%                     |                 2 |              0.17005 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3431 | 15-20%                  |                 2 |              0.17155 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3497 | 5-10%                   |                 2 |              0.17485 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3515 | 15-20%                  |                 2 |              0.17575 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3624 | >20%                    |                 5 |              0.07248 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3635 | >20%                    |                 5 |              0.0727  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3728 | >20%                    |                 2 |              0.1864  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3823 | >20%                    |                 2 |              0.19115 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3832 | >20%                    |                 5 |              0.07664 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3869 | >20%                    |                 2 |              0.19345 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.388  | >20%                    |                 5 |              0.0776  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4029 | 15-20%                  |                10 |              0.04029 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4051 | >20%                    |                 2 |              0.20255 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.414  | <5%                     |                 2 |              0.207   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4152 | >20%                    |                 5 |              0.08304 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4154 | 10-15%                  |                 2 |              0.2077  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4217 | >20%                    |                 2 |              0.21085 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4226 | 15-20%                  |                10 |              0.04226 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4394 | >20%                    |                 5 |              0.08788 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4445 | >20%                    |                 2 |              0.22225 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4494 | >20%                    |                 2 |              0.2247  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.452  | <5%                     |                 2 |              0.226   |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4525 | >20%                    |                10 |              0.04525 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4528 | 15-20%                  |                 5 |              0.09056 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4537 | 5-10%                   |                 2 |              0.22685 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4628 | >20%                    |                 2 |              0.2314  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4652 | >20%                    |                 2 |              0.2326  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4665 | >20%                    |                 5 |              0.0933  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4726 | >20%                    |                 5 |              0.09452 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4804 | 15-20%                  |                10 |              0.04804 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4834 | 5-10%                   |                 2 |              0.2417  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4856 | <5%                     |                10 |              0.04856 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4877 | >20%                    |                 5 |              0.09754 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.489  | >20%                    |                 2 |              0.2445  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4909 | 10-15%                  |                 5 |              0.09818 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4926 | 10-15%                  |                 2 |              0.2463  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4945 | >20%                    |                 2 |              0.24725 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4989 | >20%                    |                 2 |              0.24945 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4991 | >20%                    |                 2 |              0.24955 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5038 | >20%                    |                 2 |              0.2519  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5079 | >20%                    |                 5 |              0.10158 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5083 | 5-10%                   |                 5 |              0.10166 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5149 | >20%                    |                 5 |              0.10298 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5358 | 15-20%                  |                 2 |              0.2679  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5413 | <5%                     |                 2 |              0.27065 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5425 | >20%                    |                 5 |              0.1085  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5541 | >20%                    |                 5 |              0.11082 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5542 | >20%                    |                 2 |              0.2771  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.555  | 10-15%                  |                 5 |              0.111   |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5691 | >20%                    |                 5 |              0.11382 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5695 | >20%                    |                 2 |              0.28475 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5713 | >20%                    |                 5 |              0.11426 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5714 | 10-15%                  |                 5 |              0.11428 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5751 | >20%                    |                 5 |              0.11502 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5822 | >20%                    |                 2 |              0.2911  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.589  | >20%                    |                 2 |              0.2945  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5934 | <5%                     |                10 |              0.05934 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5936 | 10-15%                  |                 2 |              0.2968  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5941 | 5-10%                   |                 2 |              0.29705 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5957 | 5-10%                   |                 5 |              0.11914 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.599  | 15-20%                  |                10 |              0.0599  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6019 | <5%                     |                 5 |              0.12038 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6027 | >20%                    |                 5 |              0.12054 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6122 | >20%                    |                 5 |              0.12244 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6176 | >20%                    |                 2 |              0.3088  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6245 | 5-10%                   |                 5 |              0.1249  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6285 | >20%                    |                 2 |              0.31425 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6339 | >20%                    |                 5 |              0.12678 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6455 | >20%                    |                 5 |              0.1291  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.649  | >20%                    |                10 |              0.0649  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6518 | 10-15%                  |                 5 |              0.13036 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6548 | >20%                    |                10 |              0.06548 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6605 | >20%                    |                 5 |              0.1321  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6752 | >20%                    |                 5 |              0.13504 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6897 | 15-20%                  |                 2 |              0.34485 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6939 | >20%                    |                 2 |              0.34695 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6974 | >20%                    |                10 |              0.06974 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7063 | 15-20%                  |                 2 |              0.35315 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7079 | <5%                     |                 5 |              0.14158 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7228 | 5-10%                   |                 5 |              0.14456 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7308 | 15-20%                  |                10 |              0.07308 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7397 | 15-20%                  |                10 |              0.07397 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7476 | >20%                    |                10 |              0.07476 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7505 | >20%                    |                 5 |              0.1501  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7573 | >20%                    |                 5 |              0.15146 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.76   | <5%                     |                 5 |              0.152   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7624 | >20%                    |                 5 |              0.15248 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7712 | <5%                     |                10 |              0.07712 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7735 | >20%                    |                 5 |              0.1547  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7923 | >20%                    |                 5 |              0.15846 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7998 | >20%                    |                10 |              0.07998 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8081 | >20%                    |                 2 |              0.40405 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.8088 | 15-20%                  |                 5 |              0.16176 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8275 | 5-10%                   |                10 |              0.08275 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.832  | >20%                    |                 5 |              0.1664  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8536 | >20%                    |                10 |              0.08536 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8789 | >20%                    |                10 |              0.08789 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8791 | 5-10%                   |                10 |              0.08791 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8841 | 15-20%                  |                10 |              0.08841 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8843 | 15-20%                  |                10 |              0.08843 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8973 | 5-10%                   |                 5 |              0.17946 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9068 | <5%                     |                10 |              0.09068 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9113 | >20%                    |                10 |              0.09113 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.912  | 5-10%                   |                10 |              0.0912  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9155 | >20%                    |                 5 |              0.1831  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9367 | 5-10%                   |                10 |              0.09367 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.951  | 15-20%                  |                 5 |              0.1902  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9511 | <5%                     |                10 |              0.09511 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9525 | >20%                    |                10 |              0.09525 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9594 | 15-20%                  |                10 |              0.09594 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.96   | 5-10%                   |                10 |              0.096   |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9697 | >20%                    |                 2 |              0.48485 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9737 | 5-10%                   |                10 |              0.09737 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.974  | 15-20%                  |                10 |              0.0974  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9877 | 5-10%                   |                10 |              0.09877 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9878 | 15-20%                  |                10 |              0.09878 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9928 | <5%                     |                10 |              0.09928 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9983 | >20%                    |                10 |              0.09983 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0097 | >20%                    |                10 |              0.10097 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.015  | 15-20%                  |                10 |              0.1015  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0478 | <5%                     |                10 |              0.10478 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.068  | >20%                    |                10 |              0.1068  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0768 | 5-10%                   |                10 |              0.10768 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0869 | >20%                    |                 5 |              0.21738 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1011 | >20%                    |                10 |              0.11011 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1143 | 15-20%                  |                10 |              0.11143 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1206 | >20%                    |                10 |              0.11206 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1434 | >20%                    |                 2 |              0.5717  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1448 | >20%                    |                10 |              0.11448 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1504 | >20%                    |                10 |              0.11504 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1598 | >20%                    |                10 |              0.11598 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1687 | >20%                    |                 5 |              0.23374 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.171  | >20%                    |                 5 |              0.2342  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1742 | >20%                    |                10 |              0.11742 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.247  | <5%                     |                 2 |              0.6235  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3269 | >20%                    |                 5 |              0.26538 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3333 | 15-20%                  |                 5 |              0.26666 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3475 | >20%                    |                10 |              0.13475 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3684 | <5%                     |                10 |              0.13684 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.383  | >20%                    |                 2 |              0.6915  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4203 | 5-10%                   |                10 |              0.14203 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4245 | >20%                    |                10 |              0.14245 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.5061 | >20%                    |                 5 |              0.30122 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.557  | >20%                    |                10 |              0.1557  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.5622 | 5-10%                   |                 2 |              0.7811  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5693 | <5%                     |                 5 |              0.31386 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9217 | 10-15%                  |                10 |              0.19217 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.062  | <5%                     |                10 |              0.2062  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.078  | 5-10%                   |                10 |              0.2078  |