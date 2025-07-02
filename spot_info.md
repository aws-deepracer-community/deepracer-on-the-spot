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

Data correct as of 2025-07-02 01:57:21.816505, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1589 | <5%                     |                 2 |              0.07945 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1664 | >20%                    |                 5 |              0.03328 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1759 | >20%                    |                 5 |              0.03518 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1942 | 15-20%                  |                 2 |              0.0971  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1943 | 15-20%                  |                 5 |              0.03886 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.1999 | >20%                    |                 5 |              0.03998 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2014 | 10-15%                  |                10 |              0.02014 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2121 | >20%                    |                 2 |              0.10605 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.213  | >20%                    |                 2 |              0.1065  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2165 | 15-20%                  |                 2 |              0.10825 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2193 | >20%                    |                 2 |              0.10965 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2275 | 5-10%                   |                 2 |              0.11375 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2294 | 15-20%                  |                 2 |              0.1147  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2296 | >20%                    |                 2 |              0.1148  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2342 | <5%                     |                 5 |              0.04684 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2405 | >20%                    |                10 |              0.02405 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.243  | 15-20%                  |                 2 |              0.1215  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2549 | >20%                    |                 2 |              0.12745 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.269  | >20%                    |                 2 |              0.1345  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2736 | >20%                    |                 5 |              0.05472 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2765 | 5-10%                   |                10 |              0.02765 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2962 | <5%                     |                 2 |              0.1481  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.301  | >20%                    |                 2 |              0.1505  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3024 | >20%                    |                 2 |              0.1512  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3066 | >20%                    |                 2 |              0.1533  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3102 | >20%                    |                 2 |              0.1551  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3119 | 15-20%                  |                 5 |              0.06238 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3172 | >20%                    |                 2 |              0.1586  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.32   | >20%                    |                 2 |              0.16    |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3218 | >20%                    |                10 |              0.03218 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3231 | 15-20%                  |                10 |              0.03231 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3363 | 10-15%                  |                 2 |              0.16815 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3364 | >20%                    |                 5 |              0.06728 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3403 | <5%                     |                 2 |              0.17015 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3489 | >20%                    |                 2 |              0.17445 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.355  | 10-15%                  |                 2 |              0.1775  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3596 | 15-20%                  |                 5 |              0.07192 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3692 | >20%                    |                 2 |              0.1846  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3709 | 5-10%                   |                 2 |              0.18545 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3803 | >20%                    |                 2 |              0.19015 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3827 | >20%                    |                 5 |              0.07654 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.398  | 10-15%                  |                 2 |              0.199   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4004 | >20%                    |                 5 |              0.08008 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4014 | >20%                    |                 2 |              0.2007  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.404  | >20%                    |                 2 |              0.202   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.42   | 10-15%                  |                 5 |              0.084   |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4212 | <5%                     |                10 |              0.04212 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4227 | >20%                    |                 2 |              0.21135 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4232 | <5%                     |                 2 |              0.2116  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4285 | 10-15%                  |                 2 |              0.21425 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4298 | 15-20%                  |                10 |              0.04298 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4376 | >20%                    |                 5 |              0.08752 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4423 | >20%                    |                 2 |              0.22115 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4559 | <5%                     |                 5 |              0.09118 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4565 | 15-20%                  |                 5 |              0.0913  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4582 | >20%                    |                 5 |              0.09164 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4605 | >20%                    |                 5 |              0.0921  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.462  | >20%                    |                 5 |              0.0924  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4647 | >20%                    |                 2 |              0.23235 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4675 | >20%                    |                 2 |              0.23375 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4682 | 5-10%                   |                 2 |              0.2341  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4683 | >20%                    |                 2 |              0.23415 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4696 | >20%                    |                 5 |              0.09392 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.47   | >20%                    |                 2 |              0.235   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4733 | 5-10%                   |                 2 |              0.23665 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4739 | 10-15%                  |                 5 |              0.09478 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4758 | >20%                    |                 5 |              0.09516 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4816 | 10-15%                  |                 5 |              0.09632 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4903 | <5%                     |                 5 |              0.09806 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4913 | >20%                    |                 2 |              0.24565 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4928 | 15-20%                  |                 2 |              0.2464  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.499  | >20%                    |                 2 |              0.2495  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5026 | >20%                    |                 2 |              0.2513  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5026 | >20%                    |                 5 |              0.10052 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.504  | >20%                    |                10 |              0.0504  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5153 | >20%                    |                 2 |              0.25765 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5157 | >20%                    |                 2 |              0.25785 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5176 | >20%                    |                 2 |              0.2588  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.52   | 5-10%                   |                 5 |              0.104   |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.521  | >20%                    |                 5 |              0.1042  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.526  | 10-15%                  |                 2 |              0.263   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5275 | 10-15%                  |                 5 |              0.1055  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5353 | <5%                     |                 5 |              0.10706 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5382 | >20%                    |                10 |              0.05382 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5402 | 15-20%                  |                 5 |              0.10804 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5436 | >20%                    |                10 |              0.05436 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5451 | >20%                    |                 5 |              0.10902 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5451 | >20%                    |                 2 |              0.27255 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5591 | 15-20%                  |                 2 |              0.27955 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5607 | >20%                    |                 5 |              0.11214 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5708 | 15-20%                  |                 2 |              0.2854  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5711 | >20%                    |                 5 |              0.11422 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5804 | >20%                    |                 2 |              0.2902  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5832 | >20%                    |                 5 |              0.11664 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5879 | >20%                    |                 5 |              0.11758 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5946 | <5%                     |                 2 |              0.2973  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5987 | >20%                    |                 5 |              0.11974 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6003 | <5%                     |                 5 |              0.12006 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6051 | >20%                    |                 5 |              0.12102 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6238 | >20%                    |                 5 |              0.12476 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6258 | 10-15%                  |                 5 |              0.12516 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6269 | >20%                    |                 5 |              0.12538 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6285 | >20%                    |                 5 |              0.1257  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6293 | 10-15%                  |                10 |              0.06293 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6297 | >20%                    |                 5 |              0.12594 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6304 | 5-10%                   |                 2 |              0.3152  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6376 | >20%                    |                10 |              0.06376 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6429 | >20%                    |                10 |              0.06429 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.6465 | >20%                    |                10 |              0.06465 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6583 | >20%                    |                 5 |              0.13166 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6591 | >20%                    |                 2 |              0.32955 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6668 | >20%                    |                 5 |              0.13336 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6721 | >20%                    |                 5 |              0.13442 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.673  | <5%                     |                 5 |              0.1346  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6734 | 10-15%                  |                 2 |              0.3367  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6772 | <5%                     |                 5 |              0.13544 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6974 | >20%                    |                 5 |              0.13948 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6994 | 15-20%                  |                10 |              0.06994 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7082 | <5%                     |                 5 |              0.14164 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7133 | >20%                    |                10 |              0.07133 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7169 | <5%                     |                 5 |              0.14338 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7171 | 10-15%                  |                 5 |              0.14342 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7211 | >20%                    |                10 |              0.07211 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7288 | >20%                    |                 5 |              0.14576 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7298 | 10-15%                  |                 5 |              0.14596 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7329 | 15-20%                  |                10 |              0.07329 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7339 | >20%                    |                10 |              0.07339 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7617 | >20%                    |                10 |              0.07617 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7699 | >20%                    |                10 |              0.07699 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7801 | 5-10%                   |                 5 |              0.15602 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7842 | >20%                    |                 5 |              0.15684 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7878 | >20%                    |                10 |              0.07878 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7944 | <5%                     |                10 |              0.07944 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7968 | 15-20%                  |                10 |              0.07968 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8037 | <5%                     |                10 |              0.08037 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8059 | 15-20%                  |                10 |              0.08059 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8112 | 10-15%                  |                10 |              0.08112 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8234 | >20%                    |                10 |              0.08234 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8262 | >20%                    |                10 |              0.08262 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.846  | <5%                     |                10 |              0.0846  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8482 | <5%                     |                10 |              0.08482 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8666 | 15-20%                  |                10 |              0.08666 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8696 | >20%                    |                10 |              0.08696 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8785 | >20%                    |                10 |              0.08785 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8924 | >20%                    |                10 |              0.08924 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9029 | >20%                    |                10 |              0.09029 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9064 | >20%                    |                10 |              0.09064 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9079 | >20%                    |                10 |              0.09079 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9107 | >20%                    |                10 |              0.09107 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9295 | >20%                    |                10 |              0.09295 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9365 | >20%                    |                10 |              0.09365 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9392 | 15-20%                  |                10 |              0.09392 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9582 | >20%                    |                10 |              0.09582 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9796 | >20%                    |                10 |              0.09796 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9904 | >20%                    |                 2 |              0.4952  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0094 | >20%                    |                 5 |              0.20188 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.016  | >20%                    |                10 |              0.1016  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.021  | >20%                    |                10 |              0.1021  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0355 | >20%                    |                 2 |              0.51775 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0358 | >20%                    |                10 |              0.10358 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0647 | <5%                     |                10 |              0.10647 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0656 | 15-20%                  |                10 |              0.10656 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0675 | 10-15%                  |                10 |              0.10675 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0845 | <5%                     |                 2 |              0.54225 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0945 | >20%                    |                 2 |              0.54725 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1001 | >20%                    |                10 |              0.11001 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1032 | 15-20%                  |                10 |              0.11032 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1643 | >20%                    |                10 |              0.11643 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2016 | 10-15%                  |                10 |              0.12016 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.211  | 15-20%                  |                10 |              0.1211  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2227 | >20%                    |                 2 |              0.61135 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2708 | <5%                     |                 5 |              0.25416 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2844 | >20%                    |                10 |              0.12844 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3201 | >20%                    |                 5 |              0.26402 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.325  | >20%                    |                 5 |              0.265   |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4238 | <5%                     |                 5 |              0.28476 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4309 | >20%                    |                 5 |              0.28618 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5735 | 10-15%                  |                10 |              0.15735 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8406 | >20%                    |                10 |              0.18406 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8481 | <5%                     |                10 |              0.18481 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.132  | <5%                     |                10 |              0.2132  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      2.3555 | <5%                     |                 2 |              1.17775 |