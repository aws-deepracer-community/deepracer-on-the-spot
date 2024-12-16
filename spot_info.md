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

Data correct as of 2024-12-16 01:49:46.013243, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1895 | 15-20%                  |                 2 |              0.09475 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2038 | >20%                    |                 2 |              0.1019  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2142 | 15-20%                  |                 2 |              0.1071  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2192 | 15-20%                  |                 2 |              0.1096  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2331 | >20%                    |                 5 |              0.04662 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2342 | 15-20%                  |                 2 |              0.1171  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2366 | 5-10%                   |                 2 |              0.1183  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2367 | 5-10%                   |                 5 |              0.04734 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2446 | >20%                    |                 2 |              0.1223  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2489 | <5%                     |                 2 |              0.12445 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2512 | 15-20%                  |                10 |              0.02512 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2593 | <5%                     |                 2 |              0.12965 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2714 | 15-20%                  |                 5 |              0.05428 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2773 | <5%                     |                 2 |              0.13865 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2835 | 5-10%                   |                 2 |              0.14175 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2881 | 5-10%                   |                 2 |              0.14405 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3038 | >20%                    |                 2 |              0.1519  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3041 | <5%                     |                 2 |              0.15205 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.3102 | <5%                     |                 2 |              0.1551  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3107 | <5%                     |                 2 |              0.15535 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3148 | 10-15%                  |                 2 |              0.1574  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3198 | 5-10%                   |                 2 |              0.1599  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3342 | <5%                     |                 5 |              0.06684 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3393 | <5%                     |                 2 |              0.16965 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3409 | <5%                     |                 5 |              0.06818 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3426 | >20%                    |                 2 |              0.1713  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3505 | 10-15%                  |                10 |              0.03505 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3537 | 10-15%                  |                 2 |              0.17685 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3543 | 10-15%                  |                 2 |              0.17715 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3553 | >20%                    |                 2 |              0.17765 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3577 | <5%                     |                 5 |              0.07154 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3594 | >20%                    |                 5 |              0.07188 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3617 | >20%                    |                 5 |              0.07234 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3686 | >20%                    |                10 |              0.03686 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3686 | 5-10%                   |                 2 |              0.1843  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3739 | >20%                    |                 5 |              0.07478 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3753 | 10-15%                  |                 5 |              0.07506 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3755 | <5%                     |                 5 |              0.0751  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3804 | >20%                    |                 2 |              0.1902  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3819 | <5%                     |                 5 |              0.07638 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3864 | 15-20%                  |                 2 |              0.1932  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3908 | 5-10%                   |                10 |              0.03908 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3991 | 5-10%                   |                 2 |              0.19955 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4096 | >20%                    |                 2 |              0.2048  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4113 | 5-10%                   |                 2 |              0.20565 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4163 | 5-10%                   |                 5 |              0.08326 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4211 | 5-10%                   |                 2 |              0.21055 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4271 | 15-20%                  |                 2 |              0.21355 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4314 | 5-10%                   |                 5 |              0.08628 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4396 | 10-15%                  |                 5 |              0.08792 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4431 | 5-10%                   |                 2 |              0.22155 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4559 | >20%                    |                 5 |              0.09118 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4576 | <5%                     |                 5 |              0.09152 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4592 | <5%                     |                 2 |              0.2296  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4595 | >20%                    |                 5 |              0.0919  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4597 | 15-20%                  |                10 |              0.04597 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.4602 | 5-10%                   |                 2 |              0.2301  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4633 | 5-10%                   |                 2 |              0.23165 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4656 | 5-10%                   |                 5 |              0.09312 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.469  | >20%                    |                 2 |              0.2345  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4705 | 10-15%                  |                 2 |              0.23525 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4712 | 5-10%                   |                 5 |              0.09424 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4719 | <5%                     |                 2 |              0.23595 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4742 | <5%                     |                 5 |              0.09484 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4749 | 15-20%                  |                 2 |              0.23745 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4809 | 10-15%                  |                 2 |              0.24045 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4825 | 10-15%                  |                 5 |              0.0965  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4858 | <5%                     |                 5 |              0.09716 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4864 | 15-20%                  |                 5 |              0.09728 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4887 | >20%                    |                 5 |              0.09774 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.494  | >20%                    |                10 |              0.0494  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4949 | 10-15%                  |                 2 |              0.24745 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4979 | >20%                    |                 5 |              0.09958 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5005 | <5%                     |                 5 |              0.1001  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5052 | >20%                    |                10 |              0.05052 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5132 | >20%                    |                 5 |              0.10264 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5154 | <5%                     |                 5 |              0.10308 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5325 | >20%                    |                 5 |              0.1065  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5332 | 10-15%                  |                 5 |              0.10664 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5472 | 5-10%                   |                10 |              0.05472 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5484 | >20%                    |                 5 |              0.10968 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5517 | 10-15%                  |                 5 |              0.11034 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5541 | 15-20%                  |                 5 |              0.11082 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5631 | >20%                    |                 2 |              0.28155 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5777 | >20%                    |                10 |              0.05777 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.5825 | 5-10%                   |                 5 |              0.1165  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5834 | <5%                     |                 5 |              0.11668 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5994 | 10-15%                  |                10 |              0.05994 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.6047 | <5%                     |                10 |              0.06047 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6303 | >20%                    |                10 |              0.06303 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.6491 | 5-10%                   |                 2 |              0.32455 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6512 | 5-10%                   |                10 |              0.06512 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6551 | 5-10%                   |                10 |              0.06551 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6588 | <5%                     |                 5 |              0.13176 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6626 | 15-20%                  |                 5 |              0.13252 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.668  | 5-10%                   |                10 |              0.0668  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6727 | >20%                    |                 2 |              0.33635 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6765 | <5%                     |                 5 |              0.1353  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6843 | 15-20%                  |                 5 |              0.13686 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6905 | 10-15%                  |                10 |              0.06905 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6981 | >20%                    |                10 |              0.06981 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7151 | <5%                     |                10 |              0.07151 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7231 | <5%                     |                 2 |              0.36155 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7323 | >20%                    |                 5 |              0.14646 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7493 | >20%                    |                 5 |              0.14986 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7548 | >20%                    |                 5 |              0.15096 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7856 | >20%                    |                10 |              0.07856 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7907 | >20%                    |                10 |              0.07907 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8013 | <5%                     |                10 |              0.08013 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8047 | <5%                     |                 5 |              0.16094 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8127 | 15-20%                  |                10 |              0.08127 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.8133 | >20%                    |                10 |              0.08133 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8206 | 5-10%                   |                10 |              0.08206 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8212 | 5-10%                   |                10 |              0.08212 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8258 | 10-15%                  |                10 |              0.08258 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8298 | 5-10%                   |                10 |              0.08298 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.83   | 10-15%                  |                10 |              0.083   |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8406 | 10-15%                  |                10 |              0.08406 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8467 | 5-10%                   |                 2 |              0.42335 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.864  | <5%                     |                10 |              0.0864  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8702 | <5%                     |                10 |              0.08702 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.9081 | <5%                     |                10 |              0.09081 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9237 | 5-10%                   |                 5 |              0.18474 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9341 | >20%                    |                10 |              0.09341 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9356 | 5-10%                   |                10 |              0.09356 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9388 | 15-20%                  |                10 |              0.09388 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9447 | >20%                    |                10 |              0.09447 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9755 | <5%                     |                10 |              0.09755 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.98   | 5-10%                   |                10 |              0.098   |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0518 | 5-10%                   |                10 |              0.10518 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0809 | >20%                    |                10 |              0.10809 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1086 | <5%                     |                10 |              0.11086 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1634 | >20%                    |                10 |              0.11634 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2267 | >20%                    |                10 |              0.12267 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2516 | 5-10%                   |                 5 |              0.25032 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.395  | 5-10%                   |                10 |              0.1395  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8421 | 10-15%                  |                10 |              0.18421 |