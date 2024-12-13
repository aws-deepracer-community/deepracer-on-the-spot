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

Data correct as of 2024-12-13 01:47:31.178685, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1846 | 15-20%                  |                 2 |              0.0923  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2125 | 15-20%                  |                 2 |              0.10625 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2223 | 5-10%                   |                 5 |              0.04446 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2276 | 15-20%                  |                 2 |              0.1138  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.229  | >20%                    |                 2 |              0.1145  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.232  | 10-15%                  |                 2 |              0.116   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2356 | <5%                     |                 2 |              0.1178  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2358 | 15-20%                  |                 5 |              0.04716 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2364 | 5-10%                   |                 2 |              0.1182  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2411 | 15-20%                  |                10 |              0.02411 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2458 | <5%                     |                 2 |              0.1229  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2479 | 15-20%                  |                 5 |              0.04958 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.248  | >20%                    |                 2 |              0.124   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2794 | <5%                     |                 2 |              0.1397  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2849 | <5%                     |                 2 |              0.14245 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2902 | 5-10%                   |                 2 |              0.1451  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2902 | <5%                     |                 2 |              0.1451  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2944 | >20%                    |                 2 |              0.1472  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.305  | <5%                     |                 2 |              0.1525  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3129 | <5%                     |                10 |              0.03129 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.313  | >20%                    |                 5 |              0.0626  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3167 | <5%                     |                 2 |              0.15835 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3342 | <5%                     |                 5 |              0.06684 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3366 | 5-10%                   |                 2 |              0.1683  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3391 | 10-15%                  |                 2 |              0.16955 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3414 | >20%                    |                 2 |              0.1707  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3432 | <5%                     |                 5 |              0.06864 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.346  | 10-15%                  |                 2 |              0.173   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3498 | 10-15%                  |                 2 |              0.1749  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3502 | <5%                     |                 2 |              0.1751  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3534 | <5%                     |                 5 |              0.07068 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.359  | >20%                    |                 2 |              0.1795  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3618 | >20%                    |                 5 |              0.07236 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3632 | >20%                    |                10 |              0.03632 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3646 | >20%                    |                 2 |              0.1823  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3658 | 15-20%                  |                 2 |              0.1829  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3719 | >20%                    |                 5 |              0.07438 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.372  | 5-10%                   |                 2 |              0.186   |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3741 | 10-15%                  |                10 |              0.03741 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3757 | <5%                     |                 5 |              0.07514 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3845 | <5%                     |                 5 |              0.0769  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3904 | 5-10%                   |                 2 |              0.1952  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4053 | 5-10%                   |                 2 |              0.20265 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.4098 | 10-15%                  |                 2 |              0.2049  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4127 | 5-10%                   |                 5 |              0.08254 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4136 | >20%                    |                 2 |              0.2068  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4211 | 5-10%                   |                 2 |              0.21055 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4284 | 5-10%                   |                 5 |              0.08568 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4291 | 15-20%                  |                 2 |              0.21455 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4338 | 5-10%                   |                 5 |              0.08676 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.435  | 5-10%                   |                 2 |              0.2175  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4398 | <5%                     |                 5 |              0.08796 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4439 | <5%                     |                 2 |              0.22195 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4591 | 10-15%                  |                 5 |              0.09182 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4601 | >20%                    |                 5 |              0.09202 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4631 | >20%                    |                 5 |              0.09262 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4637 | 5-10%                   |                 5 |              0.09274 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4638 | <5%                     |                 5 |              0.09276 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4649 | 10-15%                  |                 2 |              0.23245 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.466  | >20%                    |                10 |              0.0466  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4672 | 5-10%                   |                 2 |              0.2336  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4755 | >20%                    |                 5 |              0.0951  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4801 | >20%                    |                 2 |              0.24005 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4803 | 15-20%                  |                 5 |              0.09606 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4807 | 10-15%                  |                 2 |              0.24035 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4855 | >20%                    |                10 |              0.04855 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4894 | 10-15%                  |                 2 |              0.2447  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.5005 | 5-10%                   |                 5 |              0.1001  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5018 | 15-20%                  |                 5 |              0.10036 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5039 | <5%                     |                 5 |              0.10078 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5044 | 5-10%                   |                 5 |              0.10088 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5072 | <5%                     |                 5 |              0.10144 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5163 | 5-10%                   |                10 |              0.05163 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.517  | 15-20%                  |                10 |              0.0517  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5223 | >20%                    |                 5 |              0.10446 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5247 | >20%                    |                 5 |              0.10494 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5278 | 10-15%                  |                 2 |              0.2639  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5337 | 10-15%                  |                 5 |              0.10674 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5351 | 5-10%                   |                 5 |              0.10702 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5357 | >20%                    |                 2 |              0.26785 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5378 | 10-15%                  |                10 |              0.05378 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5471 | >20%                    |                 2 |              0.27355 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5495 | 10-15%                  |                 5 |              0.1099  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5509 | >20%                    |                 5 |              0.11018 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5538 | 15-20%                  |                 5 |              0.11076 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 | <5%                     |                10 |              0.05663 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5873 | <5%                     |                 5 |              0.11746 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5955 | >20%                    |                10 |              0.05955 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.5979 | 5-10%                   |                 2 |              0.29895 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6188 | >20%                    |                 5 |              0.12376 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6479 | 5-10%                   |                10 |              0.06479 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6488 | >20%                    |                10 |              0.06488 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.658  | <5%                     |                 5 |              0.1316  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6594 | 10-15%                  |                10 |              0.06594 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.66   | 5-10%                   |                10 |              0.066   |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6707 | >20%                    |                 2 |              0.33535 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6711 | 15-20%                  |                 5 |              0.13422 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.678  | <5%                     |                 5 |              0.1356  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6826 | 10-15%                  |                 5 |              0.13652 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6842 | >20%                    |                10 |              0.06842 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7371 | >20%                    |                 5 |              0.14742 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7374 | >20%                    |                 5 |              0.14748 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7415 | <5%                     |                 2 |              0.37075 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7461 | >20%                    |                 5 |              0.14922 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7604 | >20%                    |                10 |              0.07604 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.776  | 5-10%                   |                10 |              0.0776  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.7828 | <5%                     |                10 |              0.07828 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7952 | <5%                     |                 5 |              0.15904 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7982 | <5%                     |                10 |              0.07982 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8056 | 15-20%                  |                10 |              0.08056 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8089 | >20%                    |                10 |              0.08089 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8304 | 5-10%                   |                10 |              0.08304 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8315 | <5%                     |                10 |              0.08315 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.833  | <5%                     |                10 |              0.0833  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8358 | 10-15%                  |                10 |              0.08358 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8546 | 5-10%                   |                10 |              0.08546 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8547 | 5-10%                   |                 2 |              0.42735 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8561 | 10-15%                  |                10 |              0.08561 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8568 | 10-15%                  |                10 |              0.08568 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.864  | 5-10%                   |                10 |              0.0864  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.867  | 5-10%                   |                10 |              0.0867  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9138 | 15-20%                  |                10 |              0.09138 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9196 | 5-10%                   |                10 |              0.09196 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9315 | <5%                     |                 5 |              0.1863  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9389 | >20%                    |                10 |              0.09389 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9402 | >20%                    |                10 |              0.09402 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9495 | 5-10%                   |                10 |              0.09495 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9701 | 10-15%                  |                10 |              0.09701 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9962 | 5-10%                   |                10 |              0.09962 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0795 | >20%                    |                10 |              0.10795 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0847 | <5%                     |                10 |              0.10847 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.0865 | <5%                     |                 5 |              0.2173  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1493 | 5-10%                   |                10 |              0.11493 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1589 | >20%                    |                10 |              0.11589 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2297 | >20%                    |                10 |              0.12297 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4522 | 5-10%                   |                10 |              0.14522 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.6628 | 5-10%                   |                10 |              0.16628 |