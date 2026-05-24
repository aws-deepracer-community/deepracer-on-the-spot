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

Data correct as of 2026-05-24 04:02:09.947327, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1433 | >20%                    |                 2 |              0.07165 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1448 | 15-20%                  |                 2 |              0.0724  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1592 | >20%                    |                 2 |              0.0796  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1811 | >20%                    |                 2 |              0.09055 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1959 | 15-20%                  |                 5 |              0.03918 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2156 | 15-20%                  |                 2 |              0.1078  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2158 | 15-20%                  |                 5 |              0.04316 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2249 | >20%                    |                 2 |              0.11245 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2412 | >20%                    |                 2 |              0.1206  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2524 | >20%                    |                 2 |              0.1262  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2604 | >20%                    |                 2 |              0.1302  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.261  | >20%                    |                 2 |              0.1305  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2696 | >20%                    |                 5 |              0.05392 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2712 | 5-10%                   |                10 |              0.02712 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2863 | 15-20%                  |                 5 |              0.05726 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2902 | >20%                    |                 5 |              0.05804 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2903 | >20%                    |                 2 |              0.14515 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2932 | >20%                    |                 2 |              0.1466  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2954 | >20%                    |                 2 |              0.1477  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2954 | >20%                    |                 5 |              0.05908 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3012 | >20%                    |                 2 |              0.1506  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3035 | 10-15%                  |                 2 |              0.15175 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3047 | 5-10%                   |                10 |              0.03047 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3103 | 15-20%                  |                 2 |              0.15515 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3149 | >20%                    |                 5 |              0.06298 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3192 | >20%                    |                 5 |              0.06384 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.321  | >20%                    |                 2 |              0.1605  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3243 | 10-15%                  |                 2 |              0.16215 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3244 | >20%                    |                10 |              0.03244 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3314 | >20%                    |                 5 |              0.06628 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3334 | <5%                     |                 2 |              0.1667  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3343 | >20%                    |                 5 |              0.06686 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.336  | 10-15%                  |                 2 |              0.168   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3683 | >20%                    |                 5 |              0.07366 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.374  | >20%                    |                 5 |              0.0748  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3786 | >20%                    |                 2 |              0.1893  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3852 | >20%                    |                 5 |              0.07704 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3888 | >20%                    |                 5 |              0.07776 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3965 | 10-15%                  |                 2 |              0.19825 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.406  | >20%                    |                10 |              0.0406  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4107 | <5%                     |                 2 |              0.20535 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4124 | >20%                    |                10 |              0.04124 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4162 | >20%                    |                 2 |              0.2081  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4163 | >20%                    |                 5 |              0.08326 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4212 | >20%                    |                 5 |              0.08424 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4226 | 5-10%                   |                 2 |              0.2113  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.424  | >20%                    |                 5 |              0.0848  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4287 | <5%                     |                 5 |              0.08574 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4329 | >20%                    |                 2 |              0.21645 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4376 | >20%                    |                 2 |              0.2188  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4395 | >20%                    |                10 |              0.04395 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.444  | >20%                    |                 5 |              0.0888  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4493 | >20%                    |                 2 |              0.22465 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4611 | <5%                     |                 2 |              0.23055 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4615 | >20%                    |                 5 |              0.0923  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4647 | >20%                    |                 2 |              0.23235 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4772 | 15-20%                  |                 2 |              0.2386  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4798 | >20%                    |                 5 |              0.09596 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4813 | >20%                    |                 2 |              0.24065 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4867 | 15-20%                  |                 2 |              0.24335 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4935 | >20%                    |                 5 |              0.0987  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4948 | >20%                    |                 5 |              0.09896 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5005 | >20%                    |                 5 |              0.1001  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.505  | 5-10%                   |                 5 |              0.101   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.523  | >20%                    |                 5 |              0.1046  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5263 | >20%                    |                 5 |              0.10526 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5302 | 10-15%                  |                 2 |              0.2651  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5352 | 15-20%                  |                 2 |              0.2676  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5509 | 10-15%                  |                 5 |              0.11018 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5526 | >20%                    |                10 |              0.05526 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5552 | 15-20%                  |                 5 |              0.11104 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5595 | >20%                    |                 2 |              0.27975 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5602 | 5-10%                   |                10 |              0.05602 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5605 | >20%                    |                 2 |              0.28025 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5646 | >20%                    |                 5 |              0.11292 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5706 | >20%                    |                 2 |              0.2853  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.571  | >20%                    |                10 |              0.0571  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.581  | >20%                    |                 5 |              0.1162  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5889 | >20%                    |                 5 |              0.11778 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6001 | >20%                    |                10 |              0.06001 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6052 | >20%                    |                10 |              0.06052 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6143 | >20%                    |                 2 |              0.30715 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6195 |                         |                 2 |              0.30975 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6589 | >20%                    |                 2 |              0.32945 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6593 | 5-10%                   |                10 |              0.06593 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6606 | >20%                    |                10 |              0.06606 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6654 | >20%                    |                 2 |              0.3327  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6701 | 15-20%                  |                10 |              0.06701 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.673  | >20%                    |                 5 |              0.1346  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6741 | 15-20%                  |                10 |              0.06741 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.7028 | >20%                    |                10 |              0.07028 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7046 | >20%                    |                 5 |              0.14092 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7067 |                         |                 5 |              0.14134 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7126 | >20%                    |                 5 |              0.14252 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7164 | 5-10%                   |                 2 |              0.3582  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7166 | >20%                    |                10 |              0.07166 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7331 | >20%                    |                 5 |              0.14662 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7341 | >20%                    |                 2 |              0.36705 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7378 | >20%                    |                 2 |              0.3689  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7421 | >20%                    |                 5 |              0.14842 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.751  | >20%                    |                10 |              0.0751  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7632 | 15-20%                  |                10 |              0.07632 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7633 | >20%                    |                 5 |              0.15266 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7638 | >20%                    |                 5 |              0.15276 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7679 | 10-15%                  |                 2 |              0.38395 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7739 | >20%                    |                 5 |              0.15478 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7877 | >20%                    |                 5 |              0.15754 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8014 | >20%                    |                10 |              0.08014 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8158 | >20%                    |                10 |              0.08158 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8355 | >20%                    |                10 |              0.08355 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8609 |                         |                 2 |              0.43045 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.861  | 10-15%                  |                10 |              0.0861  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8633 | >20%                    |                 5 |              0.17266 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8655 | >20%                    |                10 |              0.08655 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8685 | >20%                    |                10 |              0.08685 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.89   | 15-20%                  |                10 |              0.089   |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8921 | 15-20%                  |                10 |              0.08921 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9076 | >20%                    |                10 |              0.09076 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      0.9282 |                         |                 5 |              0.18564 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9305 | >20%                    |                10 |              0.09305 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9373 | >20%                    |                 5 |              0.18746 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9414 | >20%                    |                10 |              0.09414 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9695 | >20%                    |                10 |              0.09695 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9757 | >20%                    |                 5 |              0.19514 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9772 | >20%                    |                 2 |              0.4886  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9852 | >20%                    |                 5 |              0.19704 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9923 | >20%                    |                 5 |              0.19846 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0152 | >20%                    |                10 |              0.10152 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0179 | 5-10%                   |                 5 |              0.20358 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.019  | >20%                    |                10 |              0.1019  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.0377 |                         |                10 |              0.10377 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0441 | >20%                    |                10 |              0.10441 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0528 | >20%                    |                10 |              0.10528 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0658 | >20%                    |                10 |              0.10658 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0683 | >20%                    |                10 |              0.10683 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0691 |                         |                10 |              0.10691 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0971 | >20%                    |                10 |              0.10971 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1039 | 5-10%                   |                 2 |              0.55195 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1218 | 5-10%                   |                 2 |              0.5609  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1219 | >20%                    |                10 |              0.11219 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.162  | 15-20%                  |                10 |              0.1162  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2113 | 5-10%                   |                10 |              0.12113 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2773 | 15-20%                  |                 5 |              0.25546 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2837 | 10-15%                  |                10 |              0.12837 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3119 | >20%                    |                 5 |              0.26238 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3523 | >20%                    |                10 |              0.13523 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.373  | 15-20%                  |                10 |              0.1373  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4075 | >20%                    |                10 |              0.14075 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4393 | >20%                    |                 5 |              0.28786 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5735 | 10-15%                  |                 2 |              0.78675 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6889 | 15-20%                  |                10 |              0.16889 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9627 | >20%                    |                10 |              0.19627 |