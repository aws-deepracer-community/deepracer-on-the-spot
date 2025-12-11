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

Data correct as of 2025-12-11 02:00:05.647831, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1212 | >20%                    |                 2 |              0.0606  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1466 | >20%                    |                 2 |              0.0733  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1634 | <5%                     |                 2 |              0.0817  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1718 | 15-20%                  |                 2 |              0.0859  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1834 | >20%                    |                 2 |              0.0917  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 5-10%                   |                 5 |              0.03708 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1917 | >20%                    |                 2 |              0.09585 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2069 | >20%                    |                 2 |              0.10345 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2308 | >20%                    |                 5 |              0.04616 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2314 | >20%                    |                 5 |              0.04628 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2387 | >20%                    |                 2 |              0.11935 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2455 | >20%                    |                 2 |              0.12275 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2495 | >20%                    |                 2 |              0.12475 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2506 | 10-15%                  |                 2 |              0.1253  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2578 | 10-15%                  |                 5 |              0.05156 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2592 | <5%                     |                 5 |              0.05184 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | >20%                    |                10 |              0.02669 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2815 | >20%                    |                 2 |              0.14075 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2826 | 5-10%                   |                 2 |              0.1413  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2826 | >20%                    |                 2 |              0.1413  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.283  | 15-20%                  |                 2 |              0.1415  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2906 | >20%                    |                 5 |              0.05812 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2955 | 10-15%                  |                 2 |              0.14775 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2967 | >20%                    |                 2 |              0.14835 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.304  | 10-15%                  |                 2 |              0.152   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3053 | >20%                    |                 5 |              0.06106 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3148 | >20%                    |                 2 |              0.1574  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.318  | >20%                    |                 2 |              0.159   |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3243 | 10-15%                  |                10 |              0.03243 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3456 | >20%                    |                 2 |              0.1728  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3476 | 5-10%                   |                10 |              0.03476 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3547 | 15-20%                  |                 2 |              0.17735 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.356  | >20%                    |                10 |              0.0356  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3569 | 5-10%                   |                 2 |              0.17845 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3607 | >20%                    |                 2 |              0.18035 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3614 | >20%                    |                 2 |              0.1807  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3721 | >20%                    |                 5 |              0.07442 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3764 | >20%                    |                 2 |              0.1882  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3821 | >20%                    |                10 |              0.03821 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3835 | >20%                    |                 5 |              0.0767  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3846 | <5%                     |                10 |              0.03846 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.385  | >20%                    |                 5 |              0.077   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.388  | >20%                    |                 2 |              0.194   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3913 | <5%                     |                 5 |              0.07826 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3922 | 15-20%                  |                 5 |              0.07844 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3985 | >20%                    |                 5 |              0.0797  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3993 | >20%                    |                 2 |              0.19965 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4013 | >20%                    |                10 |              0.04013 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4026 | 15-20%                  |                10 |              0.04026 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4038 | >20%                    |                 5 |              0.08076 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4082 | 10-15%                  |                 2 |              0.2041  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4094 | <5%                     |                 2 |              0.2047  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4138 | <5%                     |                 2 |              0.2069  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4156 | >20%                    |                 2 |              0.2078  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4167 | >20%                    |                 5 |              0.08334 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4179 | 15-20%                  |                 5 |              0.08358 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4221 | >20%                    |                 2 |              0.21105 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4268 | >20%                    |                 2 |              0.2134  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4272 | >20%                    |                10 |              0.04272 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4283 | <5%                     |                 2 |              0.21415 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4287 | 10-15%                  |                 2 |              0.21435 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4299 | >20%                    |                 5 |              0.08598 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4306 | >20%                    |                 5 |              0.08612 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4375 | >20%                    |                10 |              0.04375 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4383 | <5%                     |                10 |              0.04383 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4406 | >20%                    |                 5 |              0.08812 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4443 | 15-20%                  |                 2 |              0.22215 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4452 | 15-20%                  |                 5 |              0.08904 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4565 | 10-15%                  |                10 |              0.04565 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4587 | 15-20%                  |                 5 |              0.09174 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4622 | >20%                    |                 5 |              0.09244 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4628 | >20%                    |                 2 |              0.2314  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4676 | >20%                    |                 2 |              0.2338  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4784 | 15-20%                  |                 5 |              0.09568 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4839 | >20%                    |                 2 |              0.24195 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4853 | 15-20%                  |                 2 |              0.24265 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4939 | >20%                    |                 5 |              0.09878 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4949 | >20%                    |                 2 |              0.24745 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4952 | >20%                    |                 2 |              0.2476  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4971 | 5-10%                   |                 5 |              0.09942 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5004 | >20%                    |                 5 |              0.10008 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5152 | >20%                    |                 5 |              0.10304 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5163 | <5%                     |                10 |              0.05163 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5188 | >20%                    |                 5 |              0.10376 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5225 | 15-20%                  |                 2 |              0.26125 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5345 | >20%                    |                 5 |              0.1069  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5377 | >20%                    |                 2 |              0.26885 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5391 | >20%                    |                 5 |              0.10782 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5436 | 10-15%                  |                 5 |              0.10872 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5468 | 15-20%                  |                 5 |              0.10936 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5553 | >20%                    |                 2 |              0.27765 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5655 | >20%                    |                 5 |              0.1131  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5663 | 10-15%                  |                 5 |              0.11326 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5692 | >20%                    |                 5 |              0.11384 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5698 | >20%                    |                 2 |              0.2849  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5711 | <5%                     |                 5 |              0.11422 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5753 | <5%                     |                 5 |              0.11506 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5829 | >20%                    |                 5 |              0.11658 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5843 | >20%                    |                 5 |              0.11686 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.585  | >20%                    |                10 |              0.0585  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5852 | >20%                    |                10 |              0.05852 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5921 | 5-10%                   |                 5 |              0.11842 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5951 | >20%                    |                 5 |              0.11902 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5988 | <5%                     |                 5 |              0.11976 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6066 | 5-10%                   |                 5 |              0.12132 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6281 | >20%                    |                 2 |              0.31405 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6295 | 10-15%                  |                 5 |              0.1259  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6299 | >20%                    |                 2 |              0.31495 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6344 | >20%                    |                 2 |              0.3172  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6474 | 15-20%                  |                 5 |              0.12948 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6523 | 15-20%                  |                10 |              0.06523 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6596 | >20%                    |                 2 |              0.3298  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6629 | >20%                    |                 2 |              0.33145 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6713 | 5-10%                   |                 5 |              0.13426 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6724 | >20%                    |                10 |              0.06724 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6804 | >20%                    |                 2 |              0.3402  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6906 | 5-10%                   |                10 |              0.06906 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6906 | >20%                    |                10 |              0.06906 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6935 | >20%                    |                 5 |              0.1387  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6938 | >20%                    |                10 |              0.06938 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7225 | >20%                    |                10 |              0.07225 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7227 | 10-15%                  |                10 |              0.07227 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7338 | >20%                    |                10 |              0.07338 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.735  | >20%                    |                10 |              0.0735  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7354 | >20%                    |                 5 |              0.14708 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.7366 | >20%                    |                 5 |              0.14732 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7387 | >20%                    |                10 |              0.07387 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7407 | >20%                    |                 5 |              0.14814 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7484 | >20%                    |                 5 |              0.14968 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7539 | >20%                    |                10 |              0.07539 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7601 | >20%                    |                10 |              0.07601 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7608 | >20%                    |                10 |              0.07608 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7642 | 10-15%                  |                10 |              0.07642 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7705 | >20%                    |                 2 |              0.38525 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7732 | 15-20%                  |                10 |              0.07732 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.7775 | >20%                    |                10 |              0.07775 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7862 | >20%                    |                10 |              0.07862 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7879 | 15-20%                  |                10 |              0.07879 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7885 | >20%                    |                10 |              0.07885 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8075 | >20%                    |                 5 |              0.1615  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8172 | >20%                    |                 2 |              0.4086  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8214 | >20%                    |                 5 |              0.16428 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8227 | <5%                     |                10 |              0.08227 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8252 | 10-15%                  |                10 |              0.08252 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8288 | >20%                    |                 5 |              0.16576 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8336 | >20%                    |                 2 |              0.4168  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8648 | >20%                    |                10 |              0.08648 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8718 | >20%                    |                 5 |              0.17436 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8783 | 10-15%                  |                 5 |              0.17566 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8869 | >20%                    |                10 |              0.08869 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8928 | 10-15%                  |                10 |              0.08928 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9012 | >20%                    |                10 |              0.09012 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9041 | 10-15%                  |                10 |              0.09041 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9169 | >20%                    |                10 |              0.09169 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9186 | >20%                    |                10 |              0.09186 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9313 | >20%                    |                 5 |              0.18626 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9315 | 5-10%                   |                10 |              0.09315 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9424 | >20%                    |                 5 |              0.18848 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9655 | >20%                    |                10 |              0.09655 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.9722 | 15-20%                  |                 2 |              0.4861  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9801 | >20%                    |                 2 |              0.49005 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0045 | >20%                    |                10 |              0.10045 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.009  | >20%                    |                 2 |              0.5045  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0217 | 15-20%                  |                10 |              0.10217 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0428 | 10-15%                  |                10 |              0.10428 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0595 | 10-15%                  |                10 |              0.10595 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      1.0777 | >20%                    |                 2 |              0.53885 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1563 | 5-10%                   |                 5 |              0.23126 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1862 | >20%                    |                10 |              0.11862 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2186 | >20%                    |                10 |              0.12186 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2678 | >20%                    |                 5 |              0.25356 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.2702 | 5-10%                   |                10 |              0.12702 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3464 | 15-20%                  |                10 |              0.13464 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4452 | >20%                    |                 2 |              0.7226  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4755 | >20%                    |                10 |              0.14755 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4762 | >20%                    |                 5 |              0.29524 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4894 | >20%                    |                 2 |              0.7447  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5206 | >20%                    |                10 |              0.15206 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5543 | 15-20%                  |                10 |              0.15543 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6045 | 10-15%                  |                 5 |              0.3209  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0666 | 10-15%                  |                10 |              0.20666 |