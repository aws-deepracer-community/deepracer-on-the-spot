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

Data correct as of 2025-11-02 01:56:31.155273, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1385 | >20%                    |                 2 |              0.06925 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1834 | >20%                    |                 2 |              0.0917  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1967 | 10-15%                  |                 5 |              0.03934 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2254 | >20%                    |                 2 |              0.1127  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2359 | >20%                    |                 5 |              0.04718 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2385 | >20%                    |                 5 |              0.0477  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2434 | 10-15%                  |                 2 |              0.1217  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2565 | >20%                    |                 2 |              0.12825 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2585 | >20%                    |                 2 |              0.12925 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2614 | 10-15%                  |                 2 |              0.1307  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2635 | >20%                    |                 2 |              0.13175 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2676 | 5-10%                   |                 2 |              0.1338  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2702 | 10-15%                  |                 2 |              0.1351  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2705 | >20%                    |                 2 |              0.13525 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2773 | 5-10%                   |                 2 |              0.13865 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2905 | >20%                    |                 2 |              0.14525 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2969 | >20%                    |                 2 |              0.14845 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3048 | 15-20%                  |                 2 |              0.1524  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3077 | >20%                    |                 2 |              0.15385 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3093 | >20%                    |                 2 |              0.15465 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.311  | 15-20%                  |                 2 |              0.1555  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3221 | >20%                    |                 2 |              0.16105 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3393 | >20%                    |                 2 |              0.16965 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3478 | >20%                    |                 2 |              0.1739  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3551 | >20%                    |                 5 |              0.07102 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3693 | >20%                    |                 2 |              0.18465 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3737 | <5%                     |                10 |              0.03737 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3751 | >20%                    |                 5 |              0.07502 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3788 | 15-20%                  |                 2 |              0.1894  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3941 | >20%                    |                10 |              0.03941 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3942 | 10-15%                  |                 2 |              0.1971  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3949 | >20%                    |                 2 |              0.19745 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3964 | >20%                    |                 2 |              0.1982  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3966 | >20%                    |                 5 |              0.07932 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3996 | >20%                    |                 2 |              0.1998  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4105 | >20%                    |                 2 |              0.20525 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4141 | >20%                    |                 2 |              0.20705 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4193 | 5-10%                   |                 5 |              0.08386 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4202 | >20%                    |                 2 |              0.2101  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4237 | 5-10%                   |                 2 |              0.21185 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4241 | 15-20%                  |                 2 |              0.21205 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4263 | >20%                    |                 5 |              0.08526 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4356 | 5-10%                   |                 2 |              0.2178  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4367 | >20%                    |                 2 |              0.21835 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4378 | >20%                    |                 2 |              0.2189  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4384 | <5%                     |                 2 |              0.2192  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4427 | >20%                    |                 5 |              0.08854 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4452 | >20%                    |                 5 |              0.08904 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4459 | >20%                    |                 2 |              0.22295 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4522 | >20%                    |                 2 |              0.2261  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4538 | >20%                    |                 5 |              0.09076 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4557 | >20%                    |                 5 |              0.09114 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4561 | >20%                    |                 5 |              0.09122 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4611 | >20%                    |                 2 |              0.23055 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4645 | 15-20%                  |                 5 |              0.0929  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4661 | >20%                    |                10 |              0.04661 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4672 | >20%                    |                 5 |              0.09344 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.471  | >20%                    |                 5 |              0.0942  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4733 | >20%                    |                 5 |              0.09466 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4747 | 10-15%                  |                 2 |              0.23735 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4764 | >20%                    |                 5 |              0.09528 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4781 | 10-15%                  |                 2 |              0.23905 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.481  | >20%                    |                 5 |              0.0962  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4811 | >20%                    |                 2 |              0.24055 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4842 | 5-10%                   |                 2 |              0.2421  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4875 | >20%                    |                 2 |              0.24375 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4927 | >20%                    |                 5 |              0.09854 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5003 | 15-20%                  |                10 |              0.05003 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5051 | >20%                    |                10 |              0.05051 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5084 | >20%                    |                 2 |              0.2542  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5141 | >20%                    |                 2 |              0.25705 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.519  | 15-20%                  |                 5 |              0.1038  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5229 | >20%                    |                 5 |              0.10458 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5356 | >20%                    |                 5 |              0.10712 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5465 | >20%                    |                 5 |              0.1093  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5568 | >20%                    |                 2 |              0.2784  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5579 | >20%                    |                 5 |              0.11158 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5593 | >20%                    |                 5 |              0.11186 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5758 | 15-20%                  |                 2 |              0.2879  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5788 | 5-10%                   |                10 |              0.05788 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.581  | >20%                    |                 5 |              0.1162  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5843 | >20%                    |                 5 |              0.11686 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6086 | >20%                    |                 5 |              0.12172 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6195 | 10-15%                  |                 5 |              0.1239  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6242 | >20%                    |                 5 |              0.12484 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.625  | >20%                    |                 5 |              0.125   |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6254 | >20%                    |                 5 |              0.12508 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6261 | >20%                    |                 2 |              0.31305 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.628  | >20%                    |                 5 |              0.1256  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6297 | 15-20%                  |                 2 |              0.31485 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6348 | 10-15%                  |                 5 |              0.12696 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6432 | 15-20%                  |                 5 |              0.12864 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6566 | >20%                    |                 5 |              0.13132 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6598 | >20%                    |                10 |              0.06598 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6678 | >20%                    |                 5 |              0.13356 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6695 | 15-20%                  |                10 |              0.06695 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.673  | 10-15%                  |                 5 |              0.1346  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6751 | 10-15%                  |                 2 |              0.33755 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6782 | >20%                    |                 2 |              0.3391  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6811 | >20%                    |                 5 |              0.13622 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6857 | 15-20%                  |                10 |              0.06857 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6872 | >20%                    |                 5 |              0.13744 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6916 | >20%                    |                 5 |              0.13832 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6955 | >20%                    |                 5 |              0.1391  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7014 | >20%                    |                10 |              0.07014 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7136 | >20%                    |                10 |              0.07136 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.7149 | >20%                    |                 5 |              0.14298 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7308 | 15-20%                  |                10 |              0.07308 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.734  | >20%                    |                10 |              0.0734  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7362 | >20%                    |                10 |              0.07362 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7363 | 15-20%                  |                 5 |              0.14726 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7419 | >20%                    |                10 |              0.07419 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7451 | >20%                    |                 2 |              0.37255 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7469 | >20%                    |                 5 |              0.14938 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7469 | >20%                    |                10 |              0.07469 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7473 | 15-20%                  |                10 |              0.07473 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7547 | <5%                     |                10 |              0.07547 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7764 | 10-15%                  |                 5 |              0.15528 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7771 | 15-20%                  |                10 |              0.07771 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.7784 | >20%                    |                10 |              0.07784 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7823 | >20%                    |                10 |              0.07823 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7881 | 10-15%                  |                 2 |              0.39405 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.791  | >20%                    |                10 |              0.0791  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7945 | >20%                    |                 5 |              0.1589  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8017 | <5%                     |                10 |              0.08017 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8077 | 15-20%                  |                 5 |              0.16154 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8224 | 15-20%                  |                10 |              0.08224 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8348 | >20%                    |                 5 |              0.16696 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8384 | >20%                    |                 5 |              0.16768 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8403 | <5%                     |                10 |              0.08403 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8435 | >20%                    |                 5 |              0.1687  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.844  | 15-20%                  |                10 |              0.0844  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8443 | >20%                    |                10 |              0.08443 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8468 | 15-20%                  |                10 |              0.08468 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8597 | 10-15%                  |                10 |              0.08597 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.86   | >20%                    |                 5 |              0.172   |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8837 | >20%                    |                10 |              0.08837 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8875 | >20%                    |                10 |              0.08875 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8994 | 10-15%                  |                10 |              0.08994 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9126 | >20%                    |                 2 |              0.4563  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9145 | 15-20%                  |                10 |              0.09145 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9183 | 10-15%                  |                10 |              0.09183 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9224 | 5-10%                   |                10 |              0.09224 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9552 | >20%                    |                10 |              0.09552 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9587 | >20%                    |                 2 |              0.47935 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9663 | 10-15%                  |                 2 |              0.48315 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9678 | >20%                    |                10 |              0.09678 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      1.0175 | 5-10%                   |                10 |              0.10175 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0299 | >20%                    |                10 |              0.10299 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0328 | >20%                    |                 5 |              0.20656 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0437 | 5-10%                   |                10 |              0.10437 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0509 | >20%                    |                 2 |              0.52545 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.0595 | >20%                    |                10 |              0.10595 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0612 | <5%                     |                10 |              0.10612 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0765 | 5-10%                   |                10 |              0.10765 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0768 | >20%                    |                10 |              0.10768 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0949 | >20%                    |                10 |              0.10949 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1017 | 15-20%                  |                10 |              0.11017 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1134 | 15-20%                  |                10 |              0.11134 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1397 | >20%                    |                 5 |              0.22794 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1461 | 10-15%                  |                10 |              0.11461 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1505 | >20%                    |                 5 |              0.2301  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1892 | >20%                    |                 5 |              0.23784 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2696 | 10-15%                  |                 5 |              0.25392 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2789 | >20%                    |                10 |              0.12789 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2825 | 10-15%                  |                10 |              0.12825 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4062 | >20%                    |                10 |              0.14062 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.506  | 5-10%                   |                 2 |              0.753   |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.552  | >20%                    |                10 |              0.1552  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5862 | >20%                    |                10 |              0.15862 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5928 | >20%                    |                10 |              0.15928 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6192 | 10-15%                  |                 5 |              0.32384 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6979 | >20%                    |                10 |              0.16979 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8533 | 10-15%                  |                10 |              0.18533 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4312 | 15-20%                  |                10 |              0.24312 |