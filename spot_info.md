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

Data correct as of 2025-07-06 02:06:17.042162, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1618 | >20%                    |                 5 |              0.03236 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.166  | 10-15%                  |                 5 |              0.0332  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1705 | <5%                     |                 2 |              0.08525 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1807 | >20%                    |                 2 |              0.09035 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1883 | 5-10%                   |                 2 |              0.09415 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | >20%                    |                 5 |              0.039   |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1959 | >20%                    |                 5 |              0.03918 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1994 | >20%                    |                 2 |              0.0997  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2014 | >20%                    |                10 |              0.02014 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2098 | 10-15%                  |                 5 |              0.04196 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2115 | >20%                    |                 2 |              0.10575 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2195 | 15-20%                  |                 2 |              0.10975 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2294 | >20%                    |                 2 |              0.1147  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2335 | >20%                    |                 2 |              0.11675 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2378 | 15-20%                  |                 2 |              0.1189  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | >20%                    |                10 |              0.02395 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2405 | 5-10%                   |                 2 |              0.12025 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2557 | >20%                    |                 2 |              0.12785 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2586 | >20%                    |                 2 |              0.1293  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2705 | 5-10%                   |                10 |              0.02705 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2718 | >20%                    |                 5 |              0.05436 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2767 | >20%                    |                 5 |              0.05534 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2917 | >20%                    |                 2 |              0.14585 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.2996 | >20%                    |                10 |              0.02996 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2996 | <5%                     |                 2 |              0.1498  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3112 | 5-10%                   |                 2 |              0.1556  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3116 | >20%                    |                 2 |              0.1558  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3126 | 10-15%                  |                 2 |              0.1563  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3244 | >20%                    |                 2 |              0.1622  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3277 | 15-20%                  |                 2 |              0.16385 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.329  | >20%                    |                 2 |              0.1645  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3317 | >20%                    |                 5 |              0.06634 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3398 | <5%                     |                 2 |              0.1699  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3432 | 15-20%                  |                 5 |              0.06864 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.354  | >20%                    |                 2 |              0.177   |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3582 | <5%                     |                10 |              0.03582 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3714 | >20%                    |                 2 |              0.1857  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3716 | >20%                    |                 2 |              0.1858  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3751 | >20%                    |                 5 |              0.07502 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3799 | >20%                    |                 2 |              0.18995 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3856 | 5-10%                   |                 2 |              0.1928  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3961 | >20%                    |                10 |              0.03961 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4031 | >20%                    |                 5 |              0.08062 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4043 | >20%                    |                10 |              0.04043 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4044 | 5-10%                   |                 2 |              0.2022  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4052 | >20%                    |                 2 |              0.2026  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4074 | >20%                    |                 2 |              0.2037  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.408  | >20%                    |                 2 |              0.204   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4182 | <5%                     |                 2 |              0.2091  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4336 | >20%                    |                 2 |              0.2168  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.439  | >20%                    |                 5 |              0.0878  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4425 | 15-20%                  |                 5 |              0.0885  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4438 | 10-15%                  |                 2 |              0.2219  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4503 | >20%                    |                 5 |              0.09006 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4504 | >20%                    |                 2 |              0.2252  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4599 | <5%                     |                 2 |              0.22995 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4634 | >20%                    |                10 |              0.04634 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4638 | >20%                    |                 2 |              0.2319  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4641 | >20%                    |                 5 |              0.09282 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4653 | 10-15%                  |                 5 |              0.09306 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.47   | >20%                    |                 2 |              0.235   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4724 | >20%                    |                 2 |              0.2362  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.473  | <5%                     |                 5 |              0.0946  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4749 | 5-10%                   |                 2 |              0.23745 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4755 | <5%                     |                 5 |              0.0951  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4782 | >20%                    |                 5 |              0.09564 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4817 | >20%                    |                 5 |              0.09634 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4858 | >20%                    |                 2 |              0.2429  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4922 | 15-20%                  |                 5 |              0.09844 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4961 | 10-15%                  |                 5 |              0.09922 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4979 | >20%                    |                 2 |              0.24895 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5007 | >20%                    |                 5 |              0.10014 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5009 | >20%                    |                 5 |              0.10018 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5046 | 15-20%                  |                 2 |              0.2523  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5047 | <5%                     |                 5 |              0.10094 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5129 | >20%                    |                 5 |              0.10258 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.516  | 15-20%                  |                 5 |              0.1032  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5184 | >20%                    |                 2 |              0.2592  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5199 | >20%                    |                 5 |              0.10398 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5252 | >20%                    |                 2 |              0.2626  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5275 | >20%                    |                10 |              0.05275 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5286 | >20%                    |                 2 |              0.2643  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5329 | >20%                    |                 5 |              0.10658 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5359 | >20%                    |                 2 |              0.26795 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5507 | >20%                    |                 2 |              0.27535 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5544 | >20%                    |                 5 |              0.11088 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5602 | <5%                     |                 5 |              0.11204 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5647 | >20%                    |                 2 |              0.28235 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5684 | >20%                    |                 2 |              0.2842  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5725 | >20%                    |                 5 |              0.1145  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5738 | >20%                    |                 2 |              0.2869  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.583  | >20%                    |                10 |              0.0583  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5903 | 5-10%                   |                 2 |              0.29515 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5923 | >20%                    |                 2 |              0.29615 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.5945 | >20%                    |                10 |              0.05945 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5958 | >20%                    |                 5 |              0.11916 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5976 | 10-15%                  |                 5 |              0.11952 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6055 | >20%                    |                 5 |              0.1211  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6125 | 10-15%                  |                 5 |              0.1225  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6142 | 15-20%                  |                10 |              0.06142 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6159 | 15-20%                  |                10 |              0.06159 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6329 | 10-15%                  |                 2 |              0.31645 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.633  | >20%                    |                 5 |              0.1266  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6334 | >20%                    |                 5 |              0.12668 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6373 | >20%                    |                 5 |              0.12746 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6449 | 5-10%                   |                 5 |              0.12898 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6457 | >20%                    |                 5 |              0.12914 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6486 | >20%                    |                 5 |              0.12972 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6499 | >20%                    |                10 |              0.06499 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6526 | >20%                    |                 5 |              0.13052 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6551 | >20%                    |                10 |              0.06551 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6631 | >20%                    |                 2 |              0.33155 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6664 | >20%                    |                 5 |              0.13328 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6687 | 5-10%                   |                 5 |              0.13374 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6734 | >20%                    |                 5 |              0.13468 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6972 | >20%                    |                10 |              0.06972 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7017 | <5%                     |                 5 |              0.14034 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.705  | <5%                     |                 5 |              0.141   |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.706  | >20%                    |                 5 |              0.1412  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7131 | 10-15%                  |                10 |              0.07131 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7331 | 10-15%                  |                10 |              0.07331 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7338 | 15-20%                  |                 5 |              0.14676 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7427 | 10-15%                  |                10 |              0.07427 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7435 | >20%                    |                 5 |              0.1487  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.746  | >20%                    |                 5 |              0.1492  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.749  | >20%                    |                 2 |              0.3745  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.751  | 5-10%                   |                10 |              0.0751  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7664 | >20%                    |                10 |              0.07664 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7784 | 15-20%                  |                10 |              0.07784 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7934 | >20%                    |                 5 |              0.15868 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7964 | >20%                    |                 5 |              0.15928 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8015 | <5%                     |                10 |              0.08015 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8028 | 5-10%                   |                10 |              0.08028 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8064 | 10-15%                  |                 5 |              0.16128 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8271 | <5%                     |                10 |              0.08271 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8404 | 10-15%                  |                10 |              0.08404 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8483 | >20%                    |                10 |              0.08483 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8508 | 5-10%                   |                10 |              0.08508 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8512 | >20%                    |                10 |              0.08512 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.858  | 5-10%                   |                10 |              0.0858  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8631 | <5%                     |                10 |              0.08631 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8782 | >20%                    |                10 |              0.08782 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8783 | >20%                    |                10 |              0.08783 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8913 | >20%                    |                10 |              0.08913 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9013 | 15-20%                  |                10 |              0.09013 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9192 | >20%                    |                 5 |              0.18384 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9226 | >20%                    |                10 |              0.09226 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9234 | 5-10%                   |                10 |              0.09234 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9335 | >20%                    |                10 |              0.09335 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9356 | 15-20%                  |                10 |              0.09356 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.948  | >20%                    |                10 |              0.0948  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9544 | 15-20%                  |                10 |              0.09544 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9919 | >20%                    |                 2 |              0.49595 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0076 | >20%                    |                10 |              0.10076 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0113 | >20%                    |                10 |              0.10113 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0114 | >20%                    |                10 |              0.10114 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0269 | <5%                     |                10 |              0.10269 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0359 | >20%                    |                10 |              0.10359 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0386 | <5%                     |                10 |              0.10386 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0459 | 15-20%                  |                10 |              0.10459 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0522 | >20%                    |                 2 |              0.5261  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0697 | <5%                     |                 2 |              0.53485 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0701 | <5%                     |                10 |              0.10701 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.1068 | <5%                     |                10 |              0.11068 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1152 | >20%                    |                10 |              0.11152 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1528 | >20%                    |                10 |              0.11528 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1944 | >20%                    |                 2 |              0.5972  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1972 | >20%                    |                 2 |              0.5986  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2048 | >20%                    |                10 |              0.12048 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.242  | 10-15%                  |                10 |              0.1242  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.243  | >20%                    |                 5 |              0.2486  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2626 | <5%                     |                 5 |              0.25252 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2806 | 15-20%                  |                10 |              0.12806 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3007 | >20%                    |                 5 |              0.26014 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.368  | >20%                    |                10 |              0.1368  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4153 | <5%                     |                 5 |              0.28306 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5001 | >20%                    |                 5 |              0.30002 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6612 | 15-20%                  |                10 |              0.16612 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8431 | >20%                    |                10 |              0.18431 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8575 | <5%                     |                10 |              0.18575 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0686 | 5-10%                   |                10 |              0.20686 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      2.155  | <5%                     |                 2 |              1.0775  |