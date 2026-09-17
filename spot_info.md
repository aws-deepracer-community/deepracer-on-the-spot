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

Data correct as of 2026-09-17 04:14:00.329708, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1192 | >20%                    |                 2 |              0.0596  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1698 | 15-20%                  |                 2 |              0.0849  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1984 | >20%                    |                 5 |              0.03968 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.225  | >20%                    |                 2 |              0.1125  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2329 | >20%                    |                 2 |              0.11645 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2436 | >20%                    |                 2 |              0.1218  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2543 | 15-20%                  |                 5 |              0.05086 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2549 | >20%                    |                 2 |              0.12745 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.257  | >20%                    |                 2 |              0.1285  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2845 | >20%                    |                 2 |              0.14225 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2864 | 15-20%                  |                 2 |              0.1432  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.2966 | >20%                    |                 2 |              0.1483  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3041 | >20%                    |                 2 |              0.15205 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.3097 |                         |                 5 |              0.06194 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3363 | 10-15%                  |                 2 |              0.16815 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3456 | >20%                    |                 2 |              0.1728  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3638 | >20%                    |                 5 |              0.07276 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3673 | >20%                    |                 5 |              0.07346 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3694 | 15-20%                  |                 2 |              0.1847  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3709 | >20%                    |                 2 |              0.18545 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3741 | 10-15%                  |                 2 |              0.18705 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3867 | <5%                     |                 2 |              0.19335 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3873 | >20%                    |                 5 |              0.07746 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3937 | >20%                    |                 5 |              0.07874 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3954 | >20%                    |                 2 |              0.1977  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3975 | >20%                    |                10 |              0.03975 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4109 | >20%                    |                 5 |              0.08218 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4119 | >20%                    |                 5 |              0.08238 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4186 | >20%                    |                 2 |              0.2093  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4238 | 15-20%                  |                 2 |              0.2119  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4306 | >20%                    |                 2 |              0.2153  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4321 | >20%                    |                 2 |              0.21605 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4383 | >20%                    |                 2 |              0.21915 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4717 | 5-10%                   |                10 |              0.04717 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4722 | 15-20%                  |                 2 |              0.2361  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4784 | >20%                    |                10 |              0.04784 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4808 | 10-15%                  |                 2 |              0.2404  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4811 | >20%                    |                 5 |              0.09622 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4812 | >20%                    |                 5 |              0.09624 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4839 |                         |                 2 |              0.24195 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4931 | >20%                    |                 5 |              0.09862 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4959 | 10-15%                  |                10 |              0.04959 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4959 | >20%                    |                 5 |              0.09918 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5008 | >20%                    |                 5 |              0.10016 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5052 | >20%                    |                 2 |              0.2526  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5082 | >20%                    |                 5 |              0.10164 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5133 | <5%                     |                 2 |              0.25665 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5142 | >20%                    |                 5 |              0.10284 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5187 | >20%                    |                10 |              0.05187 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5397 | >20%                    |                 5 |              0.10794 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5443 | >20%                    |                 2 |              0.27215 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5518 | >20%                    |                 5 |              0.11036 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5561 | >20%                    |                 5 |              0.11122 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5645 | >20%                    |                 2 |              0.28225 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5717 | >20%                    |                 5 |              0.11434 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5785 | >20%                    |                 2 |              0.28925 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5869 | 5-10%                   |                10 |              0.05869 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5932 | 10-15%                  |                 5 |              0.11864 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6163 | >20%                    |                 5 |              0.12326 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6177 | <5%                     |                10 |              0.06177 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6212 | 15-20%                  |                10 |              0.06212 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6218 | >20%                    |                 5 |              0.12436 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6223 | >20%                    |                10 |              0.06223 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6308 | 5-10%                   |                 5 |              0.12616 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6374 | 10-15%                  |                 2 |              0.3187  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6588 | 15-20%                  |                10 |              0.06588 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6617 | >20%                    |                 5 |              0.13234 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.664  | >20%                    |                10 |              0.0664  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6642 | >20%                    |                 5 |              0.13284 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.6643 | >20%                    |                 2 |              0.33215 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6668 | >20%                    |                 2 |              0.3334  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6773 | <5%                     |                 2 |              0.33865 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6817 | >20%                    |                10 |              0.06817 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6847 | 5-10%                   |                 2 |              0.34235 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7013 | >20%                    |                 5 |              0.14026 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7136 | >20%                    |                 2 |              0.3568  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7173 | >20%                    |                 5 |              0.14346 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7328 | >20%                    |                10 |              0.07328 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7329 | 15-20%                  |                 5 |              0.14658 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7419 | >20%                    |                 5 |              0.14838 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7422 | >20%                    |                10 |              0.07422 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7529 | >20%                    |                 5 |              0.15058 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7553 | >20%                    |                 2 |              0.37765 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.762  | >20%                    |                 5 |              0.1524  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7951 | 15-20%                  |                 2 |              0.39755 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7983 | >20%                    |                10 |              0.07983 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8375 | 15-20%                  |                10 |              0.08375 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.842  | 10-15%                  |                 2 |              0.421   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8453 | >20%                    |                 5 |              0.16906 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8469 | >20%                    |                 2 |              0.42345 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8485 | >20%                    |                10 |              0.08485 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8505 | 15-20%                  |                 5 |              0.1701  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8685 | >20%                    |                10 |              0.08685 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8866 | 5-10%                   |                10 |              0.08866 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9048 | <5%                     |                 5 |              0.18096 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9072 | >20%                    |                 2 |              0.4536  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9074 | >20%                    |                 5 |              0.18148 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9118 | 10-15%                  |                 2 |              0.4559  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9454 |                         |                 2 |              0.4727  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.9611 | >20%                    |                 2 |              0.48055 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.962  | >20%                    |                10 |              0.0962  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9804 | 15-20%                  |                10 |              0.09804 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9852 | >20%                    |                10 |              0.09852 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9868 | >20%                    |                10 |              0.09868 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.0029 | >20%                    |                 5 |              0.20058 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0096 | >20%                    |                 5 |              0.20192 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0207 | 15-20%                  |                10 |              0.10207 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0245 | >20%                    |                 5 |              0.2049  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0293 | >20%                    |                10 |              0.10293 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0437 | >20%                    |                 5 |              0.20874 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0601 | >20%                    |                10 |              0.10601 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.0704 |                         |                10 |              0.10704 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1001 | >20%                    |                 5 |              0.22002 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1083 | >20%                    |                10 |              0.11083 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1112 | >20%                    |                 5 |              0.22224 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1159 | 5-10%                   |                10 |              0.11159 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1172 | >20%                    |                10 |              0.11172 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1192 | >20%                    |                10 |              0.11192 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1201 | >20%                    |                10 |              0.11201 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1223 | >20%                    |                10 |              0.11223 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1634 | 5-10%                   |                 2 |              0.5817  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1831 |                         |                 2 |              0.59155 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1962 |                         |                 5 |              0.23924 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2112 | >20%                    |                10 |              0.12112 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2137 | >20%                    |                10 |              0.12137 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2319 | >20%                    |                10 |              0.12319 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2465 | 10-15%                  |                 2 |              0.62325 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2494 |                         |                 5 |              0.24988 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2586 | 15-20%                  |                10 |              0.12586 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3293 | >20%                    |                10 |              0.13293 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3378 | >20%                    |                10 |              0.13378 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3591 | >20%                    |                 2 |              0.67955 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3673 | >20%                    |                 5 |              0.27346 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3732 | 10-15%                  |                10 |              0.13732 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3762 | >20%                    |                10 |              0.13762 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3947 | 15-20%                  |                10 |              0.13947 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.4004 | >20%                    |                 5 |              0.28008 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.5068 | 5-10%                   |                 2 |              0.7534  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5373 | >20%                    |                 2 |              0.76865 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5471 | 5-10%                   |                 5 |              0.30942 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6479 | >20%                    |                10 |              0.16479 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.786  | >20%                    |                 5 |              0.3572  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.8635 | 15-20%                  |                10 |              0.18635 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8764 |                         |                10 |              0.18764 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.962  |                         |                10 |              0.1962  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0584 | 5-10%                   |                 2 |              1.0292  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.1153 | 15-20%                  |                 5 |              0.42306 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2285 | 5-10%                   |                10 |              0.22285 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.6226 | >20%                    |                10 |              0.26226 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6284 | >20%                    |                10 |              0.26284 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0077 | >20%                    |                10 |              0.30077 |