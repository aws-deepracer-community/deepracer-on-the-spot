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

Data correct as of 2026-07-16 02:53:27.915459, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1323 | >20%                    |                 2 |              0.06615 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1483 | >20%                    |                 2 |              0.07415 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1859 | >20%                    |                 2 |              0.09295 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.238  | 15-20%                  |                 2 |              0.119   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2418 | >20%                    |                 2 |              0.1209  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2467 | >20%                    |                 2 |              0.12335 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2513 | >20%                    |                 2 |              0.12565 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2546 | >20%                    |                 2 |              0.1273  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2595 | >20%                    |                 2 |              0.12975 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2656 | >20%                    |                 2 |              0.1328  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2673 | 15-20%                  |                 2 |              0.13365 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2755 | 5-10%                   |                10 |              0.02755 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2789 | >20%                    |                 2 |              0.13945 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3057 | 10-15%                  |                 2 |              0.15285 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3083 | >20%                    |                 5 |              0.06166 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3142 | 15-20%                  |                 2 |              0.1571  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3188 | >20%                    |                 2 |              0.1594  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3245 | >20%                    |                 2 |              0.16225 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3282 | 15-20%                  |                 5 |              0.06564 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3357 | 15-20%                  |                 5 |              0.06714 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3418 | >20%                    |                 5 |              0.06836 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3489 | >20%                    |                 5 |              0.06978 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3569 | >20%                    |                 2 |              0.17845 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3602 | <5%                     |                 2 |              0.1801  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3614 | >20%                    |                10 |              0.03614 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3678 | >20%                    |                 5 |              0.07356 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3704 | 5-10%                   |                10 |              0.03704 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3752 | >20%                    |                 5 |              0.07504 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3813 | >20%                    |                 2 |              0.19065 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3885 | >20%                    |                10 |              0.03885 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3899 | >20%                    |                 5 |              0.07798 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3907 | 15-20%                  |                 5 |              0.07814 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3963 | 10-15%                  |                 2 |              0.19815 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3989 | 5-10%                   |                10 |              0.03989 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4039 | >20%                    |                 5 |              0.08078 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4169 | >20%                    |                10 |              0.04169 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4183 | 10-15%                  |                 2 |              0.20915 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4253 | >20%                    |                 2 |              0.21265 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4335 | >20%                    |                 5 |              0.0867  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4346 | >20%                    |                 5 |              0.08692 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4358 | >20%                    |                 2 |              0.2179  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.437  | 15-20%                  |                 2 |              0.2185  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4389 | >20%                    |                 5 |              0.08778 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4439 | >20%                    |                10 |              0.04439 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4493 | >20%                    |                 2 |              0.22465 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4531 | <5%                     |                 2 |              0.22655 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4552 | >20%                    |                 2 |              0.2276  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4711 | >20%                    |                 2 |              0.23555 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4722 | 10-15%                  |                 2 |              0.2361  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4818 | >20%                    |                 5 |              0.09636 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4841 | >20%                    |                 5 |              0.09682 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.485  | >20%                    |                 2 |              0.2425  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4947 | <5%                     |                 2 |              0.24735 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5116 | >20%                    |                 5 |              0.10232 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.517  | >20%                    |                 5 |              0.1034  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5172 | >20%                    |                 2 |              0.2586  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5329 | >20%                    |                 5 |              0.10658 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5334 | 15-20%                  |                 2 |              0.2667  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5335 | >20%                    |                 5 |              0.1067  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5396 | >20%                    |                10 |              0.05396 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5428 | >20%                    |                10 |              0.05428 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5537 | >20%                    |                10 |              0.05537 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5571 | >20%                    |                10 |              0.05571 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5598 | 15-20%                  |                 2 |              0.2799  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5626 | 5-10%                   |                 2 |              0.2813  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.5665 |                         |                 2 |              0.28325 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5723 | >20%                    |                 5 |              0.11446 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5821 | 10-15%                  |                 5 |              0.11642 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5839 | >20%                    |                 5 |              0.11678 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5851 | >20%                    |                 5 |              0.11702 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5869 | >20%                    |                 5 |              0.11738 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5923 | >20%                    |                 2 |              0.29615 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5999 | 5-10%                   |                 5 |              0.11998 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6006 | >20%                    |                 2 |              0.3003  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6025 | >20%                    |                 5 |              0.1205  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6062 | >20%                    |                 5 |              0.12124 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6178 | >20%                    |                 5 |              0.12356 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6327 | 15-20%                  |                 5 |              0.12654 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6364 | >20%                    |                10 |              0.06364 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6397 | >20%                    |                 2 |              0.31985 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6448 | <5%                     |                 5 |              0.12896 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6482 | 10-15%                  |                10 |              0.06482 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6515 | >20%                    |                10 |              0.06515 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6552 | >20%                    |                10 |              0.06552 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6791 | >20%                    |                 5 |              0.13582 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6872 | >20%                    |                10 |              0.06872 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6909 | >20%                    |                 2 |              0.34545 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.692  | >20%                    |                 5 |              0.1384  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6952 | >20%                    |                 2 |              0.3476  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6959 |                         |                 2 |              0.34795 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7009 | >20%                    |                 5 |              0.14018 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7154 | >20%                    |                 2 |              0.3577  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7172 | >20%                    |                10 |              0.07172 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7421 | >20%                    |                 5 |              0.14842 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7424 | >20%                    |                10 |              0.07424 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7432 | >20%                    |                 5 |              0.14864 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7455 | 15-20%                  |                10 |              0.07455 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7503 | >20%                    |                10 |              0.07503 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7743 | 10-15%                  |                 2 |              0.38715 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8025 | >20%                    |                 5 |              0.1605  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8039 | >20%                    |                10 |              0.08039 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8045 | >20%                    |                10 |              0.08045 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8269 | <5%                     |                10 |              0.08269 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.827  | 5-10%                   |                10 |              0.0827  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8333 | >20%                    |                10 |              0.08333 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.84   | >20%                    |                 2 |              0.42    |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8442 | >20%                    |                 5 |              0.16884 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8482 | >20%                    |                10 |              0.08482 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8605 | 15-20%                  |                10 |              0.08605 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8722 | >20%                    |                 2 |              0.4361  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8734 | 10-15%                  |                 2 |              0.4367  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8867 | 15-20%                  |                10 |              0.08867 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.889  | >20%                    |                10 |              0.0889  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8891 | >20%                    |                 5 |              0.17782 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8942 | 5-10%                   |                 2 |              0.4471  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.8988 |                         |                10 |              0.08988 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9162 | 15-20%                  |                10 |              0.09162 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9325 | 5-10%                   |                10 |              0.09325 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9449 | >20%                    |                10 |              0.09449 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9488 | >20%                    |                 5 |              0.18976 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9547 |                         |                 5 |              0.19094 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9727 | >20%                    |                 5 |              0.19454 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9738 | >20%                    |                 5 |              0.19476 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0012 | >20%                    |                 5 |              0.20024 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0121 | >20%                    |                10 |              0.10121 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0164 | >20%                    |                 5 |              0.20328 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0194 | 15-20%                  |                10 |              0.10194 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0228 | >20%                    |                10 |              0.10228 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0458 | 5-10%                   |                 5 |              0.20916 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0502 | >20%                    |                 5 |              0.21004 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.056  | >20%                    |                10 |              0.1056  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0729 | >20%                    |                 2 |              0.53645 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0733 | 10-15%                  |                 2 |              0.53665 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0809 | >20%                    |                 5 |              0.21618 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0876 | >20%                    |                10 |              0.10876 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0897 | >20%                    |                10 |              0.10897 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1141 | 15-20%                  |                10 |              0.11141 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1604 | >20%                    |                10 |              0.11604 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1668 |                         |                10 |              0.11668 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2165 | 5-10%                   |                10 |              0.12165 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2396 |                         |                 5 |              0.24792 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2434 | >20%                    |                10 |              0.12434 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2799 | 15-20%                  |                10 |              0.12799 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2934 | >20%                    |                10 |              0.12934 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2974 | >20%                    |                 5 |              0.25948 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4316 | >20%                    |                10 |              0.14316 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4479 | 15-20%                  |                10 |              0.14479 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5366 | 15-20%                  |                 5 |              0.30732 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5438 | >20%                    |                10 |              0.15438 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.546  | >20%                    |                 5 |              0.3092  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.6136 | 10-15%                  |                10 |              0.16136 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.6753 | >20%                    |                 5 |              0.33506 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0213 | 5-10%                   |                 2 |              1.01065 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      2.0468 | 5-10%                   |                 2 |              1.0234  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1291 | >20%                    |                10 |              0.21291 |