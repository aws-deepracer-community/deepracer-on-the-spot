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

Data correct as of 2026-09-21 04:10:39.056967, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0987 | >20%                    |                 2 |              0.04935 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1331 | 15-20%                  |                 2 |              0.06655 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1594 | >20%                    |                 5 |              0.03188 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2073 | 15-20%                  |                 5 |              0.04146 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.2342 |                         |                 5 |              0.04684 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.2401 | >20%                    |                 2 |              0.12005 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2415 | >20%                    |                 2 |              0.12075 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2492 | >20%                    |                 2 |              0.1246  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2509 | >20%                    |                 2 |              0.12545 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2525 | >20%                    |                 2 |              0.12625 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2583 | >20%                    |                 2 |              0.12915 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2864 | >20%                    |                 2 |              0.1432  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2902 | 15-20%                  |                 2 |              0.1451  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3109 | 10-15%                  |                 2 |              0.15545 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3138 | >20%                    |                 2 |              0.1569  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3331 | >20%                    |                 2 |              0.16655 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3447 | >20%                    |                 2 |              0.17235 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3498 | >20%                    |                 5 |              0.06996 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3585 | >20%                    |                 5 |              0.0717  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3616 | >20%                    |                 5 |              0.07232 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3703 | 15-20%                  |                 2 |              0.18515 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3877 | 10-15%                  |                 2 |              0.19385 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3888 | <5%                     |                 2 |              0.1944  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3891 | >20%                    |                 5 |              0.07782 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3955 | >20%                    |                 2 |              0.19775 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4104 | >20%                    |                10 |              0.04104 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4125 | >20%                    |                 2 |              0.20625 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4158 | >20%                    |                 5 |              0.08316 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4266 | >20%                    |                10 |              0.04266 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4266 | 15-20%                  |                 2 |              0.2133  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4323 | >20%                    |                 2 |              0.21615 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.436  | >20%                    |                 5 |              0.0872  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4436 | >20%                    |                 2 |              0.2218  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4444 | 5-10%                   |                10 |              0.04444 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.45   | >20%                    |                 2 |              0.225   |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4634 | >20%                    |                 5 |              0.09268 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4705 | >20%                    |                 5 |              0.0941  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4727 | 15-20%                  |                 2 |              0.23635 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4838 | 10-15%                  |                 2 |              0.2419  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4885 | >20%                    |                 5 |              0.0977  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4891 | >20%                    |                 5 |              0.09782 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4929 |                         |                 2 |              0.24645 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5    | <5%                     |                 2 |              0.25    |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5018 | >20%                    |                 5 |              0.10036 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5054 | <5%                     |                10 |              0.05054 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5055 | >20%                    |                 2 |              0.25275 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5074 | >20%                    |                 5 |              0.10148 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5171 | >20%                    |                 5 |              0.10342 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5366 | >20%                    |                 2 |              0.2683  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5447 | >20%                    |                 2 |              0.27235 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5575 | >20%                    |                 5 |              0.1115  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5586 | >20%                    |                 5 |              0.11172 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5639 | >20%                    |                 5 |              0.11278 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5665 | 15-20%                  |                10 |              0.05665 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5692 | >20%                    |                 5 |              0.11384 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5753 | 5-10%                   |                10 |              0.05753 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.58   | >20%                    |                 2 |              0.29    |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5969 | >20%                    |                10 |              0.05969 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6031 | 10-15%                  |                 5 |              0.12062 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6034 | 10-15%                  |                10 |              0.06034 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6052 | >20%                    |                10 |              0.06052 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.6061 | >20%                    |                 2 |              0.30305 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6145 | 15-20%                  |                10 |              0.06145 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6166 | >20%                    |                 5 |              0.12332 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.627  | >20%                    |                 5 |              0.1254  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6366 | 10-15%                  |                 2 |              0.3183  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.642  | 5-10%                   |                 5 |              0.1284  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6661 | >20%                    |                 5 |              0.13322 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6667 | >20%                    |                 5 |              0.13334 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6754 | >20%                    |                 5 |              0.13508 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6794 | <5%                     |                 2 |              0.3397  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6844 | 5-10%                   |                 2 |              0.3422  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6877 | >20%                    |                 2 |              0.34385 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6907 | >20%                    |                 2 |              0.34535 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.702  | >20%                    |                10 |              0.0702  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7093 | >20%                    |                 5 |              0.14186 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7151 | >20%                    |                10 |              0.07151 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7239 | 15-20%                  |                 2 |              0.36195 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7343 | 15-20%                  |                 5 |              0.14686 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7399 | >20%                    |                 2 |              0.36995 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7442 | >20%                    |                 5 |              0.14884 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7445 | >20%                    |                10 |              0.07445 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7512 | >20%                    |                 5 |              0.15024 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7563 | >20%                    |                 5 |              0.15126 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.769  | >20%                    |                10 |              0.0769  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7855 | >20%                    |                 2 |              0.39275 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7967 | >20%                    |                10 |              0.07967 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8236 | >20%                    |                 5 |              0.16472 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8317 | 10-15%                  |                 2 |              0.41585 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.836  | >20%                    |                 5 |              0.1672  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8372 | 15-20%                  |                10 |              0.08372 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8425 | >20%                    |                 2 |              0.42125 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8597 | 15-20%                  |                 5 |              0.17194 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8682 | >20%                    |                10 |              0.08682 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8723 | 5-10%                   |                10 |              0.08723 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8775 | >20%                    |                10 |              0.08775 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.906  | <5%                     |                 5 |              0.1812  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9202 | >20%                    |                 5 |              0.18404 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9379 |                         |                 2 |              0.46895 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9482 | >20%                    |                10 |              0.09482 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9507 | 10-15%                  |                 2 |              0.47535 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9623 | >20%                    |                10 |              0.09623 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9684 | >20%                    |                 5 |              0.19368 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9695 | 15-20%                  |                10 |              0.09695 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9699 | >20%                    |                10 |              0.09699 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.977  | 15-20%                  |                10 |              0.0977  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9859 | >20%                    |                10 |              0.09859 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.02   | >20%                    |                10 |              0.102   |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0305 | >20%                    |                10 |              0.10305 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0328 | 15-20%                  |                10 |              0.10328 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      1.0391 | >20%                    |                 2 |              0.51955 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0632 | >20%                    |                10 |              0.10632 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.0687 |                         |                10 |              0.10687 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0701 | >20%                    |                10 |              0.10701 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.077  | >20%                    |                10 |              0.1077  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0783 | >20%                    |                10 |              0.10783 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.0996 | >20%                    |                 5 |              0.21992 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.0996 | >20%                    |                 5 |              0.21992 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1012 | >20%                    |                 5 |              0.22024 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1171 | 5-10%                   |                10 |              0.11171 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1477 | 5-10%                   |                 2 |              0.57385 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1735 |                         |                 2 |              0.58675 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.1863 | >20%                    |                 5 |              0.23726 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2095 | >20%                    |                10 |              0.12095 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.21   |                         |                 5 |              0.242   |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2121 | >20%                    |                10 |              0.12121 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.218  | 5-10%                   |                 2 |              0.609   |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2296 | >20%                    |                10 |              0.12296 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2337 | >20%                    |                 5 |              0.24674 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2382 |                         |                 5 |              0.24764 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3424 | >20%                    |                 2 |              0.6712  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3471 | >20%                    |                10 |              0.13471 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3573 | 10-15%                  |                10 |              0.13573 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3826 | 15-20%                  |                10 |              0.13826 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3835 | >20%                    |                10 |              0.13835 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4936 | 10-15%                  |                 2 |              0.7468  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5339 | >20%                    |                 2 |              0.76695 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5538 | 5-10%                   |                 5 |              0.31076 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5562 | >20%                    |                 5 |              0.31124 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6112 | >20%                    |                10 |              0.16112 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6472 | >20%                    |                10 |              0.16472 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7755 | >20%                    |                 5 |              0.3551  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7794 | 15-20%                  |                10 |              0.17794 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8877 |                         |                10 |              0.18877 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.9441 |                         |                10 |              0.19441 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0354 | 5-10%                   |                 2 |              1.0177  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.132  | 15-20%                  |                 5 |              0.4264  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2257 | 5-10%                   |                10 |              0.22257 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.5579 | >20%                    |                10 |              0.25579 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6185 | >20%                    |                10 |              0.26185 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.062  | >20%                    |                10 |              0.3062  |