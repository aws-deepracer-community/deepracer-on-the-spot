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

Data correct as of 2026-03-14 02:29:03.819608, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1338 | 10-15%                  |                 2 |              0.0669  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1691 | 15-20%                  |                 5 |              0.03382 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1765 | >20%                    |                 2 |              0.08825 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.1866 | <5%                     |                 2 |              0.0933  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2132 | >20%                    |                 5 |              0.04264 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2171 | 10-15%                  |                 2 |              0.10855 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2378 | >20%                    |                 2 |              0.1189  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2515 | >20%                    |                 2 |              0.12575 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2528 | 15-20%                  |                10 |              0.02528 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2539 | >20%                    |                 2 |              0.12695 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2573 | 5-10%                   |                10 |              0.02573 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.262  | >20%                    |                 2 |              0.131   |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.2624 | <5%                     |                 2 |              0.1312  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2734 | 15-20%                  |                 2 |              0.1367  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2785 | >20%                    |                 2 |              0.13925 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2826 | 10-15%                  |                 2 |              0.1413  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2855 | 5-10%                   |                 5 |              0.0571  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2874 | >20%                    |                 2 |              0.1437  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2958 | >20%                    |                 5 |              0.05916 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2977 | >20%                    |                 2 |              0.14885 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3015 | >20%                    |                 2 |              0.15075 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3056 | >20%                    |                 5 |              0.06112 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3056 | >20%                    |                 2 |              0.1528  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3064 | >20%                    |                 2 |              0.1532  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3103 | 5-10%                   |                 2 |              0.15515 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3153 | 15-20%                  |                 2 |              0.15765 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3293 | 5-10%                   |                10 |              0.03293 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.337  | >20%                    |                 5 |              0.0674  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3375 | <5%                     |                 2 |              0.16875 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.338  | <5%                     |                 5 |              0.0676  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.342  | >20%                    |                 5 |              0.0684  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3459 | >20%                    |                 2 |              0.17295 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.3476 | >20%                    |                10 |              0.03476 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3547 | 10-15%                  |                 2 |              0.17735 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3554 | <5%                     |                 5 |              0.07108 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3565 | 5-10%                   |                 2 |              0.17825 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.3641 | 5-10%                   |                 5 |              0.07282 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3643 | >20%                    |                10 |              0.03643 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.366  | <5%                     |                 5 |              0.0732  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3708 | >20%                    |                 5 |              0.07416 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3725 | 5-10%                   |                 2 |              0.18625 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3762 | 15-20%                  |                 2 |              0.1881  |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3769 | <5%                     |                10 |              0.03769 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3792 | >20%                    |                 5 |              0.07584 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3847 | 15-20%                  |                 5 |              0.07694 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3872 | >20%                    |                 5 |              0.07744 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3877 | <5%                     |                 5 |              0.07754 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3879 | 5-10%                   |                 2 |              0.19395 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.391  | >20%                    |                10 |              0.0391  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3933 | >20%                    |                 2 |              0.19665 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3933 | >20%                    |                 5 |              0.07866 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3978 | 15-20%                  |                10 |              0.03978 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3988 | 5-10%                   |                 2 |              0.1994  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4    | 5-10%                   |                 5 |              0.08    |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.41   | 15-20%                  |                 5 |              0.082   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4107 | >20%                    |                 2 |              0.20535 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4158 | 15-20%                  |                 2 |              0.2079  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.417  | >20%                    |                 2 |              0.2085  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4229 | >20%                    |                 5 |              0.08458 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4259 | >20%                    |                10 |              0.04259 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.432  | <5%                     |                 2 |              0.216   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4369 | 15-20%                  |                 2 |              0.21845 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4448 | 15-20%                  |                 2 |              0.2224  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4457 | >20%                    |                 2 |              0.22285 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4463 | 15-20%                  |                 5 |              0.08926 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.447  | <5%                     |                10 |              0.0447  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4476 | >20%                    |                 5 |              0.08952 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4519 | >20%                    |                10 |              0.04519 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4565 | >20%                    |                 2 |              0.22825 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4614 | <5%                     |                10 |              0.04614 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4645 | >20%                    |                 5 |              0.0929  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.466  | 10-15%                  |                 5 |              0.0932  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4688 | >20%                    |                 5 |              0.09376 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4726 | >20%                    |                 5 |              0.09452 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4735 | >20%                    |                 5 |              0.0947  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4798 | >20%                    |                 2 |              0.2399  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4805 | >20%                    |                 2 |              0.24025 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4855 | >20%                    |                10 |              0.04855 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.486  | 5-10%                   |                 2 |              0.243   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4864 | 5-10%                   |                 2 |              0.2432  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4925 | <5%                     |                 5 |              0.0985  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5019 | 5-10%                   |                 5 |              0.10038 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5058 | >20%                    |                 2 |              0.2529  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5086 | >20%                    |                 2 |              0.2543  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5141 | 15-20%                  |                 5 |              0.10282 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5176 | >20%                    |                 2 |              0.2588  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5261 | >20%                    |                 5 |              0.10522 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5325 | >20%                    |                 5 |              0.1065  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5347 | >20%                    |                10 |              0.05347 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5486 |                         |                 2 |              0.2743  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5501 | 15-20%                  |                10 |              0.05501 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5506 | >20%                    |                 5 |              0.11012 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.551  | >20%                    |                 2 |              0.2755  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5517 | >20%                    |                 5 |              0.11034 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5522 | <5%                     |                10 |              0.05522 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5535 | <5%                     |                10 |              0.05535 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5579 | >20%                    |                 2 |              0.27895 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5587 | >20%                    |                10 |              0.05587 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.574  | >20%                    |                 5 |              0.1148  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5905 | >20%                    |                 2 |              0.29525 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5923 | >20%                    |                 5 |              0.11846 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5936 | >20%                    |                10 |              0.05936 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5945 | <5%                     |                10 |              0.05945 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5961 | 15-20%                  |                10 |              0.05961 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6007 | 5-10%                   |                 2 |              0.30035 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6016 | 5-10%                   |                 5 |              0.12032 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6063 | >20%                    |                10 |              0.06063 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6091 | 5-10%                   |                 2 |              0.30455 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6176 | >20%                    |                 5 |              0.12352 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6187 | >20%                    |                 5 |              0.12374 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.6203 | 15-20%                  |                10 |              0.06203 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6214 | <5%                     |                 5 |              0.12428 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.622  | >20%                    |                 5 |              0.1244  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6255 | 15-20%                  |                10 |              0.06255 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6258 | >20%                    |                 2 |              0.3129  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.629  | >20%                    |                10 |              0.0629  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.631  | 15-20%                  |                 2 |              0.3155  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6551 | >20%                    |                10 |              0.06551 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6556 | 5-10%                   |                 5 |              0.13112 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6581 | >20%                    |                 5 |              0.13162 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6649 | >20%                    |                 2 |              0.33245 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6665 | >20%                    |                 5 |              0.1333  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.681  | 10-15%                  |                 5 |              0.1362  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6814 | >20%                    |                10 |              0.06814 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6946 |                         |                 5 |              0.13892 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6995 | <5%                     |                10 |              0.06995 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7027 | >20%                    |                10 |              0.07027 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7054 | >20%                    |                 5 |              0.14108 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7156 | >20%                    |                 5 |              0.14312 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7363 | 10-15%                  |                10 |              0.07363 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7466 | >20%                    |                 5 |              0.14932 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7469 | >20%                    |                 5 |              0.14938 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7504 | >20%                    |                10 |              0.07504 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7636 | >20%                    |                10 |              0.07636 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.766  | >20%                    |                 5 |              0.1532  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7755 | 10-15%                  |                10 |              0.07755 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7894 | <5%                     |                 5 |              0.15788 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7913 | <5%                     |                10 |              0.07913 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8035 | >20%                    |                 5 |              0.1607  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8199 | >20%                    |                10 |              0.08199 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8235 | 5-10%                   |                10 |              0.08235 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8362 | >20%                    |                10 |              0.08362 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8365 | >20%                    |                 2 |              0.41825 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8392 | <5%                     |                10 |              0.08392 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.846  | <5%                     |                 5 |              0.1692  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8467 | >20%                    |                 5 |              0.16934 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8657 | >20%                    |                10 |              0.08657 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8824 | >20%                    |                 5 |              0.17648 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8837 | >20%                    |                10 |              0.08837 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8915 | <5%                     |                10 |              0.08915 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8951 | 5-10%                   |                10 |              0.08951 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9175 | >20%                    |                 2 |              0.45875 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9209 | >20%                    |                10 |              0.09209 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9292 | >20%                    |                10 |              0.09292 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9326 | >20%                    |                10 |              0.09326 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9385 | 10-15%                  |                 2 |              0.46925 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9493 | >20%                    |                10 |              0.09493 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9562 | >20%                    |                10 |              0.09562 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.9602 | >20%                    |                 5 |              0.19204 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9692 | >20%                    |                 2 |              0.4846  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9696 | 15-20%                  |                10 |              0.09696 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9759 | >20%                    |                 2 |              0.48795 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9826 | 5-10%                   |                 5 |              0.19652 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0146 | 5-10%                   |                10 |              0.10146 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0282 | >20%                    |                10 |              0.10282 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.057  |                         |                10 |              0.1057  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0617 | 15-20%                  |                10 |              0.10617 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0732 | >20%                    |                10 |              0.10732 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.159  | <5%                     |                10 |              0.1159  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.176  | 10-15%                  |                 5 |              0.2352  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2543 | >20%                    |                10 |              0.12543 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2736 | >20%                    |                 2 |              0.6368  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3037 | 10-15%                  |                10 |              0.13037 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.44   | >20%                    |                 2 |              0.72    |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4541 | 15-20%                  |                10 |              0.14541 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4768 | 10-15%                  |                 5 |              0.29536 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5117 | >20%                    |                 5 |              0.30234 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.5501 | <5%                     |                 5 |              0.31002 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5843 | >20%                    |                10 |              0.15843 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6643 | >20%                    |                 2 |              0.83215 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.665  | >20%                    |                10 |              0.1665  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3546 | 10-15%                  |                10 |              0.23546 |