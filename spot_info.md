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

Data correct as of 2026-09-15 04:10:28.522977, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1262 | >20%                    |                 2 |              0.0631  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1792 | 15-20%                  |                 2 |              0.0896  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2119 | >20%                    |                 5 |              0.04238 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2235 | >20%                    |                 2 |              0.11175 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2265 | >20%                    |                 2 |              0.11325 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2381 | >20%                    |                 2 |              0.11905 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.257  | >20%                    |                 2 |              0.1285  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2586 | 15-20%                  |                 5 |              0.05172 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2598 | >20%                    |                 2 |              0.1299  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2846 | >20%                    |                 2 |              0.1423  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2891 | 15-20%                  |                 2 |              0.14455 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3049 | >20%                    |                 2 |              0.15245 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3075 | >20%                    |                 2 |              0.15375 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.3313 |                         |                 5 |              0.06626 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3537 | >20%                    |                 2 |              0.17685 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3648 | 10-15%                  |                 2 |              0.1824  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3675 | 15-20%                  |                 2 |              0.18375 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3696 | >20%                    |                 2 |              0.1848  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3696 | >20%                    |                 5 |              0.07392 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3782 | 10-15%                  |                 2 |              0.1891  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3827 | >20%                    |                 5 |              0.07654 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3842 | >20%                    |                 5 |              0.07684 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3864 | <5%                     |                 2 |              0.1932  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3865 | >20%                    |                 5 |              0.0773  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3923 | >20%                    |                 2 |              0.19615 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3982 | >20%                    |                 5 |              0.07964 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4034 | >20%                    |                 5 |              0.08068 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4137 | >20%                    |                 2 |              0.20685 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4188 | >20%                    |                10 |              0.04188 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.43   | 15-20%                  |                 2 |              0.215   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4326 | >20%                    |                 2 |              0.2163  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4328 | >20%                    |                 2 |              0.2164  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4389 | >20%                    |                10 |              0.04389 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4504 | >20%                    |                 2 |              0.2252  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4603 | 10-15%                  |                10 |              0.04603 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4788 | >20%                    |                 5 |              0.09576 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.479  | 10-15%                  |                 2 |              0.2395  |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4841 |                         |                 2 |              0.24205 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4907 | 15-20%                  |                 2 |              0.24535 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4955 | >20%                    |                 5 |              0.0991  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4959 | >20%                    |                 5 |              0.09918 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4995 | >20%                    |                 5 |              0.0999  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5018 | >20%                    |                 5 |              0.10036 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5023 | >20%                    |                 5 |              0.10046 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.504  | >20%                    |                 2 |              0.252   |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5052 | <5%                     |                 2 |              0.2526  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5125 | >20%                    |                 5 |              0.1025  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5233 | 5-10%                   |                10 |              0.05233 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.525  | >20%                    |                10 |              0.0525  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5453 | >20%                    |                 2 |              0.27265 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5492 | >20%                    |                 5 |              0.10984 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5578 | >20%                    |                 5 |              0.11156 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5735 | >20%                    |                 5 |              0.1147  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5754 | >20%                    |                 5 |              0.11508 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5856 | >20%                    |                 2 |              0.2928  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5946 | 10-15%                  |                 5 |              0.11892 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5965 | >20%                    |                 2 |              0.29825 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6108 | >20%                    |                 2 |              0.3054  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6119 | 5-10%                   |                10 |              0.06119 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6195 | >20%                    |                 5 |              0.1239  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6248 | >20%                    |                 5 |              0.12496 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6249 | >20%                    |                10 |              0.06249 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6346 | 15-20%                  |                10 |              0.06346 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.637  | 5-10%                   |                 5 |              0.1274  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6375 | 10-15%                  |                 2 |              0.31875 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.6433 | >20%                    |                 2 |              0.32165 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6486 | >20%                    |                 5 |              0.12972 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6616 | >20%                    |                10 |              0.06616 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6646 | >20%                    |                 5 |              0.13292 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6671 | >20%                    |                 2 |              0.33355 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6674 | >20%                    |                 5 |              0.13348 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6735 | <5%                     |                10 |              0.06735 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6787 | <5%                     |                 2 |              0.33935 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6864 | 5-10%                   |                 2 |              0.3432  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6937 | 15-20%                  |                10 |              0.06937 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7179 | >20%                    |                 5 |              0.14358 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7185 | >20%                    |                10 |              0.07185 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7278 | >20%                    |                 5 |              0.14556 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7356 | 15-20%                  |                 5 |              0.14712 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.748  | >20%                    |                 5 |              0.1496  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.751  | >20%                    |                10 |              0.0751  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7551 | >20%                    |                10 |              0.07551 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7706 | >20%                    |                 2 |              0.3853  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.806  | >20%                    |                 5 |              0.1612  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8329 | >20%                    |                 5 |              0.16658 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8333 | >20%                    |                10 |              0.08333 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8347 | 15-20%                  |                10 |              0.08347 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8501 | 15-20%                  |                 5 |              0.17002 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8529 | >20%                    |                 2 |              0.42645 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8584 | 15-20%                  |                 2 |              0.4292  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8677 | >20%                    |                10 |              0.08677 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8853 | >20%                    |                10 |              0.08853 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8867 | 5-10%                   |                10 |              0.08867 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8887 | 10-15%                  |                 2 |              0.44435 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.8954 | >20%                    |                 2 |              0.4477  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9046 | >20%                    |                 5 |              0.18092 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9053 | 10-15%                  |                 2 |              0.45265 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9066 | <5%                     |                 5 |              0.18132 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9518 |                         |                 2 |              0.4759  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9544 | >20%                    |                 2 |              0.4772  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9674 | >20%                    |                10 |              0.09674 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9733 | 15-20%                  |                10 |              0.09733 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9852 | >20%                    |                 5 |              0.19704 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9881 | >20%                    |                10 |              0.09881 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9991 | >20%                    |                10 |              0.09991 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0145 | >20%                    |                10 |              0.10145 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0205 | >20%                    |                 5 |              0.2041  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0223 | >20%                    |                10 |              0.10223 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0278 | >20%                    |                10 |              0.10278 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.037  | 15-20%                  |                10 |              0.1037  |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.0735 |                         |                10 |              0.10735 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.0842 | >20%                    |                 5 |              0.21684 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1006 | >20%                    |                 5 |              0.22012 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.116  | 5-10%                   |                10 |              0.1116  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1164 | >20%                    |                10 |              0.11164 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1275 | >20%                    |                10 |              0.11275 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1322 | >20%                    |                 5 |              0.22644 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1472 | >20%                    |                 5 |              0.22944 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1568 | >20%                    |                10 |              0.11568 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1651 | 5-10%                   |                 2 |              0.58255 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.167  | >20%                    |                10 |              0.1167  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1716 | 10-15%                  |                 2 |              0.5858  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.185  |                         |                 2 |              0.5925  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1962 |                         |                 5 |              0.23924 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2067 | >20%                    |                10 |              0.12067 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.211  | >20%                    |                10 |              0.1211  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2537 |                         |                 5 |              0.25074 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2933 | >20%                    |                10 |              0.12933 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3197 | 15-20%                  |                10 |              0.13197 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3301 | >20%                    |                10 |              0.13301 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3551 | 10-15%                  |                10 |              0.13551 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3711 | >20%                    |                 2 |              0.68555 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3727 | >20%                    |                10 |              0.13727 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3759 | >20%                    |                10 |              0.13759 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3925 | >20%                    |                 5 |              0.2785  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.394  | 15-20%                  |                10 |              0.1394  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.5077 | >20%                    |                 5 |              0.30154 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5166 | 5-10%                   |                 5 |              0.30332 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5464 | >20%                    |                 2 |              0.7732  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6409 | >20%                    |                10 |              0.16409 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.6631 | 5-10%                   |                 2 |              0.83155 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7007 |                         |                10 |              0.17007 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.8095 | >20%                    |                 5 |              0.3619  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8567 |                         |                10 |              0.18567 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.925  | 15-20%                  |                10 |              0.1925  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0183 | 5-10%                   |                 2 |              1.00915 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.1187 | 15-20%                  |                 5 |              0.42374 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2328 | 5-10%                   |                10 |              0.22328 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.5911 | >20%                    |                10 |              0.25911 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6507 | >20%                    |                10 |              0.26507 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0082 | >20%                    |                10 |              0.30082 |